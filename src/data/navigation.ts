import { docsPath, newsPath, siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "Produse",
    href: '/products/',
    children: [
      { label: "Toate produsele", href: '/products/' },
      { label: 'KeyMod Series', href: '/keymod/' },
      { label: 'KVM-GO Series', href: '/kvmgo/' },
      { label: 'Mini-KVM', href: '/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/kvmext/' },
      { label: "Accesorii", href: '/accessories/' },
    ],
  },
  {
    label: "Aplicații",
    href: '/app/',
    children: [
      { label: "Toate aplicațiile", href: '/app/' },
      { label: "Control KVM", href: '/kvm/' },
      { label: 'KeyCmd', href: '/keycmd/' },
    ],
  },
  { label: "Media", href: '/videos/' },
  { label: "Despre noi", href: '/about/' },
  { label: "Documentație", href: docsPath(), external: true },
  { label: "Știri", href: newsPath(), external: true },
  { label: "Magazin", href: siteConfig.links.shop, external: true },
];
