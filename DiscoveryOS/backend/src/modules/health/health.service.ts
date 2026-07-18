import { Injectable } from '@nestjs/common';

export interface HealthResponse {
  status: string;
  service: string;
}

@Injectable()
export class HealthService {
  getHealth(): HealthResponse {
    return {
      status: 'ok',
      service: 'DiscoveryOS API',
    };
  }
}
