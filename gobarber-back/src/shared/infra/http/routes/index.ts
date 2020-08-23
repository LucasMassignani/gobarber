import { Router } from 'express';
import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';
import providersRouter from '@modules/appointments/infra/http/routes/providers.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import profileRoutes from '@modules/users/infra/http/routes/profile.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import passwordRoutes from '@modules/users/infra/http/routes/password.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);

routes.use('/providers', providersRouter);

routes.use('/users', usersRouter);

routes.use('/profile', profileRoutes);

routes.use('/sessions', sessionsRouter);

routes.use('/password', passwordRoutes);

export default routes;
