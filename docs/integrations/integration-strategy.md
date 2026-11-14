# Estratégia de integrações

## Princípio
Toda integração é configurada por tenant, usando OAuth quando disponível. Tokens e chaves ficam cifrados no servidor. O cliente vê status, escopos, validade, última sincronização e ação para desconectar/renovar.

## Categorias planejadas
- Mensageria: WhatsApp Business Platform, Telegram Bot API e e-mail.
- Social: Instagram Graph API conforme tipo de conta e permissões aprovadas.
- Produtividade: Google Calendar e Workspace.
- Analytics: Google Analytics 4 e Search Console.
- Sites: plugin/conector WordPress com autenticação de escopo mínimo.
- Design: Canva conforme programa e endpoints disponíveis.
- Automação: n8n via webhooks assinados.

## Padrão de adaptador
Cada conector implementa connect, validate, refresh, disconnect, healthCheck e handleWebhook. Eventos são normalizados e processados idempotentemente.

## Dados reais de sites
Relatórios vêm de APIs autorizadas ou telemetria explicitamente instalada. Não afirmar acesso a visitantes, conversões ou métricas que a fonte não fornece. Registrar origem, janela temporal, fuso e última atualização.

Respeitar escopos, revisões de aplicativos, rate limits, termos, consentimento e políticas anti-spam. Não coletar credenciais de usuário final.
