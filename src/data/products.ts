export interface Product {
  id: string;
  name: { tr: string; en: string };
  category: string;
  description: { tr: string; en: string };
  image: string;
  features: { tr: string[]; en: string[] };
}

export const products: Product[] = [
  {
    id: 'comen-cm1200b',
    name: {
      tr: 'Comen CM1200B 12 Kanallı EKG Cihazı',
      en: 'Comen CM1200B 12-Channel ECG Machine'
    },
    category: 'ECG',
    description: {
      tr: '12.1 inç yüksek çözünürlüklü dokunmatik renkli ekranı, klavyesi ve üstün sinyal analiz yeteneği ile teşhis süreçlerini hızlandıran gelişmiş 12 kanallı EKG cihazı.',
      en: 'Advanced 12-channel ECG machine featuring a 12.1-inch high-resolution touch color display, keyboard, and superior signal analysis capability to speed up diagnostic processes.'
    },
    image: '/Comen-cm1200b-12-kanalli.jpg',
    features: {
      tr: [
        '12.1 inç Katlanabilir Yüksek Çözünürlüklü Dokunmatik Ekran',
        'Alfanümerik Klavye ve Tek Dokunuşla Hızlı Kullanım',
        'Gelişmiş EKG Analizi ve Glasgow Yorumlama Algoritması',
        'Dahili Yüksek Hızlı Termal Yazıcı',
        'USB, LAN ve Harici Yazıcı Bağlantı Desteği'
      ],
      en: [
        '12.1-inch Foldable High-Resolution Touchscreen',
        'Alphanumeric Keyboard and One-Touch Quick Operation',
        'Advanced ECG Analysis and Glasgow Interpretation Algorithm',
        'Built-in High-Speed Thermal Printer',
        'USB, LAN and External Printer Connection Support'
      ]
    }
  },
  {
    id: 'comen-cm300',
    name: {
      tr: 'Comen CM300 3 Kanallı EKG Cihazı',
      en: 'Comen CM300 3-Channel ECG Machine'
    },
    category: 'ECG',
    description: {
      tr: 'Hassas ölçüm, taşınabilir şık tasarım ve kolay kullanım sunan profesyonel 3 kanallı EKG cihazı. Klinikler ve saha kullanımı için idealdir.',
      en: 'Professional 3-channel ECG machine offering precise measurement, portable sleek design, and easy operation. Ideal for clinics and field use.'
    },
    image: '/Comen-CM300-3-Kanalli.jpg',
    features: {
      tr: [
        '3 Kanallı Gerçek Zamanlı Kayıt ve Baskı',
        '320x240 LCD Renkli Ekran',
        'Dahili Şarj Edilebilir Lityum Pil ile Mobil Kullanım',
        'Otomatik Ölçüm ve Yorum Analizi',
        'Kompakt, Hafif ve Ergonomik Gövde'
      ],
      en: [
        '3-Channel Real-Time Recording and Printing',
        '320x240 LCD Color Screen',
        'Built-in Rechargeable Lithium Battery for Mobile Use',
        'Automatic Measurement and Interpretation Analysis',
        'Compact, Lightweight and Ergonomic Body'
      ]
    }
  },
  {
    id: 'mindray-beneheart-r12',
    name: {
      tr: 'Mindray BeneHeart R12 EKG Cihazı',
      en: 'Mindray BeneHeart R12 ECG Machine'
    },
    category: 'ECG',
    description: {
      tr: 'Çevre dostu kağıtsız çalışma modeli, üstün Glasgow algoritmalı tanı analizi ve kullanıcı dostu arayüzüyle fark yaratan 12 kanallı dijital EKG cihazı.',
      en: '12-channel digital ECG machine making a difference with its eco-friendly paperless workflow, premium Glasgow algorithm diagnostic analysis, and user-friendly interface.'
    },
    image: '/Mindray-Beneheart-r12.jpg',
    features: {
      tr: [
        '8 inç Yüksek Çözünürlüklü Renkli TFT Ekran',
        'Glasgow Algoritmalı Güvenilir Otomatik Yorumlama',
        'Kağıtsız İş Akışı: Ekranda Tam Önizleme ve PDF Dışa Aktarma',
        'Tüm Yaş Grupları (Yenidoğandan Yetişkine) İçin Analiz',
        'Dahili Hafıza ve USB Belleğe Hızlı Aktarım'
      ],
      en: [
        '8-inch High-Resolution Color TFT Display',
        'Reliable Automatic Interpretation with Glasgow Algorithm',
        'Paperless Workflow: Full Screen Preview and PDF Export',
        'Analysis for All Age Groups (Neonate to Adult)',
        'Built-in Memory and Quick Transfer to USB Drive'
      ]
    }
  },
  {
    id: 'health-plus-ie12',
    name: {
      tr: 'HEALTH PLUS İE12 Hastabaşı Monitörü',
      en: 'HEALTH PLUS iE12 Patient Monitor'
    },
    category: 'Monitor',
    description: {
      tr: '12.1 inç yüksek çözünürlüklü TFT LCD ekranı, kararlı performansı ve zengin parametre izleme özellikleri ile hastaneler ve klinikler için ideal hasta başı monitörü.',
      en: 'Ideal patient monitor for hospitals and clinics featuring a 12.1-inch high-resolution TFT LCD display, stable performance, and rich parameter monitoring features.'
    },
    image: '/Health-Plus-İE12.jpg',
    features: {
      tr: [
        '12.1 inç Renkli TFT LCD Ekran',
        'Standart Parametreler: ECG, RESP, SpO2, NIBP, TEMP, PR',
        'Yetişkin, Pediyatrik ve Yenidoğan Hastalarla Uyumlu',
        'Dahili Şarj Edilebilir Pil ile Kesintisiz İzleme',
        'Gelişmiş Alarm ve Aritmi Analiz Sistemi'
      ],
      en: [
        '12.1-inch Color TFT LCD Display',
        'Standard Parameters: ECG, RESP, SpO2, NIBP, TEMP, PR',
        'Compatible with Adult, Pediatric, and Neonatal Patients',
        'Uninterrupted Monitoring with Built-in Rechargeable Battery',
        'Advanced Alarm and Arrhythmia Analysis System'
      ]
    }
  },
  {
    id: 'health-plus-ie15',
    name: {
      tr: 'Health Plus İE15 Hastabaşı Monitörü',
      en: 'Health Plus iE15 Patient Monitor'
    },
    category: 'Monitor',
    description: {
      tr: '15 inç geniş renkli ekranı ve hassas veri ölçüm teknolojisi ile yoğun bakım ve ameliyathaneler için tasarlanmış profesyonel hasta başı monitörü.',
      en: 'Professional patient monitor designed for intensive care and operating rooms with a 15-inch large color screen and precise data measurement technology.'
    },
    image: '/Health-Plus-İE15.png',
    features: {
      tr: [
        '15 inç Geniş Renkli TFT LCD Ekran',
        'Çok Kanallı EKG Dalga Formu Ekranı',
        'Opsiyonel İleri Parametre Desteği (CO2, IBP, CO)',
        'Yüksek Kapasiteli Bellek ve Geçmiş Veri İzleme',
        'Merkezi İzleme Sistemine Kablolu/Kablosuz Bağlantı'
      ],
      en: [
        '15-inch Large Color TFT LCD Display',
        'Multi-Channel ECG Waveform Display',
        'Optional Advanced Parameters (CO2, IBP, CO)',
        'High Capacity Memory and Historical Data Review',
        'Wired/Wireless Connection to Central Monitoring System'
      ]
    }
  },
  {
    id: 'health-plus-yk-8000c',
    name: {
      tr: 'HEALTH PLUS YK-8000C Hastabaşı Monitörü',
      en: 'HEALTH PLUS YK-8000C Patient Monitor'
    },
    category: 'Monitor',
    description: {
      tr: 'Kompakt tasarımı, yüksek kontrastlı renkli ekranı ve güvenilir izleme algoritmaları ile öne çıkan pratik hasta başı monitörü.',
      en: 'Practical patient monitor standing out with its compact design, high-contrast color display, and reliable monitoring algorithms.'
    },
    image: '/Health-Plus-YK-8000C.jpg',
    features: {
      tr: [
        'Kompakt ve Taşınabilir Tasarım',
        'Hassas SpO2 ve NIBP Ölçüm Algoritması',
        'Görsel ve Sesli Akıllı Alarm Sistemi',
        'Uzun Pil Ömrü ve Güç Tasarruf Modu',
        'Kolay Kullanımlı Arayüz ve Kısayol Tuşları'
      ],
      en: [
        'Compact and Portable Design',
        'Precise SpO2 and NIBP Measurement Algorithm',
        'Visual and Audible Intelligent Alarm System',
        'Long Battery Life and Power Saving Mode',
        'Easy-to-use Interface and Shortcut Keys'
      ]
    }
  },
  {
    id: 'health-plus-yk-8000c-1',
    name: {
      tr: 'HEALTH PLUS YK-8000C-1 Hastabaşı Monitörü',
      en: 'HEALTH PLUS YK-8000C-1 Patient Monitor'
    },
    category: 'Monitor',
    description: {
      tr: 'Geliştirilmiş sensör bağlantı noktaları ve yenilenen yazılım desteği ile YK-8000C serisinin en güncel ve kararlı versiyonu.',
      en: 'The most up-to-date and stable version of the YK-8000C series with enhanced sensor ports and renewed software support.'
    },
    image: '/Health-Plus-YK-8000C-1.jpg',
    features: {
      tr: [
        'Yenilenen Güvenilir Yazılım Altyapısı',
        'Gelişmiş Parazit Filtreleme Özelliği',
        'Hızlı Ölçüm ve Kısa Tepki Süresi',
        'Dahili Termal Yazıcı Desteği (Opsiyonel)',
        'Duvar Askısı ve Mobil Sehpa ile Kolay Montaj'
      ],
      en: [
        'Renewed Reliable Software Infrastructure',
        'Advanced Interference Filtering Feature',
        'Fast Measurement and Short Response Time',
        'Built-in Thermal Printer Support (Optional)',
        'Easy Mounting with Wall Hanger and Mobile Stand'
      ]
    }
  },
  {
    id: 'karl-storz-endoflator',
    name: {
      tr: 'Karl Storz Endoflator İnsüflatör',
      en: 'Karl Storz Endoflator Insufflator'
    },
    category: 'Endovision',
    description: {
      tr: 'Laparoskopik cerrahi operasyonlarında yüksek kararlılık ve hasta güvenliği sunan profesyonel gaz insüflatör ünitesi.',
      en: 'Professional gas insufflator unit offering high stability and patient safety in laparoscopic surgical operations.'
    },
    image: '/Karl-storz-endoflator.jpg',
    features: {
      tr: [
        'Gelişmiş Gaz Akış Kontrol Sistemi',
        'Kullanıcı Dostu LCD Dijital Ekran',
        'Güvenli Basınç Limit Alarm Sistemi',
        'Isıtmalı Gaz Seçeneği ile Hasta Konforu',
        'Kompakt ve Dayanıklı Gövde Yapısı'
      ],
      en: [
        'Advanced Gas Flow Control System',
        'User-Friendly LCD Digital Display',
        'Safe Pressure Limit Alarm System',
        'Patient Comfort with Heated Gas Option',
        'Compact and Durable Body Structure'
      ]
    }
  },
  {
    id: 'karl-storz-full-sistem',
    name: {
      tr: 'Karl Storz Full Endovizyon Sistemi',
      en: 'Karl Storz Full Endovision System'
    },
    category: 'Endovision',
    description: {
      tr: 'Ameliyathaneler için eksiksiz kamera, ışık kaynağı, insüflatör ve monitörü bir araya getiren anahtar teslim endovizyon kulesi.',
      en: 'Turnkey endovision tower combining a complete camera, light source, insufflator, and monitor for operating rooms.'
    },
    image: '/Karl-storz-full-sistem.jpg',
    features: {
      tr: [
        'Yüksek Çözünürlüklü Kamera Kontrol Ünitesi',
        'Güçlü Işık Kaynağı ve Fiber Optik Kablo',
        'Entegre Tıbbi Monitör Standı ve Kule Kabini',
        'Kolay Kullanım ve Merkezi Güç Yönetimi',
        'Tüm Cerrahi Branşlara Uygun Modüler Yapı'
      ],
      en: [
        'High Resolution Camera Control Unit',
        'Powerful Light Source and Fiber Optic Cable',
        'Integrated Medical Monitor Stand and Tower Cabinet',
        'Easy Operation and Centralized Power Management',
        'Modular Structure Suitable for All Surgical Specialties'
      ]
    }
  },
  {
    id: 'karl-storz-hd-h3',
    name: {
      tr: 'Karl Storz HD H3 Kamera Kafası',
      en: 'Karl Storz HD H3 Camera Head'
    },
    category: 'Endovision',
    description: {
      tr: 'Mükemmel renk üretimi ve kristal netliğinde HD görüntü kalitesi sunan 3-Chip cerrahi kamera kafası.',
      en: '3-Chip surgical camera head offering excellent color reproduction and crystal-clear HD image quality.'
    },
    image: '/Karl-storz-HD-H3.jpg',
    features: {
      tr: [
        '3-Chip Gelişmiş Görüntü Sensörü',
        'Ergonomik ve Hafif Tasarım',
        'Programlanabilir Başlık Üzeri Kısayol Tuşları',
        'Su Geçirmez ve Sterilizasyon Uyumlu',
        'Hassas Odaklama ve Zoom Kontrolü'
      ],
      en: [
        '3-Chip Advanced Image Sensor',
        'Ergonomic and Lightweight Design',
        'Programmable Shortcuts on Camera Head',
        'Waterproof and Sterilization Compatible',
        'Precise Focusing and Zoom Control'
      ]
    }
  },
  {
    id: 'karl-storz-hd-h3z',
    name: {
      tr: 'Karl Storz HD H3-Z Zoom Kamera Kafası',
      en: 'Karl Storz HD H3-Z Zoom Camera Head'
    },
    category: 'Endovision',
    description: {
      tr: 'Dahili optik zoom özelliği ve yüksek çözünürlüklü sensör yapısıyla operasyon esnasında mükemmel detay performansı sunan kamera kafası.',
      en: 'Camera head offering excellent detail performance during operations with its built-in optical zoom feature and high-resolution sensor structure.'
    },
    image: '/Karl-storz-hd-h3z.jpg',
    features: {
      tr: [
        'Entegre Optik Paralel Zoom Yeteneği',
        'Maksimum Detay ve Renk Derinliği',
        'Sterilize Edilebilir Dayanıklı Gövde',
        'Evrensel Endoskop Bağlantı Aparatı',
        'Düşük Işık Koşullarında Üstün Performans'
      ],
      en: [
        'Integrated Optical Parallel Zoom Capability',
        'Maximum Detail and Color Depth',
        'Sterilizable Durable Body',
        'Universal Endoscope Coupling Adapter',
        'Superior Performance in Low Light Conditions'
      ]
    }
  },
  {
    id: 'karl-storz-insuflator',
    name: {
      tr: 'Karl Storz Standart İnsüflatör',
      en: 'Karl Storz Standard Insufflator'
    },
    category: 'Endovision',
    description: {
      tr: 'Klinik laparoskopi uygulamaları için kararlı basınç kontrolü sağlayan güvenilir insüflatör ünitesi.',
      en: 'Reliable insufflator unit providing stable pressure control for clinical laparoscopy applications.'
    },
    image: '/Karl-Storz-insuflator.jpg',
    features: {
      tr: [
        'Kararlı Basınç ve Akış İzleme',
        'Net Analog ve Dijital Göstergeler',
        'Kolay Bağlantı Konnektörleri',
        'Aşırı Basınç Tahliye Emniyeti',
        'Uzun Ömürlü Dayanıklı Mekanik Altyapı'
      ],
      en: [
        'Stable Pressure and Flow Monitoring',
        'Clear Analog and Digital Displays',
        'Easy Connection Connectors',
        'Overpressure Relief Safety',
        'Long-lasting Durable Mechanical Infrastructure'
      ]
    }
  },
  {
    id: 'karl-storz-power-led-175',
    name: {
      tr: 'Karl Storz Power LED 175 Işık Kaynağı',
      en: 'Karl Storz Power LED 175 Light Source'
    },
    category: 'Endovision',
    description: {
      tr: 'LED teknolojisi sayesinde uzun lamba ömrü ve düşük güç tüketimi sağlayan, gün ışığı spektrumuna yakın güçlü soğuk ışık kaynağı.',
      en: 'Powerful cold light source close to the daylight spectrum, providing long lamp life and low power consumption thanks to LED technology.'
    },
    image: '/Karl-Storz-Power-Led-175.jpg',
    features: {
      tr: [
        '175 Watt Eşdeğeri Güçlü LED Aydınlatma',
        'Lamba Değişimi Gerektirmeyen Uzun Ömürlü Yapı',
        'Dijital Işık Şiddeti Ayarı',
        'Düşük Isı Yayılımı ve Sessiz Fan Sistemi',
        'Kompakt ve Ergonomik Şasi'
      ],
      en: [
        'Powerful LED Illumination Equivalent to 175W',
        'Long Life Cycle with No Lamp Replacement Needed',
        'Digital Light Intensity Adjustment',
        'Low Heat Emission and Quiet Fan System',
        'Compact and Ergonomic Chassis'
      ]
    }
  },
  {
    id: 'karl-storz-s3',
    name: {
      tr: 'Karl Storz Image1 S3 Kamera Kontrol Ünitesi',
      en: 'Karl Storz Image1 S3 Camera Control Unit'
    },
    category: 'Endovision',
    description: {
      tr: 'Modüler mimarisi ve yüksek çözünürlüklü görüntü işleme teknolojisi ile cerrahlara benzersiz netlik sunan kamera konsolu.',
      en: 'Camera console offering unique clarity to surgeons with its modular architecture and high-resolution image processing technology.'
    },
    image: '/Karl-Storz-S3.jpg',
    features: {
      tr: [
        'Image1 S Teknolojisi ile Gelişmiş Görüntüleme modları',
        'Full HD Çözünürlük ve Canlı Renkler',
        'USB Üzerinden Doğrudan Görüntü ve Video Kaydı',
        'Farklı Kamera Kafaları ile Tam Uyumluluk',
        'Dokunmatik Ön Panel Kontrol Arayüzü'
      ],
      en: [
        'Advanced Imaging Modes with Image1 S Technology',
        'Full HD Resolution and Vivid Colors',
        'Direct Image and Video Recording via USB',
        'Full Compatibility with Various Camera Heads',
        'Touchscreen Front Panel Control Interface'
      ]
    }
  },
  {
    id: 'karl-storz-sistem',
    name: {
      tr: 'Karl Storz Endovizyon Görüntüleme Sistemi',
      en: 'Karl Storz Endovision Imaging System'
    },
    category: 'Endovision',
    description: {
      tr: 'Kamera ünitesi ve soğuk ışık kaynağını entegre bir biçimde sunan pratik endovizyon kombinasyonu.',
      en: 'Practical endovision combination presenting camera unit and cold light source in an integrated layout.'
    },
    image: '/Karl-Storz-Sistem.jpg',
    features: {
      tr: [
        'Entegre Kamera Konsolu ve Işık Kaynağı',
        'Kolay Taşınabilir Kompakt Yapı',
        'Standart Fiber Optik Kablo Uyumluluğu',
        'Hızlı Kurulum ve Kullanım Kolaylığı',
        'Güvenilir ve Kararlı Donanım Altyapısı'
      ],
      en: [
        'Integrated Camera Console and Light Source',
        'Easy-to-carry Compact Structure',
        'Standard Fiber Optic Cable Compatibility',
        'Quick Setup and Ease of Use',
        'Reliable and Stable Hardware Infrastructure'
      ]
    }
  },
  {
    id: 'karl-storz-telecam',
    name: {
      tr: 'Karl Storz Telecam Kamera Kontrol Ünitesi',
      en: 'Karl Storz Telecam Camera Control Unit'
    },
    category: 'Endovision',
    description: {
      tr: 'Poliklinikler, tanısal endoskopi ve basit cerrahi müdahaleler için ideal, klasikleşmiş ve kararlı kamera konsolu.',
      en: 'Classic and stable camera console ideal for outpatient clinics, diagnostic endoscopy, and simple surgical interventions.'
    },
    image: '/Karl-Storz-Telecam.jpg',
    features: {
      tr: [
        'Analog ve Dijital Video Çıkış Desteği',
        'Otomatik Beyaz Ayarı Teknolojisi',
        'Kompakt ve Dayanıklı Metal Şasi',
        'Kolay Anlaşılır Ön Panel Kontrolleri',
        'Uzun Ömürlü ve Kararlı Çalışma Yapısı'
      ],
      en: [
        'Analog and Digital Video Output Support',
        'Automatic White Balance Technology',
        'Compact and Durable Metal Chassis',
        'Easy-to-understand Front Panel Controls',
        'Long-lasting and Stable Operation Structure'
      ]
    }
  },
  {
    id: 'karl-storz-tricam',
    name: {
      tr: 'Karl Storz Tricam 3-Chip Kamera Kontrol Ünitesi',
      en: 'Karl Storz Tricam 3-Chip Camera Control Unit'
    },
    category: 'Endovision',
    description: {
      tr: '3 çipli kamera kafalarıyla çalışmak üzere tasarlanmış, üstün renk ayrımı ve hassas detay gücü sunan profesyonel kamera konsolu.',
      en: 'Professional camera console designed to work with 3-chip camera heads, offering superior color separation and precise detail power.'
    },
    image: '/Karl-Storz-Tricam.jpg',
    features: {
      tr: [
        '3-Chip Sensör Teknolojisi Destekli Görüntü İşleme',
        'Maksimum Renk Doğruluğu ve Kenar Netliği',
        'Gelişmiş Menü ve Ayar Seçenekleri',
        'Klavye Bağlantısı ile Hasta Bilgisi Girişi',
        'Sağlam ve Güvenilir Endüstriyel Tasarım'
      ],
      en: [
        'Image Processing Supporting 3-Chip Sensor Technology',
        'Maximum Color Accuracy and Edge Sharpness',
        'Advanced Menu and Setting Options',
        'Patient Info Input via Keyboard Connection',
        'Robust and Reliable Industrial Design'
      ]
    }
  },
  {
    id: 'karl-storz-xenon-175',
    name: {
      tr: 'Karl Storz Xenon 175 Soğuk Işık Kaynağı',
      en: 'Karl Storz Xenon 175 Cold Light Source'
    },
    category: 'Endovision',
    description: {
      tr: '175 Watt xenon ampulü ile parlak ve doğal renk spektrumuna sahip cerrahi aydınlatma sunan soğuk ışık kaynağı.',
      en: 'Cold light source offering surgical illumination with a bright and natural color spectrum via its 175W xenon bulb.'
    },
    image: '/Karl-Storz-Xenon-175-isik-kaynagi.jpg',
    features: {
      tr: [
        '175W Xenon Güçlü Ampul Teknolojisi',
        'Doğal Gün Işığı Renk Sıcaklığı',
        'Manuel Işık Şiddeti Kontrolü',
        'Kolay Değiştirilebilir Ampul Kartuşu',
        'Hava Soğutmalı Sessiz Fan Tasarımı'
      ],
      en: [
        '175W Xenon Powerful Bulb Technology',
        'Natural Daylight Color Temperature',
        'Manual Light Intensity Control',
        'Easy-to-change Bulb Cartridge',
        'Air-cooled Quiet Fan Design'
      ]
    }
  },
  {
    id: 'karl-storz-xenon-300',
    name: {
      tr: 'Karl Storz Xenon 300 Soğuk Işık Kaynağı',
      en: 'Karl Storz Xenon 300 Cold Light Source'
    },
    category: 'Endovision',
    description: {
      tr: '300 Watt yüksek güçlü xenon teknolojisi ile majör ameliyatlar ve derin cerrahi sahalar için eşsiz bir aydınlatma performansı sağlayan referans ışık kaynağı.',
      en: 'Reference light source providing unique illumination performance for major surgeries and deep surgical fields with 300W high-power xenon technology.'
    },
    image: '/Karl-Storz-Xenon-300.jpg',
    features: {
      tr: [
        '300 Watt Yüksek Güçlü Xenon Ampul',
        'Üstün Işık Akısı ve Derinlik Aydınlatması',
        'Otomatik ve Manuel Parlaklık Kontrolü',
        'Ampul Ömrü Göstergesi (Çalışma saati)',
        'Fiber Optik Kablo İçin Evrensel Giriş Portu'
      ],
      en: [
        '300 Watt High-Power Xenon Bulb',
        'Superior Luminous Flux and Depth Illumination',
        'Automatic and Manual Brightness Control',
        'Bulb Life Indicator (Operating hours)',
        'Universal Input Port for Fiber Optic Cable'
      ]
    }
  },
  {
    id: 'shalya-sigma-300',
    name: {
      tr: 'Shalya Sigma 300 Koter Cihazı',
      en: 'Shalya Sigma 300 Electrosurgical Unit'
    },
    category: 'Electrosurgery',
    description: {
      tr: '300 Watt çıkış gücü, hassas doku geri besleme sistemi ve monopolar/bipolar modları ile cerrahi operasyonlarda yüksek performanslı kesme ve koagülasyon sağlayan koter cihazı.',
      en: '300 Watt output power electrosurgical unit providing high-performance cutting and coagulation with precise tissue feedback system and monopolar/bipolar modes.'
    },
    image: '/Shalya-Sigma-Koter-300.jpg',
    features: {
      tr: [
        '300W Maksimum Çıkış Gücü',
        'Monopolar Kesim, Koagülasyon ve Bipolar Modları',
        'Doku Direnci Geri Bildirim Teknolojisi',
        'Hasta Plakası Temas İzleme Sistemi (REM)',
        'Klinik ve Cerrahi Uygulamalar İçin Hafızalı Çalışma'
      ],
      en: [
        '300W Maximum Output Power',
        'Monopolar Cut, Coagulation and Bipolar Modes',
        'Tissue Impedance Feedback Technology',
        'Patient Plate Contact Quality Monitoring (REM)',
        'Memory Settings for Clinical and Surgical Applications'
      ]
    }
  },
  {
    id: 'shalya-sigma-400',
    name: {
      tr: 'Shalya Sigma 400 Koter Cihazı',
      en: 'Shalya Sigma 400 Electrosurgical Unit'
    },
    category: 'Electrosurgery',
    description: {
      tr: '400 Watt çıkış gücü, gelişmiş damar mühürleme (vessel sealing) desteği ve dokunmatik arayüzü ile genel cerrahi ve jinekoloji ameliyatları için üst düzey koter ünitesi.',
      en: 'High-end 400 Watt electrosurgical unit with advanced vessel sealing support and touch interface designed for general surgery and gynecology procedures.'
    },
    image: '/Shalya-Sigma-Koter-400.jpg',
    features: {
      tr: [
        '400W Yüksek Çıkış Gücü ve Damar Mühürleme Modu',
        'Mikroişlemci Kontrollü Kararlı Güç Dağılımı',
        'Su Altı Kesim (TURP/Histeroskopi) Uyumluluğu',
        'Kapsamlı Hata Teşhis ve Alarm Sistemi',
        'Çift Monopolar ve Bipolar Çıkış Portları'
      ],
      en: [
        '400W High Output Power and Vessel Sealing Mode',
        'Microprocessor Controlled Stable Power Delivery',
        'Underwater Cutting (TURP/Hysteroscopy) Compatibility',
        'Comprehensive Fault Diagnosis and Alarm System',
        'Dual Monopolar and Bipolar Output Ports'
      ]
    }
  },
  {
    id: 'anestezi-arabasi',
    name: {
      tr: 'Anestezi Arabası',
      en: 'Anesthesia Cart'
    },
    category: 'MedicalCart',
    description: {
      tr: 'Ameliyathane ve anestezi uygulamaları için özel olarak tasarlanmış, çekmeceli kilit sistemine ve ilaç/sarf malzeme gözlerine sahip mobil anestezi arabası.',
      en: 'Mobile anesthesia cart specially designed for operating room and anesthesia applications, featuring lockable drawers and medicine/consumables compartments.'
    },
    image: '/anestezi-arabasi.jpg',
    features: {
      tr: [
        'Merkezi Kilitli Çekmece Sistemi',
        'Geniş İlaç ve Sarf Malzeme Bölmeleri',
        'Serum Askısı ve Atık Kutusu Aksesuarları',
        'Sessiz ve Kolay Hareket Eden Antistatik Tekerlekler',
        'Kolay Temizlenebilir Hijyenik ABS Üst Tabla'
      ],
      en: [
        'Central Locking Drawer System',
        'Spacious Medicine and Consumables Compartments',
        'IV Pole and Waste Bin Accessories',
        'Silent and Easy-to-move Antistatic Castors',
        'Easy-to-clean Hygienic ABS Top Tray'
      ]
    }
  },
  {
    id: 'crash-card-acil-arabasi',
    name: {
      tr: 'Crash Cart Acil Arabası',
      en: 'Emergency Crash Cart'
    },
    category: 'MedicalCart',
    description: {
      tr: 'Acil müdahale durumları için defibrilatör sehpası, oksijen tüpü taşıyıcısı, CPR tahtası ve hızlı açılır kilit mekanizması içeren tam donanımlı acil arabası.',
      en: 'Fully equipped emergency crash cart featuring defibrillator shelf, oxygen cylinder holder, CPR board, and quick-release breakaway lock mechanism for resuscitation scenarios.'
    },
    image: '/crash-card-acil-arabasi.jpg',
    features: {
      tr: [
        'Defibrilatör Sehpası ve Serum Askısı Entegrasyonu',
        'Hızlı Açılır Kilitli Çekmeceler (Breakaway Lock)',
        'Oksijen Tüpü Taşıma Yuvası ve CPR Tahtası',
        'Darbelere Karşı Çevre Koruma Barları',
        'Frenli Tekerlek Sistemiyle Stabil Sabitleme'
      ],
      en: [
        'Defibrillator Shelf and IV Pole Integration',
        'Quick-Release Breakaway Locked Drawers',
        'Oxygen Cylinder Holder and CPR Board',
        'Impact Protection Corner Bumpers',
        'Stable Anchoring with Braked Castor System'
      ]
    }
  },
  {
    id: 'ilac-arabasi',
    name: {
      tr: 'İlaç Arabası',
      en: 'Medicine Cart'
    },
    category: 'MedicalCart',
    description: {
      tr: 'Klinik ve servislerde hastaların günlük ilaç dağıtımı için tasarlanmış, şeffaf ilaç kutusu bölmeleri olan pratik ve güvenli ilaç arabası.',
      en: 'Practical and secure medicine cart designed for daily patient medication distribution in clinics and wards, featuring transparent pill organizer bins.'
    },
    image: '/ilac-arabasi.jpg',
    features: {
      tr: [
        'Çıkarılabilir ve Bölünebilir İlaç Çekmece Bölmeleri',
        'Güvenli Kilit Mekanizması',
        'Hafif ve Ergonomik Şasi Yapısı',
        'Paslanmaz Çelik ve ABS Malzeme Kombinasyonu',
        'İtme Kolu ile Kolay Manevra Kabiliyeti'
      ],
      en: [
        'Removable and Dividable Medication Drawers',
        'Secure Lock Mechanism',
        'Lightweight and Ergonomic Chassis Design',
        'Stainless Steel and ABS Material Combination',
        'Easy Maneuverability with Push Handle'
      ]
    }
  },
  {
    id: 'tedavi-ve-pansuman-arabasi',
    name: {
      tr: 'Tedavi ve Pansuman Arabası',
      en: 'Treatment and Dressing Cart'
    },
    category: 'MedicalCart',
    description: {
      tr: 'Pansuman ve tedavi süreçlerinde gerekli tüm pansuman sarflarını, sıvıları ve atık kovalarını bir arada barındıran hijyenik pansuman arabası.',
      en: 'Hygienic dressing cart accommodating all necessary dressing consumables, liquids, and waste buckets required for treatment procedures.'
    },
    image: '/tedavi-ve-pansuman-arabasi.jpg',
    features: {
      tr: [
        'Çift Sıra İlaç ve Sarf Gözü Bölmeleri',
        'Paslanmaz Çelik Çöp Kovası ve Evye Grubu',
        'Paslanmaz Çelik Yan Korkuluklar',
        'Darbeleri Sönümleyen Tampon Tekerlekler',
        'Yüksek Dayanımlı Paslanmaz Malzeme'
      ],
      en: [
        'Double Row Medicine and Consumable Compartments',
        'Stainless Steel Waste Bin and Basin Group',
        'Stainless Steel Side Rails',
        'Shock-absorbing Bumper Wheels',
        'High Durability Stainless Steel Material'
      ]
    }
  },
  {
    id: 'taidoc-thermometer-hospital',
    name: {
      tr: 'Taidoc Ateş Ölçer Hastane Tipi',
      en: 'Taidoc Hospital Type Thermometer'
    },
    category: 'Thermometer',
    description: {
      tr: 'Hastaneler ve yoğun klinikler için geliştirilmiş, Bluetooth/kablosuz veri aktarım desteğine sahip, hızlı ve temassız kızılötesi tıbbi ateş ölçer.',
      en: 'Fast and non-contact infrared medical thermometer developed for hospitals and busy clinics, featuring Bluetooth/wireless data transmission support.'
    },
    image: '/Taidoc-ates-olcer-hastane-tipi.png',
    features: {
      tr: [
        '1 Saniyede Hızlı ve Hassas Ölçüm',
        'Klinik Derecede Doğruluk ve Kararlılık',
        'Temassız Kızılötesi Ölçüm Teknolojisi',
        'Bluetooth Veri Aktarımı ve HBYS Entegrasyonu',
        'Geniş Hafıza Kapasitesi ve Aydınlatmalı Geniş Ekran'
      ],
      en: [
        'Fast and Precise 1-Second Measurement',
        'Clinically Proven Accuracy and Repeatability',
        'Non-Contact Infrared Measurement Technology',
        'Bluetooth Data Transmission and HIS Integration',
        'Large Memory Capacity and Large Backlit Screen'
      ]
    }
  },
  {
    id: 'ks-1081-led-magnifier',
    name: {
      tr: 'KS-1081 Ledli Büyüteçli Lamba',
      en: 'KS-1081 LED Magnifier Lamp'
    },
    category: 'SurgicalLight',
    description: {
      tr: 'Cilt bakımı, küçük cerrahi müdahaleler ve detaylı dermatolojik muayeneler için yüksek aydınlatma ve optik büyüteç sunan LED büyüteçli lamba.',
      en: 'LED magnifying lamp offering high illumination and optical magnification for skincare, minor surgical interventions, and detailed dermatological examinations.'
    },
    image: '/KS-1081-ledli-buyutecli-lamba.jpg',
    features: {
      tr: [
        'Yüksek Kaliteli Optik Cam Mercek',
        'Gölgesiz LED Halka Aydınlatma',
        'Ayarlanabilir Esnek Denge Kolu',
        'Masa Üstü ve Mobil Ayaklı Kullanım Seçeneği',
        'Uzun Ömürlü Enerji Tasarruflu LED Teknolojisi'
      ],
      en: [
        'High-Quality Optical Glass Lens',
        'Shadow-free LED Ring Illumination',
        'Adjustable Flexible Balance Arm',
        'Table-mount and Mobile Stand Options',
        'Long-lasting Energy-saving LED Technology'
      ]
    }
  },
  {
    id: 'ks-la6-led-exam',
    name: {
      tr: 'KS-LA6 Ledli Muayene Lambası',
      en: 'KS-LA6 LED Examination Light'
    },
    category: 'SurgicalLight',
    description: {
      tr: 'Poliklinik, acil servis ve cerrahi muayene odaları için tasarlanmış, soğuk ışık veren, esnek gooseneck kollu modern LED muayene lambası.',
      en: 'Modern LED examination light with flexible gooseneck arm providing cold light, designed for outpatient clinics, emergency rooms, and surgical exam rooms.'
    },
    image: '/KS-LA6-Ledli-muayene-lambasi.jpg',
    features: {
      tr: [
        'Yüksek Yoğunluklu Soğuk Işık',
        'Esnek Gooseneck Kol ile Hassas Yönlendirme',
        'Ayarlanabilir Işık Şiddeti Kontrolü',
        'Tekerlekli Mobil Ayak ile Kolay Taşıma',
        'Minimum Isı Yayılımı ve Sessiz Çalışma'
      ],
      en: [
        'High Intensity Cold Light',
        'Precise Positioning with Flexible Gooseneck Arm',
        'Adjustable Light Intensity Control',
        'Easy Mobility with Wheeled Base',
        'Minimal Heat Dissipation and Silent Operation'
      ]
    }
  },
  {
    id: 'ks-q10-led-minor-surgical',
    name: {
      tr: 'KS-Q10 Ledli Minör Cerrahi Lambası',
      en: 'KS-Q10 LED Minor Surgical Light'
    },
    category: 'SurgicalLight',
    description: {
      tr: 'Küçük cerrahi operasyonlar, klinikler ve acil servis müdahaleleri için yüksek aydınlatma performansı ve gölgesiz ışık alanı sunan tavan, duvar ve mobil ayak montajlı cerrahi lamba.',
      en: 'Minor surgical light offering high illumination performance and shadowless light field for small surgeries, clinics, and ER interventions, available with ceiling, wall, and mobile stand mounts.'
    },
    image: '/KS-Q10-Ledli-minor-cerrahi-lambasi.jpg',
    features: {
      tr: [
        'Gelişmiş Cerrahi Aydınlatma Performansı (10 LED)',
        'Gölgesiz Işık Alanı Teknolojisi',
        'Dokunmatik Kontrol Paneli Üzerinden Parlaklık Ayarı',
        'Sterilize Edilebilir Tutamak Kolu',
        'Maksimum Eklemli Kol ile Geniş Erişim Açısı'
      ],
      en: [
        'Advanced Surgical Lighting Performance (10 LEDs)',
        'Shadowless Light Field Technology',
        'Brightness Adjustment via Touch Control Panel',
        'Sterilizable Handle Grip',
        'Wide Reach Angle with Articulated Arm'
      ]
    }
  },
  {
    id: 'ks-q3-led-exam',
    name: {
      tr: 'KS-Q3 Ledli Muayene Lambası',
      en: 'KS-Q3 LED Examination Light'
    },
    category: 'SurgicalLight',
    description: {
      tr: 'Genel muayene, jinekoloji ve dermatoloji uygulamaları için ideal, gün ışığı spektrumuna sahip kompakt ve güçlü LED aydınlatma cihazı.',
      en: 'Compact and powerful LED lighting device with daylight spectrum, ideal for general examination, gynecology, and dermatology applications.'
    },
    image: '/KS-Q3-Ledli-muayene-lambasi.jpg',
    features: {
      tr: [
        'Gün Işığı Renk Sıcaklığı (Daylight)',
        'Odaklanabilir Işık Demeti',
        'Sağlam ve Stabil Mobil Stand Tabanı',
        'Düşük Enerji Tüketimi',
        'Ergonomik ve Modern Tasarım'
      ],
      en: [
        'Daylight Color Temperature',
        'Focusable Light Beam',
        'Robust and Stable Mobile Stand Base',
        'Low Energy Consumption',
        'Ergonomic and Modern Design'
      ]
    }
  },
  {
    id: 'saten-fo-handles',
    name: {
      tr: 'Saten Fiberoptik Laringoskop Kolları',
      en: 'Saten Fiber Optic Laryngoscope Handles'
    },
    category: 'Laryngoscope',
    description: {
      tr: 'Mükemmel tutuş ve dayanıklılık sunan, yüksek kaliteli fiberoptik ışık iletim teknolojisi ile uyumlu laringoskop sapları.',
      en: 'Laryngoscope handles offering excellent grip and durability, compatible with high-quality fiber optic light transmission technology.'
    },
    image: '/saten-fiberoptik-kollari.jpg',
    features: {
      tr: [
        'Yüksek Kaliteli Paslanmaz Çelik Gövde',
        'Güvenli ve Kaymayan Tırtıllı Yüzey',
        'LED veya Ksenon Ampul Seçenekleri ile Uyumlu',
        'Standart Yeşil Kodlu Fiberoptik Sistem',
        'Otoklavlanabilir Gövde Yapısı'
      ],
      en: [
        'High-Quality Stainless Steel Body',
        'Secure and Non-slip Knurled Surface',
        'Compatible with LED or Xenon Bulb Options',
        'Standard Green-Coded Fiber Optic System',
        'Autoclavable Body Structure'
      ]
    }
  },
  {
    id: 'saten-miller-fo',
    name: {
      tr: 'Saten Miller Fiberoptik Laringoskop Bıçağı',
      en: 'Saten Miller Fiber Optic Laryngoscope Blade'
    },
    category: 'Laryngoscope',
    description: {
      tr: 'Pediatrik ve bebek hastaların entübasyonu için tasarlanmış, doğrudan görüş sağlayan düz tipli Miller fiberoptik laringoskop bıçağı (bleyd).',
      en: 'Straight-type Miller fiber optic laryngoscope blade designed for pediatric and infant intubation, providing direct visualization.'
    },
    image: '/saten-miller-fiberoptik.jpg',
    features: {
      tr: [
        'Pediatrik Hastalar İçin Düz Miller Tasarımı',
        'Yüksek Yoğunluklu Entegre Fiberoptik Işık Taşıyıcı',
        'Mat Yüzey İşlemesi ile Parlamayan Tasarım',
        'Kolay Temizlenebilir Pürüzsüz Kenarlar',
        'Uluslararası Standartlarla Uyumlu Soket'
      ],
      en: [
        'Straight Miller Design for Pediatric Patients',
        'High-Density Integrated Fiber Optic Light Carrier',
        'Glare-Free Satin Finish Surface',
        'Easy-to-clean Smooth Edges',
        'Socket Compatible with International Standards'
      ]
    }
  },
  {
    id: 'saten-fo-laryngoscope-sets',
    name: {
      tr: 'Saten Fiberoptik Laringoskop Seti',
      en: 'Saten Fiber Optic Laryngoscope Set'
    },
    category: 'Laryngoscope',
    description: {
      tr: 'Farklı boyutlarda Macintosh ve Miller bıçakları ile uyumlu kolu bir araya getiren, taşıma çantalı profesyonel fiberoptik laringoskop seti.',
      en: 'Professional fiber optic laryngoscope set combining various sizes of Macintosh and Miller blades with a compatible handle, presented in a carrying case.'
    },
    image: '/saren-fiberoptik-laringoskop-setleri.jpg',
    features: {
      tr: [
        'Komple Macintosh ve Miller Bıçak Çeşitleri',
        'Entegre Fiberoptik Işık İletimli Sap',
        'Darbeye Dayanıklı Özel Taşıma Çantası',
        'Yüksek Aydınlatma Gücü ve Net Görüş',
        'Dayanıklı ve Otoklavlanabilir Metal Yapı'
      ],
      en: [
        'Complete Selection of Macintosh and Miller Blades',
        'Integrated Fiber Optic Light Transmitting Handle',
        'Impact-resistant Dedicated Carrying Case',
        'High Illumination Power and Clear Visualization',
        'Durable and Autoclavable Metal Construction'
      ]
    }
  },
  {
    id: 'saten-macintosh-blades',
    name: {
      tr: 'Saten Macintosh Laringoskop Bıçakları',
      en: 'Saten Macintosh Laryngoscope Blades'
    },
    category: 'Laryngoscope',
    description: {
      tr: 'Yetişkin hastaların entübasyonu için tasarlanmış, kıvrık uçlu klasik Macintosh tipi laringoskop bıçakları.',
      en: 'Classic curved Macintosh type laryngoscope blades designed for adult patient intubation.'
    },
    image: '/saten-macintosh-bicaklari.jpg',
    features: {
      tr: [
        'Klasik Eğri Macintosh Tasarımı',
        'Yüksek Dayanımlı Paslanmaz Çelik Malzeme',
        'Saten Kaplama ile Parlama Engelleyici Yüzey',
        'Atravmatik Yuvarlatılmış Uç Yapısı',
        'Kolay Takılıp Çıkarılabilen Mekanizma'
      ],
      en: [
        'Classic Curved Macintosh Design',
        'High-Strength Stainless Steel Material',
        'Satin Finish Glare-reducing Surface',
        'Atraumatic Rounded Tip Structure',
        'Easy Attach and Detach Mechanism'
      ]
    }
  },
  {
    id: 'saten-macintosh-fo',
    name: {
      tr: 'Saten Macintosh Fiberoptik Laringoskop Bıçağı',
      en: 'Saten Macintosh Fiber Optic Laryngoscope Blade'
    },
    category: 'Laryngoscope',
    description: {
      tr: 'Kıvrık Macintosh bıçağı üzerinde yüksek performanslı fiberoptik ışık kanalı barındıran, yetişkin entübasyonlarında en yüksek ışık verimini sunan bleyd.',
      en: 'Curved Macintosh blade featuring a high-performance fiber optic light channel, offering maximum light efficiency in adult intubations.'
    },
    image: '/saten-macintosh-fiberoptik.jpg',
    features: {
      tr: [
        'Yetişkinler İçin Eğri Macintosh Yapısı',
        'Geniş Çaplı Çıkarılabilir Fiberoptik Demet',
        'Optimum Parlaklık ve Doğal Doku Rengi',
        'Kolay Temizlenebilir ve Sterilize Edilebilir',
        'Standart Yeşil Sistem Uyumlu'
      ],
      en: [
        'Curved Macintosh Structure for Adults',
        'Large Diameter Removable Fiber Optic Bundle',
        'Optimum Brightness and Natural Tissue Color',
        'Easy to Clean and Sterilize',
        'Standard Green System Compatible'
      ]
    }
  },
  {
    id: 'saten-miller-blades',
    name: {
      tr: 'Saten Miller Laringoskop Bıçakları',
      en: 'Saten Miller Laryngoscope Blades'
    },
    category: 'Laryngoscope',
    description: {
      tr: 'Düz bıçak geometrisi ile pediatrik entübasyonlarda epiglotun doğrudan kaldırılmasını sağlayan klasik Miller tipi laringoskop bıçakları.',
      en: 'Classic Miller type laryngoscope blades allowing direct elevation of the epiglottis in pediatric intubations with straight blade geometry.'
    },
    image: '/saten-miller-bicaklari.jpg',
    features: {
      tr: [
        'Klasik Düz Miller Geometrisi',
        'Bebek ve Çocuk Boyutlarında Seçenekler',
        'Yansımaları Önleyen Saten Metal Yüzey',
        'Pürüzsüz ve Güvenli Kenar Tasarımı',
        'Yüksek Korozyon Direnci'
      ],
      en: [
        'Classic Straight Miller Geometry',
        'Available in Infant and Child Sizes',
        'Satin Metal Surface Preventing Reflections',
        'Smooth and Safe Edge Design',
        'High Corrosion Resistance'
      ]
    }
  },
  {
    id: 'saten-standard-handles',
    name: {
      tr: 'Saten Standart Laringoskop Kolları',
      en: 'Saten Standard Laryngoscope Handles'
    },
    category: 'Laryngoscope',
    description: {
      tr: 'Klasik ampullü (standart sistem) laringoskop bıçakları ile uyumlu çalışan, pilli ve uzun ömürlü standart laringoskop sapları.',
      en: 'Standard laryngoscope handles working compatibly with classic bulb (standard system) laryngoscope blades, battery-powered and long-lasting.'
    },
    image: '/saten-standart-kollari.jpg',
    features: {
      tr: [
        'Klasik Standart Sistem Uyumlu',
        'Tırtıklı Yüzeyi ile Güvenli Kavrama',
        'C ve AA Pil Tipleri ile Çalışma Seçeneği',
        'Paslanmaz Çelik Şasi',
        'Ekonomik ve Güvenilir Çözüm'
      ],
      en: [
        'Classic Standard System Compatible',
        'Secure Grip with Knurled Surface',
        'C and AA Battery Type Options',
        'Stainless Steel Chassis',
        'Economical and Reliable Solution'
      ]
    }
  },
  {
    id: 'adsafe-cpr-pocket-resuscitator',
    name: {
      tr: 'Adsafe ™ CPR Cep Resüsitatörü',
      en: 'Adsafe ™ CPR Pocket Resuscitator'
    },
    category: 'CPR',
    description: {
      tr: 'İlk yardım ve acil kurtarma operasyonları için tasarlanmış, geri dönüşsüz valfe ve filtreye sahip profesyonel cep tipi suni solunum maskesi.',
      en: 'Professional pocket-sized resuscitation mask with one-way valve and filter, designed for first aid and emergency rescue operations.'
    },
    image: '/adsafe-cpr-cep-resusitatoru.jpg',
    features: {
      tr: [
        'Tek Yönlü Geri Dönüşsüz Şeffaf Valf',
        '3M Filtre Teknolojisi ile Çapraz Bulaşma Koruması',
        'Şişirilebilir Yumuşak Maske Kenarları',
        'Oksijen Giriş Portu Entegrasyonu',
        'Kompakt Sert Taşıma Çantası'
      ],
      en: [
        'One-way Non-rebreathing Transparent Valve',
        '3M Filter Technology for Cross-contamination Protection',
        'Inflatable Cushion Mask Design',
        'Integrated Oxygen Inlet Port',
        'Compact Hard Carrying Case'
      ]
    }
  },
  {
    id: 'adsafe-cpr-face-shield',
    name: {
      tr: 'Adsafe ™ CPR Yüz Kalkanı',
      en: 'Adsafe ™ CPR Face Shield'
    },
    category: 'CPR',
    description: {
      tr: 'Kurtarıcı ile hasta arasında hijyenik bariyer oluşturan, cüzdan ve ilk yardım çantalarında kolayca taşınabilen tek kullanımlık CPR yüz kalkanı.',
      en: 'Disposable CPR face shield establishing a hygienic barrier between the rescuer and the patient, easily carried in wallets and first aid kits.'
    },
    image: '/adsafe-cpr-yüz-kalkani.jpg',
    features: {
      tr: [
        'Yarı Saydam Plastik Koruyucu Bariyer',
        'Entegre Hidrofobik Filtreli Hava Yolu Valfi',
        'Kompakt ve Hafif Pratik Paket',
        'Kullanım Kolaylığı İçin Yönlendirici Anatomik Çizimler',
        'Tek Kullanımlık Hijyenik Tasarım'
      ],
      en: [
        'Translucent Plastic Protective Barrier',
        'Airway Valve with Integrated Hydrophobic Filter',
        'Compact and Lightweight Practical Pack',
        'Anatomical Graphics for Ease of Use',
        'Disposable Hygienic Design'
      ]
    }
  },
  {
    id: 'adsafe-cpr-face-shield-foil',
    name: {
      tr: 'Adsafe ™ CPR Yüz Kalkanı Folyo',
      en: 'Adsafe ™ CPR Face Shield Foil'
    },
    category: 'CPR',
    description: {
      tr: 'Anahtarlık şeklinde küçük folyo paketinde taşınan, acil durumlarda her an elinizin altında bulunan koruyucu CPR yüz bariyeri.',
      en: 'Protective CPR face barrier housed in a small keyring-style foil packet, instantly accessible in case of emergency.'
    },
    image: '/adsafe-yuz-kalkani-folyo.jpg',
    features: {
      tr: [
        'Anahtarlık Aparatlı Mini Folyo Çanta',
        'Geri Dönüşsüz Filtreli Valf Teknolojisi',
        'Son Derece Hafif ve Taşınabilir Yapı',
        'Acil Durumlarda Kolay Yırtılıp Açılan Paket',
        'Güvenilir Hijyenik Koruma'
      ],
      en: [
        'Mini Foil Pouch with Keyring Attachment',
        'One-Way Filtered Valve Technology',
        'Extremely Lightweight and Portable',
        'Easy Tear-Open Packet for Resuscitation',
        'Reliable Hygienic Protection'
      ]
    }
  },
  {
    id: 'adsafe-plus-cpr-face-shield',
    name: {
      tr: 'Adsafe ™ PLUS CPR Yüz Kalkanı',
      en: 'Adsafe ™ PLUS CPR Face Shield'
    },
    category: 'CPR',
    description: {
      tr: 'Geliştirilmiş kalın bariyer koruması ve yüksek filtrasyon performansı ile acil solunum desteğinde maksimum güvenlik sağlayan CPR maskesi.',
      en: 'CPR face shield providing maximum safety during emergency respiratory support with enhanced thick barrier protection and high filtration performance.'
    },
    image: '/adsafe-plus-cpr-yüz-kalkani.jpg',
    features: {
      tr: [
        'Güçlendirilmiş Kalın Koruyucu Membran',
        'Yüksek Verimli Tek Yönlü Filtreli Valf',
        'Güvenli Yüz Oturumu Sağlayan Bantlar',
        'İlk Yardım Ekipleri İçin Profesyonel Paket',
        'Çapraz Enfeksiyonu Engelleme Garantisi'
      ],
      en: [
        'Reinforced Thick Protective Membrane',
        'High-efficiency One-way Filtered Valve',
        'Securing Straps for Proper Face Alignment',
        'Professional Packaging for Emergency Responders',
        'Cross-infection Prevention Guarantee'
      ]
    }
  },
  {
    id: 'berman-set-disposable-airway',
    name: {
      tr: 'Berman Set Tek Kullanımlık Havayolu',
      en: 'Berman Disposable Airway Set'
    },
    category: 'CPR',
    description: {
      tr: 'Anestezi ve ilk yardım uygulamalarında havayolu açıklığını korumak amacıyla tasarlanmış, farklı boyutlardan oluşan tek kullanımlık Berman havayolu seti.',
      en: 'Disposable Berman airway set consisting of various sizes, designed to maintain airway patency in anesthesia and first aid applications.'
    },
    image: '/berman-set-tek-kullanımlık-havayolu.jpg',
    features: {
      tr: [
        'Farklı Yaş Grupları İçin Çeşitli Boyutlar',
        'Çift Kanallı Tasarım ile Kateter Giriş Kolaylığı',
        'Bite Block (Isırma Bloğu) Takviyeli',
        'Tek Kullanımlık Steril Paket',
        'Yumuşak ve Atravmatik Kenarlar'
      ],
      en: [
        'Various Sizes for Different Age Groups',
        'Dual-Channel Design for Easy Catheter Access',
        'Reinforced Bite Block Area',
        'Disposable Sterile Packaging',
        'Soft and Atraumatic Edges'
      ]
    }
  },
  {
    id: 'bite-stick',
    name: {
      tr: 'Bite Stick (Isırma Çubuğu)',
      en: 'Bite Stick'
    },
    category: 'CPR',
    description: {
      tr: 'Epilepsi nöbetleri veya konvülsiyonlar sırasında hastanın dilini ısırmasını engellemek ve havayolunu korumak amacıyla kullanılan tıbbi ısırma çubuğu.',
      en: 'Medical bite stick used to prevent patients from biting their tongue and protect the airway during epileptic seizures or convulsions.'
    },
    image: '/bite-stick.jpg',
    features: {
      tr: [
        'Yumuşak ve Esnek Malzeme Yapısı',
        'Diş ve Diş Etlerine Zarar Vermeyen Tasarım',
        'Kolay Kavranabilir Sap Bölümü',
        'Hızlı ve Pratik Kullanım',
        'Hijyenik Bireysel Ambalaj'
      ],
      en: [
        'Soft and Flexible Material Structure',
        'Non-damaging Design for Teeth and Gums',
        'Easy-to-grip Handle Area',
        'Quick and Practical Application',
        'Hygienic Individual Packaging'
      ]
    }
  },
  {
    id: 'berman-disposable-airway',
    name: {
      tr: 'Berman Tek Kullanımlık Havayolu',
      en: 'Berman Disposable Airway'
    },
    category: 'CPR',
    description: {
      tr: 'Bilinçsiz hastalarda dilin geriye kaçmasını önleyerek solunum yolunu açık tutan tek kullanımlık Berman tipi oral havayolu tüpü.',
      en: 'Disposable Berman-type oral airway tube maintaining open airways in unconscious patients by preventing the tongue from obstructing the throat.'
    },
    image: '/berman-tek-kullanimlik-havayolu.jpg',
    features: {
      tr: [
        'Yarı Esnek Polietilen Malzeme',
        'Açık Yan Kanallar ile Kolay Aspirasyon',
        'Renk Kodlu Boyutlandırma Sistemi',
        'Pürüzsüz Atravmatik Yuvarlatılmış Uç',
        'Isırmaya Karşı Dirençli Sert Gövde'
      ],
      en: [
        'Semi-flexible Polyethylene Material',
        'Open Side Channels for Easy Aspiration',
        'Color-coded Sizing System',
        'Smooth Atraumatic Rounded Tip',
        'Bite-resistant Rigid Body'
      ]
    }
  },
  {
    id: 'guedel-set',
    name: {
      tr: 'GUEDEL SET',
      en: 'Guedel Oral Airway Set'
    },
    category: 'CPR',
    description: {
      tr: 'Acil resüsitasyon ve anestezi uygulamalarında kullanılmak üzere farklı boylarda renk kodlu Guedel tüplerinden oluşan profesyonel set.',
      en: 'Professional set consisting of color-coded Guedel airways in various sizes for emergency resuscitation and anesthesia applications.'
    },
    image: '/guedel-set.jpg',
    features: {
      tr: [
        'Renk Kodlu Guedel Tüp Çeşitleri',
        'Entegre Sert Isırma Bloğu',
        'Travma Yaratmayan Yumuşak Kenarlar',
        'Özel Saklama ve Taşıma Kutusu',
        'Oksijen Kateteri Geçişine Uygun Profil'
      ],
      en: [
        'Color-coded Guedel Airway Assortment',
        'Integrated Rigid Bite Block',
        'Non-traumatic Soft Edges',
        'Dedicated Storage and Carrying Case',
        'Profile Suitable for Oxygen Catheter Pass'
      ]
    }
  },
  {
    id: 'adimals-618',
    name: {
      tr: 'Adimals 618 Pediatrik Steteskop',
      en: 'Adimals 618 Pediatric Stethoscope'
    },
    category: 'Stethoscope',
    description: {
      tr: 'Çocuk hastalar için özel olarak tasarlanmış, sevimli hayvan figürlü değiştirilebilir göğüs aparatlarına sahip pediatrik steteskop.',
      en: 'Pediatric stethoscope specifically designed for child patients, featuring interchangeable snap-on animal face chestpieces.'
    },
    image: '/adimals-618.jpg',
    features: {
      tr: [
        'Sevimli Hayvan Figürlü Değiştirilebilir Göğüs Aparatları',
        'Hassas Akustik Performans',
        'Çocukları Rahatsız Etmeyen Soğuk Hissiyat Önleyici Halka',
        'Yumuşak Silikon Kulaklık Uçları',
        'Hafif ve Konforlu Tasarım'
      ],
      en: [
        'Interchangeable Snap-on Animal Face Chestpieces',
        'Precise Acoustic Performance',
        'Non-chill Diaphragm Retaining Rim',
        'Soft Silicone Eartips',
        'Lightweight and Comfortable Design'
      ]
    }
  },
  {
    id: 'adscope-600',
    name: {
      tr: 'Adscope 600 Kardiyoloji Steteskopu',
      en: 'Adscope 600 Cardiology Stethoscope'
    },
    category: 'Stethoscope',
    description: {
      tr: 'Üstün akustik hassasiyete sahip, kardiyologlar ve uzman hekimler için tasarlanmış profesyonel kardiyoloji steteskopu.',
      en: 'Professional cardiology stethoscope designed for cardiologists and specialists, featuring superior acoustic sensitivity.'
    },
    image: '/adscope-600.jpg',
    features: {
      tr: [
        'Ayarlanabilir Diyafram Teknolojisi (AFD)',
        'Paslanmaz Çelikten Hassas İşlenmiş Göğüs Parçası',
        'Çift Kanallı Akustik Hortum Sistemi',
        'Geliştirilmiş Kulaklık Açıları',
        'Kardiyolojik Dinlemeler İçin Maksimum Ses İletimi'
      ],
      en: [
        'Adjustable Frequency Diaphragm (AFD) Technology',
        'Precision-crafted Stainless Steel Chestpiece',
        'Double-lumen Acoustic Tubing',
        'Optimized Headset Angles',
        'Maximum Sound Transmission for Cardiology'
      ]
    }
  },
  {
    id: 'adscope-601',
    name: {
      tr: 'Adscope 601 Çok Amaçlı Steteskop',
      en: 'Adscope 601 Convertible Stethoscope'
    },
    category: 'Stethoscope',
    description: {
      tr: 'Değiştirilebilir göğüs aparatları sayesinde hem yetişkin hem de pediatrik hastalar için kullanılabilen çok fonksiyonlu steteskop.',
      en: 'Convertible stethoscope that can be converted for adult or pediatric use thanks to interchangeable chestpiece components.'
    },
    image: '/adscope-601.jpg',
    features: {
      tr: [
        'Değiştirilebilir Diyafram ve Çan Aparatları',
        'Paslanmaz Çelik Konstrüksiyon',
        'Çift Kanallı Hortum Yapısı',
        'Yüksek Akustik Yalıtım Sağlayan Kulaklık Uçları',
        'Farklı Klinik Durumlar İçin Esnek Kullanım'
      ],
      en: [
        'Convertible Diaphragm and Bell Components',
        'Stainless Steel Construction',
        'Double-lumen Tubing Design',
        'High Acoustic Isolation Eartips',
        'Flexible Use for Various Clinical Settings'
      ]
    }
  },
  {
    id: 'adscope-602',
    name: {
      tr: 'Adscope 602 Kardiyoloji Steteskopu',
      en: 'Adscope 602 Cardiology Stethoscope'
    },
    category: 'Stethoscope',
    description: {
      tr: 'Kardiyovasküler seslerin hassas analizi için çift taraflı paslanmaz çelik göğüs parçası barındıran üstün kaliteli kardiyoloji steteskopu.',
      en: 'Premium cardiology stethoscope incorporating a dual-sided stainless steel chestpiece for precise cardiovascular sound analysis.'
    },
    image: '/adscope-602.jpg',
    features: {
      tr: [
        'Çift Taraflı Paslanmaz Çelik Chestpiece',
        'Yetişkin ve Pediatrik Dinleme Yüzeyleri',
        'Akustik Kayıpları Önleyen Çift Kanallı Hortum',
        'Ayarlanabilir Kulaklık Yayları',
        'Üst Düzey Akustik Performans'
      ],
      en: [
        'Dual-sided Stainless Steel Chestpiece',
        'Adult and Pediatric Listening Surfaces',
        'Double-lumen Tubing Preventing Acoustic Loss',
        'Adjustable Headset Springs',
        'High-end Acoustic Performance'
      ]
    }
  },
  {
    id: 'adscope-603',
    name: {
      tr: 'Adscope 603 Klinisyen Steteskopu',
      en: 'Adscope 603 Clinician Stethoscope'
    },
    category: 'Stethoscope',
    description: {
      tr: 'Klinik hekimlerin ve hemşirelerin günlük muayenelerinde en çok tercih ettiği, fiyat-performans oranı yüksek profesyonel steteskop.',
      en: 'Highly popular professional clinician stethoscope preferred by doctors and nurses for daily diagnosis, offering exceptional price-performance ratio.'
    },
    image: '/adscope-603.jpg',
    features: {
      tr: [
        'Hassas İşlenmiş Çift Başlıklı Göğüs Parçası',
        'AFD Teknolojisi ile Frekans Ayarı',
        'Yumuşak Silikon Sızdırmaz Kulaklık Uçları',
        'Lateks İçermeyen Esnek Hortum',
        'Geniş Renk Seçenekleri ile Modern Tasarım'
      ],
      en: [
        'Precision-machined Combination Chestpiece',
        'AFD Technology for Frequency Tuning',
        'Soft Silicone Snap-on Eartips',
        'Latex-free Flexible Tubing',
        'Modern Design with Wide Range of Color Options'
      ]
    }
  },
  {
    id: 'adscope-604',
    name: {
      tr: 'Adscope 604 Pediatrik Steteskop',
      en: 'Adscope 604 Pediatric Stethoscope'
    },
    category: 'Stethoscope',
    description: {
      tr: 'Bebek ve çocuk hastaların muayenesinde doğru tanı koyabilmek için optimize edilmiş hassas akustik performansa sahip pediatrik steteskop.',
      en: 'Pediatric stethoscope with optimized acoustic performance designed for accurate diagnosis in infants and children.'
    },
    image: '/adscope-604.jpg',
    features: {
      tr: [
        'Pediatrik Boyutlu Çift Başlı Göğüs Parçası',
        'Küçük Çaplı Ultra Hassas Diyafram ve Çan',
        'Soğuk Hissi Vermeyen Koruyucu Halka',
        'Hafif ve Ergonomik Şasi Yapısı',
        'Çocuk Dostu Renk Seçenekleri'
      ],
      en: [
        'Pediatric-sized Combination Chestpiece',
        'Small Diameter Ultra-sensitive Diaphragm and Bell',
        'Non-chill Diaphragm and Bell Rims',
        'Lightweight and Ergonomic Headset Structure',
        'Child-friendly Color Variations'
      ]
    }
  },
  {
    id: 'adscope-605',
    name: {
      tr: 'Adscope 605 İnfant Steteskopu',
      en: 'Adscope 605 Infant Stethoscope'
    },
    category: 'Stethoscope',
    description: {
      tr: 'Yeni doğan ve bebek hastaların vücut seslerini dinlemek için özel olarak tasarlanmış, son derece küçük göğüs parçalı steteskop.',
      en: 'Infant stethoscope specially designed to listen to body sounds of newborns and small babies, featuring an ultra-small chestpiece.'
    },
    image: '/adscope-605.jpg',
    features: {
      tr: [
        'Yeni Doğan ve Bebeklere Özel Mikro Göğüs Parçası',
        'Düşük Frekanslı Sesler İçin Derin Çan Tasarımı',
        'Hassas Ciltlere Uygun Soğuk Hissiyat Önleyici Halka',
        'Ergonomik Kulaklık Seti',
        'Mükemmel Akustik İletim'
      ],
      en: [
        'Infant-sized Micro Chestpiece',
        'Deep Bell Design for Low-frequency Sounds',
        'Non-chill Rims Suitable for Sensitive Skin',
        'Ergonomic Headset Set',
        'Excellent Acoustic Transmission'
      ]
    }
  },
  {
    id: 'adscope-606',
    name: {
      tr: 'Adscope 606 Ultra Hafif Steteskop',
      en: 'Adscope 606 Ultra-lite Stethoscope'
    },
    category: 'Stethoscope',
    description: {
      tr: 'Boyun ve omuz ağrılarını en aza indirmek için ultra hafif alüminyum göğüs parçasından üretilmiş profesyonel steteskop.',
      en: 'Professional stethoscope constructed with an ultra-lightweight aluminum chestpiece to minimize neck and shoulder strain.'
    },
    image: '/adscope-606.jpg',
    features: {
      tr: [
        'Ultra Hafif Uçak Sınıfı Alüminyum Göğüs Parçası',
        'Çift Başlıklı Akustik Tasarım',
        'Hassas AFD Frekans Kontrolü',
        'Alerji Yapmayan Lateks İçermeyen Hortum',
        'Konforlu Uzun Süreli Kullanım Garantisi'
      ],
      en: [
        'Ultra-lightweight Aircraft-grade Aluminum Chestpiece',
        'Combination Acoustic Design',
        'AFD Frequency Control Technology',
        'Hypoallergenic Latex-free Tubing',
        'Guaranteed Comfort for Long-term Wear'
      ]
    }
  },
  {
    id: 'adscope-609',
    name: {
      tr: 'Adscope 609 Klinisyen Lite Steteskop',
      en: 'Adscope 609 Clinician Lite Stethoscope'
    },
    category: 'Stethoscope',
    description: {
      tr: 'Hafiflik ile yüksek akustik duyarlılığı bir araya getiren, hekimler ve acil tıp teknisyenleri için ideal hafif steteskop.',
      en: 'Lightweight stethoscope combining ease of carry with high acoustic sensitivity, ideal for doctors and emergency medical technicians.'
    },
    image: '/adscope-609.jpg',
    features: {
      tr: [
        'Hassas Alüminyum Çift Başlı Göğüs Parçası',
        'Soğuk Hissi Vermeyen Akustik Koruma Halkası',
        'Ayarlanabilir Kulaklık Açıları ve Silikon Uçlar',
        'Dayanıklı Esnek Hortum Malzemesi',
        'Klinik Kullanım İçin Ergonomik Yapı'
      ],
      en: [
        'Precision Aluminum Dual-head Chestpiece',
        'Non-chill Acoustic Diaphragm Rim',
        'Adjustable Headset Angles and Silicone Tips',
        'Durable Flexible Tubing Material',
        'Ergonomic Construction for Clinical Work'
      ]
    }
  },
  {
    id: 'adscope-612',
    name: {
      tr: 'Adscope 612 Tek Taraflı AFD Steteskop',
      en: 'Adscope 612 Single-sided AFD Stethoscope'
    },
    category: 'Stethoscope',
    description: {
      tr: 'Basınç ayarlı tek taraflı AFD diyaframı ile düşük ve yüksek frekanslı sesleri başlığı çevirmeden dinleme imkanı sunan modern steteskop.',
      en: 'Modern stethoscope offering the ability to listen to low and high frequency sounds without flipping the chestpiece, thanks to its single-sided pressure-sensitive AFD diaphragm.'
    },
    image: '/adscope-612.jpg',
    features: {
      tr: [
        'Tek Taraflı AFD Göğüs Parçası',
        'Dokunma Basıncına Göre Ses Frekansı Ayarı',
        'Ergonomik Tasarımlı Tutma Parçası',
        'Hassas Akustik Yalıtımlı Kulaklık Seti',
        'Şık ve Modern Metalik Kaplama'
      ],
      en: [
        'Single-sided AFD Chestpiece',
        'Sound Frequency Adjustment Based on Touch Pressure',
        'Ergonomically Designed Grasping Part',
        'Precision Acoustically Sealed Headset',
        'Elegant and Modern Metallic Finish'
      ]
    }
  },
  {
    id: 'adscope-613',
    name: {
      tr: 'Adscope 613 Hekim Tipi Steteskop',
      en: 'Adscope 613 Physician Stethoscope'
    },
    category: 'Stethoscope',
    description: {
      tr: 'Yüksek akustik hassasiyete sahip, klinisyenlerin solunum ve kardiyovasküler sesleri en ince ayrıntısıyla dinlemesini sağlayan hekim steteskopu.',
      en: 'Physician stethoscope with high acoustic sensitivity, enabling clinicians to listen to respiratory and cardiovascular sounds in fine detail.'
    },
    image: '/adscope-613.jpg',
    features: {
      tr: [
        'Üst Düzey Akustik Ses İletimi',
        'Ergonomik Paslanmaz Çelik Yaylı Kulaklık Seti',
        'Dayanıklı ve Kalın Duvarlı Akustik Hortum',
        'Konforlu Silikon Sızdırmaz Kulak Uçları',
        'Farklı Frekanslarda Yüksek Doğruluk'
      ],
      en: [
        'High-end Acoustic Sound Transmission',
        'Ergonomic Stainless Steel Headset',
        'Durable and Thick-walled Acoustic Tubing',
        'Comfortable Silicone Sealed Eartips',
        'High Accuracy across Different Frequencies'
      ]
    }
  },
  {
    id: 'adscope-614',
    name: {
      tr: 'Adscope 614 Pediatrik AFD Steteskop',
      en: 'Adscope 614 Pediatric AFD Stethoscope'
    },
    category: 'Stethoscope',
    description: {
      tr: 'Basınç ayarlı AFD diyafram teknolojisini pediatrik boyutlara taşıyan, çocuk muayenelerinde üstün ses kalitesi sunan steteskop.',
      en: 'Stethoscope carrying the pressure-sensitive AFD diaphragm technology to pediatric dimensions, offering superior sound quality in pediatric checkups.'
    },
    image: '/adscope-6014.jpg',
    features: {
      tr: [
        'Pediatrik AFD Tek Başlı Göğüs Parçası',
        'Hafif ve Ergonomik Jinekolojik/Pediatrik Kullanım',
        'Soğuk Hissiyat Önleyici Diyafram Halkası',
        'Yüksek Akustik Sızdırmaz Kulaklık Uçları',
        'Lateks İçermeyen Yumuşak Hortum Yapısı'
      ],
      en: [
        'Pediatric AFD Single-sided Chestpiece',
        'Lightweight and Ergonomic Pediatric Application',
        'Non-chill Diaphragm Rim',
        'High Acoustic Seal Eartips',
        'Soft Latex-free Tubing'
      ]
    }
  },
  {
    id: 'adscope-615',
    name: {
      tr: 'Adscope 615 Profesyonel Steteskop',
      en: 'Adscope 615 Professional Stethoscope'
    },
    category: 'Stethoscope',
    description: {
      tr: 'Sağlam çinko alaşımından üretilmiş göğüs parçası ve AFD teknolojisiyle net vücut sesleri ileten profesyonel steteskop.',
      en: 'Professional stethoscope delivering clear body sounds with a robust zinc alloy chestpiece and AFD technology.'
    },
    image: '/adscope-615.jpg',
    features: {
      tr: [
        'Hassas Çinko Alaşımlı Tek Taraflı Başlık',
        'AFD Basınç Ayarlı Diyafram Sistemi',
        'Manevra Kolaylığı Sağlayan Büyük Tutma Bölümü',
        'Lateks İçermeyen Kalın Esnek Hortum',
        'Premium Aksesuar Seti Dahil'
      ],
      en: [
        'Precision Zinc Alloy Single-sided Chestpiece',
        'AFD Pressure-sensitive Diaphragm System',
        'Large Grasping Area for Easy Maneuvering',
        'Thick Latex-free Flexible Tubing',
        'Premium Accessory Kit Included'
      ]
    }
  },
  {
    id: 'adscope-647',
    name: {
      tr: 'Adscope 647 Pediatrik Dinleme Steteskopu',
      en: 'Adscope 647 Pediatric Stethoscope'
    },
    category: 'Stethoscope',
    description: {
      tr: 'Sevimli ve renkli tasarımıyla çocukların muayenelerdeki endişesini azaltan ve net ses iletimi sağlayan pediatrik steteskop.',
      en: 'Pediatric stethoscope with a friendly and colorful design that reduces children\'s anxiety during examinations while providing clear sound transmission.'
    },
    image: '/adscope-647.jpg',
    features: {
      tr: [
        'Çocuk Dostu Parlak Renkli Hortum',
        'Paslanmaz Çelik Hassas Göğüs Parçası',
        'Soğuk Hissini Önleyen Özel Mercek Halkası',
        'Kompakt ve Ergonomik Kulaklık Seti',
        'Günlük Pediatrik Kullanıma Uygun Dayanıklılık'
      ],
      en: [
        'Child-friendly Brightly Colored Tubing',
        'Stainless Steel Precision Chestpiece',
        'Non-chill Protective Rims',
        'Compact and Ergonomic Headset',
        'Durable Construction for Daily Pediatric Practice'
      ]
    }
  },
  {
    id: 'adscope-655-vistascope',
    name: {
      tr: 'Adscope 655 Vistascope Akustik Steteskop',
      en: 'Adscope 655 Vistascope Acoustic Stethoscope'
    },
    category: 'Stethoscope',
    description: {
      tr: 'Akrilik göğüs parçası ve şeffaf tasarımıyla dikkat çeken, olağanüstü ses iletimi ve yüksek frekans yanıtı sunan özgün steteskop.',
      en: 'Unique stethoscope featuring an acrylic chestpiece and transparent design, delivering outstanding sound transmission and high-frequency response.'
    },
    image: '/adscope-655-vistascope.jpg',
    features: {
      tr: [
        'Şeffaf Akrilik Göğüs Parçası (Chestpiece)',
        'Mükemmel Ses Yalıtımı ve İletim Performansı',
        'AFD Teknolojisi ile Net Ses Frekansı Ayarı',
        'Yumuşak Silikon Kulaklık Uçları',
        'Farklı ve Özgün Tasarım'
      ],
      en: [
        'Transparent Acrylic Chestpiece',
        'Excellent Sound Isolation and Transmission',
        'AFD Technology for Clear Sound Tuning',
        'Soft Silicone Sealed Eartips',
        'Unique and Distinctive Design'
      ]
    }
  },
  {
    id: 'adimals-426',
    name: {
      tr: 'Adimals 426 Dijital Ateş Ölçer',
      en: 'Adimals 426 Digital Thermometer'
    },
    category: 'Thermometer',
    description: {
      tr: 'Çocuklar için özel tasarlanmış sevimli figürlü, hızlı ve güvenli dijital ateş ölçer.',
      en: 'Friendly character digital thermometer designed for kids, offering fast and safe temperature readings.'
    },
    image: '/adimals-426.jpg',
    features: {
      tr: [
        'Sevimli Çocuk Dostu Figür Başlığı',
        '10 Saniyede Hızlı Ölçüm Teknolojisi',
        'Esnek Güvenli Uç Yapısı',
        'Son Ölçüm Hafızası ve Sesli Uyarı',
        'Su Geçirmez Kolay Temizlenebilir Gövde'
      ],
      en: [
        'Cute Child-friendly Character Head',
        '10-Second Fast Measurement Technology',
        'Flexible Safe Tip Structure',
        'Last Reading Memory and Fever Alarm',
        'Waterproof Easy-to-clean Body'
      ]
    }
  },
  {
    id: 'adtemp-standard',
    name: {
      tr: 'Adtemp Standart Dijital Ateş Ölçer',
      en: 'Adtemp Standard Digital Thermometer'
    },
    category: 'Thermometer',
    description: {
      tr: 'Ev ve klinik kullanım için ideal, yüksek doğruluklu standart dijital termometre.',
      en: 'High accuracy standard digital thermometer ideal for clinical and home use.'
    },
    image: '/adtemp.jpg',
    features: {
      tr: [
        'Güvenilir ve Hassas Ölçüm',
        'Kompakt Ergonomik Tasarım',
        'Kolay Okunabilir Dijital Ekran',
        'Otomatik Kapanma Özelliği',
        'Değiştirilebilir Pil'
      ],
      en: [
        'Reliable and Precise Measurement',
        'Compact Ergonomic Design',
        'Easy-to-read Digital Display',
        'Auto Shut-off Feature',
        'Replaceable Battery'
      ]
    }
  },
  {
    id: 'adtemp-412',
    name: {
      tr: 'Adtemp 412 Dijital Ateş Ölçer',
      en: 'Adtemp 412 Digital Thermometer'
    },
    category: 'Thermometer',
    description: {
      tr: 'Klinik derece hassasiyete sahip, hızlı ölçüm yapan modern dijital ateş ölçer.',
      en: 'Modern digital thermometer with clinical-grade accuracy and fast readings.'
    },
    image: '/adtemp-412.jpg',
    features: {
      tr: [
        'Yüksek Hassasiyetli Sensör',
        'Geniş Aydınlatmalı LCD Ekran',
        'Ateş Durumu Bildiren Sesli Alarm',
        'Ergonomik ve Dayanıklı Tasarım',
        'Fahrenheit ve Santigrat Seçimi'
      ],
      en: [
        'High Precision Sensor',
        'Large Backlit LCD Screen',
        'Audible Fever Alarm Notification',
        'Ergonomic and Durable Design',
        'Fahrenheit and Celsius Selection'
      ]
    }
  },
  {
    id: 'adtemp-412-spu-kit',
    name: {
      tr: 'Adtemp 412 SPU Ateş Ölçer Kılıf Seti',
      en: 'Adtemp 412 SPU Thermometer Cover Set'
    },
    category: 'Thermometer',
    description: {
      tr: 'Adtemp 412 için özel olarak üretilmiş, hijyenik ve tek kullanımlık koruyucu kılıf (SPU) seti.',
      en: 'Hygienic disposable protective sheath (SPU) kit designed specifically for Adtemp 412.'
    },
    image: '/adtemp-412-spu-takimi.jpg',
    features: {
      tr: [
        'Tek Kullanımlık Hijyenik Koruyucu Kılıflar',
        'Adtemp 412 ile Tam Uyum',
        'Çapraz Bulaşmayı Engeller',
        'Kolay Takılıp Çıkarılabilen Yapı',
        'Klinik Standartlara Uygun'
      ],
      en: [
        'Disposable Hygienic Protective Sheaths',
        'Perfect Match with Adtemp 412',
        'Prevents Cross-contamination',
        'Easy Attach and Detach Design',
        'Complies with Clinical Standards'
      ]
    }
  },
  {
    id: 'adtemp-413',
    name: {
      tr: 'Adtemp 413 Dijital Ateş Ölçer',
      en: 'Adtemp 413 Digital Thermometer'
    },
    category: 'Thermometer',
    description: {
      tr: 'Ağız ve koltuk altı ölçümleri için ideal, ince problu hassas dijital termometre.',
      en: 'Precision digital thermometer with a slim probe, ideal for oral and axillary measurements.'
    },
    image: '/adtemp-413.jpg',
    features: {
      tr: [
        'Hassas İnce Prob Tasarımı',
        'Hızlı ve Güvenilir Algılama',
        'Son Ölçümü Hafızada Tutma',
        'Suya Dayanıklı Ön Panel',
        'Kompakt Taşıma Kılıfı'
      ],
      en: [
        'Precise Slim Probe Design',
        'Fast and Reliable Detection',
        'Last Memory Recall',
        'Water-resistant Front Panel',
        'Compact Carrying Case'
      ]
    }
  },
  {
    id: 'adtemp-413-spu-kit',
    name: {
      tr: 'Adtemp 413 SPU Ateş Ölçer Kılıf Seti',
      en: 'Adtemp 413 SPU Thermometer Cover Set'
    },
    category: 'Thermometer',
    description: {
      tr: 'Adtemp 413 termometre modeli ile uyumlu çalışan tek kullanımlık hijyenik kılıf kiti.',
      en: 'Disposable hygienic sheath kit working compatibly with the Adtemp 413 thermometer model.'
    },
    image: '/adtemp-413-spu-takimi.jpg',
    features: {
      tr: [
        'Adtemp 413 Boyutlarına Özel Tasarım',
        'Dayanıklı ve İnce Şeffaf Malzeme',
        'Ölçüm Doğruluğunu Etkilemez',
        'Paket İçi Çoklu Adet',
        'Çapraz Enfeksiyon Koruması'
      ],
      en: [
        'Specially Custom-sized for Adtemp 413',
        'Durable and Thin Transparent Material',
        'Does Not Affect Temperature Accuracy',
        'Multi-pack Quantity',
        'Cross-infection Protection'
      ]
    }
  },
  {
    id: 'adtemp-415',
    name: {
      tr: 'Adtemp 415 Dijital Ateş Ölçer',
      en: 'Adtemp 415 Digital Thermometer'
    },
    category: 'Thermometer',
    description: {
      tr: 'Gelişmiş özellikleri ve kolay arayüzü ile klinik standartlarda ölçüm yapan dijital termometre.',
      en: 'Digital thermometer providing clinical standard measurements with advanced features and a simple interface.'
    },
    image: '/adtemp-415.jpg',
    features: {
      tr: [
        'Gelişmiş Algılama Çipi',
        'Hızlı Sonuç Verme Süresi',
        'Net Okunabilir Sayısal Ekran',
        'Bip Sesli Ölçüm Bildirimi',
        'Dayanıklı ABS Plastik Kasa'
      ],
      en: [
        'Advanced Sensor Chip',
        'Rapid Response Time',
        'Clear Numeric Display',
        'Beep Warning Tone Notification',
        'Durable ABS Plastic Case'
      ]
    }
  },
  {
    id: 'adtemp-415-flex',
    name: {
      tr: 'Adtemp 415 Flex Esnek Uçlu Ateş Ölçer',
      en: 'Adtemp 415 Flex Flexible Thermometer'
    },
    category: 'Thermometer',
    description: {
      tr: 'Hastanın konforu için esnek uçlu olarak tasarlanmış, hassas dijital ateş ölçer.',
      en: 'Precision digital thermometer designed with a flexible tip for patient comfort.'
    },
    image: '/adtemp-415-flex.jpg',
    features: {
      tr: [
        'Esnek ve Yumuşak Ölçüm Ucu',
        'Muayene Konforunu Artıran Tasarım',
        'Hızlı Ölçüm ve Sesli Uyarı',
        'Hafıza Fonksiyonu',
        'Su Geçirmez Yıkanabilir Uç Bölümü'
      ],
      en: [
        'Flexible and Soft Measurement Tip',
        'Comfort-focused Examination Design',
        'Quick Reading and Beep Tone',
        'Memory Function',
        'Waterproof Washable Tip Section'
      ]
    }
  },
  {
    id: 'adtemp-415-flex-spu',
    name: {
      tr: 'Adtemp 415 Flex SPU Ateş Ölçer Seti',
      en: 'Adtemp 415 Flex SPU Thermometer Set'
    },
    category: 'Thermometer',
    description: {
      tr: 'Adtemp 415 Flex modeli ve tek kullanımlık hijyenik kılıfların bir arada sunulduğu profesyonel set.',
      en: 'Professional set combining the Adtemp 415 Flex model and disposable hygienic sheaths.'
    },
    image: '/adtemp-415-flex-spu.jpg',
    features: {
      tr: [
        'Esnek Uçlu Adtemp 415 Termometre',
        'Uyumlu Tek Kullanımlık Koruyucu Kılıflar',
        'Hijyenik ve Güvenli Kullanım Konsepti',
        'Klinik ve Revir Kullanımına Uygun',
        'Kolay Dezenfeksiyon Uyumluluğu'
      ],
      en: [
        'Flexible Tip Adtemp 415 Thermometer',
        'Compatible Disposable Protective Covers',
        'Hygienic and Safe Concept',
        'Ideal for Clinics and Infirmaries',
        'Easy Disinfection Compatibility'
      ]
    }
  },
  {
    id: 'adtemp-419',
    name: {
      tr: 'Adtemp 419 Hızlı Ölçüm Ateş Ölçer',
      en: 'Adtemp 419 Fast Read Thermometer'
    },
    category: 'Thermometer',
    description: {
      tr: 'Birkaç saniye içinde sonuç veren, yüksek hızlı ve hassas dijital termometre.',
      en: 'High-speed precision digital thermometer delivering results in just a few seconds.'
    },
    image: '/adtemp-419.jpg',
    features: {
      tr: [
        'Saniyeler İçinde Ultra Hızlı Ölçüm',
        'Klinik Olarak Onaylanmış Doğruluk',
        'Ateş Uyarı Ekran Rengi Değişimi',
        'Esnek ve Atravmatik Uç Yapısı',
        'Geniş Dijital Ekran Göstergesi'
      ],
      en: [
        'Ultra Fast Reading in Seconds',
        'Clinically Proven Accuracy',
        'Fever Alarm Backlight Color Change',
        'Flexible and Atraumatic Tip',
        'Large Digital Display Indicator'
      ]
    }
  },
  {
    id: 'adtemp-422',
    name: {
      tr: 'Adtemp 422 Emzik Tipi Ateş Ölçer',
      en: 'Adtemp 422 Pacifier Thermometer'
    },
    category: 'Thermometer',
    description: {
      tr: 'Bebeklerin ateşini huzursuz etmeden ölçmek için emzik formunda tasarlanmış akıllı termometre.',
      en: 'Smart thermometer shaped like a pacifier, designed to measure infant temperature without causing distress.'
    },
    image: '/adtemp-422.jpg',
    features: {
      tr: [
        'Ortodontik Silikon Emzik Tasarımı',
        'Bebekler İçin Konforlu ve Sakinleştirici',
        'Doğru ve Güvenilir Sıcaklık Algılama',
        'Ölçüm Tamamlandığında Sesli Bildirim',
        'Su Geçirmez Hijyenik Malzeme'
      ],
      en: [
        'Orthodontic Silicone Pacifier Design',
        'Comforting and Calming for Infants',
        'Accurate and Reliable Heat Sensing',
        'Beep Sound Completion Notification',
        'Waterproof Hygienic Material'
      ]
    }
  },
  {
    id: 'adtemp-423',
    name: {
      tr: 'Adtemp 423 Dijital Ateş Ölçer',
      en: 'Adtemp 423 Digital Thermometer'
    },
    category: 'Thermometer',
    description: {
      tr: 'Kompakt boyutu ve pratik arayüzü ile günlük ateş takiplerine uygun dijital termometre.',
      en: 'Digital thermometer suitable for daily fever tracking with its compact size and practical interface.'
    },
    image: '/adtemp-423.jpg',
    features: {
      tr: [
        'Kompakt ve Son Derece Hafif Gövde',
        'Tek Tuşla Kolay Ölçüm Başlatma',
        'Net Görüşlü LCD Ekran',
        'Son Ölçüm Değerini Saklama',
        'Otomatik Kapanma ile Güç Tasarrufu'
      ],
      en: [
        'Compact and Extremely Lightweight Body',
        'Easy One-button Measurement Start',
        'Clear Vision LCD Screen',
        'Last Temperature Memory',
        'Auto Shut-off for Power Saving'
      ]
    }
  },
  {
    id: 'adtemp-424',
    name: {
      tr: 'Adscope Adtemp 424 Ateş Ölçer',
      en: 'Adscope Adtemp 424 Thermometer'
    },
    category: 'Thermometer',
    description: {
      tr: 'Yüksek kaliteli prob tasarımıyla hızlı ve tutarlı vücut sıcaklığı ölçümü sağlayan dijital termometre.',
      en: 'Digital thermometer providing fast and consistent body temperature measurements with a high-quality probe design.'
    },
    image: '/adtemp-424.jpg',
    features: {
      tr: [
        'Hassas Kalibre Edilmiş Sıcaklık Sensörü',
        'Hızlı Yanıt Süresi',
        'Su Geçirmez Yıkanabilir Gövde',
        'Son Okuma Belleği',
        'Sesli Uyarı Sinyali'
      ],
      en: [
        'Precision Calibrated Temperature Sensor',
        'Rapid Response Time',
        'Waterproof Washable Body',
        'Last Reading Memory',
        'Audible Warning Signal'
      ]
    }
  },
  {
    id: 'adtemp-427',
    name: {
      tr: 'Adtemp 427 Alından Temassız Ateş Ölçer',
      en: 'Adtemp 427 Non-contact Temple Thermometer'
    },
    category: 'Thermometer',
    description: {
      tr: 'Şakak bölgesinden hızlı ve temassız ölçüm yapabilen, kızılötesi teknolojili modern ateş ölçer.',
      en: 'Modern infrared thermometer capable of fast and non-contact temperature measurement from the temple area.'
    },
    image: '/adtemp-427.jpg',
    features: {
      tr: [
        'Şakaktan Kızılötesi Ölçüm Teknolojisi',
        'Temassız Hijyenik Ölçüm',
        'Hızlı ve Güvenilir Sıcaklık Analizi',
        'Son Ölçüm Hafızası',
        'Aydınlatmalı Geniş Ekran Göstergesi'
      ],
      en: [
        'Infrared Temple Reading Technology',
        'Non-contact Hygienic Measurement',
        'Quick and Reliable Heat Analysis',
        'Last Reading Memory Recall',
        'Large Backlit Screen Display'
      ]
    }
  },
  {
    id: 'adtemp-429',
    name: {
      tr: 'Adtemp 429 Kızılötesi Temassız Ateş Ölçer',
      en: 'Adtemp 429 Infrared Non-contact Thermometer'
    },
    category: 'Thermometer',
    description: {
      tr: 'Alından temassız ölçüm yapan, klinik kalitede doğruluk sunan kızılötesi temassız ateş ölçer.',
      en: 'Infant-to-adult infrared non-contact thermometer reading from the forehead, offering clinical-grade accuracy.'
    },
    image: '/adtemp-429.jpg',
    features: {
      tr: [
        'Alından Temassız Hızlı Algılama',
        'Ölçüm Mesafesi Uyarı Sensörü',
        'Yeşil/Sarı/Kırmızı Renkli Ateş Ekranı',
        '30 Ölçümlük Geniş Hafıza',
        'Sessiz Ölçüm Seçeneği (Uykudaki Bebekler İçin)'
      ],
      en: [
        'Forehead Non-contact Fast Sensing',
        'Measurement Distance Warning Sensor',
        'Green/Yellow/Red Backlight Fever Status',
        'Large 30-Reading Memory',
        'Silent Mode Option (For Sleeping Babies)'
      ]
    }
  },
  {
    id: 'adtemp-gpk',
    name: {
      tr: 'Adtemp GPK Koruyucu Kılıf Dispenseri',
      en: 'Adtemp GPK Sheath Dispenser'
    },
    category: 'Thermometer',
    description: {
      tr: 'Ateş ölçer kılıflarının pratik ve steril bir şekilde saklanıp dağıtılmasını sağlayan kılıf kutusu.',
      en: 'Sheath dispenser box enabling practical and sterile storage and distribution of thermometer covers.'
    },
    image: '/adtemp-gpk.jpg',
    features: {
      tr: [
        'Dispenser Tipi Kolay Çek-Al Kutu Tasarımı',
        'Kılıfları Toz ve Kirden Korur',
        'Duvara veya Standlara Monte Edilebilir Yapı',
        'Klinik Hijyen Standartlarını Destekler',
        'Kompakt ve Dayanıklı Karton Ambalaj'
      ],
      en: [
        'Dispenser Type Easy Pull-and-take Design',
        'Protects Sheaths from Dust and Contamination',
        'Mountable on Walls or Examination Stands',
        'Supports Clinical Hygiene Standards',
        'Compact and Durable Packaging'
      ]
    }
  },
  {
    id: 'adtemp-ultra-417',
    name: {
      tr: 'Adtemp Ultra 417 Kulaktan Ateş Ölçer',
      en: 'Adtemp Ultra 417 Tympanic Thermometer'
    },
    category: 'Thermometer',
    description: {
      tr: 'Kulak içinden son derece hassas ve saniyelik ölçüm yapabilen profesyonel timpanik ateş ölçer.',
      en: 'Professional tympanic thermometer capable of extremely precise and split-second measurements inside the ear.'
    },
    image: '/adtemp-ultra-417.png',
    features: {
      tr: [
        'Kulaktan Timpanik Hassas Sıcaklık Algılama',
        'Saniyelik Ultra Hızlı Yanıt',
        'Isıtmalı Prob Ucu ile Doğru Sonuçlar',
        'Tek Kullanımlık Prob Kılıfları ile Hijyenik Koruma',
        'Son Ölçüm Hafızası ve Dijital Aydınlatmalı Ekran'
      ],
      en: [
        'Precise Tympanic Ear Heat Sensing',
        'Split-second Ultra Fast Response',
        'Pre-warmed Tip for More Accurate Results',
        'Disposable Probe Covers for Hygienic Protection',
        'Last Reading Memory and Backlit Digital Screen'
      ]
    }
  },
  {
    id: 'heine-otoskop-uclari-25mm',
    name: {
      tr: 'HEİNE OTOSKOP UÇLARI 2.5 MM',
      en: 'Heine Otoscope Specula Tips 2.5 mm'
    },
    category: 'OtoscopeSpecula',
    description: {
      tr: 'Heine otoskop modelleri ile uyumlu, çocuk ve bebek muayeneleri için ideal 2.5 mm çapında tek kullanımlık otoskop spekülüm ucu.',
      en: 'Disposable otoscope specula tips with 2.5 mm diameter, compatible with Heine otoscope models, ideal for pediatric examinations.'
    },
    image: '/heine-otoskop-uclari-25mm.jpg',
    features: {
      tr: [
        '2.5 mm Çapında Pediatrik Profil',
        'Yüksek Kaliteli Tıbbi Plastik Malzeme',
        'Travma Yaratmayan Pürüzsüz Uç Yapısı',
        'Otoskopa Güvenli ve Tam Oturan Tasarım',
        'Tek Kullanımlık Yapısıyla Maksimum Hijyen'
      ],
      en: [
        '2.5 mm Diameter Pediatric Profile',
        'High-quality Medical-grade Plastic Material',
        'Non-traumatic Smooth Tip Design',
        'Secure and Perfect Fit to the Otoscope',
        'Maximum Hygiene with Single-use Structure'
      ]
    }
  },
  {
    id: 'kewa-otoskop-uclari-25mm',
    name: {
      tr: 'Kewa Otoskop Uçları 2.5 mm',
      en: 'Kewa Otoscope Specula Tips 2.5 mm'
    },
    category: 'OtoscopeSpecula',
    description: {
      tr: 'Kewa otoskop cihazlarına tam uyumlu, hassas kulak muayenelerinde güvenle kullanılabilen 2.5 mm spekülüm ucu.',
      en: 'Specula tips with 2.5 mm diameter fully compatible with Kewa otoscopes, ensuring safe use in sensitive ear examinations.'
    },
    image: '/kewa-otoskop-uclari-25mm.jpg',
    features: {
      tr: [
        'Kewa Otoskop Cihazları ile Uyumlu',
        '2.5 mm İnce Muayene Profili',
        'Pürüzsüz Kenarlar ve Atravmatik Tasarım',
        'Çapraz Enfeksiyon Riskini Önler',
        'Ekonomik Çoklu Paket Seçenekleri'
      ],
      en: [
        'Compatible with Kewa Otoscope Devices',
        '2.5 mm Slim Examination Profile',
        'Smooth Edges and Atraumatic Design',
        'Prevents Cross-infection Risks',
        'Economical Multi-pack Options'
      ]
    }
  },
  {
    id: 'welch-allyn-otoskop-uclari-275mm',
    name: {
      tr: 'Welch Allyn Otoskop Uçları 2.75 mm',
      en: 'Welch Allyn Otoscope Specula Tips 2.75 mm'
    },
    category: 'OtoscopeSpecula',
    description: {
      tr: 'Welch Allyn otoskopları ile kullanılmak üzere üretilmiş, çocuk kulak yapısına uygun 2.75 mm çapında hijyenik spekülüm.',
      en: 'Hygienic specula tips with 2.75 mm diameter designed for Welch Allyn otoscopes, fitting pediatric ear anatomy.'
    },
    image: '/welch-allyn-otoskop-uclari-275mm.jpg',
    features: {
      tr: [
        'Welch Allyn Otoskoplarına Tam Uyum',
        '2.75 mm Pediatrik Muayene Çapı',
        'Maksimum Işık İletimi Sağlayan İç Yüzey',
        'Kolay Takma ve Çıkarma Mekanizması',
        'Tıbbi Sınıf Hijyenik Yapı'
      ],
      en: [
        'Perfect Fit to Welch Allyn Otoscopes',
        '2.75 mm Pediatric Examination Diameter',
        'Inner Surface Providing Maximum Light Transmission',
        'Easy Attachment and Detachment Mechanism',
        'Medical-grade Hygienic Construction'
      ]
    }
  },
  {
    id: 'welch-allyn-otoskop-uclari-425mm',
    name: {
      tr: 'Welch Allyn Otoskop Uçları 4.25 mm',
      en: 'Welch Allyn Otoscope Specula Tips 4.25 mm'
    },
    category: 'OtoscopeSpecula',
    description: {
      tr: 'Welch Allyn otoskop modelleri ile uyumlu, yetişkin kulak muayeneleri için tasarlanmış 4.25 mm çapında tek kullanımlık spekülüm ucu.',
      en: 'Disposable specula tips with 4.25 mm diameter compatible with Welch Allyn otoscope models, designed for adult ear examinations.'
    },
    image: '/welch-allyn-otoskop-uclari-425mm.jpg',
    features: {
      tr: [
        'Welch Allyn Cihazları ile Uyumlu',
        '4.25 mm Yetişkin Muayene Çapı',
        'Geniş Görüş Alanı Sağlayan Profil',
        'Travmatik Etki Yaratmayan Yuvarlatılmış Kenar',
        'Çapraz Enfeksiyonu Önleyici Tek Kullanımlık Tasarım'
      ],
      en: [
        'Compatible with Welch Allyn Devices',
        '4.25 mm Adult Examination Diameter',
        'Profile Providing Wide Field of View',
        'Non-traumatic Rounded Rim Design',
        'Single-use Design to Prevent Cross-infection'
      ]
    }
  },
  {
    id: 'ince-tekli-negatoskop',
    name: {
      tr: 'İnce Tekli Negatoskop',
      en: 'Slim Single Negatoscope'
    },
    category: 'Negatoscope',
    description: {
      tr: 'LED aydınlatma teknolojisine sahip, homojen ışık dağılımı sunan ultra ince tek panel negatoskop cihazı.',
      en: 'Ultra-slim single panel negatoscope incorporating LED lighting technology, providing homogeneous light distribution.'
    },
    image: '/ince-tekli-negatoskop.jpg',
    features: {
      tr: [
        'Ultra İnce Modern Tasarım',
        'Yüksek Parlaklıklı LED Teknolojisi',
        'Gözü Yormayan Homojen Işık Dağılımı',
        'Güç Tasarruflu Uzun Ömürlü Kullanım',
        'Duvara Monte Edilebilir Pratik Kasa'
      ],
      en: [
        'Ultra-slim Modern Design',
        'High Brightness LED Technology',
        'Homogeneous Eye-friendly Light Distribution',
        'Energy Saving and Long Operational Life',
        'Practical Wall-mountable Frame'
      ]
    }
  },
  {
    id: 'ince-ciftli-negatoskop',
    name: {
      tr: 'İnce Çiftli Negatoskop',
      en: 'Slim Double Negatoscope'
    },
    category: 'Negatoscope',
    description: {
      tr: 'İki adet röntgen filminin yan yana incelenmesine olanak tanıyan, bağımsız kontrol edilebilir LED aydınlatmalı çiftli negatoskop.',
      en: 'Double panel negatoscope with independently controlled LED illumination, allowing side-by-side examination of two X-ray films.'
    },
    image: '/ince-ciftli-negatoskop.jpg',
    features: {
      tr: [
        'Çift Panelli Geniş İzleme Alanı',
        'Bağımsız Kontrol Edilebilir Işık Bölmeleri',
        'Homojen Parlak LED Işık Kaynağı',
        'İnce ve Estetik Metal Gövde Yapısı',
        'Kolay Film Sabitleme Mandalları'
      ],
      en: [
        'Double Panel Wide Viewing Area',
        'Independently Controlled Lighting Sections',
        'Homogeneous Bright LED Light Source',
        'Slim and Aesthetic Metal Body Structure',
        'Easy Film Fixing Clamps'
      ]
    }
  },
  {
    id: 'ince-uclu-negatoskop',
    name: {
      tr: 'İnce Üçlü Negatoskop',
      en: 'Slim Triple Negatoscope'
    },
    category: 'Negatoscope',
    description: {
      tr: 'Üç panelli yapısıyla birden fazla filmin aynı anda değerlendirilmesini sağlayan, yüksek performanslı ince negatoskop.',
      en: 'High-performance slim negatoscope providing simultaneous evaluation of multiple films with its triple-panel structure.'
    },
    image: '/ince-uclu-negatoskop.jpg',
    features: {
      tr: [
        'Üç Panelli Profesyonel Klinik Tasarım',
        'Genişletilmiş İzleme ve Değerlendirme Yüzeyi',
        'Ayarlanabilir Işık Şiddeti ve Homojen Işıma',
        'Dayanıklı Alüminyum Şasi Yapısı',
        'Uzun Ömürlü LED Aydınlatma Modülleri'
      ],
      en: [
        'Triple Panel Professional Clinical Design',
        'Extended Viewing and Evaluation Surface',
        'Adjustable Light Intensity and Homogeneous Emission',
        'Durable Aluminum Chassis Construction',
        'Long-lasting LED Lighting Modules'
      ]
    }
  }
];

export const categories = ['All', 'ECG', 'Monitor', 'SurgicalLight', 'Endovision', 'Electrosurgery', 'MedicalCart', 'Thermometer', 'Laryngoscope', 'CPR', 'Stethoscope', 'OtoscopeSpecula', 'Negatoscope'];
