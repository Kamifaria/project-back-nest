import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { BrProductDto } from '../../dto/br-product.dto';
import { ProductDto } from '../../dto/product.dto';
import { firstValueFrom } from 'rxjs';
import { ProductProviderInterface } from './product.provider.interface';
import { ProductProviderType } from './product.provider-type';

@Injectable()
export class BrProductProvider implements ProductProviderInterface {
  private readonly baseUrl: string;

  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
  ) {
    this.baseUrl = this.config.get<string>('PRODUCTS_ENDPOINT')!!;
  }
  getProviderType() { return ProductProviderType.BRAZILIAN;}

  async getById(id: string): Promise<ProductDto> {
    const item = await this.fetchSingleProduct(id);
    return this.mapToProductDto(item);
  }

  async getProducts(): Promise<ProductDto[]> {
    const items = await this.fetchAllProducts();
    return items.map(this.mapToProductDto);
  }

  private async fetchSingleProduct(id: string): Promise<BrProductDto> {
    const response = await firstValueFrom(
      this.http.get<BrProductDto>(`${this.baseUrl}/brazilian_provider/${id}`)
    );
    return response.data;
  }

  private async fetchAllProducts(): Promise<BrProductDto[]> {
    const response = await firstValueFrom(
      this.http.get<BrProductDto[]>(`${this.baseUrl}/brazilian_provider`)
    );
    return response.data;
  }

  private mapToProductDto = (item: BrProductDto): ProductDto => ({
    id: item.id,
    name: item.nome,
    description: item.descricao,
    price: item.preco,
    image: [item.imagem],
    origin: ProductProviderType.BRAZILIAN,
  });
}
