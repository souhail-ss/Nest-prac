import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './roles.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  private readonly logger = new Logger(RolesGuard.name);

  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<Role[]>('roles', context.getHandler());
    this.logger.log(`Roles required: ${roles}`);
    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (!user) {
      this.logger.error('User object not found in request');
      return false;
    }

    this.logger.log(`User roles: ${user.roles}`);

    const hasRole = () =>
      user.roles.some((role: Role) => roles.includes(role));

    return user && user.roles && hasRole();
  }
}
