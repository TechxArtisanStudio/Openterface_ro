import { docsPath, newsPath } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: 'Acasă', href: '/' },
  {
    label: 'Produse',
    href: '#',
    children: [
      { label: 'Seria KeyMod', href: '/products/keymod/' },
      { label: 'Seria KVM-GO', href: '/products/kvm-go/' },
      { label: 'Mini-KVM', href: '/products/minikvm/' },
      { label: 'Extensie KVM uConsole', href: '/products/uconsole-kvm-extension/' },
      { label: 'Accesorii', href: '/products/accessories/' },
    ],
  },
  { label: 'Video', href: '/videos/' },
  { label: 'Cazuri de utilizare', href: '/use-cases/' },
  { label: 'Documentație', href: docsPath(), external: true },
  { label: 'Știri', href: newsPath(), external: true },
  { label: 'Despre', href: '/about/' },
];
