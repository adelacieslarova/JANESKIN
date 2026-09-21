/**
 * Jediný zdroj dat o službách a cenách.
 *
 * Používá ho /cenik (plné tabulky) i /sluzby (rozbalovací karty),
 * aby ceny a popisy nebylo nutné udržovat na dvou místech.
 *
 * Struktura kategorií kopíruje rezervační systém Noona:
 * https://noona.app/cs/janeskinsalonjanaszymikova
 */

export interface PriceItem {
  name: string;
  price: string | null;
  duration: string | null;
  note?: string;
  description?: string;
}

export interface PriceSubsection {
  title: string | null;
  items: PriceItem[];
}

export interface PriceCategory {
  id: string;
  category: string;
  /** Krátký popis na kartu služby */
  summary: string;
  priceFrom: string;
  durationRange: string;
  image: string;
  icon: string;
  intro?: string;
  note?: string;
  items: PriceItem[];
  subsections?: PriceSubsection[];
}

const icons = {
  plet: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  needle: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  masaz: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 11a3 3 0 0 0-3-3H9.5A3.5 3.5 0 0 0 6 11.5V17a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6z"/><path d="M10 8V6a2 2 0 1 1 4 0v2"/></svg>`,
  oko: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>`,
  oboci: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 14c2.5-4 6-6 9-6s6.5 2 9 6"/><path d="M6 17.5c2-1 4-1.5 6-1.5s4 .5 6 1.5"/></svg>`,
  makeup: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  doplnky: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  voucher: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7"/><path d="M2 8h20v4H2z"/><path d="M12 8v12M12 8S9.5 3 7.5 4.5 9 8 12 8zM12 8s2.5-5 4.5-3.5S15 8 12 8z"/></svg>`,
};

export const pricingData: PriceCategory[] = [
  {
    id: 'kosmeticka-pece',
    category: 'Kosmetická péče',
    summary:
      'Specializovaná ošetření s kosmeceutikou Larens — od hluboké hydratace přes lifting a chemické peelingy až po řešení akné, pigmentací či citlivé pleti.',
    priceFrom: '1 200 Kč',
    durationRange: '30–120 min',
    image: '/images/salon/osetreni-roller.jpg',
    icon: icons.plet,
    items: [
      {
        name: 'První návštěva salonu',
        price: null,
        duration: '30 min',
        note: 'Přidejte k vybrané službě',
        description:
          'Při Vaší první návštěvě salonu během krátké vstupní konzultace probereme Vaši současnou péči o pleť, Vaše očekávání a přání. Jsem tu pro Vás, pomůžu Vám se zorientovat v široké nabídce služeb a společně vybereme to nejvhodnější ošetření a nastavíme plán salonní a domácí péče.\n\n' +
          'Jako první ošetření pro své klienty nejčastěji volím Collagen Intensive Hydroboost – Hydratační ošetření, kterým dodám pleti potřebnou hydrataci, zářivost a jemnost. Je to ideální ošetření pro seznámení Vaší pleti s přípravky kosmeceutik Larens Professional Line. Není to však vždy pravidlem, vše se odvíjí od aktuální kondice Vaší pleti.\n\n' +
          'Ošetření, které v salonu nabízím, jsou vhodné pro ženy i muže bez rozdílu věku.\n\n' +
          'Kontraindikací pro veškerou kosmetickou péči je alergie na bílkoviny z ryb.\n\n' +
          'Prosím nevolte si při první návštěvě jako první péči o pleť mikrojehličkování, chemický peeling nebo anti-spot ošetření. Tato ošetření vyžadují důkladné seznámení s Vaší pletí a probrání možných kontraindikací, tak abyste byli předem obeznámeni s průběhem a výsledkem procedury. Takováto ošetření neprovádím novým klientům při první návštěvě.',
      },
      {
        name: 'Collagen Intensive Hydroboost – Hydratační péče s masáží',
        price: '1 500 Kč',
        duration: '90 min',
        note: 'Ideální pro první návštěvu',
        description:
          'Kosmetická péče podporující hydrataci, zářivost a jemnost pleti. Vhodné po letní sezóně nebo kdykoliv, kdy Vaše pleť potřebuje extra dávku hydratace. Efekt: hloubková regenerace dehydratované pokožky, optimální zlepšení vzhledu a kondice pleti, sjednocení struktury pleti, redukce vrásek, zpomalení stárnutí, stimulace buněk k vlastní regeneraci. Péče zahrnuje: odlíčení; povrchové čištění pleti; peeling; napářku; čištění pleti ultrazvukovou špachtlí / manuální dočištění; aplikaci aktivní látky/séra; masáž obličeje, krku a dekoltu; masku; monochromatickou světelnou terapii; oční krém, závěrečný krém a výživu na rty.',
      },
      {
        name: 'Collagen Lifting Therapy – Liftingová péče s masáží',
        price: '1 500 Kč',
        duration: '90 min',
        description:
          'Kosmetická péče podporující krásu a mladost Vaší pleti. Zanechává pokožku svěží, napnutou a hydratovanou. Efekt: vyhlazení vrásek a zpomalení tvorby nových; zlepšení vzhledu a kondice pleti; intenzivní hloubková hydratace, podpora tvorby vlastního kolagenu. Péče zahrnuje: odlíčení; povrchové čištění pleti; napářku; peeling; čištění pleti ultrazvukovou špachtlí / manuální dočištění; přístrojové zapracování séra/ampulky; masáž obličeje, krku a dekoltu; masku; monochromatickou světelnou terapii; oční krém, závěrečný krém a výživu na rty.',
      },
      {
        name: 'Acne Skin Therapy – Péče o aknózní pleť',
        price: '1 500 Kč',
        duration: '90 min',
        description:
          'Kosmetická péče zaměřená na problematickou pleť se sklonem k akné bez masáže. Efekt: urychlení regenerace a hojení pleti; čistící, klidnící, protizánětlivý a antibakteriální účinek; minimalizace pórů a regulace sekrece kožního mazu; snížení zarudnutí a zánětu. Péče zahrnuje: odlíčení; povrchové čištění pleti; peeling; napářku; čištění pleti ultrazvukovou špachtlí; manuální čištění většího rozsahu dle stavu pleti; přístrojové zapracování séra/ampule; masku; monochromatickou světelnou terapii; oční krém, závěrečný krém a výživu na rty.',
      },
      {
        name: 'Sensitive Skin Therapy – Péče o citlivou pleť s masáží',
        price: '1 500 Kč',
        duration: '90 min',
        description:
          'Kosmetická péče zaměřená na pleť citlivou, se sklonem k atopické dermatitidě nebo růžovce. Efekt: snížení zarudnutí a zánětu; zmírnění příznaků alergií a svědivosti kůže; posílení krevních vlásečnic; dodání optimální hydratace pleti; zvláčnění a vyhlazení; ochrana pleti proti škodlivým vnějším faktorům. Péče zahrnuje: odlíčení; povrchové čištění pleti; peeling; čištění pleti ultrazvukovou špachtlí; přístrojové zapracování séra/ampule; masáž obličeje, krku, dekoltu; masku; monochromatickou světelnou terapii; oční krém, závěrečný krém a výživu na rty.',
      },
      {
        name: 'ReHarmony Treatment – Elixír harmonie a mládí s Exosomy',
        price: '1 800 Kč',
        duration: '90 min',
        description:
          'Harmonizační péče nové generace s Exosomy, hloubkově působícími mikroskopickými nosiči biologicky aktivních peptidů rybího kolagenu, antioxidantů a růstových faktorů, které cíleně podporují obnovu kožních buněk, zklidňují zánětlivé procesy a navrací pleti zdraví, pružnost a vitalitu. Nesou rovněž elixír věčného mládí, extrakt z kořene rdesna mnohokvětého, známého z tradiční východní medicíny jako elixír věčného života, silný antioxidant, který chrání buňky před stárnutím a podporuje jejich regeneraci. Dalšími složkami jsou vitamín C, niacinamid, ceramidy, bioferment nebo vzácné extrakty a rostlinné oleje. Ideální pro zralou, dehydrovanou pleť s narušenou hydrolipidovou bariérou, ale také pro pleť citlivou, reaktivní nebo pro pleť bez jasu. Efekt: obnovení harmonie pleti, hloubková výživa, regenerace a rovnováha i té nejnáročnější pleti. Péče zahrnuje: odlíčení; povrchové čištění pleti; peeling; čištění pleti ultrazvukovou špachtlí / ruční dočištění; unikátní sérum ReHarmony s exosomy; masáž obličeje, krku a dekoltu; krémovou masku s exosomy ReHarmony; oční krém, závěrečný krém a výživu na rty.',
      },
      {
        name: 'Anti-Aging Express Luxe – Péče s růstovými faktory',
        price: '1 600 Kč',
        duration: '60 min',
        description:
          'Kosmetická péče s okamžitým a dlouhotrvajícím efektem za použití liftingové revitalizační masky/zábalu s růstovými faktory z rostlinné Bio-placenty. Efekt: vyhlazení a odstranění vrásek; vyplnění deficitů v kůži; podpora tvorby nového vlastního kolagenu a elastinu; zrychlení regeneračních procesů v pleti; stimulace k obnově vlastních buněk. Péče zahrnuje: odlíčení; povrchové čištění pleti; peeling; napářku; čištění pleti ultrazvukovou špachtlí; přístrojové zapracování séra a ampule; masku/zábal s růstovými faktory; monochromatickou světelnou terapii; oční krém, závěrečný krém a výživu na rty.',
      },
      {
        name: 'Anti-Aging Relax Luxe – Péče s růstovými faktory a masáží',
        price: '2 000 Kč',
        duration: '120 min',
        description:
          'Kosmetická péče s okamžitým a dlouhotrvajícím efektem za použití liftingové revitalizační masky/zábalu s růstovými faktory z rostlinné Bio-placenty. Efekt: vyhlazení a odstranění vrásek; vyplnění deficitů v kůži; podpora tvorby nového vlastního kolagenu a elastinu; zrychlení regeneračních procesů v pleti; stimulace k obnově vlastních buněk. Péče zahrnuje: odlíčení; povrchové čištění pleti; peeling; napářku; čištění pleti ultrazvukovou špachtlí / ruční dočištění; přístrojové zapracování séra a ampule; masáž obličeje, krku a dekoltu s mikromasáží očního okolí; masku/zábal s růstovými faktory; monochromatickou světelnou terapii; oční krém, závěrečný krém a výživu na rty.',
      },
      {
        name: 'Intensive Lifting Detox+ – Detoxikační péče s masáží',
        price: '1 500 Kč',
        duration: '90 min',
        description:
          'Detoxikační kosmetická péče před důležitou událostí, rozšířená o relaxační masáž obličeje, krku a dekoltu. Ideální pro pokožku vystavenou stresu, znečištění a nedostatečné výživě. Pro pleť bez jiskry, s akné i s pigmentovými skvrnami. Efekt: detoxikuje a remineralizuje pokožku; redukuje množství volných radikálů a zpomaluje proces stárnutí; vyhlazuje, zpevňuje, dodává pleti vitalitu a energii; redukuje pigmentové skvrny a zabraňuje vzniku nových, sjednocuje barevný tón pleti; absorbuje kožní maz a matuje pokožku; zklidňuje zarudnutí a hypersenzitivní pokožku. Péče zahrnuje: odlíčení; povrchové čištění pleti; peeling; napářku; čištění pleti ultrazvukovou špachtlí / ruční dočištění; masáž obličeje, krku a dekoltu; detoxikačně liftingovou masku; sérum s kyselinou ferulovou; oční krém a výživu na rty. Vhodné absolvovat i jako intenzivní kůru 3–5 terapií 1× za 7–10 dní. Terapie pro udržení výsledků 1× za 4 týdny.',
      },
      {
        name: 'Chemický Peeling – Povrchový chemický peeling',
        price: '1 200 Kč',
        duration: '60 min',
        description:
          'Exkluzivní omlazení s povrchovým chemickým peelingem s komplexem přírodních peptidů rybího kolagenu. Pleť se zjemní, vyhladí, projasní a zhydratuje. Nedochází k olupování pleti nebo silnému podráždění. Vhodný pro všechny typy pleti i pleť citlivou. Efekt: hloubková rekonstrukce pleti obličeje; mizí pigmentace, záněty i akné; podpora procesů hojení a vyhlazení jizev; zmírnění projevů stárnutí. Péče zahrnuje: odlíčení; povrchové čištění pleti; chemický peeling; neutralizér; masku; monochromatickou světelnou terapii; oční krém, závěrečný krém/krém s SPF a výživu na rty. Vhodné jako kůra 4 terapií 1× za 10 dní v období září až duben.',
      },
      {
        name: 'Chemický Peeling Luxe – Povrchový chemický peeling s růstovými faktory',
        price: '1 600 Kč',
        duration: '60 min',
        description:
          'Exkluzivní omlazení s povrchovým chemickým peelingem s komplexem přírodních peptidů rybího kolagenu a liftingovou revitalizační maskou/zábalem s růstovými faktory z rostlinné Bio-placenty. Pleť se zjemní, vyhladí, projasní a zhydratuje. Nedochází k olupování pleti nebo silnému podráždění. Vhodný pro všechny typy pleti i pleť citlivou. Efekt: hloubková rekonstrukce pleti obličeje; mizí pigmentace, záněty i akné; podpora procesů hojení a vyhlazení jizev; zmírnění projevů stárnutí. Péče zahrnuje: odlíčení; povrchové čištění pleti; chemický peeling; neutralizér; masku/zábal s růstovými faktory; monochromatickou světelnou terapii; oční krém, závěrečný krém/krém s SPF a výživu na rty. Vhodné jako kůra 4 terapií 1× za 10 dní v období září až duben.',
      },
      {
        name: 'Anti Spot Therapy – Depigmentační péče',
        price: '1 300 Kč',
        duration: '70 min',
        description:
          'Rozjasňující procedura zaměřená na odstranění pigmentových skvrn různého původu souvisejících se sluncem; věkem; hormony nebo následky kožních onemocnění jako je akné nebo atopická dermatitida. Efekt: redukce skvrn; sjednocení barevného tónu pleti bez nepřirozeného zesvětlení celé pleti; potlačení vzniku nových skvrn; hydratuje; poskytuje potřebnou dávku antioxidantů; stimuluje k obnově a regeneraci pleti. Péče zahrnuje: odlíčení; povrchové čištění pleti; detoxikační masku; depigmentační sérum a neutralizér; oční krém, závěrečný depigmentační krém/krém s SPF a výživu na rty. Intenzivní kůra 3–6 terapií 1× za 10 dní v období od září do konce května.',
      },
      {
        name: 'Zvýhodněný balíček krásy pro nastávající nevěstu',
        price: '1 500 Kč',
        duration: '60 min',
        note: 'Balíček 3× = 4 100 Kč',
        description:
          'Vaše pleť si v období před svatbou zaslouží pozornost a to nejen kvůli krásnému make-upu a svatebním fotkám, ale především kvůli vašemu pocitu jedinečnosti a sebevědomí. Každá pleť má jiné potřeby a ať se už chystáte na kosmetické ošetření poprvé, nebo už máte nějaké kosmetické ošetření za sebou, ráda Vám pomůžu se zorientovat v nabídce kosmetických ošetření a vybrat přesně to pravé pro Vás před vaším velkým dnem. Pokud nedocházíte pravidelně na kosmetickou péči a chtěla byste stav své pleti zlepšit, 3 měsíce předem je ten ideální čas naplánovat první návštěvu. Vaši pleti sestavím na míru péči, která pleť zklidní a rozzáří. Budete odcházet se zdravou a krásnou pletí, která bude působit svěže a hydratovaně. Zvýhodněná služba pro nevěsty, které se chystají na svatební zkoušku líčení v našem salonu. Proceduru je vhodné absolvovat 1× za 4 týdny. 1× péče 1 500 CZK, doba trvání 60 min. Balíček 3× ošetření = 4 100 CZK.',
      },
    ],
  },
  {
    id: 'doplnkove-k-peci',
    category: 'Doplňkové služby ke kosmetické péči',
    summary:
      'Epilace, barvení obočí a řas, nadstandardní masky a kompres pod oči nebo lehké líčení — vše jako doplněk k vybranému ošetření.',
    priceFrom: '100 Kč',
    durationRange: '15–30 min',
    image: '/images/salon/osetreni-guasha.jpg',
    icon: icons.doplnky,
    note: 'Tyto služby je možné zakoupit pouze jako doplněk ke kosmetické péči. Samostatně je najdete v kategorii Doplňkové služby samostatně.',
    items: [],
    subsections: [
      {
        title: 'Epilace',
        items: [
          { name: 'Epilace obočí', price: '100 Kč', duration: '15 min' },
          { name: 'Epilace horního rtu', price: '100 Kč', duration: '15 min' },
          { name: 'Epilace brady', price: '100 Kč', duration: '15 min' },
        ],
      },
      {
        title: 'Obočí a řasy',
        items: [
          { name: 'Barvení obočí', price: '100 Kč', duration: '30 min' },
          { name: 'Barvení řas', price: '100 Kč', duration: '30 min' },
          { name: 'Společné barvení obočí a řas', price: '150 Kč', duration: '30 min' },
        ],
      },
      {
        title: 'Nadstandardní aplikace',
        items: [
          { name: 'Aplikace alginátové masky', price: '400 Kč', duration: '20 min' },
          { name: 'Aplikace Bio Renew masky', price: '600 Kč', duration: '30 min' },
          {
            name: 'Beauty Eye kompres',
            price: '200 Kč',
            duration: '20 min',
            description:
              'Prémiové polštářky pod oči ve formě kompresu. Působí liftingově, proti vráskám, intenzivně hydratují a projasňují, zlepšují elasticitu pokožky a pomáhají redukovat tmavé kruhy, otoky i známky únavy.',
          },
        ],
      },
      {
        title: 'Líčení po kosmetické péči',
        items: [
          {
            name: 'Lehké denní líčení',
            price: '400 Kč',
            duration: '30 min',
            description: 'Lehké denní líčení s Larens Colour po kosmetické péči.',
          },
        ],
      },
    ],
  },
  {
    id: 'microneedling',
    category: 'Microneedling s Exosomy',
    summary:
      'Moderní estetická procedura spojující exosomy, kyselinu hyaluronovou a růstové faktory pro omlazení a zpevnění pleti.',
    priceFrom: '2 500 Kč',
    durationRange: '90 min',
    image: '/images/salon/osetreni-vapozon.jpg',
    icon: icons.needle,
    note: 'Ošetření neprovádím novým klientům při první návštěvě — vyžaduje předchozí konzultaci.',
    items: [
      {
        name: 'Microneedling s Exosomy',
        price: '2 500 Kč',
        duration: '90 min',
        description:
          'Moderní estetická procedura spojující mikrojehličkování s exosomy, kyselinou hyaluronovou a růstovými faktory. Podporuje tvorbu vlastního kolagenu, zpevňuje a omlazuje pleť. Termín i vhodnost ošetření domlouvám vždy po osobní konzultaci.',
      },
    ],
  },
  {
    id: 'masaze',
    category: 'Kosmetické masáže',
    summary:
      'Tři typy masáží obličeje, krku a dekoltu — klasická, liftingová a mikromasáž očního okolí. Relaxace i omlazení.',
    priceFrom: '1 200 Kč',
    durationRange: '50–90 min',
    image: '/images/salon/osetreni-masaz.jpg',
    icon: icons.masaz,
    items: [
      {
        name: 'Kosmetická masáž obličeje, krku a dekoltu s pleťovou maskou',
        price: '1 200 Kč',
        duration: '60 min',
        note: 'Balíček 3× = 3 300 Kč',
        description:
          'Patří mezi nejúčinnější a nejpříjemnější prostředek v boji proti stárnutí pokožky obličeje, krku a dekoltu. Masáž působí na velké množství nervových zakončení v obličeji, ale také příznivě ovlivňuje celou nervovou soustavu. Během masáže dochází ke zklidnění pleti i celého organismu a k relaxačnímu účinku na centrální nervovou soustavu i celé tělo. Efekt: zlepšení prokrvení pleti a efektivnější přísun kyslíku a živin. Odplavení odpadních látek a zmírnění únavy pleti. Jemná exfoliace zrohovatělých vrstev kůže, kožní buňky jsou tak lépe vyživovány, pokožka se stává vláčnější, pevnější, pružnější a zpomaluje se tvorba vrásek. Zlepšení látkové výměny a úpravy tvorby mazových žláz. Uvolnění napětí svalů, které jsou napojeny na kůži v obličeji a celkové zjemní výrazu tváře. Péče zahrnuje: odlíčení, povrchové čištění pleti, krku a dekoltu, masáž za použití masážního oleje nebo krému, aplikaci pleťové masky pro posílení účinků masáže, závěrečný krém, oční krém a výživu na rty. Proceduru je vhodné absolvovat 1× za 3 týdny. 1× masáž 1 200 CZK, doba trvání 60 min. Balíček 3× masáž = 3 300 CZK.',
      },
      {
        name: 'Liftingová masáž obličeje s pleťovou maskou',
        price: '1 500 Kč',
        duration: '90 min',
        note: 'Balíček 3× = 4 200 Kč',
        description:
          'Je způsob, jak omladit obličej pomocí velmi jemných a pomalých speciálních masážních tahů. Masáž je velmi odpočinková a následný efekt je viditelný již po první proceduře. Výsledkem je svěží vzhled, zjemněné rysy obličeje zbavené únavy bez použití skalpelu. Efekt: zlepšení prokrvení svalů v oblasti obličeje, pleť se projasní. Masáží dochází k zvýšení pružnosti kůže, zpomalení tvorby vrásek a k odstranění svalového napětí. Působí příznivě na psychiku, na celou nervovou soustavu. Odplavuje kyselinu mléčnou, dochází k poklesu únavy. Je vhodná pro zdravou, ale unavenou pleť s vráskami jak mimickými, tak i senilními, ale také i při obrně nervů. Péče zahrnuje: odlíčení, povrchové čištění pleti, masáž za použití masážního oleje nebo krému, aplikaci liftingové masky s collagenem pro posílení účinků masáže, závěrečný krém, oční krém a výživu na rty. Proceduru je vhodné absolvovat 2× v týdnu po dobu 4–6 týdnů a následně 1× měsíčně pro udržení výsledků. 1× masáž 1 500 CZK, doba trvání 90 min. Balíček 3× masáž = 4 200 CZK.',
      },
      {
        name: 'Mikromasáž očního okolí s kompresem pod oči',
        price: '1 200 Kč',
        duration: '50 min',
        note: 'Balíček 3× = 3 300 Kč',
        description:
          'Jedná se o jemnou a pomalou masáž pokožky očního okolí. Masáž působí jako prevence stárnutí pleti, má příznivý vliv na omezení tvorby vrásek okolo očí. Po této masáži dochází k omezení tvorby kruhů a vodnatých váčků pod očima, k snížení nitroočního tlaku a při pravidelné aplikaci také ke zlepšení zraku. Působí proti migréně a je vhodná při dlouhodobé práci s počítači nebo práci při umělém světle. Uvolňuje a pročišťuje dutiny. Efekt: masáží dochází k působení na lymfatický systém a k odplavení toxických látek. K projasnění očního okolí a ústupu viditelných známek únavy. K uvolnění napětí očních svalů a jejich zrelaxování. Po masáži budou Vaše oči zářit. Závěrem masáže aplikuji prémiové polštářky pod oči ve formě kompresu. Kompres působí liftingově, proti vráskám, intenzivně hydratuje a projasňuje, zlepšuje elasticitu pokožky a pomáhá redukovat tmavé kruhy, otoky i známky únavy. Péče zahrnuje: odlíčení; povrchové čištění pleti; masáž za použití masážního oleje nebo krému; aplikaci polštářků/kompresu pod oči; masku dle stavu pleti; sérum a krém pro oční okolí a výživu na rty. Proceduru je vhodné absolvovat 1× za 14 dní. 1× mikromasáž 1 200 CZK, doba trvání 50 min. Balíček 3× mikromasáž = 3 300 CZK.',
      },
    ],
  },
  {
    id: 'laminace',
    category: 'Laminace obočí a řas',
    summary:
      'Pokročilá laminace od InLei® — natočení, barvení a výživa řas i obočí. Zahušťuje řasy až o 25 %.',
    priceFrom: '1 100 Kč',
    durationRange: '90–120 min',
    image: '/images/salon/liceni-zrcadlo.jpg',
    icon: icons.oko,
    items: [
      {
        name: 'Lash Filler – Laminace řas s barvením a výživou',
        price: '1 100 Kč',
        duration: '90 min',
        description:
          'Je procedura pokročilé laminace řas, při níž dochází nejen k jemnému, ale účinnému natočení přirozených řas a jejich barvení, ale také k dodání potřebné výživy a posílení řasy zevnitř. Díky patentovanému složení od InLei® se řasy průměrně zahustí až o 25 % a prodlouží o 9 % už po 3 aplikacích. Řasy jsou po ošetření zdravější, pružnější, vyživené a objemnější. Postup zahrnuje: čištění, nanesení laminačních produktů, barvení obočí, nanesení filleru – výživy, která řasy obnovuje, opravuje a udržuje optimální hydrataci, zpevňuje, vyplňuje a zahušťuje strukturu řasy, nanesení závěrečného kroku lash molecular – molekulární rekonstrukce pro řasy, která zlepšuje hydrataci, lesk, sílu a flexibilitu řas, ale také posiluje trvanlivost barvy.',
      },
      {
        name: 'Brow Bomber – Laminace obočí s barvením a výživou',
        price: '1 100 Kč',
        duration: '90 min',
        description:
          'Je procedura, při níž se přírodní chloupky obočí vyčešou v požadovaném směru a fixují pomocí kombinace přípravků InLei®. Všechny produkty se svou účinností vzájemně podporují a zajišťují efektivní růst chloupků. Ideální procedura pro dokonalou úpravu obočí. Postup zahrnuje: čištění, nanesení laminačních produktů, vyměření obočí s barvením v tzv. ombre efektu, aby bylo dosaženo opravdové přirozenosti. Epilaci voskem, barevnou korekci a nanesení závěrečné výživy.',
      },
      {
        name: 'Zvýhodněný balíček Lash Filler & Brow Bomber – Laminace řas a obočí',
        price: '2 000 Kč',
        duration: '120 min',
        note: 'Zvýhodněná cena',
        description:
          'Balíček laminace řas a obočí od InLei® v jedné proceduře. Při laminaci řas dochází k natočení přirozených řas a k jejich barvení, ale také k dodání potřebné výživy a posílení řasy zevnitř. Při laminaci obočí se přírodní chloupky obočí vyčešou v požadovaném směru a zafixují. Postup zahrnuje úpravu a barvení obočí v tzv. ombre efektu.',
      },
    ],
  },
  {
    id: 'makeup',
    category: 'Make-up a vizážistika',
    summary:
      'Svatební líčení a účesy, líčení i účesy na zvláštní příležitost, kurzy líčení s Larens Colour, poradenství v péči o pleť a make-up proměny.',
    priceFrom: '1 000 Kč',
    durationRange: '60–180 min',
    image: '/images/salon/liceni-koutek.jpg',
    icon: icons.makeup,
    note: 'Líčení i účesy probíhají v salonu. Doprava na jiné místo 10 Kč/km. Rezervaci svatební zkoušky doporučuji 1–2 měsíce před svatbou.',
    items: [],
    subsections: [
      {
        title: 'Svatební vizáž — nevěsta',
        items: [
          {
            name: 'Svatební líčení',
            price: 'od 2 000 Kč',
            duration: '120 min',
            description:
              'Profesionální svatební líčení v den svatby, včetně přípravy pleti a nalepení jednorázových řas. Líčím kosmetikou Larens Colour, která pleť zároveň ošetřuje. Cena se odvíjí od náročnosti líčení.',
          },
          {
            name: 'Zkouška svatebního líčení',
            price: 'od 1 500 Kč',
            duration: '90 min',
            description:
              'Zkouška líčení před svatbou, při které společně najdeme ideální výsledek a zaznamenám si každý krok, aby bylo líčení v den svatby přesně podle Vašich představ. Objednává se zvlášť, ideálně 1–2 měsíce před svatbou.',
          },
          {
            name: 'Svatební účes',
            price: 'od 2 000 Kč',
            duration: '120 min',
            description:
              'Svatební účes v den svatby. Ozdoby do vlasů je možné zakoupit nebo zapůjčit za vratnou kauci. Cena se odvíjí od náročnosti účesu.',
          },
          {
            name: 'Zkouška svatebního účesu',
            price: 'od 1 500 Kč',
            duration: '90 min',
            description:
              'Zkouška účesu před svatbou. Vyzkoušíme varianty, vybereme ozdoby a postup si zaznamenám, aby byl účes v den svatby stejný. Objednává se zvlášť, ideálně 1–2 měsíce před svatbou.',
          },
        ],
      },
      {
        title: 'Svatební vizáž — svatebčanka',
        items: [
          {
            name: 'Líčení svatebčanky',
            price: 'od 1 000 Kč',
            duration: '60 min',
            description: 'Líčení pro svatebčanky, svědkyni, maminku nebo družičky. Lepení řas od 150 CZK.',
          },
          {
            name: 'Účes svatebčanky',
            price: 'od 1 000 Kč',
            duration: '60 min',
            description: 'Účes pro svatebčanky, svědkyni, maminku nebo družičky.',
          },
        ],
      },
      {
        title: 'Vizáž na zvláštní příležitost',
        items: [
          {
            name: 'Líčení (denní, večerní, maturitní, na fotografování)',
            price: '1 000–1 300 Kč',
            duration: '60 min',
            note: 'Dle náročnosti',
            description: 'Líčení kosmetikou Larens Colour na jakoukoli příležitost. Cena se odvíjí od náročnosti líčení.',
          },
          {
            name: 'Účes (vlny, culík, drdol)',
            price: '1 000–1 300 Kč',
            duration: '60 min',
            note: 'Dle náročnosti',
            description: 'Společenský účes na jakoukoli příležitost. Cena se odvíjí od náročnosti účesu.',
          },
        ],
      },
      {
        title: 'Poradenství a kurzy',
        items: [
          {
            name: 'Poradenství v oblasti péče o pleť a líčení',
            price: '1 500 Kč',
            duration: '90 min',
            description:
              'Ztrácíte se v nabídce kosmetických produktů? Nevíte si rady s nastavením vhodné kosmetické péče právě pro Vás? U šálku něčeho dobrého si povíme jaké přípravky použít na denní bázi dle stavu Vaši pleti a věku, jak pleť správně odličovat a čistit, jaké jsou pro Vás vhodné séra nebo krémy. Dále si nastíníme, jak můžete péči o Vaši pleť ještě více vylepšit, pokud se chcete více rozmazlit a dopřát si nadstandartní péči. Jak je to s peelingem v domácích podmínkách a jaké masky můžete zařadit pro podporu udržení salónních procedur. Jaké pomůcky pleti prospívají a jaké ji naopak škodí. Co vás čeká při návštěvě kosmetického salónu a jaké stavy lze možno salonním ošetřením ovlivnit a kdy je už nutné jít k dermatologovi. Poradím Vám i s kosmetickou péčí pro Vaši drahou polovičku nebo dospívajícího potomka. V rámci konzultace probereme také produkty dekorativní péče vhodné pro Váš typ pleti. V rámci konzultace je možno vyzkoušet vybrané dostupné kosmetické přípravky.',
          },
          {
            name: 'Mini kurz líčení s Larens Colour',
            price: '2 000 Kč',
            duration: '120 min',
            description:
              'Krása začíná uvnitř a pokračuje s Larens Colour, což není jen značka dekorativní kosmetiky, je to víc než jen make-up. Je pokračováním vašeho pečujícího rituálu a investicí do kvality vaší pleti. Základ make-upů a korektorů Larens Colour tvoří Liposomal Collagen Complex, Phytodermina H Lifting™ a rovnou 3 typy kyseliny hyaluronové. Produkty jsou určené pro všechny věkové kategorie, tak i pro osoby s citlivou, alergickou, aknózní či dehydratovanou pletí. Během inspirativního kurzu líčení se naučíte, jak správně připravit pleť před líčením, jak si správně zvolit odstín make-upu a korektoru k Vaši pleti a jak make-up správně aplikovat, aby vypadal jako Vaše druhá kůže bez efektu masky. Vytvoříme spolu klasický každodenní look, tak i výraznější variantu pro speciální příležitosti.',
          },
          {
            name: 'Proměna s Larens Colour',
            price: '3 000 Kč',
            duration: '180 min',
            description:
              'Zatoužila jste ve svém životě po změně? Chtěla byste vyzkoušet úplně něco nového? Postarám se o Vaši kompletní make-up proměnu s Larens Colour, kterou doplníme o úpravu vlasů ve formě vhodného účesu (nezahrnuje složitější účesy, barvení ani střih). Chtěla byste si užít hezké odpoledne spolu s kamarádkou nebo dcerou? Přijďte si společně užít den v příjemné atmosféře s kapkou něčeho dobrého. Pro možnost absolvovat proměnu pro více osob mě kontaktujte a domluvíme vše potřebné.',
          },
        ],
      },
    ],
  },
  {
    id: 'doplnkove-samostatne',
    category: 'Doplňkové služby samostatně',
    summary:
      'Celková úprava obočí, barvení obočí a řas i epilace — bez nutnosti objednat kosmetické ošetření.',
    priceFrom: '200 Kč',
    durationRange: '15–45 min',
    image: '/images/salon/detail-oci-profesionalni-liceni.jpg',
    icon: icons.oboci,
    note: 'Tyto služby je možné objednat samostatně, bez kosmetické péče.',
    items: [],
    subsections: [
      {
        title: 'Obočí a řasy',
        items: [
          {
            name: 'Celková úprava obočí',
            price: '450 Kč',
            duration: '45 min',
            description:
              'Péče zahrnuje: čištění, vyměření obočí, barvení hybridní barvou, ombre efekt, epilace, korekce.',
          },
          { name: 'Barvení řas nebo obočí', price: '250 Kč', duration: '30 min' },
        ],
      },
      {
        title: 'Epilace',
        items: [
          { name: 'Epilace obočí', price: '200 Kč', duration: '15 min' },
          { name: 'Epilace horního rtu', price: '200 Kč', duration: '15 min' },
          { name: 'Epilace brady', price: '200 Kč', duration: '15 min' },
        ],
      },
    ],
  },
  {
    id: 'voucher',
    category: 'Dárkové poukazy',
    summary:
      'Dárek pro někoho, koho chcete potěšit chvilkou nerušené relaxace a péčí luxusní kosmeceutikou Larens.',
    priceFrom: 'Hodnota dle přání',
    durationRange: 'dle vybrané služby',
    image: '/images/gold-maska.webp',
    icon: icons.voucher,
    intro:
      'Vhodný jako dárek pro osobu, kterou chcete potěšit chvilkou nerušené relaxace, odpočinku a péčí luxusní kosmeceutikou Larens. Obdarovaná si sama vybere, na jakou proceduru poukaz využije. Hodnotu poukazu je možné zvolit i individuálně. K dispozici jsou luxusní poukazy v tištěné podobě s dárkovou obálkou a mašlí, nebo v elektronické podobě zaslané na e-mail. Platnost poukazu je 6 měsíců od data zakoupení, pokud není dohodnuto jinak.',
    items: [
      {
        name: 'Dárkový poukaz',
        price: null,
        duration: null,
        note: 'Hodnotu si volíte sami',
      },
    ],
  },
];

export const BOOKING_URL = 'https://noona.app/cs/janeskinsalonjanaszymikova';

/** Krátký štítek kategorie pro karty na homepage. */
export const categoryTags: Record<string, string> = {
  'kosmeticka-pece': 'Péče o pleť',
  microneedling: 'Omlazení',
  masaze: 'Relaxace',
  laminace: 'Řasy & Obočí',
  'doplnkove-samostatne': 'Obočí & řasy',
  makeup: 'Vizáž',
  'doplnkove-k-peci': 'Doplňky k péči',
  voucher: 'Dárek',
};
