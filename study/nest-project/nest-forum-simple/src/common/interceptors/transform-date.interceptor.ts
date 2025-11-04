import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { formatDate } from '../utils/date-format';

@Injectable()
export class TransformDateInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map((data) => this.transform(data)));
  }

  private transform(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map((item) => this.transform(item));
    }

    // ✅ Mongoose Document → 단순 JSON 객체로 변환
    if (obj && typeof obj.toObject === 'function') {
      obj = obj.toObject();
    }

    if (obj !== null && typeof obj === 'object') {
      const result = { ...obj };
      if (result.createdAt) result.createdAt = formatDate(result.createdAt);
      if (result.updatedAt) result.updatedAt = formatDate(result.updatedAt);
      return result;
    }

    return obj;
  }
}
