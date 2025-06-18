import { ApiProperty } from "@nestjs/swagger";
import { ProductProviderType } from "../http/providers/product.provider-type";

export class ProductDto {

  @ApiProperty({ example: 1 })
  id: string;

  @ApiProperty({ example: "product-1" })
  name: string;
  
  @ApiProperty({ example: "Product 1" })
  description: string;
  
  @ApiProperty({ example: 100 })
  price: number;
  
  @ApiProperty({ example: ["https://example.com/product-1.jpg"] })
  image?: string[];
  
  @ApiProperty({ example: "category-1" })
  category?: string;
  
  @ApiProperty({ example: "material-1" })
  material?: string;
  
  @ApiProperty({ example: true })
  hasDiscount?: boolean;

  @ApiProperty({ example: "brazilian" })
  origin: ProductProviderType;
}