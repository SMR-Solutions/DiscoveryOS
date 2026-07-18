import { Controller, Get } from '@nestjs/common';

interface HealthResponse {
  status: string;
  service: string;
}

@Controller('health')
export class HealthController {
  @Get()
  getHealth(): HealthResponse {
    return {
      status: 'ok',
      service: 'DiscoveryOS API',
    };
  }
}
