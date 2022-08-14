import { Router } from 'express';
import ProjectController from '../controllers/ProjectController';
import { celebrate, Joi, Segments } from 'celebrate';
import { JoinAttribute } from 'typeorm/query-builder/JoinAttribute';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';

const projectsRouter = Router();
const projectController = new ProjectController();

projectsRouter.get('/', isAuthenticated, projectController.index);

projectsRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  projectController.show,
);

projectsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      justification: Joi.string().required(),
      description: Joi.string().required(),
      sei: Joi.string().required(),
    },
  }),
  projectController.create,
);

projectsRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
      justification: Joi.string().required(),
      description: Joi.string().required(),
      sei: Joi.string().required(),
    },
  }),
  projectController.update,
);

projectsRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  projectController.delete,
);

export default projectsRouter;
