# COMP SYSTEM

Plataforma SaaS multiempresa da Valeu Sites para agentes de IA, automações, atendimento, integrações, CRM e operações digitais.

> Estado atual: fundação e arquitetura documentadas. Nenhuma integração ou credencial de produção está ativa.

## Módulos previstos
- Workspace empresarial e painel
- Catálogo e contratação de agentes de IA
- Workflows e automações
- Central de integrações por empresa
- CRM, caixa de entrada e chatbot incorporável
- Agenda, tarefas e colaboração
- Estúdio criativo e integração Canva, conforme APIs disponíveis
- Conector WordPress e relatórios apoiados em dados reais
- Planos recorrentes, faturamento, cotas e consumo
- Administração global e suporte

## Princípios
1. Isolamento multiempresa desde a fundação.
2. Autorização no servidor e RLS no banco; esconder telas não é segurança.
3. Segredos cifrados e nunca expostos ao navegador.
4. Webhooks idempotentes e integrações desacopladas.
5. Limites e medição de consumo por empresa.
6. Deploy e mudanças incrementais, testados e documentados.

## Documentação
- [Visão do produto](docs/product/vision.md)
- [Arquitetura](docs/architecture/overview.md)
- [Multi-tenancy e permissões](docs/architecture/tenancy-and-access.md)
- [Modelo de dados](docs/architecture/data-model.md)
- [Segurança](docs/security/security-baseline.md)
- [Estratégia de integrações](docs/integrations/integration-strategy.md)
- [Planos e entitlements](docs/billing/plans-and-entitlements.md)
- [Roadmap](docs/roadmap/README.md)
- [Contribuição](CONTRIBUTING.md)

## Próxima entrega
Validar a stack e criar uma aplicação executável mínima, CI, migrations iniciais, autenticação e testes negativos de isolamento por tenant.

## Segurança
Nunca faça commit de `.env`, tokens, chaves privadas, dados pessoais ou dumps de clientes. Use `.env.example` somente com placeholders e secrets no ambiente de execução.
