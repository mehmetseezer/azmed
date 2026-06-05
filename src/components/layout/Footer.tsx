import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Phone, Mail, MapPin, Globe, Share2, MessageCircle } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Navbar');
  const tc = useTranslations('Contact');
  const tf = useTranslations('Footer');

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 relative overflow-hidden rounded shadow-sm">
                <img 
                  src="/logo.jpeg" 
                  alt="Azmed Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white leading-none">AZMED</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 block">Mühendislik Elektronik</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {tf('desc')}
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Globe size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><MessageCircle size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Share2 size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{tf('corporate')}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">{t('home')}</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">{t('about')}</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">{t('products')}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('services')}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/products?type=hospital" className="hover:text-white transition-colors">{t('hospitalDevices')}</Link></li>
              <li><Link href="/products?type=veterinary" className="hover:text-white transition-colors">{t('veterinaryDevices')}</Link></li>
              <li><Link href="/services/maintenance" className="hover:text-white transition-colors">{t('maintenanceServices')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{tc('title')}</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-400 shrink-0 mt-0.5" />
                <span>{tc('addressVal')}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-blue-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span>{tc('phoneMobile')}</span>
                  <span>{tc('phoneLand')}</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400 shrink-0" />
                <a href="mailto:info@azmedmuhendislik.com" className="hover:text-white transition-colors">info@azmedmuhendislik.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Azmed Mühendislik Elektronik. {tf('rights')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">{tf('privacy')}</a>
            <a href="#" className="hover:text-white">{tf('kvkk')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
