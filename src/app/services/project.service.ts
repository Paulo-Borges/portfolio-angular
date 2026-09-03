import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      title: 'Portfolio  /  ANGULAR',
      description: 'Aplicação front-end, dos meus projetos e de tudo que estou estudando.',
      technologies: ['Angular21', 'TailwindCss ', ' Bootstrap'],
      githubUrl: 'https://github.com/Paulo-Borges/portfolio-angular.git',
      imageUrl: 'Portifolio.png',
    },
    {
      title: 'Financeiro  /  ANGULAR',
      description:
        'Aplicação front-end, com Signals, @for, tratamento de erros, inputs e gráfico financeiro com Chart.js e ng2-charts.',
      technologies: ['Angular 21', 'TailwindCss', 'Chart.js', 'ng2-charts', 'API da Alpha Vantage'],
      githubUrl: 'https://github.com/Paulo-Borges/portfolio-angular.git',
      imageUrl: 'angularFinance.png',
    },
    {
      title: 'Clock  /  ANGULAR',
      description:
        'O **Angular Clock** é uma aplicação web que exibe a hora e a data atualizadas a cada segundo. O relógio principal usa o fuso `America/Sao_Paulo`, e cartões adicionais mostram o mesmo instante em outros países, formatados em português do Brasil (`pt-BR`).',
      technologies: ['Angular 21', 'Tailwind CSS 4', 'TypeScript 5.9', 'RxJS'],
      githubUrl: 'https://github.com/Paulo-Borges/angular-clock.git',
      imageUrl: 'AngularClock.png',
    },
    {
      title: 'Formulário  /  ANGULAR',
      description:
        'Aplicação front-end, com diretivas, @for, @if, arquitetura com CommonModule e FormsModule .',
      technologies: ['Angular ', 'HttpClient'],
      githubUrl: 'https://github.com/Paulo-Borges/form-angular.git',
      imageUrl: 'emConstrucao.jpg',
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
