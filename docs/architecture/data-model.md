# Modelo de dados — domínios

Schema físico será criado por migrations após revisão de nomes, chaves e políticas RLS.

## Núcleo
- organizations, profiles, memberships, roles, permissions, invitations
- plans, subscriptions, subscription_items, entitlements, usage_records, invoices, payment_events
- agent_templates, tenant_agents, agent_versions, agent_runs, agent_messages, tool_definitions
- workflows, workflow_versions, workflow_runs, workflow_events
- integrations, integration_credentials, integration_events, webhook_endpoints
- contacts, companies, deals, conversations, conversation_messages, assignments
- chat_widgets, widget_sessions
- calendars, appointments, tasks, comments
- creative_projects, assets, team_shares
- websites, site_connections, site_metrics, site_reports, site_scan_jobs
- support_tickets, support_messages
- audit_logs, notifications

## Convenções
- UUIDs para IDs públicos.
- `tenant_id` obrigatório em tabelas pertencentes a uma empresa.
- Timestamps UTC e dinheiro em unidades menores (centavos), com moeda explícita.
- Índices compostos iniciando por tenant_id em consultas tenant-scoped.
- Soft delete somente quando exigido por retenção; exclusão definitiva conforme política.
- Estado de assinatura separado do direito de acesso; entitlements derivados de eventos de billing verificados.

Foreign keys e constraints devem impedir referências cruzadas entre tenants quando aplicável. RLS complementa, não substitui, constraints e validações no servidor.
