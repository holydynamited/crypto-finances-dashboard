export type UiCoin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  price: number;
  change24h: number;
  inPortfolio: boolean;
  balance?: number;
};
