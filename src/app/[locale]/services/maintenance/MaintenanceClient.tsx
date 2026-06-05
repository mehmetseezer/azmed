'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { 
  Wrench, 
  Settings, 
  Activity, 
  Cpu, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Heart, 
  Zap, 
  Loader2 
} from 'lucide-react';

const content = {
  tr: {
    badge: "Teknik Servis & Mühendislik",
    title: "Bakım & Onarım Hizmetleri",
    description: "Tıbbi cihazlarınızın sürdürülebilir, güvenli ve yüksek performansla çalışması için profesyonel teknik servis ve periyodik bakım hizmetleri sunuyoruz.",
    servicesTitle: "Hizmet Kapsamımız",
    servicesSubtitle: "Uzman mühendis kadromuzla dünya standartlarında servis sağlıyoruz.",
    card1Title: "Periyodik Koruyucu Bakım",
    card1Desc: "Cihazlarınızın arıza riskini minimize etmek ve kullanım ömrünü uzatmak için düzenli aralıklarla detaylı kontrol ve temizlik yapıyoruz.",
    card2Title: "Kalibrasyon Hizmetleri",
    card2Desc: "Teşhis ve tedavi süreçlerinde en hassas sonuçlar için cihazlarınızı uluslararası standartlara uygun şekilde kalibre ediyoruz.",
    card3Title: "Arıza Tespit ve Onarım",
    card3Desc: "Oluşan donanımsal ve yazılımsal arızaları en son teknolojik test cihazlarımızla hızla tespit ediyor ve orijinal yedek parçalarla onarıyoruz.",
    card4Title: "Yedek Parça Desteği",
    card4Desc: "Geniş distribütör ağımız sayesinde en kritik tıbbi cihaz bileşenleri için hızlı, güvenilir ve orijinal yedek parça tedariki sağlıyoruz.",
    formTitle: "Teknik Servis Talep Formu",
    formSubtitle: "Cihazınızla ilgili arıza, periyodik bakım veya kalibrasyon taleplerinizi hızlıca iletin. Teknik ekibimiz en kısa sürede dönüş yapacaktır.",
    formName: "Adınız Soyadınız",
    formInstitution: "Kurum / Hastane Adı",
    formEmail: "E-posta Adresiniz",
    formPhone: "Telefon Numaranız",
    formDevice: "Cihaz Adı / Modeli",
    formRequestType: "Talep Türü",
    formRequestTypes: ["Periyodik Bakım", "Arıza Onarım", "Kalibrasyon", "Yedek Parça", "Diğer"],
    formDetails: "Talep Detayı ve Arıza Açıklaması",
    formPlaceholder: "Lütfen cihazın durumunu veya almak istediğiniz hizmeti detaylıca açıklayın...",
    formSubmit: "Talep Gönder",
    formSuccess: "Teknik servis talebiniz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçilecektir.",
    featuresTitle: "Neden Azmed Teknik Servis?",
    f1Title: "Uzman Kadro",
    f1Desc: "Sertifikalı mühendis ve teknisyen ekibimizle profesyonel müdahale.",
    f2Title: "7/24 Kesintisiz Destek",
    f2Desc: "Kritik cihazlar için kesintisiz acil servis ve çağrı yönetimi.",
    f3Title: "Orijinal Parça Garantisi",
    f3Desc: "Onarımlarda sadece onaylı ve orijinal üretici yedek parçaları kullanılır.",
    f4Title: "Hızlı Müdahale",
    f4Desc: "Hizmet kesintilerini en aza indirmek için yerinde ve hızlı servis garantisi."
  },
  en: {
    badge: "Technical Service & Engineering",
    title: "Maintenance & Repair Services",
    description: "We offer professional technical service and periodic maintenance services to ensure your medical devices operate sustainably, safely, and with high performance.",
    servicesTitle: "Our Service Scope",
    servicesSubtitle: "We provide world-class service with our expert engineering staff.",
    card1Title: "Periodic Preventive Maintenance",
    card1Desc: "We perform detailed control and cleaning at regular intervals to minimize the risk of failure and extend the life of your devices.",
    card2Title: "Calibration Services",
    card2Desc: "We calibrate your devices in accordance with international standards for the most accurate results in diagnostic and treatment processes.",
    card3Title: "Diagnostics & Repair",
    card3Desc: "We quickly detect hardware and software failures using our latest technological test equipment and repair them with original spare parts.",
    card4Title: "Spare Parts Support",
    card4Desc: "Thanks to our wide distributor network, we provide fast, reliable, and original spare parts supply for the most critical medical device components.",
    formTitle: "Technical Service Request Form",
    formSubtitle: "Quickly submit your failure, periodic maintenance, or calibration requests. Our technical team will respond as soon as possible.",
    formName: "Full Name",
    formInstitution: "Institution / Hospital Name",
    formEmail: "Email Address",
    formPhone: "Phone Number",
    formDevice: "Device Name / Model",
    formRequestType: "Request Type",
    formRequestTypes: ["Periodic Maintenance", "Breakdown Repair", "Calibration", "Spare Parts", "Other"],
    formDetails: "Request Detail & Issue Description",
    formPlaceholder: "Please explain the device condition or the service you wish to receive in detail...",
    formSubmit: "Send Request",
    formSuccess: "Your technical service request has been successfully received. We will contact you as soon as possible.",
    featuresTitle: "Why Choose Azmed Service?",
    f1Title: "Expert Staff",
    f1Desc: "Professional intervention with our certified team of engineers and technicians.",
    f2Title: "24/7 Support",
    f2Desc: "Uninterrupted emergency service and call management for critical devices.",
    f3Title: "Original Parts Guarantee",
    f3Desc: "Only approved and original manufacturer spare parts are used in repairs.",
    f4Title: "Rapid Response",
    f4Desc: "On-site and fast service guarantee to minimize service interruptions."
  },
  fr: {
    badge: "Service Technique & Ingénierie",
    title: "Services d'Entretien et Réparation",
    description: "Nous offrons des services d'assistance technique professionnelle et de maintenance périodique pour garantir le fonctionnement durable, sûr et performant de vos dispositifs médicaux.",
    servicesTitle: "Notre Champ d'Intervention",
    servicesSubtitle: "Nous fournissons un service de classe mondiale avec notre équipe d'ingénieurs experts.",
    card1Title: "Maintenance Préventive Périodique",
    card1Desc: "Nous effectuons des contrôles et nettoyages détaillés à intervalles réguliers pour minimiser les risques de panne et prolonger la durée de vie de vos appareils.",
    card2Title: "Services d'Étalonnage",
    card2Desc: "Nous étalonnons vos appareils conformément aux normes internationales pour des résultats plus précis dans les processus de diagnostic et traitement.",
    card3Title: "Diagnostics et Réparation",
    card3Desc: "Nous détectons rapidement les pannes matérielles et logicielles grâce à nos équipements de test technologiques et les réparons avec des pièces d'origine.",
    card4Title: "Support de Pièces de Rechange",
    card4Desc: "Grâce à notre vaste réseau de distributeurs, nous fournissons rapidement des pièces de rechange d'origine fiables pour les composants les plus critiques.",
    formTitle: "Formulaire de Demande de Service Technique",
    formSubtitle: "Soumettez rapidement vos demandes de dépannage, d'entretien périodique ou d'étalonnage. Notre équipe technique vous répondra dans les plus brefs délais.",
    formName: "Nom et Prénom",
    formInstitution: "Nom de l'Établissement / Hôpital",
    formEmail: "Adresse e-mail",
    formPhone: "Numéro de Téléphone",
    formDevice: "Nom de l'Appareil / Modèle",
    formRequestType: "Type de Demande",
    formRequestTypes: ["Maintenance Périodique", "Dépannage / Réparation", "Étalonnage", "Pièces de Rechange", "Autre"],
    formDetails: "Détails de la demande et description du problème",
    formPlaceholder: "Veuillez expliquer en détail l'état de l'appareil ou le service souhaité...",
    formSubmit: "Envoyer la Demande",
    formSuccess: "Votre demande de service technique a bien été reçue. Nous vous contacterons dans les plus brefs délais.",
    featuresTitle: "Pourquoi le service Azmed ?",
    f1Title: "Équipe d'Experts",
    f1Desc: "Intervention professionnelle avec notre équipe certifiée d'ingénieurs et techniciens.",
    f2Title: "Assistance 24/7",
    f2Desc: "Service d'urgence ininterrompu et gestion des appels pour les appareils critiques.",
    f3Title: "Garantie des Pièces d'Origine",
    f3Desc: "Seules des pièces de rechange approuvées par le fabricant d'origine sont utilisées.",
    f4Title: "Réponse Rapide",
    f4Desc: "Garantie de service rapide sur site pour minimiser les interruptions d'activité."
  },
  az: {
    badge: "Texniki Xidmət və Mühəndislik",
    title: "Baxım və Təmir Xidmətləri",
    description: "Tibbi cihazlarınızın davamlı, təhlükəsiz və yüksək performansla işləməsi üçün peşəkar texniki xidmət və dövri profilaktik baxım xidmətləri təqdim edirik.",
    servicesTitle: "Xidmət Sahələrimiz",
    servicesSubtitle: "Mütəxəssis mühəndis heyətimizlə dünya standartlarında xidmət təmin edirik.",
    card1Title: "Dövri Profilaktik Baxım",
    card1Desc: "Cihazlarınızın sıradan çıxma riskini minimuma endirmək və istismar müddətini uzatmaq üçün müntəzəm nəzarət və təmizlik həyata keçiririk.",
    card2Title: "Kalibrləmə Xidmətləri",
    card2Desc: "Diaqnostika və müalicə proseslərində ən dəqiq nəticələr üçün cihazlarınızı beynəlxalq standartlara uyğun şəkildə kalibrləyirik.",
    card3Title: "Nasazlıqların Təyini və Təmiri",
    card3Desc: "Meydana gələn aparat və proqram nasazlıqlarını ən son texnoloji test avadanlıqlarımızla sürətlə təyin edir və orijinal ehtiyat hissələri ilə təmir edirik.",
    card4Title: "Ehtiyat Hissələrinin Təminatı",
    card4Desc: "Geniş distribyutor şəbəkəmiz sayəsində ən kritik tibbi cihaz komponentləri üçün sürətli, etibarlı və orijinal ehtiyat hissələrinin tədarükünü təmin edirik.",
    formTitle: "Texniki Xidmət Sorğu Formu",
    formSubtitle: "Cihazınızla bağlı nasazlıq, dövri baxım və ya kalibrləmə sorğularınızı sürətlə göndərin. Texniki komandamız ən qısa zamanda əlaqə saxlayacaqdır.",
    formName: "Adınız Soyadınız",
    formInstitution: "Müəssisə / Xəstəxana Adı",
    formEmail: "E-poçt Ünvanınız",
    formPhone: "Telefon Nömrəniz",
    formDevice: "Cihazın Adı / Modeli",
    formRequestType: "Sorğu Növü",
    formRequestTypes: ["Dövri Baxım", "Nasazlığın Təmiri", "Kalibrləmə", "Ehtiyat Hissəsi", "Digər"],
    formDetails: "Sorğu Detalları və Nasazlıq Açıqlaması",
    formPlaceholder: "Zəhmət olmasa cihazın vəziyyətini və ya almaq istədiyiniz xidməti ətraflı izah edin...",
    formSubmit: "Sorğu Göndər",
    formSuccess: "Texniki xidmət sorğunuz uğurla qəbul edilmişdir. Ən qısa zamanda sizinlə əlaqə saxlanılacaqdır.",
    featuresTitle: "Niyə Azmed Texniki Xidmət?",
    f1Title: "Mütəxəssis Heyət",
    f1Desc: "Sertifikatlı mühəndis və texnik komandamızla peşəkar müdaxilə.",
    f2Title: "7/24 Kəsilməz Dəstək",
    f2Desc: "Kritik cihazlar üçün kəsilməz təcili xidmət və zənglərin idarə edilməsi.",
    f3Title: "Orijinal Hissə Zəmanəti",
    f3Desc: "Təmirlərdə yalnız təsdiqlənmiş və orijinal istehsalçı ehtiyat hissələrindən istifadə olunur.",
    f4Title: "Sürətli Müdaxilə",
    f4Desc: "Xidmətin dayandırılmasını minimuma endirmək üçün yerində və sürətli xidmət zəmanəti."
  }
};

export default function MaintenanceClient() {
  const locale = useLocale() as 'tr' | 'en' | 'fr' | 'az';
  const t = content[locale] || content.tr;

  const [form, setForm] = useState({
    name: '',
    institution: '',
    email: '',
    phone: '',
    device: '',
    requestType: t.formRequestTypes[0],
    details: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({
        name: '',
        institution: '',
        email: '',
        phone: '',
        device: '',
        requestType: t.formRequestTypes[0],
        details: ''
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const services = [
    { icon: Settings, title: t.card1Title, desc: t.card1Desc, bg: 'bg-blue-50', text: 'text-blue-600' },
    { icon: Activity, title: t.card2Title, desc: t.card2Desc, bg: 'bg-green-50', text: 'text-green-600' },
    { icon: Wrench, title: t.card3Title, desc: t.card3Desc, bg: 'bg-red-50', text: 'text-red-600' },
    { icon: Cpu, title: t.card4Title, desc: t.card4Desc, bg: 'bg-purple-50', text: 'text-purple-600' },
  ];

  const features = [
    { icon: ShieldCheck, title: t.f1Title, desc: t.f1Desc },
    { icon: Clock, title: t.f2Title, desc: t.f2Desc },
    { icon: Heart, title: t.f3Title, desc: t.f3Desc },
    { icon: Zap, title: t.f4Title, desc: t.f4Desc }
  ];

  return (
    <main className="pt-32 pb-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Hero Banner */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-28">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              {t.badge}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 mb-8 leading-[1.1]">
              {t.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-light max-w-2xl">
              {t.description}
            </p>
          </div>
          <div className="flex-1 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10 animate-pulse" />
            <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white hover:scale-[1.02] transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Technical Maintenance" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.servicesTitle}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{t.servicesSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="group p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 hover:-translate-y-1"
              >
                <div className={`${service.bg} ${service.text} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features / Why Us */}
        <div className="bg-blue-900 text-white rounded-[4rem] p-16 md:p-24 mb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-32 -mb-32" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-center mb-20">{t.featuresTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {features.map((feature, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white/10 text-green-400 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed opacity-80">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Support Request Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-16 rounded-[4rem] shadow-xl shadow-blue-50 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full -mr-32 -mt-32 blur-3xl" />
            
            <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.formTitle}</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{t.formSubtitle}</p>
            </div>

            {isSuccess && (
              <div className="mb-8 p-6 bg-green-50 border border-green-200 text-green-700 rounded-3xl flex items-center gap-4 animate-in fade-in slide-in-from-top duration-300 relative z-10">
                <CheckCircle2 className="text-green-600 shrink-0" size={28} />
                <p className="font-semibold text-sm leading-relaxed">{t.formSuccess}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">{t.formName}</label>
                  <input 
                    type="text" 
                    required
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-950"
                    placeholder="Ahmet Yılmaz"
                  />
                </div>

                {/* Institution Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">{t.formInstitution}</label>
                  <input 
                    type="text" 
                    required
                    value={form.institution}
                    onChange={(e) => setForm({...form, institution: e.target.value})}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-950"
                    placeholder="Kartal Devlet Hastanesi"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">{t.formEmail}</label>
                  <input 
                    type="email" 
                    required
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-950"
                    placeholder="ahmet@hastane.gov.tr"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">{t.formPhone}</label>
                  <input 
                    type="tel" 
                    required
                    value={form.phone}
                    onChange={(e) => setForm({...form, phone: e.target.value})}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-950"
                    placeholder="0555 123 4567"
                  />
                </div>

                {/* Device Details */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">{t.formDevice}</label>
                  <input 
                    type="text" 
                    required
                    value={form.device}
                    onChange={(e) => setForm({...form, device: e.target.value})}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-950"
                    placeholder="Comen CM1200B EKG Cihazı"
                  />
                </div>

                {/* Request Type */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">{t.formRequestType}</label>
                  <select 
                    value={form.requestType}
                    onChange={(e) => setForm({...form, requestType: e.target.value})}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-gray-950 appearance-none cursor-pointer"
                  >
                    {t.formRequestTypes.map((typeOption) => (
                      <option key={typeOption} value={typeOption}>{typeOption}</option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Request Details */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">{t.formDetails}</label>
                <textarea 
                  rows={5}
                  required
                  value={form.details}
                  onChange={(e) => setForm({...form, details: e.target.value})}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all resize-none text-gray-950"
                  placeholder={t.formPlaceholder}
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full flex items-center justify-center gap-3 font-bold py-5 rounded-2xl transition-all shadow-xl ${
                  isSuccess 
                  ? 'bg-green-500 text-white cursor-default scale-[0.98]' 
                  : 'bg-blue-900 text-white hover:bg-blue-950 hover:shadow-blue-200 active:scale-95 disabled:opacity-50'
                }`}
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" size={22} />
                ) : isSuccess ? (
                  t.formSuccess.substring(0, 30) + '...'
                ) : (
                  <>
                    <Send size={20} />
                    {t.formSubmit}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>
    </main>
  );
}
