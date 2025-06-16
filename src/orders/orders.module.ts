import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrdersController } from './controller/orders.controller';
import { OrdersService } from './service/orders.service';
import { OrdersRepository } from './repository/orders.repository';
import { GetOrdersUseCase } from './usecase/get-orders.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  controllers: [OrdersController],
  providers: [
    OrdersService,
    OrdersRepository,
    GetOrdersUseCase,
  ],
})
export class OrdersModule {}
