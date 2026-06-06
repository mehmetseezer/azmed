'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

const slides = [
  {
    id: 1,
    image: '/hero1.png',
    titleKey: 'slide1Title',
    subtitleKey: 'slide1Subtitle',
  },
  {
    id: 2,
    image: '/2018_08_ameliyathane_3.jpg',
    titleKey: 'slide2Title',
    subtitleKey: 'slide2Subtitle',
  },
  {
    id: 3,
    image: '/hero3.png',
    titleKey: 'slide3Title',
    subtitleKey: 'slide3Subtitle',
  },
];

export default function HeroCarousel() {
  const t = useTranslations('Hero');
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {/* Subtle Ken Burns effect */}
          <motion.div 
            animate={{ scale: [1, 1.05] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0"
          >
            <img 
              src={slides[current].image} 
              alt="Healthcare Technology" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Dynamic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full container mx-auto px-6 flex items-center">
        <motion.div 
          key={current + '-content'}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-6 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {t('badge')}
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
            {t(slides[current].titleKey)}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed font-light">
            {t(slides[current].subtitleKey)}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/products" 
              className="px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-all shadow-xl hover:scale-105"
            >
              {t('cta')}
            </Link>
            <Link 
              href="/about" 
              className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              {t('about')}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-12 right-12 flex gap-4 z-20">
        <button 
          onClick={prev}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all backdrop-blur-md group"
        >
          <ChevronLeft className="group-active:-translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={next}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all backdrop-blur-md group"
        >
          <ChevronRight className="group-active:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-6 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 transition-all rounded-full ${current === i ? 'w-12 bg-white' : 'w-4 bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  );
}
