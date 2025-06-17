import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { EuProductDto } from '../../dto/eu-product.dto';
import { UnifiedProductDto } from '../../dto/unified-product.dto';
import { firstValueFrom } from 'rxjs';
import { ProductProviderInterface } from './product.provider.interface';

@Injectable()
export class EuProductProvider implements ProductProviderInterface {
  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
  ) {}

  async getProducts(): Promise<UnifiedProductDto[]> {
    const url = this.config.get('PRODUCTS_ENDPOINT');
    const response = await firstValueFrom(this.http.get<EuProductDto[]>(`${url}/european_provider`));
    return response.data.map((item) => ({
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price, 
      image: item.gallery,
    }));
  }
}
