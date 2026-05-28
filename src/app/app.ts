import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component/projects.component';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectsComponent, Header, About, Skills, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
