import ContactContent from './ContactClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isTr = locale === 'tr';
  return {
    title: isTr ? 'İletişim' : 'Contact Us',
  };
}

export default async function ContactPage() {
  return <ContactContent />;
}
