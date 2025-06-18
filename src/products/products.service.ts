import { Injectable } from '@nestjs/common';
import { HttpIntegrationService } from 'src/integration/http/httpIntegration.service';
import { ProductProviderType } from 'src/integration/http/providers/product.provider-type';

@Injectable()
export class ProductsService {

  constructor(private readonly httpIntegrationService: HttpIntegrationService) {}

  findAll() {
    return this.httpIntegrationService.getUnifiedProducts();
  }

  findById(id: string, origin: ProductProviderType) {
    return this.httpIntegrationService.getById(id, origin);
  }
}
