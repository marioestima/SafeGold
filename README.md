# SafeGold — Plataforma Digital de Ouro e Joias

**Transformando o ouro em confiança, e a confiança em progresso.**  
Um ecossistema digital que conecta ourives, avaliadores e compradores com transparência, segurança e autenticidade.

---

## Visão Geral

SafeGold é uma plataforma (app e web) que moderniza o mercado de joalheria e metais preciosos em Angola, permitindo que qualquer pessoa possa comprar, vender e avaliar ouro de forma segura, justa e totalmente digital.

A plataforma une tecnologia e tradição, valorizando o trabalho dos ourives locais e garantindo autenticidade comprovada em cada transação.

---

## Problemas que o SafeGold resolve

| Problema | Solução SafeGold |
|-----------|------------------|
| Falta de confiança na autenticidade das peças | Certificação digital e verificação blockchain |
| Ausência de transparência nas avaliações | Sistema de avaliação com avaliadores credenciados |
| Dificuldade em vender e precificar joias | Marketplace seguro e justo |
| Falta de presença online dos ourives | Perfis digitais e vitrine para exposição das peças |

---

## Arquitetura do Projeto

O SafeGold é dividido em dois grandes pilares tecnológicos:

### Frontend (App & Web)
Desenvolvido em Flutter, para garantir experiência nativa, fluida e moderna em múltiplas plataformas.

#### Tecnologias principais
- Flutter (Dart)
- Riverpod (gerência de estado)
- Dio / HTTP (requisições à API)
- Firebase (autenticação e push notifications)
- Socket.IO / Kafka client (comunicação em tempo real)
- Lottie Animations (efeitos visuais e microinterações)
- Material 3 Design + Tailwind Flutter UI (estilo elegante e responsivo)

#### Funcionalidades do app
- Autenticação e perfis de usuários (ourives, avaliador, comprador)
- Chat em tempo real entre as partes
- Avaliação digital de peças com certificado autenticado
- Marketplace para compra e venda de ouro e joias
- Notificações instantâneas de ofertas e validações
- Histórico de transações e certificados emitidos

---

### Backend (Microserviços)

Construído com Node.js, TypeScript, Kafka e Prisma, organizado em microserviços independentes para escalabilidade e alta disponibilidade.

#### Estrutura de serviços

## Estrutura do Backend

A arquitetura do backend do **SafeGold** é modular e baseada em **microserviços**, garantindo escalabilidade, isolamento de falhas e facilidade de manutenção.

```bash
backend/
├── gateway/              # API Gateway — ponto central de entrada e roteamento
│   ├── src/
│   │   ├── routes/       # Rotas principais do sistema
│   │   ├── middleware/   # Middlewares globais (auth, logs, etc.)
│   │   └── index.ts
│   ├── package.json
│   └── Dockerfile
│
├── users/                # Serviço de usuários (cadastro, login, perfis)
│   ├── src/
│   │   ├── controllers/  # Controladores de lógica de usuários
│   │   ├── models/       # Modelos Prisma (PostgreSQL)
│   │   ├── routes/
│   │   └── index.ts
│   ├── package.json
│   └── Dockerfile
│
├── marketplace/          # Serviço de vendas e compras de ouro e joias
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── kafka/        # Produtores e consumidores Kafka
│   ├── package.json
│   └── Dockerfile
│
├── avaliation/           # Serviço de avaliação e precificação
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── services/     # Algoritmos de precificação
│   │   └── index.ts
│   ├── package.json
│   └── Dockerfile
│
├── certification/        # Emissão e gerenciamento de certificados digitais
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── index.ts
│   ├── package.json
│   └── Dockerfile
│
├── verification/         # Verificação de autenticidade de peças e certificados
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── kafka/
│   │   └── index.ts
│   ├── package.json
│   └── Dockerfile
│
├── chat/                 # Comunicação em tempo real entre usuários
│   ├── src/
│   │   ├── sockets/      # Configuração do Socket.IO
│   │   ├── kafka/
│   │   ├── models/
│   │   └── index.ts
│   ├── package.json
│   └── Dockerfile
│
└── docker-compose.yml    # Orquestração de todos os serviços e containers



#### Tecnologias backend
- Node.js + Express
- TypeScript
- KafkaJS (mensageria entre microserviços)
- Prisma ORM (banco de dados)
- PostgreSQL / MongoDB
- Docker + Docker Compose
- JWT (autenticação e segurança)
- API Gateway (gerência de rotas e comunicações)
- Nginx (opcional) para proxy reverso e balanceamento

---

## Comunicação entre serviços

Todos os microserviços comunicam-se de forma assíncrona através do Kafka, trocando eventos como:

| Evento | Origem | Destino |
|--------|---------|----------|
| user-created | Users | Marketplace, Chat |
| certification-issued | Certification | Verification |
| evaluation-completed | Avaliation | Marketplace |
| message-sent | Chat | Users |

Cada serviço é autônomo, com seu próprio banco e lógica, permitindo escalar ou atualizar sem interromper o sistema inteiro.

---

## Banco de Dados

| Serviço | Banco | ORM |
|----------|--------|-----|
| Users | PostgreSQL | Prisma |
| Marketplace | PostgreSQL | Prisma |
| Avaliation | MongoDB | Prisma |
| Certification | PostgreSQL | Prisma |
| Verification | PostgreSQL | Prisma |
| Chat | MongoDB | Prisma |

---

## Docker e Deploy

Com o Docker Compose, todo o ambiente sobe com um único comando:

```bash
docker-compose up --build

