# Multi-tenant, identidade e permissões

## Entidades
- `profiles`: dados complementares do usuário autenticado.
- `organizations`: empresas/tenants.
- `memberships`: vínculo usuário-tenant.
- `roles` e `permissions`: papéis e permissões.
- `invitations`: convites de gestores e colaboradores.
- `audit_logs`: trilha de ações sensíveis.

## Papéis iniciais
- `platform_owner`: proprietário global.
- `platform_admin`: operador global com permissões explícitas.
- `organization_owner`: responsável pela empresa.
- `organization_admin`: gestor da empresa.
- `manager`: gestor de módulos concedidos.
- `member`: colaborador com permissões específicas.
- `support_agent`: suporte com acesso limitado, temporário e auditado.

## Regras
1. Nunca inferir papel por e-mail, domínio ou metadados controlados pelo cliente.
2. Admin global exige atribuição protegida no servidor; nunca pelo cadastro público.
3. A rota administrativa pode ser discreta, mas segurança depende de autorização no servidor, MFA e auditoria.
4. Toda operação tenant-scoped valida tenant_id e membership ativa.
5. RLS deve negar por padrão e validar membership.
6. Service-role keys nunca chegam ao browser.
7. Acesso excepcional de suporte deve ter motivo, expiração e log.
8. Convites são tokens de uso único, com expiração e papel definido.
9. Revogação de membership invalida o acesso conforme política.

## Testes obrigatórios
- Tenant A não lista/lê/altera/exclui dados do tenant B.
- Usuário sem membership não acessa o tenant.
- Colaborador não executa ações de gestor.
- Admin global não é atribuído por signup público.
- Usuário removido não mantém acesso a sessões, realtime ou storage.
