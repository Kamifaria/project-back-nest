// src/integration/http/httpIntegration.service.ts
import { Injectable } from '@nestjs/common';
import { ProductDto } from '../dto/product.dto';
import { ProductProviderInterface } from './providers/product.provider.interface';
import { ProductProviderType } from './providers/product.provider-type';

@Injectable()
export class HttpIntegrationService {
    constructor(
        private readonly providers: ProductProviderInterface[],
    ) { }

    async getUnifiedProducts(): Promise<ProductDto[]> {
        const results = await Promise.all(
            this.providers.map((provider) => provider.getProducts())
        );
        return results.flat();
    }

    async getById(id: string, origin: ProductProviderType): Promise<ProductDto> {
        const provider = this.providers.find((provider) => provider.getProviderType() === origin) ?? (() => { throw new Error(`Provider not found for ${origin}`); })();
        return provider.getById(id);
    }
}
