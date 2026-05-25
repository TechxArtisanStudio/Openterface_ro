export interface MarketingUi {
  docLinkBanner: {
    aboutMessage: string;
    homeMessage: string;
    productMessage: string;
    linkLabel: string;
  };
  homeSubscribe: {
    kicker: string;
    heading: string;
    description: string;
    benefitCrowdfunding: string;
    benefitGuides: string;
    benefitUnsubscribe: string;
    submitLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    footnote: string;
  };
  siteFooter: {
    tagline: string;
    productsHeading: string;
    keymodSeries: string;
    kvmGoSeries: string;
    miniKvm: string;
    accessories: string;
    resourcesHeading: string;
    videos: string;
    faqs: string;
    apps: string;
    support: string;
    newsletterTitle: string;
    newsletterDescription: string;
    newsletterSubmit: string;
    newsletterNamePlaceholder: string;
    newsletterEmailPlaceholder: string;
    newsletterFootnote: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
  productLanding: {
    downloadApp: string;
    backers: string;
    theProblem: string;
    theSolution: string;
    hwSoftwareTitle: string;
    hwSoftwareSubtitle: string;
    hardware: string;
    software: string;
    swFallback: string;
    keySpecs: string;
    useCases: string;
    documentation: string;
    ctaTitle: string;
    ctaSubtitle: string;
  };
}

export const ui: MarketingUi = {
  "docLinkBanner": {
    "aboutMessage": "Ghiduri produse, întrebări frecvente, tutoriale și descărcări de aplicații sunt pe docs.openterface.com.",
    "homeMessage": "Tutoriale, întrebări frecvente, descărcări de aplicații și ghiduri produse sunt pe docs.openterface.com.",
    "linkLabel": "Deschide documentația ↗",
    "productMessage": "Specificații detaliate, ghiduri de configurare și întrebări frecvente sunt pe docs.openterface.com."
  },
  "homeSubscribe": {
    "kicker": "Rămâi la curent",
    "heading": "Primește primul actualizări KVM-GO, KeyMod și Mini-KVM",
    "description": "Lansări de produse, firmware și sfaturi IT practice — cel mult o dată pe lună. Fără spam, doar știri utile de la echipa Openterface.",
    "benefitCrowdfunding": "Acces timpuriu la crowdfunding și precomenzi",
    "benefitGuides": "Ghiduri de configurare și note de lansare ale aplicațiilor",
    "benefitUnsubscribe": "Dezabonare oricând cu un singur clic",
    "submitLabel": "Abonează-te la actualizări",
    "namePlaceholder": "Nume (opțional)",
    "emailPlaceholder": "Adresă de e-mail *",
    "footnote": "Cel mult un e-mail pe lună. Dezabonare oricând. Contact: info@openterface.com"
  },
  "siteFooter": {
    "tagline": "Soluții KVM-over-USB ultracompacte pentru profesioniștii IT.",
    "productsHeading": "Produse",
    "keymodSeries": "Seria KeyMod",
    "kvmGoSeries": "Seria KVM-GO",
    "miniKvm": "Mini-KVM",
    "accessories": "Accesorii",
    "resourcesHeading": "Resurse",
    "videos": "Videoclipuri",
    "faqs": "Întrebări frecvente",
    "apps": "Aplicații",
    "support": "Suport",
    "newsletterTitle": "Newsletter",
    "newsletterDescription": "Actualizări lunare despre produse, firmware și sfaturi KVM.",
    "newsletterSubmit": "Abonare",
    "newsletterNamePlaceholder": "Nume",
    "newsletterEmailPlaceholder": "E-mail *",
    "newsletterFootnote": "Dezabonare oricând.",
    "copyright": "Openterface. KVM-over-USB open source.",
    "privacy": "Confidențialitate",
    "terms": "Termeni"
  },
  "productLanding": {
    "downloadApp": "Descarcă aplicația",
    "backers": "Susținători",
    "theProblem": "Problema",
    "theSolution": "Soluția",
    "hwSoftwareTitle": "Hardware + Software",
    "hwSoftwareSubtitle": "Produsele Openterface funcționează cel mai bine cu aplicațiile host open source.",
    "hardware": "Hardware",
    "software": "Software",
    "swFallback": "Consultați TxA Shop pentru detalii despre compatibilitatea accesoriilor.",
    "keySpecs": "Specificații cheie",
    "useCases": "Cazuri de utilizare",
    "documentation": "Documentație",
    "ctaTitle": "Gata să începi?",
    "ctaSubtitle": "Comandă hardware-ul și descarcă aplicația Openterface pentru platforma ta."
  }
};
