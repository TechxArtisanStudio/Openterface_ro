import { legacyPath, siteConfig } from '../config/site';

export interface ProductDocLink {
  label: string;
  href: string;
}

export interface Product {
  slug: string;
  title: string;
  slogan: string;
  subtitle: string;
  description: string;
  seoDescription: string;
  keywords: string;
  heroImage: string;
  heroImages: string[];
  buyLabel: string;
  buyHref: string;
  painPoints: string[];
  solutions: string[];
  hwFeatures: { title: string; description: string }[];
  swFeatures: { title: string; description: string }[];
  specs: { label: string; value: string }[];
  useCases: string[];
  funding?: { amount: string; date: string; backers: string };
  docLinks: ProductDocLink[];
  legacyBase: string;
}

export const products: Record<string, Product> = {
  keymod: {
    slug: 'keymod',
    title: 'Openterface Seria KeyMod',
    slogan: 'Transformă-ți telefonul într-o tastatură inteligentă',
    subtitle: 'Control programabil al tastaturii și mouse-ului pentru tehnologie, profesioniști și gaming.',
    description:
      'Un emulator HID USB + Bluetooth compact și programabil care îți transformă telefonul într-o consolă portabilă de tastatură și trackpad. Construit pe nucleul HID dovedit de la Openterface Mini-KVM — plug and play, 100% open source.',
    seoDescription:
      'Seria KeyMod îți transformă telefonul într-o tastatură și trackpad portabil. Emulator HID USB + Bluetooth, open source, perfect pentru chioșcuri și scurtături de flux de lucru.',
    keywords: 'KeyMod, emulator HID, tastatură telefon, tastatură Bluetooth, tastatură USB, open source',
    heroImage: 'https://assets2.openterface.com/images/keymod/2in1.webp',
    heroImages: [
      'https://assets2.openterface.com/images/keymod/2in1.webp',
      'https://assets2.openterface.com/images/keymod/keymod.webp',
      'https://assets2.openterface.com/images/keymod/feature.webp',
    ],
    buyLabel: 'Susține ACUM',
    buyHref: siteConfig.links.keymodCrowdsupply,
    painPoints: [
      'Transportul unei tastaturi complete pentru configurarea unui chioșc sau TV este impracticabil',
      'Scurtăturile fluxului de lucru necesită macro-uri programabile în mișcare',
      'Multe instrumente HID sunt closed-source cu personalizare limitată',
    ],
    solutions: [
      'Folosește-ți telefonul ca tastatură și trackpad portabil',
      'HID USB și Bluetooth într-un singur dispozitiv compact',
      '100% open source cu suport pentru aplicația Openterface',
    ],
    hwFeatures: [
      { title: 'Format compact', description: 'Încape în buzunar pentru munca de teren și călătorii.' },
      { title: 'USB + Bluetooth', description: 'Conectivitate duală pentru compatibilitate maximă cu dispozitivele.' },
      { title: 'Hardware deschis', description: 'Design transparent construit pe nucleul HID dovedit al Openterface.' },
    ],
    swFeatures: [
      { title: 'Aplicația KeyMod', description: 'Configurează macro-uri, layout-uri și profiluri de gamepad de pe telefon.' },
      { title: 'Multi-platformă', description: 'Funcționează cu Android, iPadOS și gazde desktop prin aplicațiile Openterface.' },
      { title: 'Open source', description: 'Stiva completă disponibilă pe GitHub pentru contribuții din partea comunității.' },
    ],
    specs: [
      { label: 'Conectivitate', value: 'USB-C + Bluetooth LE' },
      { label: 'Moduri HID', value: 'Tastatură, mouse, gamepad' },
      { label: 'Licență', value: 'Hardware și software open source' },
    ],
    useCases: ['Intrare pentru Smart TV și chioșcuri', 'Macro-uri pentru flux de lucru mobil', 'Configurații pentru gaming și accesibilitate'],
    docLinks: [
      { label: 'Caracteristici', href: legacyPath('/product/keymod/features/') },
      { label: "Ce se află în cutie", href: legacyPath('/product/keymod/whats-in-the-box/') },
      { label: 'Cum se conectează', href: legacyPath('/product/keymod/how-to-connect/') },
      { label: 'Întrebări frecvente', href: legacyPath('/product/keymod/faq/') },
      { label: 'Descarcă Aplicația KeyMod', href: legacyPath('/app/overview/') },
    ],
    legacyBase: '/product/keymod/',
  },
  'kvm-go': {
    slug: 'kvm-go',
    title: 'Openterface Seria KVM-GO',
    slogan: 'KVM ultra-compact care încape pe brelocul tău',
    subtitle: 'Pentru momente tehnice critice — Conectează. Controlează. Mergi.',
    description:
      'Soluția KVM-over-USB de ultimă generație cu conectori video încorporați (HDMI, DisplayPort sau VGA). Ultra-compact, de mărimea unui breloc și construit pentru operațiuni IT rapide în centre de date și camere de servere.',
    seoDescription:
      'Controlează calculatoare fără monitor cu Openterface KVM-Go. HDMI/DP/VGA încorporat, de mărimea unui breloc, 4K KVM-over-USB pentru profesioniști IT.',
    keywords: 'KVM-Go, KVM over USB, KVM ultra-compact, KVM breloc, 4K KVM, control headless',
    heroImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    heroImages: [
      'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
      'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
    ],
    buyLabel: 'Precomandă ACUM',
    buyHref: siteConfig.links.kvmgoPurchase,
    funding: { amount: '$101.548', date: 'Finanțat pe 30 dec. 2025', backers: '478' },
    painPoints: [
      'Echipamentele KVM tradiționale sunt voluminoase și necesită cabluri video separate',
      'Accesul de urgență la server pe teren necesită un instrument de buzunar',
      'Depanarea dispozitivelor fără monitor și fără acces la rețea este lentă',
    ],
    solutions: [
      'Conectorii video încorporați elimină cablurile suplimentare',
      'Formatul de breloc este întotdeauna la îndemână',
      'KVM-over-USB — nu sunt necesare rețea sau drivere pe țintă',
    ],
    hwFeatures: [
      { title: 'Video încorporat', description: 'Modele HDMI, DisplayPort sau VGA — fără cabluri libere.' },
      { title: 'Mărime de breloc', description: 'Cel mai mic KVM-over-USB din gama Openterface.' },
      { title: 'Suport 4K', description: 'Captură de înaltă rezoluție pentru monitoare moderne.' },
    ],
    swFeatures: [
      { title: 'Aplicația Openterface Qt', description: 'Control gazdă multi-platformă pentru Windows, macOS și Linux.' },
      { title: 'Comutator MicroSD', description: 'Stocare comutabilă pentru imagini de sistem de operare portabile și instrumente.' },
      { title: 'Stivă open source', description: 'Firmware și aplicații gazdă conduse de comunitate.' },
    ],
    specs: [
      { label: 'Video', value: 'HDMI / DP / VGA (în funcție de model)' },
      { label: 'Rezoluție', value: 'Până la 4K' },
      { label: 'Conexiune', value: 'USB-C KVM-over-USB' },
    ],
    useCases: ['Inspecții în centre de date', 'Configurare dispozitive headless', 'Salvare IT pe teren și homelab'],
    docLinks: [
      { label: 'Caracteristici', href: legacyPath('/product/kvm-go/features/') },
      { label: 'Pornire rapidă Beta', href: legacyPath('/product/kvm-go/beta-quick-start/') },
      { label: 'Cum se conectează', href: legacyPath('/product/kvm-go/how-to-connect/') },
      { label: 'Întrebări frecvente', href: legacyPath('/product/kvm-go/faq/') },
      { label: 'Descarcă Aplicația', href: legacyPath('/app/overview/') },
    ],
    legacyBase: '/product/kvm-go/',
  },
  minikvm: {
    slug: 'minikvm',
    title: 'Openterface Mini-KVM',
    slogan: 'Transformă-ți laptopul într-o consolă KVM',
    subtitle: 'Simplifică-ți viața tehnologică.',
    description:
      'O soluție KVM-over-USB plug-and-play. Controlează un calculator fără monitor din apropiere de pe laptopul tău folosind USB și HDMI — fără periferice suplimentare sau rețea necesară.',
    seoDescription:
      'Openterface Mini-KVM: KVM-over-USB plug-and-play cu HDMI. Controlează calculatoare fără monitor de pe laptop fără rețea.',
    keywords: 'Mini-KVM, KVM over USB, control headless, HDMI KVM, KVM plug and play',
    heroImage: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    heroImages: [
      'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
      'https://assets.openterface.com/images/cover/mini-kvm.webp',
    ],
    buyLabel: 'Comandă ACUM',
    buyHref: siteConfig.links.minikvmPurchase,
    funding: { amount: '$505.471', date: 'Finanțat pe 13 iun. 2024', backers: '3.775' },
    painPoints: [
      'Transportul unui monitor și al unei tastaturi pentru fiecare reparare de server este impracticabil',
      'KVM-ul de rețea necesită configurare și conectivitate',
      'Profesioniștii IT au nevoie zilnic de un KVM de buzunar fiabil',
    ],
    solutions: [
      'Folosește laptopul existent ca consolă KVM',
      'Captură HDMI + USB HID într-un singur dispozitiv compact',
      'Dovedit de peste 5.000 de membri ai comunității din 2024',
    ],
    hwFeatures: [
      { title: 'Captură HDMI', description: 'Video complet de la mașina țintă la laptopul gazdă.' },
      { title: 'Comutator USB', description: 'Comută dispozitivele USB între gazdă și țintă.' },
      { title: 'Pini de extensie', description: 'Opțiuni de hardware hacking și integrare personalizată.' },
    ],
    swFeatures: [
      { title: 'Aplicații Qt / macOS / Android', description: 'Aplicații native pentru fiecare platformă gazdă majoră.' },
      { title: 'Open source', description: 'Ecosistem hardware și software complet deschis.' },
      { title: 'Comunitate activă', description: 'Discord, GitHub și actualizări regulate de firmware.' },
    ],
    specs: [
      { label: 'Intrare video', value: 'HDMI' },
      { label: 'USB', value: 'USB-C cu port comutabil' },
      { label: 'Status', value: 'Se livrează — Crowd Supply' },
    ],
    useCases: ['Gestionare homelab', 'Control side-by-side pentru stații de lucru dezvoltatori', 'Depanare la bancul de lucru IT'],
    docLinks: [
      { label: 'Caracteristici', href: legacyPath('/product/minikvm/features/') },
      { label: 'Comutator USB', href: legacyPath('/product/minikvm/usb-switch/') },
      { label: 'Suport tehnic', href: legacyPath('/product/minikvm/support/') },
      { label: 'Întrebări frecvente', href: legacyPath('/product/minikvm/faq/') },
      { label: 'Descarcă Aplicația', href: legacyPath('/app/overview/') },
    ],
    legacyBase: '/product/minikvm/',
  },
  'uconsole-kvm-extension': {
    slug: 'uconsole-kvm-extension',
    title: 'Extensie KVM uConsole',
    slogan: 'Putere KVM pentru uConsole-ul tău',
    subtitle: 'Transformă uConsole-ul portabil într-un terminal KVM complet.',
    description:
      'O extensie hardware care adaugă capacitate KVM-over-USB la Clockwork uConsole. Perfectă pentru munca IT portabilă cu tastatură și ecran încorporate.',
    seoDescription:
      'Extensia KVM uConsole adaugă KVM-over-USB la calculatorul portabil Clockwork uConsole.',
    keywords: 'uConsole, extensie KVM, KVM portabil, Clockwork uConsole',
    heroImage: 'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    heroImages: [
      'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    ],
    buyLabel: 'Află mai multe',
    buyHref: legacyPath('/product/uconsole-kvm-extension/'),
    painPoints: [
      'Consolele portabile duc lipsă de KVM integrat pentru ținte fără monitor',
      'Tehnicienii de teren doresc un singur dispozitiv pentru toate sarcinile',
    ],
    solutions: [
      'Placă de extensie nativă pentru factorul de formă uConsole',
      'Stivă KVM Openterface completă pe un dispozitiv de buzunar',
    ],
    hwFeatures: [
      { title: 'Nativ uConsole', description: 'Proiectat special pentru Clockwork uConsole.' },
      { title: 'PCB compact', description: 'Se instalează în interiorul carcasei uConsole.' },
    ],
    swFeatures: [
      { title: 'Aplicații Openterface', description: 'Același software de încredere ca la Mini-KVM și KVM-GO.' },
      { title: 'Ghiduri de configurare', description: 'Documentație pas cu pas pentru instalarea hardware și software.' },
    ],
    specs: [
      { label: 'Compatibilitate', value: 'Clockwork uConsole' },
      { label: 'Certificare', value: 'Certificat OSHWA' },
    ],
    useCases: ['Instrument portabil pentru centre de date', 'Maker și homelab în mișcare'],
    docLinks: [
      { label: 'Instalare Hardware', href: legacyPath('/product/uconsole-kvm-extension/hardware-installation/') },
      { label: 'Configurare Software', href: legacyPath('/product/uconsole-kvm-extension/software-setup/') },
      { label: 'Cum se conectează', href: legacyPath('/product/uconsole-kvm-extension/connect-to-target/') },
      { label: 'Întrebări frecvente', href: legacyPath('/product/uconsole-kvm-extension/faq/') },
    ],
    legacyBase: '/product/uconsole-kvm-extension/',
  },
  accessories: {
    slug: 'accessories',
    title: 'Accesorii Openterface',
    slogan: 'Completează-ți configurația',
    subtitle: 'Cabluri premium, adaptoare și genți de instrumente pentru profesioniști.',
    description:
      'Accesorii esențiale, inclusiv adaptoare video, cabluri de mare viteză și soluții de stocare. Îmbunătățește-ți experiența Openterface cu echipamente de calitate din magazinul TxA.',
    seoDescription: 'Accesorii Openterface — cabluri, adaptoare, genți de instrumente și conectori video.',
    keywords: 'accesorii KVM, cablu HDMI, cablu USB-C, geantă de instrumente',
    heroImage: 'https://assets.openterface.com/images/cover.webp',
    heroImages: ['https://assets.openterface.com/images/cover.webp'],
    buyLabel: 'Cumpără ACUM',
    buyHref: siteConfig.links.shop,
    painPoints: ['Lipsa cablului potrivit pe teren întârzie fiecare reparație'],
    solutions: ['Accesorii selectate și testate cu produsele Openterface'],
    hwFeatures: [
      { title: 'Adaptoare video', description: 'HDMI, VGA și conectori speciali.' },
      { title: 'Cabluri de mare viteză', description: 'Cabluri USB-C și Type-A construite pentru sarcini KVM.' },
      { title: 'Geantă de instrumente', description: 'Organizează-ți setul complet Openterface.' },
    ],
    swFeatures: [],
    specs: [],
    useCases: ['Organizarea setului de teren', 'Conversia formatului video', 'Cabluri de rezervă pentru gențile IT'],
    docLinks: [
      { label: 'Toate produsele', href: legacyPath('/product/accessories/') },
      { label: 'Magazinul TxA', href: siteConfig.links.shop },
    ],
    legacyBase: '/product/accessories/',
  },
};

export const productSlugs = Object.keys(products);
