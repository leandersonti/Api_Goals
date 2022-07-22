import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Project from '../typeorm/entities/Project';
import { ProjectRepository } from '../typeorm/entities/repositories/ProjectRepository';

interface IRequest {
  id: string;
}
class ShowProjectService {
  public async execute({ id }: IRequest): Promise<Project | undefined> {
    const projectsRepository = getCustomRepository(ProjectRepository);

    const project = projectsRepository.findOne(id);

    if (!project) {
      throw new AppError('Projeto não encontrado');
    }

    return project;
  }
}

export default ShowProjectService;
