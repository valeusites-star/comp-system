# Linha de base de segurança

- Negar por padrão; autorização em cada operação do servidor.
- Supabase RLS em todas as tabelas expostas.
- Segredos cifrados em repouso; chave de cifragem fora do banco, com rotação e versão.
- OAuth com state/PKCE e validação de redirect URI.
- Webhooks com assinatura, timestamp, replay protection e idempotência.
- Rate limits por IP, usuário, tenant e endpoint.
- Uploads com validação de tipo/tamanho e URLs assinadas.
- Proteção SSRF em crawlers/conectores: bloquear IPs privados, loopback, link-local, metadata endpoints e redirects perigosos.
- Agentes com allowlist de ferramentas, validação de parâmetros, isolamento e limites de custo/tempo.
- Sanitização de conteúdo externo e defesa em profundidade contra prompt injection.
- Logs sem tokens, senhas ou dados sensíveis desnecessários.
- MFA para equipe administrativa e trilha de auditoria.
- Políticas LGPD de finalidade, minimização, retenção, exportação e eliminação.
- Plano de incidentes, backups e testes de restauração.

Esta documentação é baseline de projeto, não certificação ou garantia de conformidade.
