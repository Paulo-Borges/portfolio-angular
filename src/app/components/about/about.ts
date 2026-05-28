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
      title: 'Análise e Desenvolvimento2222',
      description: 'Cursando ADS no 2º período. Combinando os estudos com projetos práticos que já estão no GitHub.'
    },
    {
      icon: 'bi-arrow-down-up',
      title: 'Transição de carreira',
      description: 'Já tenho experiência em outra área e trouxe para o desenvolvimento a disciplina e visão de negócio que aprendi antes.'
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
