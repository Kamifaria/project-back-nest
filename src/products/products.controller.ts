import { Controller, Get} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from 'src/integration/dto/product.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'List all products' })
  @ApiResponse({ status: 200, description: 'List of products', type: [ProductDto]}) 
  findAll(): Promise<ProductDto[]> {
    return this.productsService.findAll();
  }
}
