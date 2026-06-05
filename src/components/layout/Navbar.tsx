'use client';

import { useState, useEffect } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';
import { categories } from '@/data/products';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const tCat = useTranslations('Categories');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCorporateOpen, setIsCorporateOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const navColor = (isScrolled || !isHome) ? 'text-blue-900' : 'text-white';
  const bgColor = (isScrolled || !isHome) ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-transparent';

  const corporateLinks = [
    { href: '/about', label: t('about') },
    { href: '/mission', label: t('mission') },
    { href: '/references', label: t('references') },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6",
      bgColor
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-12 h-12 relative overflow-hidden rounded-xl shadow-md transition-transform group-hover:scale-105">
            <img 
              src="/logo.jpeg" 
              alt="Azmed Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "text-2xl font-bold tracking-tight transition-colors leading-none",
              navColor
            )}>AZMED</span>
            <span className={cn(
              "text-[10px] font-bold uppercase tracking-widest opacity-70",
              navColor
            )}>Mühendislik Elektronik</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <Link href="/" className={cn("text-sm font-bold hover:text-blue-500 transition-colors", navColor)}>
            {t('home')}
          </Link>

          {/* Corporate Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsCorporateOpen(true)}
            onMouseLeave={() => setIsCorporateOpen(false)}
          >
            <button className={cn("text-sm font-bold flex items-center gap-1 hover:text-blue-500 transition-colors", navColor)}>
              {t('corporate')} <ChevronDown size={14} className={cn("transition-transform", isCorporateOpen && "rotate-180")} />
            </button>
            <div className={cn(
              "absolute top-full left-0 pt-2 w-56 transition-all duration-300 origin-top",
              isCorporateOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            )}>
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 overflow-hidden">
                {corporateLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href}
                    className="block px-6 py-2.5 text-sm font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className={cn("text-sm font-bold flex items-center gap-1 hover:text-blue-500 transition-colors", navColor)}>
              {t('services')} <ChevronDown size={14} className={cn("transition-transform", isServicesOpen && "rotate-180")} />
            </button>
            <div className={cn(
              "absolute top-full left-0 pt-2 w-64 transition-all duration-300 origin-top",
              isServicesOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            )}>
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 overflow-hidden">
                <Link 
                  href="/products?type=hospital"
                  className="block px-6 py-2.5 text-sm font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {t('hospitalDevices')}
                </Link>
                <Link 
                  href="/products?type=veterinary"
                  className="block px-6 py-2.5 text-sm font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {t('veterinaryDevices')}
                </Link>
                <Link 
                  href="/services/maintenance"
                  className="block px-6 py-2.5 text-sm font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-t border-gray-50"
                >
                  {t('maintenanceServices')}
                </Link>
              </div>
            </div>
          </div>

          <Link href="/contact" className={cn("text-sm font-bold hover:text-blue-500 transition-colors", navColor)}>
            {t('contact')}
          </Link>
          
          <div className="h-6 w-[1px] bg-gray-200 mx-2" />
          <LanguageSwitcher isScrolled={isScrolled} isHome={isHome} />
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <LanguageSwitcher isScrolled={isScrolled} isHome={isHome} />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={cn("p-2 transition-colors", navColor)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300 max-h-[85vh] overflow-y-auto">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-900 border-b border-gray-50 pb-2">
            {t('home')}
          </Link>
          
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t('corporate')}</span>
            {corporateLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="text-lg font-bold text-blue-900 pl-4"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t('services')}</span>
            <Link 
              href="/products?type=hospital" 
              onClick={() => setIsOpen(false)} 
              className="text-lg font-bold text-blue-900 pl-4"
            >
              {t('hospitalDevices')}
            </Link>
            <Link 
              href="/products?type=veterinary" 
              onClick={() => setIsOpen(false)} 
              className="text-lg font-bold text-blue-900 pl-4"
            >
              {t('veterinaryDevices')}
            </Link>
            <Link 
              href="/services/maintenance" 
              onClick={() => setIsOpen(false)} 
              className="text-lg font-bold text-blue-900 pl-4"
            >
              {t('maintenanceServices')}
            </Link>
          </div>

          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-900">
            {t('contact')}
          </Link>
        </div>
      )}
    </nav>
  );
}
