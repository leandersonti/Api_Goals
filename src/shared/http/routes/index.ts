import { response, Router } from 'express';
import projectsRouter from '@modules/projects/routes/projectsRoutes';
import userRoute from '@modules/users/routes/userRoutes';
import sessionRoute from '@modules/users/routes/sessionRoutes';
import passwordRouter from '@modules/users/routes/passwordRoutes';

const routes = Router();

routes.use('/projects', projectsRouter);
routes.use('/users', userRoute);
routes.use('/sessions', sessionRoute);
routes.use('/password', passwordRouter);

routes.get('/', (request, response) => {
  return response.json({ message: 'rota iniciada' });
});

export default routes;
