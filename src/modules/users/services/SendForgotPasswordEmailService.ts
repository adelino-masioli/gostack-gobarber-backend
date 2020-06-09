//import { hash } from 'bcryptjs';
import { injectable, inject } from 'tsyringe';
//import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IUserTokenRepository from '@modules/users/repositories/IUserTokenRepository';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import AppError from '@shared/errors/AppError';

//import AppError from '@shared/errors/AppError';

interface IRequest {
  email: string;
}
@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokenRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,
  ) {}

  public async execute({ email }: IRequest): Promise<void> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (!checkUserExists) {
      throw new AppError('User dos not exists.');
    }

    await this.userTokensRepository.generate(checkUserExists.id);

    this.mailProvider.sendMail(email, 'Recover passaword recived');
  }
}

export default SendForgotPasswordEmailService;
