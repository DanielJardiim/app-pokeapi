# 📱 PokeApp - Explorador de Pokémons

Este projeto foi desenvolvido com **Ionic + Angular** consumindo a **PokeAPI** para listar Pokémons, exibir seus detalhes e gerenciar favoritos. Adotei uma abordagem modular com **componentes standalone**, garantindo organização, legibilidade e facilidade de manutenção. O design segue um estilo responsivo, limpo e acessível, compatível com dispositivos móveis e desktop.

A lógica de favoritos foi implementada com `localStorage`, sem dependência de backend, permitindo persistência simples e eficiente. A separação de responsabilidades entre páginas e serviços facilita a reutilização de código e aplicação de boas práticas. O carregamento dos detalhes dos Pokémons utiliza `forkJoin` do RxJS para melhorar a performance nas múltiplas requisições simultâneas. A navegação entre as páginas é dinâmica e baseada em rotas com parâmetros, utilizando o `Router`.

A codificação priorizou **simplicidade, clareza e escalabilidade**, com uso de observables, `async/await`, diretivas estruturais e boas práticas de escrita com TypeScript. Toda a interface foi construída com os próprios componentes do **Ionic Framework**, promovendo uma UI consistente e moderna.

---

## ⚙️ Tecnologias

- [Ionic Framework](https://ionicframework.com/)
- [Angular](https://angular.io/)
- [RxJS](https://rxjs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [PokeAPI](https://pokeapi.co/)

---

## 📸 Funcionalidades

- ✔️ Listagem de Pokémons com paginação
- ✔️ Visualização de detalhes individuais
- ✔️ Favoritar e desfavoritar Pokémons (salvo no `localStorage`)
- ✔️ Tela de favoritos dedicada
- ✔️ Navegação entre telas (Home ➝ Detalhes / Favoritos ➝ Detalhes)
- ✔️ Totalmente responsivo (mobile first)

---

## ▶️ Como executar o projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/DanielJardiim/app-pokeapi.git
   cd app-pokeapi
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Rode o app:

   ```bash
   npm run start
   ```

---

## 👨‍💻 Autor

Desenvolvido por [Daniel Jardim](https://github.com/DanielJardiim)
