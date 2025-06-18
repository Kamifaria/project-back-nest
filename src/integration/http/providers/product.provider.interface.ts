import { ProductDto } from '../../dto/product.dto';
import { ProductProviderType } from './product.provider-type';

export interface ProductProviderInterface {
  getProducts(): Promise<ProductDto[]>;
  getById(id: string): Promise<ProductDto>;
  getProviderType(): ProductProviderType;
}
