import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { HttpIntegrationModule } from 'src/integration/integration.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports:[HttpIntegrationModule]
})
export class ProductsModule {}
