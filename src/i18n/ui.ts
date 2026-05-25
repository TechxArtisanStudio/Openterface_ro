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
  }
};
