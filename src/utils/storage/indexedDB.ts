const WALLET_DATABASES = [
  'wagmi',
  'wallet-connect-v2'
] as const;

/**
 * 清除钱包相关的 IndexedDB
 */
export function clearIndexedDB() {
  if (!window.indexedDB) return;

  WALLET_DATABASES.forEach(dbName => {
    try {
      window.indexedDB.deleteDatabase(dbName);
    } catch (error) {
      console.error(`Failed to delete IndexedDB ${dbName}:`, error);
    }
  });
}