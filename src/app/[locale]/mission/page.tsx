import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Target, Eye, ShieldCheck, Heart } from 'lucide-react';

export default async function MissionPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('About');

  return (
    <main className="pt-32 pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6">
             <span className="w-2 h-2 rounded-full bg-blue-600" />
             Kurumsal
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-8">Misyon & Vizyon</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Azmed Mühendislik Elektronik olarak değerlerimizi ve geleceğe bakış açımızı temsil eden temel ilkelerimiz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div className="p-12 md:p-16 rounded-[4rem] bg-blue-900 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 group-hover:scale-125 transition-transform duration-1000" />
            <Target className="text-blue-400 mb-8" size={64} />
            <h2 className="text-4xl font-bold mb-8 relative z-10">{t('mission')}</h2>
            <p className="text-xl text-blue-100 leading-relaxed relative z-10 font-light">
              {t('missionText')}
            </p>
          </div>
          <div className="p-12 md:p-16 rounded-[4rem] bg-green-600 text-white relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 group-hover:scale-125 transition-transform duration-1000" />
            <Eye className="text-green-300 mb-8" size={64} />
            <h2 className="text-4xl font-bold mb-8 relative z-10">{t('vision')}</h2>
            <p className="text-xl text-green-50 leading-relaxed relative z-10 font-light">
              {t('visionText')}
            </p>
          </div>
        </div>

        {/* Values (Small version) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { icon: ShieldCheck, title: t('value1Title'), desc: t('value1Desc') },
             { icon: Heart, title: t('value3Title'), desc: t('value3Desc') },
             { icon: ShieldCheck, title: 'Kalite Standartları', desc: 'Uluslararası standartlarda sertifikalı ürün ve hizmet anlayışı.' },
             { icon: Heart, title: 'Sürdürülebilirlik', desc: 'Sağlıkta uzun vadeli ve güvenilir çözümler üretme kararlılığı.' }
           ].map((v, i) => (
             <div key={i} className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
               <v.icon className="text-blue-600 mb-4" size={32} />
               <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
               <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </main>
  );
}
