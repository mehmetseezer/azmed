import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Link, routing } from '@/i18n/routing';
import { ArrowLeft, MessageCircle, CheckCircle2, Shield, Truck } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string; id: string }> }) {
  const { locale, id } = await params;
  const loc = locale as 'tr' | 'en' | 'fr' | 'az';
  const product = products.find((p) => p.id === id);
  if (!product) {
    return {
      title: loc === 'tr' ? 'Ürün Bulunamadı' : (loc === 'az' ? 'Məhsul Tapılmadı' : (loc === 'fr' ? 'Produit Non Trouvé' : 'Product Not Found')),
    };
  }
  return {
    title: product.name[loc],
    description: product.description[loc],
  };
}

export function generateStaticParams() {
  const params = [];
  
  for (const locale of routing.locales) {
    for (const product of products) {
      params.push({ locale, id: product.id });
    }
  }
  
  return params;
}

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const prodLocale = locale as 'tr' | 'en' | 'fr' | 'az';

  const t = {
    back: locale === 'tr' ? 'Ürünlere Dön' : (locale === 'az' ? 'Məhsullara Dön' : (locale === 'fr' ? 'Retour aux Produits' : 'Back to Products')),
    features: locale === 'tr' ? 'Öne Çıkan Özellikler' : (locale === 'az' ? 'Önə Çıxan Xüsusiyyətlər' : (locale === 'fr' ? 'Caractéristiques Principales' : 'Key Features')),
    warranty: locale === 'tr' ? 'Garanti' : (locale === 'az' ? 'Zəmanət' : (locale === 'fr' ? 'Garantie' : 'Warranty')),
    warrantyDesc: locale === 'tr' ? '2 Yıl Tam Destek' : (locale === 'az' ? '2 İl Tam Dəstək' : (locale === 'fr' ? '2 Ans de Support' : '2 Years Support')),
    delivery: locale === 'tr' ? 'Teslimat' : (locale === 'az' ? 'Çatdırılma' : (locale === 'fr' ? 'Livraison' : 'Delivery')),
    deliveryDesc: locale === 'tr' ? 'Hızlı Kurulum' : (locale === 'az' ? 'Sürətli Quraşdırma' : (locale === 'fr' ? 'Installation Rapide' : 'Fast Setup')),
    whatsapp: locale === 'tr' ? 'WhatsApp ile Bilgi Al' : (locale === 'az' ? 'WhatsApp ilə Məlumat Al' : (locale === 'fr' ? 'Info via WhatsApp' : 'Get Info via WhatsApp')),
    contact: locale === 'tr' ? 'İletişime Geç' : (locale === 'az' ? 'Əlaqə Saxlayın' : (locale === 'fr' ? 'Contactez-nous' : 'Contact Us'))
  };

  const categoryNames: Record<string, { tr: string; en: string; fr: string; az: string }> = {
    ECG: { tr: 'EKG Cihazları', en: 'ECG Devices', fr: 'Électrocardiographes', az: 'EKQ Cihazları' },
    Monitor: { tr: 'Hastabaşı Monitörleri', en: 'Patient Monitors', fr: 'Moniteurs multiparamétriques', az: 'Xəstəbaşı Monitorları' },
    SurgicalLight: { tr: 'Ameliyathane ve Muayene Lambaları', en: 'Surgical & Examination Lights', fr: 'Lampes chirurgicales et d\'examen', az: 'Əməliyyat və Müayinə Lampaları' },
    Endovision: { tr: 'Endovizyon Sistemleri', en: 'Endovision Systems', fr: 'Systèmes d\'endovision', az: 'Endoviziya Sistemləri' },
    Electrosurgery: { tr: 'Koter Cihazları', en: 'Electrosurgical Units', fr: 'Bistouris électriques', az: 'Koter Cihazları' },
    MedicalCart: { tr: 'Medikal Arabalar', en: 'Medical Carts', fr: 'Chariots médicaux', az: 'Tibbi Arabalar' },
    Thermometer: { tr: 'Ateş Ölçerler', en: 'Thermometers', fr: 'Thermomètres', az: 'Termometrlər' },
    Laryngoscope: { tr: 'Laringoskoplar', en: 'Laryngoscopes', fr: 'Laryngoscopes', az: 'Larinqoskoplar' },
    CPR: { tr: 'ADC CPR', en: 'ADC CPR', fr: 'ADC CPR', az: 'ADC CPR' },
    Stethoscope: { tr: 'Steteskoplar', en: 'Stethoscopes', fr: 'Stéthoscopes', az: 'Stetoskoplar' },
    OtoscopeSpecula: { tr: 'Otoskop Spekülüm Uçları', en: 'Otoscope Specula Tips', fr: 'Spéculums pour otoscope', az: 'Otoskop Spekulum Ucları' },
    Negatoscope: { tr: 'Negatoskop', en: 'Negatoscopes', fr: 'Négatoscopes', az: 'Neqatoskop' },
    Imaging: { tr: 'Görüntüleme Cihazları', en: 'Imaging Devices', fr: 'Imagerie médicale', az: 'Görüntüləmə Cihazları' },
    Cardiology: { tr: 'Kardiyoloji Cihazları', en: 'Cardiology Devices', fr: 'Cardiologie', az: 'Kardioloji Cihazlar' },
    Respiratory: { tr: 'Solunum Cihazları', en: 'Respiratory Devices', fr: 'Systèmes respiratoires', az: 'Tənəffüs Cihazları' },
    Surgical: { tr: 'Cerrahi Cihazlar', en: 'Surgical Devices', fr: 'Instruments chirurgicaux', az: 'Cərrahi Cihazlar' },
    SurgicalTable: { tr: 'Ameliyat Masaları', en: 'Operating Tables', fr: 'Tables d\'opération', az: 'Əməliyyat Masaları' },
    Tourniquet: { tr: 'Turnike Cihazları', en: 'Tourniquet Devices', fr: 'Tourniquets', az: 'Turniket Cihazları' },
    Defibrillator: { tr: 'Defibrilatör Cihazları', en: 'Defibrillator Devices', fr: 'Défibrillateurs', az: 'Defibrilyator Cihazları' }
  };

  const getDetailCategoryLabel = () => {
    const cat = product.category;
    if (cat === 'Endovision') {
      if (product.type === 'veterinary') {
        return prodLocale === 'tr' ? 'Endoskopi Cihazları' 
             : prodLocale === 'az' ? 'Endoskopiya Cihazları' 
             : prodLocale === 'fr' ? "Appareils d'endoscopie" 
             : 'Endoscopy Devices';
      } else {
        return prodLocale === 'tr' ? 'Endovizyon Sistemleri' 
             : prodLocale === 'az' ? 'Endoviziya Sistemləri' 
             : prodLocale === 'fr' ? "Systèmes d'endovision" 
             : 'Endovision Systems';
      }
    }
    return categoryNames[cat]?.[prodLocale] || cat;
  };

  return (
    <main className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Breadcrumb */}
        <Link 
          href="/products" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-12 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          {t.back}
        </Link>
 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-inner">
              <img 
                src={product.image} 
                alt={product.name[prodLocale]}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                 {product.images.map((img, i) => (
                   <div key={i} className="aspect-square rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                      <img src={img} alt={product.name[prodLocale]} className="w-full h-full object-cover" />
                   </div>
                 ))}
              </div>
            )}
          </div>
 
          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4 block">
                {getDetailCategoryLabel()}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{product.name[prodLocale]}</h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {product.description[prodLocale]}
              </p>
            </div>

            {/* Features List */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{t.features}</h3>
              <ul className="space-y-4">
                {product.features[prodLocale].map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-700">
                    <CheckCircle2 className="text-green-500 shrink-0" size={24} />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-4">
                <Shield className="text-blue-600" size={32} />
                <div>
                  <p className="text-xs text-gray-500 font-medium">{t.warranty}</p>
                  <p className="text-sm font-bold text-gray-900">{t.warrantyDesc}</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-4">
                <Truck className="text-blue-600" size={32} />
                <div>
                  <p className="text-xs text-gray-500 font-medium">{t.delivery}</p>
                  <p className="text-sm font-bold text-gray-900">{t.deliveryDesc}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://wa.me/905524286125?text=${encodeURIComponent(
                  prodLocale === 'tr' 
                  ? `${product.name[prodLocale]} hakkında bilgi almak istiyorum.` 
                  : (prodLocale === 'az' ? `${product.name[prodLocale]} haqqında məlumat almaq istəyirəm.` : (prodLocale === 'fr' ? `Je souhaite obtenir des informations sur ${product.name[prodLocale]}.` : `I would like to get information about ${product.name[prodLocale]}.`))
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 bg-green-500 text-white font-bold py-5 rounded-2xl hover:bg-green-600 transition-all shadow-xl shadow-green-100 active:scale-95"
              >
                <MessageCircle size={24} />
                {t.whatsapp}
              </a>
              <Link 
                href="/contact"
                className="flex-1 flex items-center justify-center bg-blue-900 text-white font-bold py-5 rounded-2xl hover:bg-blue-950 transition-all active:scale-95"
              >
                {t.contact}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
