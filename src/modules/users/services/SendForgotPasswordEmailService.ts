//import { hash } from 'bcryptjs';
import { injectable, inject } from 'tsyringe';
//import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

//import AppError from '@shared/errors/AppError';

interface IRequest {
  email: string;
}
@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(): Promise<void> {}
}

export default SendForgotPasswordEmailService;
