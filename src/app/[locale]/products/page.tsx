import { Suspense } from 'react';
import ProductsContent from './ProductsClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isTr = locale === 'tr';
  return {
    title: isTr ? 'Ürünlerimiz' : 'Our Products',
  };
}

export default async function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
