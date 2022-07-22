import { getCustomRepository } from 'typeorm';
import Project from '../typeorm/entities/Project';
import { ProjectRepository } from '../typeorm/entities/repositories/ProjectRepository';

class ListProjectService {
  public async execute(): Promise<Project[]> {
    const projectsRepository = getCustomRepository(ProjectRepository);

    const projects = projectsRepository.find();

    return projects;
  }
}

export default ListProjectService;
