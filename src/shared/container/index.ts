import { container } from 'tsyringe';
import '@modules/users/providers';
import '@shared/container/providers';
import IAppontmentsRepository from '@modules/appointments/repositories/IAppontmentsRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

// import IUserTokenRepository from '@modules/users/repositories/IUserTokenRepository';
// import UserTokenRepository from '@modules/users/infra/typeorm/repositories/UserTokenRepository';

container.registerSingleton<IAppontmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
