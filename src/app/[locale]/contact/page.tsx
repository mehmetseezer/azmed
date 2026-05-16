'use client';

import { useTranslations } from 'next-intl';
import { Phone, Mail, MapPin, Send, MessageCircle, ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const t = useTranslations('Contact');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
    setFormState({ name: '', email: '', message: '' });
  };

  const faqs = [
    { q: t('faq1Q'), a: t('faq1A') },
    { q: t('faq2Q'), a: t('faq2A') },
    { q: t('faq3Q'), a: t('faq3A') },
    { q: t('faq4Q'), a: t('faq4A') }
  ];

  return (
    <main className="pt-32 pb-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6">
             <span className="w-2 h-2 rounded-full bg-blue-600" />
             {t('title')}
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-8">{t('title')}</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          {/* Contact Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-8 rounded-[2.5rem] bg-white shadow-sm border border-gray-100 flex items-start gap-6 group hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <Phone size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t('phone')}</h3>
                <p className="text-gray-600 font-medium">+90 (212) 000 00 00</p>
                <p className="text-gray-400 text-sm mt-1">Pzt - Cmt: 09:00 - 18:00</p>
              </div>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-white shadow-sm border border-gray-100 flex items-start gap-6 group hover:shadow-2xl hover:shadow-green-100 transition-all duration-500">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t('email')}</h3>
                <p className="text-gray-600 font-medium">info@azmed.com.tr</p>
                <p className="text-gray-400 text-sm mt-1">7/24 Yanıtlıyoruz</p>
              </div>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-white shadow-sm border border-gray-100 flex items-start gap-6 group hover:shadow-2xl hover:shadow-red-100 transition-all duration-500">
              <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t('address')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  İstanbul Teknoloji Geliştirme Bölgesi, No: 123, Kat: 4, 34000 Pendik / İstanbul
                </p>
              </div>
            </div>

            <a 
              href="https://wa.me/905000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 rounded-[2.5rem] bg-green-500 text-white shadow-xl shadow-green-100 group hover:bg-green-600 transition-all text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 animate-pulse" />
              <div className="flex items-center justify-center gap-3 font-bold text-lg relative z-10">
                <MessageCircle size={28} />
                {t('whatsappSupport')}
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full -mr-32 -mt-32 blur-3xl" />
              <h2 className="text-3xl font-bold text-gray-900 mb-8 relative z-10">{t('send')}</h2>
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider">{t('formName')}</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-900"
                      placeholder="Ahmet Yılmaz"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider">{t('formEmail')}</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-900"
                      placeholder="ahmet@mail.com"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider">{t('formMessage')}</label>
                  <textarea 
                    rows={6}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all resize-none text-gray-900"
                    placeholder={t('formPlaceholder')}
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={isSent}
                  className={`w-full flex items-center justify-center gap-3 font-bold py-6 rounded-[2rem] transition-all shadow-2xl ${
                    isSent 
                    ? 'bg-green-500 text-white cursor-default scale-[0.98]' 
                    : 'bg-blue-900 text-white hover:bg-blue-950 hover:shadow-blue-200 active:scale-95'
                  }`}
                >
                  {isSent ? (
                    <>{t('success')}</>
                  ) : (
                    <>
                      <Send size={22} />
                      {t('send')}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 text-blue-600 font-bold mb-6">
               <HelpCircle size={24} />
               {t('faqTitle')}
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-gray-900">{faq.q}</span>
                    <ChevronDown size={20} className={`text-gray-400 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {activeFaq === i && (
                    <div className="px-8 pb-6 text-gray-600 animate-in fade-in slide-in-from-top-2 duration-300">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative h-[450px] bg-gray-200 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.28189679234!2d28.871752!3d41.005237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1cc1e01f4ca15!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
