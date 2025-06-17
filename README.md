# Project Back Nest

Este projeto é uma aplicação backend construída com [NestJS](https://nestjs.com/) utilizando arquitetura modular, integração com banco de dados PostgreSQL, e consumo de APIs externas com estratégia de desacoplamento.

## 📁 Estrutura de Pastas

```
src/
├── config/ # Configurações da aplicação
├── integration/ # Integrações externas
│ ├── dto/ # Data Transfer Objects (DTOs)
│ ├── http/ # Serviços de chamadas HTTP
│ └── providers/ # Estratégias para diferentes fontes de dados
├── migrations/ # Migrations do banco de dados
├── orders/ # Módulo de pedidos (orders)
│ ├── controller/
│ ├── repository/
│ ├── service/
│ └── usecase/
├── products/ # Módulo de produtos
│ ├── products.controller.ts
│ ├── products.module.ts
│ └── products.service.ts
├── app.module.ts # Módulo raiz da aplicação
└── main.ts # Arquivo principal de bootstrap
```

## 🐘 Subindo o Banco de Dados

Este projeto utiliza **PostgreSQL** em um container Docker. Para subir o banco:

```bash
docker-compose -f ./docker/docker-compose.yml up -d
```
Certifique-se de que a porta configurada (geralmente 5432) está livre no seu sistema.

## 🔧 Rodar Migrations (A migration orderAndItemTables ja foi previamente criada)
1. Gerar uma nova migration:

```
npm run migration:generate -- src/migrations/NomeDaMigration
```
2. Rodar migrations existentes:

```
npm run migration:run
```

## 🚀 Rodando a Aplicação

Modo desenvolvimento:

```
npm run start:dev
```

Modo produção (após build):

```
npm run build
npm run start:prod
```

Certifique-se de configurar corretamente seu .env com as variáveis do banco de dados e endpoints externos.

## 🧪 Testes

Executar todos os testes:

```
npm run test
```

Testes com cobertura:

```
npm run test:cov
```

## 📜 Scripts Disponíveis

| Script               | Descrição                                                       |
|----------------------|------------------------------------------------------------------|
| `npm run start`       | Inicia a aplicação no modo padrão (produção após build)         |
| `npm run start:dev`   | Inicia a aplicação com hot reload para desenvolvimento          |
| `npm run start:prod`  | Inicia a aplicação usando o build gerado                         |
| `npm run build`       | Compila o projeto para produção (gera a pasta `dist/`)          |
| `npm run migration:generate` | Gera uma nova migration com base nas entidades             |
| `npm run migration:run`      | Executa todas as migrations ainda não aplicadas            |
| `npm run test`        | Executa todos os testes unitários                               |
| `npm run test:watch`  | Executa os testes em modo observador                            |
| `npm run test:cov`    | Gera um relatório de cobertura dos testes                       |
| `npm run lint`        | Executa o linter (ESLint) com tentativa de correção automática  |
| `npm run format`      | Formata o código utilizando o Prettier                          |

## ✅ Boas Práticas Adotadas

| Prática                           | Descrição                                                                 |
|-----------------------------------|---------------------------------------------------------------------------|
| **Modularização por Domínio**     | Separação de responsabilidades em módulos como `orders`, `products`, etc.|
| **Injeção de Dependência**        | Uso do sistema de providers do NestJS para melhor testabilidade e acoplamento fraco |
| **Uso de DTOs**                   | Data Transfer Objects são usados para validar e tipar a entrada/saída de dados |
| **Separação de Camadas**          | Implementação das camadas `Controller`, `Service`, `UseCase` e `Repository` |
| **Variáveis de Ambiente (.env)**  | Parametrização de configurações sensíveis e ambientes isolados           |
| **Migrations com TypeORM**        | Controle versionado do schema do banco de dados                          |
| **HttpModule Centralizado**       | Integrações externas encapsuladas em um módulo dedicado (`HttpIntegration`) |
| **Factory/Strategy Pattern**      | Aplicado para separação de provedores externos com lógica reutilizável   |
| **Scripts de CLI Automatizados**  | Scripts para build, testes, lint e migrations no `package.json`          |
| **Padrão RESTful**                | Estruturação dos endpoints seguindo os princípios REST                   |
