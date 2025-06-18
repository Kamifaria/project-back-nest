import { Injectable } from '@nestjs/common';
import { OrdersRepository } from '../repository/orders.repository';

@Injectable()
export class GetOrdersUseCase {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  async execute() {
    return this.ordersRepository.findAll();
  }
}