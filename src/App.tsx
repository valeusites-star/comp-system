import { useState } from "react";
import {
  Activity, ArrowDownRight, ArrowUpRight, Bell, Bot, CalendarDays,
  Check, ChevronDown, ChevronRight, CircleHelp, Command, CreditCard,
  Globe2, LayoutDashboard, LifeBuoy, MessageCircle, MoreHorizontal,
  PanelLeftClose, Plus, Search, Settings2, Sparkles,
  Users, Workflow, Zap
} from "lucide-react";

const navigation = [
  { heading: "WORKSPACE", links: [
    { label: "Visão geral", icon: LayoutDashboard },
    { label: "Agentes de IA", icon: Bot, badge: "3" },
    { label: "Automações", icon: Workflow },
    { label: "Atendimento", icon: MessageCircle },
    { label: "Contatos e CRM", icon: Users }
  ]},
  { heading: "GESTÃO", links: [
    { label: "Integrações", icon: Zap },
    { label: "Sites e relatórios", icon: Globe2 },
    { label: "Agenda e tarefas", icon: CalendarDays },
    { label: "Equipe", icon: Users }
  ]},
  { heading: "CONTA", links: [
    { label: "Plano e consumo", icon: CreditCard },
    { label: "Configurações", icon: Settings2 },
    { label: "Central de suporte", icon: LifeBuoy }
  ]}
];

const metrics = [
  { label: "Atendimentos realizados", value: "1.284", change: "+12,8%", note: "em relação ao mês passado", icon: MessageCircle },
  { label: "Leads qualificados", value: "342", change: "+8,2%", note: "em relação ao mês passado", icon: Users },
  { label: "Tarefas concluídas", value: "89%", change: "+4,6%", note: "em relação ao mês passado", icon: Check },
  { label: "Tempo economizado", value: "42h", change: "+16,3%", note: "em relação ao mês passado", icon: Activity }
];

const activity = [
  { initials: "AT", title: "Agente de atendimento", description: "Concluiu 18 conversas automaticamente", time: "Há 4 min", color: "purple" },
  { initials: "PR", title: "Agente de prospecção", description: "Qualificou 12 novos contatos", time: "Há 28 min", color: "blue" },
  { initials: "MK", title: "Agente de marketing", description: "Preparou 3 sugestões de publicação", time: "Há 1 h", color: "green" }
];

function App() {
  const [active, setActive] = useState("Visão geral");
  const [collapsed, setCollapsed] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className={`app-shell ${collapsed ? "is-collapsed" : ""}`}>
      <aside className="sidebar">
        <div className="brand-row">
          <div className="brand-symbol"><Command size={19} strokeWidth={2.4} /></div>
          {!collapsed && <div className="brand-name"><strong>COMP<span>.</span></strong><small>SYSTEM</small></div>}
          <button className="icon-button collapse-toggle" onClick={() => setCollapsed(!collapsed)} aria-label="Recolher menu"><PanelLeftClose size={17} /></button>
        </div>

        <button className="workspace-switch">
          <div className="workspace-avatar">VS</div>
          {!collapsed && <><span className="workspace-label"><strong>Valeu Sites</strong><small>Workspace principal</small></span><ChevronDown size={15} /></>}
        </button>

        <nav className="side-navigation">
          {navigation.map(group => <section className="nav-group" key={group.heading}>
            {!collapsed && <div className="nav-heading">{group.heading}</div>}
            {group.links.map(link => {
              const Icon = link.icon;
              return <button key={link.label} className={`nav-link ${active === link.label ? "selected" : ""}`} onClick={() => setActive(link.label)} title={collapsed ? link.label : undefined}>
                <Icon size={18} />
                {!collapsed && <><span>{link.label}</span>{"badge" in link && link.badge ? <em>{link.badge}</em> : null}</>}
              </button>;
            })}
          </section>)}
        </nav>

        {!collapsed && <div className="sidebar-bottom">
          <div className="upgrade-card">
            <div className="upgrade-title"><Sparkles size={16} /> Seu espaço inteligente</div>
            <p>Desbloqueie todo o potencial da sua operação.</p>
            <button onClick={() => setActive("Plano e consumo")}>Conhecer planos <ArrowUpRight size={14} /></button>
          </div>
          <button className="help-link" onClick={() => setActive("Central de suporte")}><CircleHelp size={17} /> Central de ajuda <ChevronRight size={15} /></button>
          <div className="system-status"><i /> Todos os sistemas operacionais</div>
        </div>}
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="breadcrumbs"><span>Workspace</span><ChevronRight size={14} /><strong>{active}</strong></div>
          <div className="topbar-tools">
            <label className="search-control"><Search size={16} /><input value={search} onChange={event => setSearch(event.target.value)} placeholder="Buscar recursos..." /><kbd>⌘ K</kbd></label>
            <button className="icon-button notification-button" aria-label="Notificações"><Bell size={18} /><i /></button>
            <button className="profile-control"><div className="profile-avatar">ER</div><span><strong>Eric Reis</strong><small>Administrador</small></span><ChevronDown size={15} /></button>
          </div>
        </header>

        <div className="page-content">
          <section className="welcome-row">
            <div>
              <div className="eyebrow"><span /> PAINEL DE CONTROLE</div>
              <h1>Bom dia, Eric <b>✦</b></h1>
              <p>Acompanhe sua operação e mantenha tudo em movimento.</p>
            </div>
            <button className="primary-button" onClick={() => setActive("Agentes de IA")}><Plus size={17} /> Explorar agentes</button>
          </section>

          {active !== "Visão geral" && <div className="prototype-alert"><Sparkles size={17} /><div><strong>{active}</strong><span>Esta área está representada nesta prévia. A funcionalidade será implementada na respectiva etapa do produto.</span></div></div>}

          <section className="section-heading">
            <div><h2>Visão da operação</h2><p>Resumo do desempenho da sua empresa</p></div>
            <button className="period-button">Últimos 30 dias <ChevronDown size={15} /></button>
          </section>

          <section className="metrics-grid">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return <article className="metric-card" key={metric.label}>
                <div className="metric-top"><span>{metric.label}</span><div className={`metric-icon metric-icon-${index}`}><Icon size={17} /></div></div>
                <div className="metric-value">{metric.value}</div>
                <div className="metric-caption"><span><ArrowUpRight size={14} />{metric.change}</span>{metric.note}</div>
              </article>;
            })}
          </section>

          <section className="dashboard-grid">
            <article className="surface-card performance-card">
              <div className="card-heading"><div><h3>Atividade da operação</h3><p>Volume de interações nos últimos 7 dias</p></div><button className="icon-button"><MoreHorizontal size={19} /></button></div>
              <div className="chart-legend"><span><i className="legend-violet" /> Atendimentos</span><span><i className="legend-blue" /> Leads</span></div>
              <div className="chart-wrap">
                <div className="chart-y"><span>400</span><span>300</span><span>200</span><span>100</span><span>0</span></div>
                <div className="chart-main">
                  <div className="chart-gridlines"><i /><i /><i /><i /><i /></div>
                  <svg viewBox="0 0 700 220" preserveAspectRatio="none" aria-label="Gráfico ilustrativo de atividade">
                    <defs><linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#8b78f5" stopOpacity=".24" /><stop offset="100%" stopColor="#8b78f5" stopOpacity="0" /></linearGradient></defs>
                    <path d="M0 162 C45 150 55 120 100 132 S165 154 200 108 S270 120 300 91 S360 115 400 75 S465 97 500 62 S570 90 600 48 S665 60 700 30 L700 220 L0 220 Z" fill="url(#areaFill)" />
                    <path d="M0 162 C45 150 55 120 100 132 S165 154 200 108 S270 120 300 91 S360 115 400 75 S465 97 500 62 S570 90 600 48 S665 60 700 30" fill="none" stroke="#8b78f5" strokeWidth="3" />
                    <path d="M0 188 C50 178 60 170 100 176 S165 168 200 180 S270 158 300 169 S360 154 400 162 S465 143 500 155 S570 132 600 140 S665 130 700 120" fill="none" stroke="#58a6e8" strokeWidth="2.5" strokeDasharray="5 5" />
                  </svg>
                  <div className="chart-x"><span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span><span>Dom</span></div>
                </div>
              </div>
              <div className="demo-disclaimer">Dados demonstrativos para apresentação visual — ainda sem conexão com fontes reais.</div>
            </article>

            <article className="surface-card activity-card">
              <div className="card-heading"><div><h3>Atividade recente</h3><p>O que está acontecendo agora</p></div><button className="text-action">Ver tudo</button></div>
              <div className="activity-list">
                {activity.map(item => <div className="activity-item" key={item.title}>
                  <div className={`activity-avatar ${item.color}`}>{item.initials}</div>
                  <div className="activity-copy"><strong>{item.title}</strong><span>{item.description}</span><small>{item.time}</small></div>
                </div>)}
              </div>
              <div className="activity-footer"><span className="live-dot" /> Atualizado em tempo real <ArrowDownRight size={14} /></div>
            </article>
          </section>

          <section className="bottom-grid">
            <article className="surface-card quick-card">
              <div className="card-heading"><div><h3>Acesso rápido</h3><p>Seus recursos mais utilizados</p></div></div>
              <div className="quick-actions">
                <button onClick={() => setActive("Agentes de IA")}><div className="quick-icon purple"><Bot size={19} /></div><span><strong>Meus agentes</strong><small>Gerencie seus agentes</small></span><ChevronRight size={16} /></button>
                <button onClick={() => setActive("Automações")}><div className="quick-icon blue"><Workflow size={19} /></div><span><strong>Workflows</strong><small>Automatize processos</small></span><ChevronRight size={16} /></button>
                <button onClick={() => setActive("Integrações")}><div className="quick-icon orange"><Zap size={19} /></div><span><strong>Integrações</strong><small>Conecte suas ferramentas</small></span><ChevronRight size={16} /></button>
              </div>
            </article>
            <article className="insight-card">
              <div className="insight-orb"><Sparkles size={22} /></div>
              <div className="insight-content"><span>COMP INTELLIGENCE</span><h3>Sua operação, mais inteligente.</h3><p>Centralize processos, conecte ferramentas e transforme dados em decisões.</p><button onClick={() => setActive("Agentes de IA")}>Conhecer os agentes <ArrowUpRight size={15} /></button></div>
              <div className="insight-decoration" />
            </article>
          </section>
          <footer className="page-footer"><span>COMP SYSTEM <b>•</b> Workspace empresarial</span><span>Prévia de interface · Fundação do produto</span></footer>
        </div>
      </main>
    </div>
  );
}

export default App;
