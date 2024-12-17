import React from 'react';
import { Gift } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Layout from '../components/Layout';
import { RewardHistory, LuckyPool } from '../components/rewards';

export const Rewards: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Layout title={t('rewards')} icon={<Gift className="text-binance-yellow" />}>
      <div className="p-4 max-w-screen-xl mx-auto space-y-8 pb-20">
        <LuckyPool />
        <RewardHistory />
      </div>
    </Layout>
  );
};