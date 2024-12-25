export interface ExchangeBase {
  name: string;
  url: string;
  description: string;
  category: 'dex' | 'analytics' | 'media';
}

export interface ExchangeWithIcon extends ExchangeBase {
  icon: LucideIcon;
}

export interface ExchangeWithImage extends ExchangeBase {
  imageUrl: string;
}

export type Exchange = ExchangeWithIcon | ExchangeWithImage;