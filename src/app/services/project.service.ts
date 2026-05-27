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
      githubUrl: 'https://github.com/Paulo-Borges', // Substitua pelo link direto do repo se preferir
      imageUrl: 'assets/images/borgeventos.png'
    },
    {
      title: 'Ecarto',
      description: 'Aplicação front-end moderna e responsiva construída para gerenciamento e interações dinâmicas de usuários.',
      technologies: ['React', 'JavaScript', 'CSS3'], // Exemplo, adapte conforme o projeto
      githubUrl: 'https://github.com/Paulo-Borges',
      imageUrl: 'assets/images/ecarto.png'
    }
  ];



  getProjects(): Project[] {
    return this.projects
  }
}
