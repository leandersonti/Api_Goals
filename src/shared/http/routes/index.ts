import { response, Router } from 'express';
import { request } from 'http';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'rota iniciada' });
});

export default routes;
