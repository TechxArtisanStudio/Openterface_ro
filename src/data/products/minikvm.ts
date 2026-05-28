import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * Mini-KVM marketing payload — reference template for Phase 1D–1G.
 * Sourced from docs/products/minikvm/ (index, features, reviews).
 */
export const minikvmProduct: Product = {
  slug: 'minikvm',
  title: "Openterface Mini-KVM",
  slogan: "Transformă-ți laptopul într-o consolă KVM",
  subtitle: "Simplifică-ți viața tehnologică.",
  status: 'shipping',
  description:
    "O soluție KVM-over-USB plug-and-play. Controlează un calculator fără monitor din apropiere de pe laptopul tău folosind USB și HDMI — fără periferice suplimentare sau rețea necesară.",
  seoDescription:
    "Openterface Mini-KVM: KVM-over-USB plug-and-play cu HDMI. Controlează calculatoare fără monitor de pe laptop fără rețea.",
  keywords:
    "Mini-KVM, KVM over USB, control headless, HDMI KVM, KVM plug and play",
  heroImage: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    'https://assets.openterface.com/images/cover/mini-kvm.webp',
  ],
  buyLabel: "Comandă ACUM",
  buyHref: siteConfig.links.minikvmPurchase,
  funding: { amount: "$505.471", date: "Finanțat pe 13 iun. 2024", backers: "3.775" },
  painPoints: [
    "Transportul unui monitor și al unei tastaturi pentru fiecare reparare de server este impracticabil",
    "KVM-ul de rețea necesită configurare și conectivitate",
    "Profesioniștii IT au nevoie zilnic de un KVM de buzunar fiabil",
  ],
  solutions: [
    "Folosește laptopul existent ca consolă KVM",
    "Captură HDMI + USB HID într-un singur dispozitiv compact",
    "Dovedit de peste 5.000 de membri ai comunității din 2024",
  ],
  hwFeatures: [
    { title: "Captură HDMI", description: "Video complet de la mașina țintă la laptopul gazdă." },
    { title: "Comutator USB", description: "Comută dispozitivele USB între gazdă și țintă." },
    { title: "Pini de extensie", description: "Opțiuni de hardware hacking și integrare personalizată." },
  ],
  swFeatures: [
    { title: "Aplicații Qt / macOS / Android", description: "Aplicații native pentru fiecare platformă gazdă majoră." },
    { title: "Open source", description: "Ecosistem hardware și software complet deschis." },
    { title: "Comunitate activă", description: "Discord, GitHub și actualizări regulate de firmware." },
  ],
  specs: [
    { label: "Intrare video", value: "HDMI" },
    { label: "USB", value: "USB-C cu port comutabil" },
    { label: "Status", value: "Se livrează — Crowd Supply" },
  ],
  useCases: [
    "Gestionare homelab",
    "Control side-by-side pentru stații de lucru dezvoltatori",
    "Depanare la bancul de lucru IT",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with the laptop you already carry.',
      href: docsPath('/minikvm/reviews/'),
    },
    {
      title: 'Homelab & SBC setup',
      description: 'Configure headless Raspberry Pi, NAS, and lab nodes from one laptop.',
    },
    {
      title: 'BIOS & firmware access',
      description: 'Reach boot menus and recovery screens with no network KVM required.',
      href: docsPath('/minikvm/features/'),
    },
    {
      title: 'Developer bench',
      description: 'Side-by-side host/target control without a second monitor.',
    },
    {
      title: 'Kiosk & embedded systems',
      description: 'Field configuration for displays, signage, and appliances.',
    },
    {
      title: 'MSP field toolkit',
      description: 'Quick headless access on customer sites — fast, offline-capable, pocket-sized.',
      href: docsPath('/minikvm/reviews/'),
    },
  ],
  useCasesDocsHref: docsPath('/minikvm/'),
  specsDocsHref: docsPath('/minikvm/features/'),
  docsOverviewHref: docsPath('/minikvm/'),
  videoProductSlug: 'minikvm',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What reviewers & testers say',
  socialProof: [
    {
      quote:
        'Promises to be a low cost, feature packed way to use a laptop as a monitor, keyboard and mouse for accessing servers and other computers.',
      author: 'Cameron Gray — YouTube review',
      href: 'https://www.youtube.com/watch?v=xAEQpWyfY-c',
    },
    {
      quote:
        'A simple gadget concept that has a permanent home on my test bench, turning my laptop into my display, keyboard, and mouse.',
      author: "apalrd's adventures",
      href: 'https://www.youtube.com/watch?v=ZZ5P6MnBcHw',
    },
    {
      quote:
        'Plug-and-play and network-independent KVM-over-USB that establishes a direct HDMI and USB connection between host and target.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2024/05/09/openterface-mini-kvm-affordable-kvm-over-usb-device/',
    },
    {
      quote:
        "In datacenters it's cool that this totally replaces a crash cart using the laptop you'd already have with you!",
      author: 'samw — tinytoolk.it',
      href: 'https://tinytoolk.it/tools/openterface-kvm/',
    },
    {
      quote:
        'Latency is definitely better than using VNC… Overall a very solid device, it has been a very worthy addition to my daily carry toolkit.',
      author: '65Diamond — r/msp',
      href: 'https://www.reddit.com/r/msp/comments/1j2dlde/comment/mju6uru/',
    },
    {
      quote:
        'An extremely useful tool… The hardware is more than solid and the toolbox also contains all the accessories you need.',
      author: 'Florian Bernd — beta tester',
      href: 'https://blog.flobernd.de/2024/06/openterface-beta-test/',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest Mini-KVM updates',
  latestNewsSubtitle: 'Firmware releases, app updates, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Caracteristici", href: docsPath("/product/minikvm/features/") },
    { label: "Comutator USB", href: docsPath("/product/minikvm/usb-switch/") },
    { label: "Suport tehnic", href: docsPath("/product/minikvm/support/") },
    { label: "Întrebări frecvente", href: docsPath("/product/minikvm/faq/") },
    { label: "Descarcă Aplicația", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/minikvm/",
};
