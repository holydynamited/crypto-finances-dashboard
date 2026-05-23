
import { House, BriefcaseBusiness, type LucideIcon } from "lucide-react";

export interface Asset {
  id: string;
  ticker: string;
  name: string;
  balance: number;
  icon: string;
  price?: number;
  change24h?: number;
}


export const assetsConfig : Asset[]= [
  {
    id: 'bitcoin', 
    ticker: 'BTC',
    name: 'Bitcoin',
    balance: 10,
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/bitcoin/info/logo.png'
  },
  {
    id: 'ethereum',
    ticker: 'ETH',
    name: 'Ethereum',
    balance: 10.2504,
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png'
  },
  {
    id: 'solana',
    ticker: 'SOL',
    name: 'Solana',
    balance: 60.5,
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/solana/info/logo.png'
  },
  {
    id: 'sui',
    ticker: 'SUI',
    name: 'Sui',
    balance: 1250.5,
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/sui/info/logo.png'
  },
  {
    id: 'cardano',
    ticker: 'ADA',
    name: 'Cardano',
    balance: 5400.0,
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/cardano/info/logo.png'
  },
  {
    id: 'polkadot',
    ticker: 'DOT',
    name: 'Polkadot',
    balance: 120.75,
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polkadot/info/logo.png'
  },
  {
    id: 'chainlink',
    ticker: 'LINK',
    name: 'Chainlink',
    balance: 85.2,
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png'
  },
  {
    id: 'dogecoin',
    ticker: 'DOGE',
    name: 'Dogecoin',
    balance: 15000.0,
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/doge/info/logo.png'
  },
  {
    id: 'avalanche-2',
    ticker: 'AVAX',
    name: 'Avalanche',
    balance: 45.33,
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchex/info/logo.png'
  },
  
]


export interface SidebarItems {
  label: string;
  path: string;
  icon: LucideIcon;
}
export const items: SidebarItems[]= [
  {label:"Assets", path:"/", icon: House},
  {label:"Portfolio", path:"/portfolio", icon: BriefcaseBusiness},
]