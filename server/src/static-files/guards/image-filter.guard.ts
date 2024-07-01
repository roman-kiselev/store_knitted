import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ImageFilterGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();
    const imageExtensions = [
      '.jpg',
      '.jpeg',
      '.png',
      '.gif',
      '.bmp',
      '.webp',
      '.tiff',
    ];
    const requestedFile = request.params.filename;

    if (requestedFile) {
      const fileExtension = requestedFile
        .slice(requestedFile.lastIndexOf('.'))
        .toLowerCase();

      if (imageExtensions.includes(fileExtension)) {
        return true;
      } else {
        throw new BadRequestException('Only image files are allowed');
      }
    } else {
      throw new BadRequestException('Filename is required');
    }
  }
}
