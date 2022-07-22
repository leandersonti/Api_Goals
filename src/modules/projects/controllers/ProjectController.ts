import { Request, Response } from 'express';
import CreateProjectService from '../services/CreateProjectService';
import ListProjectService from '../services/ListProjectService';
import ShowProjectService from '../services/ShowProjectService';

export default class ProjectController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProjects = new ListProjectService();

    const projects = listProjects.execute();

    return response.json(projects);
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;

    const showProject = new ShowProjectService();

    const project = showProject.execute({ id });

    return response.json(project);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, justification, description, sei } = request.body;

    const createProject = new CreateProjectService();

    const project = await createProject.execute({
      name,
      justification,
      description,
      sei,
    });

    return response.json(project);
  }
}
