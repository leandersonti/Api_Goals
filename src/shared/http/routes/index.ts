import { response, Router } from 'express';
import { request } from 'http';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: "hello dev" });
})

export default routes;
