import { Component } from '@angular/core';
import { About } from '../../components/about/about';
import { Skills } from '../../components/skills/skills';
import { ProjectsComponent } from '../../components/projects/projects.component/projects.component';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [About, Skills, ProjectsComponent, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
