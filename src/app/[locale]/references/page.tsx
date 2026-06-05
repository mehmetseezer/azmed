import { setRequestLocale } from 'next-intl/server';
import { Building2, Award } from 'lucide-react';
import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const title = locale === 'tr' ? 'Referanslarımız | Azmed Mühendislik' : (locale === 'az' ? 'Referanslarımız | Azmed Mühendislik' : (locale === 'fr' ? 'Nos Références | Azmed' : 'References | Azmed'));
  return {
    title,
  };
}

export default async function ReferencesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const references = [
    { name: 'T.C. Sağlık Bakanlığı', type: 'Kamu Kurumu', logo: '/references/saglik-bakanligi-logo.png' },
    { name: 'Amerikan Hastanesi', type: 'Özel Hastane', logo: '/references/amerikan-hastanesi.png' },
    { name: 'Bezmialem Vakıf Üniversitesi Hastanesi', type: 'Üniversite Hastanesi', logo: '/references/bezmialem-logo.png' },
    { name: 'Medipol Sağlık Grubu', type: 'Sağlık Grubu', logo: '/references/medipol-logo.jpg' },
    { name: 'Bayındır Sağlık Grubu', type: 'Sağlık Grubu', logo: '/references/bayindir-saglik-logo.png' },
    { name: 'Güven Hastanesi', type: 'Özel Hastane', logo: '/references/guven-logo.png' },
    { name: 'Hisar Intercontinental Hospital', type: 'Özel Hastane', logo: '/references/hisar-logo.png' },
    { name: 'Okan Üniversitesi Hastanesi', type: 'Üniversite Hastanesi', logo: '/references/okan-logo.jpg' },
    { name: 'Emsey Hospital', type: 'Özel Hastane', logo: '/references/emsey-logo.png' },
    { name: 'Erdem Sağlık Grubu', type: 'Sağlık Grubu', logo: '/references/erdem-saglik-grubu.jpg' },
    { name: 'Avrasya Hastanesi', type: 'Özel Hastane', logo: '/references/avrasya-hastanesi.jpg' },
    { name: 'Afiyet Hastanesi', type: 'Özel Hastane', logo: '/references/afiyet-hastanesi-logo.jpg' },
    { name: 'Batı Tıp Merkezi', type: 'Tıp Merkezi', logo: '/references/batı-tip-logo.png' },
    { name: 'Çağsu Hastanesi', type: 'Özel Hastane', logo: '/references/cagsu-logo.png' },
    { name: 'Çevre Hastanesi', type: 'Özel Hastane', logo: '/references/cevre-logo.png' },
    { name: 'Derindere Hastanesi', type: 'Özel Hastane', logo: '/references/derindere-hastane-logo.png' },
    { name: 'Deva Hastanesi', type: 'Özel Hastane', logo: '/references/deva-logo.png' },
    { name: 'Duygu Hastanesi', type: 'Özel Hastane', logo: '/references/duygu-hastanesi-logo.png' },
    { name: 'Esencan Hastanesi', type: 'Özel Hastane', logo: '/references/esencan-hastanesi.png' },
    { name: 'Mono Tıp Merkezi', type: 'Tıp Merkezi', logo: '/references/mono-tip-logo.png' }
  ];

  const getLocalizedType = (type: string) => {
    if (locale === 'en') {
      if (type === 'Kamu Kurumu') return 'Public Institution';
      if (type === 'Özel Hastane') return 'Private Hospital';
      if (type === 'Üniversite Hastanesi') return 'University Hospital';
      if (type === 'Sağlık Grubu') return 'Healthcare Group';
      if (type === 'Tıp Merkezi') return 'Medical Center';
    }
    if (locale === 'fr') {
      if (type === 'Kamu Kurumu') return 'Institution Publique';
      if (type === 'Özel Hastane') return 'Hôpital Privé';
      if (type === 'Üniversite Hastanesi') return 'Hôpital Universitaire';
      if (type === 'Sağlık Grubu') return 'Groupe Hospitalier';
      if (type === 'Tıp Merkezi') return 'Centre Médical';
    }
    if (locale === 'az') {
      if (type === 'Kamu Kurumu') return 'Dövlət Müəssisəsi';
      if (type === 'Özel Hastane') return 'Özəl Xəstəxana';
      if (type === 'Üniversite Hastanesi') return 'Universitet Xəstəxanası';
      if (type === 'Sağlık Grubu') return 'Sağlamlıq Qrupu';
      if (type === 'Tıp Merkezi') return 'Tibb Mərkəzi';
    }
    return type;
  };

  const pageTexts = {
    tr: {
      tag: "Referanslarımız",
      title: "Güven ve İş Birliği",
      desc: "Azmed Mühendislik Elektronik olarak, Türkiye'nin dört bir yanındaki önde gelen sağlık kuruluşlarına güvenilir çözümler ve teknik destek sunmaktan gurur duyuyoruz.",
      bannerTitle: "1000'den Fazla Başarılı Proje",
      bannerDesc: "Medikal cihazların kurulumundan teknik servisine kadar her adımda çözüm ortaklarımızın yanındayız. Güvenilir mühendislik hizmetimizle sağlığın geleceğine katkıda bulunuyoruz.",
      bannerCta: "Bizimle Çalışın"
    },
    en: {
      tag: "Our References",
      title: "Trust & Collaboration",
      desc: "As Azmed Medical Electronics, we are proud to provide reliable medical solutions and technical support to leading healthcare institutions across Turkey.",
      bannerTitle: "Over 1000 Successful Projects",
      bannerDesc: "We support our solution partners at every step, from medical device installation to technical service. We contribute to the future of healthcare with our reliable engineering.",
      bannerCta: "Work With Us"
    },
    fr: {
      tag: "Nos Références",
      title: "Confiance & Collaboration",
      desc: "En tant qu'Azmed Medical Electronics, nous sommes fiers de fournir des solutions médicales et un support technique fiables aux principaux établissements de santé en Turquie.",
      bannerTitle: "Plus de 1000 Projets Réussis",
      bannerDesc: "Nous accompagnons nos partenaires à chaque étape, de l'installation des appareils médicaux au service technique. Nous contribuons à l'avenir de la santé avec notre ingénierie fiable.",
      bannerCta: "Travailler Avec Nous"
    },
    az: {
      tag: "Referanslarımız",
      title: "Güvən və Əməkdaşlıq",
      desc: "Azmed Mühendislik Elektronik olaraq, Türkiyənin dörd bir yanındakı qabaqcıl səhiyyə müəssisələrinə etibarlı tibbi həllər və texniki dəstək təqdim etməkdən qürur duyuruq.",
      bannerTitle: "1000-dən Çox Uğurlu Layihə",
      bannerDesc: "Tibbi avadanlıqların quraşdırılmasından texniki xidmətinə qədər hər mərhələdə tərəfdaşlarımızın yanındayıq. Etibarlı mühəndislik xidmətimizlə səhiyyənin gələcəyinə töhfə veririk.",
      bannerCta: "Bizimlə İşləyin"
    }
  };
  const texts = pageTexts[locale as 'tr' | 'en' | 'fr' | 'az'] || pageTexts.tr;

  return (
    <main className="pt-32 pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            {texts.tag}
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-8">{texts.title}</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            {texts.desc}
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {references.map((ref, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="h-32 md:h-36 flex items-center justify-center p-6 bg-gray-50 border border-gray-100 rounded-3xl hover:bg-white hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <img 
                  src={ref.logo} 
                  alt={ref.name}
                  className="max-w-full max-h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-3 right-3 bg-blue-50 text-blue-600 p-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100 duration-300">
                  <Award size={14} />
                </div>
              </div>
              <div className="px-2">
                <div className="flex items-center gap-1.5 text-blue-600 text-[10px] font-extrabold uppercase tracking-wider mb-1">
                  <Building2 size={10} />
                  {getLocalizedType(ref.type)}
                </div>
                <h3 className="text-sm font-bold text-gray-800 leading-snug">{ref.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Trust Banner */}
        <div className="mt-32 p-8 md:p-20 rounded-[3rem] md:rounded-[4rem] bg-blue-900 text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{texts.bannerTitle}</h2>
            <p className="text-blue-100 text-lg max-w-xl">
              {texts.bannerDesc}
            </p>
          </div>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 md:px-10 md:py-5 bg-white text-blue-900 font-bold rounded-full hover:scale-105 transition-all shadow-2xl relative z-10 whitespace-nowrap text-base md:text-lg"
          >
            {texts.bannerCta}
          </Link>
        </div>
      </div>
    </main>
  );
}
