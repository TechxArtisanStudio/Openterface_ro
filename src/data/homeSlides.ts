import { siteConfig } from '../config/site';

export interface HomeSlide {
  id: number;
  category: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  images?: string[];
  primaryCta?: {
    label: string;
    href: string;
    external?: boolean;
    analyticsEvent?: string;
    analyticsProduct?: string;
  };
  secondaryCta?: { label: string; href: string; external?: boolean };
  funding?: { amount: string; date: string; backers: string };
  progressSmall: string;
  progressLarge: string;
}

export const homeSlides: HomeSlide[] = [
  {
    id: 1,
    category: 'Seria KeyMod',
    headline: 'Transformă-ți telefonul într-o tastatură mini',
    description:
      'Un emulator HID USB + Bluetooth compact care îți transformă telefonul într-o tastatură și un trackpad portabil. Plug and play, 100% open source. Perfect pentru chioșcuri, televizoare inteligente și scurtături rapide de flux de lucru.',
    image: 'https://assets2.openterface.com/images/keymod/2in1.webp',
    imageAlt: 'Openterface Seria KeyMod',
    images: [
      'https://assets2.openterface.com/images/keymod/2in1.webp',
      'https://assets2.openterface.com/images/keymod/keymod.webp',
      'https://assets2.openterface.com/images/keymod/feature.webp',
    ],
    primaryCta: { label: 'Susține ACUM', href: siteConfig.links.keymodCrowdsupply, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'keymod' },
    secondaryCta: { label: 'Vezi produsul', href: '/keymod/' },
    progressSmall: 'Seria KeyMod',
    progressLarge: 'Transformă-ți telefonul într-o tastatură mini',
  },
  {
    id: 2,
    category: 'Seria KVM-GO',
    headline: 'KVM-ul ultra-compact care încape pe breloc',
    description:
      'Proiectat pentru a încăpea pe brelocul tău și pentru a te salva într-o clipă, acest gadget KVM-over-USB de ultimă generație este construit pentru operațiuni IT rapide pe teren.',
    image: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    imageAlt: 'Seria KVM-GO',
    images: [
      'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
      'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
    ],
    primaryCta: { label: 'Precomandă ACUM', href: siteConfig.links.kvmgoPurchase, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'kvm-go' },
    secondaryCta: { label: 'Vezi produsul', href: '/kvmgo/' },
    funding: { amount: '$101.548', date: 'Finanțat pe 30 dec. 2025', backers: '478' },
    progressSmall: 'Seria KVM-GO',
    progressLarge: 'KVM-ul ultra-compact care încape pe brelocul tău',
  },
  {
    id: 3,
    category: 'Seria Mini-KVM',
    headline: 'Soluția KVM compactă pentru profesioniști',
    description:
      'O soluție KVM-over-USB compactă, bogată în funcții și open-source, care îți simplifică viața tehnologică prin sarcini IT și depanare rapidă.',
    image: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    imageAlt: 'Openterface Mini-KVM',
    images: [
      'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
      'https://assets.openterface.com/images/cover/mini-kvm.webp',
    ],
    primaryCta: { label: 'Comandă ACUM', href: siteConfig.links.minikvmPurchase, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'minikvm' },
    secondaryCta: { label: 'Vezi produsul', href: '/minikvm/' },
    funding: { amount: '$505.471', date: 'Finanțat pe 13 iun. 2024', backers: '3.775' },
    progressSmall: 'Seria Mini-KVM',
    progressLarge: 'Soluția KVM compactă pentru profesioniști',
  },
  {
    id: 4,
    category: 'Magazinul TxA',
    headline: 'Completează-ți configurația cu accesorii premium',
    description:
      'Explorează gama noastră de accesorii esențiale, inclusiv adaptoare video, cabluri de mare viteză și soluții de stocare. Îmbunătățește-ți experiența Openterface cu accesorii de calitate proiectate pentru profesioniști.',
    image: 'https://assets.openterface.com/images/cover.webp',
    imageAlt: 'Accesorii Magazin TxA',
    primaryCta: { label: 'Cumpără ACUM', href: siteConfig.links.shop, external: true, analyticsEvent: 'shop_click', analyticsProduct: 'accessories' },
    secondaryCta: { label: 'Vezi accesorii', href: '/accessories/' },
    progressSmall: 'Magazin TxA',
    progressLarge: 'Completează-ți configurația cu accesorii premium',
  },
];

export const homeSeo = {
  title: 'Openterface | Soluții KVM ultra-compacte pentru profesioniști IT',
  description:
    'Descoperă Openterface - Soluții KVM-over-USB ultra-compacte, inclusiv Seria KVM-GO (mărime de breloc), Seria Mini-KVM și Extensia KVM uConsole.',
  keywords:
    'KVM-over-USB, comutator KVM, KVM portabil, USB KVM, gestionare server headless, KVM-GO, Mini-KVM, KeyMod',
};
