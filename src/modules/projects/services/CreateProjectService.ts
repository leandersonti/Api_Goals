import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Project from '../typeorm/entities/Project';
import { ProjectRepository } from '../typeorm/entities/repositories/ProjectRepository';

interface IRequest {
  name: string;
  justification: string;
  description: string;
  sei: string;
}

class CreateProjectService {
  public async execute({
    name,
    justification,
    description,
    sei,
  }: IRequest): Promise<Project> {
    const projectsRepository = getCustomRepository(ProjectRepository);
    const projectExists = await projectsRepository.findByName(name);

    if (projectExists) {
      throw new AppError('Existe um projeto com esse mesmo nome');
    }

    const project = projectsRepository.create({
      name,
      justification,
      description,
      sei,
    });

    await projectsRepository.save(project);
    return project;
  }
}

export default CreateProjectService;
