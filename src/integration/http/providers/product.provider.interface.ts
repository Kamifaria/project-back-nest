import { ProductDto } from '../../dto/product.dto';

export interface ProductProviderInterface {
  getProducts(): Promise<ProductDto[]>;
}
