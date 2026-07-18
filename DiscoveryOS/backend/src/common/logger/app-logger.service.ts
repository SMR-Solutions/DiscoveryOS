import { Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class AppLogger implements LoggerService {
  log(message: string, context?: string) {
    console.log(`[LOG] [${context || 'App'}] ${message}`);
  }

  error(message: string, trace?: string, context?: string) {
    console.error(`[ERROR] [${context || 'App'}] ${message}`);
    if (trace) {
      console.error(trace);
    }
  }

  warn(message: string, context?: string) {
    console.warn(`[WARN] [${context || 'App'}] ${message}`);
  }

  debug(message: string, context?: string) {
    console.debug(`[DEBUG] [${context || 'App'}] ${message}`);
  }

  verbose(message: string, context?: string) {
    console.log(`[VERBOSE] [${context || 'App'}] ${message}`);
  }
}
