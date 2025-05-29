---
title: "Cum să Conectezi"
description: "Ghid pas cu pas pentru configurarea Openterface Mini-KVM. Află cum să conectezi computerul gazdă și dispozitivul țintă cu instrucțiuni detaliate pentru conexiunile USB-C, HDMI și periferice. Include descrieri ale interfeței și sfaturi importante de configurare."
keywords: "Configurare Mini-KVM, ghid conexiune KVM, configurare USB-C KVM, conexiune HDMI KVM, ghid instalare KVM, configurare periferice computer, conexiune dispozitiv USB, ghid interfață KVM, configurare computer headless, configurare KVM"
---

# **Cum să Conectezi** | Ghid de Configurare | Openterface Mini-KVM

## Pași de Conectare

![to-host](https://assets.openterface.com/images/product/to-host.svg#only-light){:style="height:260px"} ![to-host](https://assets.openterface.com/images/product/to-host_1.svg#only-dark){:style="height:260px"}
![to-target](https://assets.openterface.com/images/product/to-target.svg#only-light){:style="height:260px"} ![to-target](https://assets.openterface.com/images/product/to-target_1.svg#only-dark){:style="height:260px"}

Pentru a configura Mini-KVM-ul tău, urmează acești pași în ordine:

1. **Conexiunea Computerului Gazdă** (Partea Portocalie):
    - Conectează computerul gazdă la mini-KVM folosind cablul USB Type-C portocaliu de 1,5m. Conectează-l în portul Type-C mamă de pe partea portocalie a mini-KVM-ului.

    !!! note "Aplicație Gazdă Necesară"
        Computerul gazdă trebuie să aibă aplicația gazdă instalată. Pentru mai multe informații și link-uri de descărcare, te rugăm să consulți pagina [Aplicație](/app).

2. **Conexiunea Dispozitivului Țintă** (Partea Neagră):
    - Conectează dispozitivul țintă la mini-KVM folosind cablul USB Type-C negru de 0,3m. Conectează-l în portul Type-C mamă de pe partea neagră a mini-KVM-ului.

3. **Conexiunea Ieșirii Video a Țintei** (Partea Neagră):
    - Conectează portul de ieșire video al dispozitivului țintă la portul HDMI mamă de pe partea neagră a mini-KVM-ului. Folosește cablul HDMI negru de 0,3m sau orice alt cablu adecvat de conversie sursă-video-la-HDMI, cum ar fi un cablu convertor VGA-la-HDMI.

    !!! note "Nu Este Necesară Aplicație pentru Țintă"
        Nu este necesară pre-instalarea sau configurarea pe dispozitivul țintă. Atâta timp cât dispozitivul țintă suportă operații UI cu ieșire video (HDMI, VGA, etc.) și are un port USB pentru a primi semnale emulate de tastatură și mouse (HID), poate fi utilizat. Astfel, platformele de dispozitive țintă suportate includ Windows, macOS, Linux, Android și iOS.

4. **Conexiunea Portului USB-A 2.0 Comutabil** (Opțional):
    - Dacă dorești să conectezi un dispozitiv USB la Portul USB-A 2.0 Comutabil, este recomandat să faci acest lucru după completarea celor trei conexiuni de mai sus și asigurarea că aplicația gazdă este deschisă.


## Interfețe

![host-side](https://assets.openterface.com/images/product/host-htc.svg#only-light){:style="width:360px"}

![target-side](https://assets.openterface.com/images/product/target-htc.svg#only-light){:style="width:360px"}

![host-side](https://assets.openterface.com/images/product/host-htc_1.svg#only-dark){:style="width:360px"}

![target-side](https://assets.openterface.com/images/product/target-htc_1.svg#only-dark){:style="width:360px"}

① ![Type-C to Host](https://assets.openterface.com/images/shell-icons/host.svg#only-light){:style="height:15px"} ![Type-C to Host](https://assets.openterface.com/images/shell-icons/host_1.svg#only-dark){:style="height:15px"} - **Port USB-C Gazdă** (Mamă): Ca port de dispozitiv USB, conectare la computerul Gazdă pentru transfer de date prin hub-ul USB încorporat

② ![Type-C to Target](https://assets.openterface.com/images/shell-icons/target.svg#only-light){:style="height:18px"} ![Type-C to Target](https://assets.openterface.com/images/shell-icons/target_1.svg#only-dark){:style="height:18px"} - **Port USB-C Țintă** (Mamă): Ca port de dispozitiv USB, conectare la computerul Gazdă pentru emularea ieșirii HID de tastatură și mouse prin hub-ul USB încorporat

③ ![HDMI Input](https://assets.openterface.com/images/shell-icons/input.svg#only-light){:style="height:18px"} ![HDMI Input](https://assets.openterface.com/images/shell-icons/input_1.svg#only-dark){:style="height:18px"} - **Port Intrare HDMI** (Mamă): Intrare sursă HDMI de la computerul Țintă

④ ![USB-A Port](https://assets.openterface.com/images/shell-icons/switchable-usb.svg#only-light){:style="height:26px"} ![USB-A Port](https://assets.openterface.com/images/shell-icons/switchable-usb_1.svg#only-dark){:style="height:26px"} - **Port USB-A 2.0 Comutabil** (Mamă): Ca port gazdă USB, utilizat fie de computerul gazdă, fie de computerul țintă la un moment dat, dar nu simultan. Te rugăm să verifici [Ghidul de Comutare a Portului USB](../usb-switch) pentru mai multe.

!!! warning "Limitări de alimentare USB"
    Puterea furnizată de portul USB depinde de placa de bază a Gazdei. Nu este recomandat să conectezi dispozitive USB care necesită multă putere. În mod normal, consumul de energie nu ar trebui să depășească 1,5W. Conectarea dispozitivelor de mare putere poate duce la funcționare instabilă sau deteriorări potențiale.

!!! warning "Portul USB-A Are Mecanism de Blocare Ferm"
    Portul USB-A include un mecanism de blocare care necesită forță suplimentară la conectarea sau deconectarea dispozitivelor. Acest lucru este intenționat și asigură o conexiune sigură. **Evită utilizarea dispozitivelor USB foarte mici** (precum stick-urile USB ultra-compacte), deoarece pot fi dificil de apucat și scos, putând duce la deteriorări.

!!! warning "Hub-ul USB Suplimentar Necesită Alimentare Externă și Poate Afecta Compatibilitatea"
    Mini-KVM-ul include deja un hub USB încorporat care se conectează atât la computerul gazdă, cât și la cel țintă. Dacă conectezi un hub USB extern suplimentar la portul USB-A, orice dispozitive USB atașate la acesta vor funcționa la un nivel mai profund în arborele de dispozitive USB. Unele computere pot avea limitări privind adâncimea arborelui USB, ceea ce poate cauza probleme de compatibilitate sau poate împiedica funcționarea corectă a anumitor dispozitive.

    În plus, asigură-te că orice hub USB conectat este alimentat extern. Hub-urile nealimentate pot cauza instabilitate sau defecțiuni ale întregii configurații mini-KVM.

⑤ ![Toggle Switch](https://assets.openterface.com/images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Toggle Switch](https://assets.openterface.com/images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} - **Comutator**: Pentru comutarea conexiunii portului USB-A 2.0 între computerul gazdă și cel țintă

⑥ ![Extension Pins](https://assets.openterface.com/images/shell-icons/pins.svg#only-light){:style="height:15px"} ![Extension Pins](https://assets.openterface.com/images/shell-icons/pins_1.svg#only-dark){:style="height:15px"} - **Pini de Extensie**: Ascunși implicit și accesibili doar prin înlocuirea capacului superior cu un capac alternativ. Pentru mai multe informații, te rugăm să verifici [Pini de Extensie](../extension-pins) pentru utilizare de către dezvoltatori.