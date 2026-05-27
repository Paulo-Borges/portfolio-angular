import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component/projects.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
