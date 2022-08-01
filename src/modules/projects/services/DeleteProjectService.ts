import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ProjectRepository } from '../typeorm/entities/repositories/ProjectRepository';

interface IRequest {
  id: string;
}
class DeleteProjectService {
  public async execute({ id }: IRequest): Promise<void> {
    const projectsRepository = getCustomRepository(ProjectRepository);

    const project = projectsRepository.findOne(id);

    if (!project) {
      throw new AppError('Projeto não encontrado');
    }

    await projectsRepository.remove(project);
  }
}

export default DeleteProjectService;
