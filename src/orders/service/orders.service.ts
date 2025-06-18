import { Injectable } from '@nestjs/common';
import { GetOrdersUseCase } from '../usecase/get-orders.use-case';

@Injectable()
export class OrdersService {
  constructor(private readonly getOrdersUseCase: GetOrdersUseCase) {}

  async getOrders() {
    return this.getOrdersUseCase.execute();
  }
}
