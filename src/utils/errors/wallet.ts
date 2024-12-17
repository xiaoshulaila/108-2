interface WalletError {
  code?: number;
  message?: string;
}

/**
 * 处理钱包错误
 */
export function handleWalletError(error: unknown) {
  const walletError = error as WalletError;
  
  // 用户取消操作不需要显示错误
  if (walletError.code === 4001) {
    return;
  }

  console.error('Wallet operation failed:', error);
}