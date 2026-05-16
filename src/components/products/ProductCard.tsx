import { Link } from '@/i18n/routing';
import { Product } from '@/data/products';
import { ArrowRight, Info } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

export default function ProductCard({ product }: { product: Product }) {
  const locale = useLocale() as 'tr' | 'en';
  const t = useTranslations('Navbar'); // Using Navbar namespace for general translations if needed

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name[locale]}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            {product.category}
          </span>
        </div>
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10 backdrop-blur-[2px]">
           <span className="bg-white text-blue-900 px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
             {locale === 'tr' ? 'İncele' : 'View'}
           </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {product.name[locale]}
        </h3>
        <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed">
          {product.description[locale]}
        </p>
        
        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
          <Link 
            href={`/products/${product.id}`}
            className="flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all"
          >
            {locale === 'tr' ? 'Detaylı Bilgi' : 'Product Details'} <ArrowRight size={16} />
          </Link>
          <div className="text-gray-300">
            <Info size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
