import ContactContent from './ContactClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const title = locale === 'tr' ? 'İletişim' : (locale === 'az' ? 'Bizimlə Əlaqə' : (locale === 'fr' ? 'Contactez-nous' : 'Contact Us'));
  return {
    title,
  };
}

export default async function ContactPage() {
  return <ContactContent />;
}
