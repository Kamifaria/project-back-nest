import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersRepository {
  constructor(
    @InjectRepository(Order)
    private readonly repo: Repository<Order>,
  ) {}

  async findAll(): Promise<Order[]> {
    return this.repo.find({ relations: ['items'] });
  }
}