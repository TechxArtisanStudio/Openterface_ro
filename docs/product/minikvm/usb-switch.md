---
title: "Port USB comutabil"
description: "Aflați despre sistemul dual hardware-software de comutare USB în Openterface Mini-KVM. Înțelegeți cele patru stări operaționale, ghidurile de siguranță și capacitățile viitoare de acces la distanță."
keywords: "comutare USB, switch KVM, switch hardware, switch software, control port USB, KVM peste USB, KVM peste IP, acces la distanță, gestionare dispozitive USB, periferice computer, gestionare alimentare USB"
---

# **Ghid de comutare port USB** | Openterface Mini-KVM

Dispozitivul mini-KVM are un singur port USB-A 2.0 care se poate **conecta fie** la computerul gazdă, fie la computerul țintă, dar **niciodată la ambele simultan**.

Controlul vine de la două comutatoare:

- **Comutator Hardware**: Un comutator fizic cu două poziții pe dispozitiv ![Toggle Switch](https://assets.openterface.com/images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Toggle Switch](https://assets.openterface.com/images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} (înăuntru = gazdă, în afară = țintă).
- **Comutator Software**: Un buton de comutare în aplicația gazdă care redirecționează instantaneu portul USB fie către gazdă, fie către țintă.

## Stări operaționale

Conexiunea portului USB-A depinde atât de pozițiile **Comutatorului Hardware**, cât și de **Comutatorul Software**. Următorul tabel rezumă cele patru stări posibile:

| **Stare** | **Comutator Hardware** | **Comutator Software** | **Port conectat la** | **Stare sincronizare** |
|-----------|------------------------|------------------------|---------------------|------------------------|
| 1         | Gazdă                 | Gazdă                 | Gazdă               | Sincronizat           |
| 2         | Țintă                 | Țintă                 | Țintă               | Sincronizat           |
| 3         | Țintă                 | Gazdă                 | Gazdă               | Nesincronizat (→ Gazdă) |
| 4         | Gazdă                 | Țintă                 | Țintă               | Nesincronizat (→ Țintă) |

- **Sincronizat** înseamnă că setările hardware și software se potrivesc.
- **Nesincronizat** înseamnă că software-ul suprascrie temporar comutatorul hardware până când comutatorul hardware este mutat din nou.

Orice mișcare manuală a comutatorului hardware va actualiza afișajul software și va reveni la o stare sincronizată.

La pornire, dispozitivul este setat implicit la conexiunea gazdă. Software-ul detectează poziția comutatorului hardware și se sincronizează în consecință.

!!! warning "Nu uitați să scoateți stick-ul USB înainte de a comuta"
    Dacă portul USB este utilizat de un stick USB, asigurați-vă că îl scoateți înainte de a comuta pentru a transfera utilizarea portului către alt computer.

??? note "Cum să partajați un stick/disc USB între dispozitivele Gazdă și Țintă?"
    Fișierele pot fi transferate între gazdă și țintă urmând acești pași:

    1. Montați un stick USB pe gazdă când comutatorul mic negru este setat pe partea portului Type-C al gazdei.
    2. Copiați fișierele pe acest drive montat.
    3. După copiere, demontați drive-ul fără a-l deconecta fizic.
    4. Comutați comutatorul mic negru pe cealaltă parte. Această acțiune comută conexiunea portului USB-A la țintă.
    5. Montați stick-ul USB pe dispozitivul țintă și copiați/mutați fișierele de pe drive, completând procesul de transfer al fișierelor de la gazdă la țintă.

    Această metodă poate fi utilizată și în direcția opusă.

!!! Note "Ghid utilizator"
    - **Prioritate Comutator Software**: Indiferent de poziția comutatorului hardware, click-ul pe comutatorul software va schimba imediat direcția circuitului.

    - **Sincronizare Comutator Hardware**: Orice comutare manuală a Comutatorului Hardware va alinia starea sa cu Comutatorul Software, trecând fie la Starea 1 sau Starea 2 din Starea 3 sau 4 nesincronizată. Cu toate acestea, această sincronizare nu modifică neapărat conexiunea efectivă a circuitului.

    - **Monitorizare Comutator Hardware**: Comutatorul Hardware, deși fizic, este monitorizat de software și nu controlează direct direcția circuitului. În schimb, software-ul interpretează poziția comutatorului și gestionează comutarea efectivă a circuitului.