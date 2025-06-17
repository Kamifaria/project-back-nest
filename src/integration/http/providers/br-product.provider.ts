import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { BrProductDto } from '../../dto/br-product.dto';
import { ProductDto } from '../../dto/product.dto';
import { firstValueFrom } from 'rxjs';
import { ProductProviderInterface } from './product.provider.interface';

@Injectable()
export class BrProductProvider implements ProductProviderInterface {
  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
  ) {}

  async getProducts(): Promise<ProductDto[]> {
    const url = this.config.get('PRODUCTS_ENDPOINT');
    const response = await firstValueFrom(this.http.get<BrProductDto[]>(`${url}/brazilian_provider`));
    return response.data.map((item) => ({
      id: item.id,
      name: item.nome,
      description: item.descricao,
      price: item.preco,
      image: [item.imagem],
    }));
  }
}
