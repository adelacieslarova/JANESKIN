# =============================================================
#  Priprava fotek pro web JANESKIN
# =============================================================
#
#  Co delá:
#   - vezme originál ze slozky foto/
#   - srovná EXIF rotaci a zmensi na max 1600 px
#   - sjednotí vyvázení bílé a jas, aby fotky nebyly jednou dozluta
#     a jednou dobíla (salon má zlutou stenu, kazdá fotka jinak)
#   - ulozí do public/images/salon/ pod SEO názvem
#
#  Pouzití:
#   1) do $jobs dopln dvojice: vzor zdrojového souboru + cílový název
#   2) .\tools\fotky-na-web.ps1
#
#  Skript vzdy vychází z originálu, takze se úprava nedá aplikovat
#  dvakrát. Kdyz fotku prepocítás znovu, vysledek je stejný.
#
#  Sila korekce:
#   - mobilní fotky        wbStrength 0.60 / expStrength 0.50
#   - profesionální fotky  wbStrength 0.45 / expStrength 0.45
#     (uz jsou nafocené vyrovnane, silná korekce by je vymyla)
#
#  Barevné svetlo (LED dóm, PDT lampa) korekcí projde spatne —
#  takové fotky nechávej bez úpravy nebo s wbStrength 0.
# =============================================================

Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$src = Join-Path $root "foto"
$dst = Join-Path $root "public\images\salon"

# --- SEM dopln nové fotky -------------------------------------
$jobs = @(
  # @{ pat = "DSC_1234.jpg"; name = "kosmeticky-salon-neco.jpg" }
)
# --------------------------------------------------------------

$targetRatio = @(1.035, 1.000, 0.945)   # mírne teplý neutrál
$targetLum   = 132.0
$wbStrength  = 0.50
$expStrength = 0.50

if (-not (Test-Path $dst)) { New-Item -ItemType Directory -Path $dst | Out-Null }

$enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 84)

function Clamp([double]$v, [double]$lo, [double]$hi) {
  if ($v -lt $lo) { return $lo }; if ($v -gt $hi) { return $hi }; return $v
}

if ($jobs.Count -eq 0) { "Do promenné `$jobs nic nevyplneno — není co delat."; return }

foreach ($job in $jobs) {
  $f = Get-ChildItem -Path $src -Filter $job.pat | Sort-Object Name | Select-Object -First 1
  if (-not $f) { "CHYBI zdroj: $($job.pat)"; continue }

  $img = [System.Drawing.Bitmap]::FromFile($f.FullName)
  if ($img.PropertyIdList -contains 274) {
    $o = $img.GetPropertyItem(274).Value[0]
    switch ($o) {
      3 { $img.RotateFlip("Rotate180FlipNone") }
      6 { $img.RotateFlip("Rotate90FlipNone") }
      8 { $img.RotateFlip("Rotate270FlipNone") }
    }
  }

  $scale = [math]::Min(1.0, [math]::Min(1600.0 / $img.Width, 1600.0 / $img.Height))
  $w = [int]($img.Width * $scale); $h = [int]($img.Height * $scale)
  $bmp = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.DrawImage($img, 0, 0, $w, $h)
  $g.Dispose(); $img.Dispose()

  $rect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
  $data = $bmp.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
  $stride = $data.Stride
  $bytes = New-Object byte[] ($stride * $h)
  [System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $bytes.Length)

  # prumery kanálu (kazdý druhý pixel stací)
  [double]$sB = 0; [double]$sG = 0; [double]$sR = 0; [double]$n = 0
  for ($y = 0; $y -lt $h; $y += 2) {
    $row = $y * $stride
    for ($x = 0; $x -lt $w; $x += 2) {
      $i = $row + $x * 3
      $sB += $bytes[$i]; $sG += $bytes[$i + 1]; $sR += $bytes[$i + 2]; $n++
    }
  }
  $mB = $sB / $n; $mG = $sG / $n; $mR = $sR / $n
  $gray = ($mR + $mG + $mB) / 3.0
  $lum = 0.2126 * $mR + 0.7152 * $mG + 0.0722 * $mB

  $gR = 1 + ((Clamp ($gray * $targetRatio[0] / $mR) 0.85 1.18) - 1) * $wbStrength
  $gG = 1 + ((Clamp ($gray * $targetRatio[1] / $mG) 0.85 1.18) - 1) * $wbStrength
  $gB = 1 + ((Clamp ($gray * $targetRatio[2] / $mB) 0.85 1.18) - 1) * $wbStrength
  $ex = 1 + ((Clamp ($targetLum / $lum) 0.88 1.15) - 1) * $expStrength

  $lutR = New-Object byte[] 256; $lutG = New-Object byte[] 256; $lutB = New-Object byte[] 256
  for ($v = 0; $v -lt 256; $v++) {
    $lutR[$v] = [byte][math]::Round((Clamp ($v * $gR * $ex) 0 255))
    $lutG[$v] = [byte][math]::Round((Clamp ($v * $gG * $ex) 0 255))
    $lutB[$v] = [byte][math]::Round((Clamp ($v * $gB * $ex) 0 255))
  }
  for ($y = 0; $y -lt $h; $y++) {
    $row = $y * $stride
    for ($x = 0; $x -lt $w; $x++) {
      $i = $row + $x * 3
      $bytes[$i] = $lutB[$bytes[$i]]; $bytes[$i + 1] = $lutG[$bytes[$i + 1]]; $bytes[$i + 2] = $lutR[$bytes[$i + 2]]
    }
  }
  [System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, $data.Scan0, $bytes.Length)
  $bmp.UnlockBits($data)

  $t = Join-Path $dst $job.name
  $bmp.Save($t, $enc, $ep)
  "{0,-46} <- {1,-28} {2}x{3}  {4} kB" -f $job.name, $f.Name, $w, $h, [int]((Get-Item $t).Length / 1KB)
  $bmp.Dispose()
}
