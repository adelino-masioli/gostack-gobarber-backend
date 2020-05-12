import { Router } from 'express';

import AuthenticateUserService from '@modules/users/services/UpdateUserAvatarService';

const sessionsRouter = Router();

/**
 * Create new session
 */
sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
