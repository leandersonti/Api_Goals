import { response, Router } from 'express';
import projectsRouter from '@modules/projects/routes/projectsRoutes';

const routes = Router();

routes.use('/projects', projectsRouter);

routes.get('/', (request, response) => {
  return response.json({ message: 'rota iniciada' });
});

export default routes;
