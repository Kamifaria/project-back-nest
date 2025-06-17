import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { EuProductDto } from '../../dto/eu-product.dto';
import { ProductDto } from '../../dto/product.dto';
import { firstValueFrom } from 'rxjs';
import { ProductProviderInterface } from './product.provider.interface';
import { ProductProviderType } from './product.provider-type';

@Injectable()
export class EuProductProvider implements ProductProviderInterface {
  private readonly baseUrl: string;

  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
  ) {
    this.baseUrl = this.config.get<string>('PRODUCTS_ENDPOINT')!!;
  }

  getProviderType() { return ProductProviderType.EUROPEAN;}

  async getById(id: string): Promise<ProductDto> {
    const item = await this.fetchSingleProduct(id);
    return this.mapToProductDto(item);
  }

  async getProducts(): Promise<ProductDto[]> {
    const items = await this.fetchAllProducts();
    return items.map(this.mapToProductDto);
  }

  private async fetchSingleProduct(id: string): Promise<EuProductDto> {
    const response = await firstValueFrom(
      this.http.get<EuProductDto>(`${this.baseUrl}/european_provider/${id}`)
    );
    return response.data;
  }

  private async fetchAllProducts(): Promise<EuProductDto[]> {
    const response = await firstValueFrom(
      this.http.get<EuProductDto[]>(`${this.baseUrl}/european_provider`)
    );
    return response.data;
  }

  private mapToProductDto = (item: EuProductDto): ProductDto => ({
    id: item.id,
    name: item.name,
    description: item.description,
    price: item.price,
    image: item.gallery,
    origin: ProductProviderType.EUROPEAN,
  });
}
