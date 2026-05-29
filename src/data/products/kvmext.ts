import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

const KVMEXT_SHOP =
  'https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole';

/**
 * KVM Extension (uConsole) marketing payload — Phase 1F flat landing at /kvmext/.
 * Sourced from docs/products/kvmext/ (index, features).
 */
export const kvmextProduct: Product = {
  slug: 'uconsole-kvm-extension',
  title: "Extensie KVM uConsole",
  slogan: "Putere KVM pentru uConsole-ul tău",
  subtitle: "Transformă uConsole-ul portabil într-un terminal KVM complet.",
  status: 'oshwa',
  description:
    "O extensie hardware care adaugă capacitate KVM-over-USB la Clockwork uConsole. Perfectă pentru munca IT portabilă cu tastatură și ecran încorporate.",
  seoDescription:
    "Extensia KVM uConsole adaugă KVM-over-USB la calculatorul portabil Clockwork uConsole.",
  keywords:
    "uConsole, extensie KVM, KVM portabil, Clockwork uConsole",
  heroImage:
    'https://assets.openterface.com/images/cover/uconsole.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/uconsole.webp',
    'https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension.webp',
  ],
  buyLabel: "Află mai multe",
  buyHref: KVMEXT_SHOP,
  painPoints: [
    "Consolele portabile duc lipsă de KVM integrat pentru ținte fără monitor",
    "Tehnicienii de teren doresc un singur dispozitiv pentru toate sarcinile",
  ],
  solutions: [
    "Placă de extensie nativă pentru factorul de formă uConsole",
    "Stivă KVM Openterface completă pe un dispozitiv de buzunar",
  ],
  hwFeatures: [
    { title: "Nativ uConsole", description: "Proiectat special pentru Clockwork uConsole." },
    { title: "PCB compact", description: "Se instalează în interiorul carcasei uConsole." },
  ],
  swFeatures: [
    { title: "Aplicații Openterface", description: "Același software de încredere ca la Mini-KVM și KVM-GO." },
    { title: "Ghiduri de configurare", description: "Documentație pas cu pas pentru instalarea hardware și software." },
  ],
  specs: [
    { label: "Compatibilitate", value: "Clockwork uConsole" },
    { label: "Certificare", value: "Certificat OSHWA" },
  ],
  useCases: [
    "Instrument portabil pentru centre de date",
    "Maker și homelab în mișcare",
  ],
  useCaseCards: [
    {
      title: 'Portable datacenter tool',
      description: 'Walk racks with your uConsole — one device for display, keyboard, and KVM.',
      href: docsPath('/products/kvmext/'),
    },
    {
      title: 'Maker & homelab on the go',
      description: 'Configure headless SBCs, NAS nodes, and lab gear from a pocketable console.',
      href: docsPath('/products/kvmext/features/'),
    },
    {
      title: 'Field IT & MSP visits',
      description: 'BIOS access and quick fixes without hauling a crash cart.',
    },
    {
      title: 'Network-free troubleshooting',
      description: 'When the target has no IP — HDMI + HID still works.',
      href: docsPath('/products/kvmext/connect-to-target/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmext/'),
  specsDocsHref: docsPath('/products/kvmext/features/'),
  docsOverviewHref: docsPath('/products/kvmext/'),
  videoProductSlug: 'uconsole-kvm-extension',
  videoSectionTitle: 'Installation & community demos',
  latestNewsHref: `${siteConfig.links.news}/products/kvmext/2025-08-28-oshwa-certification/`,
  latestNewsTitle: 'OSHWA certification achieved',
  latestNewsSubtitle: 'Official Open Source Hardware Association certification for the uConsole KVM Extension.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Instalare Hardware", href: docsPath("/product/uconsole-kvm-extension/hardware-installation/") },
    { label: "Configurare Software", href: docsPath("/product/uconsole-kvm-extension/software-setup/") },
    { label: "Cum se conectează", href: docsPath("/product/uconsole-kvm-extension/connect-to-target/") },
    { label: "Întrebări frecvente", href: docsPath("/product/uconsole-kvm-extension/faq/") },
  ],
  legacyBase: "/products/uconsole-kvm-extension/",
};
