'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  isScrolled: boolean;
  isHome: boolean;
}

export default function LanguageSwitcher({ isScrolled, isHome }: Props) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === 'tr' ? 'en' : 'tr';
    router.replace(pathname, { locale: nextLocale });
  };

  const textColor = (isScrolled || !isHome) ? 'text-blue-900' : 'text-white';

  return (
    <button
      onClick={toggleLocale}
      className={cn(
        "flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 font-bold text-xs uppercase tracking-widest",
        (isScrolled || !isHome) 
          ? "border-blue-100 hover:bg-blue-50 text-blue-900" 
          : "border-white/20 hover:bg-white/10 text-white"
      )}
    >
      <Globe size={14} className="animate-pulse-slow" />
      <span>{locale === 'tr' ? 'EN' : 'TR'}</span>
    </button>
  );
}
