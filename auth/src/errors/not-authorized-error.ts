import { CustomError } from './custom-error';

export class NotAuthorized extends CustomError {
  statusCode = 401;
  constructor() {
    super('Not Authorized');
    Object.setPrototypeOf(this, NotAuthorized.prototype);
  }
  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: 'Not authorized' }];
  }
}
