import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Project from '../typeorm/entities/Project';
import { ProjectRepository } from '../typeorm/entities/repositories/ProjectRepository';

interface IRequest {
  id: string;
  name: string;
  justification: string;
  description: string;
  sei: string;
}

class UpdateProjectService {
  public async execute({
    id,
    name,
    justification,
    description,
    sei,
  }: IRequest): Promise<Project> {
    const projectsRepository = getCustomRepository(ProjectRepository);

    const project = await projectsRepository.findOne(id);

    if (!project) {
      throw new AppError('Projeto não encontrado');
    }

    const projectExists = await projectsRepository.findByName(name);

    if (projectExists && name !== project.name) {
      throw new AppError('Existe um projeto com esse mesmo nome');
    }

    project.name = name;
    project.justification = justification;
    project.description = description;
    project.sei = sei;

    await projectsRepository.save(project);

    return project;
  }
}

export default UpdateProjectService;
