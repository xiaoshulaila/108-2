import { common } from './modules/common';
import { investment } from './modules/investment';
import { profile } from './modules/profile';
import { rewards } from './modules/rewards';
import { navigation } from './modules/navigation';
import { rankings } from './modules/rankings';

// 合并所有翻译
export const translations = {
  zh: {
    ...common.zh,
    ...investment.zh,
    ...profile.zh,
    ...rewards.zh,
    ...navigation.zh,
    ...rankings.zh
  },
  en: {
    ...common.en,
    ...investment.en,
    ...profile.en,
    ...rewards.en,
    ...navigation.en,
    ...rankings.en
  }
};