'use client';

import { useState, useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { Globe, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  isScrolled: boolean;
  isHome: boolean;
}

const languages = [
  { code: 'tr', label: 'Türkçe', short: 'TR' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'fr', label: 'Français', short: 'FR' },
  { code: 'az', label: 'Azərbaycan', short: 'AZ' },
];

export default function LanguageSwitcher({ isScrolled, isHome }: Props) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLocale = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale as any });
    setIsOpen(false);
  };

  const currentLang = languages.find(l => l.code === locale) || languages[0];
  
  const buttonBorderColor = (isScrolled || !isHome)
    ? "border-blue-100 hover:bg-blue-50 text-blue-900 bg-white" 
    : "border-white/20 hover:bg-white/10 text-white bg-transparent";

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-300 font-bold text-xs uppercase tracking-widest outline-none",
          buttonBorderColor
        )}
      >
        <Globe size={14} className="animate-pulse-slow" />
        <span>{currentLang.short}</span>
        <ChevronDown size={12} className={cn("transition-transform duration-300", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-2xl bg-white shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLocale(lang.code)}
              className={cn(
                "w-full text-left px-4 py-2.5 text-xs font-bold transition-colors hover:bg-blue-50 flex items-center justify-between",
                locale === lang.code ? "text-blue-600 bg-blue-50/50" : "text-gray-700 hover:text-blue-600"
              )}
            >
              <span>{lang.label}</span>
              {locale === lang.code && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
