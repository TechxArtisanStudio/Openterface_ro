export const siteConfig = {
  name: 'Openterface',
  locale: 'ro',
  url: 'https://ro.openterface.com',
  legacyUrl: 'https://openterface.com',
  description:
    'Soluții KVM-over-USB ultra-compacte pentru profesioniști IT — KVM-GO, Mini-KVM, KeyMod și Extensie KVM uConsole.',
  ogImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  accent: '#ff6e42',
  links: {
    minikvmPurchase: 'https://www.crowdsupply.com/techxartisan/openterface-mini-kvm',
    kvmgoPurchase: 'https://www.crowdsupply.com/techxartisan/openterface-kvm-go',
    keymodCrowdsupply: 'https://www.crowdsupply.com/techxartisan/openterface-keymod',
    shop: 'https://shop.techxartisan.com/',
    appOverview: 'https://openterface.com/app/overview/',
    subscribe: 'https://subscribe.openterface.com/api/subscribe/',
  },
  analytics: {
    enabled: import.meta.env.PROD,
    google: {
      provider: 'google' as const,
      measurementId: 'G-EKZEH6QYWT',
      linkerDomains: [
        'openterface.com',
        'en.openterface.com',
        'de.openterface.com',
        'es.openterface.com',
        'fr.openterface.com',
        'it.openterface.com',
        'jp.openterface.com',
        'ko.openterface.com',
        'pt.openterface.com',
        'ro.openterface.com',
        'zh.openterface.com',
      ],
    },
    ahrefs: {
      dataKey: 'b3G5nUND8OglcZwfjfwixQ',
    },
    consent: {
      storageKey: 'openterface-cookie-consent',
      title: 'Consimțământ pentru cookie-uri',
      description:
        'Folosim cookie-uri pentru a îmbunătăți calitatea conținutului, a analiza eficacitatea site-ului și nevoile. Prin consimțământ, ne ajutați să îmbunătățim site-ul nostru. Mulțumim!',
      acceptLabel: 'Accept',
      rejectLabel: 'Respinge',
      cookieLabel: 'Cookie',
    },
  },
} as const;

/** Build a legacy openterface.com URL for doc-heavy pages not yet migrated. */
export function legacyPath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.legacyUrl}${normalized}`;
}
