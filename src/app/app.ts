import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component/projects.component';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectsComponent, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
