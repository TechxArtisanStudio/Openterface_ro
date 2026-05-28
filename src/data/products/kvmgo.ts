import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KVM-GO marketing payload — cloned from Mini-KVM template (Phase 1D).
 * Sourced from docs/products/kvmgo/ (index, features, reviews, use-cases).
 */
export const kvmgoProduct: Product = {
  slug: 'kvm-go',
  title: "Openterface Seria KVM-GO",
  slogan: "KVM ultra-compact care încape pe brelocul tău",
  subtitle: "Pentru momente tehnice critice — Conectează. Controlează. Mergi.",
  status: 'pre-order',
  description:
    "Soluția KVM-over-USB de ultimă generație cu conectori video încorporați (HDMI, DisplayPort sau VGA). Ultra-compact, de mărimea unui breloc și construit pentru operațiuni IT rapide în centre de date și camere de servere.",
  seoDescription:
    "Controlează calculatoare fără monitor cu Openterface KVM-Go. HDMI/DP/VGA încorporat, de mărimea unui breloc, 4K KVM-over-USB pentru profesioniști IT.",
  keywords:
    "KVM-Go, KVM over USB, KVM ultra-compact, KVM breloc, 4K KVM, control headless",
  heroImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
  ],
  buyLabel: "Precomandă ACUM",
  buyHref: siteConfig.links.kvmgoPurchase,
  funding: { amount: "$101.548", date: "Finanțat pe 30 dec. 2025", backers: "478" },
  painPoints: [
    "Echipamentele KVM tradiționale sunt voluminoase și necesită cabluri video separate",
    "Accesul de urgență la server pe teren necesită un instrument de buzunar",
    "Depanarea dispozitivelor fără monitor și fără acces la rețea este lentă",
  ],
  solutions: [
    "Conectorii video încorporați elimină cablurile suplimentare",
    "Formatul de breloc este întotdeauna la îndemână",
    "KVM-over-USB — nu sunt necesare rețea sau drivere pe țintă",
  ],
  hwFeatures: [
    { title: "Video încorporat", description: "Modele HDMI, DisplayPort sau VGA — fără cabluri libere." },
    { title: "Mărime de breloc", description: "Cel mai mic KVM-over-USB din gama Openterface." },
    { title: "Suport 4K", description: "Captură de înaltă rezoluție pentru monitoare moderne." },
  ],
  swFeatures: [
    { title: "Aplicația Openterface Qt", description: "Control gazdă multi-platformă pentru Windows, macOS și Linux." },
    { title: "Comutator MicroSD", description: "Stocare comutabilă pentru imagini de sistem de operare portabile și instrumente." },
    { title: "Stivă open source", description: "Firmware și aplicații gazdă conduse de comunitate." },
  ],
  specs: [
    { label: "Video", value: "HDMI / DP / VGA (în funcție de model)" },
    { label: "Rezoluție", value: "Până la 4K" },
    { label: "Conexiune", value: "USB-C KVM-over-USB" },
  ],
  useCases: [
    "Inspecții în centre de date",
    "Configurare dispozitive headless",
    "Salvare IT pe teren și homelab",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with a keychain KVM that plugs straight in.',
      href: docsPath('/products/kvmgo/use-cases/'),
    },
    {
      title: 'EDC field toolkit',
      description: 'Always in your bag — built-in connector means one less cable to forget.',
      href: docsPath('/products/kvmgo/use-cases/'),
    },
    {
      title: 'Headless homelab rescue',
      description: 'Configure NAS, SBC, and lab nodes without a spare monitor.',
    },
    {
      title: 'Legacy VGA systems',
      description: 'VGA model targets older racks and industrial gear (in development).',
      href: docsPath('/products/kvmgo/features/'),
    },
    {
      title: 'BIOS & firmware access',
      description: 'Boot menus and recovery screens with no network dependency.',
      href: docsPath('/products/kvmgo/features/'),
    },
    {
      title: 'MicroSD OS installs',
      description: 'Switchable storage for imaging and portable recovery tools.',
      href: docsPath('/products/kvmgo/microsd-switch/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmgo/use-cases/'),
  specsDocsHref: docsPath('/products/kvmgo/features/'),
  docsOverviewHref: docsPath('/products/kvmgo/'),
  videoProductSlug: 'kvm-go',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What press & early users say',
  socialProof: [
    {
      quote:
        'Small enough to fit on a keychain, Openterface KVM-GO is a tiny, open-source hardware KVM-over-USB gadget with HDMI, DisplayPort, or VGA connectors.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2026/01/05/openterface-kvm-go-an-ultra-compact-kvm-over-usb-solution-with-hdmi-dp-or-vga-video-input/',
    },
    {
      quote:
        "Openterface's KVM-GO is a pocket-sized, open source tool for hardware-level access to headless computers.",
      author: 'Hackster News',
      href: 'https://www.hackster.io/news/a-kvm-that-fits-on-your-keychain-e2adb39f7a2b',
    },
    {
      quote:
        'Following the nearly half-million dollar crowdfunding success of the Mini-KVM, Openterface is back with the KVM-GO — a tiny KVM that reduces cable clutter.',
      author: 'Notebookcheck',
      href: 'https://www.notebookcheck.net/KVM-GO-Openterface-is-back-with-a-more-compact-and-refined-KVM.1196402.0.html',
    },
    {
      quote:
        'Keychain-friendly KVM-over-USB gadget comes in a smaller form factor but with upgraded 4K60-capable internals.',
      author: 'Hackster News',
      href: 'https://www.hackster.io/news/techxartisan-is-back-with-a-smaller-yet-more-powerful-openterface-the-openterface-kvm-go-26174b2d11c0',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KVM-GO updates',
  latestNewsSubtitle: 'Production milestones, app releases, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Caracteristici", href: docsPath("/product/kvm-go/features/") },
    { label: "Pornire rapidă Beta", href: docsPath("/product/kvm-go/beta-quick-start/") },
    { label: "Cum se conectează", href: docsPath("/product/kvm-go/how-to-connect/") },
    { label: "Întrebări frecvente", href: docsPath("/product/kvm-go/faq/") },
    { label: "Descarcă Aplicația", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/kvm-go/",
};
