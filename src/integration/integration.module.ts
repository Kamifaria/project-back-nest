// src/integration/http/http.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { BrProductProvider } from './http/providers/br-product.provider';
import { EuProductProvider } from './http/providers/eu-product.provider';
import { HttpIntegrationService } from './http/httpIntegration.service';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [
    HttpIntegrationService,
    BrProductProvider,
    EuProductProvider,
    {
      provide: 'ProductProviders',
      useFactory: (
        br: BrProductProvider,
        eu: EuProductProvider,
      ): any[] => [br, eu],
      inject: [BrProductProvider, EuProductProvider],
    },
    {
      provide: HttpIntegrationService,
      useFactory: (providers: any[]) =>
        new HttpIntegrationService(providers),
      inject: ['ProductProviders'],
    },
  ],
  exports: [HttpIntegrationService],
})
export class HttpIntegrationModule {}
