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
    id: 'm-1',
    name: {
      tr: 'Azmed Ultra-Scan G1',
      en: 'Azmed Ultra-Scan G1'
    },
    category: 'Imaging',
    description: {
      tr: 'Yüksek çözünürlüklü görüntüleme teknolojisi ile donatılmış yeni nesil ultrason cihazı.',
      en: 'Next-generation ultrasound device equipped with high-resolution imaging technology.'
    },
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    features: {
      tr: ['4K Görüntüleme', 'Yapay Zeka Destekli Teşhis', 'Ergonomik Tasarım'],
      en: ['4K Imaging', 'AI-Powered Diagnosis', 'Ergonomic Design']
    }
  },
  {
    id: 'm-2',
    name: {
      tr: 'Cardio-Guard Pro',
      en: 'Cardio-Guard Pro'
    },
    category: 'Cardiology',
    description: {
      tr: 'Gerçek zamanlı EKG izleme ve analiz sistemi.',
      en: 'Real-time ECG monitoring and analysis system.'
    },
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
    features: {
      tr: ['12 Kanallı EKG', 'Bulut Tabanlı Veri Saklama', 'Taşınabilir Yapı'],
      en: ['12-Channel ECG', 'Cloud-Based Data Storage', 'Portable Structure']
    }
  },
  {
    id: 'm-3',
    name: {
      tr: 'Breath-Sync Ventilator',
      en: 'Breath-Sync Ventilator'
    },
    category: 'Respiratory',
    description: {
      tr: 'Yoğun bakım üniteleri için akıllı solunum desteği ünitesi.',
      en: 'Intelligent respiratory support unit for intensive care units.'
    },
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800',
    features: {
      tr: ['Oksijen Sensörü', 'Düşük Ses Seviyesi', 'Dokunmatik Kontrol Paneli'],
      en: ['Oxygen Sensor', 'Low Noise Level', 'Touch Control Panel']
    }
  },
  {
    id: 'm-4',
    name: {
      tr: 'Lazer-Precision S1',
      en: 'Laser-Precision S1'
    },
    category: 'Surgical',
    description: {
      tr: 'Mikro cerrahi operasyonlar için tasarlanmış yüksek hassasiyetli lazer ünitesi.',
      en: 'High-precision laser unit designed for micro-surgical operations.'
    },
    image: 'https://images.unsplash.com/photo-1579154273821-0a6b83c81f7d?auto=format&fit=crop&q=80&w=800',
    features: {
      tr: ['Hassas Kesim', 'Hızlı İyileşme Desteği', 'Ayarlanabilir Güç Modları'],
      en: ['Precision Cutting', 'Fast Recovery Support', 'Adjustable Power Modes']
    }
  }
];

export const categories = ['All', 'Imaging', 'Cardiology', 'Respiratory', 'Surgical'];
