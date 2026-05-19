import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Building2, Award, ExternalLink } from 'lucide-react';
import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isTr = locale === 'tr';
  return {
    title: isTr ? 'Referanslarımız' : 'References',
  };
}

export default async function ReferencesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Navbar');

  const references = [
    { name: 'İstanbul Şehir Hastanesi', location: 'İstanbul', type: 'Devlet Hastanesi', image: 'https://images.unsplash.com/photo-1587350859728-117622bc937e?auto=format&fit=crop&q=80&w=800' },
    { name: 'Ankara Tıp Merkezi', location: 'Ankara', type: 'Özel Klinik', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800' },
    { name: 'Ege Üniversitesi Hastanesi', location: 'İzmir', type: 'Üniversite Hastanesi', image: 'https://images.unsplash.com/photo-1586773860418-d3b97976c661?auto=format&fit=crop&q=80&w=800' },
    { name: 'Acıbadem Sağlık Grubu', location: 'Genel', type: 'Özel Hastane Zinciri', image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=800' },
    { name: 'Medicana Hastaneler Grubu', location: 'Genel', type: 'Özel Hastane Zinciri', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800' },
    { name: 'Kızılay Kan Merkezleri', location: 'Türkiye Geneli', type: 'Kurumsal', image: 'https://images.unsplash.com/photo-1538108149393-fdfd81895907?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <main className="pt-32 pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6">
             <span className="w-2 h-2 rounded-full bg-blue-600" />
             Kurumsal
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-8">{t('references')}</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Azmed Mühendislik Elektronik olarak Türkiye'nin dört bir yanındaki sağlık kuruluşlarına güvenilir çözümler sunmaktan gurur duyuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {references.map((ref, i) => (
            <div key={i} className="group relative rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 bg-white">
              <div className="h-64 overflow-hidden">
                <img 
                  src={ref.image} 
                  alt={ref.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">
                  <Building2 size={14} />
                  {ref.type}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{ref.name}</h3>
                <p className="text-gray-500 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  {ref.location}
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100 duration-300">
                <Award className="text-blue-600" size={24} />
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Trust Banner */}
        <div className="mt-32 p-12 md:p-20 rounded-[4rem] bg-blue-900 text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
           <div className="relative z-10">
             <h2 className="text-3xl md:text-5xl font-bold mb-6">1000'den Fazla <span className="text-blue-400">Başarılı Proje</span></h2>
             <p className="text-blue-100 text-lg max-w-xl">
               Medikal cihazların kurulumundan teknik servisine kadar her adımda çözüm ortaklarımızın yanındayız. Güvenilir mühendislik hizmetimizle sağlığın geleceğine katkıda bulunuyoruz.
             </p>
           </div>
           <Link 
             href="/contact"
             className="px-10 py-5 bg-white text-blue-900 font-bold rounded-full hover:scale-105 transition-all shadow-2xl relative z-10"
           >
             Bizimle Çalışın
           </Link>
        </div>
      </div>
    </main>
  );
}
