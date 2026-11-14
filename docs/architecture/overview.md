# Arquitetura — visão geral

## Direção
Começar com um monólito modular e fronteiras claras por domínio. Extrair serviços quando volume ou isolamento operacional justificar.

## Camadas
1. **Web:** workspace do cliente e administração responsivos.
2. **Application/API:** casos de uso, autenticação, autorização, validação e rate limiting.
3. **Domínios:** identity, tenancy, billing, agents, workflows, integrations, CRM, inbox, scheduling, creative, site intelligence e support.
4. **Adapters:** PostgreSQL/Supabase, IA, mensageria, pagamentos, n8n e APIs externas.
5. **Workers:** tarefas assíncronas, webhooks, sincronizações e execuções de agentes.
6. **Observability:** logs estruturados, métricas, tracing, auditoria e alertas.

## Stack proposta para validação
- TypeScript e React.
- Framework web/API escolhido após spike de runtime e deployment no Hostinger Cloud.
- PostgreSQL via Supabase.
- Supabase Auth com validação server-side e RLS.
- Storage Supabase ou compatível com S3.
- n8n como orquestrador via webhooks; regras centrais de negócio permanecem no backend.
- Provedores de IA acessados exclusivamente pelo backend/worker.
- GitHub Actions para lint, typecheck, testes e build.

A stack final deve ser confirmada por um spike técnico antes de consolidar dependências.

## Execução de agente
1. Usuário autenticado solicita execução.
2. API resolve tenant e verifica membership, entitlement e limites.
3. Execução é registrada com chave de idempotência.
4. Worker carrega versão do agente, contexto permitido e ferramentas autorizadas.
5. Adaptador chama provedor de IA com chave somente no servidor.
6. Ferramentas executam com permissões mínimas e validação de tenant.
7. Resultado, custo, tokens e eventos são registrados.
8. Interface recebe atualização por polling/realtime.

## Requisitos operacionais
Timeouts, retries com backoff, dead-letter queue, idempotência, cotas por tenant, proteção SSRF, defesa contra prompt injection, retenção documentada, backups e restauração testada.
