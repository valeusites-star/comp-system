# ADR-001 — Stack inicial do protótipo

- **Status:** Aceita para protótipo
- **Data:** 2026-11-14

## Contexto
Precisamos iniciar uma interface executável e facilmente testável, sem acoplar a primeira entrega a provedores externos antes de validar a experiência.

## Decisão
Usar React 19, TypeScript, Vite e lucide-react para o shell visual inicial. A aplicação é uma SPA de prototipagem nesta etapa. Backend, Supabase Auth, migrations, APIs e workers serão adicionados em etapas posteriores, após revisão das necessidades de runtime e implantação.

## Consequências
- Inicialização local simples com npm.
- Tipagem e build verificáveis.
- A interface atual contém dados demonstrativos claramente identificados.
- Esta decisão não define ainda a arquitetura final de produção nem o método de renderização/servidor.
