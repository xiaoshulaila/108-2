import { sepolia } from 'wagmi/chains';
import Dream108ABI from '../contracts/abi/Dream108.json';

export const CONTRACT_CONFIG = {
  address: '0x9CdC70109130771a71074098dadCb5F3335C9c55' as `0x${string}`,
  abi: Dream108ABI,
  chainId: sepolia.id
} as const;