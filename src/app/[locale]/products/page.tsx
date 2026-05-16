'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function ProductsPage() {
  const t = useTranslations('Navbar');
  const tp = useTranslations('Home'); // Using Home translations for common terms
  const locale = useLocale() as 'tr' | 'en';
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(p => {
    const name = p.name[locale];
    const description = p.description[locale];
    
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            {locale === 'tr' ? 'Ürün Kataloğumuz' : 'Product Catalog'}
          </h1>
          <p className="text-gray-600 text-lg">
            {locale === 'tr' 
              ? 'En yeni tıbbi teknolojileri ve çözümlerimizi inceleyin. İhtiyacınıza en uygun cihazı bulmak için filtreleri kullanabilirsiniz.' 
              : 'Explore our latest medical technologies and solutions. You can use filters to find the most suitable device for your needs.'}
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat === 'All' ? (locale === 'tr' ? 'Tümü' : 'All') : cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder={locale === 'tr' ? 'Ürün ara...' : 'Search products...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Results Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-100">
            <SlidersHorizontal size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">
              {locale === 'tr' ? 'Aradığınız kriterlere uygun ürün bulunamadı.' : 'No products found matching your criteria.'}
            </p>
            <button 
              onClick={() => {setSelectedCategory('All'); setSearchQuery('');}}
              className="mt-4 text-blue-600 font-bold hover:underline"
            >
              {locale === 'tr' ? 'Filtreleri Temizle' : 'Clear Filters'}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
