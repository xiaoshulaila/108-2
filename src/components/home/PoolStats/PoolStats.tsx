import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useUserStats } from '../../../hooks/useUserStats';
import { useAccount } from 'wagmi';
import { useUserInfo } from '../../../hooks/useUserInfo';

export const PoolStats: React.FC = () => {
  const { t } = useLanguage();
  const { address, isConnected } = useAccount();
  const { currentIndex, threeOutOneIndex, isLoading: isStatsLoading } = useUserStats();
  const { userInfo, isLoading: isUserLoading } = useUserInfo(address);

  // 计算下一个出局会员编号
  const nextExitNumber = threeOutOneIndex + 1;

  const getUserNumberDisplay = () => {
    if (!isConnected) {
      return t('pleaseConnect');
    }
    if (isUserLoading) {
      return '...';
    }
    if (!userInfo.hasJoined) {
      return t('notJoined');
    }
    return userInfo.userId.toString();
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-[#2B3139] rounded-lg p-4">
        <div className="text-binance-text">{t('totalUsers')}</div>
        <div className="text-xl font-bold mt-1">
          {isStatsLoading ? '...' : currentIndex}
        </div>
      </div>
      <div className="bg-[#2B3139] rounded-lg p-4">
        <div className="text-binance-text">{t('exitNumber')}</div>
        <div className="text-xl font-bold mt-1">
          {isStatsLoading ? '...' : threeOutOneIndex}
        </div>
      </div>
      <div className="bg-[#2B3139] rounded-lg p-4">
        <div className="text-binance-text">{t('nextExitMember')}</div>
        <div className="text-xl font-bold mt-1 text-binance-yellow">
          {isStatsLoading ? '...' : nextExitNumber}
        </div>
      </div>
      <div className="bg-[#2B3139] rounded-lg p-4">
        <div className="text-binance-text">{t('yourNumber')}</div>
        <div className="text-xl font-bold mt-1">
          {getUserNumberDisplay()}
        </div>
      </div>
    </div>
  );
};