import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    if (!request.user) {
      null;
    }
    if (data) {
      return request.user[data];
    }
    return request.user;
  },
);
