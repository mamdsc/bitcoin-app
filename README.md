# Bitcoin App

## Arquivos e Pastas

- Assets: Arquivos estaticos;
- Components: Componentes reutilizáveis;
- Hooks: Hook customizados;
- Meta-data: Estrutura de dados da aplicação como interfaces, enums, etc;
- Pages: Páginas da aplicação;
- Redux: Estrutura redux para controle de estado e melhor organização;
- Routes: Rotas do sistema;
- Service: Fornece serviços necessários para aplicação;
- Styles: Estilos globais;
- Utils: Funções ou constantes reutilizáveis.

## Tecnologias

- React
- Typescript
- Styled-Components
- Redux
- Redux Saga
- Axios

* Hook - AuthContext: Optei em criar um contexto para tratamento da autenticação do sistema. Mesmo utilizando redux? Sim. Já fiz essa combinação, porém, encarei alguns problemas em um projeto com maior complexidade de autenticação, nesse sentido um contexto se mostrou uma forma mais maleavel de gerenciar (Apenas um ponto de vista que quis mostrar no bitcoin app), conseguindo isolamento da lógica de forma simples.


## Testes

Opto por testar hooks, pages e componentes, visto que são os processos mais desgastantes em testes manuais e os pontos de entrada da aplicação.

## Style guide

- Antd: Utilizei antd, uma lib de componentes muito completa, maleavel, bonita e de fácil uso, acelerando o desenvolvimento.

#### Para rodar o projeto:

Depois de clonar o repositório:

#### Iniciar a aplicação

```bash
$ yarn
$ yarn start
```

#### Rodar testes

```bash
$ yarn test
```

### Melhorias

- Terminar testes
- Melhorar dashboard
