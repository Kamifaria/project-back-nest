import { UnifiedProductDto } from '../../dto/unified-product.dto';

export interface ProductProviderInterface {
  getProducts(): Promise<UnifiedProductDto[]>;
}
