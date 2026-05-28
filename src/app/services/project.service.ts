import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      title: 'BorgEventos  / C# / .NET / ANGULAR',
      description: 'Sistema completo de gerenciamento de eventos, com back-end robusto desenvolvido em .NET e APIs RESTful.',
      technologies: ['.NET ', 'C#  ', 'SQL Server ', 'Entity Framework'],
      githubUrl: 'https://github.com/Paulo-Borges/BorgEventos.git',
      imageUrl: 'emConstrucao.jpg'
    },
    {
      title: 'Portfolio  /  ANGULAR',
      description: 'Aplicação front-end, dos meus projetos e de tudo que estou estudando.',
      technologies: ['Angular21', 'TailwindCss ', ' Bootstrap'], 
      githubUrl: 'https://github.com/Paulo-Borges/portfolio-angular.git',
      imageUrl: 'Portifolio.png'
    },
    {
      title: 'Portfolio2',
      description: 'Aplicação front-end, dos meus projetos e de tudo que estou estudando.',
      technologies: ['Angular 21', 'TailwindCss', 'Bootstrap'], 
      githubUrl: 'https://github.com/Paulo-Borges/portfolio-angular.git',
      imageUrl: 'emConstrucao.jpg'
    }
  ];

  getProjects(): Project[] {
    return this.projects
  }
}
