import { response, Router } from 'express';
import projectsRouter from '@modules/projects/routes/projectsRoutes';
import userRoute from '@modules/users/routes/userRoutes';
import sessionRoute from '@modules/users/routes/sessionRoutes';

const routes = Router();

routes.use('/projects', projectsRouter);
routes.use('/users', userRoute);
routes.use('/sessions', sessionRoute);

routes.get('/', (request, response) => {
  return response.json({ message: 'rota iniciada' });
});

export default routes;
