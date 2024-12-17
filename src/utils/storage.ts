const STORAGE_KEYS = {
  WAGMI: 'wagmi',
  WALLET: 'wallet',
  WC: 'wc@',
  DREAM: 'dream108_'
};

/**
 * 清除所有钱包相关的存储
 */
export function clearWalletStorage() {
  // 清除 localStorage
  Object.keys(localStorage).forEach(key => {
    if (isWalletStorageKey(key)) {
      localStorage.removeItem(key);
    }
  });
  
  // 清除 sessionStorage
  Object.keys(sessionStorage).forEach(key => {
    if (isWalletStorageKey(key)) {
      sessionStorage.removeItem(key);
    }
  });
  
  // 清除 IndexedDB
  clearWalletIndexedDB();
}

/**
 * 检查是否为钱包相关的存储键
 */
function isWalletStorageKey(key: string): boolean {
  return Object.values(STORAGE_KEYS).some(prefix => 
    key.startsWith(prefix)
  );
}

/**
 * 清除钱包相关的 IndexedDB
 */
function clearWalletIndexedDB() {
  if (!window.indexedDB) return;

  const databases = [
    'wagmi',
    'wallet-connect-v2'
  ];

  databases.forEach(dbName => {
    try {
      window.indexedDB.deleteDatabase(dbName);
    } catch (error) {
      console.error(`Failed to delete IndexedDB ${dbName}:`, error);
    }
  });
}