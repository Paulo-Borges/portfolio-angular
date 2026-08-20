# Portfolio Angular — Paulo Borges

Portfólio pessoal desenvolvido com **Angular 21**, **Tailwind CSS 4** e **TypeScript**, apresentando projetos, stack técnica e formas de contato.

**Demo ao vivo:** [https://paulo-borges.github.io/portfolio-angular/](https://paulo-borges.github.io/portfolio-angular/)

## Sobre o projeto

Aplicação single-page com seções de apresentação, sobre mim, projetos, habilidades e contato. Os projetos são carregados via `ProjectService` e exibidos com cards responsivos.

### Funcionalidades

- Apresentação com links para GitHub e currículo
- Seção **Sobre mim** com cards informativos
- Galeria de **Projetos** com tecnologias e link para o repositório
- **Stack técnica** (Frontend, Backend, Banco de Dados e Ferramentas)
- **Contato** via GitHub, LinkedIn, e-mail e WhatsApp
- Layout responsivo com Tailwind CSS

### Projetos em destaque

| Projeto | Tecnologias |
|---------|-------------|
| BorgEventos | .NET, C#, SQL Server, Entity Framework |
| Portfolio | Angular 21, Tailwind CSS, Bootstrap |
| Financeiro | Angular 21, Chart.js, ng2-charts |
| Angular Clock | Angular 21, Tailwind CSS 4, RxJS |
| Formulário | Angular, HttpClient, FormsModule |

## Tecnologias

- [Angular](https://angular.dev/) 21
- [Tailwind CSS](https://tailwindcss.com/) 4
- [TypeScript](https://www.typescriptlang.org/) 5.9
- [RxJS](https://rxjs.dev/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Vitest](https://vitest.dev/) (testes unitários)

## Estrutura do projeto

```
src/app/
├── components/
│   ├── about/       # Seção sobre mim
│   ├── contact/     # Seção de contato
│   ├── footer/      # Rodapé
│   ├── header/      # Cabeçalho e navegação
│   ├── projects/    # Listagem de projetos
│   └── skills/      # Stack técnica
├── models/          # Interfaces (ex.: Project)
└── services/        # ProjectService
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado: LTS)
- [npm](https://www.npmjs.com/) 10.x

## Instalação

```bash
git clone https://github.com/Paulo-Borges/portfolio-angular.git
cd portfolio-angular
npm install
```

## Desenvolvimento

Inicie o servidor local:

```bash
npm start
# ou
ng serve
```

Acesse [http://localhost:4200/](http://localhost:4200/). A aplicação recarrega automaticamente ao alterar os arquivos.

## Build

```bash
npm run build
# ou
ng build
```

Os artefatos de produção ficam em `dist/portfolio-angular/browser/`.

## Deploy (GitHub Pages)

```bash
npm run deploy
npm run deploy1
```

O script `deploy` gera o build com o `base-href` correto; o `deploy1` publica no GitHub Pages via `angular-cli-ghpages`.

## Testes

```bash
npm test
# ou
ng test
```

Executa os testes unitários com Vitest.

## Contato

- **GitHub:** [Paulo-Borges](https://github.com/Paulo-Borges)
- **LinkedIn:** [Paulo Borges de Almeida](https://www.linkedin.com/in/paulo-borges-de-almeida-b543b3242/)
- **E-mail:** devborges50@gmail.com

## Licença

Projeto de portfólio pessoal. Sinta-se à vontade para usar como referência.


## MEU CONTROLE ( PRA ATUALIZAR )

cd E:\portfolio-angular  ( sempre voltar )

ng build --configuration production --base-href "https://paulo-borges.github.io/portfolio-angular/"

angular-cli-ghpages --dir=dist/portfolio-angular/browser
