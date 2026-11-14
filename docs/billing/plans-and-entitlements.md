# Planos, assinaturas e entitlements

## Conceitos
- **Plan:** definição comercial e preço.
- **Subscription:** contrato da empresa com provedor de pagamentos e ciclo de cobrança.
- **Entitlement:** direito verificável de utilizar funcionalidade ou cota.
- **Usage record:** medição de tokens, mensagens, execuções e armazenamento.
- **Payment event:** evento imutável recebido e verificado do provedor.

## Regras
1. Checkout é criado no servidor.
2. Webhook valida assinatura e idempotência.
3. Apenas eventos confirmados atualizam subscription e entitlements.
4. Falha de pagamento segue grace period configurável.
5. Cancelamento e downgrade seguem o ciclo correto e preservam histórico.
6. Execuções verificam limite e reservam/contabilizam consumo.
7. Créditos e limites não podem ser alterados pelo browser.
8. Cliente visualiza uso, limite, renovação e histórico.

## Provedores
Avaliar Mercado Pago e Asaas para o Brasil. Abstrair o provedor. Não armazenar dados de cartão diretamente.
