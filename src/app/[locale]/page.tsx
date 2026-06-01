import { getTranslations, setRequestLocale } from 'next-intl/server';
import HeroCarousel from '@/components/home/HeroCarousel';
import { Link } from '@/i18n/routing';
import { ArrowRight, ShieldCheck, Zap, HeartPulse, Microscope, Award, Headphones, Globe } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isTr = locale === 'tr';
  return {
    title: {
      absolute: isTr ? 'Azmed Mühendislik Elektronik | Tıbbi Cihazlar' : 'Azmed Medical Electronics | Medical Devices'
    }
  };
}

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tAbout = await getTranslations('About');
  const tHome = await getTranslations('Home');

  const features = [
    { 
      icon: ShieldCheck, 
      title: tHome('feature1Title'), 
      desc: tHome('feature1Desc'),
      color: 'text-blue-600', 
      bg: 'bg-blue-50' 
    },
    { 
      icon: Zap, 
      title: tHome('feature2Title'), 
      desc: tHome('feature2Desc'),
      color: 'text-green-600', 
      bg: 'bg-green-50' 
    },
    { 
      icon: HeartPulse, 
      title: tHome('feature3Title'), 
      desc: tHome('feature3Desc'),
      color: 'text-red-600', 
      bg: 'bg-red-50' 
    }
  ];

  const whyUs = [
    { icon: Microscope, title: tHome('whyUs1Title'), value: tHome('whyUs1Desc') },
    { icon: Award, title: tHome('whyUs2Title'), value: tHome('whyUs2Desc') },
    { icon: Globe, title: tHome('whyUs3Title'), value: tHome('whyUs3Desc') },
    { icon: Headphones, title: tHome('whyUs4Title'), value: tHome('whyUs4Desc') },
  ];

  return (
    <main>
      <HeroCarousel />
      
      {/* Partners Section (Ticker) */}
      <div className="py-12 bg-white border-b border-gray-50">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">{tHome('partners')}</p>
          <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-50">
            {['SAMSUNG', 'PHILIPS', 'GE HEALTHCARE', 'SIEMENS', 'TOSHIBA'].map((brand) => (
              <span key={brand} className="text-2xl font-black tracking-tighter text-gray-900">{brand}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{tHome('featuresTitle')}</h2>
            <p className="text-gray-600 text-lg">{tHome('featuresDesc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, i) => (
              <div key={i} className="group p-10 rounded-[3rem] bg-gray-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 border border-transparent hover:border-blue-50">
                <div className={`${feature.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300`}>
                  <feature.icon className={`${feature.color}`} size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview with Stats */}
      <section className="py-32 bg-blue-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800 skew-x-12 translate-x-24 opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">{tAbout('title')}</h2>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed opacity-90">
                {tAbout('description')}
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                {whyUs.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <item.icon className="text-green-400" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-blue-200">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link 
                href="/about"
                className="inline-flex items-center gap-3 bg-white text-blue-900 px-10 py-5 rounded-full font-bold hover:gap-5 transition-all shadow-xl"
              >
                {tHome('readMore')} <ArrowRight size={20} />
              </Link>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                  alt="Medical Device"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 bg-green-500 p-8 rounded-3xl shadow-2xl z-20 animate-bounce-subtle text-white">
                <div className="text-4xl font-black mb-1">20+</div>
                <div className="text-sm font-bold uppercase tracking-wider">{tAbout('stats.exp')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto p-8 md:p-16 rounded-[3rem] md:rounded-[4rem] bg-gradient-to-br from-blue-50 to-green-50 border border-blue-100/50">
             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-8">{tHome('ctaTitle')}</h2>
             <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-10">{tHome('ctaDesc')}</p>
             <Link 
               href="/contact" 
               className="inline-block bg-blue-900 text-white px-8 py-4 md:px-12 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-blue-950 transition-all shadow-2xl shadow-blue-200 hover:scale-105"
             >
               {tHome('ctaButton')}
             </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
