// src/integration/http/httpIntegration.service.ts
import { Injectable } from '@nestjs/common';
import { UnifiedProductDto } from '../dto/unified-product.dto';
import { ProductProviderInterface } from './providers/product.provider.interface';

@Injectable()
export class HttpIntegrationService {
  constructor(
    private readonly providers: ProductProviderInterface[],
  ) {}

  async getUnifiedProducts(): Promise<UnifiedProductDto[]> {
    const results = await Promise.all(
      this.providers.map((provider) => provider.getProducts())
    );
    return results.flat();
  }
}
