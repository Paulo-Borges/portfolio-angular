import { TestBed } from '@angular/core/testing';

import { ProjectService } from './project.service';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectService);
  });

  it('deve retornar verdadeiro se o serviço for criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar a lista de projetos com titulo e tecnologias', () => {
    const projects = service.getProjects();
    expect(projects.length).toBeGreaterThan(0);
    expect(projects[0].title).toBeDefined();
    expect(Array.isArray(projects[0].technologies)).toBe(true);
  });
});
