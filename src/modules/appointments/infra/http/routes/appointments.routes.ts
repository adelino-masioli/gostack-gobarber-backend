import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

/**
 * List all appointments
 */
// appointmentsRouter.get('/', async (request, response) => {
//   const appointments = await appointmentsRepository.find();

//   return response.json(appointments);
// });

/**
 * Create new appointment
 */
appointmentsRouter.post('/', async (request, response) => {
  const { provider_id, date } = request.body;
  const parseDate = parseISO(date);
  const appointmentsRepository = new AppointmentsRepository();

  const createAppointment = new CreateAppointmentService(
    appointmentsRepository,
  );

  const appointment = await createAppointment.execute({
    provider_id,
    date: parseDate,
  });

  return response.json(appointment);
});

export default appointmentsRouter;
