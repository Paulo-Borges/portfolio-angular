import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component/projects.component';
import { Header } from './components/header/header';
import { About } from './components/about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectsComponent, Header, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
