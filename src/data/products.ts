export interface Product {
  id: string;
  name: { tr: string; en: string; fr: string; az: string };
  category: string;
  description: { tr: string; en: string; fr: string; az: string };
  image: string;
  images?: string[];
  features: { tr: string[]; en: string[]; fr: string[]; az: string[] };
  type?: 'hospital' | 'veterinary';
}

export const products: Product[] = [
  {
    "id": "comen-cm1200b",
    "name": {
      "tr": "Comen CM1200B 12 Kanallı EKG Cihazı",
      "en": "Comen CM1200B 12-Channel ECG Machine",
      "fr": "Appareil ECG 12 canaux Comen CM1200B",
      "az": "Comen CM1200B 12 Kanallı EKQ Cihazı"
    },
    "category": "ECG",
    "description": {
      "tr": "12.1 inç yüksek çözünürlüklü dokunmatik renkli ekranı, klavyesi ve üstün sinyal analiz yeteneği ile teşhis süreçlerini hızlandıran gelişmiş 12 kanallı EKG cihazı.",
      "en": "Advanced 12-channel ECG machine featuring a 12.1-inch high-resolution touch color display, keyboard, and superior signal analysis capability to speed up diagnostic processes.",
      "fr": "Appareil ECG avancé à 12 canaux doté d'un écran couleur tactile haute résolution de 12,1 pouces, d'un clavier et d'une capacité supérieure d'analyse du signal pour accélérer les processus de diagnostic.",
      "az": "12,1 düymlük yüksək rezolyusiyaya malik rəngli sensor ekranı, klaviaturası və üstün siqnal analizi qabiliyyəti ilə diaqnostik prosesləri sürətləndirən təkmil 12 kanallı EKQ cihazı."
    },
    "image": "/Comen-cm1200b-12-kanalli.jpg",
    "features": {
      "tr": [
        "12.1 inç Katlanabilir Yüksek Çözünürlüklü Dokunmatik Ekran",
        "Alfanümerik Klavye ve Tek Dokunuşla Hızlı Kullanım",
        "Gelişmiş EKG Analizi ve Glasgow Yorumlama Algoritması",
        "Dahili Yüksek Hızlı Termal Yazıcı",
        "USB, LAN ve Harici Yazıcı Bağlantı Desteği"
      ],
      "en": [
        "12.1-inch Foldable High-Resolution Touchscreen",
        "Alphanumeric Keyboard and One-Touch Quick Operation",
        "Advanced ECG Analysis and Glasgow Interpretation Algorithm",
        "Built-in High-Speed Thermal Printer",
        "USB, LAN and External Printer Connection Support"
      ],
      "fr": [
        "Écran tactile pliable haute résolution de 12,1 pouces",
        "Clavier alphanumérique et opération rapide à une touche",
        "Analyse ECG avancée et algorithme d'interprétation de Glasgow",
        "Imprimante thermique haute vitesse intégrée",
        "Prise en charge des connexions USB, LAN et imprimante externe"
      ],
      "az": [
        "12,1 düymlük qatlana bilən yüksək dəqiqlikli sensor ekran",
        "Alfanümerik Klaviatura və Tək Toxunma Tez İstifadəsi",
        "Təkmil EKQ Təhlili və Qlazqo Şərh Alqoritmi",
        "Quraşdırılmış Yüksək Sürətli Termal Printer",
        "USB, LAN və Xarici Printer Bağlantısı Dəstəyi"
      ]
    }
  },
  {
    "id": "comen-cm300",
    "name": {
      "tr": "Comen CM300 3 Kanallı EKG Cihazı",
      "en": "Comen CM300 3-Channel ECG Machine",
      "fr": "Appareil ECG à 3 canaux Comen CM300",
      "az": "Comen CM300 3 Kanallı EKQ Cihazı"
    },
    "category": "ECG",
    "description": {
      "tr": "Hassas ölçüm, taşınabilir şık tasarım ve kolay kullanım sunan profesyonel 3 kanallı EKG cihazı. Klinikler ve saha kullanımı için idealdir.",
      "en": "Professional 3-channel ECG machine offering precise measurement, portable sleek design, and easy operation. Ideal for clinics and field use.",
      "fr": "Appareil ECG professionnel à 3 canaux offrant une mesure précise, un design portable et élégant et une utilisation facile. Idéal pour les cliniques et l'utilisation sur le terrain.",
      "az": "Dəqiq ölçmə, portativ şık dizayn və asan istifadə təklif edən peşəkar 3 kanallı EKQ cihazı. Klinikalar və sahə istifadəsi üçün idealdır."
    },
    "image": "/Comen-CM300-3-Kanalli.jpg",
    "features": {
      "tr": [
        "3 Kanallı Gerçek Zamanlı Kayıt ve Baskı",
        "320x240 LCD Renkli Ekran",
        "Dahili Şarj Edilebilir Lityum Pil ile Mobil Kullanım",
        "Otomatik Ölçüm ve Yorum Analizi",
        "Kompakt, Hafif ve Ergonomik Gövde"
      ],
      "en": [
        "3-Channel Real-Time Recording and Printing",
        "320x240 LCD Color Screen",
        "Built-in Rechargeable Lithium Battery for Mobile Use",
        "Automatic Measurement and Interpretation Analysis",
        "Compact, Lightweight and Ergonomic Body"
      ],
      "fr": [
        "Enregistrement et impression en temps réel sur 3 canaux",
        "Écran couleur LCD 320x240",
        "Batterie au lithium rechargeable intégrée pour une utilisation mobile",
        "Analyse automatique des mesures et des interprétations",
        "Corps compact, léger et ergonomique"
      ],
      "az": [
        "3 Kanallı Real Zamanlı Qeyd və Çap",
        "320x240 LCD Rəngli Ekran",
        "Daxili təkrar doldurulan litium batareya ilə mobil istifadə",
        "Avtomatik Ölçmə və Şərh Təhlili",
        "Yığcam, Yüngül və Erqonomik Korpus"
      ]
    }
  },
  {
    "id": "mindray-beneheart-r12",
    "name": {
      "tr": "Mindray BeneHeart R12 EKG Cihazı",
      "en": "Mindray BeneHeart R12 ECG Machine",
      "fr": "Appareil ECG Mindray BeneHeart R12",
      "az": "Mindray BeneHeart R12 EKQ Cihazı"
    },
    "category": "ECG",
    "description": {
      "tr": "Çevre dostu kağıtsız çalışma modeli, üstün Glasgow algoritmalı tanı analizi ve kullanıcı dostu arayüzüyle fark yaratan 12 kanallı dijital EKG cihazı.",
      "en": "12-channel digital ECG machine making a difference with its eco-friendly paperless workflow, premium Glasgow algorithm diagnostic analysis, and user-friendly interface.",
      "fr": "Appareil ECG numérique à 12 canaux qui fait la différence grâce à son flux de travail sans papier respectueux de l'environnement, son analyse diagnostique par algorithme de Glasgow haut de gamme et son interface conviviale.",
      "az": "Ətraf mühitə uyğun sənədsiz iş modeli, üstün Qlazqo alqoritmi diaqnostik analizi və istifadəçi dostu interfeysi ilə fərq yaradan 12 kanallı rəqəmsal EKQ cihazı."
    },
    "image": "/Mindray-Beneheart-r12.jpg",
    "features": {
      "tr": [
        "8 inç Yüksek Çözünürlüklü Renkli TFT Ekran",
        "Glasgow Algoritmalı Güvenilir Otomatik Yorumlama",
        "Kağıtsız İş Akışı: Ekranda Tam Önizleme ve PDF Dışa Aktarma",
        "Tüm Yaş Grupları (Yenidoğandan Yetişkine) İçin Analiz",
        "Dahili Hafıza ve USB Belleğe Hızlı Aktarım"
      ],
      "en": [
        "8-inch High-Resolution Color TFT Display",
        "Reliable Automatic Interpretation with Glasgow Algorithm",
        "Paperless Workflow: Full Screen Preview and PDF Export",
        "Analysis for All Age Groups (Neonate to Adult)",
        "Built-in Memory and Quick Transfer to USB Drive"
      ],
      "fr": [
        "Écran TFT couleur haute résolution de 8 pouces",
        "Interprétation automatique fiable avec l'algorithme de Glasgow",
        "Flux de travail sans papier : aperçu plein écran et exportation PDF",
        "Analyse pour tous les groupes d'âge (du nouveau-né à l'adulte)",
        "Mémoire intégrée et transfert rapide vers une clé USB"
      ],
      "az": [
        "8 düymlük Yüksək Tərifli Rəngli TFT Ekran",
        "Qlazqo alqoritmi ilə etibarlı avtomatik şərh",
        "Kağızsız iş axını: Tam Ekranda Baxış və PDF İxrac",
        "Bütün Yaş Qrupları üçün Təhlil (Yenidoğandan Yetkinə)",
        "Daxili yaddaşa və USB yaddaşa sürətli köçürmə"
      ]
    }
  },
  {
    "id": "health-plus-ie12",
    "name": {
      "tr": "HEALTH PLUS İE12 Hastabaşı Monitörü",
      "en": "HEALTH PLUS iE12 Patient Monitor",
      "fr": "Moniteur patient HEALTH PLUS iE12",
      "az": "HEALTH PLUS İE12 Yataqbaşı Monitor"
    },
    "category": "Monitor",
    "description": {
      "tr": "12.1 inç yüksek çözünürlüklü TFT LCD ekranı, kararlı performansı ve zengin parametre izleme özellikleri ile hastaneler ve klinikler için ideal hasta başı monitörü.",
      "en": "Ideal patient monitor for hospitals and clinics featuring a 12.1-inch high-resolution TFT LCD display, stable performance, and rich parameter monitoring features.",
      "fr": "Moniteur patient idéal pour les hôpitaux et les cliniques, doté d'un écran LCD TFT haute résolution de 12,1 pouces, de performances stables et de riches fonctionnalités de surveillance des paramètres.",
      "az": "O, 12,1 düymlük yüksək rezolyusiyaya malik TFT LCD ekranı, sabit performansı və zəngin parametr monitorinqi xüsusiyyətləri ilə xəstəxanalar və klinikalar üçün ideal yataq yanında monitordur."
    },
    "image": "/Health-Plus-İE12.jpg",
    "features": {
      "tr": [
        "12.1 inç Renkli TFT LCD Ekran",
        "Standart Parametreler: ECG, RESP, SpO2, NIBP, TEMP, PR",
        "Yetişkin, Pediyatrik ve Yenidoğan Hastalarla Uyumlu",
        "Dahili Şarj Edilebilir Pil ile Kesintisiz İzleme",
        "Gelişmiş Alarm ve Aritmi Analiz Sistemi"
      ],
      "en": [
        "12.1-inch Color TFT LCD Display",
        "Standard Parameters: ECG, RESP, SpO2, NIBP, TEMP, PR",
        "Compatible with Adult, Pediatric, and Neonatal Patients",
        "Uninterrupted Monitoring with Built-in Rechargeable Battery",
        "Advanced Alarm and Arrhythmia Analysis System"
      ],
      "fr": [
        "Écran LCD TFT couleur de 12,1 pouces",
        "Paramètres standard : ECG, RESP, SpO2, NIBP, TEMP, PR",
        "Compatible avec les patients adultes, pédiatriques et néonatals",
        "Surveillance ininterrompue avec batterie rechargeable intégrée",
        "Système avancé d’alarme et d’analyse des arythmies"
      ],
      "az": [
        "12,1 düym Rəngli TFT LCD Ekran",
        "Standart Parametrlər: EKQ, RESP, SpO2, NIBP, TEMP, PR",
        "Yetkin, Pediatrik və Neonatal Xəstələr üçün uyğundur",
        "Daxili təkrar doldurulan batareya ilə fasiləsiz monitorinq",
        "Təkmil Siqnal və Aritmiya Analiz Sistemi"
      ]
    }
  },
  {
    "id": "health-plus-ie15",
    "name": {
      "tr": "Health Plus İE15 Hastabaşı Monitörü",
      "en": "Health Plus iE15 Patient Monitor",
      "fr": "Moniteur patient Health Plus iE15",
      "az": "Health Plus İE15 Yataq Başı Monitoru"
    },
    "category": "Monitor",
    "description": {
      "tr": "15 inç geniş renkli ekranı ve hassas veri ölçüm teknolojisi ile yoğun bakım ve ameliyathaneler için tasarlanmış profesyonel hasta başı monitörü.",
      "en": "Professional patient monitor designed for intensive care and operating rooms with a 15-inch large color screen and precise data measurement technology.",
      "fr": "Moniteur patient professionnel conçu pour les soins intensifs et les salles d'opération avec un grand écran couleur de 15 pouces et une technologie de mesure précise des données.",
      "az": "15 düymlük böyük rəngli ekranı və dəqiq məlumat ölçmə texnologiyası ilə intensiv terapiya və əməliyyat otaqları üçün nəzərdə tutulmuş peşəkar yataq yanında monitor."
    },
    "image": "/Health-Plus-İE15.png",
    "features": {
      "tr": [
        "15 inç Geniş Renkli TFT LCD Ekran",
        "Çok Kanallı EKG Dalga Formu Ekranı",
        "Opsiyonel İleri Parametre Desteği (CO2, IBP, CO)",
        "Yüksek Kapasiteli Bellek ve Geçmiş Veri İzleme",
        "Merkezi İzleme Sistemine Kablolu/Kablosuz Bağlantı"
      ],
      "en": [
        "15-inch Large Color TFT LCD Display",
        "Multi-Channel ECG Waveform Display",
        "Optional Advanced Parameters (CO2, IBP, CO)",
        "High Capacity Memory and Historical Data Review",
        "Wired/Wireless Connection to Central Monitoring System"
      ],
      "fr": [
        "Grand écran LCD TFT couleur de 15 pouces",
        "Affichage de la forme d'onde ECG multicanal",
        "Paramètres avancés facultatifs (CO2, IBP, CO)",
        "Mémoire haute capacité et examen des données historiques",
        "Connexion filaire/sans fil au système de surveillance central"
      ],
      "az": [
        "15 düymlük Böyük Rəngli TFT LCD Ekran",
        "Çoxkanallı EKQ Dalğa forması Ekranı",
        "Əlavə Qabaqcıl Parametr Dəstəyi (CO2, IBP, CO)",
        "Yüksək Tutumlu Yaddaş və Tarixi Məlumat İzləmə",
        "Mərkəzi Monitorinq Sisteminə Simli/Simsiz Qoşulma"
      ]
    }
  },
  {
    "id": "health-plus-yk-8000c",
    "name": {
      "tr": "HEALTH PLUS YK-8000C Hastabaşı Monitörü",
      "en": "HEALTH PLUS YK-8000C Patient Monitor",
      "fr": "Moniteur patient HEALTH PLUS YK-8000C",
      "az": "HEALTH PLUS YK-8000C Yataq Başı Monitoru"
    },
    "category": "Monitor",
    "description": {
      "tr": "Kompakt tasarımı, yüksek kontrastlı renkli ekranı ve güvenilir izleme algoritmaları ile öne çıkan pratik hasta başı monitörü.",
      "en": "Practical patient monitor standing out with its compact design, high-contrast color display, and reliable monitoring algorithms.",
      "fr": "Moniteur patient pratique qui se distingue par son design compact, son écran couleur à contraste élevé et ses algorithmes de surveillance fiables.",
      "az": "Kompakt dizaynı, yüksək kontrastlı rəngli ekranı və etibarlı monitorinq alqoritmləri ilə seçilən praktiki çarpayı yanında monitor."
    },
    "image": "/Health-Plus-YK-8000C.jpg",
    "features": {
      "tr": [
        "Kompakt ve Taşınabilir Tasarım",
        "Hassas SpO2 ve NIBP Ölçüm Algoritması",
        "Görsel ve Sesli Akıllı Alarm Sistemi",
        "Uzun Pil Ömrü ve Güç Tasarruf Modu",
        "Kolay Kullanımlı Arayüz ve Kısayol Tuşları"
      ],
      "en": [
        "Compact and Portable Design",
        "Precise SpO2 and NIBP Measurement Algorithm",
        "Visual and Audible Intelligent Alarm System",
        "Long Battery Life and Power Saving Mode",
        "Easy-to-use Interface and Shortcut Keys"
      ],
      "fr": [
        "Conception compacte et portable",
        "Algorithme précis de mesure de la SpO2 et de la PNI",
        "Système d'alarme intelligent visuel et sonore",
        "Longue durée de vie de la batterie et mode d'économie d'énergie",
        "Interface et touches de raccourci faciles à utiliser"
      ],
      "az": [
        "Kompakt və Portativ Dizayn",
        "Dəqiq SpO2 və NIBP Ölçmə Alqoritmi",
        "Vizual və Audio Ağıllı Siqnal Sistemi",
        "Uzun batareya ömrü və enerjiyə qənaət rejimi",
        "İstifadəsi asan interfeys və isti düymələr"
      ]
    }
  },
  {
    "id": "yonker-yk-8000b-hospital",
    "name": {
      "tr": "Yonker YK-8000B Hastabaşı Monitörü",
      "en": "Yonker YK-8000B Patient Monitor",
      "fr": "Moniteur patient Yonker YK-8000B",
      "az": "Yonker YK-8000B Yataq Başı Monitoru"
    },
    "category": "Monitor",
    "type": "hospital",
    "description": {
      "tr": "12.1 inç renkli TFT ekranı, çoklu parametre ölçüm yeteneği ve kararlı çalışma performansı ile hastaneler, klinikler ve acil servisler için tasarlanmış profesyonel hastabaşı monitörü.",
      "en": "Professional patient monitor designed for hospitals, clinics, and emergency departments with its 12.1-inch color TFT display, multi-parameter measurement capability, and stable performance.",
      "fr": "Moniteur patient professionnel conçu pour les hôpitaux, les cliniques et les services d'urgence avec son écran TFT couleur de 12,1 pouces, sa capacité de mesure multiparamétrique et ses performances stables.",
      "az": "12.1 düymlük rəngli TFT ekranı, çoxlu parametr ölçmə qabiliyyəti və stabil iş performansı ilə xəstəxanalar, klinikalar və təcili yardım şöbələri üçün hazırlanmış peşəkar yataq başı monitoru."
    },
    "image": "/yonker-yk-8000b.png",
    "features": {
      "tr": [
        "12.1 inç Yüksek Çözünürlüklü Renkli TFT LCD Ekran",
        "Standart 5 Parametre (EKG, RESP, NIBP, SpO2, TEMP)",
        "Sesli ve Görsel Akıllı Alarm Sistemi",
        "Trend Verileri ve Dalga Formu Saklama/İnceleme",
        "Dahili Şarj Edilebilir Lityum Pil ile Mobil Kullanım"
      ],
      "en": [
        "12.1-inch High-Resolution Color TFT LCD Display",
        "Standard 5 Parameters (ECG, RESP, NIBP, SpO2, TEMP)",
        "Audible and Visual Intelligent Alarm System",
        "Trend Data and Waveform Storage/Review",
        "Mobile Use with Built-in Rechargeable Lithium Battery"
      ],
      "fr": [
        "Écran LCD TFT couleur haute résolution de 12,1 pouces",
        "Standard 5 paramètres (ECG, RESP, PNI, SpO2, TEMP)",
        "Système d'alarme intelligent sonore et visuel",
        "Stockage et examen des données de tendance et des formes d'onde",
        "Utilisation mobile avec batterie au lithium rechargeable intégrée"
      ],
      "az": [
        "12.1 düymlük yüksək rezolyusiyalı rəngli TFT LCD ekran",
        "Standart 5 parametr (EKQ, RESP, NIBP, SpO2, TEMP)",
        "Səsli və vizual ağıllı siqnal sistemi",
        "Trend məlumatları və dalğa forması saxlama/nəzərdən keçirmə",
        "Daxili doldurula bilən litium batareya ilə mobil istifadə"
      ]
    }
  },
  {
    "id": "karl-storz-endoflator",
    "name": {
      "tr": "Karl Storz Endoflator İnsüflatör",
      "en": "Karl Storz Endoflator Insufflator",
      "fr": "Insufflateur Endoflator Karl Storz",
      "az": "Karl Storz Endoflator Insufflator"
    },
    "category": "Endovision",
    "description": {
      "tr": "Laparoskopik cerrahi operasyonlarında yüksek kararlılık ve hasta güvenliği sunan profesyonel gaz insüflatör ünitesi.",
      "en": "Professional gas insufflator unit offering high stability and patient safety in laparoscopic surgical operations.",
      "fr": "Insufflateur de gaz professionnel offrant une grande stabilité et sécurité du patient lors des opérations chirurgicales laparoscopiques.",
      "az": "Laparoskopik cərrahiyyə əməliyyatlarında yüksək sabitlik və xəstə təhlükəsizliyi təklif edən peşəkar qaz insufflyator qurğusu."
    },
    "image": "/Karl-storz-endoflator.jpg",
    "features": {
      "tr": [
        "Gelişmiş Gaz Akış Kontrol Sistemi",
        "Kullanıcı Dostu LCD Dijital Ekran",
        "Güvenli Basınç Limit Alarm Sistemi",
        "Isıtmalı Gaz Seçeneği ile Hasta Konforu",
        "Kompakt ve Dayanıklı Gövde Yapısı"
      ],
      "en": [
        "Advanced Gas Flow Control System",
        "User-Friendly LCD Digital Display",
        "Safe Pressure Limit Alarm System",
        "Patient Comfort with Heated Gas Option",
        "Compact and Durable Body Structure"
      ],
      "fr": [
        "Système avancé de contrôle du débit de gaz",
        "Affichage numérique LCD convivial",
        "Système d'alarme de limite de pression sûre",
        "Confort du patient avec option gaz chauffé",
        "Structure de carrosserie compacte et durable"
      ],
      "az": [
        "Qabaqcıl qaz axınına nəzarət sistemi",
        "İstifadəçi dostu LCD Rəqəmsal Ekran",
        "Təhlükəsiz Təzyiq Limiti Siqnal Sistemi",
        "Qızdırılan Qaz Seçimi ilə Xəstə Rahatlığı",
        "Kompakt və Davamlı Bədən Strukturu"
      ]
    }
  },
  {
    "id": "karl-storz-full-sistem",
    "name": {
      "tr": "Karl Storz Full Endovizyon Sistemi",
      "en": "Karl Storz Full Endovision System",
      "fr": "Système d'endovision complet Karl Storz",
      "az": "Karl Storz Tam Endovision Sistemi"
    },
    "category": "Endovision",
    "description": {
      "tr": "Ameliyathaneler için eksiksiz kamera, ışık kaynağı, insüflatör ve monitörü bir araya getiren anahtar teslim endovizyon kulesi.",
      "en": "Turnkey endovision tower combining a complete camera, light source, insufflator, and monitor for operating rooms.",
      "fr": "Tour d'endovision clé en main combinant une caméra complète, une source de lumière, un insufflateur et un moniteur pour salles d'opération.",
      "az": "Əməliyyat otaqları üçün tam kamera, işıq mənbəyi, insuflator və monitoru özündə birləşdirən açar təslim endovision qülləsi."
    },
    "image": "/Karl-storz-full-sistem.jpg",
    "features": {
      "tr": [
        "Yüksek Çözünürlüklü Kamera Kontrol Ünitesi",
        "Güçlü Işık Kaynağı ve Fiber Optik Kablo",
        "Entegre Tıbbi Monitör Standı ve Kule Kabini",
        "Kolay Kullanım ve Merkezi Güç Yönetimi",
        "Tüm Cerrahi Branşlara Uygun Modüler Yapı"
      ],
      "en": [
        "High Resolution Camera Control Unit",
        "Powerful Light Source and Fiber Optic Cable",
        "Integrated Medical Monitor Stand and Tower Cabinet",
        "Easy Operation and Centralized Power Management",
        "Modular Structure Suitable for All Surgical Specialties"
      ],
      "fr": [
        "Unité de contrôle de caméra haute résolution",
        "Source de lumière puissante et câble à fibre optique",
        "Support pour moniteur médical intégré et armoire tour",
        "Fonctionnement facile et gestion centralisée de l'alimentation",
        "Structure modulaire adaptée à toutes les spécialités chirurgicales"
      ],
      "az": [
        "Yüksək Tərifli Kamera İdarəetmə Bölməsi",
        "Güclü İşıq Mənbəsi və Fiber Optik Kabel",
        "İnteqrasiya edilmiş Tibbi Monitor Standı və Qüllə Şkafı",
        "İstifadəsi asan və mərkəzləşdirilmiş enerji idarəetməsi",
        "Bütün Cərrahi Şöbələrə Uyğun Modul Quruluş"
      ]
    }
  },
  {
    "id": "karl-storz-hd-h3",
    "name": {
      "tr": "Karl Storz HD H3 Kamera Kafası",
      "en": "Karl Storz HD H3 Camera Head",
      "fr": "Tête de caméra Karl Storz HD H3",
      "az": "Karl Storz HD H3 Kamera Başlığı"
    },
    "category": "Endovision",
    "description": {
      "tr": "Mükemmel renk üretimi ve kristal netliğinde HD görüntü kalitesi sunan 3-Chip cerrahi kamera kafası.",
      "en": "3-Chip surgical camera head offering excellent color reproduction and crystal-clear HD image quality.",
      "fr": "Tête de caméra chirurgicale à 3 puces offrant une excellente reproduction des couleurs et une qualité d'image HD d'une clarté cristalline.",
      "az": "Əla rəng reproduksiyası və kristal təmiz HD görüntü keyfiyyəti təklif edən 3 çipli cərrahi kamera başlığı."
    },
    "image": "/Karl-storz-HD-H3.jpg",
    "features": {
      "tr": [
        "3-Chip Gelişmiş Görüntü Sensörü",
        "Ergonomik ve Hafif Tasarım",
        "Programlanabilir Başlık Üzeri Kısayol Tuşları",
        "Su Geçirmez ve Sterilizasyon Uyumlu",
        "Hassas Odaklama ve Zoom Kontrolü"
      ],
      "en": [
        "3-Chip Advanced Image Sensor",
        "Ergonomic and Lightweight Design",
        "Programmable Shortcuts on Camera Head",
        "Waterproof and Sterilization Compatible",
        "Precise Focusing and Zoom Control"
      ],
      "fr": [
        "Capteur d'image avancé à 3 puces",
        "Conception ergonomique et légère",
        "Raccourcis programmables sur la tête de caméra",
        "Étanche et compatible avec la stérilisation",
        "Mise au point précise et contrôle du zoom"
      ],
      "az": [
        "3-Chip Qabaqcıl Şəkil Sensoru",
        "Erqonomik və Yüngül Dizayn",
        "Proqramlaşdırıla bilən Başlıqda İsti düymələr",
        "Suya davamlı və sterilizasiyaya uyğun",
        "Dəqiq Fokus və Zoom Nəzarəti"
      ]
    }
  },
  {
    "id": "karl-storz-hd-h3z",
    "name": {
      "tr": "Karl Storz HD H3-Z Zoom Kamera Kafası",
      "en": "Karl Storz HD H3-Z Zoom Camera Head",
      "fr": "Tête de caméra zoom Karl Storz HD H3-Z",
      "az": "Karl Storz HD H3-Z Zoom Kamera Başlığı"
    },
    "category": "Endovision",
    "description": {
      "tr": "Dahili optik zoom özelliği ve yüksek çözünürlüklü sensör yapısıyla operasyon esnasında mükemmel detay performansı sunan kamera kafası.",
      "en": "Camera head offering excellent detail performance during operations with its built-in optical zoom feature and high-resolution sensor structure.",
      "fr": "Tête de caméra offrant d'excellentes performances de détail pendant les opérations grâce à sa fonction de zoom optique intégrée et à sa structure de capteur haute résolution.",
      "az": "Daxili optik böyütmə xüsusiyyəti və yüksək ayırdetmə sensor quruluşu ilə əməliyyat zamanı mükəmməl detallı performans təqdim edən kamera başlığı."
    },
    "image": "/Karl-storz-hd-h3z.jpg",
    "features": {
      "tr": [
        "Entegre Optik Paralel Zoom Yeteneği",
        "Maksimum Detay ve Renk Derinliği",
        "Sterilize Edilebilir Dayanıklı Gövde",
        "Evrensel Endoskop Bağlantı Aparatı",
        "Düşük Işık Koşullarında Üstün Performans"
      ],
      "en": [
        "Integrated Optical Parallel Zoom Capability",
        "Maximum Detail and Color Depth",
        "Sterilizable Durable Body",
        "Universal Endoscope Coupling Adapter",
        "Superior Performance in Low Light Conditions"
      ],
      "fr": [
        "Capacité de zoom parallèle optique intégrée",
        "Détails maximaux et profondeur de couleur",
        "Corps durable stérilisable",
        "Adaptateur de couplage d'endoscope universel",
        "Performance supérieure dans des conditions de faible luminosité"
      ],
      "az": [
        "İnteqrasiya edilmiş Optik Paralel Zoom İmkanı",
        "Maksimum Detal və Rəng Dərinliyi",
        "Sterilizasiya edilə bilən Davamlı Bədən",
        "Universal Endoskop Bağlantı Aparatı",
        "Aşağı İşıqlı Şərtlərdə Üstün Performans"
      ]
    }
  },
  {
    "id": "karl-storz-insuflator",
    "name": {
      "tr": "Karl Storz Standart İnsüflatör",
      "en": "Karl Storz Standard Insufflator",
      "fr": "Insufflateur standard Karl Storz",
      "az": "Karl Storz Standart Insuflator"
    },
    "category": "Endovision",
    "description": {
      "tr": "Klinik laparoskopi uygulamaları için kararlı basınç kontrolü sağlayan güvenilir insüflatör ünitesi.",
      "en": "Reliable insufflator unit providing stable pressure control for clinical laparoscopy applications.",
      "fr": "Unité d'insufflation fiable offrant un contrôle stable de la pression pour les applications cliniques de laparoscopie.",
      "az": "Klinik laparoskopiya tətbiqləri üçün sabit təzyiq nəzarətini təmin edən etibarlı insuflator qurğusu."
    },
    "image": "/Karl-Storz-insuflator.jpg",
    "features": {
      "tr": [
        "Kararlı Basınç ve Akış İzleme",
        "Net Analog ve Dijital Göstergeler",
        "Kolay Bağlantı Konnektörleri",
        "Aşırı Basınç Tahliye Emniyeti",
        "Uzun Ömürlü Dayanıklı Mekanik Altyapı"
      ],
      "en": [
        "Stable Pressure and Flow Monitoring",
        "Clear Analog and Digital Displays",
        "Easy Connection Connectors",
        "Overpressure Relief Safety",
        "Long-lasting Durable Mechanical Infrastructure"
      ],
      "fr": [
        "Surveillance stable de la pression et du débit",
        "Affichages analogiques et numériques clairs",
        "Connecteurs de connexion faciles",
        "Sécurité de surpression",
        "Infrastructure mécanique durable et durable"
      ],
      "az": [
        "Stabil təzyiq və axın monitorinqi",
        "Analoq və Rəqəmsal Ekranları təmizləyin",
        "Asan Bağlantı Konnektorları",
        "Həddindən artıq təzyiqin azaldılması təhlükəsizliyi",
        "Uzun Ömürlü Davamlı Mexaniki İnfrastruktur"
      ]
    }
  },
  {
    "id": "karl-storz-power-led-175",
    "name": {
      "tr": "Karl Storz Power LED 175 Işık Kaynağı",
      "en": "Karl Storz Power LED 175 Light Source",
      "fr": "Source de lumière Karl Storz Power LED 175",
      "az": "Karl Storz Power LED 175 İşıq Mənbəsi"
    },
    "category": "Endovision",
    "description": {
      "tr": "LED teknolojisi sayesinde uzun lamba ömrü ve düşük güç tüketimi sağlayan, gün ışığı spektrumuna yakın güçlü soğuk ışık kaynağı.",
      "en": "Powerful cold light source close to the daylight spectrum, providing long lamp life and low power consumption thanks to LED technology.",
      "fr": "Puissante source de lumière froide proche du spectre de la lumière du jour, offrant une longue durée de vie de la lampe et une faible consommation d'énergie grâce à la technologie LED.",
      "az": "Gün işığı spektrinə yaxın güclü soyuq işıq mənbəyi, LED texnologiyası sayəsində uzun lampanın ömrünü və az enerji sərfiyyatını təmin edir."
    },
    "image": "/Karl-Storz-Power-Led-175.jpg",
    "features": {
      "tr": [
        "175 Watt Eşdeğeri Güçlü LED Aydınlatma",
        "Lamba Değişimi Gerektirmeyen Uzun Ömürlü Yapı",
        "Dijital Işık Şiddeti Ayarı",
        "Düşük Isı Yayılımı ve Sessiz Fan Sistemi",
        "Kompakt ve Ergonomik Şasi"
      ],
      "en": [
        "Powerful LED Illumination Equivalent to 175W",
        "Long Life Cycle with No Lamp Replacement Needed",
        "Digital Light Intensity Adjustment",
        "Low Heat Emission and Quiet Fan System",
        "Compact and Ergonomic Chassis"
      ],
      "fr": [
        "Éclairage LED puissant équivalent à 175 W",
        "Long cycle de vie sans remplacement de lampe nécessaire",
        "Réglage numérique de l'intensité lumineuse",
        "Faible émission de chaleur et système de ventilateur silencieux",
        "Châssis compact et ergonomique"
      ],
      "az": [
        "175 Watt Ekvivalent Güclü LED İşıqlandırma",
        "Lampanın dəyişdirilməsini tələb etməyən uzunömürlü struktur",
        "Rəqəmsal İşıq İntensivliyinin Tənzimlənməsi",
        "Aşağı İstilik Yayımı və Səssiz Fan Sistemi",
        "Kompakt və Erqonomik Şassi"
      ]
    }
  },
  {
    "id": "karl-storz-s3",
    "name": {
      "tr": "Karl Storz Image1 S3 Kamera Kontrol Ünitesi",
      "en": "Karl Storz Image1 S3 Camera Control Unit",
      "fr": "Unité de commande de caméra Karl Storz Image1 S3",
      "az": "Karl Storz Image1 S3 Kamera İdarəetmə Bloku"
    },
    "category": "Endovision",
    "description": {
      "tr": "Modüler mimarisi ve yüksek çözünürlüklü görüntü işleme teknolojisi ile cerrahlara benzersiz netlik sunan kamera konsolu.",
      "en": "Camera console offering unique clarity to surgeons with its modular architecture and high-resolution image processing technology.",
      "fr": "Console de caméra offrant une clarté unique aux chirurgiens grâce à son architecture modulaire et sa technologie de traitement d'image haute résolution.",
      "az": "Modul arxitekturası və yüksək keyfiyyətli görüntü emal texnologiyası ilə cərrahlara görünməmiş aydınlıq təqdim edən kamera konsolu."
    },
    "image": "/Karl-Storz-S3.jpg",
    "features": {
      "tr": [
        "Image1 S Teknolojisi ile Gelişmiş Görüntüleme modları",
        "Full HD Çözünürlük ve Canlı Renkler",
        "USB Üzerinden Doğrudan Görüntü ve Video Kaydı",
        "Farklı Kamera Kafaları ile Tam Uyumluluk",
        "Dokunmatik Ön Panel Kontrol Arayüzü"
      ],
      "en": [
        "Advanced Imaging Modes with Image1 S Technology",
        "Full HD Resolution and Vivid Colors",
        "Direct Image and Video Recording via USB",
        "Full Compatibility with Various Camera Heads",
        "Touchscreen Front Panel Control Interface"
      ],
      "fr": [
        "Modes d'imagerie avancés avec la technologie Image1 S",
        "Résolution Full HD et couleurs vives",
        "Enregistrement direct d'images et de vidéos via USB",
        "Compatibilité totale avec diverses têtes de caméra",
        "Interface de commande du panneau avant à écran tactile"
      ],
      "az": [
        "Image1 S Texnologiyası ilə Təkmil Görüntüləmə rejimləri",
        "Tam HD Çözünürlük və Canlı Rənglər",
        "USB",
        "vasitəsilə birbaşa şəkil və video qeyd Müxtəlif Kamera Başlıqları ilə Tam Uyğunluq",
        "Ön Panel İdarəetmə İnterfeysinə toxunun"
      ]
    }
  },
  {
    "id": "karl-storz-sistem",
    "name": {
      "tr": "Karl Storz Endovizyon Görüntüleme Sistemi",
      "en": "Karl Storz Endovision Imaging System",
      "fr": "Système d'imagerie endovision Karl Storz",
      "az": "Karl Storz Endovision Görüntüləmə Sistemi"
    },
    "category": "Endovision",
    "description": {
      "tr": "Kamera ünitesi ve soğuk ışık kaynağını entegre bir biçimde sunan pratik endovizyon kombinasyonu.",
      "en": "Practical endovision combination presenting camera unit and cold light source in an integrated layout.",
      "fr": "Combinaison d'endovision pratique présentant une unité de caméra et une source de lumière froide dans une disposition intégrée.",
      "az": "Kamera blokunu və soyuq işıq mənbəyini birləşdirən praktiki endovision kombinasiyası."
    },
    "image": "/Karl-Storz-Sistem.jpg",
    "features": {
      "tr": [
        "Entegre Kamera Konsolu ve Işık Kaynağı",
        "Kolay Taşınabilir Kompakt Yapı",
        "Standart Fiber Optik Kablo Uyumluluğu",
        "Hızlı Kurulum ve Kullanım Kolaylığı",
        "Güvenilir ve Kararlı Donanım Altyapısı"
      ],
      "en": [
        "Integrated Camera Console and Light Source",
        "Easy-to-carry Compact Structure",
        "Standard Fiber Optic Cable Compatibility",
        "Quick Setup and Ease of Use",
        "Reliable and Stable Hardware Infrastructure"
      ],
      "fr": [
        "Console de caméra et source de lumière intégrées",
        "Structure compacte facile à transporter",
        "Compatibilité standard des câbles à fibres optiques",
        "Installation rapide et facilité d'utilisation",
        "Infrastructure matérielle fiable et stable"
      ],
      "az": [
        "İnteqrasiya edilmiş Kamera Konsolu və İşıq Mənbəsi",
        "Asanlıqla Portativ Yığcam Struktur",
        "Standart Fiber Optik Kabel Uyğunluğu",
        "Tez Quraşdırma və İstifadə Asanlığı",
        "Etibarlı və Sabit Avadanlıq İnfrastruktur"
      ]
    }
  },
  {
    "id": "karl-storz-telecam",
    "name": {
      "tr": "Karl Storz Telecam Kamera Kontrol Ünitesi",
      "en": "Karl Storz Telecam Camera Control Unit",
      "fr": "Unité de commande de caméra télécam Karl Storz",
      "az": "Karl Storz Telecam Kamera İdarəetmə Bölməsi"
    },
    "category": "Endovision",
    "description": {
      "tr": "Poliklinikler, tanısal endoskopi ve basit cerrahi müdahaleler için ideal, klasikleşmiş ve kararlı kamera konsolu.",
      "en": "Classic and stable camera console ideal for outpatient clinics, diagnostic endoscopy, and simple surgical interventions.",
      "fr": "Console de caméra classique et stable, idéale pour les cliniques ambulatoires, l'endoscopie diagnostique et les interventions chirurgicales simples.",
      "az": "Ambulator klinikalar, diaqnostik endoskopiya və sadə cərrahi müdaxilələr üçün ideal olan klassik və stabil kamera konsolu."
    },
    "image": "/Karl-Storz-Telecam.jpg",
    "features": {
      "tr": [
        "Analog ve Dijital Video Çıkış Desteği",
        "Otomatik Beyaz Ayarı Teknolojisi",
        "Kompakt ve Dayanıklı Metal Şasi",
        "Kolay Anlaşılır Ön Panel Kontrolleri",
        "Uzun Ömürlü ve Kararlı Çalışma Yapısı"
      ],
      "en": [
        "Analog and Digital Video Output Support",
        "Automatic White Balance Technology",
        "Compact and Durable Metal Chassis",
        "Easy-to-understand Front Panel Controls",
        "Long-lasting and Stable Operation Structure"
      ],
      "fr": [
        "Prise en charge des sorties vidéo analogiques et numériques",
        "Technologie de balance des blancs automatique",
        "Châssis métallique compact et durable",
        "Commandes du panneau avant faciles à comprendre",
        "Structure opérationnelle durable et stable"
      ],
      "az": [
        "Analoq və Rəqəmsal Video Çıxış Dəstəyi",
        "Avtomatik Ağ Balans Texnologiyası",
        "Yığcam və Davamlı Metal Şassi",
        "Anlamaq asan Ön Panel İdarəetmələri",
        "Uzun Ömürlü və Sabit İşləyən Quruluş"
      ]
    }
  },
  {
    "id": "karl-storz-tricam",
    "name": {
      "tr": "Karl Storz Tricam 3-Chip Kamera Kontrol Ünitesi",
      "en": "Karl Storz Tricam 3-Chip Camera Control Unit",
      "fr": "Unité de commande de caméra à 3 puces Karl Storz Tricam",
      "az": "Karl Storz Tricam 3-Chip Kamera İdarəetmə Bloku"
    },
    "category": "Endovision",
    "description": {
      "tr": "3 çipli kamera kafalarıyla çalışmak üzere tasarlanmış, üstün renk ayrımı ve hassas detay gücü sunan profesyonel kamera konsolu.",
      "en": "Professional camera console designed to work with 3-chip camera heads, offering superior color separation and precise detail power.",
      "fr": "Console de caméra professionnelle conçue pour fonctionner avec des têtes de caméra à 3 puces, offrant une séparation des couleurs supérieure et une puissance de détail précise.",
      "az": "3 çipli kamera başlıqları ilə işləmək üçün nəzərdə tutulmuş peşəkar kamera konsolu üstün rəng ayırma və dəqiq detal gücü təklif edir."
    },
    "image": "/Karl-Storz-Tricam.jpg",
    "features": {
      "tr": [
        "3-Chip Sensör Teknolojisi Destekli Görüntü İşleme",
        "Maksimum Renk Doğruluğu ve Kenar Netliği",
        "Gelişmiş Menü ve Ayar Seçenekleri",
        "Klavye Bağlantısı ile Hasta Bilgisi Girişi",
        "Sağlam ve Güvenilir Endüstriyel Tasarım"
      ],
      "en": [
        "Image Processing Supporting 3-Chip Sensor Technology",
        "Maximum Color Accuracy and Edge Sharpness",
        "Advanced Menu and Setting Options",
        "Patient Info Input via Keyboard Connection",
        "Robust and Reliable Industrial Design"
      ],
      "fr": [
        "Traitement d'image prenant en charge la technologie de capteur à 3 puces",
        "Précision maximale des couleurs et netteté des bords",
        "Menu avancé et options de configuration",
        "Saisie des informations sur le patient via une connexion au clavier",
        "Conception industrielle robuste et fiable"
      ],
      "az": [
        "3-Chip Sensor Texnologiyası Dəstəklənən Şəkil Emalı",
        "Maksimum Rəng Dəqiqliyi və Kənar Aydınlığı",
        "Qabaqcıl Menyu və Parametrlər Seçimləri",
        "Klaviatura Bağlantısı vasitəsilə Xəstə Məlumatının Daxil edilməsi",
        "Sağlam və Etibarlı Sənaye Dizaynı"
      ]
    }
  },
  {
    "id": "karl-storz-xenon-175",
    "name": {
      "tr": "Karl Storz Xenon 175 Soğuk Işık Kaynağı",
      "en": "Karl Storz Xenon 175 Cold Light Source",
      "fr": "Source de lumière froide Karl Storz Xenon 175",
      "az": "Karl Storz Xenon 175 Soğuk Işık Kaynağı"
    },
    "category": "Endovision",
    "description": {
      "tr": "175 Watt xenon ampulü ile parlak ve doğal renk spektrumuna sahip cerrahi aydınlatma sunan soğuk ışık kaynağı.",
      "en": "Cold light source offering surgical illumination with a bright and natural color spectrum via its 175W xenon bulb.",
      "fr": "Source de lumière froide offrant un éclairage chirurgical avec un spectre de couleurs vives et naturelles via son ampoule xénon de 175W.",
      "az": "175 Watt ksenon lampası ilə parlaq və təbii rəng spektri ilə cərrahi işıqlandırma təmin edən soyuq işıq mənbəyi."
    },
    "image": "/Karl-Storz-Xenon-175-isik-kaynagi.jpg",
    "features": {
      "tr": [
        "175W Xenon Güçlü Ampul Teknolojisi",
        "Doğal Gün Işığı Renk Sıcaklığı",
        "Manuel Işık Şiddeti Kontrolü",
        "Kolay Değiştirilebilir Ampul Kartuşu",
        "Hava Soğutmalı Sessiz Fan Tasarımı"
      ],
      "en": [
        "175W Xenon Powerful Bulb Technology",
        "Natural Daylight Color Temperature",
        "Manual Light Intensity Control",
        "Easy-to-change Bulb Cartridge",
        "Air-cooled Quiet Fan Design"
      ],
      "fr": [
        "Technologie d'ampoule puissante au xénon de 175 W",
        "Température de couleur de la lumière naturelle du jour",
        "Contrôle manuel de l'intensité lumineuse",
        "Cartouche d'ampoule facile à changer",
        "Conception de ventilateur silencieux refroidi par air"
      ],
      "az": [
        "175W Xenon Güçlü Ampul Teknolojisi",
        "Doğal Gün Işığı Renk Sıcaklığı",
        "Manuel Işık Şiddeti Kontrolü",
        "Kolay Değiştirilebilir Ampul Kartuşu",
        "Hava Soğutmalı Sessiz Fan Tasarımı"
      ]
    }
  },
  {
    "id": "karl-storz-xenon-300",
    "name": {
      "tr": "Karl Storz Xenon 300 Soğuk Işık Kaynağı",
      "en": "Karl Storz Xenon 300 Cold Light Source",
      "fr": "Source de lumière froide Karl Storz Xenon 300",
      "az": "Karl Storz Xenon 300 Soyuq İşıq Mənbəsi"
    },
    "category": "Endovision",
    "description": {
      "tr": "300 Watt yüksek güçlü xenon teknolojisi ile majör ameliyatlar ve derin cerrahi sahalar için eşsiz bir aydınlatma performansı sağlayan referans ışık kaynağı.",
      "en": "Reference light source providing unique illumination performance for major surgeries and deep surgical fields with 300W high-power xenon technology.",
      "fr": "Source de lumière de référence offrant des performances d'éclairage uniques pour les interventions chirurgicales majeures et les champs chirurgicaux profonds grâce à la technologie xénon haute puissance de 300 W.",
      "az": "300 Vatt yüksək güclü ksenon texnologiyası ilə böyük əməliyyatlar və dərin cərrahi sahələr üçün unikal işıqlandırma performansını təmin edən istinad işıq mənbəyi."
    },
    "image": "/Karl-Storz-Xenon-300.jpg",
    "features": {
      "tr": [
        "300 Watt Yüksek Güçlü Xenon Ampul",
        "Üstün Işık Akısı ve Derinlik Aydınlatması",
        "Otomatik ve Manuel Parlaklık Kontrolü",
        "Ampul Ömrü Göstergesi (Çalışma saati)",
        "Fiber Optik Kablo İçin Evrensel Giriş Portu"
      ],
      "en": [
        "300 Watt High-Power Xenon Bulb",
        "Superior Luminous Flux and Depth Illumination",
        "Automatic and Manual Brightness Control",
        "Bulb Life Indicator (Operating hours)",
        "Universal Input Port for Fiber Optic Cable"
      ],
      "fr": [
        "Ampoule au xénon haute puissance de 300 watts",
        "Flux lumineux supérieur et éclairage en profondeur",
        "Contrôle automatique et manuel de la luminosité",
        "Indicateur de durée de vie de l'ampoule (heures de fonctionnement)",
        "Port d'entrée universel pour câble à fibre optique"
      ],
      "az": [
        "300 Watt Yüksək Güclü Ksenon Lampa",
        "Üstün İşıq axını və Dərinlik İşıqlandırması",
        "Parlaqlığa Avtomatik və Manual Nəzarət",
        "Lampanın Ömrünün Göstəricisi (İş saatları)",
        "Fiber Optik Kabel üçün Universal Giriş Portu"
      ]
    }
  },
  {
    "id": "shalya-sigma-300",
    "name": {
      "tr": "Shalya Sigma 300 Koter Cihazı",
      "en": "Shalya Sigma 300 Electrosurgical Unit",
      "fr": "Unité électrochirurgicale Shalya Sigma 300",
      "az": "Shalya Sigma 300 Koter cihazı"
    },
    "category": "Electrosurgery",
    "description": {
      "tr": "300 Watt çıkış gücü, hassas doku geri besleme sistemi ve monopolar/bipolar modları ile cerrahi operasyonlarda yüksek performanslı kesme ve koagülasyon sağlayan koter cihazı.",
      "en": "300 Watt output power electrosurgical unit providing high-performance cutting and coagulation with precise tissue feedback system and monopolar/bipolar modes.",
      "fr": "Unité électrochirurgicale d'une puissance de sortie de 300 watts offrant une coupe et une coagulation hautes performances avec un système de rétroaction tissulaire précis et des modes monopolaires/bipolaires.",
      "az": "300 Watt çıxış gücü, həssas toxuma geribildirim sistemi və monopolar/bipolyar rejimləri ilə cərrahi əməliyyatlarda yüksək performanslı kəsmə və laxtalanma təmin edən koteriya cihazı."
    },
    "image": "/Shalya-Sigma-Koter-300.jpg",
    "features": {
      "tr": [
        "300W Maksimum Çıkış Gücü",
        "Monopolar Kesim, Koagülasyon ve Bipolar Modları",
        "Doku Direnci Geri Bildirim Teknolojisi",
        "Hasta Plakası Temas İzleme Sistemi (REM)",
        "Klinik ve Cerrahi Uygulamalar İçin Hafızalı Çalışma"
      ],
      "en": [
        "300W Maximum Output Power",
        "Monopolar Cut, Coagulation and Bipolar Modes",
        "Tissue Impedance Feedback Technology",
        "Patient Plate Contact Quality Monitoring (REM)",
        "Memory Settings for Clinical and Surgical Applications"
      ],
      "fr": [
        "Puissance de sortie maximale de 300 W",
        "Modes de coupe monopolaire, de coagulation et bipolaire",
        "Technologie de rétroaction d'impédance tissulaire",
        "Surveillance de la qualité du contact avec la plaque patient (REM)",
        "Paramètres de mémoire pour les applications cliniques et chirurgicales"
      ],
      "az": [
        "300W Maksimum Çıxış Gücü",
        "Monopolar kəsmə, koaqulyasiya və bipolyar rejimlər",
        "Toxuma Müqaviməti Əlaqə Texnologiyası",
        "Xəstə Plitələri ilə Əlaqə Monitorinq Sistemi (REM)",
        "Klinik və Cərrahi Tətbiqlər üçün Yaddaş Tədqiqi"
      ]
    }
  },
  {
    "id": "shalya-sigma-400",
    "name": {
      "tr": "Shalya Sigma 400 Koter Cihazı",
      "en": "Shalya Sigma 400 Electrosurgical Unit",
      "fr": "Unité électrochirurgicale Shalya Sigma 400",
      "az": "Shalya Sigma 400 Koter cihazı"
    },
    "category": "Electrosurgery",
    "description": {
      "tr": "400 Watt çıkış gücü, gelişmiş damar mühürleme (vessel sealing) desteği ve dokunmatik arayüzü ile genel cerrahi ve jinekoloji ameliyatları için üst düzey koter ünitesi.",
      "en": "High-end 400 Watt electrosurgical unit with advanced vessel sealing support and touch interface designed for general surgery and gynecology procedures.",
      "fr": "Bistouri électrochirurgical haut de gamme de 400 watts avec support avancé d'étanchéité des vaisseaux et interface tactile conçu pour les procédures de chirurgie générale et de gynécologie.",
      "az": "Ümumi cərrahiyyə və ginekoloji cərrahiyyə əməliyyatları üçün 400 Vatt çıxış gücü, qabaqcıl damar möhürləmə dəstəyi və toxunma interfeysi ilə yüksək səviyyəli koteriya qurğusu."
    },
    "image": "/shalya-Sigma-400.jpg",
    "features": {
      "tr": [
        "400W Yüksek Çıkış Gücü ve Damar Mühürleme Modu",
        "Mikroişlemci Kontrollü Kararlı Güç Dağılımı",
        "Su Altı Kesim (TURP/Histeroskopi) Uyumluluğu",
        "Kapsamlı Hata Teşhis ve Alarm Sistemi",
        "Çift Monopolar ve Bipolar Çıkış Portları"
      ],
      "en": [
        "400W High Output Power and Vessel Sealing Mode",
        "Microprocessor Controlled Stable Power Delivery",
        "Underwater Cutting (TURP/Hysteroscopy) Compatibility",
        "Comprehensive Fault Diagnosis and Alarm System",
        "Dual Monopolar and Bipolar Output Ports"
      ],
      "fr": [
        "Puissance de sortie élevée de 400 W et mode d'étanchéité du récipient",
        "Alimentation stable contrôlée par microprocesseur",
        "Compatibilité de coupe sous-marine (TURP/hystéroscopie)",
        "Diagnostic complet des pannes et système d'alarme",
        "Deux ports de sortie monopolaire et bipolaire"
      ],
      "az": [
        "400W Yüksək Çıxış Gücü və Əsas Sızdırmazlıq Rejimi",
        "Mikroprosessorla İdarə olunan Stabil Gücün Paylanması",
        "Sualtı Kəsmə (TURP/Histeroskopiya) Uyğunluğu",
        "Kompleks Diaqnostika və Siqnal Sistemi",
        "İkili Monopolar və Bipolyar Çıxış Portları"
      ]
    }
  },
  {
    "id": "anestezi-arabasi",
    "name": {
      "tr": "Anestezi Arabası",
      "en": "Anesthesia Cart",
      "fr": "Chariot d'anesthésie",
      "az": "Anesteziya Avtomobil"
    },
    "category": "MedicalCart",
    "description": {
      "tr": "Ameliyathane ve anestezi uygulamaları için özel olarak tasarlanmış, çekmeceli kilit sistemine ve ilaç/sarf malzeme gözlerine sahip mobil anestezi arabası.",
      "en": "Mobile anesthesia cart specially designed for operating room and anesthesia applications, featuring lockable drawers and medicine/consumables compartments.",
      "fr": "Chariot d'anesthésie mobile spécialement conçu pour les applications en salle d'opération et d'anesthésie, doté de tiroirs verrouillables et de compartiments pour médicaments/consommables.",
      "az": "Əməliyyat otaqları və anesteziya tətbiqləri üçün xüsusi olaraq hazırlanmış çekmece kilidi sistemi və dərman/istehlak bölmələri olan mobil anesteziya arabası."
    },
    "image": "/anestezi-arabasi.jpg",
    "features": {
      "tr": [
        "Merkezi Kilitli Çekmece Sistemi",
        "Geniş İlaç ve Sarf Malzeme Bölmeleri",
        "Serum Askısı ve Atık Kutusu Aksesuarları",
        "Sessiz ve Kolay Hareket Eden Antistatik Tekerlekler",
        "Kolay Temizlenebilir Hijyenik ABS Üst Tabla"
      ],
      "en": [
        "Central Locking Drawer System",
        "Spacious Medicine and Consumables Compartments",
        "IV Pole and Waste Bin Accessories",
        "Silent and Easy-to-move Antistatic Castors",
        "Easy-to-clean Hygienic ABS Top Tray"
      ],
      "fr": [
        "Système de tiroir à verrouillage centralisé",
        "Compartiments spacieux pour médicaments et consommables",
        "Accessoires pour poteau IV et poubelle",
        "Roulettes antistatiques silencieuses et faciles à déplacer",
        "Plateau supérieur hygiénique en ABS facile à nettoyer"
      ],
      "az": [
        "Mərkəzi Kilidləmə Çekmece Sistemi",
        "Böyük Dərman və İstehlak Bölmələri",
        "IV dirək və tullantı qutusu aksesuarları",
        "Səssiz və Asan Hərəkət edən Antistatik Təkərlər",
        "Təmizlənməsi asan Gigiyenik ABS Üst Masa"
      ]
    }
  },
  {
    "id": "crash-card-acil-arabasi",
    "name": {
      "tr": "Crash Cart Acil Arabası",
      "en": "Emergency Crash Cart",
      "fr": "Chariot d'urgence",
      "az": "Crash Cart Təcili Avtomobil"
    },
    "category": "MedicalCart",
    "description": {
      "tr": "Acil müdahale durumları için defibrilatör sehpası, oksijen tüpü taşıyıcısı, CPR tahtası ve hızlı açılır kilit mekanizması içeren tam donanımlı acil arabası.",
      "en": "Fully equipped emergency crash cart featuring defibrillator shelf, oxygen cylinder holder, CPR board, and quick-release breakaway lock mechanism for resuscitation scenarios.",
      "fr": "Chariot d'urgence entièrement équipé comprenant une étagère pour défibrillateur, un support pour bouteille d'oxygène, une carte CPR et un mécanisme de verrouillage à dégagement rapide pour les scénarios de réanimation.",
      "az": "Tam təchiz olunmuş təcili yardım arabası, o cümlədən defibrillyator stendi, oksigen çəni daşıyıcısı, CPR lövhəsi və fövqəladə hallar üçün tez açılan kilidləmə mexanizmi."
    },
    "image": "/crash-card-acil-arabasi.jpg",
    "features": {
      "tr": [
        "Defibrilatör Sehpası ve Serum Askısı Entegrasyonu",
        "Hızlı Açılır Kilitli Çekmeceler (Breakaway Lock)",
        "Oksijen Tüpü Taşıma Yuvası ve CPR Tahtası",
        "Darbelere Karşı Çevre Koruma Barları",
        "Frenli Tekerlek Sistemiyle Stabil Sabitleme"
      ],
      "en": [
        "Defibrillator Shelf and IV Pole Integration",
        "Quick-Release Breakaway Locked Drawers",
        "Oxygen Cylinder Holder and CPR Board",
        "Impact Protection Corner Bumpers",
        "Stable Anchoring with Braked Castor System"
      ],
      "fr": [
        "Étagère pour défibrillateur et intégration de perches à perfusion",
        "Tiroirs verrouillés à dégagement rapide",
        "Support de bouteille d'oxygène et planche de RCR",
        "Pare-chocs d'angle de protection contre les chocs",
        "Ancrage stable avec système de roulettes freinées"
      ],
      "az": [
        "Defibrilator Standı və IV Qütb İnteqrasiyası",
        "Tez Açıq Kilidli Çekmeceler (Açıq Kilid)",
        "Oksigen Silindr Daşıma Yuvası və CPR lövhəsi",
        "Təsirlərə Qarşı Ətraf Mühitin Mühafizəsi",
        "Əyləcli təkər sistemi ilə sabit bərkitmə"
      ]
    }
  },
  {
    "id": "ilac-arabasi",
    "name": {
      "tr": "İlaç Arabası",
      "en": "Medicine Cart",
      "fr": "Chariot à médicaments",
      "az": "Dərman Səbəti"
    },
    "category": "MedicalCart",
    "description": {
      "tr": "Klinik ve servislerde hastaların günlük ilaç dağıtımı için tasarlanmış, şeffaf ilaç kutusu bölmeleri olan pratik ve güvenli ilaç arabası.",
      "en": "Practical and secure medicine cart designed for daily patient medication distribution in clinics and wards, featuring transparent pill organizer bins.",
      "fr": "Chariot à médicaments pratique et sécurisé conçu pour la distribution quotidienne des médicaments des patients dans les cliniques et les services, doté de bacs organisateurs de pilules transparents.",
      "az": "Klinikalarda və palatalarda xəstələrə gündəlik dərman paylanması üçün nəzərdə tutulmuş şəffaf dərman qutusu bölmələri olan praktik və təhlükəsiz dərman arabası."
    },
    "image": "/ilac-arabasi.jpg",
    "features": {
      "tr": [
        "Çıkarılabilir ve Bölünebilir İlaç Çekmece Bölmeleri",
        "Güvenli Kilit Mekanizması",
        "Hafif ve Ergonomik Şasi Yapısı",
        "Paslanmaz Çelik ve ABS Malzeme Kombinasyonu",
        "İtme Kolu ile Kolay Manevra Kabiliyeti"
      ],
      "en": [
        "Removable and Dividable Medication Drawers",
        "Secure Lock Mechanism",
        "Lightweight and Ergonomic Chassis Design",
        "Stainless Steel and ABS Material Combination",
        "Easy Maneuverability with Push Handle"
      ],
      "fr": [
        "Tiroirs à médicaments amovibles et divisibles",
        "Mécanisme de verrouillage sécurisé",
        "Conception de châssis légère et ergonomique",
        "Combinaison de matériaux en acier inoxydable et ABS",
        "Maniabilité facile avec poignée de poussée"
      ],
      "az": [
        "Çıxarılan və Bölünən Dərman Çekmece Bölmələri",
        "Təhlükəsiz Kilid Mexanizmi",
        "Yüngül və Erqonomik Şassi Strukturu",
        "Paslanmayan Polad və ABS Material Kombinasiyası",
        "Push Lever ilə asan manevr"
      ]
    }
  },
  {
    "id": "tedavi-ve-pansuman-arabasi",
    "name": {
      "tr": "Tedavi ve Pansuman Arabası",
      "en": "Treatment and Dressing Cart",
      "fr": "Chariot de traitement et de pansement",
      "az": "Müalicə və sarğı arabası"
    },
    "category": "MedicalCart",
    "description": {
      "tr": "Pansuman ve tedavi süreçlerinde gerekli tüm pansuman sarflarını, sıvıları ve atık kovalarını bir arada barındıran hijyenik pansuman arabası.",
      "en": "Hygienic dressing cart accommodating all necessary dressing consumables, liquids, and waste buckets required for treatment procedures.",
      "fr": "Chariot à pansements hygiénique contenant tous les consommables de pansement, liquides et seaux à déchets nécessaires aux procédures de traitement.",
      "az": "Gigiyenik sarğı arabası, sarğı və müalicə prosesləri üçün tələb olunan bütün sarğı materialları, mayelər və tullantı kovalarıdır."
    },
    "image": "/tedavi-ve-pansuman-arabasi.jpg",
    "features": {
      "tr": [
        "Çift Sıra İlaç ve Sarf Gözü Bölmeleri",
        "Paslanmaz Çelik Çöp Kovası ve Evye Grubu",
        "Paslanmaz Çelik Yan Korkuluklar",
        "Darbeleri Sönümleyen Tampon Tekerlekler",
        "Yüksek Dayanımlı Paslanmaz Malzeme"
      ],
      "en": [
        "Double Row Medicine and Consumable Compartments",
        "Stainless Steel Waste Bin and Basin Group",
        "Stainless Steel Side Rails",
        "Shock-absorbing Bumper Wheels",
        "High Durability Stainless Steel Material"
      ],
      "fr": [
        "Compartiments à médicaments et consommables à double rangée",
        "Groupe de poubelles et de bassins en acier inoxydable",
        "Rails latéraux en acier inoxydable",
        "Roues de pare-chocs absorbant les chocs",
        "Matériau en acier inoxydable à haute durabilité"
      ],
      "az": [
        "İki Sıra Dərman və İstehlak Bölmələri",
        "Paslanmayan poladdan zibil qabı və sink qrupu",
        "Paslanmayan Polad Yan Raylar",
        "Zərbələri udan tampon təkərləri",
        "Yüksək Güclü Paslanmayan Material"
      ]
    }
  },
  {
    "id": "taidoc-thermometer-hospital",
    "name": {
      "tr": "Taidoc Ateş Ölçer Hastane Tipi",
      "en": "Taidoc Hospital Type Thermometer",
      "fr": "Thermomètre de type hôpital Taidoc",
      "az": "Taidoc Termometr Xəstəxana Növü"
    },
    "category": "Thermometer",
    "description": {
      "tr": "Hastaneler ve yoğun klinikler için geliştirilmiş, Bluetooth/kablosuz veri aktarım desteğine sahip, hızlı ve temassız kızılötesi tıbbi ateş ölçer.",
      "en": "Fast and non-contact infrared medical thermometer developed for hospitals and busy clinics, featuring Bluetooth/wireless data transmission support.",
      "fr": "Thermomètre médical infrarouge rapide et sans contact développé pour les hôpitaux et les cliniques très fréquentées, doté d'une prise en charge de la transmission de données Bluetooth/sans fil.",
      "az": "Xəstəxanalar və sıx klinikalar üçün hazırlanmış Bluetooth/simsiz məlumat ötürmə dəstəyi ilə sürətli və təmassız infraqırmızı tibbi termometr."
    },
    "image": "/Taidoc-ates-olcer-hastane-tipi.png",
    "features": {
      "tr": [
        "1 Saniyede Hızlı ve Hassas Ölçüm",
        "Klinik Derecede Doğruluk ve Kararlılık",
        "Temassız Kızılötesi Ölçüm Teknolojisi",
        "Bluetooth Veri Aktarımı ve HBYS Entegrasyonu",
        "Geniş Hafıza Kapasitesi ve Aydınlatmalı Geniş Ekran"
      ],
      "en": [
        "Fast and Precise 1-Second Measurement",
        "Clinically Proven Accuracy and Repeatability",
        "Non-Contact Infrared Measurement Technology",
        "Bluetooth Data Transmission and HIS Integration",
        "Large Memory Capacity and Large Backlit Screen"
      ],
      "fr": [
        "Mesure rapide et précise en 1 seconde",
        "Précision et répétabilité cliniquement prouvées",
        "Technologie de mesure infrarouge sans contact",
        "Transmission de données Bluetooth et intégration HIS",
        "Grande capacité de mémoire et grand écran rétroéclairé"
      ],
      "az": [
        "1 Saniyədə Sürətli və Dəqiq Ölçmə",
        "Klinik dərəcəli Dəqiqlik və Sabitlik",
        "Təmassız İnfraqırmızı Ölçmə Texnologiyası",
        "Bluetooth Məlumat ötürülməsi və HIMS inteqrasiyası",
        "Böyük Yaddaş Tutumu və İşıqlı Böyük Ekran"
      ]
    }
  },
  {
    "id": "ks-1081-led-magnifier",
    "name": {
      "tr": "KS-1081 Ledli Büyüteçli Lamba",
      "en": "KS-1081 LED Magnifier Lamp",
      "fr": "Lampe loupe LED KS-1081",
      "az": "KS-1081 LED böyüdücü lampa"
    },
    "category": "SurgicalLight",
    "description": {
      "tr": "Cilt bakımı, küçük cerrahi müdahaleler ve detaylı dermatolojik muayeneler için yüksek aydınlatma ve optik büyüteç sunan LED büyüteçli lamba.",
      "en": "LED magnifying lamp offering high illumination and optical magnification for skincare, minor surgical interventions, and detailed dermatological examinations.",
      "fr": "Lampe loupe LED offrant un éclairage élevé et un grossissement optique pour les soins de la peau, les interventions chirurgicales mineures et les examens dermatologiques détaillés.",
      "az": "Dəriyə qulluq, kiçik cərrahi müdaxilələr və ətraflı dermatoloji müayinələr üçün yüksək işıqlandırma və optik böyüdücü şüşə təklif edən LED böyüdücü lampa."
    },
    "image": "/KS-1081-ledli-buyutecli-lamba.jpg",
    "features": {
      "tr": [
        "Yüksek Kaliteli Optik Cam Mercek",
        "Gölgesiz LED Halka Aydınlatma",
        "Ayarlanabilir Esnek Denge Kolu",
        "Masa Üstü ve Mobil Ayaklı Kullanım Seçeneği",
        "Uzun Ömürlü Enerji Tasarruflu LED Teknolojisi"
      ],
      "en": [
        "High-Quality Optical Glass Lens",
        "Shadow-free LED Ring Illumination",
        "Adjustable Flexible Balance Arm",
        "Table-mount and Mobile Stand Options",
        "Long-lasting Energy-saving LED Technology"
      ],
      "fr": [
        "Lentille en verre optique de haute qualité",
        "Éclairage annulaire LED sans ombre",
        "Bras d'équilibre flexible réglable",
        "Options de montage sur table et de support mobile",
        "Technologie LED à économie d'énergie longue durée"
      ],
      "az": [
        "Yüksək Keyfiyyətli Optik Şüşə Lens",
        "Kölgəsiz LED Üzük İşıqlandırma",
        "Tənzimlənən Çevik Balans Qolu",
        "Masaüstü və Mobil Stend İstifadə Seçimləri",
        "Uzunmüddətli enerjiyə qənaət edən LED texnologiyası"
      ]
    }
  },
  {
    "id": "ks-la6-led-exam",
    "name": {
      "tr": "KS-LA6 Ledli Muayene Lambası",
      "en": "KS-LA6 LED Examination Light",
      "fr": "Lampe d'examen LED KS-LA6",
      "az": "KS-LA6 LED Yoxlama Lampası"
    },
    "category": "SurgicalLight",
    "description": {
      "tr": "Poliklinik, acil servis ve cerrahi muayene odaları için tasarlanmış, soğuk ışık veren, esnek gooseneck kollu modern LED muayene lambası.",
      "en": "Modern LED examination light with flexible gooseneck arm providing cold light, designed for outpatient clinics, emergency rooms, and surgical exam rooms.",
      "fr": "Lampe d'examen LED moderne avec bras flexible en col de cygne fournissant une lumière froide, conçue pour les cliniques ambulatoires, les salles d'urgence et les salles d'examen chirurgical.",
      "az": "Ambulatoriya, təcili yardım və cərrahi müayinə otaqları üçün nəzərdə tutulmuş soyuq işıqlı və çevik qolu olan müasir LED müayinə lampası."
    },
    "image": "/KS-LA6-Ledli-muayene-lambasi.jpg",
    "features": {
      "tr": [
        "Yüksek Yoğunluklu Soğuk Işık",
        "Esnek Gooseneck Kol ile Hassas Yönlendirme",
        "Ayarlanabilir Işık Şiddeti Kontrolü",
        "Tekerlekli Mobil Ayak ile Kolay Taşıma",
        "Minimum Isı Yayılımı ve Sessiz Çalışma"
      ],
      "en": [
        "High Intensity Cold Light",
        "Precise Positioning with Flexible Gooseneck Arm",
        "Adjustable Light Intensity Control",
        "Easy Mobility with Wheeled Base",
        "Minimal Heat Dissipation and Silent Operation"
      ],
      "fr": [
        "Lumière froide de haute intensité",
        "Positionnement précis avec bras flexible en col de cygne",
        "Contrôle de l'intensité lumineuse réglable",
        "Mobilité facile avec base à roulettes",
        "Dissipation thermique minimale et fonctionnement silencieux"
      ],
      "az": [
        "Yüksək İntensiv Soyuq İşıq",
        "Çevik Gooseneck Qolu ilə Dəqiq Rəhbərlik",
        "Tənzimlənən İşıq İntensivliyinə Nəzarət",
        "Təkərli Səyyar Stend ilə Asan Nəqliyyat",
        "Minimum İstilik Yayılması və Səssiz Əməliyyat"
      ]
    }
  },
  {
    "id": "ks-q10-led-minor-surgical",
    "name": {
      "tr": "KS-Q10 Ledli Minör Cerrahi Lambası",
      "en": "KS-Q10 LED Minor Surgical Light",
      "fr": "Lampe chirurgicale mineure à LED KS-Q10",
      "az": "KS-Q10 LED Kiçik Cərrahiyyə Lampası"
    },
    "category": "SurgicalLight",
    "description": {
      "tr": "Küçük cerrahi operasyonlar, klinikler ve acil servis müdahaleleri için yüksek aydınlatma performansı ve gölgesiz ışık alanı sunan tavan, duvar ve mobil ayak montajlı cerrahi lamba.",
      "en": "Minor surgical light offering high illumination performance and shadowless light field for small surgeries, clinics, and ER interventions, available with ceiling, wall, and mobile stand mounts.",
      "fr": "Éclairage chirurgical mineur offrant des performances d'éclairage élevées et un champ lumineux sans ombre pour les petites chirurgies, les cliniques et les interventions aux urgences, disponible avec des supports de plafond, muraux et mobiles.",
      "az": "Kiçik cərrahi əməliyyatlar, klinikalar və təcili yardım müdaxilələri üçün yüksək işıqlandırma performansı və kölgəsiz işıq sahəsi təklif edən tavana, divara və mobil dayağa quraşdırılmış cərrahi lampa."
    },
    "image": "/KS-Q10-Ledli-minor-cerrahi-lambasi.jpg",
    "features": {
      "tr": [
        "Gelişmiş Cerrahi Aydınlatma Performansı (10 LED)",
        "Gölgesiz Işık Alanı Teknolojisi",
        "Dokunmatik Kontrol Paneli Üzerinden Parlaklık Ayarı",
        "Sterilize Edilebilir Tutamak Kolu",
        "Maksimum Eklemli Kol ile Geniş Erişim Açısı"
      ],
      "en": [
        "Advanced Surgical Lighting Performance (10 LEDs)",
        "Shadowless Light Field Technology",
        "Brightness Adjustment via Touch Control Panel",
        "Sterilizable Handle Grip",
        "Wide Reach Angle with Articulated Arm"
      ],
      "fr": [
        "Performance d'éclairage chirurgical avancée (10 LED)",
        "Technologie de champ lumineux sans ombre",
        "Réglage de la luminosité via le panneau de commande tactile",
        "Poignée stérilisable",
        "Grand angle de portée avec bras articulé"
      ],
      "az": [
        "Qabaqcıl Cərrahi İşıqlandırma Performansı (10 LED)",
        "Kölgəsiz İşıq Sahəsi Texnologiyası",
        "Toxunma İdarəetmə Paneli ilə Parlaqlığın Tənzimlənməsi",
        "Sterilizasiya olunan Tutacaq",
        "Maksimum Oynaq Qolu olan Geniş Giriş Bucağı"
      ]
    }
  },
  {
    "id": "ks-q3-led-exam",
    "name": {
      "tr": "KS-Q3 Ledli Muayene Lambası",
      "en": "KS-Q3 LED Examination Light",
      "fr": "Lampe d'examen LED KS-Q3",
      "az": "KS-Q3 LED Yoxlama Lampası"
    },
    "category": "SurgicalLight",
    "description": {
      "tr": "Genel muayene, jinekoloji ve dermatoloji uygulamaları için ideal, gün ışığı spektrumuna sahip kompakt ve güçlü LED aydınlatma cihazı.",
      "en": "Compact and powerful LED lighting device with daylight spectrum, ideal for general examination, gynecology, and dermatology applications.",
      "fr": "Appareil d'éclairage LED compact et puissant avec spectre de lumière du jour, idéal pour les applications d'examen général, de gynécologie et de dermatologie.",
      "az": "Gün işığı spektrinə malik kompakt və güclü LED işıqlandırma cihazı, ümumi müayinə, ginekologiya və dermatoloji tətbiqlər üçün idealdır."
    },
    "image": "/KS-Q3-Ledli-muayene-lambasi.jpg",
    "features": {
      "tr": [
        "Gün Işığı Renk Sıcaklığı (Daylight)",
        "Odaklanabilir Işık Demeti",
        "Sağlam ve Stabil Mobil Stand Tabanı",
        "Düşük Enerji Tüketimi",
        "Ergonomik ve Modern Tasarım"
      ],
      "en": [
        "Daylight Color Temperature",
        "Focusable Light Beam",
        "Robust and Stable Mobile Stand Base",
        "Low Energy Consumption",
        "Ergonomic and Modern Design"
      ],
      "fr": [
        "Température de couleur de la lumière du jour",
        "Faisceau lumineux focalisable",
        "Base de support mobile robuste et stable",
        "Faible consommation d'énergie",
        "Design ergonomique et moderne"
      ],
      "az": [
        "Gün işığı Rəng Temperaturu (Gün işığı)",
        "Fokuslana bilən işıq şüası",
        "Möhkəm və Sabit Mobil Stand Baza",
        "Aşağı Enerji İstehlakı",
        "Erqonomik və Müasir Dizayn"
      ]
    }
  },
  {
    "id": "saten-fo-handles",
    "name": {
      "tr": "Saten Fiberoptik Laringoskop Kolları",
      "en": "Saten Fiber Optic Laryngoscope Handles",
      "fr": "Poignées de laryngoscope à fibre optique Saten",
      "az": "Satin Fiberoptik Laringoskop Silahları"
    },
    "category": "Laryngoscope",
    "description": {
      "tr": "Mükemmel tutuş ve dayanıklılık sunan, yüksek kaliteli fiberoptik ışık iletim teknolojisi ile uyumlu laringoskop sapları.",
      "en": "Laryngoscope handles offering excellent grip and durability, compatible with high-quality fiber optic light transmission technology.",
      "fr": "Poignées de laryngoscope offrant une excellente adhérence et durabilité, compatibles avec la technologie de transmission de la lumière par fibre optique de haute qualité.",
      "az": "Laringoskop tutacaqları yüksək keyfiyyətli fiberoptik işıq ötürmə texnologiyasına uyğundur, əla tutuş və davamlılıq təklif edir."
    },
    "image": "/saten-fiberoptik-kollari.jpg",
    "features": {
      "tr": [
        "Yüksek Kaliteli Paslanmaz Çelik Gövde",
        "Güvenli ve Kaymayan Tırtıllı Yüzey",
        "LED veya Ksenon Ampul Seçenekleri ile Uyumlu",
        "Standart Yeşil Kodlu Fiberoptik Sistem",
        "Otoklavlanabilir Gövde Yapısı"
      ],
      "en": [
        "High-Quality Stainless Steel Body",
        "Secure and Non-slip Knurled Surface",
        "Compatible with LED or Xenon Bulb Options",
        "Standard Green-Coded Fiber Optic System",
        "Autoclavable Body Structure"
      ],
      "fr": [
        "Corps en acier inoxydable de haute qualité",
        "Surface moletée sécurisée et antidérapante",
        "Compatible avec les options d'ampoule LED ou xénon",
        "Système de fibre optique standard à code vert",
        "Structure du corps autoclavable"
      ],
      "az": [
        "Yüksək Keyfiyyətli Paslanmayan Polad Korpus",
        "Təhlükəsiz və sürüşməyən dişli səth",
        "LED və ya Ksenon Lampa Seçimləri ilə uyğundur",
        "Standart Yaşıl Kod Fiberoptik Sistem",
        "Avtoklavlana bilən bədən quruluşu"
      ]
    }
  },
  {
    "id": "saten-miller-fo",
    "name": {
      "tr": "Saten Miller Fiberoptik Laringoskop Bıçağı",
      "en": "Saten Miller Fiber Optic Laryngoscope Blade",
      "fr": "Lame de laryngoscope à fibre optique Saten Miller",
      "az": "Satin Miller Fiberoptik Laringoskop Blade"
    },
    "category": "Laryngoscope",
    "description": {
      "tr": "Pediatrik ve bebek hastaların entübasyonu için tasarlanmış, doğrudan görüş sağlayan düz tipli Miller fiberoptik laringoskop bıçağı (bleyd).",
      "en": "Straight-type Miller fiber optic laryngoscope blade designed for pediatric and infant intubation, providing direct visualization.",
      "fr": "Lame de laryngoscope à fibre optique Miller de type droit conçue pour l'intubation pédiatrique et infantile, offrant une visualisation directe.",
      "az": "Uşaq və körpə xəstələrin intubasiyası üçün nəzərdə tutulmuş, birbaşa görmə təmin edən düz tipli Miller fiberoptik larinqoskop bıçağı (bıçağı)."
    },
    "image": "/saten-miller-fiberoptik.jpg",
    "features": {
      "tr": [
        "Pediatrik Hastalar İçin Düz Miller Tasarımı",
        "Yüksek Yoğunluklu Entegre Fiberoptik Işık Taşıyıcı",
        "Mat Yüzey İşlemesi ile Parlamayan Tasarım",
        "Kolay Temizlenebilir Pürüzsüz Kenarlar",
        "Uluslararası Standartlarla Uyumlu Soket"
      ],
      "en": [
        "Straight Miller Design for Pediatric Patients",
        "High-Density Integrated Fiber Optic Light Carrier",
        "Glare-Free Satin Finish Surface",
        "Easy-to-clean Smooth Edges",
        "Socket Compatible with International Standards"
      ],
      "fr": [
        "Conception droite Miller pour les patients pédiatriques",
        "Support de lumière à fibre optique intégré haute densité",
        "Surface au fini satiné sans éblouissement",
        "Bords lisses faciles à nettoyer",
        "Prise compatible avec les normes internationales"
      ],
      "az": [
        "Pediatrik Xəstələr üçün Düz Şaft Dizaynı",
        "Yüksək İntensivlikli İnteqrasiya edilmiş Fiberoptik İşıq Daşıyıcısı",
        "Tutqun Səthi Müalicə ilə Parlamayan Dizayn",
        "Asan Təmizləmə Hamar Kenarları",
        "Soket Beynəlxalq Standartlara Uyğundur"
      ]
    }
  },
  {
    "id": "saten-fo-laryngoscope-sets",
    "name": {
      "tr": "Saten Fiberoptik Laringoskop Seti",
      "en": "Saten Fiber Optic Laryngoscope Set",
      "fr": "Ensemble de laryngoscope à fibre optique Saten",
      "az": "Satin Fiberoptik Laringoskop Dəsti"
    },
    "category": "Laryngoscope",
    "description": {
      "tr": "Farklı boyutlarda Macintosh ve Miller bıçakları ile uyumlu kolu bir araya getiren, taşıma çantalı profesyonel fiberoptik laringoskop seti.",
      "en": "Professional fiber optic laryngoscope set combining various sizes of Macintosh and Miller blades with a compatible handle, presented in a carrying case.",
      "fr": "Ensemble de laryngoscope professionnel à fibre optique combinant différentes tailles de lames Macintosh et Miller avec une poignée compatible, présenté dans une mallette de transport.",
      "az": "Müxtəlif ölçülü Macintosh və Miller bıçaqlarına uyğun tutacaqları birləşdirən, daşıma qutusu olan peşəkar fiberoptik larinqoskop dəsti."
    },
    "image": "/saren-fiberoptik-laringoskop-setleri.jpg",
    "features": {
      "tr": [
        "Komple Macintosh ve Miller Bıçak Çeşitleri",
        "Entegre Fiberoptik Işık İletimli Sap",
        "Darbeye Dayanıklı Özel Taşıma Çantası",
        "Yüksek Aydınlatma Gücü ve Net Görüş",
        "Dayanıklı ve Otoklavlanabilir Metal Yapı"
      ],
      "en": [
        "Complete Selection of Macintosh and Miller Blades",
        "Integrated Fiber Optic Light Transmitting Handle",
        "Impact-resistant Dedicated Carrying Case",
        "High Illumination Power and Clear Visualization",
        "Durable and Autoclavable Metal Construction"
      ],
      "fr": [
        "Sélection complète de lames Macintosh et Miller",
        "Poignée de transmission de lumière à fibre optique intégrée",
        "Étui de transport dédié résistant aux chocs",
        "Puissance d'éclairage élevée et visualisation claire",
        "Construction métallique durable et autoclavable"
      ],
      "az": [
        "Tam Macintosh və Miller Bıçaq Növləri",
        "İnteqrasiya edilmiş Fiberoptik İşıq Ötürmə Dəstəyi",
        "Zərbəyə davamlı Xüsusi Daşıma Çantası",
        "Yüksək İşıqlandırma Gücü və Aydın Görmə",
        "Davamlı və avtoklavlana bilən metal konstruksiya"
      ]
    }
  },
  {
    "id": "saten-macintosh-blades",
    "name": {
      "tr": "Saten Macintosh Laringoskop Bıçakları",
      "en": "Saten Macintosh Laryngoscope Blades",
      "fr": "Lames de laryngoscope Saten Macintosh",
      "az": "Satin Macintosh Laringoskop Bıçaqları"
    },
    "category": "Laryngoscope",
    "description": {
      "tr": "Yetişkin hastaların entübasyonu için tasarlanmış, kıvrık uçlu klasik Macintosh tipi laringoskop bıçakları.",
      "en": "Classic curved Macintosh type laryngoscope blades designed for adult patient intubation.",
      "fr": "Lames de laryngoscope incurvées classiques de type Macintosh conçues pour l'intubation des patients adultes.",
      "az": "Böyük xəstələrin intubasiyası üçün nəzərdə tutulmuş əyri ucları olan klassik Macintosh tipli larinqoskop bıçaqları."
    },
    "image": "/saten-macintosh-bicaklari.jpg",
    "features": {
      "tr": [
        "Klasik Eğri Macintosh Tasarımı",
        "Yüksek Dayanımlı Paslanmaz Çelik Malzeme",
        "Saten Kaplama ile Parlama Engelleyici Yüzey",
        "Atravmatik Yuvarlatılmış Uç Yapısı",
        "Kolay Takılıp Çıkarılabilen Mekanizma"
      ],
      "en": [
        "Classic Curved Macintosh Design",
        "High-Strength Stainless Steel Material",
        "Satin Finish Glare-reducing Surface",
        "Atraumatic Rounded Tip Structure",
        "Easy Attach and Detach Mechanism"
      ],
      "fr": [
        "Conception Macintosh incurvée classique",
        "Matériau en acier inoxydable à haute résistance",
        "Surface satinée réduisant l'éblouissement",
        "Structure atraumatique à pointe arrondie",
        "Mécanisme d'attache et de détachement facile"
      ],
      "az": [
        "Klassik əyri Macintosh Dizayn",
        "Yüksək Güclü Paslanmayan Polad Material",
        "Satin örtüklü parıltı əleyhinə səth",
        "Atravmatik Dairəvi Ucu Quruluş",
        "Asanlıqla Quraşdırılan və Sökülən Mexanizm"
      ]
    }
  },
  {
    "id": "saten-macintosh-fo",
    "name": {
      "tr": "Saten Macintosh Fiberoptik Laringoskop Bıçağı",
      "en": "Saten Macintosh Fiber Optic Laryngoscope Blade",
      "fr": "Lame de laryngoscope à fibre optique Saten Macintosh",
      "az": "Satin Macintosh Fiberoptik Laringoskop Blade"
    },
    "category": "Laryngoscope",
    "description": {
      "tr": "Kıvrık Macintosh bıçağı üzerinde yüksek performanslı fiberoptik ışık kanalı barındıran, yetişkin entübasyonlarında en yüksek ışık verimini sunan bleyd.",
      "en": "Curved Macintosh blade featuring a high-performance fiber optic light channel, offering maximum light efficiency in adult intubations.",
      "fr": "Lame Macintosh incurvée dotée d'un canal de lumière à fibre optique haute performance, offrant une efficacité lumineuse maximale dans les intubations adultes.",
      "az": "The blade features a high-performance fiberoptic light channel on its curved Macintosh blade and offers the highest light efficiency in adult intubations."
    },
    "image": "/saten-macintosh-fiberoptik.jpg",
    "features": {
      "tr": [
        "Yetişkinler İçin Eğri Macintosh Yapısı",
        "Geniş Çaplı Çıkarılabilir Fiberoptik Demet",
        "Optimum Parlaklık ve Doğal Doku Rengi",
        "Kolay Temizlenebilir ve Sterilize Edilebilir",
        "Standart Yeşil Sistem Uyumlu"
      ],
      "en": [
        "Curved Macintosh Structure for Adults",
        "Large Diameter Removable Fiber Optic Bundle",
        "Optimum Brightness and Natural Tissue Color",
        "Easy to Clean and Sterilize",
        "Standard Green System Compatible"
      ],
      "fr": [
        "Structure Macintosh incurvée pour adultes",
        "Faisceau de fibres optiques amovibles de grand diamètre",
        "Luminosité optimale et couleur naturelle des tissus",
        "Facile à nettoyer et à stériliser",
        "Compatible avec le système vert standard"
      ],
      "az": [
        "Böyüklər üçün əyri Macintosh Build",
        "Böyük Diametrli Çıxarılan Fiberoptik Paket",
        "Optimal Parıltı və Təbii Tekstura Rəngi ​​",
        "Təmizləmək və sterilizasiya etmək asan",
        "Standart Yaşıl Sistem Uyğundur"
      ]
    }
  },
  {
    "id": "saten-miller-blades",
    "name": {
      "tr": "Saten Miller Laringoskop Bıçakları",
      "en": "Saten Miller Laryngoscope Blades",
      "fr": "Lames de laryngoscope Saten Miller",
      "az": "Satin Miller Laringoskop Bıçaqları"
    },
    "category": "Laryngoscope",
    "description": {
      "tr": "Düz bıçak geometrisi ile pediatrik entübasyonlarda epiglotun doğrudan kaldırılmasını sağlayan klasik Miller tipi laringoskop bıçakları.",
      "en": "Classic Miller type laryngoscope blades allowing direct elevation of the epiglottis in pediatric intubations with straight blade geometry.",
      "fr": "Lames de laryngoscope de type Miller classique permettant une élévation directe de l'épiglotte dans les intubations pédiatriques avec une géométrie de lame droite.",
      "az": "Düz bıçaq həndəsəsi ilə uşaq intubasiyalarında epiqlottisin birbaşa yüksəlməsinə imkan verən klassik Miller tipli larinqoskop bıçaqları."
    },
    "image": "/saten-miller-bicaklari.jpg",
    "features": {
      "tr": [
        "Klasik Düz Miller Geometrisi",
        "Bebek ve Çocuk Boyutlarında Seçenekler",
        "Yansımaları Önleyen Saten Metal Yüzey",
        "Pürüzsüz ve Güvenli Kenar Tasarımı",
        "Yüksek Korozyon Direnci"
      ],
      "en": [
        "Classic Straight Miller Geometry",
        "Available in Infant and Child Sizes",
        "Satin Metal Surface Preventing Reflections",
        "Smooth and Safe Edge Design",
        "High Corrosion Resistance"
      ],
      "fr": [
        "Géométrie Miller droite classique",
        "Disponible en tailles nourrissons et enfants",
        "Surface métallique satinée empêchant les reflets",
        "Conception de bord lisse et sûre",
        "Haute résistance à la corrosion"
      ],
      "az": [
        "Klassik Düz Şaft Həndəsəsi",
        "Körpə və Uşaq Ölçülərində Seçimlər",
        "Satin Metal Səthi Yansımaların qarşısını alır",
        "Hamar və Təhlükəsiz Kenar Dizaynı",
        "Yüksək Korroziyaya Müqavimət"
      ]
    }
  },
  {
    "id": "saten-standard-handles",
    "name": {
      "tr": "Saten Standart Laringoskop Kolları",
      "en": "Saten Standard Laryngoscope Handles",
      "fr": "Poignées de laryngoscope standard Saten",
      "az": "Satin Standart Laringoskop Tutacaqları"
    },
    "category": "Laryngoscope",
    "description": {
      "tr": "Klasik ampullü (standart sistem) laringoskop bıçakları ile uyumlu çalışan, pilli ve uzun ömürlü standart laringoskop sapları.",
      "en": "Standard laryngoscope handles working compatibly with classic bulb (standard system) laryngoscope blades, battery-powered and long-lasting.",
      "fr": "Poignées de laryngoscope standard fonctionnant de manière compatible avec les lames de laryngoscope à ampoule classique (système standard), alimentées par batterie et durables.",
      "az": "Klassik ampul (standart sistem) larinqoskop bıçaqları ilə uyğun gələn batareya ilə işləyən və uzunömürlü standart larinqoskop tutacaqları."
    },
    "image": "/saten-standart-kollari.jpg",
    "features": {
      "tr": [
        "Klasik Standart Sistem Uyumlu",
        "Tırtıklı Yüzeyi ile Güvenli Kavrama",
        "C ve AA Pil Tipleri ile Çalışma Seçeneği",
        "Paslanmaz Çelik Şasi",
        "Ekonomik ve Güvenilir Çözüm"
      ],
      "en": [
        "Classic Standard System Compatible",
        "Secure Grip with Knurled Surface",
        "C and AA Battery Type Options",
        "Stainless Steel Chassis",
        "Economical and Reliable Solution"
      ],
      "fr": [
        "Compatible avec le système standard classique",
        "Prise sécurisée avec surface moletée",
        "Options de types de piles C et AA",
        "Châssis en acier inoxydable",
        "Solution économique et fiable"
      ],
      "az": [
        "Klassik Standart Sistem Uyğun",
        "Dişli Səthlə Təhlükəsiz Tutma",
        "C və AA Batareya Növləri ilə İş Seçimləri",
        "Paslanmayan Polad Şassi",
        "İqtisadi və Etibarlı Həll"
      ]
    }
  },
  {
    "id": "adsafe-cpr-pocket-resuscitator",
    "name": {
      "tr": "Adsafe ™ CPR Cep Resüsitatörü",
      "en": "Adsafe ™ CPR Pocket Resuscitator",
      "fr": "Réanimateur de poche Adsafe ™ CPR",
      "az": "Adsafe™ CPR Cib Reanimasiyası"
    },
    "category": "CPR",
    "description": {
      "tr": "İlk yardım ve acil kurtarma operasyonları için tasarlanmış, geri dönüşsüz valfe ve filtreye sahip profesyonel cep tipi suni solunum maskesi.",
      "en": "Professional pocket-sized resuscitation mask with one-way valve and filter, designed for first aid and emergency rescue operations.",
      "fr": "Masque de réanimation professionnel de poche avec valve unidirectionnelle et filtre, conçu pour les opérations de premiers secours et de secours d'urgence.",
      "az": "İlk tibbi yardım və fövqəladə xilasetmə əməliyyatları üçün nəzərdə tutulmuş, geri dönməyən klapanı və filtri olan peşəkar cib ölçülü süni tənəffüs maskası."
    },
    "image": "/adsafe-cpr-cep-resusitatoru.jpg",
    "features": {
      "tr": [
        "Tek Yönlü Geri Dönüşsüz Şeffaf Valf",
        "3M Filtre Teknolojisi ile Çapraz Bulaşma Koruması",
        "Şişirilebilir Yumuşak Maske Kenarları",
        "Oksijen Giriş Portu Entegrasyonu",
        "Kompakt Sert Taşıma Çantası"
      ],
      "en": [
        "One-way Non-rebreathing Transparent Valve",
        "3M Filter Technology for Cross-contamination Protection",
        "Inflatable Cushion Mask Design",
        "Integrated Oxygen Inlet Port",
        "Compact Hard Carrying Case"
      ],
      "fr": [
        "Valve transparente unidirectionnelle sans réinspiration",
        "Technologie de filtre 3M pour la protection contre la contamination croisée",
        "Conception de masque de coussin gonflable",
        "Port d'entrée d'oxygène intégré",
        "Étui de transport rigide et compact"
      ],
      "az": [
        "Tək Yönlü Qaytarılmayan Şəffaf Valf",
        "3M Filtr Texnologiyası ilə Çapraz Çirklənmədən Qorunma",
        "Şişmə yumşaq maska ​​tərəfləri",
        "Oxygen Input Port Integration",
        "Kompakt Sərt Daşıma Çantası"
      ]
    }
  },
  {
    "id": "adsafe-cpr-face-shield",
    "name": {
      "tr": "Adsafe ™ CPR Yüz Kalkanı",
      "en": "Adsafe ™ CPR Face Shield",
      "fr": "Écran facial RCR Adsafe ™",
      "az": "Adsafe™ CPR Üz Qalxanı"
    },
    "category": "CPR",
    "description": {
      "tr": "Kurtarıcı ile hasta arasında hijyenik bariyer oluşturan, cüzdan ve ilk yardım çantalarında kolayca taşınabilen tek kullanımlık CPR yüz kalkanı.",
      "en": "Disposable CPR face shield establishing a hygienic barrier between the rescuer and the patient, easily carried in wallets and first aid kits.",
      "fr": "Écran facial jetable pour RCR établissant une barrière hygiénique entre le secouriste et le patient, facilement transportable dans les portefeuilles et les trousses de premiers secours.",
      "az": "Xilasedici ilə xəstə arasında gigiyenik maneə yaradan və pul kisələrində və ilk yardım dəstlərində asanlıqla daşına bilən birdəfəlik CPR üz qalxanı."
    },
    "image": "/adsafe-cpr-yüz-kalkani.jpg",
    "features": {
      "tr": [
        "Yarı Saydam Plastik Koruyucu Bariyer",
        "Entegre Hidrofobik Filtreli Hava Yolu Valfi",
        "Kompakt ve Hafif Pratik Paket",
        "Kullanım Kolaylığı İçin Yönlendirici Anatomik Çizimler",
        "Tek Kullanımlık Hijyenik Tasarım"
      ],
      "en": [
        "Translucent Plastic Protective Barrier",
        "Airway Valve with Integrated Hydrophobic Filter",
        "Compact and Lightweight Practical Pack",
        "Anatomical Graphics for Ease of Use",
        "Disposable Hygienic Design"
      ],
      "fr": [
        "Barrière de protection en plastique translucide",
        "Valve respiratoire avec filtre hydrophobe intégré",
        "Pack pratique compact et léger",
        "Graphiques anatomiques pour une utilisation facile",
        "Conception hygiénique jetable"
      ],
      "az": [
        "Şəffaf Plastik Qoruyucu Baryer",
        "İnteqrasiya edilmiş hidrofobik filtrli hava yolu klapan",
        "Yığcam və Yüngül Praktik Paket",
        "İstifadə asanlığı üçün təlimatlandırıcı anatomik rəsmlər",
        "Birdəfəlik Gigiyenik Dizayn"
      ]
    }
  },
  {
    "id": "adsafe-cpr-face-shield-foil",
    "name": {
      "tr": "Adsafe ™ CPR Yüz Kalkanı Folyo",
      "en": "Adsafe ™ CPR Face Shield Foil",
      "fr": "Feuille d'écran facial Adsafe ™ CPR",
      "az": "Adsafe™ CPR Üz Qalxanı Folqa"
    },
    "category": "CPR",
    "description": {
      "tr": "Anahtarlık şeklinde küçük folyo paketinde taşınan, acil durumlarda her an elinizin altında bulunan koruyucu CPR yüz bariyeri.",
      "en": "Protective CPR face barrier housed in a small keyring-style foil packet, instantly accessible in case of emergency.",
      "fr": "Écran facial de protection pour RCR logé dans un petit paquet en aluminium de type porte-clés, accessible instantanément en cas d'urgence.",
      "az": "Qoruyucu CPR üz maneəsi, brelok şəklində kiçik folqa paketində daşınır və fövqəladə hallarda həmişə əlindədir."
    },
    "image": "/adsafe-yuz-kalkani-folyo.jpg",
    "features": {
      "tr": [
        "Anahtarlık Aparatlı Mini Folyo Çanta",
        "Geri Dönüşsüz Filtreli Valf Teknolojisi",
        "Son Derece Hafif ve Taşınabilir Yapı",
        "Acil Durumlarda Kolay Yırtılıp Açılan Paket",
        "Güvenilir Hijyenik Koruma"
      ],
      "en": [
        "Mini Foil Pouch with Keyring Attachment",
        "One-Way Filtered Valve Technology",
        "Extremely Lightweight and Portable",
        "Easy Tear-Open Packet for Resuscitation",
        "Reliable Hygienic Protection"
      ],
      "fr": [
        "Mini pochette en aluminium avec attache porte-clés",
        "Technologie de vanne filtrée unidirectionnelle",
        "Extrêmement léger et portable",
        "Paquet facile à ouvrir pour la réanimation",
        "Protection hygiénique fiable"
      ],
      "az": [
        "Açarlıq Əlavəsi ilə Mini Folqa Çanta",
        "Qaytarılmayan Filtr Valf Texnologiyası",
        "Çox Yüngül və Portativ Struktur",
        "Fövqəladə Hallarda Asanlıqla Yırtılan Paket",
        "Etibarlı Gigiyenik Mühafizə"
      ]
    }
  },
  {
    "id": "adsafe-plus-cpr-face-shield",
    "name": {
      "tr": "Adsafe ™ PLUS CPR Yüz Kalkanı",
      "en": "Adsafe ™ PLUS CPR Face Shield",
      "fr": "Écran facial Adsafe ™ PLUS CPR",
      "az": "Adsafe™ PLUS CPR Üz Qalxanı"
    },
    "category": "CPR",
    "description": {
      "tr": "Geliştirilmiş kalın bariyer koruması ve yüksek filtrasyon performansı ile acil solunum desteğinde maksimum güvenlik sağlayan CPR maskesi.",
      "en": "CPR face shield providing maximum safety during emergency respiratory support with enhanced thick barrier protection and high filtration performance.",
      "fr": "Écran facial CPR offrant une sécurité maximale lors d'une assistance respiratoire d'urgence avec une protection épaisse améliorée et des performances de filtration élevées.",
      "az": "Təkmil qalın maneə mühafizəsi və yüksək filtrasiya performansı ilə təcili tənəffüs dəstəyində maksimum təhlükəsizliyi təmin edən CPR maskası."
    },
    "image": "/adsafe-plus-cpr-yüz-kalkani.jpg",
    "features": {
      "tr": [
        "Güçlendirilmiş Kalın Koruyucu Membran",
        "Yüksek Verimli Tek Yönlü Filtreli Valf",
        "Güvenli Yüz Oturumu Sağlayan Bantlar",
        "İlk Yardım Ekipleri İçin Profesyonel Paket",
        "Çapraz Enfeksiyonu Engelleme Garantisi"
      ],
      "en": [
        "Reinforced Thick Protective Membrane",
        "High-efficiency One-way Filtered Valve",
        "Securing Straps for Proper Face Alignment",
        "Professional Packaging for Emergency Responders",
        "Cross-infection Prevention Guarantee"
      ],
      "fr": [
        "Membrane de protection épaisse renforcée",
        "Vanne filtrée unidirectionnelle à haute efficacité",
        "Sangles de fixation pour un bon alignement du visage",
        "Emballage professionnel pour les intervenants d'urgence",
        "Garantie de prévention des infections croisées"
      ],
      "az": [
        "Gücləndirilmiş Qalın Qoruyucu Membran",
        "Yüksək Səmərəli Tək Yönlü Filtr Valfi",
        "Təhlükəsiz Üz Uyğunluğunu təmin edən lentlər",
        "İlk Yardım Qrupları üçün Peşəkar Paket",
        "Çarpaz infeksiyanın qarşısını almaq üçün zəmanət verilir"
      ]
    }
  },
  {
    "id": "berman-set-disposable-airway",
    "name": {
      "tr": "Berman Set Tek Kullanımlık Havayolu",
      "en": "Berman Disposable Airway Set",
      "fr": "Ensemble de voies respiratoires jetables Berman",
      "az": "Berman Set Birdəfəlik Aviaşirkət"
    },
    "category": "CPR",
    "description": {
      "tr": "Anestezi ve ilk yardım uygulamalarında havayolu açıklığını korumak amacıyla tasarlanmış, farklı boyutlardan oluşan tek kullanımlık Berman havayolu seti.",
      "en": "Disposable Berman airway set consisting of various sizes, designed to maintain airway patency in anesthesia and first aid applications.",
      "fr": "Ensemble de voies respiratoires Berman jetable composé de différentes tailles, conçu pour maintenir la perméabilité des voies respiratoires dans les applications d'anesthésie et de premiers secours.",
      "az": "Anesteziya və ilk yardım tətbiqlərində hava yolunun keçiriciliyini qorumaq üçün nəzərdə tutulmuş müxtəlif ölçülərdən ibarət birdəfəlik Berman hava yolu dəsti."
    },
    "image": "/berman-set-tek-kullanımlık-havayolu.jpg",
    "features": {
      "tr": [
        "Farklı Yaş Grupları İçin Çeşitli Boyutlar",
        "Çift Kanallı Tasarım ile Kateter Giriş Kolaylığı",
        "Bite Block (Isırma Bloğu) Takviyeli",
        "Tek Kullanımlık Steril Paket",
        "Yumuşak ve Atravmatik Kenarlar"
      ],
      "en": [
        "Various Sizes for Different Age Groups",
        "Dual-Channel Design for Easy Catheter Access",
        "Reinforced Bite Block Area",
        "Disposable Sterile Packaging",
        "Soft and Atraumatic Edges"
      ],
      "fr": [
        "Différentes tailles pour différents groupes d'âge",
        "Conception à double canal pour un accès facile au cathéter",
        "Zone de bloc de morsure renforcée",
        "Emballage stérile jetable",
        "Bords doux et atraumatique"
      ],
      "az": [
        "Fərqli Yaş Qrupları üçün Müxtəlif Ölçülər",
        "İki Kanal Dizaynı ilə Kateter Girişinin Asanlığı",
        "Dişləmə Bloku Gücləndirilmiş",
        "Birdəfəlik Steril Paket",
        "Yumşaq və atravmatik kənarlar"
      ]
    }
  },
  {
    "id": "bite-stick",
    "name": {
      "tr": "Bite Stick (Isırma Çubuğu)",
      "en": "Bite Stick",
      "fr": "Bâton de morsure",
      "az": "Bite Stick"
    },
    "category": "CPR",
    "description": {
      "tr": "Epilepsi nöbetleri veya konvülsiyonlar sırasında hastanın dilini ısırmasını engellemek ve havayolunu korumak amacıyla kullanılan tıbbi ısırma çubuğu.",
      "en": "Medical bite stick used to prevent patients from biting their tongue and protect the airway during epileptic seizures or convulsions.",
      "fr": "Bâtonnet médical utilisé pour empêcher les patients de se mordre la langue et protéger les voies respiratoires lors de crises d'épilepsie ou de convulsions.",
      "az": "Tibbi dişləmə çubuğu xəstənin dilini dişləməsinin qarşısını almaq və epileptik tutmalar və ya qıcolmalar zamanı tənəffüs yollarını qorumaq üçün istifadə olunur."
    },
    "image": "/bite-stick.jpg",
    "features": {
      "tr": [
        "Yumuşak ve Esnek Malzeme Yapısı",
        "Diş ve Diş Etlerine Zarar Vermeyen Tasarım",
        "Kolay Kavranabilir Sap Bölümü",
        "Hızlı ve Pratik Kullanım",
        "Hijyenik Bireysel Ambalaj"
      ],
      "en": [
        "Soft and Flexible Material Structure",
        "Non-damaging Design for Teeth and Gums",
        "Easy-to-grip Handle Area",
        "Quick and Practical Application",
        "Hygienic Individual Packaging"
      ],
      "fr": [
        "Structure matérielle douce et flexible",
        "Conception non dommageable pour les dents et les gencives",
        "Zone de poignée facile à saisir",
        "Application rapide et pratique",
        "Emballage individuel hygiénique"
      ],
      "az": [
        "Yumşaq və Çevik Material Strukturu",
        "Dişlərə və diş ətlərinə zərər verməyən dizayn",
        "Asanlıqla Tutulan Tutacaq Bölməsi",
        "Tez və Praktik İstifadə",
        "Gigiyenik Fərdi Qablaşdırma"
      ]
    }
  },
  {
    "id": "berman-disposable-airway",
    "name": {
      "tr": "Berman Tek Kullanımlık Havayolu",
      "en": "Berman Disposable Airway",
      "fr": "Voies respiratoires jetables Berman",
      "az": "Berman Birdəfəlik Aviaşirkət"
    },
    "category": "CPR",
    "description": {
      "tr": "Bilinçsiz hastalarda dilin geriye kaçmasını önleyerek solunum yolunu açık tutan tek kullanımlık Berman tipi oral havayolu tüpü.",
      "en": "Disposable Berman-type oral airway tube maintaining open airways in unconscious patients by preventing the tongue from obstructing the throat.",
      "fr": "Tube respiratoire buccal jetable de type Berman maintenant les voies respiratoires ouvertes chez les patients inconscients en empêchant la langue d'obstruer la gorge.",
      "az": "Huşunu itirmiş xəstələrdə dilin geri düşməsinin qarşısını alaraq hava yolunu açıq saxlayan birdəfəlik Berman tipli ağızdan hava yolu borusu."
    },
    "image": "/berman-tek-kullanimlik-havayolu.jpg",
    "features": {
      "tr": [
        "Yarı Esnek Polietilen Malzeme",
        "Açık Yan Kanallar ile Kolay Aspirasyon",
        "Renk Kodlu Boyutlandırma Sistemi",
        "Pürüzsüz Atravmatik Yuvarlatılmış Uç",
        "Isırmaya Karşı Dirençli Sert Gövde"
      ],
      "en": [
        "Semi-flexible Polyethylene Material",
        "Open Side Channels for Easy Aspiration",
        "Color-coded Sizing System",
        "Smooth Atraumatic Rounded Tip",
        "Bite-resistant Rigid Body"
      ],
      "fr": [
        "Matériau en polyéthylène semi-flexible",
        "Canaux latéraux ouverts pour une aspiration facile",
        "Système de dimensionnement à code couleur",
        "Pointe arrondie atraumatique lisse",
        "Corps rigide résistant aux morsures"
      ],
      "az": [
        "Yarı Çevik Polietilen Material",
        "Açıq Yan Kanallarla Aspirasiya",
        "Rəng Kodlu Ölçü Sistemi",
        "Hamar Atravmatik Yuvarlaq Ucu",
        "Dişləməyə davamlı sərt bədən"
      ]
    }
  },
  {
    "id": "guedel-set",
    "name": {
      "tr": "GUEDEL SET",
      "en": "Guedel Oral Airway Set",
      "fr": "Ensemble de voies respiratoires buccales Guedel",
      "az": "GUEDEL DƏSTİ"
    },
    "category": "CPR",
    "description": {
      "tr": "Acil resüsitasyon ve anestezi uygulamalarında kullanılmak üzere farklı boylarda renk kodlu Guedel tüplerinden oluşan profesyonel set.",
      "en": "Professional set consisting of color-coded Guedel airways in various sizes for emergency resuscitation and anesthesia applications.",
      "fr": "Ensemble professionnel composé de voies respiratoires de Guedel à code couleur de différentes tailles pour les applications de réanimation et d'anesthésie d'urgence.",
      "az": "Təcili reanimasiya və anesteziya tətbiqlərində istifadə üçün müxtəlif ölçülü rəng kodlu Guedel borularından ibarət peşəkar dəst."
    },
    "image": "/guedel-set.jpg",
    "features": {
      "tr": [
        "Renk Kodlu Guedel Tüp Çeşitleri",
        "Entegre Sert Isırma Bloğu",
        "Travma Yaratmayan Yumuşak Kenarlar",
        "Özel Saklama ve Taşıma Kutusu",
        "Oksijen Kateteri Geçişine Uygun Profil"
      ],
      "en": [
        "Color-coded Guedel Airway Assortment",
        "Integrated Rigid Bite Block",
        "Non-traumatic Soft Edges",
        "Dedicated Storage and Carrying Case",
        "Profile Suitable for Oxygen Catheter Pass"
      ],
      "fr": [
        "Assortiment de voies respiratoires Guedel à code couleur",
        "Bloc de morsure rigide intégré",
        "Bords souples non traumatisants",
        "Mallette de rangement et de transport dédiée",
        "Profil adapté au passage du cathéter à oxygène"
      ],
      "az": [
        "Rəng Kodlu Guedel Boru Tipləri",
        "İnteqrasiya edilmiş sərt dişləmə bloku",
        "Travma yaratmayan yumşaq kənarlar",
        "Xüsusi Saxlama və Nəqliyyat Qutusu",
        "Profil Oksigen Kateter Keçidi üçün Uyğundur"
      ]
    }
  },
  {
    "id": "adimals-618",
    "name": {
      "tr": "Adimals 618 Pediatrik Steteskop",
      "en": "Adimals 618 Pediatric Stethoscope",
      "fr": "Stéthoscope pédiatrique Adimals 618",
      "az": "Adimals 618 Uşaq Stetoskopu"
    },
    "category": "Stethoscope",
    "description": {
      "tr": "Çocuk hastalar için özel olarak tasarlanmış, sevimli hayvan figürlü değiştirilebilir göğüs aparatlarına sahip pediatrik steteskop.",
      "en": "Pediatric stethoscope specifically designed for child patients, featuring interchangeable snap-on animal face chestpieces.",
      "fr": "Stéthoscope pédiatrique spécialement conçu pour les enfants, doté de pavillons interchangeables en forme de visage d'animal.",
      "az": "Xüsusi olaraq pediatrik xəstələr üçün nəzərdə tutulmuş sevimli heyvan fiqurları ilə dəyişdirilə bilən döş qəfəsi aparatı olan uşaq stetoskopu."
    },
    "image": "/adimals-618.jpg",
    "features": {
      "tr": [
        "Sevimli Hayvan Figürlü Değiştirilebilir Göğüs Aparatları",
        "Hassas Akustik Performans",
        "Çocukları Rahatsız Etmeyen Soğuk Hissiyat Önleyici Halka",
        "Yumuşak Silikon Kulaklık Uçları",
        "Hafif ve Konforlu Tasarım"
      ],
      "en": [
        "Interchangeable Snap-on Animal Face Chestpieces",
        "Precise Acoustic Performance",
        "Non-chill Diaphragm Retaining Rim",
        "Soft Silicone Eartips",
        "Lightweight and Comfortable Design"
      ],
      "fr": [
        "Plastrons interchangeables à visage d’animal à clipser",
        "Performance acoustique précise",
        "Bord de retenue du diaphragme anti-froid",
        "Embouts auriculaires en silicone souple",
        "Conception légère et confortable"
      ],
      "az": [
        "Sevimli heyvan fiqurları ilə dəyişdirilə bilən döş qəfəsi vasitələri",
        "Dəqiq Akustik Performans",
        "Uşaqları Narahat etməyən Soyuq Əleyhinə Üzük",
        "Yumşaq Silikon Qulaq Uçları",
        "Yüngül və Rahat Dizayn"
      ]
    }
  },
  {
    "id": "adscope-600",
    "name": {
      "tr": "Adscope 600 Kardiyoloji Steteskopu",
      "en": "Adscope 600 Cardiology Stethoscope",
      "fr": "Stéthoscope de cardiologie Adscope 600",
      "az": "Adscope 600 Kardioloji Stetoskop"
    },
    "category": "Stethoscope",
    "description": {
      "tr": "Üstün akustik hassasiyete sahip, kardiyologlar ve uzman hekimler için tasarlanmış profesyonel kardiyoloji steteskopu.",
      "en": "Professional cardiology stethoscope designed for cardiologists and specialists, featuring superior acoustic sensitivity.",
      "fr": "Stéthoscope de cardiologie professionnel conçu pour les cardiologues et les spécialistes, doté d'une sensibilité acoustique supérieure.",
      "az": "Kardioloqlar və mütəxəssis həkimlər üçün nəzərdə tutulmuş yüksək akustik həssaslığa malik peşəkar kardioloji stetoskop."
    },
    "image": "/adscope-600.jpg",
    "features": {
      "tr": [
        "Ayarlanabilir Diyafram Teknolojisi (AFD)",
        "Paslanmaz Çelikten Hassas İşlenmiş Göğüs Parçası",
        "Çift Kanallı Akustik Hortum Sistemi",
        "Geliştirilmiş Kulaklık Açıları",
        "Kardiyolojik Dinlemeler İçin Maksimum Ses İletimi"
      ],
      "en": [
        "Adjustable Frequency Diaphragm (AFD) Technology",
        "Precision-crafted Stainless Steel Chestpiece",
        "Double-lumen Acoustic Tubing",
        "Optimized Headset Angles",
        "Maximum Sound Transmission for Cardiology"
      ],
      "fr": [
        "Technologie de diaphragme à fréquence réglable (AFD)",
        "Pavillon en acier inoxydable fabriqué avec précision",
        "Tube acoustique à double lumière",
        "Angles de casque optimisés",
        "Transmission sonore maximale pour la cardiologie"
      ],
      "az": [
        "Tənzimlənən Diyafram Texnologiyası (AFD)",
        "Həssas İşlənmiş Paslanmayan Polad Sinə Parçası",
        "İki Kanallı Akustik Şlanq Sistemi",
        "Təkmilləşdirilmiş Qulaqlıq Bucaqları",
        "Kardioloji dinləmə üçün maksimum səs ötürülməsi"
      ]
    }
  },
  {
    "id": "adscope-601",
    "name": {
      "tr": "Adscope 601 Çok Amaçlı Steteskop",
      "en": "Adscope 601 Convertible Stethoscope",
      "fr": "Stéthoscope convertible Adscope 601",
      "az": "Adscope 601 Çox Məqsədli Stetoskop"
    },
    "category": "Stethoscope",
    "description": {
      "tr": "Değiştirilebilir göğüs aparatları sayesinde hem yetişkin hem de pediatrik hastalar için kullanılabilen çok fonksiyonlu steteskop.",
      "en": "Convertible stethoscope that can be converted for adult or pediatric use thanks to interchangeable chestpiece components.",
      "fr": "Stéthoscope convertible pouvant être converti pour un usage adulte ou pédiatrique grâce aux composants interchangeables du pavillon.",
      "az": "Dəyişdirilə bilən döş qəfəsi əlavələri sayəsində həm böyüklər, həm də uşaq xəstələri üçün istifadə edilə bilən çoxfunksiyalı stetoskop."
    },
    "image": "/adscope-601.jpg",
    "features": {
      "tr": [
        "Değiştirilebilir Diyafram ve Çan Aparatları",
        "Paslanmaz Çelik Konstrüksiyon",
        "Çift Kanallı Hortum Yapısı",
        "Yüksek Akustik Yalıtım Sağlayan Kulaklık Uçları",
        "Farklı Klinik Durumlar İçin Esnek Kullanım"
      ],
      "en": [
        "Convertible Diaphragm and Bell Components",
        "Stainless Steel Construction",
        "Double-lumen Tubing Design",
        "High Acoustic Isolation Eartips",
        "Flexible Use for Various Clinical Settings"
      ],
      "fr": [
        "Composants de diaphragme et de cloche convertibles",
        "Construction en acier inoxydable",
        "Conception de tubes à double lumière",
        "Embouts auriculaires à haute isolation acoustique",
        "Utilisation flexible pour divers environnements cliniques"
      ],
      "az": [
        "Dəyişdirilə bilən Diafraqma və Zəng Cihazları",
        "Paslanmayan Polad Konstruksiya",
        "İki Kanallı Şlanq Strukturu",
        "Yüksək Akustik İzolyasiya Təmin edən Qulaqcıqlar",
        "Fərqli Klinik Vəziyyətlər üçün Çevik İstifadə"
      ]
    }
  },
  {
    "id": "adscope-602",
    "name": {
      "tr": "Adscope 602 Kardiyoloji Steteskopu",
      "en": "Adscope 602 Cardiology Stethoscope",
      "fr": "Stéthoscope de cardiologie Adscope 602",
      "az": "Adscope 602 Kardiologiya Stetoskop"
    },
    "category": "Stethoscope",
    "description": {
      "tr": "Kardiyovasküler seslerin hassas analizi için çift taraflı paslanmaz çelik göğüs parçası barındıran üstün kaliteli kardiyoloji steteskopu.",
      "en": "Premium cardiology stethoscope incorporating a dual-sided stainless steel chestpiece for precise cardiovascular sound analysis.",
      "fr": "Stéthoscope de cardiologie haut de gamme intégrant un pavillon double face en acier inoxydable pour une analyse précise du son cardiovasculaire.",
      "az": "Ürək-damar səslərinin dəqiq təhlili üçün iki tərəfli paslanmayan poladdan hazırlanmış döş parçası ilə yüksək keyfiyyətli kardioloji stetoskop."
    },
    "image": "/adscope-602.jpg",
    "features": {
      "tr": [
        "Çift Taraflı Paslanmaz Çelik Chestpiece",
        "Yetişkin ve Pediatrik Dinleme Yüzeyleri",
        "Akustik Kayıpları Önleyen Çift Kanallı Hortum",
        "Ayarlanabilir Kulaklık Yayları",
        "Üst Düzey Akustik Performans"
      ],
      "en": [
        "Dual-sided Stainless Steel Chestpiece",
        "Adult and Pediatric Listening Surfaces",
        "Double-lumen Tubing Preventing Acoustic Loss",
        "Adjustable Headset Springs",
        "High-end Acoustic Performance"
      ],
      "fr": [
        "Pavillon double face en acier inoxydable",
        "Surfaces d'écoute pour adultes et enfants",
        "Tube à double lumière empêchant la perte acoustique",
        "Ressorts de casque réglables",
        "Performance acoustique haut de gamme"
      ],
      "az": [
        "İkitərəfli Paslanmayan Polad Döşəmə",
        "Böyüklər və Pediatrik Dinləmə Səthləri",
        "Akustik itkilərin qarşısını alan iki kanallı şlanq",
        "Tənzimlənən qulaqlıq yayları",
        "Son Akustik Performans"
      ]
    }
  },
  {
    "id": "adscope-603",
    "name": {
      "tr": "Adscope 603 Klinisyen Steteskopu",
      "en": "Adscope 603 Clinician Stethoscope",
      "fr": "Stéthoscope clinicien Adscope 603",
      "az": "Adscope 603 Clinician Stetoskop"
    },
    "category": "Stethoscope",
    "description": {
      "tr": "Klinik hekimlerin ve hemşirelerin günlük muayenelerinde en çok tercih ettiği, fiyat-performans oranı yüksek profesyonel steteskop.",
      "en": "Highly popular professional clinician stethoscope preferred by doctors and nurses for daily diagnosis, offering exceptional price-performance ratio.",
      "fr": "Stéthoscope de clinicien professionnel très populaire, préféré par les médecins et les infirmières pour le diagnostic quotidien, offrant un rapport qualité-prix exceptionnel.",
      "az": "Klinisyenlər və tibb bacıları tərəfindən gündəlik müayinələr üçün ən çox seçilən yüksək qiymət-performans nisbətinə malik peşəkar stetoskop."
    },
    "image": "/adscope-603.jpg",
    "features": {
      "tr": [
        "Hassas İşlenmiş Çift Başlıklı Göğüs Parçası",
        "AFD Teknolojisi ile Frekans Ayarı",
        "Yumuşak Silikon Sızdırmaz Kulaklık Uçları",
        "Lateks İçermeyen Esnek Hortum",
        "Geniş Renk Seçenekleri ile Modern Tasarım"
      ],
      "en": [
        "Precision-machined Combination Chestpiece",
        "AFD Technology for Frequency Tuning",
        "Soft Silicone Snap-on Eartips",
        "Latex-free Flexible Tubing",
        "Modern Design with Wide Range of Color Options"
      ],
      "fr": [
        "Pavillon combiné usiné avec précision",
        "Technologie AFD pour le réglage des fréquences",
        "Embouts auriculaires en silicone souple",
        "Tube flexible sans latex",
        "Design moderne avec une large gamme d'options de couleurs"
      ],
      "az": [
        "Həssas İşlənmiş İki Başlı Sinə Parçası",
        "AFD Texnologiyası ilə Tezliyin Tənzimlənməsi",
        "Yumşaq Silikon Sızdırmaz Qulaq Uçları",
        "Latekssiz Çevik Şlanq",
        "Geniş Rəng Seçimləri ilə Müasir Dizayn"
      ]
    }
  },
  {
    "id": "adscope-604",
    "name": {
      "tr": "Adscope 604 Pediatrik Steteskop",
      "en": "Adscope 604 Pediatric Stethoscope",
      "fr": "Stéthoscope pédiatrique Adscope 604",
      "az": "Adscope 604 Uşaq Stetoskopu"
    },
    "category": "Stethoscope",
    "description": {
      "tr": "Bebek ve çocuk hastaların muayenesinde doğru tanı koyabilmek için optimize edilmiş hassas akustik performansa sahip pediatrik steteskop.",
      "en": "Pediatric stethoscope with optimized acoustic performance designed for accurate diagnosis in infants and children.",
      "fr": "Stéthoscope pédiatrique aux performances acoustiques optimisées conçu pour un diagnostic précis chez les nourrissons et les enfants.",
      "az": "Körpələri və pediatrik xəstələri müayinə edərkən dəqiq diaqnoz üçün optimallaşdırılmış həssas akustik performansa malik uşaq stetoskopu."
    },
    "image": "/adscope-604.jpg",
    "features": {
      "tr": [
        "Pediatrik Boyutlu Çift Başlı Göğüs Parçası",
        "Küçük Çaplı Ultra Hassas Diyafram ve Çan",
        "Soğuk Hissi Vermeyen Koruyucu Halka",
        "Hafif ve Ergonomik Şasi Yapısı",
        "Çocuk Dostu Renk Seçenekleri"
      ],
      "en": [
        "Pediatric-sized Combination Chestpiece",
        "Small Diameter Ultra-sensitive Diaphragm and Bell",
        "Non-chill Diaphragm and Bell Rims",
        "Lightweight and Ergonomic Headset Structure",
        "Child-friendly Color Variations"
      ],
      "fr": [
        "Pavillon combiné de taille pédiatrique",
        "Diaphragme et cloche ultrasensibles de petit diamètre",
        "Diaphragme anti-froid et jantes en cloche",
        "Structure de casque légère et ergonomique",
        "Variations de couleurs adaptées aux enfants"
      ],
      "az": [
        "Pediatrik Ölçü İki Başlı Sinə Parçası",
        "Kiçik Diametrli Ultra Həssas Diafraqma və Zəng",
        "Soyuq hiss etməyən qoruyucu üzük",
        "Yüngül və Erqonomik Şassi Strukturu",
        "Uşaqlara uyğun rəng seçimləri"
      ]
    }
  },
  {
    "id": "adscope-605",
    "name": {
      "tr": "Adscope 605 İnfant Steteskopu",
      "en": "Adscope 605 Infant Stethoscope",
      "fr": "Stéthoscope pour nourrissons Adscope 605",
      "az": "Adscope 605 Uşaq Stetoskopu"
    },
    "category": "Stethoscope",
    "description": {
      "tr": "Yeni doğan ve bebek hastaların vücut seslerini dinlemek için özel olarak tasarlanmış, son derece küçük göğüs parçalı steteskop.",
      "en": "Infant stethoscope specially designed to listen to body sounds of newborns and small babies, featuring an ultra-small chestpiece.",
      "fr": "Stéthoscope pour nourrissons spécialement conçu pour écouter les bruits corporels des nouveau-nés et des petits bébés, doté d'un pavillon ultra-petit.",
      "az": "Yeni doğulmuş və körpə xəstələrin bədən səslərini dinləmək üçün xüsusi olaraq hazırlanmış son dərəcə kiçik sinə parçası olan stetoskop."
    },
    "image": "/adscope-605.jpg",
    "features": {
      "tr": [
        "Yeni Doğan ve Bebeklere Özel Mikro Göğüs Parçası",
        "Düşük Frekanslı Sesler İçin Derin Çan Tasarımı",
        "Hassas Ciltlere Uygun Soğuk Hissiyat Önleyici Halka",
        "Ergonomik Kulaklık Seti",
        "Mükemmel Akustik İletim"
      ],
      "en": [
        "Infant-sized Micro Chestpiece",
        "Deep Bell Design for Low-frequency Sounds",
        "Non-chill Rims Suitable for Sensitive Skin",
        "Ergonomic Headset Set",
        "Excellent Acoustic Transmission"
      ],
      "fr": [
        "Micro pavillon de taille infantile",
        "Conception de cloche profonde pour les sons basse fréquence",
        "Jantes anti-froid adaptées aux peaux sensibles",
        "Ensemble de casque ergonomique",
        "Excellente transmission acoustique"
      ],
      "az": [
        "Yenidoğulmuşlar və Körpələr üçün Xüsusi Mikro Sinə Parçası",
        "Aşağı tezlikli səslər üçün dərin zəng dizaynı",
        "Həssas Dərilər üçün Uyğun Soyuq Əleyhinə Üzük",
        "Erqonomik Qulaqlıq",
        "Əla Akustik Transmissiya"
      ]
    }
  },
  {
    "id": "adscope-606",
    "name": {
      "tr": "Adscope 606 Ultra Hafif Steteskop",
      "en": "Adscope 606 Ultra-lite Stethoscope",
      "fr": "Stéthoscope ultra-léger Adscope 606",
      "az": "Adscope 606 Ultra Yüngül Stetoskop"
    },
    "category": "Stethoscope",
    "description": {
      "tr": "Boyun ve omuz ağrılarını en aza indirmek için ultra hafif alüminyum göğüs parçasından üretilmiş profesyonel steteskop.",
      "en": "Professional stethoscope constructed with an ultra-lightweight aluminum chestpiece to minimize neck and shoulder strain.",
      "fr": "Stéthoscope professionnel construit avec un pavillon en aluminium ultra-léger pour minimiser la fatigue du cou et des épaules.",
      "az": "Boyun və çiyin ağrılarını minimuma endirmək üçün ultra yüngül alüminium sinə parçasından hazırlanmış peşəkar stetoskop."
    },
    "image": "/adscope-606.jpg",
    "features": {
      "tr": [
        "Ultra Hafif Uçak Sınıfı Alüminyum Göğüs Parçası",
        "Çift Başlıklı Akustik Tasarım",
        "Hassas AFD Frekans Kontrolü",
        "Alerji Yapmayan Lateks İçermeyen Hortum",
        "Konforlu Uzun Süreli Kullanım Garantisi"
      ],
      "en": [
        "Ultra-lightweight Aircraft-grade Aluminum Chestpiece",
        "Combination Acoustic Design",
        "AFD Frequency Control Technology",
        "Hypoallergenic Latex-free Tubing",
        "Guaranteed Comfort for Long-term Wear"
      ],
      "fr": [
        "Pavillon ultra-léger en aluminium de qualité aéronautique",
        "Conception acoustique combinée",
        "Technologie de contrôle de fréquence AFD",
        "Tube hypoallergénique sans latex",
        "Confort garanti pour un port à long terme"
      ],
      "az": [
        "Ultra Yüngül Təyyarə Dərəcəli Alüminium Sinə Parçası",
        "İki Başlı Akustik Dizayn",
        "Dəqiq AFD Tezliyə Nəzarət",
        "Allergiyasız, Latekssiz Şlanq",
        "Rahat Uzunmüddətli İstifadə Zəmanəti"
      ]
    }
  },
  {
    "id": "adscope-609",
    "name": {
      "tr": "Adscope 609 Klinisyen Lite Steteskop",
      "en": "Adscope 609 Clinician Lite Stethoscope",
      "fr": "Stéthoscope Adscope 609 Clinician Lite",
      "az": "Adscope 609 Clinician Lite Stetoskop"
    },
    "category": "Stethoscope",
    "description": {
      "tr": "Hafiflik ile yüksek akustik duyarlılığı bir araya getiren, hekimler ve acil tıp teknisyenleri için ideal hafif steteskop.",
      "en": "Lightweight stethoscope combining ease of carry with high acoustic sensitivity, ideal for doctors and emergency medical technicians.",
      "fr": "Stéthoscope léger alliant facilité de transport et haute sensibilité acoustique, idéal pour les médecins et les techniciens médicaux d'urgence.",
      "az": "Həkimlər və təcili tibbi yardım texnikləri üçün yüngülliyi yüksək akustik həssaslıqla birləşdirən ideal yüngül stetoskop."
    },
    "image": "/adscope-609.jpg",
    "features": {
      "tr": [
        "Hassas Alüminyum Çift Başlı Göğüs Parçası",
        "Soğuk Hissi Vermeyen Akustik Koruma Halkası",
        "Ayarlanabilir Kulaklık Açıları ve Silikon Uçlar",
        "Dayanıklı Esnek Hortum Malzemesi",
        "Klinik Kullanım İçin Ergonomik Yapı"
      ],
      "en": [
        "Precision Aluminum Dual-head Chestpiece",
        "Non-chill Acoustic Diaphragm Rim",
        "Adjustable Headset Angles and Silicone Tips",
        "Durable Flexible Tubing Material",
        "Ergonomic Construction for Clinical Work"
      ],
      "fr": [
        "Pavillon de précision à double tête en aluminium",
        "Jante à diaphragme acoustique anti-froid",
        "Angles de casque réglables et embouts en silicone",
        "Matériau de tube flexible durable",
        "Construction ergonomique pour le travail clinique"
      ],
      "az": [
        "Həssas Alüminium İki Başlı Sinə Parçası",
        "Soyuq hiss etməyən akustik qoruyucu üzük",
        "Tənzimlənən Qulaqlıq Bucaqları və Silikon Uçlar",
        "Davamlı Çevik Şlanq Materialı",
        "Klinik istifadə üçün erqonomik struktur"
      ]
    }
  },
  {
    "id": "adscope-612",
    "name": {
      "tr": "Adscope 612 Tek Taraflı AFD Steteskop",
      "en": "Adscope 612 Single-sided AFD Stethoscope",
      "fr": "Stéthoscope AFD unilatéral Adscope 612",
      "az": "Adscope 612 Təktərəfli AFD Stetoskop"
    },
    "category": "Stethoscope",
    "description": {
      "tr": "Basınç ayarlı tek taraflı AFD diyaframı ile düşük ve yüksek frekanslı sesleri başlığı çevirmeden dinleme imkanı sunan modern steteskop.",
      "en": "Modern stethoscope offering the ability to listen to low and high frequency sounds without flipping the chestpiece, thanks to its single-sided pressure-sensitive AFD diaphragm.",
      "fr": "Stéthoscope moderne offrant la possibilité d'écouter des sons basses et hautes fréquences sans retourner le pavillon, grâce à son diaphragme AFD sensible à la pression sur un seul côté.",
      "az": "Təzyiqlə tənzimlənən tək tərəfli AFD diafraqması ilə başı çevirmədən aşağı və yüksək tezlikli səsləri dinləmək imkanı təqdim edən müasir stetoskop."
    },
    "image": "/adscope-612.jpg",
    "features": {
      "tr": [
        "Tek Taraflı AFD Göğüs Parçası",
        "Dokunma Basıncına Göre Ses Frekansı Ayarı",
        "Ergonomik Tasarımlı Tutma Parçası",
        "Hassas Akustik Yalıtımlı Kulaklık Seti",
        "Şık ve Modern Metalik Kaplama"
      ],
      "en": [
        "Single-sided AFD Chestpiece",
        "Sound Frequency Adjustment Based on Touch Pressure",
        "Ergonomically Designed Grasping Part",
        "Precision Acoustically Sealed Headset",
        "Elegant and Modern Metallic Finish"
      ],
      "fr": [
        "Pavillon AFD simple face",
        "Réglage de la fréquence sonore en fonction de la pression tactile",
        "Partie de préhension ergonomique",
        "Casque de précision acoustiquement scellé",
        "Finition métallique ��légante et moderne"
      ],
      "az": [
        "Təktərəfli AFD Sinə Parçası",
        "Toxunma Təzyiqinə Görə Səs Tezliyinin Tənzimlənməsi",
        "Erqonomik Dizaynlı Tutacaq",
        "Dəqiq Akustik İzolyasiya Qulaqlıq",
        "Qəşəng və Müasir Metalik Finiş"
      ]
    }
  },
  {
    "id": "adscope-613",
    "name": {
      "tr": "Adscope 613 Hekim Tipi Steteskop",
      "en": "Adscope 613 Physician Stethoscope",
      "fr": "Stéthoscope médical Adscope 613",
      "az": "Adscope 613 Həkim Tipi Stetoskop"
    },
    "category": "Stethoscope",
    "description": {
      "tr": "Yüksek akustik hassasiyete sahip, klinisyenlerin solunum ve kardiyovasküler sesleri en ince ayrıntısıyla dinlemesini sağlayan hekim steteskopu.",
      "en": "Physician stethoscope with high acoustic sensitivity, enabling clinicians to listen to respiratory and cardiovascular sounds in fine detail.",
      "fr": "Stéthoscope médical à haute sensibilité acoustique, permettant aux cliniciens d'écouter en détail les sons respiratoires et cardiovasculaires.",
      "az": "Yüksək akustik həssaslığa malik həkim stetoskopu, klinisyenlərə tənəffüs və ürək-damar səslərini ən detallı şəkildə dinləməyə imkan verir."
    },
    "image": "/adscope-613.jpg",
    "features": {
      "tr": [
        "Üst Düzey Akustik Ses İletimi",
        "Ergonomik Paslanmaz Çelik Yaylı Kulaklık Seti",
        "Dayanıklı ve Kalın Duvarlı Akustik Hortum",
        "Konforlu Silikon Sızdırmaz Kulak Uçları",
        "Farklı Frekanslarda Yüksek Doğruluk"
      ],
      "en": [
        "High-end Acoustic Sound Transmission",
        "Ergonomic Stainless Steel Headset",
        "Durable and Thick-walled Acoustic Tubing",
        "Comfortable Silicone Sealed Eartips",
        "High Accuracy across Different Frequencies"
      ],
      "fr": [
        "Transmission du son acoustique haut de gamme",
        "Casque ergonomique en acier inoxydable",
        "Tubes acoustiques durables et à parois épaisses",
        "Embouts confortables scellés en silicone",
        "Haute précision sur différentes fréquences"
      ],
      "az": [
        "Yüksək Səviyyəli Akustik Səsin ötürülməsi",
        "Erqonomik Paslanmayan Polad Yaylı Qulaqlıq",
        "Davamlı və Qalın Divarlı Akustik Şlanq",
        "Rahat Silikon Sızdırmaz Qulaq Uçları",
        "Müxtəlif Tezliklərdə Yüksək Dəqiqlik"
      ]
    }
  },
  {
    "id": "adscope-614",
    "name": {
      "tr": "Adscope 614 Pediatrik AFD Steteskop",
      "en": "Adscope 614 Pediatric AFD Stethoscope",
      "fr": "Stéthoscope AFD pédiatrique Adscope 614",
      "az": "Adscope 614 Pediatrik AFD Stetoskop"
    },
    "category": "Stethoscope",
    "description": {
      "tr": "Basınç ayarlı AFD diyafram teknolojisini pediatrik boyutlara taşıyan, çocuk muayenelerinde üstün ses kalitesi sunan steteskop.",
      "en": "Stethoscope carrying the pressure-sensitive AFD diaphragm technology to pediatric dimensions, offering superior sound quality in pediatric checkups.",
      "fr": "Stéthoscope intégrant la technologie de diaphragme AFD sensible à la pression aux dimensions pédiatriques, offrant une qualité sonore supérieure lors des examens pédiatriques.",
      "az": "Təzyiqlə tənzimlənən AFD diafraqma texnologiyasını pediatrik ölçülərə gətirən və pediatrik müayinələrdə üstün səs keyfiyyəti təklif edən stetoskop."
    },
    "image": "/adscope-6014.jpg",
    "features": {
      "tr": [
        "Pediatrik AFD Tek Başlı Göğüs Parçası",
        "Hafif ve Ergonomik Jinekolojik/Pediatrik Kullanım",
        "Soğuk Hissiyat Önleyici Diyafram Halkası",
        "Yüksek Akustik Sızdırmaz Kulaklık Uçları",
        "Lateks İçermeyen Yumuşak Hortum Yapısı"
      ],
      "en": [
        "Pediatric AFD Single-sided Chestpiece",
        "Lightweight and Ergonomic Pediatric Application",
        "Non-chill Diaphragm Rim",
        "High Acoustic Seal Eartips",
        "Soft Latex-free Tubing"
      ],
      "fr": [
        "Pavillon unilatéral pédiatrique AFD",
        "Application pédiatrique légère et ergonomique",
        "Jante de diaphragme anti-froid",
        "Embouts auriculaires à haute étanchéité acoustique",
        "Tube souple sans latex"
      ],
      "az": [
        "Pediatrik AFD Tək Başlı Sinə Parçası",
        "Yüngül və Erqonomik Ginekoloji/Pediatrik İstifadə",
        "Soyuqluq Əleyhinə Diyafram Üzüyü",
        "Yüksək Akustik Möhürlənmiş Qulaqlıqlar",
        "Latekssiz Yumşaq Şlanq Quruluşu"
      ]
    }
  },
  {
    "id": "adscope-615",
    "name": {
      "tr": "Adscope 615 Profesyonel Steteskop",
      "en": "Adscope 615 Professional Stethoscope",
      "fr": "Stéthoscope professionnel Adscope 615",
      "az": "Adscope 615 Professional Stetoskop"
    },
    "category": "Stethoscope",
    "description": {
      "tr": "Sağlam çinko alaşımından üretilmiş göğüs parçası ve AFD teknolojisiyle net vücut sesleri ileten profesyonel steteskop.",
      "en": "Professional stethoscope delivering clear body sounds with a robust zinc alloy chestpiece and AFD technology.",
      "fr": "Stéthoscope professionnel délivrant des sons corporels clairs avec un pavillon robuste en alliage de zinc et la technologie AFD.",
      "az": "Bərk sink ərintisi və AFD texnologiyasından hazırlanmış sinə parçası ilə aydın bədən səslərini ötürən peşəkar stetoskop."
    },
    "image": "/adscope-615.jpg",
    "features": {
      "tr": [
        "Hassas Çinko Alaşımlı Tek Taraflı Başlık",
        "AFD Basınç Ayarlı Diyafram Sistemi",
        "Manevra Kolaylığı Sağlayan Büyük Tutma Bölümü",
        "Lateks İçermeyen Kalın Esnek Hortum",
        "Premium Aksesuar Seti Dahil"
      ],
      "en": [
        "Precision Zinc Alloy Single-sided Chestpiece",
        "AFD Pressure-sensitive Diaphragm System",
        "Large Grasping Area for Easy Maneuvering",
        "Thick Latex-free Flexible Tubing",
        "Premium Accessory Kit Included"
      ],
      "fr": [
        "Pavillon simple face en alliage de zinc de précision",
        "Système de membrane sensible à la pression AFD",
        "Grande zone de préhension pour des manœuvres faciles",
        "Tube flexible épais sans latex",
        "Kit d'accessoires haut de gamme inclus"
      ],
      "az": [
        "Dəqiq sink ərintisi tək tərəfli başlıq",
        "AFD Təzyiq Tənzimlənən Diafraqma Sistemi",
        "Manevr asanlığını təmin edən böyük tutma bölməsi",
        "Latekssiz Qalın Çevik Şlanq",
        "Premium Aksesuar dəsti daxildir"
      ]
    }
  },
  {
    "id": "adscope-647",
    "name": {
      "tr": "Adscope 647 Pediatrik Dinleme Steteskopu",
      "en": "Adscope 647 Pediatric Stethoscope",
      "fr": "Stéthoscope pédiatrique Adscope 647",
      "az": "Adscope 647 Uşaq Dinləmə Stetoskopu"
    },
    "category": "Stethoscope",
    "description": {
      "tr": "Sevimli ve renkli tasarımıyla çocukların muayenelerdeki endişesini azaltan ve net ses iletimi sağlayan pediatrik steteskop.",
      "en": "Pediatric stethoscope with a friendly and colorful design that reduces children's anxiety during examinations while providing clear sound transmission.",
      "fr": "Stéthoscope pédiatrique au design convivial et coloré qui réduit l'anxiété des enfants lors des examens tout en offrant une transmission sonore claire.",
      "az": "Uşaqların müayinə zamanı narahatlığını azaldan, sevimli və rəngarəng dizaynı ilə aydın səs ötürülməsini təmin edən uşaq stetoskopu."
    },
    "image": "/adscope-647.jpg",
    "features": {
      "tr": [
        "Çocuk Dostu Parlak Renkli Hortum",
        "Paslanmaz Çelik Hassas Göğüs Parçası",
        "Soğuk Hissini Önleyen Özel Mercek Halkası",
        "Kompakt ve Ergonomik Kulaklık Seti",
        "Günlük Pediatrik Kullanıma Uygun Dayanıklılık"
      ],
      "en": [
        "Child-friendly Brightly Colored Tubing",
        "Stainless Steel Precision Chestpiece",
        "Non-chill Protective Rims",
        "Compact and Ergonomic Headset",
        "Durable Construction for Daily Pediatric Practice"
      ],
      "fr": [
        "Tubes aux couleurs vives adaptés aux enfants",
        "Pavillon de précision en acier inoxydable",
        "Jantes de protection anti-froid",
        "Casque compact et ergonomique",
        "Construction durable pour la pratique pédiatrique quotidienne"
      ],
      "az": [
        "Uşaq Dostu Parlaq Rəngli Şlanq",
        "Paslanmayan Poladdan Həssas Sinə Parçası",
        "Soyuqluq hissini önləyən xüsusi linza halqası",
        "Kompakt və Erqonomik Qulaqlıq",
        "Dayanıqlılıq Gündəlik Pediatrik İstifadəyə Uyğundur"
      ]
    }
  },
  {
    "id": "adscope-655-vistascope",
    "name": {
      "tr": "Adscope 655 Vistascope Akustik Steteskop",
      "en": "Adscope 655 Vistascope Acoustic Stethoscope",
      "fr": "Stéthoscope acoustique Adscope 655 Vistascope",
      "az": "Adscope 655 Vistascope Akustik Stetoskop"
    },
    "category": "Stethoscope",
    "description": {
      "tr": "Akrilik göğüs parçası ve şeffaf tasarımıyla dikkat çeken, olağanüstü ses iletimi ve yüksek frekans yanıtı sunan özgün steteskop.",
      "en": "Unique stethoscope featuring an acrylic chestpiece and transparent design, delivering outstanding sound transmission and high-frequency response.",
      "fr": "Stéthoscope unique doté d'un pavillon en acrylique et d'un design transparent, offrant une transmission sonore et une réponse haute fréquence exceptionnelles.",
      "az": "Akril sinə parçası və şəffaf dizaynı ilə seçilən, müstəsna səs ötürülməsi və yüksək tezlikli cavab təklif edən unikal stetoskop."
    },
    "image": "/adscope-655-vistascope.jpg",
    "features": {
      "tr": [
        "Şeffaf Akrilik Göğüs Parçası (Chestpiece)",
        "Mükemmel Ses Yalıtımı ve İletim Performansı",
        "AFD Teknolojisi ile Net Ses Frekansı Ayarı",
        "Yumuşak Silikon Kulaklık Uçları",
        "Farklı ve Özgün Tasarım"
      ],
      "en": [
        "Transparent Acrylic Chestpiece",
        "Excellent Sound Isolation and Transmission",
        "AFD Technology for Clear Sound Tuning",
        "Soft Silicone Sealed Eartips",
        "Unique and Distinctive Design"
      ],
      "fr": [
        "Pavillon en acrylique transparent",
        "Excellente isolation et transmission acoustique",
        "Technologie AFD pour un réglage sonore clair",
        "Embouts auriculaires scellés en silicone souple",
        "Conception unique et distinctive"
      ],
      "az": [
        "Şəffaf Akril sinə parçası",
        "Əla səs izolyasiyası və ötürmə performansı",
        "AFD Texnologiyası ilə Səs Tezliyinin Tənzimlənməsini təmizləyin",
        "Yumşaq Silikon Qulaq Uçları",
        "Fərqli və Orijinal Dizayn"
      ]
    }
  },
  {
    "id": "adimals-426",
    "name": {
      "tr": "Adimals 426 Dijital Ateş Ölçer",
      "en": "Adimals 426 Digital Thermometer",
      "fr": "Thermomètre numérique Adimals 426",
      "az": "Adimals 426 Rəqəmsal Termometr"
    },
    "category": "Thermometer",
    "description": {
      "tr": "Çocuklar için özel tasarlanmış sevimli figürlü, hızlı ve güvenli dijital ateş ölçer.",
      "en": "Friendly character digital thermometer designed for kids, offering fast and safe temperature readings.",
      "fr": "Thermomètre numérique à caractère convivial conçu pour les enfants, offrant des lectures de température rapides et sûres.",
      "az": "Xüsusi olaraq uşaqlar üçün hazırlanmış sevimli fiqurları olan sürətli və təhlükəsiz rəqəmsal termometr."
    },
    "image": "/adimals-426.jpg",
    "features": {
      "tr": [
        "Sevimli Çocuk Dostu Figür Başlığı",
        "10 Saniyede Hızlı Ölçüm Teknolojisi",
        "Esnek Güvenli Uç Yapısı",
        "Son Ölçüm Hafızası ve Sesli Uyarı",
        "Su Geçirmez Kolay Temizlenebilir Gövde"
      ],
      "en": [
        "Cute Child-friendly Character Head",
        "10-Second Fast Measurement Technology",
        "Flexible Safe Tip Structure",
        "Last Reading Memory and Fever Alarm",
        "Waterproof Easy-to-clean Body"
      ],
      "fr": [
        "Tête de personnage mignonne adaptée aux enfants",
        "Technologie de mesure rapide en 10 secondes",
        "Structure flexible de pointe de sécurité",
        "Mémoire de dernière lecture et alarme de fièvre",
        "Corps imperméable et facile à nettoyer"
      ],
      "az": [
        "Sevimli Uşaq Dostu Fiqur Başı",
        "10 Saniyədə Sürətli Ölçmə Texnologiyası",
        "Çevik Təhlükəsiz Tip Strukturu",
        "Son Ölçmə Yaddaşı və Səsli Xəbərdarlıq",
        "Suya davamlı, Asan Təmizlənən Bədən"
      ]
    }
  },
  {
    "id": "adtemp-standard",
    "name": {
      "tr": "Adtemp Standart Dijital Ateş Ölçer",
      "en": "Adtemp Standard Digital Thermometer",
      "fr": "Thermomètre numérique standard Adtemp",
      "az": "Adtemp Standart Rəqəmsal Termometr"
    },
    "category": "Thermometer",
    "description": {
      "tr": "Ev ve klinik kullanım için ideal, yüksek doğruluklu standart dijital termometre.",
      "en": "High accuracy standard digital thermometer ideal for clinical and home use.",
      "fr": "Thermomètre numérique standard de haute précision, idéal pour un usage clinique et domestique.",
      "az": "Ev və klinik istifadə üçün ideal olan yüksək dəqiqlikli standart rəqəmsal termometr."
    },
    "image": "/adtemp.jpg",
    "features": {
      "tr": [
        "Güvenilir ve Hassas Ölçüm",
        "Kompakt Ergonomik Tasarım",
        "Kolay Okunabilir Dijital Ekran",
        "Otomatik Kapanma Özelliği",
        "Değiştirilebilir Pil"
      ],
      "en": [
        "Reliable and Precise Measurement",
        "Compact Ergonomic Design",
        "Easy-to-read Digital Display",
        "Auto Shut-off Feature",
        "Replaceable Battery"
      ],
      "fr": [
        "Mesure fiable et précise",
        "Conception ergonomique compacte",
        "Affichage numérique facile à lire",
        "Fonction d'arrêt automatique",
        "Batterie remplaçable"
      ],
      "az": [
        "Etibarlı və Dəqiq Ölçmə",
        "Kompakt Erqonomik Dizayn",
        "Oxunması asan Rəqəmsal Ekran",
        "Avtomatik söndürmə funksiyası",
        "Dəyişdirilə bilən Batareya"
      ]
    }
  },
  {
    "id": "adtemp-412",
    "name": {
      "tr": "Adtemp 412 Dijital Ateş Ölçer",
      "en": "Adtemp 412 Digital Thermometer",
      "fr": "Thermomètre numérique Adtemp 412",
      "az": "Adtemp 412 Rəqəmsal Termometr"
    },
    "category": "Thermometer",
    "description": {
      "tr": "Klinik derece hassasiyete sahip, hızlı ölçüm yapan modern dijital ateş ölçer.",
      "en": "Modern digital thermometer with clinical-grade accuracy and fast readings.",
      "fr": "Thermomètre numérique moderne avec une précision de qualité clinique et des lectures rapides.",
      "az": "Klinik dəqiqlik və sürətli ölçmə ilə müasir rəqəmsal termometr."
    },
    "image": "/adtemp-412.jpg",
    "features": {
      "tr": [
        "Yüksek Hassasiyetli Sensör",
        "Geniş Aydınlatmalı LCD Ekran",
        "Ateş Durumu Bildiren Sesli Alarm",
        "Ergonomik ve Dayanıklı Tasarım",
        "Fahrenheit ve Santigrat Seçimi"
      ],
      "en": [
        "High Precision Sensor",
        "Large Backlit LCD Screen",
        "Audible Fever Alarm Notification",
        "Ergonomic and Durable Design",
        "Fahrenheit and Celsius Selection"
      ],
      "fr": [
        "Capteur de haute précision",
        "Grand écran LCD rétroéclairé",
        "Notification d'alarme sonore de fièvre",
        "Conception ergonomique et durable",
        "Sélection Fahrenheit et Celsius"
      ],
      "az": [
        "Yüksək Dəqiqlik Sensor",
        "Böyük İşıqlı LCD Ekran",
        "Səsli Siqnal Bildirişi Atəşi",
        "Erqonomik və Davamlı Dizayn",
        "Fahrenheit və Selsi seçilməsi"
      ]
    }
  },
  {
    "id": "adtemp-412-spu-kit",
    "name": {
      "tr": "Adtemp 412 SPU Ateş Ölçer Kılıf Seti",
      "en": "Adtemp 412 SPU Thermometer Cover Set",
      "fr": "Ensemble de couvercles de thermomètre Adtemp 412 SPU",
      "az": "Adtemp 412 SPU Termometr qutusu dəsti"
    },
    "category": "Thermometer",
    "description": {
      "tr": "Adtemp 412 için özel olarak üretilmiş, hijyenik ve tek kullanımlık koruyucu kılıf (SPU) seti.",
      "en": "Hygienic disposable protective sheath (SPU) kit designed specifically for Adtemp 412.",
      "fr": "Kit de gaine de protection hygiénique jetable (SPU) conçu spécifiquement pour Adtemp 412.",
      "az": "Adtemp 412 üçün xüsusi olaraq istehsal edilən gigiyenik və birdəfəlik qoruyucu örtük (SPU) dəsti."
    },
    "image": "/adtemp-412-spu-takimi.jpg",
    "features": {
      "tr": [
        "Tek Kullanımlık Hijyenik Koruyucu Kılıflar",
        "Adtemp 412 ile Tam Uyum",
        "Çapraz Bulaşmayı Engeller",
        "Kolay Takılıp Çıkarılabilen Yapı",
        "Klinik Standartlara Uygun"
      ],
      "en": [
        "Disposable Hygienic Protective Sheaths",
        "Perfect Match with Adtemp 412",
        "Prevents Cross-contamination",
        "Easy Attach and Detach Design",
        "Complies with Clinical Standards"
      ],
      "fr": [
        "Gaines de protection hygiéniques jetables",
        "Correspondance parfaite avec Adtemp 412",
        "Empêche la contamination croisée",
        "Conception facile à attacher et à détacher",
        "Conforme aux normes cliniques"
      ],
      "az": [
        "Birdəfəlik Gigiyenik Qoruyucu Qapaqlar",
        "Adtemp 412",
        "ilə tam uyğunluq Çarpaz çirklənmənin qarşısını alır",
        "Asanlıqla quraşdırılan və çıxarılan struktur",
        "Klinik Standartlara uyğundur"
      ]
    }
  },
  {
    "id": "adtemp-413",
    "name": {
      "tr": "Adtemp 413 Dijital Ateş Ölçer",
      "en": "Adtemp 413 Digital Thermometer",
      "fr": "Thermomètre numérique Adtemp 413",
      "az": "Adtemp 413 Rəqəmsal Termometr"
    },
    "category": "Thermometer",
    "description": {
      "tr": "Ağız ve koltuk altı ölçümleri için ideal, ince problu hassas dijital termometre.",
      "en": "Precision digital thermometer with a slim probe, ideal for oral and axillary measurements.",
      "fr": "Thermomètre numérique de précision doté d'une sonde fine, idéal pour les mesures buccales et axillaires.",
      "az": "Ağızdan və qoltuqaltı ölçmələr üçün ideal olan nazik zondlu dəqiq rəqəmsal termometr."
    },
    "image": "/adtemp-413.jpg",
    "features": {
      "tr": [
        "Hassas İnce Prob Tasarımı",
        "Hızlı ve Güvenilir Algılama",
        "Son Ölçümü Hafızada Tutma",
        "Suya Dayanıklı Ön Panel",
        "Kompakt Taşıma Kılıfı"
      ],
      "en": [
        "Precise Slim Probe Design",
        "Fast and Reliable Detection",
        "Last Memory Recall",
        "Water-resistant Front Panel",
        "Compact Carrying Case"
      ],
      "fr": [
        "Conception précise de la sonde mince",
        "Détection rapide et fiable",
        "Dernier rappel de mémoire",
        "Panneau avant résistant à l'eau",
        "Étui de transport compact"
      ],
      "az": [
        "Həssas İncə Zond Dizaynı",
        "Sürətli və Etibarlı Aşkarlama",
        "Son Ölçmənin Yaddaşda Saxlanması",
        "Suya davamlı Ön Panel",
        "Yığcam Daşıma Çantası"
      ]
    }
  },
  {
    "id": "adtemp-413-spu-kit",
    "name": {
      "tr": "Adtemp 413 SPU Ateş Ölçer Kılıf Seti",
      "en": "Adtemp 413 SPU Thermometer Cover Set",
      "fr": "Ensemble de couvercles de thermomètre Adtemp 413 SPU",
      "az": "Adtemp 413 SPU Termometr qutusu dəsti"
    },
    "category": "Thermometer",
    "description": {
      "tr": "Adtemp 413 termometre modeli ile uyumlu çalışan tek kullanımlık hijyenik kılıf kiti.",
      "en": "Disposable hygienic sheath kit working compatibly with the Adtemp 413 thermometer model.",
      "fr": "Kit gaine hygiénique jetable fonctionnant de manière compatible avec le modèle de thermomètre Adtemp 413.",
      "az": "Adtemp 413 termometr modelinə uyğun birdəfəlik gigiyenik örtük dəsti."
    },
    "image": "/adtemp-413-spu-takimi.jpg",
    "features": {
      "tr": [
        "Adtemp 413 Boyutlarına Özel Tasarım",
        "Dayanıklı ve İnce Şeffaf Malzeme",
        "Ölçüm Doğruluğunu Etkilemez",
        "Paket İçi Çoklu Adet",
        "Çapraz Enfeksiyon Koruması"
      ],
      "en": [
        "Specially Custom-sized for Adtemp 413",
        "Durable and Thin Transparent Material",
        "Does Not Affect Temperature Accuracy",
        "Multi-pack Quantity",
        "Cross-infection Protection"
      ],
      "fr": [
        "Spécialement dimensionné sur mesure pour Adtemp 413",
        "Matériau transparent durable et fin",
        "N'affecte pas la précision de la température",
        "Quantité multi-pack",
        "Protection contre les infections croisées"
      ],
      "az": [
        "Adtemp 413 Ölçüləri üçün Xüsusi Dizayn",
        "Davamlı və İncə Şəffaf Material",
        "Ölçmə Dəqiqliyinə Təsir Etmir",
        "Paketdə Çoxlu Parça",
        "Çarpaz infeksiyadan qorunma"
      ]
    }
  },
  {
    "id": "adtemp-415",
    "name": {
      "tr": "Adtemp 415 Dijital Ateş Ölçer",
      "en": "Adtemp 415 Digital Thermometer",
      "fr": "Thermomètre numérique Adtemp 415",
      "az": "Adtemp 415 Rəqəmsal Termometr"
    },
    "category": "Thermometer",
    "description": {
      "tr": "Gelişmiş özellikleri ve kolay arayüzü ile klinik standartlarda ölçüm yapan dijital termometre.",
      "en": "Digital thermometer providing clinical standard measurements with advanced features and a simple interface.",
      "fr": "Thermomètre numérique fournissant des mesures cliniques standard avec des fonctionnalités avancées et une interface simple.",
      "az": "Təkmil xüsusiyyətləri və asan interfeysi ilə klinik standartlarda ölçən rəqəmsal termometr."
    },
    "image": "/adtemp-415.jpg",
    "features": {
      "tr": [
        "Gelişmiş Algılama Çipi",
        "Hızlı Sonuç Verme Süresi",
        "Net Okunabilir Sayısal Ekran",
        "Bip Sesli Ölçüm Bildirimi",
        "Dayanıklı ABS Plastik Kasa"
      ],
      "en": [
        "Advanced Sensor Chip",
        "Rapid Response Time",
        "Clear Numeric Display",
        "Beep Warning Tone Notification",
        "Durable ABS Plastic Case"
      ],
      "fr": [
        "Puce de capteur avancée",
        "Temps de réponse rapide",
        "Affichage numérique clair",
        "Notification de tonalité d'avertissement sonore",
        "Boîtier en plastique ABS durable"
      ],
      "az": [
        "Qabaqcıl Algılama Çipi",
        "Tez Nəticə Vaxtı",
        "Oxunan Rəqəm Ekranını Sil",
        "Bip Səs Ölçmə Bildirişi",
        "Davamlı ABS Plastik Korpus"
      ]
    }
  },
  {
    "id": "adtemp-415-flex",
    "name": {
      "tr": "Adtemp 415 Flex Esnek Uçlu Ateş Ölçer",
      "en": "Adtemp 415 Flex Flexible Thermometer",
      "fr": "Thermomètre flexible Adtemp 415 Flex",
      "az": "Adtemp 415 Flex Flexible Tip Termometr"
    },
    "category": "Thermometer",
    "description": {
      "tr": "Hastanın konforu için esnek uçlu olarak tasarlanmış, hassas dijital ateş ölçer.",
      "en": "Precision digital thermometer designed with a flexible tip for patient comfort.",
      "fr": "Thermomètre numérique de précision conçu avec un embout flexible pour le confort du patient.",
      "az": "Xəstənin rahatlığı üçün çevik uc ilə hazırlanmış həssas rəqəmsal termometr."
    },
    "image": "/adtemp-415-flex.jpg",
    "features": {
      "tr": [
        "Esnek ve Yumuşak Ölçüm Ucu",
        "Muayene Konforunu Artıran Tasarım",
        "Hızlı Ölçüm ve Sesli Uyarı",
        "Hafıza Fonksiyonu",
        "Su Geçirmez Yıkanabilir Uç Bölümü"
      ],
      "en": [
        "Flexible and Soft Measurement Tip",
        "Comfort-focused Examination Design",
        "Quick Reading and Beep Tone",
        "Memory Function",
        "Waterproof Washable Tip Section"
      ],
      "fr": [
        "Pointe de mesure flexible et douce",
        "Conception d'examen axée sur le confort",
        "Lecture rapide et bip",
        "Fonction mémoire",
        "Section d'embout lavable et imperméable"
      ],
      "az": [
        "Çevik və Yumşaq Ölçmə Ucu",
        "İmtahan Rahatlığını Artıran Dizayn",
        "Sürətli Ölçmə və Səsli Xəbərdarlıq",
        "Yaddaş Funksiyası",
        "Suya davamlı yuyula bilən uc bölməsi"
      ]
    }
  },
  {
    "id": "adtemp-415-flex-spu",
    "name": {
      "tr": "Adtemp 415 Flex SPU Ateş Ölçer Seti",
      "en": "Adtemp 415 Flex SPU Thermometer Set",
      "fr": "Ensemble de thermomètres Adtemp 415 Flex SPU",
      "az": "Adtemp 415 Flex SPU Termometr Dəsti"
    },
    "category": "Thermometer",
    "description": {
      "tr": "Adtemp 415 Flex modeli ve tek kullanımlık hijyenik kılıfların bir arada sunulduğu profesyonel set.",
      "en": "Professional set combining the Adtemp 415 Flex model and disposable hygienic sheaths.",
      "fr": "Set professionnel associant le modèle Adtemp 415 Flex et des gaines hygiéniques jetables.",
      "az": "Adtemp 415 Flex modelini və birdəfəlik gigiyenik örtükləri birləşdirən peşəkar dəst."
    },
    "image": "/adtemp-415-flex-spu.jpg",
    "features": {
      "tr": [
        "Esnek Uçlu Adtemp 415 Termometre",
        "Uyumlu Tek Kullanımlık Koruyucu Kılıflar",
        "Hijyenik ve Güvenli Kullanım Konsepti",
        "Klinik ve Revir Kullanımına Uygun",
        "Kolay Dezenfeksiyon Uyumluluğu"
      ],
      "en": [
        "Flexible Tip Adtemp 415 Thermometer",
        "Compatible Disposable Protective Covers",
        "Hygienic and Safe Concept",
        "Ideal for Clinics and Infirmaries",
        "Easy Disinfection Compatibility"
      ],
      "fr": [
        "Thermomètre Adtemp 415 à pointe flexible",
        "Housses de protection jetables compatibles",
        "Concept hygiénique et sûr",
        "Idéal pour les cliniques et les infirmeries",
        "Compatibilité de désinfection facile"
      ],
      "az": [
        "Çevik Ucu ilə Adtemp 415 Termometr",
        "Uyğun birdəfəlik qoruyucu örtüklər",
        "Gigiyenik və Təhlükəsiz İstifadə Konsepsiyası",
        "Klinika və Revir istifadə üçün uyğundur",
        "Asan Dezinfeksiya Uyğunluğu"
      ]
    }
  },
  {
    "id": "adtemp-419",
    "name": {
      "tr": "Adtemp 419 Hızlı Ölçüm Ateş Ölçer",
      "en": "Adtemp 419 Fast Read Thermometer",
      "fr": "Thermomètre à lecture rapide Adtemp 419",
      "az": "Adtemp 419 Sürətli Ölçmə Termometri"
    },
    "category": "Thermometer",
    "description": {
      "tr": "Birkaç saniye içinde sonuç veren, yüksek hızlı ve hassas dijital termometre.",
      "en": "High-speed precision digital thermometer delivering results in just a few seconds.",
      "fr": "Thermomètre numérique de précision à grande vitesse fournissant des résultats en quelques secondes seulement.",
      "az": "Bir neçə saniyə ərzində nəticə verən yüksək sürətli və dəqiq rəqəmsal termometr."
    },
    "image": "/adtemp-419.jpg",
    "features": {
      "tr": [
        "Saniyeler İçinde Ultra Hızlı Ölçüm",
        "Klinik Olarak Onaylanmış Doğruluk",
        "Ateş Uyarı Ekran Rengi Değişimi",
        "Esnek ve Atravmatik Uç Yapısı",
        "Geniş Dijital Ekran Göstergesi"
      ],
      "en": [
        "Ultra Fast Reading in Seconds",
        "Clinically Proven Accuracy",
        "Fever Alarm Backlight Color Change",
        "Flexible and Atraumatic Tip",
        "Large Digital Display Indicator"
      ],
      "fr": [
        "Lecture ultra rapide en quelques secondes",
        "Précision cliniquement prouvée",
        "Changement de couleur du rétroéclairage de l'alarme de fièvre",
        "Pointe flexible et atraumatique",
        "Grand indicateur d'affichage numérique"
      ],
      "az": [
        "Saniyədə Ultra Sürətli Ölçmə",
        "Klinik Təsdiqlənmiş Dəqiqlik",
        "Yanğın Xəbərdarlığı Ekranı Rəng Dəyişməsi",
        "Çevik və Atravmatik Uç Strukturu",
        "Böyük Rəqəmsal Ekran Göstərici"
      ]
    }
  },
  {
    "id": "adtemp-422",
    "name": {
      "tr": "Adtemp 422 Emzik Tipi Ateş Ölçer",
      "en": "Adtemp 422 Pacifier Thermometer",
      "fr": "Thermomètre à sucette Adtemp 422",
      "az": "Adtemp 422 Emzik Tipi Termometr"
    },
    "category": "Thermometer",
    "description": {
      "tr": "Bebeklerin ateşini huzursuz etmeden ölçmek için emzik formunda tasarlanmış akıllı termometre.",
      "en": "Smart thermometer shaped like a pacifier, designed to measure infant temperature without causing distress.",
      "fr": "Thermomètre intelligent en forme de tétine, conçu pour mesurer la température du nourrisson sans causer de détresse.",
      "az": "Körpələrin temperaturunu onları narahat etmədən ölçmək üçün əmzik şəklində hazırlanmış ağıllı termometr."
    },
    "image": "/adtemp-422.jpg",
    "features": {
      "tr": [
        "Ortodontik Silikon Emzik Tasarımı",
        "Bebekler İçin Konforlu ve Sakinleştirici",
        "Doğru ve Güvenilir Sıcaklık Algılama",
        "Ölçüm Tamamlandığında Sesli Bildirim",
        "Su Geçirmez Hijyenik Malzeme"
      ],
      "en": [
        "Orthodontic Silicone Pacifier Design",
        "Comforting and Calming for Infants",
        "Accurate and Reliable Heat Sensing",
        "Beep Sound Completion Notification",
        "Waterproof Hygienic Material"
      ],
      "fr": [
        "Conception de sucette orthodontique en silicone",
        "Réconfortant et apaisant pour les nourrissons",
        "Détection thermique précise et fiable",
        "Notification d'achèvement du bip sonore",
        "Matériau hygiénique imperméable"
      ],
      "az": [
        "Ortodontik Silikon Emzik Dizaynı",
        "Körpələr üçün Rahat və Sakitləşdirici",
        "Dəqiq və Etibarlı Temperatur Aşkarlanması",
        "Ölçmə Tamamlandıqda Səsli Bildiriş",
        "Suya davamlı gigiyenik material"
      ]
    }
  },
  {
    "id": "adtemp-423",
    "name": {
      "tr": "Adtemp 423 Dijital Ateş Ölçer",
      "en": "Adtemp 423 Digital Thermometer",
      "fr": "Thermomètre numérique Adtemp 423",
      "az": "Adtemp 423 Rəqəmsal Termometr"
    },
    "category": "Thermometer",
    "description": {
      "tr": "Kompakt boyutu ve pratik arayüzü ile günlük ateş takiplerine uygun dijital termometre.",
      "en": "Digital thermometer suitable for daily fever tracking with its compact size and practical interface.",
      "fr": "Thermomètre numérique adapté au suivi quotidien de la fièvre grâce à sa taille compacte et son interface pratique.",
      "az": "Kompakt ölçüsü və praktik interfeysi ilə gündəlik temperatur monitorinqi üçün uyğun rəqəmsal termometr."
    },
    "image": "/adtemp-423.jpg",
    "features": {
      "tr": [
        "Kompakt ve Son Derece Hafif Gövde",
        "Tek Tuşla Kolay Ölçüm Başlatma",
        "Net Görüşlü LCD Ekran",
        "Son Ölçüm Değerini Saklama",
        "Otomatik Kapanma ile Güç Tasarrufu"
      ],
      "en": [
        "Compact and Extremely Lightweight Body",
        "Easy One-button Measurement Start",
        "Clear Vision LCD Screen",
        "Last Temperature Memory",
        "Auto Shut-off for Power Saving"
      ],
      "fr": [
        "Corps compact et extrêmement léger",
        "Démarrage facile de la mesure à un seul bouton",
        "Écran LCD à vision claire",
        "Mémoire de la dernière température",
        "Arrêt automatique pour économiser l'énergie"
      ],
      "az": [
        "Kompakt və Çox Yüngül Bədən",
        "Asan Ölçmə Bir Kliklə Başlayın",
        "Clear View LCD Ekran",
        "Son Ölçmə Dəyərinin Saxlanması",
        "Avtomatik söndürmə ilə enerjiyə qənaət"
      ]
    }
  },
  {
    "id": "adtemp-424",
    "name": {
      "tr": "Adscope Adtemp 424 Ateş Ölçer",
      "en": "Adscope Adtemp 424 Thermometer",
      "fr": "Thermomètre Adscope Adtemp 424",
      "az": "Adscope Adtemp 424 Termometr"
    },
    "category": "Thermometer",
    "description": {
      "tr": "Yüksek kaliteli prob tasarımıyla hızlı ve tutarlı vücut sıcaklığı ölçümü sağlayan dijital termometre.",
      "en": "Digital thermometer providing fast and consistent body temperature measurements with a high-quality probe design.",
      "fr": "Thermomètre numérique fournissant des mesures rapides et cohérentes de la température corporelle avec une conception de sonde de haute qualité.",
      "az": "Yüksək keyfiyyətli prob dizaynı ilə sürətli və ardıcıl bədən istiliyinin ölçülməsini təmin edən rəqəmsal termometr."
    },
    "image": "/adtemp-424.jpg",
    "features": {
      "tr": [
        "Hassas Kalibre Edilmiş Sıcaklık Sensörü",
        "Hızlı Yanıt Süresi",
        "Su Geçirmez Yıkanabilir Gövde",
        "Son Okuma Belleği",
        "Sesli Uyarı Sinyali"
      ],
      "en": [
        "Precision Calibrated Temperature Sensor",
        "Rapid Response Time",
        "Waterproof Washable Body",
        "Last Reading Memory",
        "Audible Warning Signal"
      ],
      "fr": [
        "Capteur de température calibré avec précision",
        "Temps de réponse rapide",
        "Corps lavable imperméable",
        "Mémoire de dernière lecture",
        "Signal d'avertissement sonore"
      ],
      "az": [
        "Dəqiq Kalibrovka Temperatur Sensoru",
        "Sürətli Cavab Müddəti",
        "Suya davamlı yuyula bilən korpus",
        "Son oxuma yaddaşı",
        "Audio xəbərdarlıq siqnalı"
      ]
    }
  },
  {
    "id": "adtemp-427",
    "name": {
      "tr": "Adtemp 427 Alından Temassız Ateş Ölçer",
      "en": "Adtemp 427 Non-contact Temple Thermometer",
      "fr": "Adtemp 427 Thermomètre à temple sans contact",
      "az": "Adtemp 427 Təmassız Alın Termometri"
    },
    "category": "Thermometer",
    "description": {
      "tr": "Şakak bölgesinden hızlı ve temassız ölçüm yapabilen, kızılötesi teknolojili modern ateş ölçer.",
      "en": "Modern infrared thermometer capable of fast and non-contact temperature measurement from the temple area.",
      "fr": "Thermomètre infrarouge moderne capable de mesurer rapidement et sans contact la température de la zone des tempes.",
      "az": "Məbədin ərazisindən sürətli və təmassız ölçmələr apara bilən infraqırmızı texnologiyaya malik müasir termometr."
    },
    "image": "/adtemp-427.jpg",
    "features": {
      "tr": [
        "Şakaktan Kızılötesi Ölçüm Teknolojisi",
        "Temassız Hijyenik Ölçüm",
        "Hızlı ve Güvenilir Sıcaklık Analizi",
        "Son Ölçüm Hafızası",
        "Aydınlatmalı Geniş Ekran Göstergesi"
      ],
      "en": [
        "Infrared Temple Reading Technology",
        "Non-contact Hygienic Measurement",
        "Quick and Reliable Heat Analysis",
        "Last Reading Memory Recall",
        "Large Backlit Screen Display"
      ],
      "fr": [
        "Technologie de lecture infrarouge des tempes",
        "Mesure hygiénique sans contact",
        "Analyse thermique rapide et fiable",
        "Rappel de la mémoire de la dernière lecture",
        "Grand écran rétroéclairé"
      ],
      "az": [
        "Temple İnfraqırmızı Ölçmə Texnologiyası",
        "Təmassız Gigiyenik Ölçmə",
        "Sürətli və Etibarlı Temperatur Analizi",
        "Son ölçmə yaddaşı",
        "İşıqlı Böyük Ekran Ekranı"
      ]
    }
  },
  {
    "id": "adtemp-429",
    "name": {
      "tr": "Adtemp 429 Kızılötesi Temassız Ateş Ölçer",
      "en": "Adtemp 429 Infrared Non-contact Thermometer",
      "fr": "Thermomètre infrarouge sans contact Adtemp 429",
      "az": "Adtemp 429 İnfraqırmızı Kontaktsız Termometr"
    },
    "category": "Thermometer",
    "description": {
      "tr": "Alından temassız ölçüm yapan, klinik kalitede doğruluk sunan kızılötesi temassız ateş ölçer.",
      "en": "Infant-to-adult infrared non-contact thermometer reading from the forehead, offering clinical-grade accuracy.",
      "fr": "Thermomètre infrarouge sans contact pour nourrissons à adultes, lecture depuis le front, offrant une précision de qualité clinique.",
      "az": "Alın nahiyəsində kontaktsızlığı ölçməklə klinik keyfiyyətli dəqiqliyi təmin edən infraqırmızı kontaktsız termometr."
    },
    "image": "/adtemp-429.jpg",
    "features": {
      "tr": [
        "Alından Temassız Hızlı Algılama",
        "Ölçüm Mesafesi Uyarı Sensörü",
        "Yeşil/Sarı/Kırmızı Renkli Ateş Ekranı",
        "30 Ölçümlük Geniş Hafıza",
        "Sessiz Ölçüm Seçeneği (Uykudaki Bebekler İçin)"
      ],
      "en": [
        "Forehead Non-contact Fast Sensing",
        "Measurement Distance Warning Sensor",
        "Green/Yellow/Red Backlight Fever Status",
        "Large 30-Reading Memory",
        "Silent Mode Option (For Sleeping Babies)"
      ],
      "fr": [
        "Détection rapide sans contact sur le front",
        "Capteur d'avertissement de distance de mesure",
        "Statut de fièvre du rétroéclairage vert/jaune/rouge",
        "Grande mémoire de 30 lectures",
        "Option mode silencieux (pour les bébés endormis)"
      ],
      "az": [
        "Alından sürətli təmassız aşkarlama",
        "Ölçmə Məsafə Xəbərdarlıq Sensoru",
        "Yaşıl/Sarı/Qırmızı Rəngli Qızdırma Ekranı",
        "30 ölçmənin böyük yaddaşı",
        "Səssiz Ölçmə Seçimi (Yatmış Körpələr Üçün)"
      ]
    }
  },
  {
    "id": "adtemp-gpk",
    "name": {
      "tr": "Adtemp GPK Koruyucu Kılıf Dispenseri",
      "en": "Adtemp GPK Sheath Dispenser",
      "fr": "Distributeur de gaine Adtemp GPK",
      "az": "Adtemp GPK Qoruyucu Çanta Dispenser"
    },
    "category": "Thermometer",
    "description": {
      "tr": "Ateş ölçer kılıflarının pratik ve steril bir şekilde saklanıp dağıtılmasını sağlayan kılıf kutusu.",
      "en": "Sheath dispenser box enabling practical and sterile storage and distribution of thermometer covers.",
      "fr": "Boîte distributrice fourreau permettant un stockage et une distribution pratiques et stériles des protège-thermomètres.",
      "az": "Termometr qutularını praktik və steril şəkildə saxlamağa və paylamağa imkan verən qutu qutusu."
    },
    "image": "/adtemp-gpk.jpg",
    "features": {
      "tr": [
        "Dispenser Tipi Kolay Çek-Al Kutu Tasarımı",
        "Kılıfları Toz ve Kirden Korur",
        "Duvara veya Standlara Monte Edilebilir Yapı",
        "Klinik Hijyen Standartlarını Destekler",
        "Kompakt ve Dayanıklı Karton Ambalaj"
      ],
      "en": [
        "Dispenser Type Easy Pull-and-take Design",
        "Protects Sheaths from Dust and Contamination",
        "Mountable on Walls or Examination Stands",
        "Supports Clinical Hygiene Standards",
        "Compact and Durable Packaging"
      ],
      "fr": [
        "Type de distributeur Conception facile à tirer et à prendre",
        "Protège les gaines de la poussière et de la contamination",
        "Montable sur les murs ou les supports d'examen",
        "Prend en charge les normes d'hygiène clinique",
        "Emballage compact et durable"
      ],
      "az": [
        "Dispenser Tipi Asan Çək və Götür Qutunun Dizaynı",
        "Korpusları tozdan və kirdən qoruyur",
        "Struktur divarlara və ya dayaqlara quraşdırıla bilər",
        "Klinik Gigiyena Standartlarını dəstəkləyir",
        "Yığcam və davamlı karton qablaşdırma"
      ]
    }
  },
  {
    "id": "adtemp-ultra-417",
    "name": {
      "tr": "Adtemp Ultra 417 Kulaktan Ateş Ölçer",
      "en": "Adtemp Ultra 417 Tympanic Thermometer",
      "fr": "Thermomètre tympanique Adtemp Ultra 417",
      "az": "Adtemp Ultra 417 Qulaq Termometri"
    },
    "category": "Thermometer",
    "description": {
      "tr": "Kulak içinden son derece hassas ve saniyelik ölçüm yapabilen profesyonel timpanik ateş ölçer.",
      "en": "Professional tympanic thermometer capable of extremely precise and split-second measurements inside the ear.",
      "fr": "Thermomètre tympanique professionnel capable de mesures extrêmement précises et en une fraction de seconde à l'intérieur de l'oreille.",
      "az": "Son dərəcə dəqiq olan və qulaqda saniyələr ərzində ölçə bilən peşəkar timpanik termometr."
    },
    "image": "/adtemp-ultra-417.png",
    "features": {
      "tr": [
        "Kulaktan Timpanik Hassas Sıcaklık Algılama",
        "Saniyelik Ultra Hızlı Yanıt",
        "Isıtmalı Prob Ucu ile Doğru Sonuçlar",
        "Tek Kullanımlık Prob Kılıfları ile Hijyenik Koruma",
        "Son Ölçüm Hafızası ve Dijital Aydınlatmalı Ekran"
      ],
      "en": [
        "Precise Tympanic Ear Heat Sensing",
        "Split-second Ultra Fast Response",
        "Pre-warmed Tip for More Accurate Results",
        "Disposable Probe Covers for Hygienic Protection",
        "Last Reading Memory and Backlit Digital Screen"
      ],
      "fr": [
        "Détection précise de la chaleur de l'oreille tympanique",
        "Réponse ultra rapide en une fraction de seconde",
        "Pointe préchauffée pour des résultats plus précis",
        "Couvre-sondes jetables pour une protection hygiénique",
        "Mémoire de dernière lecture et écran numérique rétroéclairé"
      ],
      "az": [
        "Qulaqcıq Timpanik Həssas Temperatur Aşkarlanması",
        "İkinci Ultra Sürətli Cavab",
        "Qızdırılmış Prob Ucu ilə Dəqiq nəticələri || Birdəfəlik istifadə olunan zond qapaqları ilə gigiyenik mühafizə",
        "Son ölçmə yaddaşı və rəqəmsal işıqlı ekran"
      ]
    }
  },
  {
    "id": "heine-otoskop-uclari-25mm",
    "name": {
      "tr": "HEİNE OTOSKOP UÇLARI 2.5 MM",
      "en": "Heine Otoscope Specula Tips 2.5 mm",
      "fr": "Pointes de spéculums pour otoscope Heine 2,5 mm",
      "az": "HEINE AVTOSKOP TOPLARI 2,5 MM"
    },
    "category": "OtoscopeSpecula",
    "description": {
      "tr": "Heine otoskop modelleri ile uyumlu, çocuk ve bebek muayeneleri için ideal 2.5 mm çapında tek kullanımlık otoskop spekülüm ucu.",
      "en": "Disposable otoscope specula tips with 2.5 mm diameter, compatible with Heine otoscope models, ideal for pediatric examinations.",
      "fr": "Embouts de spéculums d'otoscope jetables de 2,5 mm de diamètre, compatibles avec les modèles d'otoscopes Heine, idéaux pour les examens pédiatriques.",
      "az": "Diametri 2,5 mm olan birdəfəlik otoskop spekulum ucu Heine otoskop modellərinə uyğundur və uşaq və körpə müayinələri üçün idealdır."
    },
    "image": "/heine-otoskop-uclari-25mm.jpg",
    "features": {
      "tr": [
        "2.5 mm Çapında Pediatrik Profil",
        "Yüksek Kaliteli Tıbbi Plastik Malzeme",
        "Travma Yaratmayan Pürüzsüz Uç Yapısı",
        "Otoskopa Güvenli ve Tam Oturan Tasarım",
        "Tek Kullanımlık Yapısıyla Maksimum Hijyen"
      ],
      "en": [
        "2.5 mm Diameter Pediatric Profile",
        "High-quality Medical-grade Plastic Material",
        "Non-traumatic Smooth Tip Design",
        "Secure and Perfect Fit to the Otoscope",
        "Maximum Hygiene with Single-use Structure"
      ],
      "fr": [
        "Profil pédiatrique de 2,5 mm de diamètre",
        "Matière plastique de qualité médicale de haute qualité",
        "Conception à pointe lisse non traumatique",
        "Ajustement sûr et parfait à l'otoscope",
        "Hygiène maximale avec structure à usage unique"
      ],
      "az": [
        "2,5 mm Diametrli Uşaq Profili",
        "Yüksək Keyfiyyətli Tibbi Plastik Material",
        "Travma yaratmayan hamar uc strukturu",
        "Otoskopa Təhlükəsiz və Mükəmməl Uyğunlaşan Dizayn",
        "Birdəfəlik Quruluşu ilə Maksimum Gigiyena"
      ]
    }
  },
  {
    "id": "kewa-otoskop-uclari-25mm",
    "name": {
      "tr": "Kewa Otoskop Uçları 2.5 mm",
      "en": "Kewa Otoscope Specula Tips 2.5 mm",
      "fr": "Embouts de spéculum d'otoscope Kewa 2,5 mm",
      "az": "Kewa Otoskop Uçları 2,5 mm"
    },
    "category": "OtoscopeSpecula",
    "description": {
      "tr": "Kewa otoskop cihazlarına tam uyumlu, hassas kulak muayenelerinde güvenle kullanılabilen 2.5 mm spekülüm ucu.",
      "en": "Specula tips with 2.5 mm diameter fully compatible with Kewa otoscopes, ensuring safe use in sensitive ear examinations.",
      "fr": "Embouts de spéculum d'un diamètre de 2,5 mm entièrement compatibles avec les otoscopes Kewa, garantissant une utilisation sûre lors des examens de l'oreille sensible.",
      "az": "Kewa otoskop cihazları ilə tam uyğun gələn və həssas qulaq müayinələrində etibarlı şəkildə istifadə edilə bilən 2,5 mm-lik spekulum ucu."
    },
    "image": "/kewa-otoskop-uclari-25mm.jpg",
    "features": {
      "tr": [
        "Kewa Otoskop Cihazları ile Uyumlu",
        "2.5 mm İnce Muayene Profili",
        "Pürüzsüz Kenarlar ve Atravmatik Tasarım",
        "Çapraz Enfeksiyon Riskini Önler",
        "Ekonomik Çoklu Paket Seçenekleri"
      ],
      "en": [
        "Compatible with Kewa Otoscope Devices",
        "2.5 mm Slim Examination Profile",
        "Smooth Edges and Atraumatic Design",
        "Prevents Cross-infection Risks",
        "Economical Multi-pack Options"
      ],
      "fr": [
        "Compatible avec les appareils otoscopes Kewa",
        "Profil d'examen mince de 2,5 mm",
        "Bords lisses et conception atraumatique",
        "Prévient les risques d'infection croisée",
        "Options de packs multiples économiques"
      ],
      "az": [
        "Kewa Otoskop Cihazları ilə uyğundur",
        "2,5 mm İncə Təftiş Profili",
        "Hamar Kenarlar və Atravmatik Dizayn",
        "Çarpaz infeksiya riskinin qarşısını alır",
        "Ekonomik Çoxsaylı Paket Seçimləri"
      ]
    }
  },
  {
    "id": "welch-allyn-otoskop-uclari-275mm",
    "name": {
      "tr": "Welch Allyn Otoskop Uçları 2.75 mm",
      "en": "Welch Allyn Otoscope Specula Tips 2.75 mm",
      "fr": "Embouts de spéculum d'otoscope Welch Allyn 2,75 mm",
      "az": "Welch Allyn Otoskop Uçları 2.75 mm"
    },
    "category": "OtoscopeSpecula",
    "description": {
      "tr": "Welch Allyn otoskopları ile kullanılmak üzere üretilmiş, çocuk kulak yapısına uygun 2.75 mm çapında hijyenik spekülüm.",
      "en": "Hygienic specula tips with 2.75 mm diameter designed for Welch Allyn otoscopes, fitting pediatric ear anatomy.",
      "fr": "Embouts de spéculums hygiéniques de 2,75 mm de diamètre conçus pour les otoscopes Welch Allyn, adaptés à l'anatomie de l'oreille pédiatrique.",
      "az": "Welch Allyn otoskopları ilə istifadə üçün hazırlanmış, uşaq qulaqları üçün uyğun olan diametri 2,75 mm olan gigiyenik spekulum."
    },
    "image": "/welch-allyn-otoskop-uclari-275mm.jpg",
    "features": {
      "tr": [
        "Welch Allyn Otoskoplarına Tam Uyum",
        "2.75 mm Pediatrik Muayene Çapı",
        "Maksimum Işık İletimi Sağlayan İç Yüzey",
        "Kolay Takma ve Çıkarma Mekanizması",
        "Tıbbi Sınıf Hijyenik Yapı"
      ],
      "en": [
        "Perfect Fit to Welch Allyn Otoscopes",
        "2.75 mm Pediatric Examination Diameter",
        "Inner Surface Providing Maximum Light Transmission",
        "Easy Attachment and Detachment Mechanism",
        "Medical-grade Hygienic Construction"
      ],
      "fr": [
        "Ajustement parfait aux otoscopes Welch Allyn",
        "Diamètre d'examen pédiatrique de 2,75 mm",
        "Surface intérieure offrant une transmission maximale de la lumière",
        "Mécanisme de fixation et de détachement facile",
        "Construction hygiénique de qualité médicale"
      ],
      "az": [
        "Welch Allyn Otoskopları ilə Tam Uyğunluq",
        "2.75 mm Uşaq Müayinəsinin Diametri",
        "Maksimum işığın ötürülməsini təmin edən daxili səth",
        "Asan Quraşdırma və Sökülmə Mexanizmi",
        "Tibbi Dərəcəli Gigiyenik Quruluş"
      ]
    }
  },
  {
    "id": "welch-allyn-otoskop-uclari-425mm",
    "name": {
      "tr": "Welch Allyn Otoskop Uçları 4.25 mm",
      "en": "Welch Allyn Otoscope Specula Tips 4.25 mm",
      "fr": "Embouts de spéculum d'otoscope Welch Allyn 4,25 mm",
      "az": "Welch Allyn Otoskop Uçları 4.25 mm"
    },
    "category": "OtoscopeSpecula",
    "description": {
      "tr": "Welch Allyn otoskop modelleri ile uyumlu, yetişkin kulak muayeneleri için tasarlanmış 4.25 mm çapında tek kullanımlık spekülüm ucu.",
      "en": "Disposable specula tips with 4.25 mm diameter compatible with Welch Allyn otoscope models, designed for adult ear examinations.",
      "fr": "Embouts de spéculums jetables d'un diamètre de 4,25 mm compatibles avec les modèles d'otoscopes Welch Allyn, conçus pour les examens de l'oreille des adultes.",
      "az": "Welch Allyn otoskop modelləri ilə uyğun gələn, böyüklərin qulaqlarının müayinəsi üçün nəzərdə tutulmuş, diametri 4,25 mm olan birdəfəlik spekulum ucu."
    },
    "image": "/welch-allyn-otoskop-uclari-425mm.jpg",
    "features": {
      "tr": [
        "Welch Allyn Cihazları ile Uyumlu",
        "4.25 mm Yetişkin Muayene Çapı",
        "Geniş Görüş Alanı Sağlayan Profil",
        "Travmatik Etki Yaratmayan Yuvarlatılmış Kenar",
        "Çapraz Enfeksiyonu Önleyici Tek Kullanımlık Tasarım"
      ],
      "en": [
        "Compatible with Welch Allyn Devices",
        "4.25 mm Adult Examination Diameter",
        "Profile Providing Wide Field of View",
        "Non-traumatic Rounded Rim Design",
        "Single-use Design to Prevent Cross-infection"
      ],
      "fr": [
        "Compatible avec les appareils Welch Allyn",
        "Diamètre d'examen adulte de 4,25 mm",
        "Profil offrant un large champ de vision",
        "Conception de jante arrondie non traumatique",
        "Conception à usage unique pour prévenir les infections croisées"
      ],
      "az": [
        "Welch Allyn Cihazları",
        "ilə uyğun gəlir 4,25 mm Böyüklər üçün Müayinə Diametri",
        "Geniş Baxış Sahəsini Təmin edən Profil",
        "Travmatik olmayan yuvarlaq kənar",
        "Çarpaz infeksiyanın qarşısını almaq üçün birdəfəlik dizayn"
      ]
    }
  },
  {
    "id": "ince-tekli-negatoskop",
    "name": {
      "tr": "İnce Tekli Negatoskop",
      "en": "Slim Single Negatoscope",
      "fr": "Négatoscope simple mince",
      "az": "İncə Tək Neqatoskop"
    },
    "category": "Negatoscope",
    "description": {
      "tr": "LED aydınlatma teknolojisine sahip, homojen ışık dağılımı sunan ultra ince tek panel negatoskop cihazı.",
      "en": "Ultra-slim single panel negatoscope incorporating LED lighting technology, providing homogeneous light distribution.",
      "fr": "Négatoscope ultra fin à panneau unique intégrant la technologie d'éclairage LED, offrant une répartition homogène de la lumière.",
      "az": "LED işıqlandırma texnologiyasına malik və homojen işıq paylanmasını təklif edən ultra nazik tək panelli neqatoskop cihazı."
    },
    "image": "/ince-tekli-negatoskop.jpg",
    "features": {
      "tr": [
        "Ultra İnce Modern Tasarım",
        "Yüksek Parlaklıklı LED Teknolojisi",
        "Gözü Yormayan Homojen Işık Dağılımı",
        "Güç Tasarruflu Uzun Ömürlü Kullanım",
        "Duvara Monte Edilebilir Pratik Kasa"
      ],
      "en": [
        "Ultra-slim Modern Design",
        "High Brightness LED Technology",
        "Homogeneous Eye-friendly Light Distribution",
        "Energy Saving and Long Operational Life",
        "Practical Wall-mountable Frame"
      ],
      "fr": [
        "Design moderne ultra fin",
        "Technologie LED haute luminosité",
        "Distribution homogène de la lumière respectueuse des yeux",
        "Économie d'énergie et longue durée de vie",
        "Cadre mural pratique"
      ],
      "az": [
        "Ultra İncə Müasir Dizayn",
        "Yüksək Parlaqlıq LED Texnologiyası",
        "Gözləri Yormayan Homojen İşıq Paylanması",
        "Enerjiyə qənaət edən uzunmüddətli istifadə",
        "Praktik Divara Quraşdırılan Seyf"
      ]
    }
  },
  {
    "id": "ince-ciftli-negatoskop",
    "name": {
      "tr": "İnce Çiftli Negatoskop",
      "en": "Slim Double Negatoscope",
      "fr": "Négatoscope double mince",
      "az": "İncə İkiqat Neqatoskop"
    },
    "category": "Negatoscope",
    "description": {
      "tr": "İki adet röntgen filminin yan yana incelenmesine olanak tanıyan, bağımsız kontrol edilebilir LED aydınlatmalı çiftli negatoskop.",
      "en": "Double panel negatoscope with independently controlled LED illumination, allowing side-by-side examination of two X-ray films.",
      "fr": "Négatoscope à double panneau avec éclairage LED à commande indépendante, permettant l'examen côte à côte de deux films radiographiques.",
      "az": "İki rentgen şüasını yan-yana tədqiq etməyə imkan verən müstəqil idarə olunan LED işıqlandırması olan ikiqat neqatoskop."
    },
    "image": "/ince-ciftli-negatoskop.jpg",
    "features": {
      "tr": [
        "Çift Panelli Geniş İzleme Alanı",
        "Bağımsız Kontrol Edilebilir Işık Bölmeleri",
        "Homojen Parlak LED Işık Kaynağı",
        "İnce ve Estetik Metal Gövde Yapısı",
        "Kolay Film Sabitleme Mandalları"
      ],
      "en": [
        "Double Panel Wide Viewing Area",
        "Independently Controlled Lighting Sections",
        "Homogeneous Bright LED Light Source",
        "Slim and Aesthetic Metal Body Structure",
        "Easy Film Fixing Clamps"
      ],
      "fr": [
        "Zone de visualisation large à double panneau",
        "Sections d'éclairage contrôlées indépendamment",
        "Source de lumière LED homogène et lumineuse",
        "Structure de carrosserie en métal mince et esthétique",
        "Pinces de fixation de film faciles"
      ],
      "az": [
        "İkiqat Panel Geniş Baxış Sahəsi",
        "Müstəqil olaraq idarə oluna bilən işıq podları",
        "Homojen Parlaq LED İşıq Mənbəsi",
        "İncə və estetik metal bədən quruluşu",
        "Asan filmi bərkitmə qıfılları"
      ]
    }
  },
  {
    "id": "ince-uclu-negatoskop",
    "name": {
      "tr": "İnce Üçlü Negatoskop",
      "en": "Slim Triple Negatoscope",
      "fr": "Négatoscope triple mince",
      "az": "İncə Üçlü Neqatoskop"
    },
    "category": "Negatoscope",
    "description": {
      "tr": "Üç panelli yapısıyla birden fazla filmin aynı anda değerlendirilmesini sağlayan, yüksek performanslı ince negatoskop.",
      "en": "High-performance slim negatoscope providing simultaneous evaluation of multiple films with its triple-panel structure.",
      "fr": "Négatoscope mince haute performance permettant une évaluation simultanée de plusieurs films grâce à sa structure à trois panneaux.",
      "az": "Üç panelli quruluşu ilə eyni vaxtda birdən çox filmin qiymətləndirilməsinə imkan verən yüksək performanslı nazik neqatoskop."
    },
    "image": "/ince-uclu-negatoskop.jpg",
    "features": {
      "tr": [
        "Üç Panelli Profesyonel Klinik Tasarım",
        "Genişletilmiş İzleme ve Değerlendirme Yüzeyi",
        "Ayarlanabilir Işık Şiddeti ve Homojen Işıma",
        "Dayanıklı Alüminyum Şasi Yapısı",
        "Uzun Ömürlü LED Aydınlatma Modülleri"
      ],
      "en": [
        "Triple Panel Professional Clinical Design",
        "Extended Viewing and Evaluation Surface",
        "Adjustable Light Intensity and Homogeneous Emission",
        "Durable Aluminum Chassis Construction",
        "Long-lasting LED Lighting Modules"
      ],
      "fr": [
        "Conception clinique professionnelle à triple panneau",
        "Surface de visualisation et d'évaluation étendue",
        "Intensité lumineuse réglable et émission homogène",
        "Construction de châssis en aluminium durable",
        "Modules d'éclairage LED longue durée"
      ],
      "az": [
        "Üç Panel Peşəkar Klinik Dizayn",
        "Genişləndirilmiş Monitorinq və Qiymətləndirmə Səthi",
        "Tənzimlənən İşıq İntensivliyi və Homojen Radiasiya",
        "Davamlı Alüminium Şassi Strukturu",
        "Uzun Ömürlü LED İşıqlandırma Modulları"
      ]
    }
  },
  {
    "id": "yonker-yk-8000b",
    "name": {
      "tr": "Yonker YK-8000B Veteriner Hastabaşı Monitörü",
      "en": "Yonker YK-8000B Veterinary Patient Monitor",
      "fr": "Moniteur patient vétérinaire Yonker YK-8000B",
      "az": "Yonker YK-8000B Baytarlıq Xəstəbaşı Monitoru"
    },
    "category": "Monitor",
    "type": "veterinary",
    "description": {
      "tr": "Veteriner klinikleri için özel olarak tasarlanmış, 12.1 inç çok parametreli renkli ekranı ve stabil performansıyla öne çıkan profesyonel veteriner hasta başı monitörü.",
      "en": "Professional veterinary patient monitor specifically designed for vet clinics with a 12.1-inch multi-parameter color screen and stable performance.",
      "fr": "Moniteur patient vétérinaire professionnel spécialement conçu pour les cliniques vétérinaires avec un écran couleur multiparamétrique de 12,1 pouces et des performances stables.",
      "az": "Baytarlıq klinikaları üçün xüsusi olaraq hazırlanmış, 12.1 düymlük çox parametli rəngli ekranı və stabil performansı ilə seçilən peşəkar baytarlıq xəstəbaşı monitoru."
    },
    "image": "/yonker-yk-8000b.png",
    "features": {
      "tr": [
        "12.1 inç Parlak Renkli TFT LCD Ekran",
        "Standart Parametreler: EKG, RESP, SpO2, NIBP, TEMP, PR",
        "Görsel ve Sesli Akıllı Alarm Sistemi",
        "Yetişkin, Pediatrik ve Yenidoğan Hastalarda Güvenli Kullanım",
        "Dahili Şarj Edilebilir Pil ile Kesintisiz Çalışma"
      ],
      "en": [
        "12.1-inch High-Brightness Color TFT LCD Display",
        "Standard Parameters: ECG, RESP, SpO2, NIBP, TEMP, PR",
        "Smart Visual and Audible Alarm System",
        "Safe Use for Adult, Pediatric, and Neonatal Patients",
        "Uninterrupted Operation with Built-in Rechargeable Battery"
      ],
      "fr": [
        "Écran LCD TFT couleur haute luminosité de 12,1 pouces",
        "Paramètres standard : ECG, RESP, SpO2, NIBP, TEMP, PR",
        "Système d'alarme intelligent visuel et sonore",
        "Utilisation sûre pour les patients adultes, pédiatriques et néonatals",
        "Fonctionnement ininterrompu grâce à la batterie rechargeable intégrée"
      ],
      "az": [
        "12.1 düymlük yüksək parlaqlığa malik rəngli TFT LCD ekran",
        "Standart parametrlər: EKQ, RESP, SpO2, NIBP, TEMP, PR",
        "Ağıllı vizual və səsli siqnal sistemi",
        "Yetkin, pediatrik və neonatal xəstələrdə təhlükəsiz istifadə",
        "Daxili təkrar doldurulan batareya ilə fasiləsiz işləmə"
      ]
    }
  },
  {
    "id": "mindray-umec-12-vet",
    "name": {
      "tr": "Mindray uMec 12 Vet Veteriner Hastabaşı Monitörü",
      "en": "Mindray uMec 12 Vet Veterinary Patient Monitor",
      "fr": "Moniteur patient vétérinaire Mindray uMec 12 Vet",
      "az": "Mindray uMec 12 Vet Baytarlıq Xəstəbaşı Monitoru"
    },
    "category": "Monitor",
    "type": "veterinary",
    "description": {
      "tr": "Gelişmiş veteriner algoritmaları, 12.1 inç yüksek çözünürlüklü dokunmatik ekranı ve yüksek taşınabilirliği ile klinikler için ideal hasta başı monitörü.",
      "en": "Ideal multi-parameter veterinary patient monitor with advanced veterinary algorithms, 12.1-inch high-resolution touchscreen, and high portability.",
      "fr": "Moniteur patient vétérinaire multiparamétrique ideal avec des algorithmes vétérinaires avancés, un écran tactile haute résolution de 12,1 pouces et une grande portabilité.",
      "az": "Təkmil baytarlıq alqoritmləri, 12.1 düymlük yüksək rezolyusiyaya malik sensor ekranı və yüksək daşınma qabiliyyəti ilə klinika üçün ideal xəstəbaşı monitoru."
    },
    "image": "/mindray-umec-12-vet.png",
    "features": {
      "tr": [
        "12.1 inç Yüksek Çözünürlüklü Renkli TFT LED Ekran",
        "Hayvanlara Özel EKG, SpO2 ve NIBP Algoritmaları",
        "Geniş Depolama Kapasitesi ve Trend Analizi",
        "4 Saate Kadar Kesintisiz Pil Çalışma Süresi",
        "Sessiz Fan Tasarımı ile Klinik Konforu"
      ],
      "en": [
        "12.1-inch High-Resolution Color TFT LED Screen",
        "Animal-specific ECG, SpO2, and NIBP Algorithms",
        "Large Storage Capacity and Trend Review",
        "Up to 4 Hours of Uninterrupted Battery Run Time",
        "Silent Fan Design for Clinic Comfort"
      ],
      "fr": [
        "Écran LED TFT couleur haute résolution de 12,1 pouces",
        "Algorithmes ECG, SpO2 et PNI spécifiques aux animaux",
        "Grande capacité de stockage et examen des tendances",
        "Jusqu'à 4 heures d'autonomie continue sur batterie",
        "Conception de ventilateur silencieux pour le confort de la clinique"
      ],
      "az": [
        "Heyvanlara məxsus EKQ, SpO2 və NIBP alqoritmləri",
        "Geniş yaddaş tutumu və trend analizi",
        "4 saata qədər fasiləsiz batareya işləmə müddəti",
        "Klinika rahatlığı üçün səssiz fan dizaynı"
      ]
    }
  },
  {
    "id": "veteriner-anestesi-cihazi",
    "name": {
      "tr": "Veteriner Anestezi Cihazı",
      "en": "Veterinary Anesthesia Machine",
      "fr": "Machine d'anesthésie vétérinaire",
      "az": "Baytarlıq Anesteziya Cihazı"
    },
    "category": "Anesthesia",
    "type": "veterinary",
    "description": {
      "tr": "Veteriner klinikleri ve hastaneleri için özel olarak tasarlanmış, hassas buharlaştırıcı ve güvenilir solunum devresiyle cerrahi operasyonlarda maksimum güvenlik sağlayan veteriner anestezi cihazı.",
      "en": "Veterinary anesthesia machine specifically designed for vet clinics and hospitals, ensuring maximum safety in surgical procedures with a precise vaporizer and reliable breathing circuit.",
      "fr": "Machine d'anesthésie vétérinaire spécialement conçue pour les cliniques et hôpitaux vétérinaires, garantissant une sécurité maximale lors des interventions chirurgicales grâce à un vaporisateur précis et un circuit respiratoire fiable.",
      "az": "Baytarlıq klinikaları və xəstəxanaları üçün xüsusi olaraq hazırlanmış, dəqiq buxarlandırıcı və etibarlı tənəffüs dövrəsi ilə cərrahi əməliyyatlarda maksimum təhlükəsizlik təmin edən baytarlıq anesteziya cihazı."
    },
    "image": "/veteriner-anestesi-cihazi.jpg",
    "features": {
      "tr": [
        "Hassas ve Güvenilir Anestezi Buharlaştırıcısı (İzofluran/Sevofluran)",
        "Kompakt ve Mobil Taşınabilir Tekerlekli Stand Tasarımı",
        "Geniş Ağırlık Aralığındaki Hayvanlar İçin Uygun Solunum Devresi",
        "Oksijen Bypass (Flush) Valfi ile Acil Oksijen Desteği",
        "Kolay Okunabilir Entegre Akışölçer (Flowmeter)"
      ],
      "en": [
        "Precise and Reliable Anesthesia Vaporizer (Isoflurane/Sevoflurane)",
        "Compact and Mobile Wheeled Stand Design",
        "Breathing Circuit Suitable for Animals of Wide Weight Range",
        "Emergency Oxygen Support with Oxygen Flush Valve",
        "Easy-to-read Integrated Flowmeter"
      ],
      "fr": [
        "Vaporisateur d'anesthésie précis et fiable (Isoflurane/Sévoflurane)",
        "Conception compacte et mobile sur pied à roulettes",
        "Circuit respiratoire adapté aux animaux de large gamme de poids",
        "Support d'oxygène d'urgence avec valve de rinçage d'oxygène",
        "Débitmètre intégré facile à lire"
      ],
      "az": [
        "Dəqiq və etibarlı anesteziya buxarlandırıcısı (İzofluran/Sevofluran)",
        "Yığcam və mobil təkərli stend dizaynı",
        "Geniş çəki aralığındakı heyvanlar üçün uyğun tənəffüs dövrəsi",
        "Oksigen bypass klapanı ilə təcili oksigen dəstəyi",
        "Asan oxunan inteqrasiya olunmuş axınölçən (flowmeter)"
      ]
    }
  },
  {
    "id": "lcs-koter-100",
    "name": {
      "tr": "LCS Koter 100 Veteriner Koter Cihazı",
      "en": "LCS Koter 100 Veterinary Electrosurgical Unit",
      "fr": "Bistouri électrique vétérinaire LCS Koter 100",
      "az": "LCS Koter 100 Baytarlıq Koter Cihazı"
    },
    "category": "Electrosurgery",
    "type": "veterinary",
    "description": {
      "tr": "Veteriner hekimlikteki genel cerrahi ve küçük müdahaleler için tasarlanmış, monopolar ve bipolar modlara sahip, taşınabilir ve pratik 100W koter cihazı.",
      "en": "Portable and practical 100W electrosurgical unit with monopolar and bipolar modes, designed for general veterinary surgery and minor interventions.",
      "fr": "Unité d'électrochirurgie 100W portable et pratique avec modes monopolaire et bipolaire, conçue pour la chirurgie vétérinaire générale et les petites interventions.",
      "az": "Baytarlıq cərrahiyyəsində ümumi cərrahiyyə və kiçik müdaxilələr üçün nəzərdə tutulmuş, monopolyar və bipolyar rejimlərə malik, portativ və praktik 100W koter cihazı."
    },
    "image": "/lcs-koter-100.jpg",
    "features": {
      "tr": [
        "100W Maksimum Çıkış Gücü",
        "Monopolar Kesme, Karışık Kesme ve Koagülasyon Modları",
        "Hassas Bipolar Koagülasyon Desteği",
        "Kompakt ve Kolay Taşınabilir Masaüstü Tasarım",
        "Aşırı Yük ve Hasta Güvenlik Koruma Sistemleri"
      ],
      "en": [
        "100W Maximum Output Power",
        "Monopolar Cut, Blend Cut, and Coagulation Modes",
        "Precise Bipolar Coagulation Support",
        "Compact and Easy-to-carry Desktop Design",
        "Overload and Patient Safety Protection Systems"
      ],
      "fr": [
        "Puissance de sortie maximale de 100 W",
        "Modes coupe monopolaire, coupe mixte et coagulation",
        "Support précis de coagulation bipolaire",
        "Conception de bureau compacte et facile à transporter",
        "Systèmes de protection contre les surcharges et de sécurité des patients"
      ],
      "az": [
        "100W Maksimum Çıxış Gücü",
        "Monopolyar Kəsmə, Qarışıq Kəsmə və Koaqulyasiya Rejimləri",
        "Həssas Bipolyar Koaqulyasiya Dəstəyi",
        "Yığcam və asan daşına bilən masaüstü dizayn",
        "Həddindən artıq yüklənmə və pasiyent təhlükəsizliyi qorunma sistemləri"
      ]
    }
  },
  {
    "id": "shalya-lx-120",
    "name": {
      "tr": "Shalya LX 120 Veteriner Koter Cihazı",
      "en": "Shalya LX 120 Veterinary Electrosurgical Unit",
      "fr": "Bistouri électrique vétérinaire Shalya LX 120",
      "az": "Shalya LX 120 Baytarlıq Koter Cihazı"
    },
    "category": "Electrosurgery",
    "type": "veterinary",
    "description": {
      "tr": "Mikroişlemci kontrollü yapısı, 120W çıkış gücü ve dijital göstergesiyle modern veteriner cerrahisinin ihtiyaçlarını karşılayan gelişmiş koter ünitesi.",
      "en": "Advanced 120W electrosurgical unit with microprocessor-controlled architecture and digital display, meeting the needs of modern veterinary surgery.",
      "fr": "Unité d'électrochirurgie 120 W avancée avec architecture contrôlée par microprocesseur et affichage numérique, répondant aux exigences de la chirurgie vétérinaire moderne.",
      "az": "Mikroprosessorla idarə olunan strukturu, 120W çıxış gücü və rəqəmsal göstəricisi ilə müasir baytarlıq cərrahiyyəsinin ehtiyaclarını qarşılayan təkmil koter cihazı."
    },
    "image": "/shalya-lx-120.png",
    "features": {
      "tr": [
        "120W Maksimum Çıkış Gücü ile Güçlü Performans",
        "Mikroişlemci Kontrollü Kararlı Çıkış Teknolojisi",
        "Ayrı Monopolar ve Bipolar Çıkış Kanalları",
        "Güvenilir Dijital Güç Gösterge Paneli",
        "Ayak Pedalı veya El Kumandalı Kalem ile Çalışma"
      ],
      "en": [
        "Powerful Performance with 120W Maximum Output Power",
        "Microprocessor Controlled Stable Output Technology",
        "Separate Monopolar and Bipolar Output Channels",
        "Reliable Digital Power Display Panel",
        "Operation with Foot Switch or Hand Switch Pencil"
      ],
      "fr": [
        "Performances puissantes avec une puissance de sortie maximale de 120 W",
        "Technologie de sortie stable contrôlée par microprocesseur",
        "Canaux de sortie monopolaires et bipolaires séparés",
        "Panneau d'affichage numérique fiable de la puissance",
        "Fonctionnement par interrupteur au pied ou crayon à commande manuelle"
      ],
      "az": [
        "120W Maksimum Çıxış Gücü ilə Güclü Performans",
        "Mikroprosessorla İdarə Olunan Stabil Çıxış Texnologiyası",
        "Ayrı Monopolyar və Bipolyar Çıxış Kanalları",
        "Etibarlı rəqəmsal güc göstərici paneli",
        "Ayaq pedalı və ya əl idarəetmə qələmi ilə işləmə"
      ]
    }
  },
  {
    "id": "petas-petkot-500s",
    "name": {
      "tr": "Petaş Petkot 500S Veteriner Koter Cihazı",
      "en": "Petas Petkot 500S Veterinary Electrosurgical Unit",
      "fr": "Bistouri électrique vétérinaire Petas Petkot 500S",
      "az": "Petaş Petkot 500S Baytarlıq Koter Cihazı"
    },
    "category": "Electrosurgery",
    "type": "veterinary",
    "description": {
      "tr": "Veteriner cerrahisinde en hassas ve karmaşık ameliyatlar için tasarlanmış, yüksek frekanslı ve çok modlu 150W profesyonel elektrocerrahi koter cihazı.",
      "en": "Professional high-frequency 150W electrosurgical unit with multiple modes, designed for the most sensitive and complex procedures in veterinary surgery.",
      "fr": "Unité d'électrochirurgie professionnelle haute fréquence 150 W avec modes multiples, conçue pour les interventions les plus sensibles et complexes en chirurgie vétérinaire.",
      "az": "Baytarlıq cərrahiyyəsində ən həssas və mürəkkəb əməliyyatlar üçün nəzərdə tutulmuş, yüksək tezlikli və çoxrejimli 150W peşəkar elektrocərrahiyyə koter cihazı."
    },
    "image": "/petas-petkot-500s.png",
    "features": {
      "tr": [
        "150W Yüksek Frekanslı Elektrocerrahi Gücü",
        "Saf Kesme, Karışık Kesme, Temaslı ve Sprey Koagülasyon",
        "Gelişmiş Doku Direnci Algılama Sistemi",
        "Hassas Bipolar Modu ve Mikrocerrahi Uyumluluğu",
        "Geniş Güvenlik Alarm Donanımı (Plaka Temas Uyarısı)"
      ],
      "en": [
        "150W High-frequency Electrosurgical Power",
        "Pure Cut, Blend Cut, Contact and Spray Coagulation",
        "Advanced Tissue Impedance Sensing System",
        "Precise Bipolar Mode and Microsurgery Compatibility",
        "Comprehensive Safety Alarm System (Plate Contact Alert)"
      ],
      "fr": [
        "Puissance électrochirurgicale haute fréquence de 150 W",
        "Coupe pure, coupe mixte, coagulation par contact et par pulvérisation",
        "Système avancé de détection de l'impédance des tissus",
        "Mode bipolaire précis et compatibilité microchirurgicale",
        "Système d'alarme de sécurité complet (alerte de contact de plaque)"
      ],
      "az": [
        "150W Yüksək Tezlikli Elektrocərrahiyyə Gücü",
        "Təmiz Kəsmə, Qarışıq Kəsmə, Təmaslı və Sprey Koaqulyasiyası",
        "Təkmil Toxuma Müqaviməti Aşkarlama Sistemi",
        "Həssas Bipolyar Rejim və Mikrocərrahiyyə Uyğunluğu",
        "Geniş Təhlükəsizlik Siqnalı Avadanlığı (Plitə təmas xəbərdarlığı)"
      ]
    }
  },
  {
    "id": "shalya-easy-plus",
    "name": {
      "tr": "Shalya Easy Plus Veteriner Koter Cihazı",
      "en": "Shalya Easy Plus Veterinary Electrosurgical Unit",
      "fr": "Bistouri électrique vétérinaire Shalya Easy Plus",
      "az": "Shalya Easy Plus Baytarlıq Koter Cihazı"
    },
    "category": "Electrosurgery",
    "type": "veterinary",
    "description": {
      "tr": "Kullanıcı dostu arayüzü, gelişmiş güvenlik protokolleri ve stabil güç çıkışıyla her veteriner kliniğinde bulunması gereken çok amaçlı cerrahi koter cihazı.",
      "en": "Versatile electrosurgical unit essential for any veterinary clinic, featuring a user-friendly interface, advanced safety protocols, and stable power output.",
      "fr": "Unité d'électrochirurgie polyvalente indispensable pour toute clinique vétérinaire, dotée d'une interface conviviale, de protocoles de sécurité avancés et d'une puissance de sortie stable.",
      "az": "İstifadəçi dostu interfeysi, təkmil təhlükəsizlik protokolları və stabil güc çıxışı ilə hər bir baytarlıq klinikasında olması vacib olan çoxməqsədli cərrahi koter cihazı."
    },
    "image": "/shalya-easy-plus-koter-cihazi.jpg",
    "features": {
      "tr": [
        "Klinik İhtiyaçlara Özel Çok Yönlü Güç Çıkış Ayarları",
        "Kolay Kullanım Sunan Sade Ön Panel Arayüzü",
        "Hızlı Mod Değişimi ve Güç Hafıza Fonksiyonu",
        "Aşırı Isınma ve Kısa Devre Koruması",
        "Yüksek Kaliteli Aksesuar Seti Uyumluluğu"
      ],
      "en": [
        "Versatile Power Settings Tailored for Clinic Needs",
        "Simple Front Panel Interface for Easy Operation",
        "Quick Mode Switching and Power Memory Function",
        "Overheating and Short Circuit Protection",
        "High-Quality Accessory Set Compatibility"
      ],
      "fr": [
        "Réglages de puissance polyvalents adaptés aux besoins de la clinique",
        "Interface simple du panneau avant pour une utilisation facile",
        "Commutation rapide de mode et fonction de mémoire de puissance",
        "Protection contre la surchauffe et les courts-circuits",
        "Compatibilité avec un ensemble d'accessoires de haute qualité"
      ],
      "az": [
        "Klinika ehtiyaclarına uyğun çoxşaxəli güc tənzimləmələri",
        "Asan istifadə təklif edən sadə ön panel interfeysi",
        "Sürətli rejim değiştirilməsi və güc yaddaş funksiyası",
        "Həddindən artıq qızma və qısa qapanma qorunması",
        "Yüksək keyfiyyetli aksesuar dəsti uyğunluğu"
      ]
    }
  },
  {
    "id": "edan-dus60-ultrason",
    "name": {
      "tr": "Edan DUS 60 Veteriner Ultrason Cihazı",
      "en": "Edan DUS 60 Veterinary Ultrasound System",
      "fr": "Échographe vétérinaire Edan DUS 60",
      "az": "Edan DUS 60 Baytarlıq Ultrasəs Cihazı"
    },
    "category": "Ultrasound",
    "type": "veterinary",
    "description": {
      "tr": "Kompakt tasarımı, yüksek çözünürlüklü siyah-beyaz görüntüleme kalitesi ve veteriner hekimliğe özel ölçüm paketleriyle öne çıkan taşınabilir dijital ultrason sistemi.",
      "en": "Portable digital ultrasound system featuring a compact design, high-resolution black-and-white imaging quality, and measurement packages customized for veterinary use.",
      "fr": "Système d'échographie numérique portable doté d'une conception compacte, d'une qualité d'imagerie noir et blanc haute résolution et de progiciels de mesure personnalisés pour l'usage vétérinaire.",
      "az": "Yığcam dizaynı, yüksək rezolyusiyaya malik ağ-qara görüntüləmə keyfiyyəti və baytarlığa məxsus ölçmə paketləri ilə seçilən portativ rəqəmsal ultrasəs sistemi."
    },
    "image": "/edan-dus60-ultrason.png",
    "features": {
      "tr": [
        "12.1 inç Katlanabilir LCD Ekran",
        "Veteriner Obstetrik ve Karın Muayenesi Ölçüm Programları",
        "Çift Prob Bağlantı Portu (Aktif Selektörlü)",
        "Gelişmiş PW Doppler ve Harmonik Görüntüleme Teknolojisi",
        "Dahili Hafıza ve Kolay USB Görüntü Aktarımı"
      ],
      "en": [
        "12.1-inch Foldable LCD Screen",
        "Veterinary Obstetrics and Abdominal Measurement Packages",
        "Dual Active Probe Connectors",
        "Advanced PW Doppler and Harmonic Imaging Technology",
        "Built-in Storage and Easy USB Image Transfer"
      ],
      "fr": [
        "Écran LCD pliable de 12,1 pouces",
        "Programmes de mesure obstétricale et abdominale vétérinaire",
        "Connecteurs double sonde active",
        "Technologie d'imagerie PW Doppler et harmonique avancée",
        "Stockage intégré et transfert d'images USB facile"
      ],
      "az": [
        "12.1 düymlük qatlana bilən LCD ekranı",
        "Baytarlıq ginekologiyası və qarın boşluğu müayinəsi ölçmə proqramları",
        "İkiaktiv prob birləşdirici portu",
        "Təkmil PW Doppler və Harmonik görüntüləmə texnologiyası",
        "Daxili yaddaş və asan USB şəkil ötürülməsi"
      ]
    }
  },
  {
    "id": "kardesis-tek-basli-ameliyat-lambasi",
    "name": {
      "tr": "Tek Başlı Veteriner Ameliyat Lambası",
      "en": "Single-Head Veterinary Surgical Light",
      "fr": "Lampe d'opération vétérinaire à coupole unique",
      "az": "Tək Başlı Baytarlıq Əməliyyat Lampası"
    },
    "category": "SurgicalLight",
    "type": "veterinary",
    "description": {
      "tr": "Veteriner cerrahi operasyonlarda üstün aydınlatma performansı ve gölgesiz ışık alanı sunan, tavana monte veya mobil uyumlu profesyonel tek başlı ameliyat lambası.",
      "en": "Professional single-head surgical light offering superior illumination performance and shadowless light field in veterinary surgical operations, ceiling-mounted or mobile-compatible.",
      "fr": "Scialytique professionnel à coupole unique offrant des performances d'éclairage supérieures et un champ lumineux sans ombre lors des opérations chirurgicales vétérinaires, montable au plafond ou mobile.",
      "az": "Baytarlıq cərrahi əməliyyatlarında üstün işıqlandırma performansı və kölgəsiz işıq sahəsi təklif edən, tavana quraşdırılan və ya mobil uyğun peşəkar tək başlı əməliyyat lampası."
    },
    "image": "/kardesis-tek-basli-ameliyat-lambasi.jpg",
    "features": {
      "tr": [
        "Yüksek Yoğunluklu LED Işık Kaynağı",
        "Ayarlanabilir Odak ve Aydınlatma Çapı",
        "Doğal Gün Işığı Renk Sıcaklığı (CRI >95)",
        "Isı Yaymayan Soğuk Işık Teknolojisi",
        "Kolay Temizlenebilir Steril Kulp Yapısı"
      ],
      "en": [
        "High-Intensity LED Light Source",
        "Adjustable Focus and Spot Size",
        "Natural Daylight Color Temperature (CRI >95)",
        "Cool Light Technology with No Heat Emission",
        "Easy-to-Clean Sterile Handle"
      ],
      "fr": [
        "Source lumineuse LED haute intensité",
        "Mise au point et taille du spot réglables",
        "Température de couleur de la lumière naturelle (IRC >95)",
        "Technologie de lumière froide sans émission de chaleur",
        "Poignée stérile facile à nettoyer"
      ],
      "az": [
        "Yüksək intensivlikli LED işıq mənbəyi",
        "Tənzimlənən fokus və işıq sahəsi diametri",
        "Təbii gün işığı rəng temperaturu (CRI >95)",
        "İstilik yaymayan soyuq işıq texnologiyası",
        "Asan təmizlənən steril qulp quruluşu"
      ]
    }
  },
  {
    "id": "kardesis-cift-basli-ameliyat-lambasi",
    "name": {
      "tr": "Çift Başlı Veteriner Ameliyat Lambası",
      "en": "Double-Head Veterinary Surgical Light",
      "fr": "Lampe d'opération vétérinaire à double coupole",
      "az": "Cüt Başlı Baytarlıq Əməliyyat Lampası"
    },
    "category": "SurgicalLight",
    "type": "veterinary",
    "description": {
      "tr": "Geniş veteriner cerrahi prosedurları için geliştirilmiş, yüksek aydınlatma gücüne ve çift taraflı açılı gölgesiz aydınlatma alanına sahip profesyonel çift başlı ameliyat lambası.",
      "en": "Professional double-head surgical light developed for wide veterinary surgical procedures, featuring high illumination power and double-sided angled shadowless lighting area.",
      "fr": "Scialytique professionnel à double coupole développé pour les procédures chirurgicales vétérinaires étendues, offrant une puissance d'éclairage élevée et une zone d'éclairage sans ombre inclinée des deux côtés.",
      "az": "Geniş baytarlıq cərrahi prosedurları üçün hazırlanmış, yüksək işıqlandırma gücünə və cüt tərəfli bucaqlı kölgəsiz işıq sahəsinə malik peşəkar cüt başlı əməliyyat lampası."
    },
    "image": "/kardesis-cift-basli-ameliyat-lambasi.png",
    "features": {
      "tr": [
        "Çift Başlıklı Bağımsız Kontrol ve Aydınlatma",
        "Yüksek Yoğunluklu LED Teknolojisi",
        "Esnek Pozisyonlama Sunan Denge Kolları",
        "Optimize Edilmiş Hava Akışı Tasarımı (Laminer Akış Uyumlu)",
        "Dokunmatik Kontrol Paneli ve Dijital Parlaklık Ayarı"
      ],
      "en": [
        "Double-head Independent Control and Illumination",
        "High-Intensity LED Technology",
        "Balance Arms Offering Flexible Positioning",
        "Optimized Airflow Design (Laminar Flow Compatible)",
        "Touch Control Panel and Digital Brightness Adjustment"
      ],
      "fr": [
        "Contrôle et éclairage indépendants à double coupole",
        "Technologie LED haute intensité",
        "Bras d'équilibrage offrant un positionnement flexible",
        "Conception optimisée du flux d'air (compatible flux laminaire)",
        "Panneau de commande tactile et réglage numérique de la luminosité"
      ],
      "az": [
        "Cüt başlıqlı müstəqil idarəetmə və işıqlandırma",
        "Yüksək intensivlikli LED texnologiyası",
        "Çevik mövqeləndirmə təklif edən balans qolları",
        "Optimallaşdırılmış hava axını dizaynı (Laminar axın uyğun)",
        "Sensorlu idarəetmə paneli və rəqəmsal parlaqlıq tənzimlənməsi"
      ]
    }
  },
  {
    "id": "mindray-infuzyon-enjektomat",
    "name": {
      "tr": "Mindray Veteriner İnfüzyon ve Enjektör Pompası",
      "en": "Mindray Veterinary Infusion & Syringe Pump",
      "fr": "Pompe d'infusion et seringue vétérinaire Mindray",
      "az": "Mindray Baytarlıq İnfüziya və Enjektor Pompası"
    },
    "category": "InfusionPump",
    "type": "veterinary",
    "description": {
      "tr": "Veteriner klinikalarında hassas sıvı ve ilaç iletimi sağlamak için geliştirilmiş, yüksek güvenlik standartlarına ve sezgisel tasarıma sahip infüzyon ve enjektör pompası sistemi.",
      "en": "Infusion & syringe pump system developed to provide precise fluid and medication delivery in veterinary clinics, featuring high safety standards and an intuitive design.",
      "fr": "Système de pompe d'infusion et de seringue développé pour assurer un débit précis de fluides et de médicaments dans les cliniques vétérinaires, doté de normes de sécurité élevées et d'une conception intuitive.",
      "az": "Baytarlıq klinikalarında dəqiq maye və dərman ötürülməsini təmin etmək üçün hazırlanmış, yüksək təhlükəsizlik standartlarına və intuitiv dizayna malik infüziya və enjektor pompası sistemi."
    },
    "image": "/mindray-infuzyon-enjektomat.png",
    "features": {
      "tr": [
        "Hassas Mikro Akış Hızı Kontrolü",
        "Geniş Enjektör Markası Uyumluluğu (5ml, 10ml, 20ml, 30ml, 50/60ml)",
        "Akıllı Tıkanıklık ve Hava Algılama Sensörleri",
        "Dahili Batarya ve Uzun Süreli Mobil Kullanım",
        "Kolay Kullanımlı Renkli LCD Ekran"
      ],
      "en": [
        "Precise Micro Flow Rate Control",
        "Wide Syringe Brand Compatibility (5ml, 10ml, 20ml, 30ml, 50/60ml)",
        "Intelligent Occlusion and Air Bubble Detection Sensors",
        "Built-in Battery for Long-term Mobile Operation",
        "Easy-to-use Color LCD Screen"
      ],
      "fr": [
        "Contrôle précis du micro-débit",
        "Large compatibilité avec les marques de seringues (5ml, 10ml, 20ml, 30ml, 50/60ml)",
        "Capteurs intelligents de détection d'occlusion et de bulles d'air",
        "Batterie intégrée pour une utilisation mobile de longue durée",
        "Écran couleur LCD facile à utiliser"
      ],
      "az": [
        "Dəqiq mikro axın sürəti nəzarəti",
        "Geniş enjektor markası uyğunluğu (5ml, 10ml, 20ml, 30ml, 50/60ml)",
        "Ağıllı tıxanıqlıq və hava qabarcığı aşkarlama sensorları",
        "Daxili batareya və uzunmüddətli mobil istifadə",
        "Asan istifadə olunan rəngli LCD ekran"
      ]
    }
  },
  {
    "id": "sino-infuzyon-pompasi",
    "name": {
      "tr": "Sino Veteriner İnfüzyon Pompası",
      "en": "Sino Veterinary Infusion Pump",
      "fr": "Pompe d'infusion vétérinaire Sino",
      "az": "Sino Baytarlıq İnfüziya Pompası"
    },
    "category": "InfusionPump",
    "type": "veterinary",
    "description": {
      "tr": "Küçük ve büyük hayvan klinikleri için tasarlanmış, kararlı akış hızı ve yüksek verimlilik sunan dayanıklı infüzyon pompası.",
      "en": "Durable infusion pump designed for small and large animal clinics, offering stable flow rate and high efficiency.",
      "fr": "Pompe d'infusion durable conçue pour les cliniques de petits et grands animaux, offrant un débit stable et une grande efficacité.",
      "az": "Kiçik və böyük heyvan klinikaları üçün hazırlanmış, sabit axın sürəti və yüksək səmərəlilik təklif edən davamlı infüziya pompası."
    },
    "image": "/sino-infuzyon-pompasi.jpeg",
    "features": {
      "tr": [
        "Yüksek Kararlılıkta Volumetrik İnfüzyon",
        "Çoklu İnfüzyon Modu Desteği (Hız, Zaman, Damla, Ağırlık)",
        "Sesli ve Görsel Alarm Uyarı Sistemi",
        "Sıvı Geçirmez Gövde Tasarımı (IPX2 Sınıfı)",
        "Kompakt ve Kolay Taşınabilir Tasarım"
      ],
      "en": [
        "High-Stability Volumetric Infusion",
        "Multiple Infusion Modes (Rate, Time, Drip, Weight)",
        "Audible and Visual Alarm Warning System",
        "Waterproof Casing Design (IPX2 Class)",
        "Compact and Easy-to-Carry Design"
      ],
      "fr": [
        "Infusion volumétrique à haute stabilité",
        "Plusieurs modes d'infusion (débit, temps, goutte, poids)",
        "Système d'alarme sonore et visuel",
        "Conception de boîtier étanche (classe IPX2)",
        "Conception compacte et facile à transporter"
      ],
      "az": [
        "Yüksək sabitlikdə volumetrik infüziya",
        "Çoxlu infüziya rejimi dəstəyi (Sürət, Zaman, Damcı, Çəki)",
        "Səsli və vizual siqnal xəbərdarlıq sistemi",
        "Su keçirməyən gövdə dizaynı (IPX2 sinfi)",
        "Yığcam və asan daşına bilən dizayn"
      ]
    }
  },
  {
    "id": "sino-enjektomat",
    "name": {
      "tr": "Sino Veteriner Enjektör Pompası",
      "en": "Sino Veterinary Syringe Pump",
      "fr": "Pompe de seringue vétérinaire Sino",
      "az": "Sino Baytarlıq Enjektor Pompası"
    },
    "category": "InfusionPump",
    "type": "veterinary",
    "description": {
      "tr": "Küçük hacimli ve yüksek hassasiyetli ilaç uygulamaları için geliştirilmiş veteriner uyumlu enjektör pompası.",
      "en": "Veterinary-compatible syringe pump developed for low-volume and high-precision drug applications.",
      "fr": "Pompe de seringue compatible vétérinaire développée pour les applications de médicaments à faible volume et de haute précision.",
      "az": "Kiçik həcmli və yüksək dəqiqlikli dərman tətbiqləri üçün hazırlanmış baytarlıqla uyğun enjektor pompası."
    },
    "image": "/sino-enjektomat.png",
    "features": {
      "tr": [
        "Mikroenjeksiyon Hassasiyeti (0.1 ml/s adım aralığı)",
        "Otomatik Enjektör Boyutu Tanıma",
        "Akıllı İlaç Kütüphanesi ve Dozaj Desteği",
        "Çift CPU Güvenlik Kontrol Sistemi",
        "6 Saatten Fazla Çalışan Dahili Şarj Edilebilir Pil"
      ],
      "en": [
        "Micro-injection Precision (0.1 ml/h step increments)",
        "Automatic Syringe Size Recognition",
        "Intelligent Drug Library and Dosage Support",
        "Dual CPU Safety Monitoring System",
        "Internal Rechargeable Battery Operating for 6+ Hours"
      ],
      "fr": [
        "Précision de micro-injection (incréments de 0,1 ml/h)",
        "Reconnaissance automatique de la taille de la seringue",
        "Bibliothèque de médicaments intelligente et support de dosage",
        "Système de surveillance de sécurité à double processeur",
        "Batterie rechargeable interne offrant plus de 6 heures d'autonomie"
      ],
      "az": [
        "Mikroeneksiya dəqiqliyi (0.1 ml/saat addım aralığı)",
        "Avtomatik enjektor ölçüsü tanıma",
        "Ağıllı dərman kitabxanası və doza dəstəyi",
        "Cüt prosessorlu təhlükəsizlik idarəetmə sistemi",
        "6 saatdan çox işləyən daxili doldurula bilən batareya"
      ]
    }
  },
  {
    "id": "medcaptain-infuzyon-pompasi",
    "name": {
      "tr": "Medcaptain Veteriner İnfüzyon Pompası",
      "en": "Medcaptain Veterinary Infusion Pump",
      "fr": "Pompe d'infusion vétérinaire Medcaptain",
      "az": "Medcaptain Baytarlıq İnfüziya Pompası"
    },
    "category": "InfusionPump",
    "type": "veterinary",
    "description": {
      "tr": "Yenilikçi dokunmatik ekranı, üst düzey güvenlik mekanizmaları ve kablosuz bağlantı desteği sunan yeni nesil veteriner infüzyon pompası.",
      "en": "Next-generation veterinary infusion pump offering an innovative touchscreen, high-level safety mechanisms, and wireless connectivity support.",
      "fr": "Pompe d'infusion vétérinaire de nouvelle génération offrant un écran tactile innovant, des mécanismes de sécurité de haut niveau et un support de connectivité sans fil.",
      "az": "İnnovativ sensorlu ekranı, yüksək səviyyəli təhlükəsizlik mexanizmləri və simsiz qoşulma dəstəyi təklif edən yeni nəsil baytarlıq infüziya pompası."
    },
    "image": "/medcaptain-infuzyon-pompasi.png",
    "features": {
      "tr": [
        "Dokunmatik Renkli LCD Ekran Arayüzü",
        "Akıllı Serum Seti Algılama ve Otomatik Kalibrasyon",
        "WiFi Kablosuz İletişim ve Klinik Entegrasyon Desteği",
        "Anti-bolus Fonksiyonu ile Güvenli İlaç Teslimatı",
        "IP24 Seviyesi Toz ve Su Geçirmezlik"
      ],
      "en": [
        "Touchscreen Color LCD Interface",
        "Smart IV Set Detection and Auto-calibration",
        "WiFi Wireless Communication and Clinical Integration Support",
        "Safe Drug Delivery with Anti-bolus Function",
        "IP24 Rated Dust and Water Resistance"
      ],
      "fr": [
        "Interface tactile LCD couleur",
        "Détection intelligente de la tubulure IV et étalonnage automatique",
        "Communication sans fil WiFi et support d'intégration clinique",
        "Distribution sécurisée des médicaments avec fonction anti-bolus",
        "Résistance à la poussière et à l'eau classée IP24"
      ],
      "az": [
        "Sensorlu rəngli LCD ekran interfeysi",
        "Ağıllı serum seti aşkarlama və avtomatik kalibrləmə",
        "WiFi simsiz rabitə və klinik inteqrasiya dəstəyi",
        "Anti-bolus funksiyası ile təhlükəsiz dərman ötürülməsi",
        "IP24 səviyyəli toz və su keçirməzlik"
      ]
    }
  },
  {
    "id": "medcaptain-enjektomat",
    "name": {
      "tr": "Medcaptain Veteriner Enjektör Pompası",
      "en": "Medcaptain Veterinary Syringe Pump",
      "fr": "Pompe de seringue vétérinaire Medcaptain",
      "az": "Medcaptain Baytarlıq Enjektor Pompası"
    },
    "category": "InfusionPump",
    "type": "veterinary",
    "description": {
      "tr": "Hassas infüzyon hızı, kolay kullanımı ve üst düzey hasta güvenliği önlemleri ile donatılmış modern veteriner enjektör pompası.",
      "en": "Modern veterinary syringe pump equipped with precise infusion rate, ease of use, and high-level patient safety measures.",
      "fr": "Pompe de seringue vétérinaire moderne équipée d'un débit d'infusion précis, d'une grande facilité d'utilisation et de mesures de sécurité élevées pour les patients.",
      "az": "Dəqiq infüziya sürəti, asan istifadə ve yüksək səviyyəli xəstə təhlükəsizliyi tədbirləri ilə təchiz edilmiş müasir baytarlıq enjektor pompası."
    },
    "image": "/medcaptain-enjektomat.png",
    "features": {
      "tr": [
        "Akıllı Güvenlik Kilitli Enjektör Kelepçesi",
        "Mikro Hız Ayarı (0.01 ml/s hassasiyet)",
        "Kapsamlı Alarm Göstergeleri ve Önleme Sistemi",
        "Dikey veya Yatay Kombine Edilebilir Modüler Yapı",
        "Uzun Ömürlü Batarya ile Mobil Kullanılabilirlik"
      ],
      "en": [
        "Syringe Clamp with Smart Safety Lock",
        "Micro-rate Adjustment (0.01 ml/h precision)",
        "Comprehensive Alarm Indicators and Prevention System",
        "Modular Design for Vertical or Horizontal Assembly",
        "Mobile Usability with Long-lasting Battery"
      ],
      "fr": [
        "Pince à seringue avec verrouillage de sécurité intelligent",
        "Réglage du micro-débit (précision de 0,01 ml/h)",
        "Indicateurs d'alarme complets et système de prévention",
        "Conception modulaire pour un assemblage vertical ou horizontal",
        "Utilisation mobile avec batterie longue durée"
      ],
      "az": [
        "Ağıllı təhlükəsizlik kilidli enjektor sıxacı",
        "Mikro sürət tənzimlənməsi (0.01 ml/saat dəqiqlik)",
        "Hərtərəfli siqnal göstəriciləri və qarşısının alınması sistemi",
        "Şaquli və ya üfüqi birləşdirilə bilən modulyar quruluş",
        "Uzunömürlü batareya ilə mobil istifadə imkanı"
      ]
    }
  },
  {
    "id": "mindray-r700-ekg",
    "name": {
      "tr": "Mindray R700 12 Kanallı EKG Cihazı",
      "en": "Mindray R700 12-Channel ECG Machine",
      "fr": "Appareil ECG 12 canaux Mindray R700",
      "az": "Mindray R700 12 Kanallı EKQ Cihazı"
    },
    "category": "ECG",
    "type": "hospital",
    "description": {
      "tr": "Modern klinik gereksinimleri karşılamak üzere tasarlanmış, yüksek kaliteli sinyal edinimi, gelişmiş EKG analizi ve sezgisel kullanıcı arayüzü sunan profesyonel EKG cihazı.",
      "en": "Professional ECG machine designed to meet modern clinical requirements, offering high-quality signal acquisition, advanced ECG analysis, and intuitive user interface.",
      "fr": "Appareil ECG professionnel conçu pour répondre aux exigences cliniques modernes, offrant une acquisition de signal de haute qualité, une analyse ECG avancée et une interface utilisateur intuitive.",
      "az": "Müasir klinik tələblərə cavab vermək üçün hazırlanmış, yüksək keyfiyyətli siqnal qəbulu, təkmil EKQ analizi və intuitiv istifadəçi interfeysi təklif edən peşəkar EKQ cihazı."
    },
    "image": "/mindray-r700-ekg.png",
    "features": {
      "tr": [
        "7 inç Yüksek Çözünürlüklü Renkli Dokunmatik Ekran",
        "Gelişmiş EKG Analiz ve Yorumlama Algoritması",
        "Kağıtsız Önizleme ve Kolay Veri Depolama",
        "Hızlı ve Sessiz Termal Yazıcı Desteği",
        "USB ve LAN Arayüzleri ile Kolay Klinik Entegrasyon"
      ],
      "en": [
        "7-inch High-Resolution Color Touchscreen",
        "Advanced ECG Analysis and Interpretation Algorithm",
        "Paperless Preview and Easy Data Storage",
        "Fast and Quiet Thermal Printer Support",
        "Easy Clinical Integration with USB and LAN Interfaces"
      ],
      "fr": [
        "Écran tactile couleur haute résolution de 7 pouces",
        "Algorithme d'analyse et d'interprétation ECG avancé",
        "Aperçu sans papier et stockage facile des données",
        "Support d'imprimante thermique rapide et silencieuse",
        "Intégration clinique facile avec les interfaces USB et LAN"
      ],
      "az": [
        "7 düymlük yüksək rezolyusiyalı rəngli sensor ekran",
        "Təkmil EKQ analizi və interpretasiya alqoritmi",
        "Kağızsız önizləmə və asan məlumat saxlama",
        "Sürətli və səssiz termal printer dəstəyi",
        "USB və LAN interfeysləri ilə asan klinik inteqrasiya"
      ]
    }
  },
  {
    "id": "edan-se1202-ekg",
    "name": {
      "tr": "Edan SE-1202 12 Kanallı EKG Cihazı",
      "en": "Edan SE-1202 12-Channel ECG Machine",
      "fr": "Appareil ECG 12 canaux Edan SE-1202",
      "az": "Edan SE-1202 12 Kanallı EKQ Cihazı"
    },
    "category": "ECG",
    "type": "hospital",
    "description": {
      "tr": "Geniş renkli ekranı, üstün sinyal filtreleme teknolojisi ve kapsamlı analiz paketleri ile hastaneler ve klinikler için ideal tanısal 12 kanallı EKG cihazı.",
      "en": "Diagnostic 12-channel ECG machine ideal for hospitals and clinics with its large color screen, superior signal filtering technology, and comprehensive analysis packages.",
      "fr": "Appareil ECG diagnostique à 12 canaux idéal pour les hôpitaux et les cliniques avec son grand écran couleur, sa technologie supérieure de filtrage du signal et ses progiciels d'analyse complets.",
      "az": "Böyük rəngli ekranı, üstün siqnal filtrləmə texnologiyası və hərtərəfli analiz paketləri ile xəstəxanalar və klinikalar üçün ideal diaqnostik 12 kanallı EKQ cihazı."
    },
    "image": "/edan-se1202-ekg.jpg",
    "features": {
      "tr": [
        "10.1 inç Katlanabilir Renkli Dokunmatik Ekran",
        "Alfanümerik Klavye ve Tek Dokunuşla Hızlı İşlem",
        "12 Kanallı Eşzamanlı Dalga Formu Edinimi ve Analizi",
        "Gelişmiş Filtreleme (EMG, AC ve Sürüklenme Filtreleri)",
        "Barkod Okuyucu ve Kablosuz Ağ Bağlantı Desteği"
      ],
      "en": [
        "10.1-inch Foldable Color Touchscreen",
        "Alphanumeric Keyboard and One-Touch Quick Operation",
        "12-Channel Simultaneous Waveform Acquisition and Analysis",
        "Advanced Filtering (EMG, AC, and Drift Filters)",
        "Barcode Reader and Wireless Network Connectivity Support"
      ],
      "fr": [
        "Écran tactile couleur pliable de 10,1 pouces",
        "Clavier alphanumérique et opération rapide à une touche",
        "Acquisition et analyse simultanées des formes d'onde à 12 canaux",
        "Filtrage avancé (filtres EMG, CA et dérive)",
        "Prise en charge du lecteur de codes-barres et de la connectivité réseau sans fil"
      ],
      "az": [
        "10.1 düymlük qatlana bilən rəngli sensor ekran",
        "Alfanumerik klaviatura və bir toxunuşla sürətli əməliyyat",
        "12 kanallı sinxron dalğa forması əldə edilməsi və analizi",
        "Təkmil filtrləmə (EMG, AC və sürüşmə filtrləri)",
        "Barkod oxuyucu və simsiz şəbəkə qoşulma dəstəyi"
      ]
    }
  },
  {
    "id": "mindray-umec-series",
    "name": {
      "tr": "Mindray uMec 100/120/150 Hastabaşı Monitörü",
      "en": "Mindray uMec 100/120/150 Patient Monitor",
      "fr": "Moniteur patient Mindray uMec 100/120/150",
      "az": "Mindray uMec 100/120/150 Yataq Başı Monitoru"
    },
    "category": "Monitor",
    "type": "hospital",
    "description": {
      "tr": "Farklı klinik ihtiyaçlara cevap verebilen uMec 100, 120 ve 150 modellerini tek bir seride toplayan, üst düzey güvenilirlik ve kullanım kolaylığı sunan gelişmiş hastabaşı monitörü.",
      "en": "Advanced patient monitor series bringing together uMec 100, 120, and 150 models to meet diverse clinical needs, offering high reliability and ease of use.",
      "fr": "Série de moniteurs patient avancés réunissant les modèles uMec 100, 120 et 150 pour répondre aux divers besoins cliniques, offrant une grande fiabilité et une grande facilité d'utilisation.",
      "az": "Müxtəlif klinik ehtiyacları ödəmək üçün uMec 100, 120 və 150 modellərini tək bir seriyada birləşdirən, yüksək etibarlılıq və istifadə asanlığı təklif edən təkmil yataq başı monitoru."
    },
    "image": "/umec-100-120-150.png",
    "features": {
      "tr": [
        "10.4 / 12.1 / 15 inç Ekran Boyutu Seçenekleri (Dokunmatik Opsiyonlu)",
        "Akıllı Parametre Algılama ve Gelişmiş Filtreleme",
        "Geniş Açıdan İzlenebilen Ergonomik Ekran Tasarımı",
        "Entegre Kablosuz Bağlantı ve Klinik İzleme Desteği",
        "Düşük Güç Tüketimi ve Fansız Sessiz Çalışma"
      ],
      "en": [
        "10.4 / 12.1 / 15-inch Display Size Options (Touchscreen Optional)",
        "Smart Parameter Detection and Advanced Filtering",
        "Ergonomic Screen Design Viewable from Wide Angles",
        "Integrated Wireless Connectivity and Clinical Monitoring Support",
        "Low Power Consumption and Fanless Quiet Operation"
      ],
      "fr": [
        "Options de taille d'écran de 10,4 / 12,1 / 15 pouces (tactile en option)",
        "Détection intelligente des paramètres et filtrage avancé",
        "Conception d'écran ergonomique visible sous de grands angles",
        "Connectivité sans fil intégrée et support de surveillance clinique",
        "Faible consommation d'énergie et fonctionnement silencieux sans ventilateur"
      ],
      "az": [
        "10.4 / 12.1 / 15 düymlük ekran ölçüsü seçimləri (Sensorlu ekran opsiyonu)",
        "Ağıllı parametr aşkarlama və qabaqcıl filtrləmə",
        "Geniş bucaqdan izlənə bilən ergonomik ekran dizaynı",
        "İnteqrasiya edilmiş simsiz qoşulma və klinik monitorinq dəstəyi",
        "Aşağı enerji istehlakı və ventilyatorsuz səssiz işləmə"
      ]
    }
  },
  {
    "id": "edan-cx-series",
    "name": {
      "tr": "Edan CX10/12/15 Hastabaşı Monitörü",
      "en": "Edan CX10/12/15 Patient Monitor",
      "fr": "Moniteur patient Edan CX10/12/15",
      "az": "Edan CX10/12/15 Yataq Başı Monitoru"
    },
    "category": "Monitor",
    "type": "hospital",
    "description": {
      "tr": "Ameliyathane, yoğun bakım ve acil servisler için tasarlanmış, CX10, CX12 ve CX15 modelleriyle farklı ekran boyutları ve üstün tanısal ölçüm kalitesi sunan modüler hastabaşı monitörü serisi.",
      "en": "Modular patient monitor series designed for operating rooms, intensive care units, and emergency departments, offering different screen sizes (CX10/CX12/CX15) and superior diagnostic measurement quality.",
      "fr": "Série de moniteurs patient modulaires conçue pour les blocs opératoires, les unités de soins intensifs et les services d'urgence, offrant différentes tailles d'écran (CX10/CX12/CX15) et une qualité de mesure diagnostique supérieure.",
      "az": "Əməliyyat otağı, reanimasiya və təcili yardım şöbələri üçün hazırlanmış, CX10, CX12 və CX15 modelləri ilə fərqli ekran ölçüləri və üstün diaqnostik ölçmə keyfiyyəti təklif edən modulyar yataq başı monitoru seriyası."
    },
    "image": "/edan-cx-10-12-15.png",
    "features": {
      "tr": [
        "Modüler Tasarım ve Kolay Parametre Genişletme Seçenekleri",
        "Gelişmiş EKG, SpO2, NIBP, Solunum ve Sıcaklık Ölçümleri",
        "Opsiyonel Çoklu IBP, CO2 ve Anestezi Gazı Ölçüm Modülleri",
        "Yüksek Çözünürlüklü Parlak Dokunmatik Ekran Arayüzü",
        "Merkezi Monitör Sistemi Entegrasyonu ve Veri Aktarımı"
      ],
      "en": [
        "Modular Design and Easy Parameter Expansion Options",
        "Advanced ECG, SpO2, NIBP, Respiration, and Temperature Measurements",
        "Optional Multi-IBP, CO2, and Anesthetic Gas Measurement Modules",
        "High-Resolution Bright Touchscreen Interface",
        "Central Monitoring System Integration and Data Transfer"
      ],
      "fr": [
        "Conception modulaire et options faciles d'extension des paramètres",
        "Mesures avancées d'ECG, SpO2, PNI, respiration et température",
        "Modules de mesure multi-IBP, CO2 et gaz anesthésiques en option",
        "Interface tactile lumineuse haute résolution",
        "Intégration du système de surveillance central et transfert de données"
      ],
      "az": [
        "Modulyar dizayn və asan parametr genişləndirmə seçimləri",
        "Təkmil EKQ, SpO2, NIBP, Tənəffüs və Temperatur ölçmələri",
        "Könüllü çoxlu IBP, CO2 və anesteziya qazı ölçmə modulları",
        "Yüksək rezolyusiyalı parlaq sensor ekran interfeysi",
        "Mərkəzi monitor sistemi inteqrasiyası və məlumat ötürülməsi"
      ]
    }
  },
  {
    "id": "tasinabilir-endoskopi-sistemi",
    "name": {
      "tr": "Taşınabilir Veteriner Endoskopi Sistemi",
      "en": "Portable Veterinary Endoscopy System",
      "fr": "Système d'endoscopie vétérinaire portable",
      "az": "Portativ Baytarlıq Endoskopiya Sistemi"
    },
    "category": "Endovision",
    "type": "veterinary",
    "description": {
      "tr": "Veteriner hekimlikte tanı ve tedavi prosedürleri için özel olarak geliştirilmiş, yüksek çözünürlüklü görüntüleme kalitesi, entegre LED ışık kaynağı ve taşınabilir hafif tasarımı ile hem klinik hem de saha şartlarında mükemmel sonuçlar sunan profesyonel endoskopi cihazı.",
      "en": "Professional endoscopy system specially developed for diagnostic and therapeutic procedures in veterinary medicine, offering excellent results in both clinic and field conditions with its high-resolution imaging quality, integrated LED light source, and portable lightweight design.",
      "fr": "Système d'endoscopie professionnel spécialement développé pour les procédures diagnostiques et thérapeutiques en médecine vétérinaire, offrant d'excellents résultats en clinique et sur le terrain grâce à sa qualité d'imagerie haute résolution, sa source lumineuse LED intégrée et sa conception portable et légère.",
      "az": "Baytarlıq təbabətində diaqnostika və müalicə prosedurları üçün xüsusi olaraq hazırlanmış, yüksək rezolyusiyalı təsvir keyfiyyəti, inteqrasiya olunmuş LED işıq mənbəyi və portativ yüngül dizaynı ilə həm klinika, həm də sahə şəraitində mükəmməl nəticələr təqdim edən peşəkar endoskopiya cihazı."
    },
    "image": "/tasinabilir-endoskopi-sistemi.png",
    "features": {
      "tr": [
        "Yüksek Çözünürlüklü Görüntü Sensörü ve Net Görüş Alışı",
        "Entegre Yüksek Yoğunluklu LED Işık Kaynağı",
        "Sahada Kolaylık Sağlayan Uzun Ömürlü Dahili Batarya",
        "Hafif, Ergonomik ve Kolay Taşınabilir Kompakt Kasa",
        "Suya ve Toza Dayanıklı Prob Yapısı ile Güvenli Kullanım"
      ],
      "en": [
        "High-Resolution Image Sensor and Clear Visual Output",
        "Integrated High-Intensity LED Light Source",
        "Long-Lasting Built-in Battery for Convenient Field Use",
        "Lightweight, Ergonomic, and Easily Portable Compact Housing",
        "Water and Dust Resistant Probe Structure for Safe Operation"
      ],
      "fr": [
        "Capteur d'image haute résolution et rendu visuel clair",
        "Source lumineuse LED intégrée à haute intensité",
        "Batterie intégrée longue durée pour une utilisation pratique sur le terrain",
        "Boîtier compact léger, ergonomique et facilement portable",
        "Structure de sonde résistante à l'eau et à la poussière pour un fonctionnement sûr"
      ],
      "az": [
        "Yüksək Rezolyusiyalı Şəkil Sensoru və Net Vizual Çıxış",
        "İnteqrasiya edilmiş Yüksək İntensivlikli LED İşıq Mənbəyi",
        "Sahədə Rahatlıq təmin edən Uzunömürlü Daxili Batareya",
        "Yüngül, Erqonomik və Asan Daşına bilən Kompakt Korpus",
        "Təhlükəsiz İstifadə üçün Suya və Toza Davamlı Prob Quruluşu"
      ]
    }
  },
  {
    "id": "karl-storz-4k-endovizyon-sistemi",
    "name": {
      "tr": "Karl Storz 4K Endovizyon Sistemi",
      "en": "Karl Storz 4K Endovision System",
      "fr": "Système d'endovision 4K Karl Storz",
      "az": "Karl Storz 4K Endoviziya Sistemi"
    },
    "category": "Endovision",
    "type": "hospital",
    "description": {
      "tr": "Ameliyathaneler için en yüksek standartlarda tasarlanmış, ultra yüksek çözünürlüklü 4K görüntüleme kalitesi, mükemmel renk doğruluğu ve üstün derinlik algısı sunan son teknoloji endovizyon sistemi kulesi.",
      "en": "State-of-the-art endovision system tower designed to the highest standards for operating rooms, offering ultra-high-definition 4K imaging quality, excellent color accuracy, and superior depth perception.",
      "fr": "Tour de système d'endovision de pointe conçue selon les normes les plus élevées pour les blocs opératoires, offrant une qualité d'imagerie 4K ultra-haute définition, une excellente précision des couleurs et une perception supérieure de la profondeur.",
      "az": "Əməliyyatxanalar üçün ən yüksək standartlarda hazırlanmış, ultra yüksək keyfiyyətli 4K görüntüləmə keyfiyyəti, mükəmməl rəng dəqiqliyi və üstün dərinlik qavrayışı təqdim edən müasir endoviziya sistemi qülləsi."
    },
    "image": "/karl-storz-4k-endovizyon-sistemi.png",
    "features": {
      "tr": [
        "Ultra HD 4K (3840 x 2160) Çözünürlük ve Kristal Netliğinde Görüntü",
        "Geniş Renk Gamı (BT.2020) ile Doğal ve Gerçekçi Renkler",
        "Gelişmiş Derinlik Algısı ve Doku Ayrımı Teknolojisi",
        "Entegre Yüksek Yoğunluklu LED/Xenon Işık Kaynağı Uyumluluğu",
        "Dokunmatik Kontrol Paneli ve Dijital Görüntü Kayıt Ünitesi"
      ],
      "en": [
        "Ultra HD 4K (3840 x 2160) Resolution and Crystal Clear Imaging",
        "Natural and Realistic Colors with Wide Color Gamut (BT.2020)",
        "Advanced Depth Perception and Tissue Differentiation Technology",
        "Compatibility with Integrated High-Intensity LED/Xenon Light Sources",
        "Touch Control Panel and Digital Image Recording Unit"
      ],
      "fr": [
        "Résolution Ultra HD 4K (3840 x 2160) et imagerie cristalline",
        "Couleurs naturelles et réalistes avec large gamme de couleurs (BT.2020)",
        "Perception avancée de la profondeur et technologie de différenciation des tissus",
        "Compatibilité avec les sources lumineuses intégrées LED/Xénon haute intensité",
        "Panneau de commande tactile et unité d'enregistrement d'images numériques"
      ],
      "az": [
        "Ultra HD 4K (3840 x 2160) Rezolyusiyası və Kristal Netliyində Görüntü",
        "Geniş Rəng Qamutu (BT.2020) ilə Təbii və Həqiqi Rənglər",
        "Qabaqcıl Dərinlik Qavrayışı və Toxuma Ayrılması Texnologiyası",
        "İnteqrasiya edilmiş Yüksək İntensivlikli LED/Xenon İşıq Mənbəyi Uyğunluğu",
        "Toxunma İdarəetmə Paneli və Rəqəmsal Görüntü Qeyd Cihazı"
      ]
    }
  },
  {
    "id": "karl-storz-spies-endovizyon-sistemi",
    "name": {
      "tr": "Karl Storz Image1 Spies Endovizyon Sistemi",
      "en": "Karl Storz Image1 Spies Endovision System",
      "fr": "Système d'endovision Spies Image1 Karl Storz",
      "az": "Karl Storz Image1 Spies Endoviziya Sistemi"
    },
    "category": "Endovision",
    "type": "hospital",
    "description": {
      "tr": "Cerrahi operasyonlarda doku kontrastını ve görünürlüğü artırmak için yenilikçi SPIES (Storz Professional Image Enhancement System) teknolojisiyle donatılmış, yüksek çözünürlüklü ve modüler endovizyon sistemi.",
      "en": "High-resolution, modular endovision system equipped with innovative SPIES (Storz Professional Image Enhancement System) technology to enhance tissue contrast and visibility in surgical procedures.",
      "fr": "Système d'endovision modulaire haute résolution équipé de la technologie innovante SPIES (Storz Professional Image Enhancement System) pour améliorer le contraste tissulaire et la visibilité lors des procédures chirurgicales.",
      "az": "Cərrahi əməliyyatlarda toxuma kontrastını və görünürlüyünü artırmaq üçün innovativ SPIES (Storz Professional Image Enhancement System) texnologiyası ilə təchiz olunmuş, yüksək keyfiyyətli və modulyar endoviziya sistemi."
    },
    "image": "/karl-storz-spies-endovizyon-sistemi.png",
    "features": {
      "tr": [
        "SPIES Doku ve Kontrast Optimizasyon Teknolojisi (CLARA, CHROMA, SPECTRA)",
        "Full HD Yüksek Çözünürlüklü Kamera Kontrol Ünitesi",
        "Modüler Yapı ile Kolay Güncellenebilirlik ve Entegrasyon",
        "Özelleştirilebilir Kullanıcı Profilleri ve Hızlı Mod Geçişleri",
        "Cerrahi Monitörler ve Görüntüleme Yazılımları ile Tam Uyum"
      ],
      "en": [
        "SPIES Tissue and Contrast Optimization Technology (CLARA, CHROMA, SPECTRA)",
        "Full HD High-Resolution Camera Control Unit",
        "Modular Structure for Easy Upgrades and Integration",
        "Customizable User Profiles and Quick Mode Transitions",
        "Full Compatibility with Surgical Monitors and Imaging Software"
      ],
      "fr": [
        "Technologie d'optimisation des tissus et des contrastes SPIES (CLARA, CHROMA, SPECTRA)",
        "Unité de contrôle de caméra haute résolution Full HD",
        "Structure modulaire pour des mises à niveau et une intégration faciles",
        "Profils d'utilisateurs personnalisables et transitions de mode rapides",
        "Compatibilité totale avec les moniteurs chirurgicaux et les logiciels d'imagerie"
      ],
      "az": [
        "SPIES Toxuma və Kontrast Optimizasiyası Texnologiyası (CLARA, CHROMA, SPECTRA)",
        "Full HD Yüksək Rezolyusiyalı Kamera İdarəetmə Cihazı",
        "Asan Yenilənmə və İnteqrasiya üçün Modulyar Quruluş",
        "Fərdiləşdirilə bilən İstifadəçi Profilləri və Sürətli Rejim Keçidləri",
        "Cərrahi Monitorlar və Görüntüləmə Proqramları ilə Tam Uyğunluq"
      ]
    }
  },
  {
    "id": "shalya-dx-koter-cihazi",
    "name": {
      "tr": "Shalya DX Koter Cihazı",
      "en": "Shalya DX Electrosurgical Unit",
      "fr": "Bistouri électrique Shalya DX",
      "az": "Shalya DX Koter Cihazı"
    },
    "category": "Electrosurgery",
    "type": "hospital",
    "description": {
      "tr": "Mikroişlemci kontrollü yapısı, geniş dijital ekranı ve farklı monopolar/bipolar modları ile cerrahi müdahalelerde yüksek hassasiyet ve güvenlik sunan profesyonel 300W elektrocerrahi koter cihazı.",
      "en": "Professional 300W electrosurgical unit offering high precision and safety in surgical interventions with its microprocessor-controlled structure, large digital display, and various monopolar/bipolar modes.",
      "fr": "Bistouri électrique professionnel de 300 W offrant une grande précision et sécurité lors des interventions chirurgicales grâce à sa structure contrôlée par microprocesseur, son grand écran numérique et ses divers modes monopolaires/bipolaires.",
      "az": "Mikroprosessorla idarə olunan strukturu, geniş rəqəmsal ekranı və müxtəlif monopolyar/bipolyar rejimləri ilə cərrahi müdaxilələrdə yüksək dəqiqlik və təhlükəsizlik təklif edən peşəkar 300W elektrocərrahiyyə koter cihazı."
    },
    "image": "/shalya-dx-koter-cihazi.png",
    "features": {
      "tr": [
        "300W Maksimum Güç Çıkışı",
        "Çoklu Monopolar Kesme ve Koagülasyon Modları",
        "Hassas Bipolar Kesme ve Koagülasyon Desteği",
        "Kullanıcı Dostu Dijital Gösterge Paneli",
        "Gelişmiş Hasta Güvenliği ve Plaka Temas İzleme Sistemi"
      ],
      "en": [
        "300W Maximum Power Output",
        "Multiple Monopolar Cut and Coagulation Modes",
        "Precise Bipolar Cut and Coagulation Support",
        "User-Friendly Digital Display Panel",
        "Advanced Patient Safety and Plate Contact Monitoring System"
      ],
      "fr": [
        "Puissance de sortie maximale de 300 W",
        "Plusieurs modes de coupe et de coagulation monopolaires",
        "Support précis de coupe et de coagulation bipolaires",
        "Panneau d'affichage numérique convivial",
        "Sécurité des patients avancée et système de surveillance du contact de la plaque"
      ],
      "az": [
        "300W Maksimum Güc Çıxışı",
        "Çoxsaylı Monopolyar Kəsmə və Koaqulyasiya Rejimləri",
        "Həssas Bipolyar Kəsmə və Koaqulyasiya Dəstəyi",
        "İstifadəçi Dostu Rəqəmsal Göstərici Paneli",
        "Qabaqcıl Pasiyent Təhlükəsizliyi və Plitə Təmas Nəzarəti Sistemi"
      ]
    }
  },
  {
    "id": "shalya-vista-koter-cihazi",
    "name": {
      "tr": "Shalya Vista Koter Cihazı",
      "en": "Shalya Vista Electrosurgical Unit",
      "fr": "Bistouri électrique Shalya Vista",
      "az": "Shalya Vista Koter Cihazı"
    },
    "category": "Electrosurgery",
    "type": "hospital",
    "description": {
      "tr": "Akıllı geri bildirim sistemine ve damar mühürleme teknolojisine sahip, genel cerrahiden jinekoloji ve ürolojiye kadar geniş yelpazede güvenli cerrahi operasyon sağlayan yeni nesil elektrocerrahi sistemi.",
      "en": "New generation electrosurgical system featuring smart feedback system and vessel sealing technology, providing safe surgical operations across a wide spectrum from general surgery to gynecology and urology.",
      "fr": "Système d'électrochirurgie de nouvelle génération doté d'un système de rétroaction intelligent et d'une technologie de scellement des vaisseaux, offrant des opérations chirurgicales sûres dans un large spectre, de la chirurgie générale à la gynécologie et à l'urologie.",
      "az": "Ağıllı əks əlaqə sisteminə və damar möhürləmə texnologiyasına malik, ümumi cərrahiyyədən ginekologiya və urologiyaya qədər geniş spektri əhatə edən təhlükəsiz cərrahi əməliyyatları təmin edən yeni nəsil elektrocərrahiyyə sistemi."
    },
    "image": "/shalya-vista-koter-cihazi.png",
    "features": {
      "tr": [
        "Akıllı Güç Geri Bildirim ve Ayarlama Sistemi",
        "Dahili Vessel Sealing (Damar Mühürleme) Fonksiyonu",
        "Monopolar ve Bipolar Modlarda Yüksek Kararlılık",
        "Kullanıcı Dostu Renkli Dokunmatik Arayüz",
        "Hata Kodu Tanımlama ve Güvenlik Alarmları"
      ],
      "en": [
        "Smart Power Feedback and Regulation System",
        "Built-in Vessel Sealing Functionality",
        "High Stability in Monopolar and Bipolar Modes",
        "User-Friendly Color Touchscreen Interface",
        "Error Code Diagnostic and Safety Alarms"
      ],
      "fr": [
        "Système intelligent de rétroaction et de régulation de la puissance",
        "Fonctionnalité de scellement de vaisseaux intégrée",
        "Haute stabilité en modes monopolaire et bipolaire",
        "Interface utilisateur conviviale à écran tactile couleur",
        "Diagnostic des codes d'erreur et alarmes de sécurité"
      ],
      "az": [
        "Ağıllı Güc Əks Əlaqə və Tənzimləmə Sistemi",
        "Daxili Vessel Sealing (Damar Möhürləmə) Funksiyası",
        "Monopolyar və Bipolyar Rejimlərdə Yüksək Sabitlik",
        "İstifadəçi Dostu Rəngli Toxunma İnterfeysi",
        "Xəta Kodu Diaqnostikası və Təhlükəsizlik Siqnalları"
      ]
    }
  },
  {
    "id": "force-triad-koter-cihazi",
    "name": {
      "tr": "Force Triad Koter Cihazı",
      "en": "Force Triad Electrosurgical Platform",
      "fr": "Plateforme d'électrochirurgie Force Triad",
      "az": "Force Triad Koter Cihazı"
    },
    "category": "Electrosurgery",
    "type": "hospital",
    "description": {
      "tr": "Monopolar elektrocerrahi, bipolar koagülasyon ve LigaSure damar kapama teknolojilerini tek bir platformda birleştiren, dünya çapında referans kabul edilen çok fonksiyonlu gelişmiş koter ünitesi.",
      "en": "World-class multifunctional electrosurgical platform combining monopolar electrosurgery, bipolar coagulation, and LigaSure vessel sealing technologies in a single system.",
      "fr": "Plateforme d'électrochirurgie multifonctionnelle de classe mondiale combinant l'électrochirurgie monopolaire, la coagulation bipolaire et les technologies de scellement de vaisseaux LigaSure dans un seul système.",
      "az": "Monopolyar elektrocərrahiyyə, bipolyar koaqulyasiya və LigaSure damar bağlama texnologiyalarını tək bir platformada birləşdirən, dünya miqyasında istinad qəbul edilən çoxfunksiyalı təkmil koter cihazı."
    },
    "image": "/force-triad-koter-cihazi.jpeg",
    "features": {
      "tr": [
        "LigaSure Damar Mühürleme Teknolojisi (300 ms Geri Bildirim)",
        "TissueFect Doku Algılama Teknolojisi ile Kararlı Enerji İletimi",
        "Monopolar, Bipolar ve LigaSure Çıkış Portları",
        "Dokunmatik LCD Ekranlar ve Kolay Programlama",
        "Tekerlekli Orijinal Taşıma Standı ve Ayak Pedalları"
      ],
      "en": [
        "LigaSure Vessel Sealing Technology (300 ms Feedback)",
        "Stable Energy Delivery with TissueFect Tissue Sensing Technology",
        "Monopolar, Bipolar, and LigaSure Output Ports",
        "Touchscreen LCD Displays and Easy Programming",
        "Original Mobile Trolley Stand and Foot Switches"
      ],
      "fr": [
        "Technologie de scellement de vaisseaux LigaSure (rétroaction de 300 ms)",
        "Distribution d'énergie stable avec technologie de détection des tissus TissueFect",
        "Ports de sortie monopolaire, bipolaire et LigaSure",
        "Écrans LCD tactiles et programmation facile",
        "Chariot mobile d'origine et interrupteurs au pied"
      ],
      "az": [
        "LigaSure Damar Möhürləmə Texnologiyası (300 ms Əks Əlaqə)",
        "TissueFect Toxuma Aşkarlama Texnologiyası ilə Sabit Enerji Ötürülməsi",
        "Monopolyar, Bipolyar və LigaSure Çıxış Portları",
        "Toxunma LCD Ekranlar və Asan Proqramlaşdırma",
        "Orijinal Təkərli Taşıma Stendi və Ayaq Pedalları"
      ]
    }
  },
  {
    "id": "shalya-lx-120-hospital",
    "name": {
      "tr": "Shalya LX 120 Koter Cihazı",
      "en": "Shalya LX 120 Electrosurgical Unit",
      "fr": "Bistouri électrique Shalya LX 120",
      "az": "Shalya LX 120 Koter Cihazı"
    },
    "category": "Electrosurgery",
    "type": "hospital",
    "description": {
      "tr": "Klinikler ve ameliyathaneler için mikroişlemci kontrollü dijital yapısı, 120W maksimum çıkış gücü ve stabil performansı ile öne çıkan güvenilir koter ünitesi.",
      "en": "Reliable electrosurgical unit featuring a microprocessor-controlled digital architecture, 120W maximum output power, and stable performance for clinics and operating rooms.",
      "fr": "Bistouri électrique fiable doté d'une architecture numérique contrôlée par microprocesseur, d'une puissance de sortie maximale de 120 W et de performances stables pour les cliniques et les blocs opératoires.",
      "az": "Klinikalar və əməliyyatxanalar üçün mikroprosessorla idarə olunan rəqəmsal quruluşu, 120W maksimum çıxış gücü və stabil performansı ilə seçilən etibarlı koter cihazı."
    },
    "image": "/shalya-lx-120.png",
    "features": {
      "tr": [
        "120W Güvenli Çıkış Gücü",
        "Monopolar Kesme ve Koagülasyon Modları",
        "Hassas Bipolar Modu Desteği",
        "Kompakt ve Hafif Masaüstü Tasarım",
        "Dijital Güç Ayar Göstergesi"
      ],
      "en": [
        "120W Safe Output Power",
        "Monopolar Cut and Coagulation Modes",
        "Precise Bipolar Mode Support",
        "Compact and Lightweight Desktop Design",
        "Digital Power Setting Indicator"
      ],
      "fr": [
        "Puissance de sortie sûre de 120 W",
        "Modes coupe et coagulation monopolaires",
        "Support de mode bipolaire précis",
        "Conception de bureau compacte et légère",
        "Indicateur numérique de réglage de puissance"
      ],
      "az": [
        "120W Təhlükəsiz Çıxış Gücü",
        "Monopolyar Kəsmə və Koaqulyasiya Rejimləri",
        "Həssas Bipolyar Rejim Dəstəyi",
        "Yığcam və Yüngül Masaüstü Dizayn",
        "Rəqəmsal Güc Tənzimləmə Göstəricisi"
      ]
    }
  },
  {
    "id": "shalya-turoseal-tur-cihazi",
    "name": {
      "tr": "Shalya Turoseal Üroloji TUR Cihazı",
      "en": "Shalya Turoseal Urology TUR Electrosurgical Unit",
      "fr": "Bistouri électrique d'urologie TUR Shalya Turoseal",
      "az": "Shalya Turoseal Urologiya TUR Koter Cihazı"
    },
    "category": "Electrosurgery",
    "type": "hospital",
    "description": {
      "tr": "Ürolojik TUR (Transüretral Rezeksiyon) ameliyatları ve su altı kesim işlemleri için özel olarak tasarlanmış, yüksek frekanslı kararlı akım çıkışı ve gelişmiş güvenlik sistemleri sunan profesyonel üroloji koter cihazı.",
      "en": "Professional urology electrosurgical unit specially designed for urological TUR (Transurethral Resection) surgeries and underwater cutting procedures, offering high-frequency stable current output and advanced safety systems.",
      "fr": "Bistouri électrique d'urologie professionnel spécialement conçu pour les chirurgies urologiques TUR (Résection Transurétrale) et les procédures de coupe sous-marine, offrant une sortie de courant stable à haute fréquence et des systèmes de sécurité avancés.",
      "az": "Uroloji TUR (Transuretral Rezeksiya) əməliyyatları və sualtı kəsmə prosedurları üçün xüsusi olaraq hazırlanmış, yüksək tezlikli sabit cərəyan çıxışı və qabaqcıl təhlükəsizlik sistemləri təklif edən peşəkar urologiya koter cihazı."
    },
    "image": "/shalya-turoseal-tur-cihazi.png",
    "features": {
      "tr": [
        "Su Altı Kesim (TURP / TUIP) Prosedurları ile Tam Uyum",
        "Gelişmiş Doku Algılama ve Otomatik Güç Düzenleme",
        "Kanamasız Kesim ve Hassas Bipolar Koagülasyon",
        "Dokunmatik Kontrol Paneli ve Mod Hafıza Fonksiyonu",
        "Maksimum Hasta Güvenliği ve Kaçak Akım Koruması"
      ],
      "en": [
        "Full Compatibility with Underwater Cutting (TURP / TUIP) Procedures",
        "Advanced Tissue Sensing and Automatic Power Regulation",
        "Bloodless Cutting and Precise Bipolar Coagulation",
        "Touchscreen Control Panel and Mode Memory Function",
        "Maximum Patient Safety and Leakage Current Protection"
      ],
      "fr": [
        "Compatibilité totale avec les procédures de coupe sous-marine (TURP / TUIP)",
        "Détection avancée des tissus et régulation automatique de la puissance",
        "Coupe sans effusion de sang et coagulation bipolaire précise",
        "Panneau de commande tactile et fonction de mémoire de mode",
        "Sécurité maximale des patients et protection contre les courants de fuite"
      ],
      "az": [
        "Sualtı Kəsmə (TURP / TUIP) Prosedurları ilə Tam Uyğunluq",
        "Qabaqcıl Toxuma Aşkarlama və Avtomatik Güc Tənzimlənməsi",
        "Qansız Kəsmə və Həssas Bipolyar Koaqulyasiya",
        "Toxunma İdarəetmə Paneli və Rejim Yaddaş Funksiyası",
        "Maksimum Pasiyent Təhlükəsizliyi və Sızma Cərəyanından Qorunma"
      ]
    }
  },
  {
    "id": "mindray-wato-65-anestezi-cihazi",
    "name": {
      "tr": "Mindray Wato EX-65 Anestezi Cihazı",
      "en": "Mindray Wato EX-65 Anesthesia Machine",
      "fr": "Station d'anesthésie Mindray Wato EX-65",
      "az": "Mindray Wato EX-65 Anesteziya Cihazı"
    },
    "category": "Anesthesia",
    "type": "hospital",
    "description": {
      "tr": "Gelişmiş solunum modu seçenekleri, entegre fizyolojik parametre takibi ve kullanıcı dostu renkli dokunmatik ekranı ile ameliyathaneler için yüksek performans ve güvenlik sunan profesyonel anestezi cihazı.",
      "en": "Professional anesthesia machine offering high performance and safety for operating rooms with its advanced ventilation mode options, integrated physiological parameter monitoring, and user-friendly color touchscreen.",
      "fr": "Station d'anesthésie professionnelle offrant des performances élevées et une sécurité pour les blocs opératoires grâce à ses options de mode de ventilation avancées, son monitorage intégré des paramètres physiologiques et son écran tactile couleur convivial.",
      "az": "Əməliyyatxanalar üçün inkişaf etmiş tənəffüs rejimi seçimləri, inteqrasiya olunmuş fizioloji parametr nəzarəti və istifadəçi dostu rəngli sensor ekranı ilə yüksək performans və təhlükəsizlik təqdim edən peşəkar anesteziya cihazı."
    },
    "image": "/mindray-wato-65-anestezi-cihazi.jpg",
    "features": {
      "tr": [
        "12.1 inç Yüksek Çözünürlüklü Renkli Dokunmatik Ekran",
        "Gelişmiş Solunum Modları (PCV, VCV, SIMV, PSV)",
        "Hassas Akış Kontrolü ve Entegre Gaz İzleme",
        "Kompakt Solunum Devresi ile Hızlı Tepki Süresi",
        "Dahili Kesintisiz Güç Kaynağı ve Yedek Akü Desteği"
      ],
      "en": [
        "12.1-inch High-Resolution Color Touchscreen",
        "Advanced Ventilation Modes (PCV, VCV, SIMV, PSV)",
        "Precise Flow Control and Integrated Gas Monitoring",
        "Fast Response Time with Compact Breathing Circuit",
        "Built-in Uninterruptible Power Supply and Battery Backup"
      ],
      "fr": [
        "Écran tactile couleur haute résolution de 12,1 pouces",
        "Modes de ventilation avancés (PCV, VCV, SIMV, PSV)",
        "Contrôle précis du débit et surveillance intégrée des gaz",
        "Temps de réponse rapide avec circuit respiratoire compact",
        "Alimentation sans coupure intégrée et batterie de secours"
      ],
      "az": [
        "12.1 düymlük Yüksək Rezolyusiyalı Rəngli Sensor Ekran",
        "Təkmil Tənəffüs Rejimləri (PCV, VCV, SIMV, PSV)",
        "Dəqiq Axın Nəzarəti və İnteqrasiya edilmiş Qaz Nəzarəti",
        "Kompakt Tənəffüs Dövrəsi ilə Sürətli Cavab Müddəti",
        "Daxili Fasiləsiz Enerji Mənbəyi və Yedək Akkumulyator Dəstəyi"
      ]
    }
  },
  {
    "id": "mindray-wato-35-anestesi-cihazi",
    "name": {
      "tr": "Mindray Wato EX-35 Anestezi Cihazı",
      "en": "Mindray Wato EX-35 Anesthesia Machine",
      "fr": "Station d'anesthésie Mindray Wato EX-35",
      "az": "Mindray Wato EX-35 Anesteziya Cihazı"
    },
    "category": "Anesthesia",
    "type": "hospital",
    "description": {
      "tr": "Klinikler ve ameliyathaneler için kompakt tasarımı, stabil solunum performansını ve kullanım kolaylığını bir arada sunan, üst seviye klinik güvenlik standartlarına sahip anestezi sistemi.",
      "en": "Anesthesia system offering a compact design, stable ventilation performance, and ease of use for clinics and operating rooms, meeting high clinical safety standards.",
      "fr": "Système d'anesthésie offrant une conception compacte, des performances de ventilation stables et une facilité d'utilisation pour les cliniques et les blocs opératoires, répondant à des normes de sécurité clinique élevées.",
      "az": "Klinikalar və əməliyyatxanalar üçün kompakt dizaynı, sabit tənəffüs performansını və istifadə asanlığını bir arada təqdim edən, yüksək klinik təhlükəsizlik standartlarına malik anesteziya sistemi."
    },
    "image": "/mindray-wato-35-anestesi-cihazi.png",
    "features": {
      "tr": [
        "10.4 inç Dokunmatik Olmayan Renkli LCD Ekran",
        "Dinamik Gaz Akış Kompansasyonu ve Kararlı Solunum",
        "Standart VCV Solunum Modu ve PCV Opsiyonu",
        "Kolay Temizlenebilir Otoklavlanabilir Solunum Devresi",
        "Kompakt ve Ergonomik Şasi Tasarımı"
      ],
      "en": [
        "10.4-inch Non-Touch Color LCD Screen",
        "Dynamic Gas Flow Compensation and Stable Ventilation",
        "Standard VCV Ventilation Mode and PCV Option",
        "Easy-to-clean Autoclavable Breathing Circuit",
        "Compact and Ergonomic Chassis Design"
      ],
      "fr": [
        "Écran LCD couleur non tactile de 10,4 pouces",
        "Compensation dynamique du débit de gaz et ventilation stable",
        "Mode de ventilation VCV standard et option PCV",
        "Circuit respiratoire autoclavable facile à nettoyer",
        "Conception de châssis compacte et ergonomique"
      ],
      "az": [
        "10.4 düymlük Sensor Olmayan Rəngli LCD Ekran",
        "Dinamik Qaz Axını Kompensasiyası və Sabit Tənəffüs",
        "Standart VCV Tənəffüs Rejimi və PCV Seçimi",
        "Asan Təmizlənən Otoklavlana bilən Tənəffüs Dövrəsi",
        "Yığcam və Erqonomik Şassi Dizaynı"
      ]
    }
  },
  {
    "id": "drager-primus-anestezi-cihazi",
    "name": {
      "tr": "Dräger Primus Anestezi Cihazı",
      "en": "Dräger Primus Anesthesia Workstation",
      "fr": "Station d'anesthésie Dräger Primus",
      "az": "Dräger Primus Anesteziya Cihazı"
    },
    "category": "Anesthesia",
    "type": "hospital",
    "description": {
      "tr": "Ameliyathanelerde yüksek kalitede hasta izleme, hassas ventilasyon ve gelişmiş anestezi yönetimi sunan, dünya genelinde güvenilirliği ile bilinen üst düzey anestezi iş istasyonu.",
      "en": "High-end anesthesia workstation known worldwide for its reliability, offering high-quality patient monitoring, precise ventilation, and advanced anesthesia management in operating rooms.",
      "fr": "Station d'anesthésie haut de gamme connue dans le monde entier pour sa fiabilité, offrant un monitorage des patients de haute qualité, une ventilation précise et une gestion avancée de l'anesthésie dans les blocs opératoires.",
      "az": "Əməliyyatxanalarda yüksək keyfiyyətli pasiyent nəzarəti, dəqiq ventilyasiya və təkmil anesteziya idarəetməsi təqdim edən, dünya miqyasında etibarlılığı ilə tanınan yüksək səviyyəli anesteziya iş stansiyası."
    },
    "image": "/drager-primus-anestezi-cihazi.png",
    "features": {
      "tr": [
        "Elektronik Gaz Karıştırıcı ve Hassas Dozajlama",
        "Yüksek Kaliteli E-Vent Plus Servo Ventilatör Teknolojisi",
        "Gelişmiş Düşük Akışlı (Low-Flow) Anestezi Desteği",
        "Entegre Renkli Ekran ve Kolay İzleme Paneli",
        "Kapsamlı Akıllı Alarm Sistemi ve Güvenlik Protokolleri"
      ],
      "en": [
        "Electronic Gas Mixer and Precise Dosing",
        "High-Quality E-Vent Plus Servo Ventilator Technology",
        "Advanced Low-Flow Anesthesia Support",
        "Integrated Color Screen and Easy Monitoring Panel",
        "Comprehensive Smart Alarm System and Safety Protocols"
      ],
      "fr": [
        "Mélangeur de gaz électronique et dosage précis",
        "Technologie de ventilateur asservi E-Vent Plus de haute qualité",
        "Support d'anesthésie à faible débit (Low-Flow) avancé",
        "Écran couleur intégré et panneau de surveillance facile",
        "Système d'alarme intelligent complet et protocoles de sécurité"
      ],
      "az": [
        "Elektron Qaz Qarışdırıcısı və Dəqiq Dozajlama",
        "Yüksək Keyfiyyətli E-Vent Plus Servo Ventilyator Texnologiyası",
        "Təkmil Aşağı Axınlı (Low-Flow) Anesteziya Dəstəyi",
        "İnteqrasiya edilmiş Rəngli Ekran və Asan Monitorinq Paneli",
        "Kompleks Ağıllı Siqnal Sistemi və Təhlükəsizlik Protokolları"
      ]
    }
  },
  {
    "id": "drager-fabius-anestesi-cihazi",
    "name": {
      "tr": "Dräger Fabius Anestezi Cihazı",
      "en": "Dräger Fabius Anesthesia Machine",
      "fr": "Station d'anesthésie Dräger Fabius",
      "az": "Dräger Fabius Anesteziya Cihazı"
    },
    "category": "Anesthesia",
    "type": "hospital",
    "description": {
      "tr": "Güçlü elektronik pistonlu ventilatörü, modüler tasarımı ve klinik esnekliği ile bilinen, ameliyathanelerde stabil ve güvenilir performans sunan anestezi cihazı.",
      "en": "Anesthesia machine known for its powerful electronic piston ventilator, modular design, and clinical flexibility, offering stable and reliable performance in operating rooms.",
      "fr": "Station d'anesthésie connue pour son puissant ventilateur à piston électronique, sa conception modulaire et sa flexibilité clinique, offrant des performances stables et fiables dans les blocs opératoires.",
      "az": "Güclü elektron porşenli ventilyatoru, modulyar dizaynı və klinik çevikliyi ilə tanınan, əməliyyatxanalarda sabit və etibarlı performans təqdim edən anesteziya cihazı."
    },
    "image": "/drager-fabius-anestesi-cihazi.png",
    "features": {
      "tr": [
        "Elektronik Kontrollü Pistonlu Ventilatör (Gaz Gerektirmez)",
        "Yüksek Kontrastlı Renkli Ekran Arayüzü",
        "Esnek Duvar, Tavan veya Mobil Stand Montaj Seçenekleri",
        "Kolay Güncellenebilir ve Genişletilebilir Modüler Yapı",
        "Kararlı Mekanik Gaz Akışölçer Sistemi"
      ],
      "en": [
        "Electronically Controlled Piston Ventilator (Requires No Drive Gas)",
        "High-Contrast Color Display Interface",
        "Flexible Wall, Ceiling, or Mobile Stand Mounting Options",
        "Easily Upgradeable and Expandable Modular Architecture",
        "Stable Mechanical Gas Flowmeter System"
      ],
      "fr": [
        "Ventilateur à piston à commande électronique (ne nécessite aucun gaz d'entraînement)",
        "Interface d'affichage couleur à contraste élevé",
        "Options de montage flexibles sur mur, plafond ou pied mobile",
        "Architecture modulaire facilement évolutive et extensible",
        "Système de débitmètre de gaz mécanique stable"
      ],
      "az": [
        "Elektron İdarə Olunan Porşenli Ventilyator (Sürücü Qazı Tələb Etmir)",
        "Yüksək Kontrastlı Rəngli Ekran İnterfeysi",
        "Çevik Divar, Tavan və ya Mobil Stend Quraşdırma Seçimləri",
        "Asan Yenilənə bilən və Genişləndirilə bilən Modulyar Quruluş",
        "Sabit Mexaniki Qaz Axınölçən Sistemi"
      ]
    }
  },
  {
    "id": "ge-avange-s5-anestezi-cihazi",
    "name": {
      "tr": "GE Avance S5 Anestezi Cihazı",
      "en": "GE Avance S5 Anesthesia System",
      "fr": "Système d'anesthésie GE Avance S5",
      "az": "GE Avance S5 Anesteziya Cihazı"
    },
    "category": "Anesthesia",
    "type": "hospital",
    "description": {
      "tr": "Gelişmiş solunum desteği sağlayan entegre vantilatörü, hassas gaz yönetimi ve üst düzey hasta güvenliği özellikleri ile donatılmış profesyonel anestezi iş istasyonu.",
      "en": "Professional anesthesia workstation equipped with an integrated ventilator providing advanced respiratory support, precise gas management, and high-end patient safety features.",
      "fr": "Station d'anesthésie professionnelle équipée d'un respirateur intégré offrant une assistance respiratoire avancée, une gestion précise des gaz et des fonctions de sécurité des patients haut de gamme.",
      "az": "Təkmil tənəffüs dəstəyi təmin edən inteqrasiya edilmiş ventilyatoru, dəqiq qaz idarəetməsi və yüksək səviyyəli pasiyent təhlükəsizliyi xüsusiyyətləri ilə təchiz olunmuş peşəkar anesteziya iş stansiyası."
    },
    "image": "/ge-avange-s5-anestezi-cihazi.png",
    "features": {
      "tr": [
        "Gelişmiş Akıllı Havalandırma Modu Seçenekleri",
        "Düşük Akışlı Anestezi için Optimize Edilmiş Solunum Sistemi",
        "Kullanıcı Dostu Renkli Düz Panel Ekran Arayüzü",
        "Hassas Elektronik Gaz Akış Kontrolü",
        "Kompakt ve Temizliği Kolay Gelişmiş Solunum Devresi"
      ],
      "en": [
        "Advanced Smart Ventilation Mode Options",
        "Breathing System Optimized for Low-Flow Anesthesia",
        "User-Friendly Color Flat-Panel Display Interface",
        "Precise Electronic Gas Flow Control",
        "Compact and Easy-to-Clean Advanced Breathing Circuit"
      ],
      "fr": [
        "Options de mode de ventilation intelligente avancées",
        "Système respiratoire optimisé pour l'anesthésie à faible débit",
        "Interface utilisateur conviviale à écran plat couleur",
        "Contrôle précis du débit de gaz électronique",
        "Circuit respiratoire avancé compact et facile à nettoyer"
      ],
      "az": [
        "Təkmil Ağıllı Ventilyasiya Rejimi Seçimləri",
        "Aşağı Axınlı Anesteziya üçün Optimallaşdırılmış Tənəffüs Sistemi",
        "İstifadəçi Dostu Rəngli Yastı Panel Ekran İnterfeysi",
        "Dəqiq Elektron Qaz Axını Nəzarəti",
        "Yığcam və Təmizlənməsi Asan Təkmil Tənəffüs Dövrəsi"
      ]
    }
  },
  {
    "id": "ge-avange-cs2-anestesi-cihazi",
    "name": {
      "tr": "GE Avance CS2 Anestezi Cihazı",
      "en": "GE Avance CS2 Anesthesia Workstation",
      "fr": "Station d'anesthésie GE Avance CS2",
      "az": "GE Avance CS2 Anesteziya Cihazı"
    },
    "category": "Anesthesia",
    "type": "hospital",
    "description": {
      "tr": "15 inç büyüklüğündeki renkli dokunmatik ekranı, otomatik gaz kontrol yeteneği (ecoFlow) ve en hassas solunum modları ile donatılmış, ameliyathaneler için üst segment yeni nesil anestezi platformu.",
      "en": "Premium, new generation anesthesia platform for operating rooms, equipped with a 15-inch color touchscreen, automatic gas control capability (ecoFlow), and precise ventilation modes.",
      "fr": "Plateforme d'anesthésie haut de gamme de nouvelle génération pour les blocs opératoires, équipée d'un écran tactile couleur de 15 pouces, d'une capacité de contrôle automatique des gaz (ecoFlow) et de modes de ventilation précis.",
      "az": "15 düymlük rəngli sensor ekranı, avtomatik qaz idarəetmə qabiliyyəti (ecoFlow) və ən həssas tənəffüs rejimləri ilə təchiz olunmuş, əməliyyatxanalar üçün üst seqment yeni nəsil anesteziya platforması."
    },
    "image": "/ge-avange-cs2-anestesi-cihazi.png",
    "features": {
      "tr": [
        "15 inç Yüksek Çözünürlüklü Dokunmatik Ekran",
        "ecoFlow Teknolojisi ile Gaz Tüketim Optimizasyonu",
        "Carestation Entegre Akıllı Arayüz Tasarımı",
        "Akış Durumuna Göre Otomatik Ayarlanan Akıllı Solunum",
        "Yüksek Kaliteli Akışölçer ve Elektronik Dozajlama"
      ],
      "en": [
        "15-inch High-Resolution Touchscreen Display",
        "Gas Consumption Optimization with ecoFlow Technology",
        "Carestation Integrated Smart Interface Design",
        "Smart Ventilation Automatically Adjusted to Flow Status",
        "High-Quality Flowmeter and Electronic Dosing"
      ],
      "fr": [
        "Écran tactile haute résolution de 15 pouces",
        "Optimisation de la consommation de gaz avec la technologie ecoFlow",
        "Conception d'interface intelligente intégrée Carestation",
        "Ventilation intelligente ajustée automatiquement à l'état du débit",
        "Débitmètre de haute qualité et dosage électronique"
      ],
      "az": [
        "15 düymlük Yüksək Rezolyusiyalı Sensor Ekran",
        "ecoFlow Texnologiyası ilə Qaz İstehlakı Optimizasiyası",
        "Carestation İnteqrasiya edilmiş Ağıllı İnterfeys Dizaynı",
        "Axın Vəziyyətinə Görə Avtomatik Tənzimlənən Ağıllı Tənəffüs",
        "Yüksək Keyfiyyətli Axınölçən və Elektron Dozajlama"
      ]
    }
  },
  {
    "id": "drager-vaporizator",
    "name": {
      "tr": "Dräger Vaporizatör",
      "en": "Dräger Vaporizer",
      "fr": "Vaporisateur Dräger",
      "az": "Dräger Vaporizator"
    },
    "category": "Anesthesia",
    "type": "hospital",
    "description": {
      "tr": "Anestezi cihazlarında solunum havasına sıvı anestezik ajanların (İzofluran/Sevofluran) son derece hassas, kararlı ve sıcaklıktan bağımsız bir şekilde buharlaştırılarak karıştırılmasını sağlayan profesyonel vaporizatör ünitesi.",
      "en": "Professional vaporizer unit ensuring highly precise, stable, and temperature-independent vaporization and mixing of liquid anesthetic agents (Isoflurane/Sevoflurane) into the breathing air in anesthesia machines.",
      "fr": "Unité de vaporisation professionnelle assurant une vaporisation et un mélange très précis, stables et indépendants de la température des agents anesthésiques liquides (Isoflurane/Sévoflurane) dans l'air respirable des stations d'anesthésie.",
      "az": "Anesteziya cihazlarında tənəffüs havasına maye anestezik maddələrin (İzofluran/Sevofluran) son dərəcə dəqiq, sabit və temperaturdan asılı olmayaraq buxarlandırılaraq qarışdırılmasını təmin edən peşəkar vaporizator cihazı."
    },
    "image": "/drager-vaporizator.png",
    "features": {
      "tr": [
        "Sıcaklık, Akış ve Basınç Değişimlerinden Etkilenmeyen Kararlı Çıkış",
        "Farklı Anestezik Ajan Seçenekleri (Sevofluran, İzofluran vb.)",
        "Güvenli Kilitleme Sistemi (Interlock) ile Eş Zamanlı Çalışmayı Önleme",
        "Kolay ve Güvenli Doldurma Seçenekleri (Quik-Fil, Easy-Fil)",
        "Dräger Anestezi Cihazları ile Tam ve Güvenli Entegrasyon"
      ],
      "en": [
        "Stable Output Unaffected by Temperature, Flow, and Pressure Changes",
        "Different Anesthetic Agent Options (Sevoflurane, Isoflurane, etc.)",
        "Secure Interlock System to Prevent Simultaneous Operation",
        "Easy and Safe Filling Options (Quik-Fil, Easy-Fil)",
        "Full and Secure Integration with Dräger Anesthesia Machines"
      ],
      "fr": [
        "Sortie stable non affectée par les changements de température, de débit et de pression",
        "Différentes options d'agents anesthésiques (Sévoflurane, Isoflurane, etc.)",
        "Système de verrouillage sécurisé pour empêcher un fonctionnement simultané",
        "Options de remplissage simples et sûres (Quik-Fil, Easy-Fil)",
        "Intégration complète et sécurisée avec les stations d'anesthésie Dräger"
      ],
      "az": [
        "Temperatur, Axın və Təzyiq Dəyişikliklərindən Təsir Görməyən Sabit Çıxış",
        "Müxtəlif Anestezik Maddə Seçimləri (Sevofluran, İzofluran və s.)",
        "Təhlükəsiz Kilidləmə Sistemi (Interlock) ilə Eyni Vaxtda İşləməyin Qarşısının Alınması",
        "Asan Və Təhlükəsiz Doldurma Seçimləri (Quik-Fil, Easy-Fil)",
        "Dräger Anesteziya Cihazları ilə Tam və Təhlükəsiz İnteqrasiya"
      ]
    }
  },
  {
    "id": "uzumcu-opm-600n-ameliyat-masasi",
    "name": {
      "tr": "Üzümcü OPM-600N Ameliyat Masası",
      "en": "Üzümcü OPM-600N Operating Table",
      "fr": "Table d'opération Üzümcü OPM-600N",
      "az": "Üzümcü OPM-600N Əməliyyat Masası"
    },
    "category": "SurgicalTable",
    "type": "hospital",
    "description": {
      "tr": "Elektro-hidrolik tahrik sistemi, kaydırılabilir masa tablası, yüksek ağırlık taşıma kapasitesi ve modüler yapısı ile tüm cerrahi branşların ihtiyaçlarını karşılayan profesyonel ameliyat masası.",
      "en": "Professional operating table meeting the needs of all surgical specialties with its electro-hydraulic drive system, sliding tabletop, high weight capacity, and modular design.",
      "fr": "Table d'opération professionnelle répondant aux besoins de toutes les spécialités chirurgicales grâce à son système d'entraînement électro-hydraulique, son plateau coulissant, sa capacité de charge élevée et sa conception modulaire.",
      "az": "Elektro-hidravlik idarəetmə sistemi, sürüşən masa üstü, yüksək çəki tutumu və modulyar dizaynı ilə bütün cərrahi sahələrin ehtiyaclarını ödəyən peşəkar əməliyyat masası."
    },
    "image": "/uzumcu-opm-600n-ameliyat-masasi.jpg",
    "features": {
      "tr": [
        "Elektro-Hidrolik Hareket Sistemi ve Akıllı Kumanda",
        "Radyotransparan (X-Ray Geçirgen) Masa Tablası",
        "Boyuna Kayma (Sliding) Özelliği ile C-Kollu Uyumlu",
        "Modüler Baş, Sırt ve Bacak Bölümü Tasarımı",
        "Yüksek Kaliteli Paslanmaz Çelik Şasi ve Kolay Temizlik"
      ],
      "en": [
        "Electro-Hydraulic Movement System and Smart Controller",
        "Radiotranslucent (X-Ray Permeable) Tabletop",
        "Longitudinal Sliding for C-Arm Compatibility",
        "Modular Head, Back, and Leg Section Design",
        "High-Quality Stainless Steel Chassis and Easy Cleaning"
      ],
      "fr": [
        "Système de mouvement électro-hydraulique et télécommande intelligente",
        "Plateau radiotransparent (perméable aux rayons X)",
        "Coulissement longitudinal pour la compatibilité avec l'arceau chirurgical (C-Arm)",
        "Conception modulaire des sections de tête, de dossier et de jambe",
        "Châssis en acier inoxydable de haute qualité et nettoyage facile"
      ],
      "az": [
        "Elektro-Hidravlik Hərəkət Sistemi və Ağıllı Nəzarətçi",
        "Radiotransparent (X-Ray Keçirici) Masa Üstü",
        "C-Qollu Uyğunluq üçün Uzununa Sürüşmə",
        "Modulyar Baş, Bel və Ayaq Hissələrinin Dizaynı",
        "Yüksək Keyfiyyətli Paslanmayan Polad Şassi və Asan Təmizlənmə"
      ]
    }
  },
  {
    "id": "uzumcu-op-4p-ameliyat-masasi",
    "name": {
      "tr": "Üzümcü OP-4P Ameliyat Masası",
      "en": "Üzümcü OP-4P Operating Table",
      "fr": "Table d'opération Üzümcü OP-4P",
      "az": "Üzümcü OP-4P Əməliyyat Masası"
    },
    "category": "SurgicalTable",
    "type": "hospital",
    "description": {
      "tr": "Mekanik ve hidrolik kontrol mekanizması, çok açılı konumlandırma esnekliği ve dayanıklı yapısı ile genel cerrahi ve jinekoloji için ideal ve ekonomik ameliyat masası çözümü.",
      "en": "Ideal and economical operating table solution for general surgery and gynecology with its mechanical and hydraulic control mechanism, multi-angle positioning flexibility, and durable construction.",
      "fr": "Solution de table d'opération idéale et économique pour la chirurgie générale et la gynécologie grâce à son mécanisme de contrôle mécanique et hydraulique, sa flexibilité de positionnement multi-angle et sa construction durable.",
      "az": "Mexaniki və hidravlik idarəetmə mexanizmi, çoxbucaqlı yerləşdirmə çevikliyi və davamlı quruluşu ilə ümumi cərrahiyyə və ginekologiya üçün ideal və iqtisadi əməliyyat masası həlli."
    },
    "image": "/uzumcu-op-4p-ameliyat-masasi.jpg",
    "features": {
      "tr": [
        "Hidrolik Yükseklik Ayarı (Ayak Pedallı)",
        "Mekanik Dişli Sistemi ile Trendelenburg ve Yanal Eğim",
        "Radyografi ve C-Kollu Görüntüleme Uyumluluğu",
        "Dayanıklı Antistatik Poliüretan Minder Seti",
        "Fren Mekanizmalı Mobil Tekerlek Sistemi"
      ],
      "en": [
        "Hydraulic Height Adjustment (via Foot Pedal)",
        "Trendelenburg and Lateral Tilt via Mechanical Gears",
        "Radiography and C-Arm Imaging Compatibility",
        "Durable Antistatic Polyurethane Mattress Set",
        "Mobile Caster System with Brake Mechanism"
      ],
      "fr": [
        "Réglage hydraulique de la hauteur (via pédale)",
        "Positions Trendelenburg et inclinaison latérale via engrenages mécaniques",
        "Compatibilité avec la radiographie et l'imagerie par arceau (C-Arm)",
        "Matelas en polyuréthane antistatique et durable",
        "Système de roulettes mobiles avec mécanisme de freinage"
      ],
      "az": [
        "Hidravlik Hündürlük Tənzimlənməsi (Ayaq Pedalı vasitəsilə)",
        "Mexaniki Ötürücülər vasitəsilə Trendelenburq və Yan Maililik",
        "Radioqrafiya və C-Qollu Görüntüləmə Uyğunluğu",
        "Davamlı Antistatik Poliuretan Döşək Dəsti",
        "Əyləc Mexanizmli Mobil Təkər Sistemi"
      ]
    }
  },
  {
    "id": "medsan-ameliyat-masasi",
    "name": {
      "tr": "Medsan Ameliyat Masası",
      "en": "Medsan Operating Table",
      "fr": "Table d'opération Medsan",
      "az": "Medsan Əməliyyat Masası"
    },
    "category": "SurgicalTable",
    "type": "hospital",
    "description": {
      "tr": "Sağlam gövde tasarımı, kolay ayarlanabilir bölmeleri ve hijyenik yapısı ile küçük cerrahi odaları, günübirlik klinikler ve acil müdahale odaları için mükemmel ameliyat masası.",
      "en": "Excellent operating table for minor surgical suites, outpatient clinics, and emergency intervention rooms with its robust body design, easily adjustable sections, and hygienic construction.",
      "fr": "Excellente table d'opération pour les salles de chirurgie mineure, les cliniques ambulatoires et les salles d'intervention d'urgence grâce à sa conception robuste, ses sections facilement réglables et sa construction hygiénique.",
      "az": "Möhkəm gövdə dizaynı, asan tənzimlənən hissələri və gigiyenik quruluşu ilə kiçik cərrahi otaqlar, ambulator klinikalar və təcili müdaxilə otaqları üçün mükəmməl əməliyyat masası."
    },
    "image": "/medsan-ameliyat-masasi.jpeg",
    "features": {
      "tr": [
        "Mekanik Ayarlanabilir Sırt ve Ayak Bölümleri",
        "Hidrolik Pompa ile Sorunsuz Yükseklik Ayarı",
        "Paslanmaz Çelik Alt Şasi ve Kolay Temizlenebilir Yüzeyler",
        "Konforlu ve Sıvı Geçirmeyen Minder Kaplaması",
        "Farklı Cerrahi Aksesuarlar için Yan Ray Desteği"
      ],
      "en": [
        "Mechanically Adjustable Back and Foot Sections",
        "Smooth Height Adjustment via Hydraulic Pump",
        "Stainless Steel Sub-Chassis and Easy-to-Clean Surfaces",
        "Comfortable and Waterproof Mattress Coating",
        "Side Rail Support for Various Surgical Accessories"
      ],
      "fr": [
        "Sections de dossier et de pied réglables mécaniquement",
        "Réglage de la hauteur en douceur via pompe hydraulique",
        "Sous-châssis en acier inoxydable et surfaces faciles à nettoyer",
        "Revêtement de matelas confortable et imperméable",
        "Support de rail latéral pour divers accessoires chirurgicaux"
      ],
      "az": [
        "Mexaniki Tənzimlənən Bel və Ayaq Hissələri",
        "Hidravlik Nasos vasitəsilə Rahat Hündürlük Tənzimlənməsi",
        "Paslanmayan Polad Alt Şassi və Asan Təmizlənən Səthlər",
        "Rahat və Su Keçirməyən Döşək Örtüyü",
        "Müxtəlif Cərrahi Aksesuarlar üçün Yan Relk Dəstəyi"
      ]
    }
  },
  {
    "id": "uzumcu-mobil-ameliyat-lambasi",
    "name": {
      "tr": "Üzümcü Mobil Ameliyat Lambası",
      "en": "Üzümcü Mobile Surgical Light",
      "fr": "Scialytique mobile Üzümcü",
      "az": "Üzümcü Mobil Əməliyyat Lampası"
    },
    "category": "SurgicalLight",
    "type": "hospital",
    "description": {
      "tr": "Ameliyathaneler, acil müdahale odaları ve klinikler için tasarlanmış, yüksek aydınlatma gücü, batarya desteği ve kolay taşınabilir tekerlekli şasisi ile kesintisiz gölgesiz ışık sunan mobil LED ameliyat lamba sistemi.",
      "en": "Mobile LED surgical light system designed for operating rooms, emergency suites, and clinics, offering continuous shadowless light with its high illumination power, battery backup, and easily portable wheeled chassis.",
      "fr": "Système de scialytique mobile à LED conçu pour les blocs opératoires, les salles d'urgence et les cliniques, offrant une lumière sans ombre continue grâce à sa puissance d'éclairage élevée, sa batterie de secours et son châssis sur roulettes facilement transportable.",
      "az": "Əməliyyatxanalar, təcili müdaxilə otaqları və klinikalar üçün nəzərdə tutulmuş, yüksək işıqlandırma gücü, batareya dəstəyi və asan daşına bilən təkərli şassisi ilə fasiləsiz kölgəsiz işıq təqdim edən mobil LED əməliyyat lampası sistemi."
    },
    "image": "/uzumcu-mobil-ameliyat-lambasi.png",
    "features": {
      "tr": [
        "Yüksek Verimli Gölgesiz LED Teknolojisi",
        "Dahili Batarya ile Elektrik Kesintisinde Çalışma Esnekliği",
        "Ayarlanabilir Odak Çapı ve Aydınlatma Yoğunluğu",
        "360 Derece Dönebilen Kolay Yönlendirilebilir Gövde",
        "Kilit Mekanizmalı Güvenli Mobil Tekerlek Sistemi"
      ],
      "en": [
        "High-Efficiency Shadowless LED Technology",
        "Uninterrupted Operation during Power Outages via Built-in Battery",
        "Adjustable Spot Size and Illumination Intensity",
        "360-Degree Rotating Easily Positionable Arm",
        "Secure Mobile Caster System with Locking Mechanism"
      ],
      "fr": [
        "Technologie LED sans ombre à haute efficacité",
        "Fonctionnement ininterrompu lors des pannes de courant via batterie intégrée",
        "Taille du spot et intensité d'éclairage réglables",
        "Bras facilement positionnable rotatif à 360 degrés",
        "Système de roulettes mobiles sécurisé avec mécanisme de verrouillage"
      ],
      "az": [
        "Yüksək Effektivli Kölgəsiz LED Texnologiyası",
        "Daxili Batareya ilə Elektrik Kəsintilərində İşləmə Çevikliyi",
        "Tənzimlənən Fokus Sahəsi və İşıqlandırma İntensivliyi",
        "360 Dərəcə Fırlana bilən Asan İdarə Olunan Gövdə",
        "Kilid Mexanizmli Təhlükəsiz Mobil Təkər Sistemi"
      ]
    }
  },
  {
    "id": "uzumcu-dl66-2d-3-basli-ameliyat-lambasi",
    "name": {
      "tr": "Üzümcü DL66-2D 3 Başlı Ameliyat Lambası",
      "en": "Üzümcü DL66-2D Triple-Head Surgical Light",
      "fr": "Scialytique triple coupole Üzümcü DL66-2D",
      "az": "Üzümcü DL66-2D 3 Başlı Əməliyyat Lampası"
    },
    "category": "SurgicalLight",
    "type": "hospital",
    "description": {
      "tr": "Büyük cerrahi operasyonlar için tasarlanmış, üç adet aydınlatma başlığı ile çok açılı, maksimum aydınlatma gücüne sahip ve gölge oluşumunu tamamen engelleyen tavan tipi profesyonel LED ameliyat lambası.",
      "en": "Ceiling-mounted professional LED surgical light designed for major surgical procedures, featuring three illumination heads for multi-angle maximum light output, completely eliminating shadow formation.",
      "fr": "Scialytique à LED professionnel plafonnier conçu pour les interventions chirurgicales majeures, doté de trois coupoles d'éclairage pour un rendement lumineux maximal multi-angle, éliminant complètement la formation d'ombres.",
      "az": "Böyük cərrahi əməliyyatlar üçün nəzərdə tutulmuş, üç işıqlandırma başlığı ilə çoxbucaqlı, maksimum işıqlandırma gücünə malik və kölgə əmələ gəlməsini tamamilə maneə törədən tavana quraşdırılmış peşəkar LED əməliyyat lampası."
    },
    "image": "/uzumcu-dl66-2d-3-basli-ameliyat-lambasi.png",
    "features": {
      "tr": [
        "Üç Başlıklı Maksimum Gölgesiz Işık Alanı",
        "Yüksek Işık Yoğunluğu (Her Başlıkta Ayrı Kontrol)",
        "Doğal Gün Işığı Renk Sıcaklığı (CRI >96)",
        "Laminer Akış (Hava Akımı) Dostu Aerodinamik Tasarım",
        "Endoskopi Modu ve Dokunmatik Kontrol Paneli"
      ],
      "en": [
        "Triple-Head Maximum Shadowless Light Field",
        "High Illumination Intensity (Independent Control on Each Head)",
        "Natural Daylight Color Temperature (CRI >96)",
        "Laminar Flow Friendly Aerodynamic Design",
        "Endoscopy Mode and Touch Control Panel"
      ],
      "fr": [
        "Champ lumineux sans ombre maximal à triple coupole",
        "Intensité d'éclairage élevée (contrôle indépendant sur chaque coupole)",
        "Température de couleur de la lumière du jour naturelle (IRC >96)",
        "Conception aérodynamique adaptée au flux laminaire",
        "Mode endoscopie et panneau de commande tactile"
      ],
      "az": [
        "Üç Başlıqlı Maksimum Kölgəsiz İşıq Sahəsi",
        "Yüksək İşıq İntensivliyi (Hər Başlıqda Müstəqil Nəzarət)",
        "Təbii Gün İşığı Rəng Temperaturu (CRI >96)",
        "Laminar Axın (Hava Axını) Dostu Aerodinamik Dizayn",
        "Endoskopiya Rejimi və Toxunma İdarəetmə Paneli"
      ]
    }
  },
  {
    "id": "uzumcu-dl66-ameliyat-tavan-lambasi",
    "name": {
      "tr": "Üzümcü DL66 Ameliyat Tavan Lambası",
      "en": "Üzümcü DL66 Ceiling Surgical Light",
      "fr": "Scialytique plafonnier Üzümcü DL66",
      "az": "Üzümcü DL66 Əməliyyat Tavan Lampası"
    },
    "category": "SurgicalLight",
    "type": "hospital",
    "description": {
      "tr": "Modern ameliyathanelerin ihtiyaçlarına göre geliştirilmiş, tek başlıklı yüksek aydınlatma performansı sunan, derinlik odaklamalı ve gölgesiz ışık alanı sağlayan tavan tipi profesyonel LED ameliyat lambası.",
      "en": "Professional ceiling-mounted LED surgical light developed for modern operating rooms, offering high illumination performance with a single head, depth focusing, and shadowless light field.",
      "fr": "Scialytique à LED professionnel plafonnier développé pour les blocs opératoires modernes, offrant des performances d'éclairage élevées avec une seule coupole, une mise au point en profondeur et un champ lumineux sans ombre.",
      "az": "Müasir əməliyyatxanaların ehtiyaclarına uyğun olaraq hazırlanmış, tək başlıqlı yüksək işıqlandırma performansı təqdim edən, dərinlik fokuslamalı və kölgəsiz işıq sahəsi təmin edən tavana quraşdırılmış peşəkar LED əməliyyat lampası."
    },
    "image": "/uzumcu-DL66-ameliyat-tavan-lambasi.png",
    "features": {
      "tr": [
        "Yüksek Performanslı Tek Başlıklı LED Işık Kaynağı",
        "Elektronik Odaklama ve Ayarlanabilir Işık Alanı Çapı",
        "Isı Yaymayan Soğuk Işık Teknolojisi ile Uzun Operasyon Konforu",
        "Sterilize Edilebilir Tutamak ile Kolay Yönlendirme",
        "Dahili Kamera Entegrasyon Opsiyonu"
      ],
      "en": [
        "High-Performance Single-Head LED Light Source",
        "Electronic Focusing and Adjustable Light Field Diameter",
        "Long Operation Comfort with Cold Light Technology (No Heat Emission)",
        "Easy Positioning with Sterilizable Handle",
        "Built-in Camera Integration Option"
      ],
      "fr": [
        "Source lumineuse LED haute performance à coupole unique",
        "Mise au point électronique et diamètre de champ lumineux réglable",
        "Confort d'utilisation prolongé grâce à la technologie de lumière froide (pas d'émission de chaleur)",
        "Positionnement facile avec poignée stérilisable",
        "Option d'intégration de caméra intégrée"
      ],
      "az": [
        "Yüksək Performanslı Tək Başlıqlı LED İşıq Mənbəyi",
        "Elektron Fokuslama və Tənzimlənən İşıq Sahəsi Diametri",
        "İstilik Yaymayan Soyuq İşıq Texnologiyası ilə Uzun Əməliyyat Rahatlığı",
        "Sterilizasiya oluna bilən Tutacaq vasitəsilə Asan İdarəetmə",
        "Daxili Kamera İnteqrasiya Seçimi"
      ]
    }
  },
  {
    "id": "trq-2022-turnike-cihazi-otomatik",
    "name": {
      "tr": "TRQ-2022 Otomatik Turnike Cihazı",
      "en": "TRQ-2022 Automatic Tourniquet Device",
      "fr": "Tourniquet Automatique TRQ-2022",
      "az": "TRQ-2022 Avtomatik Turniket Cihazı"
    },
    "category": "Tourniquet",
    "type": "hospital",
    "description": {
      "tr": "Ameliyathane ortamında cerrahi müdahaleler sırasında kan akışını güvenli ve hassas bir şekilde durdurmak amacıyla tasarlanmış, gelişmiş çift kanallı otomatik turnike cihazı.",
      "en": "Advanced dual-channel automatic tourniquet device designed for safe and precise blood flow restriction during surgical procedures in operating rooms.",
      "fr": "Garrot automatique double canal avancé conçu pour restreindre le flux sanguin de manière sûre et précise lors d'interventions chirurgicales au bloc opératoire.",
      "az": "Əməliyyatxana mühitində cərrahi müdaxilələr zamanı qan axınını təhlükəsiz və dəqiq şəkildə dayandırmaq məqsədilə dizayn edilmiş, qabaqcıl cüt kanallı avtomatik turniket cihazı."
    },
    "image": "/TRQ-2022-turnike-cihazi-otomatik.png",
    "features": {
      "tr": [
        "Çift Kanallı Bağımsız Basınç ve Zaman Kontrolü",
        "Renkli TFT Dokunmatik Ekran ve Kolay Kullanım",
        "Gelişmiş Sesli ve Görsel Alarm Güvenlik Sistemleri",
        "Dahili Şarj Edilebilir Batarya ile Elektrik Kesintilerine Karşı Koruma",
        "Hassas Basınç Kalibrasyonu ve Otomatik Sızdırmazlık Testi"
      ],
      "en": [
        "Dual-Channel Independent Pressure and Time Control",
        "Color TFT Touch Screen and Easy Interface",
        "Advanced Audible and Visual Safety Alarm Systems",
        "Built-in Rechargeable Battery Protection Against Power Outages",
        "Precise Pressure Calibration and Automatic Leak Test"
      ],
      "fr": [
        "Contrôle indépendant de la pression et du temps sur double canal",
        "Écran tactile couleur TFT et interface conviviale",
        "Systèmes d'alarme de sécurité sonores et visuels avancés",
        "Batterie rechargeable intégrée contre les coupures de courant",
        "Étalonnage précis de la pression et test de fuite automatique"
      ],
      "az": [
        "Cüt Kanallı Müstəqil Təzyiq və Zaman Nəzarəti",
        "Rəngli TFT Toxunma Ekran və Asan İdarəetmə",
        "Qabaqcıl Səsli və Vizual Siqnalizasiya Təhlükəsizlik Sistemləri",
        "Daxili Yenidən Şarj Edilə bilən Batareya ilə Elektrik Kəsilməsinə Qarşı Qoruma",
        "Dəqiq Təzyiq Kalibrasiyası və Avtomatik Sızdırmazlıq Testi"
      ]
    }
  },
  {
    "id": "trq-2020-otomatik-turnike-cihazi",
    "name": {
      "tr": "TRQ-2020 Otomatik Turnike Cihazı",
      "en": "TRQ-2020 Automatic Tourniquet Device",
      "fr": "Garrot Automatique TRQ-2020",
      "az": "TRQ-2020 Avtomatik Turniket Cihazı"
    },
    "category": "Tourniquet",
    "type": "hospital",
    "description": {
      "tr": "Tek kanallı yapısı, kompakt ve ergonomik tasarımı ile cerrahi operasyonlarda hekimlere pratik ve güvenilir basınç kontrolü sunan otomatik turnike cihazı.",
      "en": "Single-channel automatic tourniquet device offering practical and reliable pressure control for surgeons with its compact and ergonomic design during surgical operations.",
      "fr": "Garrot automatique monocanal offrant un contrôle pratique et fiable de la pression aux chirurgiens grâce à sa conception compacte et ergonomique.",
      "az": "Tək kanallı quruluşu, kompakt və erqonomik dizaynı ilə cərrahi əməliyyatlarda həkimlərə praktik və etibarlı təzyiq nəzarəti təklif edən avtomatik turniket cihazı."
    },
    "image": "/TRQ-2020-otomatik-turnike-cihazi.png",
    "features": {
      "tr": [
        "Tek Kanallı Güvenilir Basınç Kontrol Sistemi",
        "Kompakt Tasarım ve Kolay Taşınabilirlik (Masaüstü ve Stand Uyumlu)",
        "Dijital Ekran Üzerinden Basınç ve Süre Takibi",
        "Batarya Yedekleme Sistemi",
        "Aşırı Basınç Koruma Fonksiyonu"
      ],
      "en": [
        "Single-Channel Reliable Pressure Control System",
        "Compact Design and Easy Portability (Tabletop and Stand Compatible)",
        "Pressure and Time Monitoring on Digital Screen",
        "Battery Backup System",
        "Overpressure Protection Function"
      ],
      "fr": [
        "Système de contrôle de pression fiable à canal unique",
        "Conception compacte et portabilité facile (compatible table et support)",
        "Surveillance de la pression et du temps sur écran numérique",
        "Système de batterie de secours",
        "Fonction de protection contre la surpression"
      ],
      "az": [
        "Tək Kanallı Etibarlı Təzyiq Nəzarət Sistemi",
        "Kompakt Dizayn və Asan Daşına bilmə (Masaüstü və Stend Uyğunluğu)",
        "Rəqəmsal Ekran Vasitəsilə Təzyiq və Zaman İzlənməsi",
        "Batareya Ehtiyat Sistemi",
        "Həddindən Artıq Təzyiqdən Qorunma Funksiyası"
      ]
    }
  },
  {
    "id": "turnike-mansonlari",
    "name": {
      "tr": "Turnike Manşonları",
      "en": "Tourniquet Cuffs",
      "fr": "Brassards de Garrot",
      "az": "Turniket Manjetləri"
    },
    "category": "Tourniquet",
    "type": "hospital",
    "description": {
      "tr": "Farklı ekstremite boyutlarına uygun, sterilizasyona dayanıklı, sızdırmazlık garantili ve konforlu çift veya tek lümenli medikal turnike manşonları.",
      "en": "Comfortable double or single-lumen medical tourniquet cuffs, suitable for different extremity sizes, sterilization-resistant, and leak-proof.",
      "fr": "Brassards de garrot médicaux confortables à double ou simple lumière, adaptés à différentes tailles de membres, résistants à la stérilisation et étanches.",
      "az": "Müxtəlif ətrafların ölçülərinə uyğun, sterilizasiyaya davamlı, sızdırmazlıq zəmanətli və rahat cüt və ya tək lümenli tibbi turniket manjetləri."
    },
    "image": "/turnike-mansonlari.png",
    "features": {
      "tr": [
        "Çift ve Tek Lümenli Seçenekler",
        "Yumuşak Doku Dostu, Lateks İçermeyen Malzeme Yapısı",
        "Tekrar Kullanılabilir ve Kolay Temizlenebilir Tasarım",
        "Farklı Boyut Seçenekleri (Çocuk, Kol, Uyluk, Bacak)",
        "Güvenli Bağlantı Konnektörleri ve Sağlam Cırt Cırt Yapısı"
      ],
      "en": [
        "Double and Single Lumen Options",
        "Soft Tissue Friendly, Latex-Free Material Structure",
        "Reusable and Easy to Clean Design",
        "Various Size Options (Pediatric, Arm, Thigh, Leg)",
        "Secure Connection Connectors and Strong Velcro Structure"
      ],
      "fr": [
        "Options double et simple lumière",
        "Structure matérielle sans latex respectueuse des tissus mous",
        "Conception réutilisable et facile à nettoyer",
        "Différentes options de taille (pédiatrique, bras, cuisse, jambe)",
        "Connecteurs de connexion sécurisés et structure velcro solide"
      ],
      "az": [
        "Cüt və Tək Lümenli Seçimlər",
        "Yumşaq Toxuma Dostu, Lateksiz Material Quruluşu",
        "Yenidən İstifadə edilə bilən və Asan Təmizlənən Dizayn",
        "Müxtəlif Ölçü Seçimləri (Uşaq, Qol, Bud, Ayaq)",
        "Təhlükəsiz Bağlantı Konnektorları və Sağlam Cırt-cırt Quruluşu"
      ]
    }
  },
  {
    "id": "mindray-d30-defibrilator-cihazi",
    "name": {
      "tr": "Mindray BeneHeart D30 Defibrilatör Cihazı",
      "en": "Mindray BeneHeart D30 Defibrillator",
      "fr": "Défibrillateur Mindray BeneHeart D30",
      "az": "Mindray BeneHeart D30 Defibrilyator Cihazı"
    },
    "category": "Defibrillator",
    "type": "hospital",
    "description": {
      "tr": "Acil servis ve yoğun bakım ortamlarında en zorlu koşullara dayanacak şekilde geliştirilmiş, bifazik teknolojiye sahip, yüksek kaliteli izleme ve defibrilasyon sunan profesyonel defibrilatör/monitör cihazı.",
      "en": "Professional defibrillator/monitor equipped with biphasic technology, offering high-quality monitoring and defibrillation, designed to withstand the toughest conditions in emergency and intensive care environments.",
      "fr": "Défibrillateur/moniteur professionnel équipé de la technologie biphasique, offrant une surveillance et une défibrillation de haute qualité, conçu pour résister aux conditions les plus difficiles dans les environnements d'urgence et de soins intensifs.",
      "az": "Təcili yardım və reanimasiya mühitlərində ən çətin şərtlərə tab gətirəcək şəkildə hazırlanmış, bifazik texnologiyaya malik, yüksək keyfiyyətli izləmə və defibrilyasiya təklif edən peşəkar defibrilyator/monitor cihazı."
    },
    "image": "/mindray-d30-defibrilator-cihazi.png",
    "features": {
      "tr": [
        "Gelişmiş Bifazik Dalga Formu Teknolojisi",
        "Manuel Defibrilasyon, AED, Pacing ve Çok Parametreli Monitörizasyon",
        "Renkli ve Yüksek Çözünürlüklü TFT Ekran",
        "Hızlı Enerji Şarjı ve Yüksek Kapasiteli Batarya",
        "Kompakt, Dayanıklı ve Kolay Taşınabilir Tasarım"
      ],
      "en": [
        "Advanced Biphasic Waveform Technology",
        "Manual Defibrillation, AED, Pacing, and Multi-Parameter Monitoring",
        "Color and High-Resolution TFT Display",
        "Fast Energy Charge and High-Capacity Battery",
        "Compact, Durable, and Easy to Carry Design"
      ],
      "fr": [
        "Technologie avancée de forme d'onde biphasique",
        "Défibrillation manuelle, DEA, stimulation cardiaque et surveillance multiparamétrique",
        "Écran TFT couleur haute résolution",
        "Charge d'énergie rapide et batterie haute capacité",
        "Conception compacte, durable et facile à transporter"
      ],
      "az": [
        "Qabaqcıl Bifazik Dalğa Forması Texnologiyası",
        "Manuel Defibrilyasiya, AED, Pacing və Çox Parametrli Monitorinq",
        "Rəngli və Yüksək Rezolyusiyalı TFT Ekran",
        "Tez Enerji Şarjı və Yüksək Tutumlu Batareya",
        "Kompakt, Davamlı və Asan Daşına bilən Dizayn"
      ]
    }
  },
  {
    "id": "mindray-u-serisi-infuzyon-ve-siringa-pompasi",
    "name": {
      "tr": "Mindray U Serisi İnfüzyon ve Şırınga Pompası",
      "en": "Mindray U Series Infusion and Syringe Pump",
      "fr": "Pompe d'infusion et de seringue Mindray Série U",
      "az": "Mindray U Seriyası İnfüziya və Şprits Pompası"
    },
    "category": "InfusionPump",
    "type": "hospital",
    "description": {
      "tr": "Klinik uygulamalarda yüksek doğruluk oranı, renkli dokunmatik ekranı ve gelişmiş akıllı algoritmaları ile hastanın güvenliğini ön planda tutan profesyonel infüzyon ve şırınga pompası.",
      "en": "Professional infusion and syringe pump featuring high accuracy, a color touch screen, and advanced smart algorithms designed to prioritize patient safety in clinical applications.",
      "fr": "Pompe d'infusion et de seringue professionnelle offrant une grande précision, un écran tactile couleur et des algorithmes intelligents avancés conçus pour donner la priorité à la sécurité des patients dans les applications cliniques.",
      "az": "Klinik tətbiqlərdə yüksək dəqiqlik dərəcəsi, rəngli sensor ekranı və inkişaf etmiş ağıllı alqoritmləri ilə xəstənin təhlükəsizliyini ön planda tutan peşəkar infüziya və şprits pompası."
    },
    "image": "/mindray-u-serisi-infuzyon-ve-siringa-pompasi.png",
    "features": {
      "tr": [
        "Yüksek İnfüzyon Doğruluğu (Hassas Sıvı ve İlaç İletimi)",
        "Renkli Dokunmatik LCD Ekran ve Kullanıcı Dostu Arayüz",
        "Gelişmiş Tıkanıklık Basıncı ve Hava Algılama Sensörleri",
        "Kompakt ve Farklı Pompa Modüllerinin Üst Üste Takılabilme Özelliği",
        "Uzun Ömürlü Şarj Edilebilir Batarya ile Kesintisiz İletim"
      ],
      "en": [
        "High Infusion Accuracy (Precise Fluid & Drug Delivery)",
        "Color Touch LCD Screen and User-Friendly Interface",
        "Advanced Occlusion Pressure and Air Bubble Detection Sensors",
        "Compact and Stackable Modular Design for Multiple Pumps",
        "Continuous Delivery with Long-life Rechargeable Battery"
      ],
      "fr": [
        "Grande précision d'infusion (débit précis de fluides et de médicaments)",
        "Écran couleur LCD tactile et interface conviviale",
        "Capteurs avancés de pression d'occlusion et de détection de bulles d'air",
        "Conception modulaire compacte et empilable pour plusieurs pompes",
        "Débit continu avec batterie rechargeable à longue durée de vie"
      ],
      "az": [
        "Yüksək İnfüziya Dəqiqliyi (Dəqiq Maye və Dərman Ötürülməsi)",
        "Rəngli Sensorlu LCD Ekran və İstifadəçi Dostu İnterfeys",
        "Qabaqcıl Tıxanıqlıq Təzyiqi və Hava Aşkarlama Sensorları",
        "Kompakt və Müxtəlif Pompa Modullarının Üst-üstə Quraşdırılma Xüsusiyyəti",
        "Uzunömürlü Yenidən Şarj Edilə bilən Batareya ilə Kəsilməz Ötürülmə"
      ]
    }
  },
  {
    "id": "mindray-esp-infusion-pompasi",
    "name": {
      "tr": "Mindray ESP İnfüzyon Pompası",
      "en": "Mindray ESP Infusion Pump",
      "fr": "Pompe d'infusion Mindray ESP",
      "az": "Mindray ESP İnfüziya Pompası"
    },
    "category": "InfusionPump",
    "type": "hospital",
    "description": {
      "tr": "Yoğun bakım ve anestezi uygulamaları için özel olarak tasarlanmış, geniş ilaç kütüphanesine sahip, hassas doz ayarı ve güvenli infüzyon protokollerini destekleyen gelişmiş infüzyon pompası.",
      "en": "Advanced infusion pump specially designed for intensive care and anesthesia applications, featuring a comprehensive drug library, precise dosage configuration, and supporting secure infusion protocols.",
      "fr": "Pompe d'infusion avancée spécialement conçue pour les applications de soins intensifs et d'anesthésie, dotée d'une bibliothèque de médicaments complète, d'une configuration posologique précise et prenant en charge des protocoles d'infusion sécurisés.",
      "az": "Reanimasiya və anesteziya tətbiqləri üçün xüsusi olaraq hazırlanmış, geniş dərman kitabxanasına malik, dəqiq doza tənzimlənməsi və təhlükəsiz infüziya protokollarını dəstəkləyən təkmil infüziya pompası."
    },
    "image": "/mindray-esp-infusion-pompasi.png",
    "features": {
      "tr": [
        "Yoğun Bakım ve Anestezi İçin Hassas Dozlama Seçenekleri",
        "Entegre İlaç Kütüphanesi ve Güvenli Sınır Değerleri",
        "Çoklu İnfüzyon Modu Desteği (Hız, Zaman, Ağırlık, Damla)",
        "Kapsamlı Sesli ve Görsel Alarm Uyarı Sistemi",
        "Serum Askısı ve Duvar Bağlantı Aparatları ile Kolay Entegrasyon"
      ],
      "en": [
        "Precise Dosing Options for Intensive Care & Anesthesia",
        "Integrated Drug Library and Safety Limits Configuration",
        "Multiple Infusion Mode Support (Rate, Time, Weight, Drip)",
        "Comprehensive Audio and Visual Alarm Warning System",
        "Easy Integration with IV Pole and Wall Mount Bracket Options"
      ],
      "fr": [
        "Options de dosage précises pour les soins intensifs et l'anesthésie",
        "Bibliothèque de médicaments intégrée et configuration des limites de sécurité",
        "Prise en charge de plusieurs modes d'infusion (débit, temps, poids, goutte)",
        "Système complet d'alarme sonore et visuelle",
        "Intégration facile avec potence d'infusion et options de support mural"
      ],
      "az": [
        "Reanimasiya və Anesteziya Üçün Dəqiq Dozalama Seçimləri",
        "İnteqra edilmiş Dərman Kitabxanası və Təhlükəsiz Limit Dəyərləri",
        "Çoxlu İnfüziya Rejimi Dəstəyi (Sürət, Zaman, Çəki, Damla)",
        "Hərtərəfli Səsli və Vizual Siqnal Xəbərdarlıq Sistemi",
        "Serum Askısı və Divar Bağlantı Aparatları ilə Asan İnteqrasiya"
      ]
    }
  },
  {
    "id": "artroskopi-optigi",
    "name": {
      "tr": "Artroskopi Optiği",
      "en": "Arthroscopy Optics",
      "fr": "Optique d'arthroscopie",
      "az": "Artroskopiya Optikası"
    },
    "category": "EndoscopyTelescopes",
    "type": "hospital",
    "description": {
      "tr": "Eklem içi cerrahi ve tanısal işlemler için tasarlanmış yüksek çözünürlüklü, dayanıklı artroskopik teleskop.",
      "en": "High-resolution, durable arthroscopic telescope designed for intra-articular surgical and diagnostic procedures.",
      "fr": "Télescope arthroscopique durable et haute résolution conçu pour les procédures chirurgicales et diagnostiques intra-articulaires.",
      "az": "Oynaq daxili cərrahi və diaqnostik prosedurlar üçün hazırlanmış yüksək keyfiyyətli, davamlı artroskopik teleskop."
    },
    "image": "/Artroskopi_Optigi.png",
    "features": {
      "tr": [
        "Farklı açı seçenekleri (0°, 30°, 45°, 70°)",
        "Otoklavlanabilir dayanıklı paslanmaz çelik gövde",
        "Yüksek kaliteli fiber optik ışık iletimi",
        "Geniş görüş açısı ve yüksek derinlik algısı"
      ],
      "en": [
        "Different angle options (0°, 30°, 45°, 70°)",
        "Autoclavable durable stainless steel body",
        "High-quality fiber optic light transmission",
        "Wide field of view and high depth perception"
      ],
      "fr": [
        "Différentes options d'angle (0°, 30°, 45°, 70°)",
        "Corps durable en acier inoxydable autoclavable",
        "Transmission lumineuse en fibre optique de haute qualité",
        "Large champ de vision et grande perception de la profondeur"
      ],
      "az": [
        "Fərqli bucaq seçimləri (0°, 30°, 45°, 70°)",
        "Otoklavlana bilən davamlı paslanmaz polad gövdə",
        "Yüksək keyfiyyətli fiber optik işıq ötürülməsi",
        "Geniş baxış bucağı və yüksək dərinlik qavrayışı"
      ]
    }
  },
  {
    "id": "storz-laparoskopi-optigi",
    "name": {
      "tr": "Storz Laparoskopi Optiği",
      "en": "Storz Laparoscopy Optics",
      "fr": "Optique de laparoscopie Storz",
      "az": "Storz Laparoskopiya Optikası"
    },
    "category": "EndoscopyTelescopes",
    "type": "hospital",
    "description": {
      "tr": "Karın içi cerrahi operasyonlarında üstün netlik ve geniş görüş alanı sağlayan yüksek kaliteli Storz laparoskopi teleskobu.",
      "en": "High-quality Storz laparoscopy telescope providing superior clarity and wide field of view in intra-abdominal surgical procedures.",
      "fr": "Télescope de laparoscopie Storz de haute qualité offrant une clarté supérieure et un large champ de vision dans les procédures chirurgicales intra-abdominales.",
      "az": "Qarın boşluğu cərrahiyyə əməliyyatlarında üstün aydınlıq ve geniş baxış sahəsi təmin edən yüksək keyfiyyetli Storz laparoskopiya teleskopu."
    },
    "image": "/storz_laporoskopi_optigi.png",
    "features": {
      "tr": [
        "HD görüntü kalitesi ve mükemmel renk doğruluğu",
        "10 mm ve 5 mm çap seçenekleri",
        "0° ve 30° yönlendirme açıları",
        "Distorsiyonsuz kenar keskinliği"
      ],
      "en": [
        "HD image quality and excellent color accuracy",
        "10 mm and 5 mm diameter options",
        "0° and 30° direction of view",
        "Distortion-free edge sharpness"
      ],
      "fr": [
        "Qualité d'image HD et excellente précision des couleurs",
        "Options de diamètre 10 mm et 5 mm",
        "Direction de vue 0° et 30°",
        "Netteté des bords sans distorsion"
      ],
      "az": [
        "HD təsvir keyfiyyəti ve mükəmməl rəng dəqiqliyi",
        "10 mm və 5 mm diametr seçimləri",
        "0° və 30° yönləndirmə bucaqları",
        "Distorsiyasız kənar kəskinliyi"
      ]
    }
  },
  {
    "id": "olympus-uroloji-optigi",
    "name": {
      "tr": "Olympus Üroloji Optiği",
      "en": "Olympus Urology Optics",
      "fr": "Optique d'urologie Olympus",
      "az": "Olympus Urologiya Optikası"
    },
    "category": "EndoscopyTelescopes",
    "type": "hospital",
    "description": {
      "tr": "Ürolojik endoskopik müdahaleler ve tanı işlemleri için yüksek kontrastlı ve keskin görüntülü Olympus üroloji optiği.",
      "en": "High-contrast and sharp-image Olympus urology optics for urological endoscopic interventions and diagnostics.",
      "fr": "Optique d'urologie Olympus à contraste élevé et image nette pour les interventions endoscopiques urologiques et les diagnostics.",
      "az": "Uroloji endoskopik müdaxilələr və diaqnostik prosedurlar üçün yüksək kontrastlı və kəskin təsvirli Olympus urologiya optikası."
    },
    "image": "/Olmypus_uroloji_optigi.png",
    "features": {
      "tr": [
        "Mükemmel görüntü netliği ve parlaklık",
        "Gelişmiş optik mercek teknolojisi",
        "Otoklava dayanıklı uzun ömürlü yapı",
        "Çizilmeye karşı dayanıklı safir ön cam"
      ],
      "en": [
        "Excellent image clarity and brightness",
        "Advanced optical lens technology",
        "Autoclave resistant long-lasting structure",
        "Scratch-resistant sapphire front glass"
      ],
      "fr": [
        "Clarté d'image et luminosité excellentes",
        "Technologie avancée de lentille optique",
        "Structure durable résistante à l'autoclave",
        "Verre frontal en saphir résistant aux rayures"
      ],
      "az": [
        "Mükəmməl təsvir aydınlığı və parlaqlıq",
        "Təkmilləşdirilmiş optik linza texnologiyası",
        "Otoklava davamlı uzunömürlü struktur",
        "Cızılmaya davamlı sapfir ön şüşə"
      ]
    }
  },
  {
    "id": "kbb-pediatrik-optikleri",
    "name": {
      "tr": "KBB Pediatrik Optikleri",
      "en": "ENT Pediatric Optics",
      "fr": "Optiques pédiatriques ORL",
      "az": "QBB Pediatrik Optikləri"
    },
    "category": "EndoscopyTelescopes",
    "type": "hospital",
    "description": {
      "tr": "Pediatrik kulak burun boğaz muayene ve cerrahileri için ince çaplı ve travmatik olmayan yüksek çözünürlüklü teleskoplar.",
      "en": "Thin diameter, non-traumatic, high-resolution telescopes designed for pediatric ear, nose, and throat examinations and surgeries.",
      "fr": "Télescopes haute résolution de fin diamètre et non traumatiques conçus pour les examens et chirurgies pédiatriques de l'oreille, du nez et de la gorge.",
      "az": "Uşaq qulaq-burun-boğaz müayinələri və cərrahiyyəsi üçün kiçik diametrli və travmatik olmayan yüksək keyfiyyətli teleskoplar."
    },
    "image": "/kbb_pediatrik_optikleri.png",
    "features": {
      "tr": [
        "Pediatrik hastalar için ince mil çapı (2.7 mm ve altı)",
        "Farklı bakış açıları (0°, 30°, 70°)",
        "Minimum travma riski sağlayan yuvarlatılmış uç yapısı",
        "Yüksek kaliteli fiber optik ışık iletimi"
      ],
      "en": [
        "Thin shaft diameter for pediatric patients (2.7 mm and below)",
        "Different direction of view (0°, 30°, 70°)",
        "Rounded tip design ensuring minimum trauma risk",
        "High-quality fiber optic light transmission"
      ],
      "fr": [
        "Diamètre de tige fin pour patients pédiatriques (2,7 mm et moins)",
        "Différentes directions de vue (0°, 30°, 70°)",
        "Conception d'extrémité arrondie garantissant un risque de traumatisme minimal",
        "Transmission lumineuse en fibre optique de haute qualité"
      ],
      "az": [
        "Uşaq xəstələr üçün incə mil diametri (2.7 mm və aşağı)",
        "Fərqli baxış bucaqları (0°, 30°, 70°)",
        "Minimum travma riski təmin edən yuvarlaqlaşdırılmış ucluq quruluşu",
        "Yüksək keyfiyyətli fiber optik işıq ötürülməsi"
      ]
    }
  },
  {
    "id": "ofis-histeroskopi-optikleri",
    "name": {
      "tr": "Ofis Histeroskopi Optikleri",
      "en": "Office Hysteroscopy Optics",
      "fr": "Optiques d'hystéroscopie de bureau",
      "az": "Ofis Histeroskopiya Optikləri"
    },
    "category": "EndoscopyTelescopes",
    "type": "hospital",
    "description": {
      "tr": "Poliklinik ve ofis ortamında anestezi gerektirmeden tanısal histeroskopi işlemleri yapılması için tasarlanmış ince optik sistem.",
      "en": "Slim optical system designed for diagnostic hysteroscopy procedures in office and outpatient settings without anesthesia.",
      "fr": "Système optique fin conçu pour les procédures d'hystéroscopie diagnostique en cabinet et en ambulatoire sans anesthésie.",
      "az": "Ambulator və ofis şəraitində anesteziya tələb etmədən diaqnostik histeroskopiya prosedurları üçün nəzərdə tutulmuş incə optik sistem."
    },
    "image": "/ofis_histeroskopi_optikleri.png",
    "features": {
      "tr": [
        "Yüksek hasta konforu için ultra ince gövde",
        "Geniş açılı HD mercek sistemi",
        "Otoklavlanabilir paslanmaz çelik tasarım",
        "Yüksek ışık gücü ve net görüntüleme"
      ],
      "en": [
        "Ultra-slim body for high patient comfort",
        "Wide-angle HD lens system",
        "Autoclavable stainless steel design",
        "High light output and clear imaging"
      ],
      "fr": [
        "Corps ultra-fin pour un confort de patient élevé",
        "Système de lentilles HD grand angle",
        "Conception en acier inoxydable autoclavable",
        "Rendement lumineux élevé et imagerie claire"
      ],
      "az": [
        "Yüksək xəstə rahatlığı üçün ultra incə gövdə",
        "Geniş bucaqlı HD linza sistemi",
        "Otoklavlana bilən paslanmaz polad dizayn",
        "Yüksək işıq gücü ve aydın görüntüləmə"
      ]
    }
  },
  {
    "id": "storz-yakalama-forceps",
    "name": {
      "tr": "Storz Yakalama Forcepsler",
      "en": "Storz Grasping Forceps",
      "fr": "Pince de préhension Storz",
      "az": "Storz Tutma Forsepsi"
    },
    "category": "EndoscopyTelescopes",
    "type": "hospital",
    "description": {
      "tr": "Endoskopik işlemler sırasında doku veya yabancı cisimlerin güvenli bir şekilde tutulması için tasarlanmış Storz cerrahi el aleti.",
      "en": "Storz surgical hand instrument designed for secure grasping of tissues or foreign objects during endoscopic procedures.",
      "fr": "Instrument chirurgical manuel Storz conçu pour saisir en toute sécurité les tissus ou les corps étrangers lors des procédures endoscopiques.",
      "az": "Endoskopik prosedurlar zamanı toxumaların və ya yad cisimlərin təhlükəsiz şəkildə tutulması üçün nəzörder tutulmuş Storz cərrahi əl aləti."
    },
    "image": "/storz_yakalama_forceps.png",
    "features": {
      "tr": [
        "Ergonomik tutma kolu ve hassas kontrol mekanizması",
        "Yüksek dayanıklılığa sahip paslanmaz çelik yapı",
        "Tekrar kullanılabilir ve otoklavlanabilir",
        "Farklı uç seçenekleri ve uzunluklar"
      ],
      "en": [
        "Ergonomic handle and precise control mechanism",
        "High durability stainless steel structure",
        "Reusable and autoclavable",
        "Different tip options and lengths"
      ],
      "fr": [
        "Poignée ergonomique et mécanisme de contrôle précis",
        "Structure en acier inoxydable à haute durabilité",
        "Réutilisable et autoclavable",
        "Différentes options d'embouts et de longueurs"
      ],
      "az": [
        "Erqonomik tutacaq və dəqiq idarəetmə mexanizmi",
        "Yüksək davamlılığa malik paslanmaz polad quruluş",
        "Yenidən istifadə edilə bilən və otoklavlana bilən",
        "Fərqli ucluq seçimləri və uzunluqlar"
      ]
    }
  },
  {
    "id": "storz-rezektoskop-seti",
    "name": {
      "tr": "Storz Rezektoskop Seti",
      "en": "Storz Resectoscope Set",
      "fr": "Set de résectoscope Storz",
      "az": "Storz Rezektoskop Dəsti"
    },
    "category": "EndoscopyTelescopes",
    "type": "hospital",
    "description": {
      "tr": "Ürolojik ve jinekolojik cerrahi operasyonlarında doku rezeksiyonu ve koagülasyonu için tam donanımlı profesyonel rezektoskop kiti.",
      "en": "Fully equipped professional resectoscope kit for tissue resection and coagulation in urological and gynecological surgical procedures.",
      "fr": "Kit de résectoscope professionnel entièrement équipé pour la résection et la coagulation des tissus lors des procédures chirurgicales urologiques et gynécologiques.",
      "az": "Uroloji və ginekoloji cərrahiyyə əməliyyatlarında toxumaların rezeksiyası və koaqulyasiyası üçün tam təchiz olunmuş peşəkar rezektoskop dəsti."
    },
    "image": "/storz_rezektoskop_seti.png",
    "features": {
      "tr": [
        "Aktif ve pasif çalışma elemanı seçenekleri",
        "Yüksek yalıtımlı seramik kılıflar ile güvenli kullanım",
        "Sürekli irrigasyon sağlayan sıvı giriş-çıkış vanaları",
        "Geniş elektrot yelpazesi ile uyumluluk"
      ],
      "en": [
        "Active and passive working element options",
        "Safe use with highly insulated ceramic sheaths",
        "Fluid inlet-outlet valves providing continuous irrigation",
        "Compatibility with a wide range of electrodes"
      ],
      "fr": [
        "Options d'éléments de travail actifs et passifs",
        "Utilisation sûre avec des gaines en céramique hautement isolées",
        "Vannes d'entrée et de sortie de fluide assurant une irrigation continue",
        "Compatibilité avec une large gamme d'électrodes"
      ],
      "az": [
        "Aktiv və passiv iş elementi seçimləri",
        "Yüksək izolyasiyalı keramika qılafları ilə təhlükəsiz istifadə",
        "Davamlı irriqasiya təmin edən maye giriş-çıxış klapanları",
        "Geniş elektrod çeşidi ile uyğunluq"
      ]
    }
  },
  {
    "id": "uretero-reno-fiberscope",
    "name": {
      "tr": "Uretero-Reno Fiberskop (Flex-2)",
      "en": "Ureteroreno Fiberscope (Flex-2)",
      "fr": "Fibroscope urétérorénal (Flex-2)",
      "az": "Uretero-Reno Fiberskop (Flex-2)"
    },
    "category": "EndoscopyTelescopes",
    "type": "hospital",
    "description": {
      "tr": "Üreter ve böbrek içi tanı ve lazer taş kırma işlemleri için yüksek esneklik sunan üstün performanslı flexible fiberskop cihazı.",
      "en": "High-performance flexible fiberscope offering superior flexibility for diagnostic and laser stone lithotripsy procedures in the ureter and kidney.",
      "fr": "Fibroscope flexible haute performance offrant une flexibilité supérieure pour les procédures de diagnostic et de lithotripsie laser des calculs dans l'uretère et le rein.",
      "az": "Sidik axarı və böyrək daxili diaqnostika və lazer daş qırma prosedurları üçün yüksək çeviklik təklif edən üstün performanslı fleksibel fiberskop cihazı."
    },
    "image": "/uretero_reno_fiberscope.png",
    "features": {
      "tr": [
        "Çift yönlü hassas bükülebilme açısı",
        "Ultra ince yerleştirme tüpü ile kolay geçiş",
        "Yüksek yoğunluklu fiber optik görüntü demeti",
        "Lazer fiberleri ve enstrüman kanalı desteği"
      ],
      "en": [
        "Bidirectional precise deflection angle",
        "Easy insertion with ultra-thin insertion tube",
        "High-density fiber optic image bundle",
        "Laser fibers and instrument channel support"
      ],
      "fr": [
        "Angle de déflexion précis bidirectionnel",
        "Insertion facile avec un tube d'insertion ultra-fin",
        "Faisceau d'images en fibre optique haute densité",
        "Support des fibres laser et du canal d'instruments"
      ],
      "az": [
        "İki tərəfli dəqiq əyilmə bucağı",
        "Ultra incə daxiletmə borusu ilə asan keçid",
        "Yüksək sıxlıqlı fiber optik təsvir dəstəsi",
        "Lazer fiberləri və alət kanalı dəstəyi"
      ]
    }
  },
  {
    "id": "buck-flexible-nazofaringoskop",
    "name": {
      "tr": "Buck Flexible Nazofaringoskop",
      "en": "Buck Flexible Nasopharyngoscope",
      "fr": "Nasopharyngoscope flexible Buck",
      "az": "Buck Fleksibel Nazofarinqoskop"
    },
    "category": "EndoscopyTelescopes",
    "type": "hospital",
    "description": {
      "tr": "Burun boşluğu, yutak ve gırtlak muayenelerinde yüksek hasta konforu sağlayan bükülebilir esnek endoskopik cihaz.",
      "en": "Bending flexible endoscopic device providing high patient comfort during nasal cavity, pharynx, and larynx examinations.",
      "fr": "Appareil endoscopique flexible et pliable offrant un confort de patient élevé lors des examens des fosses nasales, du pharynx et du larynx.",
      "az": "Burun boşluğu, udlaq və qırtlaq müayinələrində yüksək xəstə rahatlığı təmin edən əyilə bilən fleksibel endoskopik cihaz."
    },
    "image": "/buck_flexible_nazofaringoskop.png",
    "features": {
      "tr": [
        "Üstün bükülme kabiliyeti ile geniş muayene açısı",
        "Son derece ince prob yapısı ile ağrısız penetrasyon",
        "Yüksek kaliteli görüntü aktarımı ve doğal renkler",
        "Suya dayanıklı, kolay dezenfekte edilebilir gövde"
      ],
      "en": [
        "Wide examination angle with superior bending capability",
        "Painless penetration with extremely thin probe structure",
        "High-quality image transmission and natural colors",
        "Waterproof, easy to disinfect body"
      ],
      "fr": [
        "Large angle d'examen avec une capacité de flexion supérieure",
        "Pénétration sans douleur avec une structure de sonde extrêmement fine",
        "Transmission d'images de haute qualité et couleurs naturelles",
        "Boîtier étanche et facile à désinfecter"
      ],
      "az": [
        "Üstün əyilmə qabiliyyəti ilə geniş müayinə bucağı",
        "Son dərəcə incə zond strukturu ilə ağrısız daxilolma",
        "Yüksək keyfiyyətli təsvir ötürülməsi və təbii rənglər",
        "Suya davamlı, asan dezinfeksiya edilə bilən gövdə"
      ]
    }
  },
  {
    "id": "histeroskopi-set-ekipmanlari",
    "name": {
      "tr": "Histeroskopi Set Ekipmanları",
      "en": "Hysteroscopy Set Equipments",
      "fr": "Équipements du kit d'hystéroscopie",
      "az": "Histeroskopiya Dəsti Avadanlıqları"
    },
    "category": "EndoscopyTelescopes",
    "type": "hospital",
    "description": {
      "tr": "Histeroskopik cerrahi ve tanısal işlemlerde kullanılan kılıflar, forsepsler, makaslar ve diğer yardımcı enstrümanların tamamı.",
      "en": "Complete collection of sheaths, forceps, scissors, and other auxiliary instruments used in hysteroscopic surgical and diagnostic procedures.",
      "fr": "Collection complète de gaines, pinces, ciseaux et autres instruments auxiliaires utilisés dans les procédures chirurgicales et diagnostiques d'hystéroscopie.",
      "az": "Histeroskopik cərrahiyyə və diaqnostika prosedurlarında istifadə olunan qılaflar, forsepslər, qayçılar və digər köməkçi alətlərin tam dəsti."
    },
    "image": "/histeroskopi_set_ekipmanlari.png",
    "features": {
      "tr": [
        "Dayanıklı paslanmaz çelik cerrahi enstrümanlar",
        "Farklı kılıf ve akış tipleriyle tam modüler uyumluluk",
        "Sterilizasyon ve otoklav döngülerine yüksek dayanıklılık",
        "Hassas ve ergonomik el aletleri tasarımları"
      ],
      "en": [
        "Durable stainless steel surgical instruments",
        "Full modular compatibility with different sheaths and flow types",
        "High durability to sterilization and autoclave cycles",
        "Precise and ergonomic hand instrument designs"
      ],
      "fr": [
        "Instruments chirurgicaux durables en acier inoxydable",
        "Compatibilité modulaire totale avec différentes gaines et types de flux",
        "Haute résistance aux cycles de stérilisation et d'autoclave",
        "Conceptions d'instruments manuels précises et ergonomiques"
      ],
      "az": [
        "Davamlı paslanmaz polad cərrahi alətlər",
        "Fərqli qılaf və axın tipləri ile tam modulyar uyğunluq",
        "Sterilizasiya və otoklav dövlərinə yüksək davamlılıq",
        "Dəqiq və erqonomik əl alətləri dizaynları"
      ]
    }
  },
  {
    "id": "rigid-sisteskopi-optikleri",
    "name": {
      "tr": "Rigid Sisteskopi Optikleri",
      "en": "Rigid Cystoscopy Optics",
      "fr": "Optiques de cystoscopie rigide",
      "az": "Rigid Sistoskopiya Optikləri"
    },
    "category": "EndoscopyTelescopes",
    "type": "hospital",
    "description": {
      "tr": "Mesane içi görüntüleme ve tanısal sistoskopi işlemleri için yüksek çözünürlüklü ve parlak görüntü sağlayan rijit teleskoplar.",
      "en": "Rigid telescopes providing high-resolution and bright images for intravesical imaging and diagnostic cystoscopy procedures.",
      "fr": "Télescopes rigides fournissant des images haute résolution et lumineuses pour l'imagerie intravésicale et les procédures de cystoscopie diagnostique.",
      "az": "Sidik kisəsinin daxili görüntülənməsi və diaqnostik sistoskopiya prosedurları üçün yüksək keyfiyyətli və parlaq təsvir təmin edən rigid teleskoplar."
    },
    "image": "/rigid_sisteskopi_optikleri.png",
    "features": {
      "tr": [
        "HD optik mercek teknolojisi ile kristal netliğinde görüntü",
        "Otoklavlanabilir paslanmaz çelik şasi tasarımı",
        "Çizilmelere karşı dayanıklı safir ön mercek koruması",
        "Geniş açı seçenekleri (0°, 12°, 30°, 70°)"
      ],
      "en": [
        "HD optical lens technology for crystal clear images",
        "Autoclavable stainless steel chassis design",
        "Scratch-resistant sapphire front lens protection",
        "Wide angle options (0°, 12°, 30°, 70°)"
      ],
      "fr": [
        "Technologie de lentille optique HD pour des images cristallines",
        "Conception de châssis en acier inoxydable autoclavable",
        "Protection de lentille frontale en saphir résistant aux rayures",
        "Options grand angle (0°, 12°, 30°, 70°)"
      ],
      "az": [
        "HD optik linza texnologiyası ilə kristal aydınlığında təsvir",
        "Otoklavlana bilən paslanmaz polad şassi dizaynı",
        "Cızılmaya davamlı sapfir ön linza qorunması",
        "Geniş bucaq seçimləri (0°, 12°, 30°, 70°)"
      ]
    }
  },
  {
    "id": "storz-rigid-urs",
    "name": {
      "tr": "Storz Rigid URS (Üretero-Renoskop)",
      "en": "Storz Rigid URS (Ureterorenoscope)",
      "fr": "URS Rigide Storz (Urétérorénoscope)",
      "az": "Storz Rigid URS (Uretero-Renoskop)"
    },
    "category": "EndoscopyTelescopes",
    "type": "hospital",
    "description": {
      "tr": "Üreteral taş tedavilerinde yüksek görüntü kalitesi ve enstrüman kanalı genişliği ile güvenilir Storz rijit üretero-renoskop cihazı.",
      "en": "Reliable Storz rigid ureterorenoscope device offering high image quality and wide instrument channel in ureteral stone treatments.",
      "fr": "Urétérorénoscope rigide Storz fiable offrant une qualité d'image élevée et un large canal d'instruments dans les traitements des calculs urétéraux.",
      "az": "Sidik axarı daşlarının müalicəsində yüksək təsvir keyfiyyəti və alət kanalı genişliyi ilə etibarlı Storz rigid uretero-renoskop cihazı."
    },
    "image": "/storz_rigid_urs.png",
    "features": {
      "tr": [
        "Atravmatik uç yapısı ile hastaya zarar vermeyen geçiş",
        "Çift enstrüman çalışma kanalı desteği",
        "Otoklavlanabilir yüksek mukavemetli paslanmaz gövde",
        "Yüksek çözünürlüklü entegre fiber optik görüntü iletimi"
      ],
      "en": [
        "Atraumatic tip design for safe insertion",
        "Dual instrument working channels support",
        "Autoclavable high durability stainless steel body",
        "High-resolution integrated fiber optic image transmission"
      ],
      "fr": [
        "Conception d'extrémité atraumatique pour une insertion sûre",
        "Prise en charge de deux canaux de travail d'instruments",
        "Corps en acier inoxydable autoclavable à haute durabilité",
        "Transmission d'images en fibre optique intégrée haute résolution"
      ],
      "az": [
        "Travmatik olmayan ucluq quruluşu ilə təhlükəsiz keçid",
        "Cüt alət işçi kanalı dəstəyi",
        "Otoklavlana bilən yüksək davamlılığa malik paslanmaz gövdə",
        "Yüksək keyfiyyətli inteqrasiya olunmuş fiber optik təsvir ötürülməsi"
      ]
    }
  },
  {
    "id": "richard-wolf-rigid-urs",
    "name": {
      "tr": "Richard Wolf Rigid URS",
      "en": "Richard Wolf Rigid URS",
      "fr": "URS Rigide Richard Wolf",
      "az": "Richard Wolf Rigid URS"
    },
    "category": "EndoscopyTelescopes",
    "type": "hospital",
    "description": {
      "tr": "Richard Wolf kalitesiyle tasarlanmış, üstün bükülme mukavemeti ve optik performans sunan rijit üretero-renoskop.",
      "en": "Rigid ureterorenoscope designed with Richard Wolf quality, offering superior bending strength and optical performance.",
      "fr": "Urétérorénoscope rigide conçu avec la qualité Richard Wolf, offrant une résistance à la flexion et des performances optiques supérieures.",
      "az": "Richard Wolf keyfiyyəti ilə dizayn edilmiş, üstün əyilmə müqaviməti və optik performans təqdim edən rigid uretero-renoskop."
    },
    "image": "/richard_wolf_rigid_urs.png",
    "features": {
      "tr": [
        "Bükülmelere ve kırılmalara dayanıklı gövde yapısı",
        "Yüksek çözünürlüklü fiber optik görüntü demeti ile net görünüm",
        "Çift kanal yapısı ile eş zamanlı enstrüman kullanımı",
        "Tamamen otoklavlanabilir, uzun kullanım ömürlü"
      ],
      "en": [
        "Bending and break-resistant shaft structure",
        "Clear view with high-resolution fiber optic image bundle",
        "Simultaneous instrument use with dual-channel design",
        "Fully autoclavable, long operational life"
      ],
      "fr": [
        "Structure de tige résistante aux courbures et à la rupture",
        "Vue claire avec faisceau d'images en fibre optique haute résolution",
        "Utilisation simultanée d'instruments avec conception à double canal",
        "Entièrement autoclavable, longue durée de vie opérationnelle"
      ],
      "az": [
        "Əyilmələrə və qırılmalara davamlı gövdə strukturu",
        "Yüksək rezolyusiyalı fiber optik təsvir dəstəsi ile aydın görünüş",
        "Cüt kanal quruluşu ilə eyni vaxtda alət istifadəsi",
        "Tamamilə otoklavlana bilən, uzun istifadə ömürlü"
      ]
    }
  },
  {
    "id": "bjry-rigid-urs",
    "name": {
      "tr": "BJRY Rigid URS",
      "en": "BJRY Rigid URS",
      "fr": "URS Rigide BJRY",
      "az": "BJRY Rigid URS"
    },
    "category": "EndoscopyTelescopes",
    "type": "hospital",
    "description": {
      "tr": "Dayanıklı paslanmaz çelik yapısı, hassas ince ucu ve geniş çalışma kanalı ile ekonomik ve yüksek performanslı rijit üretero-renoskop.",
      "en": "Economic and high-performance rigid ureterorenoscope featuring durable stainless steel body, delicate thin tip, and wide working channel.",
      "fr": "Urétérorénoscope rigide économique et performant doté d'un corps durable en acier inoxydable, d'une extrémité fine et délicate et d'un large canal de travail.",
      "az": "Davamlı paslanmaz polad gövdəsi, həssas incə ucluğu və geniş işçi kanalı ilə iqtisadi və yüksək performanslı rigid uretero-renoskop."
    },
    "image": "/bjry_rigid_urs.png",
    "features": {
      "tr": [
        "Ekonomik ve yüksek fiyat/performans verimliliği",
        "Hassas ve travmatik olmayan yerleştirme ucu tasarımı",
        "Yüksek kaliteli fiber optik ışık ve görüntü aktarımı",
        "Standart cerrahi kablolarla tam uyumluluk"
      ],
      "en": [
        "Economical and high price/performance efficiency",
        "Delicate and non-traumatic insertion tip design",
        "High-quality fiber optic light and image transmission",
        "Full compatibility with standard surgical cables"
      ],
      "fr": [
        "Économique et haute efficacité prix/performance",
        "Conception d'extrémité d'insertion délicate et non traumatique",
        "Transmission de lumière et d'images en fibre optique de haute qualité",
        "Compatibilité totale avec les câbles chirurgicaux standard"
      ],
      "az": [
        "İqtisadi və yüksək qiymət/performans səmərəliliyi",
        "Həssas və travmatik olmayan daxiletmə ucluğu dizaynı",
        "Yüksək keyfiyyətli fiber optik işıq və təsvir ötürülməsi",
        "Standart cərrahi kabellərlə tam uyğunluq"
      ]
    }
  }
];

export const categories = [
  "All",
  "ECG",
  "Monitor",
  "SurgicalLight",
  "Endovision",
  "EndoscopyTelescopes",
  "Electrosurgery",
  "MedicalCart",
  "Thermometer",
  "Laryngoscope",
  "CPR",
  "Stethoscope",
  "OtoscopeSpecula",
  "Negatoscope",
  "Anesthesia",
  "Ultrasound",
  "InfusionPump",
  "SurgicalTable",
  "Tourniquet",
  "Defibrillator"
];
