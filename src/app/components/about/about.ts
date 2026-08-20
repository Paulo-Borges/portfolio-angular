import { Component } from '@angular/core';

interface CardAbout {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly cards: CardAbout[] = [
    {
      icon: 'bi-mortarboard',
      title: 'Análise e Desenvolvimento',
      description: 'Cursando ADS no 2º período. Combinando os estudos com projetos práticos que já estão no GitHub.'
    },
    {
      icon: 'bi-rocket-takeoff',
      title: 'Carreira',
      description: 'Back-end: Desenvolvimento de APIs RESTful robustas em .NET (C#), Front-end: Construção de interfaces dinâmicas, responsivas e componentizadas.'
    },
    {
      icon: 'bi-postcard-heart',
      title: 'Foco em Angular e .NET',
      description: 'Stack preferida: Angular no front, C# / .NET no back. Mais de 100 repositórios de estudo e projetos no GitHub.'
    },
    {
      icon: 'bi-rocket-takeoff',
      title: 'Estágio e Evolução',
      description: 'Focado em aplicar os conhecimentos no dia a dia, aprender com a equipe e crescer como desenvolvedor.'
    }
  ]
}
