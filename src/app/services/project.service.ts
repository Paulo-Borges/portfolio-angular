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
      title: 'Financeiro  /  ANGULAR',
      description: 'Aplicação front-end, com Signals, @for, tratamento de erros, inputs e gráfico financeiro com Chart.js e ng2-charts.',
      technologies: ['Angular 21', 'TailwindCss', 'Chart.js', 'ng2-charts', 'API da Alpha Vantage'], 
      githubUrl: 'https://github.com/Paulo-Borges/portfolio-angular.git',
      imageUrl: 'angularFinance.png'
    }
  ];

  getProjects(): Project[] {
    return this.projects
  }
}
