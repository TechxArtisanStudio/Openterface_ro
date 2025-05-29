---
title: "Pini de Extensie"
description: "Explorează potențialul pinilor de extensie ai Openterface Mini-KVM pentru dezvoltarea de hardware personalizat și proiecte open-source."
keywords: "Pini extensie Mini-KVM, dezvoltare personalizată, modificare hardware, KVM open-source"
---

# **Pini de Extensie** | Mod Dezvoltator | Openterface Mini-KVM

![mini-kvm-pins-port](https://assets.openterface.com/images/product/mini-kvm-pins-port.webp){:style="height:360px"}
![pin-cap](https://assets.openterface.com/images/product/part/pin-cap.webp){:style="height:300px"}

Openterface Mini-KVM dispune de pini de extensie pentru dezvoltare avansată și experimentare cu [Software Open](/app). Acești pini nu sunt expuși în configurația standard a carcasei.

## Cum să Accesezi Pinii

1. Dezasamblează dispozitivul.
2. Înlocuiește capacul original al carcasei cu un Capac pentru Pini de Extensie specializat.
3. Descarcă [modelul 3D](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware/tree/main/models) pentru Capacul Pinilor de Extensie.
4. Consultă [repository-ul nostru GitHub pentru Hardware](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware).

![change-cap](https://assets.openterface.com/images/product/change-cap.svg#only-light){:style="height:300px"}
![change-cap](https://assets.openterface.com/images/product/change-cap_1.svg#only-dark){:style="height:300px"}

!!! warning "Garanție Anulată"
    Îndepărtarea carcasei originale poate anula garanția produsului. Toate modificările sau dezasamblările sunt făcute pe propria răspundere a utilizatorului.

!!! note "Funcții Experimentale"
    Funcțiile dezvoltate folosind acești pini sunt experimentale și nu au fost testate complet. Openterface nu este responsabil pentru nicio deteriorare, vătămare sau defecțiune rezultată din modificări, expunerea pinilor de extensie sau alte alterări ale dispozitivului.

## Configurația Pinilor

![target-side](https://assets.openterface.com/images/product/extension-pins-1.svg#only-light){:style="height:200px"}
![host-side](https://assets.openterface.com/images/product/extension-pins-2.svg#only-light){:style="height:200px"}
![target-side](https://assets.openterface.com/images/product/extension-pins-1_1.svg#only-dark){:style="height:200px"}
![host-side](https://assets.openterface.com/images/product/extension-pins-2_1.svg#only-dark){:style="height:200px"}

Pinii de extensie oferă următoarele conexiuni:

1. Alimentare USB 5V pentru componente externe
2. Date pozitive către hub-ul USB al gazdei
3. Date negative către hub-ul USB al gazdei
4. Date pozitive către hub-ul USB al țintei
5. Date negative către hub-ul USB al țintei
6. Împământare

!!! danger "Conexiunile Incorecte Cauzează Deteriorări"
    Amestecarea VCC și GND poate cauza deteriorări severe dispozitivului și componentelor conectate. Verificați întotdeauna de două ori conexiunile pinilor înainte de a alimenta dispozitivul.

## Capac pentru Pini de Extensie

![pin-cap](https://assets.openterface.com/images/product/part/pin-cap.webp){:style="height:360px"}

Acest Capac pentru Pini de Extensie imprimat 3D înlocuiește capacul original al Openterface Mini-KVM, permițând utilizatorilor avansați să expună și să acceseze pinii de extensie pentru dezvoltare personalizată. Puteți descărca fișierele modelului 3D din repository-ul nostru GitHub și să imprimați capacul singuri.

- **Utilizare**: Oferă acces la pinii de extensie pentru dezvoltare hardware avansată.
- **Descărcare**: [Fișiere Model 3D](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware/tree/main/models)

## Implică-te în Dezvoltare

Pe măsură ce continuăm să dezvoltăm și să experimentăm, vom actualiza această secțiune cu mai multe informații despre ce pot face acești pini și cum pot fi folosiți creativ. Creativitatea și expertiza ta pot ajuta la împingerea limitelor a ceea ce este posibil cu Openterface Mini-KVM. Te rugăm să te implici:

1. **Împărtășește-ți Ideile**: Ai un concept interesant pentru utilizarea acestor pini? Ne-ar plăcea să-l auzim!
2. **Contribuie cu Proiecte DIY**: Dacă ai creat ceva interesant, consideră să-l împărtășești cu comunitatea noastră [Discord Openterface](/discord).
3. **Alătură-te Discuției**: Conectează-te cu alți dezvoltatori și entuziaști pentru a face brainstorming și a colabora.

Hai să construim și să inovăm împreună!