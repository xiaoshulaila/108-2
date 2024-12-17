import { STORAGE_KEYS } from './constants';
import { clearIndexedDB } from './indexedDB';

/**
 * 清除所有钱包相关的存储
 */
export function clearWalletStorage() {
  // 清除 localStorage
  clearStorageByType(localStorage);
  
  // 清除 sessionStorage
  clearStorageByType(sessionStorage);
  
  // 清除 IndexedDB
  clearIndexedDB();
}

/**
 * 清除指定存储类型中的钱包数据
 */
function clearStorageByType(storage: Storage) {
  Object.keys(storage).forEach(key => {
    if (isWalletStorageKey(key)) {
      storage.removeItem(key);
    }
  });
}

/**
 * 检查是否为钱包相关的存储键
 */
function isWalletStorageKey(key: string): boolean {
  return Object.values(STORAGE_KEYS).some(prefix => 
    key.startsWith(prefix)
  );
}