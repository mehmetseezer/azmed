import { setRequestLocale } from 'next-intl/server';
import MaintenanceClient from './MaintenanceClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isTr = locale === 'tr';
  const isFr = locale === 'fr';
  const isAz = locale === 'az';

  const title = isTr 
    ? 'Bakım Onarım Hizmetleri' 
    : (isAz 
      ? 'Baxım və Təmir Xidmətləri' 
      : (isFr 
        ? 'Services d\'Entretien et Réparation' 
        : 'Maintenance & Repair Services'));
  return {
    title,
  };
}

export default async function MaintenancePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <MaintenanceClient />;
}
