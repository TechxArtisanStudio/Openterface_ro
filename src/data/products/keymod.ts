import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KeyMod marketing payload — Phase 1E flat landing at /keymod/.
 * Sourced from docs/products/keymod/ (index, features, use-cases).
 */
export const keymodProduct: Product = {
  slug: 'keymod',
  title: "Openterface Seria KeyMod",
  slogan: "Transformă-ți telefonul într-o tastatură inteligentă",
  subtitle: "Control programabil al tastaturii și mouse-ului pentru tehnologie, profesioniști și gaming.",
  status: 'pre-launch',
  description:
    "Un emulator HID USB + Bluetooth compact și programabil care îți transformă telefonul într-o consolă portabilă de tastatură și trackpad. Construit pe nucleul HID dovedit de la Openterface Mini-KVM — plug and play, 100% open source.",
  seoDescription:
    "Seria KeyMod îți transformă telefonul într-o tastatură și trackpad portabil. Emulator HID USB + Bluetooth, open source, perfect pentru chioșcuri și scurtături de flux de lucru.",
  keywords:
    "KeyMod, emulator HID, tastatură telefon, tastatură Bluetooth, tastatură USB, open source",
  heroImage: 'https://assets2.openterface.com/images/keymod/2in1.webp',
  heroImages: [
    'https://assets2.openterface.com/images/keymod/2in1.webp',
    'https://assets2.openterface.com/images/keymod/keymod.webp',
    'https://assets2.openterface.com/images/keymod/feature.webp',
  ],
  buyLabel: "Susține ACUM",
  buyHref: siteConfig.links.keymodCrowdsupply,
  painPoints: [
    "Transportul unei tastaturi complete pentru configurarea unui chioșc sau TV este impracticabil",
    "Scurtăturile fluxului de lucru necesită macro-uri programabile în mișcare",
    "Multe instrumente HID sunt closed-source cu personalizare limitată",
  ],
  solutions: [
    "Folosește-ți telefonul ca tastatură și trackpad portabil",
    "HID USB și Bluetooth într-un singur dispozitiv compact",
    "100% open source cu suport pentru aplicația Openterface",
  ],
  hwFeatures: [
    { title: "Format compact", description: "Încape în buzunar pentru munca de teren și călătorii." },
    { title: "USB + Bluetooth", description: "Conectivitate duală pentru compatibilitate maximă cu dispozitivele." },
    { title: "Hardware deschis", description: "Design transparent construit pe nucleul HID dovedit al Openterface." },
  ],
  swFeatures: [
    { title: "Aplicația KeyMod", description: "Configurează macro-uri, layout-uri și profiluri de gamepad de pe telefon." },
    { title: "Multi-platformă", description: "Funcționează cu Android, iPadOS și gazde desktop prin aplicațiile Openterface." },
    { title: "Open source", description: "Stiva completă disponibilă pe GitHub pentru contribuții din partea comunității." },
  ],
  specs: [
    { label: "Conectivitate", value: "USB-C + Bluetooth LE" },
    { label: "Moduri HID", value: "Tastatură, mouse, gamepad" },
    { label: "Licență", value: "Hardware și software open source" },
  ],
  useCases: [
    "Intrare pentru Smart TV și chioșcuri",
    "Macro-uri pentru flux de lucru mobil",
    "Configurații pentru gaming și accesibilitate",
  ],
  useCaseCards: [
    {
      title: 'Outdoor display computers',
      description: 'Configure and troubleshoot outdoor PCs without carrying a keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'LED signage players',
      description: 'On-site updates to signage controllers — phone as full keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Kiosks',
      description: 'Debug, configure, or maintain kiosks with immediate HID access.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Smart TVs & set-top boxes',
      description: 'Full keyboard and trackpad when the remote is not enough.',
    },
    {
      title: 'Quick workflow shortcuts',
      description: 'Developers and IT staff — occasional input without extra gear.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Portable & plug-and-play',
      description: 'Your phone is always with you; KeyMod stays compact in your bag.',
    },
  ],
  useCasesDocsHref: docsPath('/keymod/use-cases/'),
  specsDocsHref: docsPath('/keymod/features/'),
  docsOverviewHref: docsPath('/keymod/'),
  videoProductSlug: 'keymod',
  videoSectionTitle: 'Community reviews & demos',
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KeyMod updates',
  latestNewsSubtitle: 'Beta releases, app updates, and pre-launch news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Caracteristici", href: docsPath("/product/keymod/features/") },
    { label: "Ce se află în cutie", href: docsPath("/product/keymod/whats-in-the-box/") },
    { label: "Cum se conectează", href: docsPath("/product/keymod/how-to-connect/") },
    { label: "Întrebări frecvente", href: docsPath("/product/keymod/faq/") },
    { label: "Descarcă Aplicația KeyMod", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/keymod/",
};
