// =============================================
// I18n Data
// =============================================
const t = {
  pt: {
    nav: ['inicio', 'sobre', 'projectos', 'skills', 'setup', 'contacto'],
    navIds: ['inicio', 'sobre', 'projectos', 'skills', 'setup', 'contacto'],
    hero: { tagline: '~ build. break. document.', age: '18 anos.', roles: 'Builder · Programmer · Experimentador', motto: 'Eu sou o experimento.', cta: 'ver projectos' },
    about: { label: '01. — SOBRE', heading: ['Builder que ', 'constrói', ', quebra e documenta tudo em público.'], cbpTitle: 'CBP Framework', cbpText: 'Trabalho com um framework simples — Create, Break, Protect. Construo uma coisa, tento destruí-la, e documento tudo. O processo é público porque aprender em privado desperdiça metade do valor.', nowTitle: 'Agora', nowText: 'Estou em Luanda. Hardware modesto, internet instável, escola de tarde. É o ambiente onde tudo o que construo tem de funcionar — por enquanto.', whyTitle: 'Porquê', whyText: 'Eu sou o experimento. Programação, segurança, neurociência, psicologia e arte não são áreas separadas — são lentes diferentes sobre o mesmo problema.', statsLabels: ['agora', 'idade', 'stack actual', 'foco 2026', 'a estudar', 'meta 2030'], statsValues: ['Luanda, Angola', '18 anos', 'Python · Linux · Networking', 'MyFi · KiandaBot', 'OWASP · Burp Suite', 'IA Security Eng.'], openTo: 'ABERTO PARA:', openTags: ['colaborações técnicas', 'projectos open source', 'feedback ao código', 'mentorias', 'oportunidades remotas'] },
    projects: {
      label: '02. — PROJECTOS', active: 'ACTIVOS', waiting: 'EM ESPERA', showMore: 'ver mais', showLess: 'ver menos',
      faber: { badge: 'a lançar', sub: 'Fase 0 — lançamento iminente', desc: 'Agente de código para terminal. Rust. Offline-first. 4GB RAM mínimo. Para quem o Claude Code e o Pi excluem.', why: 'Porquê existe', whyText: 'As ferramentas de IA para código assumem que tens fibra, uma conta paga e hardware recente. FABER não assume nada disso. Foi construído para funcionar no mesmo ambiente onde tudo o resto tem de funcionar — hardware modesto, internet instável, sem subscrição mensal.', how: 'Como funciona', howText: 'Corre um modelo quantizado localmente via llama.cpp. Sem cloud, sem tokens, sem rate limits. O agente lê o contexto do projecto, sugere código, executa comandos e aprende com o feedback directo no terminal. Tudo em Rust para manter o overhead mínimo.', status: 'Estado actual', statusItems: ['Core em Rust funcional', 'Integração llama.cpp estável', 'CLI básica operacional', 'Testes em hardware de 4GB RAM', 'Documentação e landing em progresso'], who: 'Para quem', whoText: 'Developers em mercados emergentes. Quem usa Raspberry Pi como máquina principal. Quem não quer depender de subscrições para ter um agente de código funcional.' },
      myfi: { badge: 'activo', sub: 'v2.0 • em desenvolvimento', desc: 'Monitor de rede local com logging, alertas e CLI própria. Construído para entender o que passa na rede antes de confiar nela.', problem: 'O problema', problemText: 'A maioria das pessoas partilha a rede sem saber o que está ligado. MyFi nasceu de uma simples questão: quem está na minha rede agora? E o que está a fazer? Não há resposta fácil sem as ferramentas certas — então construí as minhas.', features: 'Funcionalidades', featureItems: ['Scan contínuo de dispositivos na rede local', 'Detecção de MACs desconhecidos com alerta imediato', 'Log histórico de ligações por timestamp', 'CLI com comandos watch, scan, alert e export', 'Perfis de rede para ambientes diferentes (casa, escola, etc.)'], v2: 'v2.0 — o que muda', v2Text: 'A v1 era um script Python funcional mas duro de usar. A v2 é uma CLI estruturada com configuração por ficheiro, sistema de alertas configurável e suporte para múltiplas interfaces de rede em simultâneo.', roadmap: 'Roadmap próximo', roadmapText: 'Integração com SIM Alert AO para alertas via SMS. Dashboard web leve opcional. Exportação de relatórios em JSON e CSV para análise posterior.' },
      kianda: { badge: 'em planeamento', sub: 'MVP — piloto a planear', desc: 'Agente de vendas com IA para pequenos negócios. Suporte 24/7 automatizado via WhatsApp. Sem broadcast — assistência real.', context: 'O contexto', contextText: 'Em Luanda, grande parte do comércio informal passa pelo WhatsApp. Pequenos negócios respondem a centenas de mensagens por dia, manualmente, muitas vezes perdendo vendas por demora ou ausência. KiandaBot entra nessa lacuna.', how: 'Como funciona', howText: 'Conecta ao WhatsApp Business via Evolution API. O comerciante configura catálogo, preços e respostas padrão. O bot gere consultas, confirma stock, calcula preços e encaminha apenas o que precisa de intervenção humana.', diff: 'Diferencial', diffItems: ['Sem broadcast ou spam — só resposta a quem pergunta', 'Contexto de conversa preservado por cliente', 'Configuração simples sem código para o comerciante', 'Funciona com conexão instável', 'Transferência suave para humano quando necessário'], vision: 'Visão', visionText: 'Um piloto com 3–5 negócios reais em Luanda para validar o modelo. Se funcionar, escala para outros mercados lusófonos com a mesma dinâmica informal.' },
      waitingProjects: [{ name: "SIM Alert AO", desc: "Alertas silenciosos por tempo de dados na rede", href: null }, { name: "FileFlow", desc: "Transferência e automação de ficheiros locais", href: "https://github.com/LioExp/File-flow-assistant" }, { name: "Rocket", desc: "Construção API inteligente com IA. Alta 2030.", href: null }]
    },
    skills: {
      label: '03. — SKILLS', heading: 'Onde estou no mapa.', subheading: 'não um inventário — uma trajectória.',
      filters: { domino: 'domino', aprender: 'a aprender', roadmap: 'roadmap' },
      categories: [
        { id: 'dev', label: 'DEV', desc: '// ferramentas de construção', domino: ['Python', 'Bash', 'CLI design', 'Git'], aprender: ['Rust', 'APIs REST'], roadmap: ['WASM', 'sistemas distribuídos'] },
        { id: 'linux', label: 'LINUX & INFRA', desc: '// o ambiente onde tudo corre', domino: ['Arch Linux', 'terminal workflow', 'filesystem'], aprender: ['systemd', 'cron', 'iptables'], roadmap: ['containers', 'CI/CD'] },
        { id: 'networking', label: 'NETWORKING', desc: '// entender antes de proteger', domino: ['redes locais', 'monitorização'], aprender: ['TCP/IP profundo', 'DNS', 'tshark'], roadmap: ['packet crafting', 'network forensics'] },
        { id: 'security', label: 'SEGURANÇA', desc: '// o destino', domino: [], aprender: ['OWASP Top 10', 'Burp Suite', 'prompt injection'], roadmap: ['Security+', 'Purple team', 'IA security', 'garba'] }
      ],
      roadmapLabel: 'ROADMAP', roadmapDesc: '// 2026 – 2030',
      roadmapYears: [{ year: '2026', label: 'fundações', items: ['MyFi', 'KiandaBot', 'LioExp', 'FABER'] }, { year: '2027', label: 'Security+', items: ['1° interligação', 'hardware'] }, { year: '2028', label: 'senior remoto', items: ['freelance', 'cliente int.'] }, { year: '2030', label: 'IA Sec Eng', items: ['em pleno'] }]
    },
    setup: {
      label: '04. — SETUP', heading: 'Onde construo.', sub: 'hardware, software — a bancada.',
      items: [
        { label: 'SO', value: 'Arch Linux 7.0.2', detail: 'Rolling release. Kernel atualizado, tudo configurado do zero. Aprendo o sistema enquanto o uso.', img: null },
        { label: 'CPU', value: 'Intel Pentium N3510', detail: '4 cores a 1.99GHz. Processador Bay Trail de 2013. Suficiente para compilar, navegar e aprender.', img: null },
        { label: 'RAM', value: '3.7 GiB', detail: 'Modesto. Cada processo conta. A optimização não é opcional. Swap de 1.9 GiB para desenrascar.', img: null },
        { label: 'Disco', value: '500 GB HDD', detail: 'HGST 5400 RPM. Nada de SSD — paciência é parte do workflow.', img: null },
        { label: 'Rede', value: 'Atheros AR9565', detail: 'WiFi nativo. Internet móvel intermitente. Tudo que construo tem de funcionar offline-first.', img: null },
        { label: 'GPU', value: 'Intel HD Graphics (Bay Trail)', detail: 'Gráficos integrados. Sem aceleração 3D — terminal e navegador é o que importa.', img: null },
        { label: 'DE / WM', value: 'terminal recipe', detail: 'Sem ambiente gráfico pesado. O terminal é o meu desktop.', img: null },
        { label: 'Editor', value: 'Neovim', detail: 'Configurado do zero. Leve, rápido, sem distrações.', img: null },
        { label: 'iPhone', value: 'iPhone 7', detail: 'Gravação e edição de vídeos, áudio, thumbs, desenhos — tudo feito no telefone.', img: null },
        { label: 'Shell', value: 'Zsh + Oh My Zsh', detail: 'Prompt informativo, plugins essenciais, autocomplete.', img: null }
      ]
    },
    contact: {
      label: '05. — CONTACTO', heading: 'Fala comigo.', subtext: 'Prefiro e-mail. Respondo a tudo que vale uma resposta.',
      briefingToggleOpen: 'fechar briefing', briefingToggleClosed: 'como estruturar o teu e-mail',
      briefingIntro: 'Se a ideia envolve publicidade, parceria, software, projecto especial ou qualquer acção em que marca e repertório técnico precisem andar juntos, este é o canal principal.',
      briefingListLabel: 'Um bom briefing tem',
      briefingItems: ['Objectivo da campanha', 'Produto ou link principal', 'Janela de publicação', 'Formato desejado', 'Mensagens obrigatórias', 'Faixa de orçamento', 'Necessidade de uso de imagem, direitos ou whitelisting'],
      fastestWayLabel: 'Forma mais rápida', fastestWayText: 'Mandar contexto, link do produto, prazo e expectativa comercial no mesmo e-mail acelera bastante a resposta.',
      sendEmail: '→ enviar e-mail agora',
      whereLabel: 'Onde me encontras',
      ytPTdesc: 'Vídeos longos. Builds, documentação de projectos, processo em aberto.',
      ytENdesc: 'Shorts. Quick takes, demos rápidas, audiência internacional.',
      subscribers: 'inscritos',
      socials: [
        { label: 'X / Twitter', sub: 'pensamentos, updates, threads técnicas', handle: '@lioexp', href: 'https://x.com/lioexp', testid: 'link-contact-x' },
        { label: 'LinkedIn', sub: 'rede profissional, colaborações formais', handle: 'in/lioexp', href: '#', testid: 'link-contact-linkedin' },
        { label: 'GitHub', sub: 'código aberto, repositórios, contribuições', handle: 'github.com/lioexp', href: 'https://github.com/lioexp', testid: 'link-contact-github' },
        { label: 'Discord', sub: 'comunidade, debugging, builds ao vivo', handle: 'entra no server', href: 'https://discord.gg/wkmuHa3P8q', testid: 'link-contact-discord' },
        { label: 'E-mail', sub: 'canal principal para colaborações', handle: 'lioexp0@gmail.com', href: 'mailto:lioexp0@gmail.com', testid: 'link-contact-email' }
      ],
      footer: { tagline: 'build. break. document.', colossians: 'Col 3:23' }
    }
  },
  en: {
    nav: ['home', 'about', 'projects', 'skills', 'setup', 'contact'],
    navIds: ['inicio', 'sobre', 'projectos', 'skills', 'setup', 'contacto'],
    hero: { tagline: '~ build. break. document.', age: '18 years old.', roles: 'Builder · Programmer · Experimenter', motto: 'I am the experiment.', cta: 'view projects' },
    about: { label: '01. — ABOUT', heading: ['Builder who ', 'builds', ', breaks and documents everything in public.'], cbpTitle: 'CBP Framework', cbpText: 'I work with a simple framework — Create, Break, Protect. I build something, try to break it, and document everything. The process is public because learning in private wastes half the value.', nowTitle: 'Now', nowText: "I'm in Luanda. Modest hardware, unstable internet, afternoon school. This is the environment where everything I build has to work — for now.", whyTitle: 'Why', whyText: 'I am the experiment. Programming, security, neuroscience, psychology and art aren\'t separate fields — they\'re different lenses on the same problem.', statsLabels: ['now', 'age', 'current stack', '2026 focus', 'studying', '2030 goal'], statsValues: ['Luanda, Angola', '18 years old', 'Python · Linux · Networking', 'MyFi · KiandaBot', 'OWASP · Burp Suite', 'AI Security Eng.'], openTo: 'OPEN TO:', openTags: ['technical collaborations', 'open source projects', 'code feedback', 'mentorships', 'remote opportunities'] },
    projects: {
      label: '02. — PROJECTS', active: 'ACTIVE', waiting: 'ON HOLD', showMore: 'show more', showLess: 'show less',
      faber: { badge: 'launching', sub: 'Phase 0 — imminent launch', desc: 'Code agent for the terminal. Rust. Offline-first. 4GB RAM minimum. For those Claude Code and the Pi exclude.', why: 'Why it exists', whyText: 'AI coding tools assume you have fibre, a paid account and recent hardware. FABER assumes none of that. It was built to work in the same environment where everything else has to work — modest hardware, unstable internet, no monthly subscription.', how: 'How it works', howText: 'Runs a quantized model locally via llama.cpp. No cloud, no tokens, no rate limits. The agent reads the project context, suggests code, executes commands and learns from direct feedback in the terminal. All in Rust to keep overhead minimal.', status: 'Current status', statusItems: ['Rust core functional', 'Stable llama.cpp integration', 'Basic CLI operational', 'Tested on 4GB RAM hardware', 'Documentation and landing in progress'], who: 'Who it\'s for', whoText: 'Developers in emerging markets. Those using Raspberry Pi as their main machine. Those who don\'t want to depend on subscriptions to have a functional code agent.' },
      myfi: { badge: 'active', sub: 'v2.0 • in development', desc: 'Local network monitor with logging, alerts and its own CLI. Built to understand what\'s on the network before trusting it.', problem: 'The problem', problemText: 'Most people share networks without knowing what\'s connected. MyFi was born from a simple question: who is on my network right now? And what are they doing? There\'s no easy answer without the right tools — so I built mine.', features: 'Features', featureItems: ['Continuous scan of devices on the local network', 'Unknown MAC detection with immediate alert', 'Historical connection log by timestamp', 'CLI with watch, scan, alert and export commands', 'Network profiles for different environments (home, school, etc.)'], v2: 'v2.0 — what changes', v2Text: 'v1 was a functional but rough Python script. v2 is a structured CLI with file-based config, configurable alert system and support for multiple network interfaces simultaneously.', roadmap: 'Next roadmap', roadmapText: 'Integration with SIM Alert AO for SMS alerts. Optional lightweight web dashboard. Report export in JSON and CSV for later analysis.' },
      kianda: { badge: 'planning', sub: 'MVP — pilot in planning', desc: 'AI sales agent for small businesses. 24/7 automated support via WhatsApp. No broadcast — real assistance.', context: 'The context', contextText: 'In Luanda, much of informal commerce runs through WhatsApp. Small businesses respond to hundreds of messages per day, manually, often losing sales due to delays or absence. KiandaBot fills that gap.', how: 'How it works', howText: 'Connects to WhatsApp Business via Evolution API. The merchant configures catalogue, prices and default responses. The bot handles queries, confirms stock, calculates prices and routes only what needs human intervention.', diff: 'What makes it different', diffItems: ['No broadcast or spam — only replies to those who ask', 'Conversation context preserved per customer', 'Simple no-code setup for the merchant', 'Works with unstable connections', 'Smooth handoff to human when needed'], vision: 'Vision', visionText: 'A pilot with 3–5 real businesses in Luanda to validate the model. If it works, scale to other Lusophone markets with the same informal dynamic.' },
      waitingProjects: [{ name: "SIM Alert AO", desc: "Silent alerts for mobile data time on the network", href: null }, { name: "FileFlow", desc: "Local file transfer and automation", href: "https://github.com/LioExp/File-flow-assistant" }, { name: "Rocket", desc: "AI-powered smart API builder. ETA 2030.", href: null }]
    },
    skills: {
      label: '03. — SKILLS', heading: 'Where I am on the map.', subheading: 'not an inventory — a trajectory.',
      filters: { domino: 'mastered', aprender: 'learning', roadmap: 'roadmap' },
      categories: [
        { id: 'dev', label: 'DEV', desc: '// building tools', domino: ['Python', 'Bash', 'CLI design', 'Git'], aprender: ['Rust', 'REST APIs'], roadmap: ['WASM', 'distributed systems'] },
        { id: 'linux', label: 'LINUX & INFRA', desc: '// the environment where everything runs', domino: ['Arch Linux', 'terminal workflow', 'filesystem'], aprender: ['systemd', 'cron', 'iptables'], roadmap: ['containers', 'CI/CD'] },
        { id: 'networking', label: 'NETWORKING', desc: '// understand before protecting', domino: ['local networks', 'monitoring'], aprender: ['deep TCP/IP', 'DNS', 'tshark'], roadmap: ['packet crafting', 'network forensics'] },
        { id: 'security', label: 'SECURITY', desc: '// the destination', domino: [], aprender: ['OWASP Top 10', 'Burp Suite', 'prompt injection'], roadmap: ['Security+', 'Purple team', 'AI security', 'garba'] }
      ],
      roadmapLabel: 'ROADMAP', roadmapDesc: '// 2026 – 2030',
      roadmapYears: [{ year: '2026', label: 'foundations', items: ['MyFi', 'KiandaBot', 'LioExp', 'FABER'] }, { year: '2027', label: 'Security+', items: ['1st integration', 'hardware'] }, { year: '2028', label: 'senior remote', items: ['freelance', 'intl. client'] }, { year: '2030', label: 'AI Sec Eng', items: ['full swing'] }]
    },
    setup: {
      label: '04. — SETUP', heading: 'Where I build.', sub: 'hardware, software — the workbench.',
      items: [
        { label: 'OS', value: 'Arch Linux 7.0.2', detail: 'Rolling release. Up-to-date kernel, everything configured from scratch. I learn the system while using it.', img: null },
        { label: 'CPU', value: 'Intel Pentium N3510', detail: '4 cores at 1.99GHz. Bay Trail processor from 2013. Enough to compile, browse and learn.', img: null },
        { label: 'RAM', value: '3.7 GiB', detail: 'Modest. Every process counts. Optimization is not optional. 1.9 GiB swap for when it gets tight.', img: null },
        { label: 'Disk', value: '500 GB HDD', detail: 'HGST 5400 RPM. No SSD — patience is part of the workflow.', img: null },
        { label: 'Network', value: 'Atheros AR9565', detail: 'Native WiFi. Intermittent mobile internet. Everything I build must work offline-first.', img: null },
        { label: 'GPU', value: 'Intel HD Graphics (Bay Trail)', detail: 'Integrated graphics. No 3D acceleration — terminal and browser are what matter.', img: null },
        { label: 'DE / WM', value: 'terminal recipe', detail: 'No heavy desktop environment. The terminal is my desktop.', img: null },
        { label: 'Editor', value: 'Neovim', detail: 'Configured from zero. Lightweight, fast, no distractions.', img: null },
        { label: 'iPhone', value: 'iPhone 7', detail: 'Video recording and editing, audio, thumbnails, drawings — everything done on the phone.', img: null },
        { label: 'Shell', value: 'Zsh + Oh My Zsh', detail: 'Informative prompt, essential plugins, autocomplete.', img: null }
      ]
    },
    contact: {
      label: '05. — CONTACT', heading: 'Talk to me.', subtext: 'I prefer email. I reply to everything worth a reply.',
      briefingToggleOpen: 'close briefing', briefingToggleClosed: 'how to structure your email',
      briefingIntro: 'If the idea involves advertising, partnership, software, a special project or any action where brand and technical background need to work together, this is the main channel.',
      briefingListLabel: 'A good briefing includes',
      briefingItems: ['Campaign objective', 'Product or main link', 'Publication window', 'Desired format', 'Required messages', 'Budget range', 'Image usage, rights or whitelisting needs'],
      fastestWayLabel: 'Fastest way', fastestWayText: 'Sending context, product link, deadline and commercial expectation in the same email speeds up the reply significantly.',
      sendEmail: '→ send email now',
      whereLabel: 'Where to find me',
      ytPTdesc: 'Long-form videos. Builds, project documentation, process in the open.',
      ytENdesc: 'Shorts. Quick takes, fast demos, international audience.',
      subscribers: 'subscribers',
      socials: [
        { label: 'X / Twitter', sub: 'thoughts, updates, technical threads', handle: '@lioexp', href: 'https://x.com/lioexp', testid: 'link-contact-x' },
        { label: 'LinkedIn', sub: 'professional network, formal collaborations', handle: 'in/lioexp', href: '#', testid: 'link-contact-linkedin' },
        { label: 'GitHub', sub: 'open source code, repositories, contributions', handle: 'github.com/lioexp', href: 'https://github.com/lioexp', testid: 'link-contact-github' },
        { label: 'Discord', sub: 'community, debugging, live builds', handle: 'join the server', href: 'https://discord.gg/wkmuHa3P8q', testid: 'link-contact-discord' },
        { label: 'Email', sub: 'main channel for collaborations', handle: 'lioexp0@gmail.com', href: 'mailto:lioexp0@gmail.com', testid: 'link-contact-email' }
      ],
      footer: { tagline: 'build. break. document.', colossians: 'Col 3:23' }
    }
  }
};

// =============================================
// Icons
// =============================================
const icons = {
  github: '<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>',
  external: '<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>',
  yt: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
};

// =============================================
// Project Definitions (data only)
// =============================================
const PROJECTS = [
  {
    id: 'FABER', key: 'faber', color: '#C62828',
    img: 'assets/faber-preview.png', imgBg: 'transparent',
    tags: ['Rust', 'llama.cpp', 'CLI', 'LLM local'],
    github: 'https://github.com/LioExp/Faber', landing: '#'
  },
  {
    id: 'MyFi', key: 'myfi', color: '#3b82f6',
    img: 'assets/myfi-preview.png', imgBg: '#050505',
    tags: ['Python', 'CLI', 'Networking', 'Linux'],
    github: 'https://github.com/LioExp/MyFi', landing: 'https://lioexp.github.io/MyFi/'
  },
  {
    id: 'KiandaBot', key: 'kianda', color: '#7c3aed',
    tags: ['Python', 'Evolution API', 'AI', 'WhatsApp'],
    github: 'https://github.com/LioExp/Kianda-bot', landing: 'https://kiandabot.vercel.app/',
    terminal: true
  }
];

// =============================================
// Constants
// =============================================
const FILTER_COLORS = { domino: '#22c55e', aprender: '#60a5fa', roadmap: '#6b7280' };

function hexToRgba(hex, alpha) {
  const v = parseInt(hex.slice(1), 16);
  return `rgba(${v >> 16},${(v >> 8) & 255},${v & 255},${alpha})`;
}


// =============================================
// State
// =============================================
let lang = localStorage.getItem('lang') || 'pt';
let openProjects = {};
let skillFilter = null;
let briefingOpen = false;

function $(id) { return document.getElementById(id); }

// =============================================
// Detail section definitions per project
// =============================================
function getDetailSections(key, pr) {
  const map = {
    faber: [
      { label: pr.why, text: pr.whyText },
      { label: pr.how, text: pr.howText },
      { label: pr.status, list: pr.statusItems },
      { label: pr.who, text: pr.whoText }
    ],
    myfi: [
      { label: pr.problem, text: pr.problemText },
      { label: pr.features, list: pr.featureItems },
      { label: pr.v2, text: pr.v2Text },
      { label: pr.roadmap, text: pr.roadmapText }
    ],
    kianda: [
      { label: pr.context, text: pr.contextText },
      { label: pr.how, text: pr.howText },
      { label: pr.diff, list: pr.diffItems },
      { label: pr.vision, text: pr.visionText }
    ]
  };
  return map[key];
}

// =============================================
// Render Dispatcher
// =============================================
function render() {
  const data = t[lang];
  updateNav(data);
  renderHero(data);
  renderAbout(data);
  renderProjectsSection(data);
  renderSkillsSection(data);
  renderSetupSection(data);
  renderContactSection(data);
  renderFooter(data);
  fetchYtFeed();
  fetchGhGraph();
}

// =============================================
// Section Renderers
// =============================================
function updateNav(data) {
  document.querySelectorAll('.nav-link').forEach((l, i) => {
    l.textContent = data.nav[i];
    l.href = '#' + data.navIds[i];
  });
}

function renderHero(data) {
  $('tagline').textContent = data.hero.tagline;
  $('heroAge').textContent = data.hero.age;
  $('heroRoles').textContent = data.hero.roles;
  $('heroMotto').textContent = data.hero.motto;
  $('ctaText').textContent = data.hero.cta;
}

function renderAbout(data) {
  $('aboutLabel').textContent = data.about.label;
  $('aboutTitle').innerHTML = `${data.about.heading[0]}<span class="text-purple">${data.about.heading[1]}</span>${data.about.heading[2]}`;
  $('cbpTitle').textContent = data.about.cbpTitle;
  $('cbpText').textContent = data.about.cbpText;
  $('nowTitle').textContent = data.about.nowTitle;
  $('nowText').textContent = data.about.nowText;
  $('whyTitle').textContent = data.about.whyTitle;
  $('whyText').textContent = data.about.whyText;

  $('statsCard').innerHTML = data.about.statsLabels.map((l, i) =>
    `<div class="stat-row"><span class="stat-label">${l}</span><span class="stat-value${i === data.about.statsLabels.length - 1 ? ' highlight' : ''}">${data.about.statsValues[i]}</span></div>`
  ).join('');

  $('openToLabel').textContent = data.about.openTo;
  $('openTags').innerHTML = data.about.openTags.map(t => `<span class="tag">${t}</span>`).join('');
}

// ---- Projects ----
function renderProjectsSection(data) {
  $('projectsLabel').textContent = data.projects.label;
  $('activeLabel').textContent = data.projects.active;
  $('waitingLabel').textContent = data.projects.waiting;

  $('projectsGrid').innerHTML = PROJECTS.map(p => renderProjectCard(p, data)).join('');
  $('waitingGrid').innerHTML = renderWaitingList(data);
}

function renderProjectCard(p, data) {
  const pr = data.projects[p.key];
  const isOpen = openProjects[p.id];
  const c = p.color;

  return `<div class="project-card">
    ${projectBar(c)}
    ${projectHeader(p, pr)}
    <p class="project-sub">${pr.sub}</p>
    <p class="project-desc">${pr.desc}</p>
    ${projectPreview(p)}
    ${projectTags(p)}
    ${projectActions(p, data, isOpen)}
    ${projectDetail(p, pr, isOpen)}
  </div>`;
}

function projectBar(color) {
  return `<div class="project-bar" style="background:${color}33"></div>`;
}

function projectHeader(p, pr) {
  const c = p.color;
  return `<div class="project-header">
    <h4 class="project-name">${p.id}</h4>
    <span class="project-badge" style="background:${hexToRgba(c, 0.12)};color:${c};border-color:${hexToRgba(c, 0.25)}">
      <span class="badge-dot" style="background:${c}"></span>
      ${pr.badge}
    </span>
  </div>`;
}

function projectPreview(p) {
  if (p.terminal) return terminalPreview();
  return `<div class="project-img"${p.imgBg ? ` style="background:${p.imgBg}"` : ''}><img src="${p.img}" alt="${p.id} preview" draggable="false" loading="lazy" /></div>`;
}

function terminalPreview() {
  return `<div class="terminal">
    <div class="terminal-dots"><div class="terminal-dot" style="background:rgba(239,68,68,0.2)"></div><div class="terminal-dot" style="background:rgba(234,179,8,0.2)"></div><div class="terminal-dot" style="background:rgba(34,197,94,0.2)"></div></div>
    <div class="text-gray-500">cliente → ${lang === 'pt' ? 'Olá, têm o produto X?' : 'Hi, do you have product X?'}</div>
    <div class="terminal-line green">bot → ${lang === 'pt' ? 'Sim! Temos em stock. Posso enviar hoje.' : 'Yes! In stock. I can ship today.'}</div>
    <div class="text-gray-500 terminal-line">cliente → ${lang === 'pt' ? 'Qual o preço?' : "What's the price?"}</div>
    <div class="terminal-line green">bot → ${lang === 'pt' ? '5.000 Kz. Entrega hoje incluída.' : '5,000 Kz. Same-day delivery included.'}</div>
    <div class="terminal-cursor"><span class="text-purple">❯</span> <span class="cursor-blink">_</span></div>
  </div>`;
}

function projectTags(p) {
  return `<div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>`;
}

function projectActions(p, data, isOpen) {
  return `<div class="project-actions">
    <button class="expand-btn" data-project="${p.id}"><span class="arrow-purple" style="transform:${isOpen ? 'rotate(90deg)' : 'rotate(0)'}">→</span> ${isOpen ? data.projects.showLess : data.projects.showMore}</button>
    <div class="project-links">
      <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="pill-link">${icons.github} GitHub</a>
      <a href="${p.landing}" target="_blank" rel="noopener noreferrer" class="pill-link">${icons.external} Landing</a>
    </div>
  </div>`;
}

function projectDetail(p, pr, isOpen) {
  const sections = getDetailSections(p.key, pr);
  return `<div class="project-detail${isOpen ? ' open' : ''}">
    <div class="project-detail-inner">
      ${sections.map(s => {
        if (s.list) return `<div><p class="detail-label">${s.label}</p><ul class="detail-list">${s.list.map(i => `<li><span class="detail-bullet${p.key === 'kianda' ? ' purple' : ''}">·</span><span>${i}</span></li>`).join('')}</ul></div>`;
        return `<div><p class="detail-label">${s.label}</p><p style="line-height:1.625">${s.text}</p></div>`;
      }).join('')}
    </div>
  </div>`;
}

function renderWaitingList(data) {
  return data.projects.waitingProjects.map(p =>
    `<div class="waiting-item"><h5 class="waiting-name">${p.href ? `<a href="${p.href}" target="_blank" rel="noopener noreferrer" style="transition:color 0.2s">${p.name}</a>` : p.name}</h5><p class="waiting-desc">${p.desc}</p></div>`
  ).join('');
}

// ---- Skills ----
function renderSkillsSection(data) {
  $('skillsLabel').textContent = data.skills.label;
  $('skillsHeading').textContent = data.skills.heading;
  $('skillsSub').textContent = data.skills.subheading;

  renderFilterPills(data);
  renderSkillCategories(data);
  renderRoadmap(data);
}

function renderFilterPills(data) {
  const filters = ['domino', 'aprender', 'roadmap'];
  $('filterPills').innerHTML = filters.map(f => {
    const active = skillFilter === f;
    const dotColor = FILTER_COLORS[f];
    const roadmapStyle = f === 'roadmap' ? 'opacity:0.4' : '';
    return `<button class="filter-btn${active ? ' active' : ''}" data-filter="${f}">
      <span class="filter-dot" style="background:${dotColor};${roadmapStyle}"></span>
      ${data.skills.filters[f]}
    </button>`;
  }).join('');
}

function renderSkillCategories(data) {
  $('skillsCategories').innerHTML = data.skills.categories.map(cat => {
    const show = (key) => !skillFilter || skillFilter === key;
    const visible = (key) => show(key) ? cat[key] : [];
    const hasAny = cat.domino.length + cat.aprender.length + cat.roadmap.length > 0;
    if (!hasAny) return '';

    const groups = ['domino', 'aprender', 'roadmap'].map(key => {
      const items = visible(key);
      if (!items.length) return '';
      const dotColor = FILTER_COLORS[key];
      const isRoadmap = key === 'roadmap';
      return `<div><p class="skill-group-label">${data.skills.filters[key]}</p><div class="skill-items">${items.map(s => `<span class="skill-item${isRoadmap ? ' roadmap' : ''}"><span class="skill-item-dot" style="background:${isRoadmap ? 'none' : dotColor};${isRoadmap ? 'border:1px solid #6b7280' : ''}"></span>${s}</span>`).join('')}</div></div>`;
    }).join('');

    return `<div class="skill-category">
      <div><p class="cat-label">${cat.label}</p><p class="cat-desc">${cat.desc}</p></div>
      <div class="skill-groups">${groups}</div>
    </div>`;
  }).join('');
}

function renderRoadmap(data) {
  $('roadmapSection').innerHTML = `<div class="roadmap-grid">
    <div><p class="cat-label">${data.skills.roadmapLabel}</p><p class="cat-desc">${data.skills.roadmapDesc}</p></div>
    <div class="roadmap-cards">${data.skills.roadmapYears.map((y, i) =>
      `<div class="roadmap-card${i === 0 ? ' current' : ''}">
        <p class="roadmap-year${i === 0 ? ' current' : ''}">${y.year}</p>
        <p class="roadmap-label">${y.label}</p>
        <div>${y.items.map(item => `<p class="roadmap-item">${item}</p>`).join('')}</div>
      </div>`
    ).join('')}</div>
  </div>`;
}

// ---- Setup ----
function renderSetupSection(data) {
  $('setupLabel').textContent = data.setup.label;
  $('setupHeading').textContent = data.setup.heading;
  $('setupSub').textContent = data.setup.sub;

  $('setupGrid').innerHTML = `
    <div class="setup-image-wrap" data-open-modal>
      <img src="assets/setup-2026.jpg" alt="Setup 2026" class="setup-image" draggable="false" loading="lazy" />
      <div class="setup-image-hint">${lang === 'pt' ? 'clique para ver os componentes' : 'click to see the components'}</div>
    </div>
    <div class="yt-feed" id="ytFeed">
      <div class="yt-feed-track" id="ytFeedTrack"></div>
    </div>
    <div class="gh-graph" id="ghGraph"></div>`;
}

let ytAnimId = null;
let ytPaused = false;

function startYtScroll() {
  const track = $('ytFeedTrack');
  if (!track || track.dataset.anim === '1') return;
  track.dataset.anim = '1';

  const feed = track.parentElement;
  let x = 0;
  let touchMoved = false;

  feed.addEventListener('mouseenter', () => ytPaused = true);
  feed.addEventListener('mouseleave', () => ytPaused = false);
  feed.addEventListener('touchstart', () => { ytPaused = true; touchMoved = false; }, { passive: true });
  feed.addEventListener('touchmove', () => { touchMoved = true; }, { passive: true });
  feed.addEventListener('touchend', () => {
    // resume a bit after touch ends so the scroll settles
    setTimeout(() => { if (track.dataset.anim) ytPaused = false; }, 80);
  }, { passive: true });

  // Prevent accidental link navigation during scroll
  feed.addEventListener('click', (e) => {
    if (touchMoved) { e.preventDefault(); e.stopPropagation(); }
  }, true);

  const step = () => {
    if (!track.dataset.anim) return;
    if (!ytPaused) {
      x -= 0.6;
      const half = track.scrollWidth / 2;
      if (Math.abs(x) >= half) x = 0;
      track.style.transform = `translateX(${x}px)`;
    }
    ytAnimId = requestAnimationFrame(step);
  };
  ytAnimId = requestAnimationFrame(step);
}

function stopYtScroll() {
  if (ytAnimId) cancelAnimationFrame(ytAnimId);
  ytAnimId = null;
}

async function fetchYtFeed() {
  const track = $('ytFeedTrack');
  if (!track) return;
  stopYtScroll();
  delete track.dataset.anim;
  track.style.transform = '';

  const fallback = () => {
    track.innerHTML = `<a href="https://youtube.com/@lioexp" target="_blank" rel="noopener noreferrer" class="yt-feed-item">${icons.yt} <span class="yt-feed-title">youtube.com/@lioexp</span></a>`;
    startYtScroll();
  };

  try {
    const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCZIZwWoayEW1CXxqE0TwyLQ');
    const data = await res.json();
    if (data.status !== 'ok' || !data.items?.length) { fallback(); return; }
    const items = data.items.slice(0, 12);
    const html = items.map(v => `
      <a href="${v.link}" target="_blank" rel="noopener noreferrer" class="yt-feed-item">
        <img src="${v.thumbnail}" alt="${v.title}" class="yt-feed-thumb" loading="lazy" />
        <span class="yt-feed-title">${v.title}</span>
      </a>
    `).join('');
    track.innerHTML = html + html;
    startYtScroll();
  } catch { fallback(); }
}

// ---- GitHub Graph ----
const GH_PALETTE = [
  'transparent',
  'rgba(124,58,237,0.12)',
  'rgba(124,58,237,0.30)',
  'rgba(124,58,237,0.55)',
  '#7c3aed',
];
const GH_LEVELS = ['NONE', 'FIRST_QUARTILE', 'SECOND_QUARTILE', 'THIRD_QUARTILE', 'FOURTH_QUARTILE'];
const GH_MONTHS = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

async function fetchGhGraph() {
  const container = $('ghGraph');
  if (!container) return;

  try {
    const res = await fetch('https://github-contributions-api.deno.dev/LioExp.json?from=2026-03-01&to=2026-06-30');
    const data = await res.json();
    const weeks = data.contributions;

    // Month header
    let monthHtml = '<div class="gh-months">';
    monthHtml += '<span class="gh-spacer"></span>';
    let last = '';
    let span = 0;
    let start = 0;
    for (let w = 0; w < weeks.length; w++) {
      const m = weeks[w][0]?.date?.substring(5, 7) || '';
      if (m !== last) {
        if (last) {
          const label = GH_MONTHS[parseInt(last)] || last;
          monthHtml += `<span class="gh-mlabel" style="grid-column:${start + 1}/${start + span + 1}">${label}</span>`;
        }
        last = m;
        start = w + 1;
        span = 1;
      } else {
        span++;
      }
    }
    if (last) {
      const label = GH_MONTHS[parseInt(last)] || last;
      monthHtml += `<span class="gh-mlabel" style="grid-column:${start + 1}/${start + span + 1}">${label}</span>`;
    }
    monthHtml += '</div>';

    // Body: day labels + weeks
    const dayLabels = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
    let bodyHtml = '<div class="gh-body">';
    bodyHtml += '<div class="gh-labels">';
    for (const d of dayLabels) {
      bodyHtml += `<span class="gh-dlabel">${d}</span>`;
    }
    bodyHtml += '</div>';
    bodyHtml += '<div class="gh-weeks">';
    for (const week of weeks) {
      bodyHtml += '<div class="gh-week">';
      for (const day of week) {
        const idx = GH_LEVELS.indexOf(day.contributionLevel);
        const color = GH_PALETTE[idx] || 'transparent';
        bodyHtml += `<span class="gh-cell" style="background:${color}" title="${day.date}: ${day.contributionCount} commit${day.contributionCount !== 1 ? 's' : ''}"></span>`;
      }
      bodyHtml += '</div>';
    }
    bodyHtml += '</div></div>';

    container.innerHTML = monthHtml + bodyHtml;
  } catch {
    container.innerHTML = '';
  }
}

// ---- Contact ----
function renderContactSection(data) {
  $('contactLabel').textContent = data.contact.label;
  $('contactHeading').textContent = data.contact.heading;
  $('contactText').textContent = data.contact.subtext;
  $('briefingBtnText').textContent = briefingOpen ? data.contact.briefingToggleOpen : data.contact.briefingToggleClosed;
  const arrow = document.querySelector('.arrow-toggle');
  if (arrow) arrow.classList.toggle('open', briefingOpen);
  $('whereLabel').textContent = data.contact.whereLabel;

  renderYtCards(data);
  renderSocialList(data);
  renderBriefing(data);
}

function renderYtCards(data) {
  $('ytGrid').innerHTML = `
    <a href="https://youtube.com/@lioexp" target="_blank" rel="noopener noreferrer" class="yt-card" data-testid="link-contact-yt-pt">
      <div class="yt-icon">${icons.yt}</div>
      <div class="yt-info">
        <div class="yt-title"><span class="yt-name">YouTube PT</span><span class="yt-lang">PT</span></div>
        <p class="yt-desc">${data.contact.ytPTdesc}</p>
        <div class="yt-footer"><span class="yt-handle">@lioexp →</span></div>
      </div>
    </a>
    <a href="https://youtube.com/@lioexp-en" target="_blank" rel="noopener noreferrer" class="yt-card" data-testid="link-contact-yt-en">
      <div class="yt-icon">${icons.yt}</div>
      <div class="yt-info">
        <div class="yt-title"><span class="yt-name">YouTube EN</span><span class="yt-lang">EN</span></div>
        <p class="yt-desc">${data.contact.ytENdesc}</p>
        <div class="yt-footer"><span class="yt-handle">@lioexp-en →</span></div>
      </div>
    </a>`;
}

function renderSocialList(data) {
  $('socialList').innerHTML = data.contact.socials.map(s =>
    `<a href="${s.href}" target="${s.href.startsWith('mailto') ? '' : '_blank'}" rel="noopener noreferrer" class="social-item" data-testid="${s.testid}">
      <div><span class="social-name">${s.label}</span><p class="social-sub">${s.sub}</p></div>
      <span class="social-handle">${s.handle} →</span>
    </a>`
  ).join('');
}

function renderBriefing(data) {
  if (!briefingOpen) {
    $('briefingContent').classList.remove('open');
    $('briefingContent').innerHTML = '';
    return;
  }
  $('briefingContent').classList.add('open');
  $('briefingContent').innerHTML = `<div class="briefing-inner">
    <p>${data.contact.briefingIntro}</p>
    <div>
      <p class="briefing-list-label">${data.contact.briefingListLabel}</p>
      <ul class="briefing-list">${data.contact.briefingItems.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>
    <div class="briefing-fast">
      <p class="briefing-fast-label">${data.contact.fastestWayLabel}</p>
      <p>${data.contact.fastestWayText}</p>
    </div>
    <a href="mailto:lioexp0@gmail.com?subject=Briefing — Colaboração" class="briefing-email">${data.contact.sendEmail}</a>
  </div>`;
}

// ---- Footer ----
function renderFooter(data) {
  const fullVerse = lang === 'pt'
    ? 'Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens'
    : 'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters';
  $('footer').innerHTML = `
    <div class="footer-inner">
      <p class="footer-tagline">~ ${data.contact.footer.tagline}</p>
      <button class="verse-btn" data-verse>${data.contact.footer.colossians}</button>
      <p class="verse-full" id="verseFull">"${fullVerse}" — Colossenses 3:23</p>
    </div>`;
}

// =============================================
// Setup Modal
// =============================================
function openSetupModal() {
  const html = document.documentElement;
  html.style.overflow = 'hidden';
  const overlay = document.createElement('div');
  overlay.className = 'setup-modal-overlay';
  overlay.id = 'setupModal';
  const data = t[lang];
  overlay.innerHTML = `
    <div class="setup-modal">
      <button class="setup-modal-close" data-close-modal>×</button>
      <div class="setup-modal-content">
        <div class="setup-modal-image"><img src="assets/setup-2026.jpg" alt="Setup 2026" draggable="false" loading="lazy" /></div>
        <div class="setup-modal-items">
          <p class="setup-modal-heading">${lang === 'pt' ? 'Componentes' : 'Components'}</p>
          ${data.setup.items.map(item => `
            <div class="setup-modal-item">
              <span class="setup-modal-label">${item.label}</span>
              <span class="setup-modal-value">${item.value}</span>
              <p class="setup-modal-detail">${item.detail}</p>
            </div>`).join('')}
        </div>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('open'));
  document.addEventListener('keydown', closeOnEscape);
}

function closeSetupModal() {
  const modal = $('setupModal');
  if (!modal) return;
  modal.classList.remove('open');
  document.documentElement.style.overflow = '';
  document.removeEventListener('keydown', closeOnEscape);
  setTimeout(() => modal.remove(), 300);
}

function closeOnEscape(e) {
  if (e.key === 'Escape') closeSetupModal();
}

// =============================================
// State Mutators
// =============================================
function toggleProject(name) {
  openProjects[name] = !openProjects[name];
  render();
}

function toggleBriefing() {
  briefingOpen = !briefingOpen;
  render();
}

function setFilter(f) {
  skillFilter = skillFilter === f ? null : f;
  render();
}

function switchLang(l) {
  lang = l;
  localStorage.setItem('lang', l);
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  render();
}

function toggleVerse() {
  $('verseFull').classList.toggle('open');
}

// =============================================
// Observers
// =============================================
let navObserver = null;

function initNavObserver() {
  if (navObserver) navObserver.disconnect();
  navObserver = new IntersectionObserver((entries) => {
    const intersecting = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (intersecting.length > 0) {
      const top = intersecting[0];
      const data = t[lang];
      const idx = data.navIds.indexOf(top.target.id);
      if (idx !== -1) {
        document.querySelectorAll('.nav-link').forEach((l, i) => {
          l.classList.toggle('active', i === idx);
          if (i === idx) l.setAttribute('aria-current', 'page');
          else l.removeAttribute('aria-current');
        });
      }
    }
  }, { threshold: 0.15, rootMargin: '-60px 0px -25% 0px' });

  document.querySelectorAll('section').forEach(s => navObserver.observe(s));
}

function initRevealObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// =============================================
// Event Delegation
// =============================================
function initEvents() {
  document.addEventListener('click', (e) => {
    const langBtn = e.target.closest('.lang-btn');
    if (langBtn) { switchLang(langBtn.dataset.lang); return; }

    const briefingBtn = e.target.closest('#briefingBtn');
    if (briefingBtn) { toggleBriefing(); return; }

    const link = e.target.closest('a[href^="#"]');
    if (link) {
      e.preventDefault();
      const id = link.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        if (link.classList.contains('nav-link')) {
          document.querySelectorAll('.nav-link').forEach(l => {
            l.classList.remove('active');
            l.removeAttribute('aria-current');
          });
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
        }
      }
      return;
    }

    const projectBtn = e.target.closest('[data-project]');
    if (projectBtn) { toggleProject(projectBtn.dataset.project); return; }

    const filterBtn = e.target.closest('[data-filter]');
    if (filterBtn) { setFilter(filterBtn.dataset.filter); return; }

    if (e.target.closest('[data-open-modal]')) { openSetupModal(); return; }

    if (e.target.closest('[data-close-modal]')) { closeSetupModal(); return; }

    if (e.target.classList.contains('setup-modal-overlay')) { closeSetupModal(); return; }

    const verseBtn = e.target.closest('[data-verse]');
    if (verseBtn) { toggleVerse(); return; }
  });
}

// =============================================
// Init
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  initEvents();
  switchLang(lang);
  initNavObserver();
  initRevealObserver();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
});
