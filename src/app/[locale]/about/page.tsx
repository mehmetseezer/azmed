import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Target, Users, Award, Clock, ShieldCheck, Heart, Sparkles, Building2 } from 'lucide-react';

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('About');

  const stats = [
    { icon: Clock, label: t('stats.exp'), value: '20+' },
    { icon: Users, label: t('stats.clients'), value: '1000+' },
    { icon: Award, label: t('stats.products'), value: '250+' },
    { icon: Building2, label: t('stats.points'), value: '50+' },
  ];

  const values = [
    { icon: ShieldCheck, title: t('value1Title'), desc: t('value1Desc') },
    { icon: Sparkles, title: t('value2Title'), desc: t('value2Desc') },
    { icon: Heart, title: t('value3Title'), desc: t('value3Desc') },
    { icon: Target, title: t('value4Title'), desc: t('value4Desc') },
  ];

  return (
    <main className="pt-32 pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6">
               <span className="w-2 h-2 rounded-full bg-blue-600" />
               {t('title')}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 mb-8 leading-[1.1]">
              {t('subtitle')}
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light max-w-2xl">
              {t('description')}
            </p>
            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              {stats.map((stat, i) => (
                <div key={i} className="group">
                  <div className="flex items-center gap-4 text-blue-600 mb-2">
                    <div className="p-3 bg-blue-50 rounded-2xl group-hover:scale-110 transition-transform">
                      <stat.icon size={28} />
                    </div>
                    <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                  </div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest ml-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10" />
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
                alt="Azmed Office" 
                className="rounded-[3.5rem] shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700 relative z-10"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-green-100 rounded-full -z-10 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Vision & Mission with Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <div className="relative p-12 rounded-[4rem] bg-blue-900 text-white overflow-hidden group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 group-hover:scale-125 transition-transform duration-1000" />
             <h2 className="text-4xl font-bold mb-8 relative z-10">{t('vision')}</h2>
             <p className="text-xl text-blue-100 leading-relaxed relative z-10 font-light">
               {t('visionText')}
             </p>
          </div>
          <div className="relative p-12 rounded-[4rem] bg-green-600 text-white overflow-hidden group">
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 group-hover:scale-125 transition-transform duration-1000" />
             <h2 className="text-4xl font-bold mb-8 relative z-10">{t('mission')}</h2>
             <p className="text-xl text-green-50 leading-relaxed relative z-10 font-light">
               {t('missionText')}
             </p>
          </div>
        </div>

        {/* History Timeline */}
        <div className="mb-32">
          <div className="text-center mb-20">
             <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('journey')}</h2>
             <p className="text-gray-500">{t('journeyText')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { year: '2004', title: t('m1Title'), desc: t('m1Desc') },
              { year: '2012', title: t('m2Title'), desc: t('m2Desc') },
              { year: '2024', title: t('m3Title'), desc: t('m3Desc') },
            ].map((milestone, i) => (
              <div key={i} className="relative p-8 rounded-3xl bg-gray-50 border border-gray-100 group hover:bg-white hover:shadow-xl transition-all">
                <div className="text-4xl font-black text-blue-600/20 mb-4 group-hover:text-blue-600 transition-colors">{milestone.year}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 rounded-[4rem] p-16 md:p-24">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('values')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('valuesText')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white text-blue-600 rounded-3xl flex items-center justify-center mb-6 shadow-xl border border-blue-50">
                  <value.icon size={36} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
