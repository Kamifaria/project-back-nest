import { Controller, Get, Param} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from 'src/integration/dto/product.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProductProviderType } from 'src/integration/http/providers/product.provider-type';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'List all products' })
  @ApiResponse({ status: 200, description: 'List of products', type: [ProductDto]}) 
  findAll(): Promise<ProductDto[]> {
    return this.productsService.findAll();
  }

  @Get(':id/:origin')
  @ApiOperation({ summary: 'Get a product by id' })
  @ApiResponse({ status: 200, description: 'Product', type: ProductDto})
  findById(@Param('id') id: string, @Param('origin') origin: ProductProviderType): Promise<ProductDto> {
    return this.productsService.findById(id, origin);
  }
}
