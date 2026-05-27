import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      title: 'BorgEventos',
      description: 'Sistema completo de gerenciamento de eventos, com back-end robusto desenvolvido em .NET e APIs RESTful.',
      technologies: ['.NET', 'C#', 'SQL Server', 'Entity Framework'],
      githubUrl: 'https://github.com/Paulo-Borges/BorgEventos.git',
      imageUrl: 'emConstrucao.jpg'
    },
    {
      title: 'Ecarto',
      description: 'Aplicação front-end, com meus projetos e de tudo que estou estudando.',
      technologies: ['Angular 21', 'TailwindCss', 'BootStrap'], 
      githubUrl: 'https://github.com/Paulo-Borges/portfolio-angular.git',
      imageUrl: 'emConstrucao.jpg'
    }
  ];

  getProjects(): Project[] {
    return this.projects
  }
}
