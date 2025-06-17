// src/integration/http/httpIntegration.service.ts
import { Injectable } from '@nestjs/common';
import { ProductDto } from '../dto/product.dto';
import { ProductProviderInterface } from './providers/product.provider.interface';

@Injectable()
export class HttpIntegrationService {
  constructor(
    private readonly providers: ProductProviderInterface[],
  ) {}

  async getUnifiedProducts(): Promise<ProductDto[]> {
    const results = await Promise.all(
      this.providers.map((provider) => provider.getProducts())
    );
    return results.flat();
  }
}
