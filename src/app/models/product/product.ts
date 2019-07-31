export enum priceType {
  SELL = 'SELL',
  BUY = 'BUY'
}

export interface Product {
  id: number;
  name: string;
  currencyIso: string;
  details: string;
  formattedValue: string;
  img: string;
  priceType: priceType;
  value: number;
}
