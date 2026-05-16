'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function WhatsAppButton() {
  const t = useTranslations('Contact');
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Show after 2 seconds
    const timer = setTimeout(() => {
      if (!isClosed) setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [isClosed]);

  if (isClosed || !isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-2 group">
      {/* Tooltip/Label */}
      <div className="bg-white px-4 py-2 rounded-xl shadow-xl border border-green-100 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        <p className="text-sm font-medium text-gray-700">{t('whatsappLabel')}</p>
      </div>

      <div className="relative">
        <a
          href="https://wa.me/905000000000" // Replace with real number
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95 animate-bounce-subtle"
        >
          <MessageCircle size={32} />
        </a>
        
        {/* Close Button */}
        <button
          onClick={() => setIsClosed(true)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-white border border-gray-200 text-gray-400 rounded-full flex items-center justify-center hover:text-red-500 hover:border-red-100 transition-colors shadow-sm"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
