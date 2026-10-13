/**
 * Recenze klientek — jedno místo pro úvodní stránku i podstránku /recenze.
 *
 * Jen skutečné recenze, převzaté beze změn z Map Google a Firmy.cz.
 * Vymyšlené reference zákon o ochraně spotřebitele zakazuje — nové sem přidávej
 * jen zkopírované z veřejného profilu, se zdrojem. Příjmení zkracujeme na iniciálu.
 *
 * Texty: stav 17. 9. 2026, recenze Adély C. a Lenky K. přidány 13. 10. 2026. Počet
 * na Googlu ověřen 13. 10. 2026 (16 hodnocení, 5,0) — textů z Googlu je tu 15, šestnácté
 * hodnocení je jen pět hvězdiček bez textu, takže tu být nemůže.
 * Odstavce v textu (\n) se na webu zachovají přes white-space: pre-line.
 */
export const GOOGLE_URL =
  'https://www.google.com/maps/place/JANESKIN-+SALON+JANA+SZYMIKOV%C3%81/@49.8975948,18.4221274,17z/data=!4m8!3m7!1s0x471157340ba6c399:0x5527b06384e96700!8m2!3d49.8975914!4d18.4247077!9m1!1b1!16s%2Fg%2F11x2kr9xfq';
export const SEZNAM_URL = 'https://www.firmy.cz/detail/13747453-janeskin-salon-jana-szymikova-dolni-lutyne.html';

/** Souhrnné hodnocení na obou profilech */
export const ratings = {
  google: { score: '5,0', count: 16 },
  seznam: { score: '5,0', count: 8 },
};

export type ReviewSource = 'Google' | 'Seznam';

export interface Review {
  author: string;
  source: ReviewSource;
  text: string;
}

export const reviews: Review[] = [
  {
    author: 'Adéla C.',
    source: 'Google',
    text: 'Vystřídala jsem už několik salonů, ale tak dobře jako u Janči jsem se nikdy necítila. Dlouho jsem se trápila se suchou pletí a nic pořádně nezabíralo. Po pár procedurách a s domácí péčí, kterou mi Janča doporučila, je problém pryč. Moje pleť je konečně vyživená a je to na ní vidět.\n\nProdukty na doma jsou skvělé, používám je ráda a pleť mi doslova děkuje. Masáž byla moc příjemná, chvíle, kdy člověk opravdu vypne a odpočine si.\n\nJanči děkuju hlavně za to, že se konečně ve své pleti cítím dobře. Je to pro mě velká věc. Pokud řešíte problematickou pleť nebo prostě hledáte místo, kde o vás bude opravdu pečováno, Janeskin můžu z celého srdce doporučit. 💛',
  },
  {
    author: 'Lenka K.',
    source: 'Google',
    text: 'Skvělý přístup paní Jany, která mi vše podrobně vysvětlila, odpověděla na moje dotěrné otázky a až potom proceduru začala. Samotné čištění pleti byl hlavně relax, který jsem už potřebovala. Navíc po proceduře jsem měla pleť jako mimino, vyživenou, hydratovanou a hebkou na dotek. Zvažuju, že vyzkouším i nějaké z jejích produktů, které se na mojí pleti opravdu osvědčily. Můžu proto jenom doporučit. 😊',
  },
  {
    author: 'Natálie O.',
    source: 'Google',
    text: 'V salonu jsem byla poprvé a rozhodně ne naposledy. Krásné prostředí, profesionální přístup a hlavně skvělý výsledek. Celou dobu jsem se cítila velmi příjemně a opečovávaně. Kosmetička Janča mi vše hezky vysvětlila, poradila s péčí o pleť i s výběrem vhodné kosmetiky pro můj typ pleti. Oceňuji její milý a profesionální přístup. 100% spokojenost, moc doporučuji!',
  },
  {
    author: 'Gabriela S.',
    source: 'Google',
    text: 'Paní Jana má velice profesionální přístup k zákazníci a to že před prvním ošetřením s vámi dělá dotazník mě opravdu mile překvapilo. Svým klientům se věnuje na 150% ,ochotně s vámi probere vaše kosmetické problémy a doporučí kosmetiku. Já jsem z první návštěvy byla unešená. Nejlepší na tom všem byl výsledek po ošetření. Moje pleť jen zářila, bylo to ohromující. Budu se opakovaně vracet. Tento salon doporučuji !!!',
  },
  {
    author: 'Irena B.',
    source: 'Google',
    text: 'Do salonu Janeskin jsem šla poprvé a byla jsem naprosto nadšená. Paní Janka je skutečná profesionálka, která svou práci dělá srdcem – je to vidět na každém detailu. Cítila jsem se v jejích rukou maximálně opečovávaná a zároveň v luxusním prostředí, kde nechybí příjemná atmosféra. Výsledek předčil moje očekávání a určitě se sem budu ráda vracet. Mohu jen doporučit! 💛',
  },
  {
    author: 'Andrea S.',
    source: 'Google',
    text: 'Kosmetický salón mohu jen doporučit. Prostředí je čisté, moderní a velmi útulné, takže se člověk hned cítí pohodlně a může si skutečně odpočinout. Paní kosmetička mi vše podrobně vysvětlila, doporučila vhodné ošetření podle potřeb mé pleti a po celou dobu se věnovala maximálně pečlivě. Velmi se těším na další návštěvu.',
  },
  {
    author: 'Markéta K.',
    source: 'Seznam',
    text: 'Kosmetické ošetření jsem si moc užila. Byla jsem velmi spokojená - odnesla si spoustu užitečných informací, ošetření bylo kvalitní a profesionální. Jako bonus jsem si krásně odpočinula a zrelaxovala. Určitě doporučuji!',
  },
  {
    author: 'Radmila N.',
    source: 'Google',
    text: 'Paní Jana je velice milá a příjemná, v jejím salonu si člověk vždy odpočine a v příjemném prostředí se pod jejíma rukama cítí opravdu hýčkán. Doporučuji návštěvu jeji salonu všemi deseti. ☘️Zároveň vždy poradí jak se správně starat o svou pleť.',
  },
  {
    author: 'Karolína K.',
    source: 'Google',
    text: 'Po první návštěvě jsem odcházela nadšená. Prostředí, přístup, analýza pleti, produkty - maximální spokojenost. Konečně jsem se o své pleti něco dozvěděla a vybraly jsme další vhodný postup. Děkuji.',
  },
  {
    author: 'Radka K.',
    source: 'Google',
    text: 'Salon Janeskin jsem navštívila poprvé a odcházela jsem velice spokojená. Prostředí je opravdu příjemné, péče a poradenství na vysoké úrovni a majitelka salonu moc milá. Už se těším na další návštěvu!!',
  },
  {
    author: 'Kateřina H.',
    source: 'Google',
    text: 'Moc doporučuji salon Janeskin. Péče je skvělá a na velmi vysoké úrovni. Salon jsem navštívila již opakovaně a pokaždé veliká spokojenost. Pokud hledáte kvalitní péči o vaši pleť a relaxaci v krásném prostředí, vřele doporučuji 🤗',
  },
  {
    author: 'Lenka Č.',
    source: 'Google',
    text: 'Krásně strávené dvě hodinky, kdy se o mě Janička krásně starala. Výsledek líčení naprostá spokojenost a vřele doporučuji i dalším ženám, pokud hledají relaxaci, péči a Top výsledek, tak tady jste na správné adrese. 🌸',
  },
  {
    author: 'Zuzana W.',
    source: 'Seznam',
    text: 'Velmi kvalitní a osobní přístup. Pani ví co dělá, masáže luxusní a kosmetická péče se vším všudy :) doporučuji',
  },
  {
    author: 'K. Juri',
    source: 'Google',
    text: 'Skvělá péče a luxusní kosmetika, určitě se oplatí do ni investovat 😊 nebyla jsem spokojena s texturou pleti a po této kosmetice se mi krásně zlepšila, můžu jen doporučit a vyzdvihnout taky skvělý přístup kosmetičky 😊',
  },
  {
    author: 'Jana K.',
    source: 'Google',
    text: 'V salonu Janeskin jsem byla poprvé a byla jsem velmi spokojená, péče o mě byla na vysoké úrovni. Mohu všem vřele doporučit.',
  },
  {
    author: 'Šárka M.',
    source: 'Google',
    text: 'Salon mohu jen doporučit. Moc krásné prostředí, profesionální přístup a příjemná atmosféra. Byla jsem poprvé a určitě se vrátím.',
  },
  {
    author: 'Lucie S.',
    source: 'Google',
    text: 'Velká spokojenost. Příjemné prostředí a perfektní péče.',
  },
];
