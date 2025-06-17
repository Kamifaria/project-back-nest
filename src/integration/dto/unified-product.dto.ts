export class UnifiedProductDto {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string[];
  category?: string;
  material?: string;
  hasDiscount?: boolean;
}