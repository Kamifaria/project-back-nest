import { Injectable } from '@nestjs/common';
import { HttpIntegrationService } from 'src/integration/http/httpIntegration.service';

@Injectable()
export class ProductsService {

  constructor(private readonly httpIntegrationService: HttpIntegrationService) {}

  findAll() {
    return this.httpIntegrationService.getUnifiedProducts();
  }
}
