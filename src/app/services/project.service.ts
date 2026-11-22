import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      title: 'Portfolio  /  ANGULAR',
      description:
        'Aplicação criada para consolidar estudos e práticas em React,  Angular e C# , utilizando Tailwindcss, Bootstrap, TypeScript, componentes reutilizáveis, services, interfaces e organização modular da aplicação.',
      technologies: [
        'Angular21',
        'TailwindCss ',
        ' Bootstrap',
        'React',
        'Sql Server',
        'Entity Framework Core',
      ],
      githubUrl: 'https://github.com/Paulo-Borges/portfolio-angular.git',
      imageUrl: 'Portifolio.png',
    },
    {
      title: 'Temple  /  REACT',
      description:
        'Sistema Full Stack desenvolvido para gerenciamento de informações através de APIs RESTful. Implementado com React, .NET, Entity Framework Core e SQL Server, utilizando arquitetura em camadas, autenticação e boas práticas de desenvolvimento.',
      technologies: ['React', 'TailwindCss ', ' React-Router-Dom'],
      githubUrl: 'https://github.com/Paulo-Borges/temple.git',
      imageUrl: 'TempleBack.png',
    },
    {
      title: 'baseBack  /  C# / .NET',
      description: 'Aplicação back-end, com arquitetura em camadas, utilizando C# e .NET.',
      technologies: ['C#', '.NET', 'Entity Framework', 'SQL Server'],
      githubUrl: 'https://github.com/Paulo-Borges/baseBack.git',
      imageUrl: 'baseBack.png',
    },
    {
      title: 'baseFront  /  ANGULAR',
      description:
        'Aplicação front-end, com diretivas, @for, @if, arquitetura com CommonModule, AsyncPipe e FormsModule, Observable, Router.',

      technologies: ['Angular ', 'HttpClient'],
      githubUrl: 'https://github.com/Paulo-Borges/baseFront.git',
      imageUrl: 'baseFront.jpeg',
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
