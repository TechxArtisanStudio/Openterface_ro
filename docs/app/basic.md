---
description: "Ghid complet pentru controalele de bază Openterface Mini-KVM: moduri mouse, intrare tastatură, acces BIOS, suport audio/video și comutare USB. Compatibil cu multiple sisteme de operare și dispozitive, suportând intrare video până la 4K@30Hz."
keywords: "Controale Mini-KVM, moduri control mouse, intrare tastatură, acces BIOS, transmisie audio, afișare video, comutare USB, compatibilitate dispozitive, configurare KVM, control hardware, suport 4K, semnale HID, control dispozitiv țintă, software gazdă, intrare HDMI"
---

# Control de Bază pentru Aplicațiile Gazdă

![use-case-pc-angled-view](https://assets.openterface.com/images/product/use-case-pc-angled-view.webp){ width=600 }

## 💻 Compatibilitate

- **Software Gazdă**: Instalați [aplicația noastră gazdă](/app) pentru macOS, Windows și Linux pentru a controla dispozitivele țintă. Asigurați-vă că sistemul gazdă este compatibil cu versiunea corespunzătoare a aplicației.
- **Compatibilitate Dispozitiv Țintă**: Nu este necesară pre-instalarea sau configurarea pe dispozitivul țintă. Atâta timp cât dispozitivul țintă suportă operații UI cu ieșire video (ex. HDMI, VGA) și are un port USB pentru a primi semnale emulate de tastatură și mouse (HID), poate fi utilizat. Platformele țintă suportate includ Windows, macOS, Linux, Android și iOS.

## 🖱 Control Mouse

- **Mod Absolut**: Cursorul mouse-ului țintă este mapsat direct la o poziție specifică pe ecranul gazdei prin aplicația noastră. Aceasta înseamnă că oriunde mutați mouse-ul gazdei în aplicația noastră, mouse-ul țintă va urma aceeași mișcare. Rețineți că ar putea exista o ușoară întârziere în mișcările cursorului. Puteți alege să ascundeți sau să afișați cursorul mouse-ului gazdei în timp ce este în aplicația noastră.

- **Mod Relativ**: Mișcarea mouse-ului țintă este relativă la poziția curentă a mouse-ului gazdei. Aceasta înseamnă că mișcarea mouse-ului gazdei va deplasa cursorul țintă cu o anumită distanță în aceeași direcție, fără un punct fix de start sau final. Puteți ieși din acest mod relativ folosind o scurtătură specifică.

## ⌨️ Tastatură

Când aplicația este focalizată, puteți tasta orice direct, iar aceste apăsări de taste vor fi transmise către computerul țintă.

## ⚙️ Acces la Nivel BIOS

- **Acces BIOS**: Folosiți aplicația noastră pentru a accesa BIOS-ul dispozitivelor țintă. Aceasta vă permite să controlați și să configurați setările direct din BIOS.

??? tip "Combinații de taste pentru a accesa BIOS-ul pentru diferite plăci de bază"

    - F2: Dell, Lenovo, ASUS, Acer, Toshiba, Samsung, Sony
    - F1: Lenovo
    - Del: ASUS, Acer, Gigabyte, MSI
    - F10: HP
    - Butonul Assist: Sony
    - Tasta Option (⌥): Apple (pentru a accesa managerul de pornire)

## 🔊 Sunet

- **Transmisie Audio**: Sunetul computerului țintă este transmis prin portul de intrare HDMI al mini-KVM-ului. Când folosiți aplicația noastră, sunetul de la computerul țintă va fi redat prin computerul gazdă, asigurând că auziți totul fără întreruperi.

## 🎥 Video

- **Afișare Video**: Aplicația noastră vă permite să vizualizați ecranul computerului țintă fără probleme. Suportă rezoluții video până la 1920x1080 la 30Hz pentru afișare în aplicație. Intrarea video maximă suportată este de până la 3840x2160 la 30Hz prin HDMI. În plus, cu ajutorul unui adaptor, poate accepta și surse de intrare video VGA, Micro HDMI, DVI și altele.

## 🔄 Port USB Comutabil

- **Utilizarea Portului USB**: Mini-KVM-ul dispune de un port USB-A 2.0 comutabil care poate fi comutat între computerele gazdă și țintă, dar nu simultan.
- **Metode de Comutare**: 
    - Comutator Hardware: Un comutator fizic pe dispozitiv
    - Comutator Software: Un buton în aplicația gazdă
- **Logica de Comutare**: Pentru informații mai detaliate despre logica de funcționare a portului USB comutabil, inclusiv interacțiunea dintre comutatoarele hardware și software, configurarea inițială, stările operaționale și tranzițiile de stare, vă rugăm să consultați [documentația Comutatorului USB](/usb-switch).

!!! warning "Important"
    - Nu uitați să scoateți orice unități USB conectate înainte de a comuta conexiunea portului.
    - Portul USB are limitări de putere. Nu conectați dispozitive care necesită multă putere, deoarece acest lucru poate duce la funcționare instabilă sau deteriorări potențiale.
