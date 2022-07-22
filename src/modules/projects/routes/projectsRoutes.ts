import { Router } from 'express';
import ProjectController from '../controllers/ProjectController';

const projectsRouter = Router();
const projectController = new ProjectController();

projectsRouter.get('/', projectController.index);
projectsRouter.get('/:id', projectController.show);
projectsRouter.post('/', projectController.create);

export default projectsRouter;
