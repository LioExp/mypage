// =============================================
// I18n Data
// =============================================
const t = {
  pt: {
    nav: ['inicio', 'sobre', 'projectos', 'skills', 'setup', 'contacto'],
    navIds: ['inicio', 'sobre', 'projectos', 'skills', 'setup', 'contacto'],
    hero: { tagline: '~ build. break. document.', age: '18 anos.', roles: 'Builder · Programmer · Experimentador', motto: 'Eu sou o experimento.', cta: 'ver projectos' },
    about: { heading: ['Builder que ', 'constrói', ', quebra e documenta tudo em público.'], cbpText: 'Trabalho com um framework simples — Create, Break, Protect. Construo uma coisa, tento destruí-la, e documento tudo. O processo é público porque aprender em privado desperdiça metade do valor.', nowText: 'Estou em Luanda. Hardware modesto, internet instável, escola de tarde. É o ambiente onde tudo o que construo tem de funcionar — por enquanto.', whyText: 'Eu sou o experimento. Programação, segurança, neurociência, psicologia e arte não são áreas separadas — são lentes diferentes sobre o mesmo problema.', openTags: ['collab', 'open source'] },
    projects: {
      label: 'Projectos', active: 'ACTIVOS', waiting: 'EM ESPERA', showMore: 'ver mais', showLess: 'ver menos',
      faber: { badge: 'a lançar', sub: 'Fase 0 — lançamento iminente', desc: 'Agente de código em Rust para terminal. 100% offline-first e otimizado para correr LLMs locais com baixo consumo de hardware.', why: 'Porquê existe', whyText: 'As ferramentas de IA para código assumem que tens fibra, uma conta paga e hardware recente. FABER não assume nada disso. Foi construído para funcionar no mesmo ambiente onde tudo o resto tem de funcionar — hardware modesto, internet instável, sem subscrição mensal.', how: 'Como funciona', howText: 'Corre um modelo quantizado localmente via llama.cpp. Sem cloud, sem tokens, sem rate limits. O agente lê o contexto do projecto, sugere código, executa comandos e aprende com o feedback directo no terminal. Tudo em Rust para manter o overhead mínimo.', status: 'Estado actual', statusItems: ['Core em Rust funcional', 'Integração llama.cpp estável', 'CLI básica operacional', 'Testes em hardware de 4GB RAM', 'Documentação e landing em progresso'], who: 'Para quem', whoText: 'Developers em mercados emergentes. Quem usa Raspberry Pi como máquina principal. Quem não quer depender de subscrições para ter um agente de código funcional.' },
      myfi: { badge: 'activo', desc: 'Plataforma modular de observabilidade e segurança de rede. Scan de dispositivos, tráfego em tempo real e arquitetura de Chunks.', problem: 'O problema', problemText: 'A maioria das pessoas partilha a rede sem saber o que está ligado, para onde os dados vão, ou quem está a consumir mais largura de banda. As ferramentas que existem ou são complexas demais (Wireshark) ou não dão controlo real sobre a rede.<br><br>MyFi nasceu para responder a isto: visibilidade total, controlo granular e uma arquitetura que permite instalar apenas o que precisas.', features: 'Funcionalidades Core', featureItems: ['Scan contínuo de dispositivos na rede local (ARP)', 'Monitorização de tráfego em tempo real (Live Stream) e em background', 'Definição de limites de consumo por dispositivo, com alertas Telegram', 'CLI interativa com tema personalizado, autocompletar e modo shell', 'Dashboard web com gráfico de tráfego, topologia de rede e KPIs'], extraLabel: 'Funcionalidades Extra (Chunks)', extraItems: ['GeoLocate — geolocaliza o tráfego externo (país, cidade, ISP)', 'PhoneIntel — analisa números de telefone (operadora, validade, deep scan)', 'UsernameIntel — verifica onde um username está registado', 'Arquitetura de Chunks — instala e desinstala módulos sem mexer no Core'], v3: 'v3.0 — o que mudou', v3Text: 'A v2.0 já era uma CLI completa, mas a v3.0 reestruturou o projecto com uma arquitectura modular de verdade:<br>• Motor de Chunks (ChunkEngine) que orquestra workflows<br>• Protocolo "Drop-in Module" — cada Chunk vive na sua própria pasta com register_chunk()<br>• Comando myfi chunk install &lt;url&gt; para instalar módulos da comunidade<br>• Tema centralizado com rich e cores consistentes em toda a interface<br>• Modo shell interativo com histórico e autocompletar dinâmico', roadmap: 'Roadmap próximo', roadmapText: '• Integração com SIM Alert AO para alertas via SMS<br>• Suporte para Windows e Android (PWA)<br>• Modo Guardião — controlo de acesso inteligente (NAC local)<br>• Expansão do ecossistema de Chunks da comunidade' },
      kianda: { badge: 'em planeamento', desc: 'Agente de vendas e automação com IA para pequenos negócios. Atendimento inteligente 24/7 direto no WhatsApp via Evolution API.', context: 'O contexto', contextText: 'Em Luanda, grande parte do comércio informal passa pelo WhatsApp. Pequenos negócios respondem a centenas de mensagens por dia, manualmente, muitas vezes perdendo vendas por demora ou ausência. KiandaBot entra nessa lacuna.', how: 'Como funciona', howText: 'Conecta ao WhatsApp Business via Evolution API. O comerciante configura catálogo, preços e respostas padrão. O bot gere consultas, confirma stock, calcula preços e encaminha apenas o que precisa de intervenção humana.', diff: 'Diferencial', diffItems: ['Sem broadcast ou spam — só resposta a quem pergunta', 'Contexto de conversa preservado por cliente', 'Configuração simples sem código para o comerciante', 'Funciona com conexão instável', 'Transferência suave para humano quando necessário'], vision: 'Visão', visionText: 'Um piloto com 3–5 negócios reais em Luanda para validar o modelo. Se funcionar, escala para outros mercados lusófonos com a mesma dinâmica informal.' },
      waitingProjects: [{ name: "SIM Alert AO", desc: "Alertas silenciosos por tempo de dados na rede", href: null }, { name: "FileFlow", desc: "Transferência e automação de ficheiros locais", href: "https://github.com/LioExp/File-flow-assistant" }, { name: "Rocket", desc: "Construção API inteligente com IA. Alta 2030.", href: null }]
    },
    skills: {
      heading: 'Onde estou no mapa.', subheading: 'o fruto da minha jornada.',
      categories: [
        { id: 'dev', label: 'DEV', domino: ['Python', 'Bash', 'Git'], aprender: ['Rust', 'FastAPI'], roadmap: ['WASM'] },
        { id: 'linux', label: 'LINUX & INFRA', domino: ['Arch Linux', 'Debian'], aprender: [], roadmap: ['containers'] },
        { id: 'networking', label: 'NETWORKING', domino: [], aprender: [], roadmap: [] },
        { id: 'security', label: 'SEGURANÇA', domino: [], aprender: ['OWASP Top 10', 'Burp Suite'], roadmap: [] }
      ],
      roadmapLabel: 'ROADMAP', roadmapLinkLabel: 'ver o roadmap completo',
    },
    setup: {
      heading: 'Onde construo.',
      sub: 'onde tudo acontece :3 .',
      hint: 'clique para ver os componentes', modalHeading: 'Componentes',
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
      heading: 'Fala comigo.', subtext: 'Prefiro e-mail. Respondo a tudo que vale uma resposta.',
      briefingToggleOpen: 'fechar briefing', briefingToggleClosed: 'como estruturar o teu e-mail',
      mailtoSubject: 'Briefing — Colaboração',
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
        { label: 'E-mail', sub: 'canal principal para colaborações', handle: 'lioexp0@gmail.com', href: 'mailto:lioexp0@gmail.com', testid: 'link-contact-email' }
      ],
      discord: { name: 'Discord', desc: 'comunidade, debugging, builds ao vivo', handle: 'entra no server', href: 'https://discord.gg/wkmuHa3P8q' },
      footer: { tagline: 'build. break. document.', colossians: 'Col 3:23', verse: 'Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens' }
    }
  },
  en: {
    nav: ['home', 'about', 'projects', 'skills', 'setup', 'contact'],
    navIds: ['inicio', 'sobre', 'projectos', 'skills', 'setup', 'contacto'],
    hero: { tagline: '~ build. break. document.', age: '18 years old.', roles: 'Builder · Programmer · Experimenter', motto: 'I am the experiment.', cta: 'view projects' },
    about: { label: 'ABOUT', heading: ['Builder who ', 'builds', ', breaks and documents everything in public.'], cbpText: 'I work with a simple framework — Create, Break, Protect. I build something, try to break it, and document everything. The process is public because learning in private wastes half the value.', nowText: "I'm in Luanda. Modest hardware, unstable internet, afternoon school. This is the environment where everything I build has to work — for now.", whyText: 'I am the experiment. Programming, security, neuroscience, psychology and art aren\'t separate fields — they\'re different lenses on the same problem.', openTags: ['collab', 'open source'] },
    projects: {
      label: 'PROJECTS', active: 'ACTIVE', waiting: 'ON HOLD', showMore: 'show more', showLess: 'show less',
      faber: { badge: 'launching', sub: 'Phase 0 — imminent launch', desc: 'Rust code agent for the terminal. 100% offline-first and optimized to run local LLMs with minimal hardware overhead.', why: 'Why it exists', whyText: 'AI coding tools assume you have fibre, a paid account and recent hardware. FABER assumes none of that. It was built to work in the same environment where everything else has to work — modest hardware, unstable internet, no monthly subscription.', how: 'How it works', howText: 'Runs a quantized model locally via llama.cpp. No cloud, no tokens, no rate limits. The agent reads the project context, suggests code, executes commands and learns from direct feedback in the terminal. All in Rust to keep overhead minimal.', status: 'Current status', statusItems: ['Rust core functional', 'Stable llama.cpp integration', 'Basic CLI operational', 'Tested on 4GB RAM hardware', 'Documentation and landing in progress'], who: 'Who it\'s for', whoText: 'Developers in emerging markets. Those using Raspberry Pi as their main machine. Those who don\'t want to depend on subscriptions to have a functional code agent.' },
      myfi: { badge: 'active', desc: 'Modular network observability and security platform. Device scanning, live traffic monitoring and Chunk architecture.', problem: 'The problem', problemText: 'Most people share networks without knowing what\'s connected, where the data goes, or who\'s consuming the most bandwidth. Existing tools are either too complex (Wireshark) or don\'t give real control over the network.<br><br>MyFi was built to answer this: total visibility, granular control and an architecture that lets you install only what you need.', features: 'Core Features', featureItems: ['Continuous ARP scan of local network devices', 'Real-time traffic monitoring (Live Stream) and background capture', 'Per-device bandwidth limits with Telegram alerts', 'Interactive CLI with custom theme, autocomplete and shell mode', 'Web dashboard with traffic graph, network topology and KPIs'], extraLabel: 'Extra Features (Chunks)', extraItems: ['GeoLocate — geolocate external traffic (country, city, ISP)', 'PhoneIntel — analyze phone numbers (carrier, validity, deep scan)', 'UsernameIntel — check where a username is registered', 'Chunk Architecture — install and uninstall modules without touching Core'], v3: 'v3.0 — what changed', v3Text: 'v2.0 was already a complete CLI, but v3.0 restructured the project with a true modular architecture:<br>• ChunkEngine that orchestrates workflows<br>• "Drop-in Module" protocol — each Chunk lives in its own folder with register_chunk()<br>• myfi chunk install &lt;url&gt; command to install community modules<br>• Centralized theme with rich and consistent colors across the entire UI<br>• Interactive shell mode with history and dynamic autocomplete', roadmap: 'Next roadmap', roadmapText: '• Integration with SIM Alert AO for SMS alerts<br>• Windows and Android (PWA) support<br>• Guardian Mode — smart access control (local NAC)<br>• Community Chunk ecosystem expansion' },
      kianda: { badge: 'planning', desc: 'AI sales and automation agent for small businesses. Smart 24/7 automated support directly on WhatsApp via Evolution API.', context: 'The context', contextText: 'In Luanda, much of informal commerce runs through WhatsApp. Small businesses respond to hundreds of messages per day, manually, often losing sales due to delays or absence. KiandaBot fills that gap.', how: 'How it works', howText: 'Connects to WhatsApp Business via Evolution API. The merchant configures catalogue, prices and default responses. The bot handles queries, confirms stock, calculates prices and routes only what needs human intervention.', diff: 'What makes it different', diffItems: ['No broadcast or spam — only replies to those who ask', 'Conversation context preserved per customer', 'Simple no-code setup for the merchant', 'Works with unstable connections', 'Smooth handoff to human when needed'], vision: 'Vision', visionText: 'A pilot with 3–5 real businesses in Luanda to validate the model. If it works, scale to other Lusophone markets with the same informal dynamic.' },
      waitingProjects: [{ name: "SIM Alert AO", desc: "Silent alerts for mobile data time on the network", href: null }, { name: "FileFlow", desc: "Local file transfer and automation", href: "https://github.com/LioExp/File-flow-assistant" }, { name: "Rocket", desc: "AI-powered smart API builder. ETA 2030.", href: null }]
    },
    skills: {
      heading: 'Where I am on the map.', subheading: 'the fruit of my journey.',
      categories: [
        { id: 'dev', label: 'DEV', domino: ['Python', 'Bash', 'Git'], aprender: ['Rust', 'FastAPI'], roadmap: ['WASM'] },
        { id: 'linux', label: 'LINUX & INFRA', domino: ['Arch Linux', 'Debian'], aprender: [], roadmap: ['containers'] },
        { id: 'networking', label: 'NETWORKING', domino: [], aprender: [], roadmap: [] },
        { id: 'security', label: 'SECURITY', domino: [], aprender: ['OWASP Top 10', 'Burp Suite'], roadmap: [] }
      ],
      roadmapLabel: 'ROADMAP', roadmapLinkLabel: 'view the full roadmap',
    },
    setup: {
      heading: 'Where I build.',
      sub: 'where everything happens :3 .',
      hint: 'click to see the components', modalHeading: 'Components',
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
      heading: 'Talk to me.', subtext: 'I prefer email. I reply to everything worth a reply.',
      briefingToggleOpen: 'close briefing', briefingToggleClosed: 'how to structure your email',
      mailtoSubject: 'Briefing — Collaboration',
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
        { label: 'Email', sub: 'main channel for collaborations', handle: 'lioexp0@gmail.com', href: 'mailto:lioexp0@gmail.com', testid: 'link-contact-email' }
      ],
      discord: { name: 'Discord', desc: 'community, debugging, live builds', handle: 'join the server', href: 'https://discord.gg/wkmuHa3P8q' },
      footer: { tagline: 'build. break. document.', colossians: 'Col 3:23', verse: 'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters' }
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
  discord: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>',
};

// =============================================
// Configuration & Constants
// =============================================
const YT_API_KEY = ''; // ← https://console.cloud.google.com (YouTube Data API v3, gratis)
const YT_CHANNEL_ID = 'UCZIZwWoayEW1CXxqE0TwyLQ';
const YT_FEED_LIMIT = 12;
const YT_SCROLL_SPEED = 0.6;

// =============================================
// State
// =============================================
let lang = localStorage.getItem('lang') || 'pt';
document.documentElement.lang = lang;
let openProjects = {};
let briefingOpen = false;
let ytSubscriberCount = null;
let ytAnimId = null;
let ytPaused = false;
let lastFocused = null;

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
    tags: ['Python', 'CLI', 'Networking', 'Linux', 'Cybersecurity'],
    github: 'https://github.com/LioExp/MyFi', landing: 'https://lioexp.github.io/MyFi/'
  },
  {
    id: 'KiandaBot', key: 'kianda', color: '#7c3aed',
    img: 'assets/kianda-preview.png', imgBg: '#0a0a0a',
    tags: ['Python', 'Evolution API', 'AI', 'WhatsApp'],
    github: 'https://github.com/LioExp/Kianda-bot', landing: 'https://kiandabot.vercel.app/',
  }
];

function $(id) { return document.getElementById(id); }

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[c]);
}

const fetchCache = new Map();

async function fetchJson(url, ttlMs) {
  const hit = fetchCache.get(url);
  if (hit && Date.now() - hit.t < ttlMs) return hit.v;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 8000);
  try {
    const res = await fetch(url, { signal: ctrl.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const v = await res.json();
    fetchCache.set(url, { t: Date.now(), v });
    return v;
  } finally {
    clearTimeout(timer);
  }
}

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
      { label: pr.extraLabel, list: pr.extraItems },
      { label: pr.v3, text: pr.v3Text },
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
// Render Dispatchers
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
}

function renderProjects() { renderProjectsSection(t[lang]); }
function renderSkills() { renderSkillsSection(t[lang]); }
function renderContact() { renderContactSection(t[lang]); }

// =============================================
// Section Renderers
// =============================================
function updateNav(data) {
  document.querySelectorAll('.nav-link').forEach((l, i) => {
    l.setAttribute('aria-label', data.nav[i]);
    l.setAttribute('title', data.nav[i]);
    const tooltip = l.querySelector('.nav-tooltip');
    if (tooltip) tooltip.textContent = data.nav[i];
    l.href = '#' + data.navIds[i];
  });
}

function renderHero(data) {
  $('tagline').dataset.type = data.hero.tagline;
  $('heroRoles').dataset.rotate = data.hero.roles;
  $('heroAge').textContent = data.hero.age;
  $('heroMotto').textContent = data.hero.motto;
  $('ctaText').textContent = data.hero.cta;
}

function renderAbout(data) {
  $('aboutTitle').innerHTML = `${data.about.heading[0]}<span class="text-purple">${data.about.heading[1]}</span>${data.about.heading[2]}`;
  $('cbpText').textContent = data.about.cbpText;
  $('nowText').textContent = data.about.nowText;
  $('whyText').textContent = data.about.whyText;
  $('openTags').innerHTML = data.about.openTags.map(t => `<span class="tag">${t}</span>`).join('');
}

// ---- Projects ----
function renderProjectsSection(data) {
  $('projectsHeading').textContent = data.projects.label;
  $('activeLabel').textContent = data.projects.active;
  $('waitingLabel').textContent = data.projects.waiting;

  $('projectsGrid').innerHTML = PROJECTS.map(p => renderProjectCard(p, data)).join('');
  $('waitingGrid').innerHTML = renderWaitingList(data);
}

const TECH_ICONS = {
  'Rust': '<svg class="tech-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M23.8346 11.7033l-1.0073-.6236a13.7268 13.7268 0 00-.0283-.2936l.8656-.8069a.3483.3483 0 00-.1154-.578l-1.1066-.414a8.4958 8.4958 0 00-.087-.2856l.6904-.9587a.3462.3462 0 00-.2257-.5446l-1.1663-.1894a9.3574 9.3574 0 00-.1407-.2622l.49-1.0761a.3437.3437 0 00-.0274-.3361.3486.3486 0 00-.3006-.154l-1.1845.0416a6.7444 6.7444 0 00-.1873-.2268l.2723-1.153a.3472.3472 0 00-.417-.4172l-1.1532.2724a14.0183 14.0183 0 00-.2278-.1873l.0415-1.1845a.3442.3442 0 00-.49-.328l-1.076.491c-.0872-.0476-.1742-.0952-.2623-.1407l-.1903-1.1673A.3483.3483 0 0016.256.955l-.9597.6905a8.4867 8.4867 0 00-.2855-.086l-.414-1.1066a.3483.3483 0 00-.5781-.1154l-.8069.8666a9.2936 9.2936 0 00-.2936-.0284L12.2946.1683a.3462.3462 0 00-.5892 0l-.6236 1.0073a13.7383 13.7383 0 00-.2936.0284L9.9803.3374a.3462.3462 0 00-.578.1154l-.4141 1.1065c-.0962.0274-.1903.0567-.2855.086L7.744.955a.3483.3483 0 00-.5447.2258L7.009 2.348a9.3574 9.3574 0 00-.2622.1407l-1.0762-.491a.3462.3462 0 00-.49.328l.0416 1.1845a7.9826 7.9826 0 00-.2278.1873L3.8413 3.425a.3472.3472 0 00-.4171.4171l.2713 1.1531c-.0628.075-.1255.1509-.1863.2268l-1.1845-.0415a.3462.3462 0 00-.328.49l.491 1.0761a9.167 9.167 0 00-.1407.2622l-1.1662.1894a.3483.3483 0 00-.2258.5446l.6904.9587a13.303 13.303 0 00-.087.2855l-1.1065.414a.3483.3483 0 00-.1155.5781l.8656.807a9.2936 9.2936 0 00-.0283.2935l-1.0073.6236a.3442.3442 0 000 .5892l1.0073.6236c.008.0982.0182.1964.0283.2936l-.8656.8079a.3462.3462 0 00.1155.578l1.1065.4141c.0273.0962.0567.1914.087.2855l-.6904.9587a.3452.3452 0 00.2268.5447l1.1662.1893c.0456.088.0922.1751.1408.2622l-.491 1.0762a.3462.3462 0 00.328.49l1.1834-.0415c.0618.0769.1235.1528.1873.2277l-.2713 1.1541a.3462.3462 0 00.4171.4161l1.153-.2713c.075.0638.151.1255.2279.1863l-.0415 1.1845a.3442.3442 0 00.49.327l1.0761-.49c.087.0486.1741.0951.2622.1407l.1903 1.1662a.3483.3483 0 00.5447.2268l.9587-.6904a9.299 9.299 0 00.2855.087l.414 1.1066a.3452.3452 0 00.5781.1154l.8079-.8656c.0972.0111.1954.0203.2936.0294l.6236 1.0073a.3472.3472 0 00.5892 0l.6236-1.0073c.0982-.0091.1964-.0183.2936-.0294l.8069.8656a.3483.3483 0 00.578-.1154l.4141-1.1066a8.4626 8.4626 0 00.2855-.087l.9587.6904a.3452.3452 0 00.5447-.2268l.1903-1.1662c.088-.0456.1751-.0931.2622-.1407l1.0762.49a.3472.3472 0 00.49-.327l-.0415-1.1845a6.7267 6.7267 0 00.2267-.1863l1.1531.2713a.3472.3472 0 00.4171-.416l-.2713-1.1542c.0628-.0749.1255-.1508.1863-.2278l1.1845.0415a.3442.3442 0 00.328-.49l-.49-1.076c.0475-.0872.0951-.1742.1407-.2623l1.1662-.1893a.3483.3483 0 00.2258-.5447l-.6904-.9587.087-.2855 1.1066-.414a.3462.3462 0 00.1154-.5781l-.8656-.8079c.0101-.0972.0202-.1954.0283-.2936l1.0073-.6236a.3442.3442 0 000-.5892zm-6.7413 8.3551a.7138.7138 0 01.2986-1.396.714.714 0 11-.2997 1.396zm-.3422-2.3142a.649.649 0 00-.7715.5l-.3573 1.6685c-1.1035.501-2.3285.7795-3.6193.7795a8.7368 8.7368 0 01-3.6951-.814l-.3574-1.6684a.648.648 0 00-.7714-.499l-1.473.3158a8.7216 8.7216 0 01-.7613-.898h7.1676c.081 0 .1356-.0141.1356-.088v-2.536c0-.074-.0536-.0881-.1356-.0881h-2.0966v-1.6077h2.2677c.2065 0 1.1065.0587 1.394 1.2088.0901.3533.2875 1.5044.4232 1.8729.1346.413.6833 1.2381 1.2685 1.2381h3.5716a.7492.7492 0 00.1296-.0131 8.7874 8.7874 0 01-.8119.9526zM6.8369 20.024a.714.714 0 11-.2997-1.396.714.714 0 01.2997 1.396zM4.1177 8.9972a.7137.7137 0 11-1.304.5791.7137.7137 0 011.304-.579zm-.8352 1.9813l1.5347-.6824a.65.65 0 00.33-.8585l-.3158-.7147h1.2432v5.6025H3.5669a8.7753 8.7753 0 01-.2834-3.348zm6.7343-.5437V8.7836h2.9601c.153 0 1.0792.1772 1.0792.8697 0 .575-.7107.7815-1.2948.7815zm10.7574 1.4862c0 .2187-.008.4363-.0243.651h-.9c-.09 0-.1265.0586-.1265.1477v.413c0 .973-.5487 1.1846-1.0296 1.2382-.4576.0517-.9648-.1913-1.0275-.4717-.2704-1.5186-.7198-1.8436-1.4305-2.4034.8817-.5599 1.799-1.386 1.799-2.4915 0-1.1936-.819-1.9458-1.3769-2.3153-.7825-.5163-1.6491-.6195-1.883-.6195H5.4682a8.7651 8.7651 0 014.907-2.7699l1.0974 1.151a.648.648 0 00.9182.0213l1.227-1.1743a8.7753 8.7753 0 016.0044 4.2762l-.8403 1.8982a.652.652 0 00.33.8585l1.6178.7188c.0283.2875.0425.577.0425.8717zm-9.3006-9.5993a.7128.7128 0 11.984 1.0316.7137.7137 0 01-.984-1.0316zm8.3389 6.71a.7107.7107 0 01.9395-.3625.7137.7137 0 11-.9405.3635z"/></svg>',
  'Python': '<svg class="tech-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg>',
  'CLI': '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>',
  'Linux': '<svg class="tech-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z"/></svg>',
  'Networking': '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><circle cx="12" cy="20" r="1"></circle></svg>',
  'Cybersecurity': '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
  'llama.cpp': '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
  'LLM local': '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>',
  'AI': '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"></path></svg>',
  'WhatsApp': '<svg class="tech-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.12 8.12 0 01-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.71 4.3 3.79.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.17-.48-.3z"/></svg>',
  'Evolution API': '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4"></path><path d="M12 3v7"></path><path d="m9 7 3 3 3-3"></path><path d="M12 21v-3"></path></svg>',
};

const SKILL_ICONS = {
  'Python': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#5A9FD4"/><stop offset="1" stop-color="#306998"/></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#FFD43B"/><stop offset="1" stop-color="#FFE873"/></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"/><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"/><radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#B8B8B8" stop-opacity=".498"/><stop offset="1" stop-color="#7F7F7F" stop-opacity="0"/></radialGradient><path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"/></svg>',
  'Rust': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#DEA584" d="M62.96.242c-.232.135-1.203 1.528-2.16 3.097-2.4 3.94-2.426 3.942-5.65.55-2.098-2.208-2.605-2.612-3.28-2.607-.44.002-.995.152-1.235.332-.24.18-.916 1.612-1.504 3.183-1.346 3.6-1.41 3.715-2.156 3.86-.46.086-1.343-.407-3.463-1.929-1.565-1.125-3.1-2.045-3.411-2.045-1.291 0-1.655.706-2.27 4.4-.78 4.697-.754 4.681-4.988 2.758-1.71-.776-3.33-1.41-3.603-1.41-.274 0-.792.293-1.15.652-.652.652-.653.655-.475 4.246l.178 3.595-.68.364c-.602.322-1.017.283-3.684-.348-3.48-.822-4.216-.8-4.92.15l-.516.693.692 2.964c.38 1.63.745 3.2.814 3.487.067.287-.05.746-.26 1.02-.348.448-.717.49-3.94.44-5.452-.086-5.761.382-3.51 5.3.718 1.56 1.305 2.98 1.305 3.15 0 .898-.717 1.224-3.794 1.727-1.722.28-3.218.51-3.326.51-.107 0-.43.235-.717.522-.937.936-.671 1.816 1.453 4.814 2.646 3.735 2.642 3.75-1.73 5.421-4.971 1.902-5.072 2.37-1.287 5.96 3.525 3.344 3.53 3.295-.461 5.804C.208 62.8.162 62.846.085 63.876c-.093 1.253-.071 1.275 3.538 3.48 3.57 2.18 3.57 2.246.067 5.56C-.078 76.48.038 77 5.013 78.877c4.347 1.64 4.353 1.66 1.702 5.394-1.502 2.117-1.981 3-1.981 3.653 0 1.223.637 1.535 4.44 2.174 3.206.54 3.92.857 3.92 1.741 0 .182-.588 1.612-1.307 3.177-2.236 4.87-1.981 5.275 3.31 5.275 4.93 0 4.799-.15 3.737 4.294-.8 3.35-.813 3.992-.088 4.715.554.556 1.6.494 4.87-.289 2.499-.596 2.937-.637 3.516-.328l.66.354-.177 3.594c-.178 3.593-.177 3.595.475 4.248.358.36.884.652 1.165.652.282 0 1.903-.63 3.604-1.404 4.22-1.916 4.194-1.932 4.973 2.75.617 3.711.977 4.4 2.294 4.4.327 0 1.83-.88 3.34-1.958 2.654-1.893 3.342-2.19 4.049-1.74.182.115.89 1.67 1.572 3.455 1.003 2.625 1.37 3.31 1.929 3.576 1.062.51 1.72.1 4.218-2.62 3.016-3.286 3.14-3.27 5.602.72 2.72 4.406 3.424 4.396 6.212-.089 2.402-3.864 2.374-3.862 5.621-.47 2.157 2.25 2.616 2.61 3.343 2.61.464 0 1.019-.175 1.23-.388.214-.213.92-1.786 1.568-3.496.649-1.71 1.321-3.2 1.495-3.31.687-.436 1.398-.13 4.048 1.752 1.56 1.108 3.028 1.96 3.377 1.96 1.296 0 1.764-.92 2.302-4.535.46-3.082.554-3.378 1.16-3.685.596-.302.954-.2 3.75 1.07 1.701.77 3.323 1.402 3.604 1.402.282 0 .816-.302 1.184-.672l.672-.67-.184-3.448c-.177-3.29-.16-3.468.364-3.943.54-.488.596-.486 3.615.204 3.656.835 4.338.857 5.025.17.671-.67.664-.818-.254-4.69-1.03-4.346-1.168-4.19 3.78-4.19 3.374 0 3.75-.049 4.18-.523.718-.793.547-1.702-.896-4.779-.729-1.55-1.32-2.96-1.315-3.135.024-.914.743-1.227 4.065-1.767 2.033-.329 3.553-.71 3.829-.96.923-.833.584-1.918-1.523-4.873-2.642-3.703-2.63-3.738 1.599-5.297 5.064-1.866 5.209-2.488 1.419-6.09-3.51-3.335-3.512-3.317.333-5.677 4.648-2.853 4.655-3.496.082-6.335-3.933-2.44-3.93-2.406-.405-5.753 3.78-3.593 3.678-4.063-1.295-5.965-4.388-1.679-4.402-1.72-1.735-5.38 1.588-2.18 1.982-2.903 1.982-3.65 0-1.306-.586-1.598-4.436-2.22-3.216-.52-3.924-.835-3.924-1.75 0-.174.588-1.574 1.307-3.113 1.406-3.013 1.604-4.22.808-4.94-.428-.387-1-.443-4.067-.392-3.208.054-3.618.008-4.063-.439-.486-.488-.48-.557.278-3.725.931-3.88.935-3.975.17-4.694-.777-.73-1.262-.718-4.826.121-2.597.612-3.027.653-3.617.337l-.67-.36.185-3.582.186-3.58-.67-.67c-.369-.37-.891-.67-1.163-.67-.27 0-1.884.64-3.583 1.421-2.838 1.306-3.143 1.393-3.757 1.072-.612-.32-.714-.637-1.237-3.829-.603-3.693-.977-4.412-2.288-4.412-.311 0-1.853.925-3.426 2.055-2.584 1.856-2.93 2.032-3.574 1.807-.533-.186-.843-.59-1.221-1.599-.28-.742-.817-2.172-1.194-3.177-.762-2.028-1.187-2.482-2.328-2.482-.637 0-1.213.458-3.28 2.604-3.25 3.375-3.261 3.374-5.65-.545C66.073 1.78 65.075.382 64.81.24c-.597-.32-1.3-.32-1.85.002m2.96 11.798c2.83 2.014 1.326 6.75-2.144 6.75-3.368 0-5.064-4.057-2.66-6.36 1.358-1.3 3.304-1.459 4.805-.39m-3.558 12.507c1.855.705 2.616.282 6.852-3.8l3.182-3.07 1.347.18c4.225.56 12.627 4.25 17.455 7.666 4.436 3.14 10.332 9.534 12.845 13.93l.537.942-2.38 5.364c-1.31 2.95-2.382 5.673-2.382 6.053 0 .878.576 2.267 1.13 2.726.234.195 2.457 1.265 4.939 2.378l4.51 2.025.178 1.148c.23 1.495.26 5.167.052 6.21l-.163.816h-2.575c-2.987 0-2.756-.267-2.918 3.396-.118 2.656-.76 4.124-2.22 5.075-2.377 1.551-6.304 1.27-7.97-.57-.255-.284-.752-1.705-1.105-3.16-1.03-4.254-2.413-6.64-5.193-8.965-.878-.733-1.595-1.418-1.595-1.522 0-.102.965-.915 2.145-1.803 4.298-3.24 6.77-7.012 7.04-10.747.519-7.126-5.158-13.767-13.602-15.92-2.002-.51-2.857-.526-27.624-.526-14.057 0-25.56-.092-25.56-.204 0-.263 3.125-3.295 4.965-4.816 5.054-4.178 11.618-7.465 18.417-9.22l2.35-.61 3.34 3.387c1.839 1.863 3.64 3.5 4.003 3.637M20.3 46.34c1.539 1.008 2.17 3.54 1.26 5.062-1.405 2.356-4.966 2.455-6.373.178-2.046-3.309 1.895-7.349 5.113-5.24m90.672.13c4.026 2.454.906 8.493-3.404 6.586-2.877-1.273-2.97-5.206-.155-6.64 1.174-.6 2.523-.579 3.56.053M32.163 61.5v15.02h-13.28l-.526-2.285c-1.036-4.5-1.472-9.156-1.211-12.969l.182-2.679 4.565-2.047c2.864-1.283 4.706-2.262 4.943-2.625 1.038-1.584.94-2.715-.518-5.933l-.68-1.502h6.523V61.5M70.39 47.132c2.843.74 4.345 2.245 4.349 4.355.002 1.55-.765 2.52-2.67 3.38-1.348.61-1.562.625-10.063.708l-8.686.084v-8.92h7.782c6.078 0 8.112.086 9.288.393m-2.934 21.554c1.41.392 3.076 1.616 3.93 2.888.898 1.337 1.423 3.076 2.667 8.836 1.05 4.87 1.727 6.46 3.62 8.532 2.345 2.566 1.8 2.466 13.514 2.466 5.61 0 10.198.09 10.198.2 0 .197-3.863 4.764-4.03 4.764-.048 0-2.066-.422-4.484-.939-6.829-1.458-7.075-1.287-8.642 6.032l-1.008 4.702-.91.448c-1.518.75-6.453 2.292-9.01 2.82-4.228.87-8.828 1.162-12.871.821-6.893-.585-16.02-3.259-16.377-4.8-.075-.327-.535-2.443-1.018-4.704-.485-2.26-1.074-4.404-1.31-4.764-1.13-1.724-2.318-1.83-7.547-.674-1.98.44-3.708.796-3.84.796-.248 0-3.923-4.249-3.923-4.535 0-.09 8.728-.194 19.396-.23l19.395-.066.07-6.89c.05-4.865-.018-6.997-.23-7.25-.234-.284-1.485-.358-6.011-.358H53.32v-8.36l6.597.001c3.626.002 7.02.12 7.539.264M37.57 100.02c3.084 1.88 1.605 6.804-2.043 6.8-3.74 0-5.127-4.88-1.94-6.826 1.055-.643 2.908-.63 3.983.026m56.48.206c1.512 1.108 2.015 3.413 1.079 4.95-2.46 4.034-8.612.827-6.557-3.419 1.01-2.085 3.695-2.837 5.478-1.53"/></svg>',
  
  
  
  
  
  
  
  'Git': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"/></svg>',
  'Arch Linux': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#1791cf"><path fill-rule="evenodd" d="M61.113 4.886C55.82 17.788 52.629 26.23 46.738 38.749c3.613 3.805 8.047 8.242 15.246 13.25-7.742-3.168-13.02-6.347-16.969-9.648-7.539 15.644-19.351 37.933-43.324 80.77 18.844-10.817 33.45-17.485 47.059-20.032a33.989 33.989 0 0 1-.895-8.023l.024-.602c.296-12.004 6.578-21.238 14.015-20.61 7.438.626 13.223 10.872 12.922 22.876-.055 2.261-.312 4.433-.762 6.449 13.465 2.621 27.914 9.273 46.5 19.941-3.664-6.707-6.933-12.757-10.058-18.52-4.922-3.792-10.055-8.726-20.524-14.073 7.196 1.863 12.348 4.007 16.364 6.406C74.578 38.12 72.004 30.308 61.113 4.886Zm0 0"/><path d="M121.14 112.57v-3.243h-1.215v-.433h2.93v.433h-1.223v3.243h-.492M123.363 112.57v-3.676h.734l.875 2.601c.082.243.14.426.176.543.043-.132.11-.328.2-.586l.882-2.558h.66v3.676h-.472v-3.079l-1.075 3.079h-.441l-1.066-3.13v3.13h-.473"/></g></svg>',
  
  
  
  'containers': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill-rule="evenodd" clip-rule="evenodd" fill="#3A4D54" d="M73.8 50.8h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6V50.8h11.3V39.6h22.5V28.3h13.5v22.5z"/><path fill="#00AADA" d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7H18.6c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.7-10.5-1.8-13.9-.1z"/><path fill="#28B8EB" d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-68c-.3 9.5 3.2 16.7 9.5 21 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4l-.1-.1c8.5 4.4 20.8 4.3 35-1.1 15.8-6.1 30.6-17.7 40.9-30.9-.2.1-.4.1-.5.2z"/><path fill="#028BB8" d="M18.7 71.8c.4 3.3 1.4 6.4 2.9 9.3l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4h-.4c-1.3.1-2.7.1-4.1.1-1.6 0-3.2 0-4.9-.1 6 6.8 15.5 10.8 27.3 10.8 21.4 0 40-8.1 50.8-26H18.7v-.1z"/><path fill="#019BC6" d="M23.5 71.8c1.3 5.8 4.3 10.4 8.8 13.5 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.6 1.4 8.5 4.4 20.8 4.3 34.9-1.1 8.5-3.3 16.8-8.2 24.2-14.1H23.5z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M28.4 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3-12h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#23C2EE" d="M39.6 52.7h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M50.9 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#23C2EE" d="M50.9 41.5h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3.1 10.4H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M62.2 41.5H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#23C2EE" d="M62.2 30.2H72V40h-9.8v-9.8zm.8.8h.8v8.1H63V31zm1.5 0h.8v8.1h-.8V31zm1.4 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACD3" d="M73.5 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#D4EEF1" d="M48.8 78.3c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#3A4D54" d="M48.8 79.1c.2 0 .5 0 .7.1-.2.1-.4.4-.4.7 0 .4.4.8.8.8.3 0 .6-.2.7-.4.1.2.1.5.1.7 0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9 0-1 .8-1.9 1.9-1.9M1.1 72.8h125.4c-2.7-.7-8.6-1.6-7.7-5.2-5 5.7-16.9 4-20 1.2-3.4 4.9-23 3-24.3-.8-4.2 5-17.3 5-21.5 0-1.4 3.8-21 5.7-24.3.8-3 2.8-15 4.5-20-1.2 1.1 3.5-4.9 4.5-7.6 5.2"/><path fill="#BFDBE0" d="M56 97.8c-6.7-3.2-10.3-7.5-12.4-12.2-2.5.7-5.5 1.2-8.9 1.4-1.3.1-2.7.1-4.1.1-1.7 0-3.4 0-5.2-.1 6 6 13.6 10.7 27.5 10.8H56z"/><path fill="#D4EEF1" d="M46.1 89.9c-.9-1.3-1.8-2.8-2.5-4.3-2.5.7-5.5 1.2-8.9 1.4 2.3 1.2 5.7 2.4 11.4 2.9z"/></svg>',
  
  
  
  
  'OWASP Top 10': '<svg class="tech-icon" viewBox="0 0 24 24" fill="#fff"><path d="M15.897 20.503c-.384 0-1.782-2.489-1.97-3.198-.393-1.486-.308-2.114-.285-2.314.072-.613.667-.92.703-1.748.01-.256.14-1.535.243-2.534a1.723 1.723 0 01-.733-.343c.676.908-.32 1.995-1.767 3.443-1.536 1.536-4.945 2.961-4.945 2.961s1.425-3.41 2.961-4.945c1.13-1.129 2.04-1.983 2.816-1.983.22 0 .427.067.627.216a1.722 1.722 0 01-.343-.733c-.999.103-2.278.232-2.534.244-.829.036-1.135.63-1.747.702-.07.008-.194.024-.388.024-.36 0-.963-.054-1.926-.31-.772-.203-3.648-1.84-3.14-2.045.26-.105 1.087-.176 2.175-.176 1.047 0 2.337.066 3.596.23 1.57.205 3.01.463 3.992.656.016-.053.035-.104.058-.154l-1.004-.48s-.8-.92-.715-.984a.02.02 0 01.012-.003c.126 0 .767.733.829.816l.605.202-.284-.249s-.388-1.438-.287-1.472h.004c.106 0 .459 1.25.489 1.34.07.06.303.152.596.32l-.308-.79s.14-1.305.243-1.305h.003c.105.021-.02 1.089-.047 1.221l.51.783a1.31 1.31 0 01.463-.082c.184 0 .374.036.558.107-.236-.502-.218-1.025.095-1.338a.84.84 0 01.353-.209.462.462 0 01.457-.383c.127 0 .254.05.352.148a.497.497 0 01.147.335c.151-.311.329-.73.317-.867-.03-.307-.386-.852-.39-.857a.076.076 0 01.064-.119c.025 0 .05.012.064.035.016.023.381.582.414.927.018.198-.21.696-.333.95a2.227 2.227 0 01.873.874c.245-.12.715-.334.927-.334l.024.001c.345.033.904.399.927.414a.076.076 0 01-.084.128c-.005-.004-.55-.36-.857-.39h-.015c-.15 0-.552.171-.852.317.12.004.242.053.335.147a.482.482 0 01.012.681.459.459 0 01-.247.128.845.845 0 01-.21.354.924.924 0 01-.67.255c-.212 0-.441-.055-.667-.16.132.343.142.708.025 1.02l.783.51c.095-.019.666-.088.993-.088.13 0 .222.011.228.04.02.106-1.305.247-1.305.247l-.79-.308c.168.293.26.527.32.596.091.03 1.374.392 1.34.493-.004.012-.026.017-.063.017-.283 0-1.41-.304-1.41-.304l-.248-.284.202.605c.087.065.876.755.813.841-.004.005-.009.007-.016.007-.139 0-.967-.722-.967-.722l-.481-1.004a1.18 1.18 0 01-.154.058c.193.982.451 2.422.656 3.992.335 2.569.26 5.261.054 5.77-.016.041-.042.06-.076.06M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12m0-22.153C6.393 1.847 1.847 6.393 1.847 12S6.393 22.153 12 22.153 22.153 17.607 22.153 12 17.607 1.847 12 1.847Z"/></svg>',
  'Burp Suite': '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45"><rect width="45" height="45" fill="#5b4fff"/><polygon points="24.25 38.75 20.75 38.75 20.75 33.57 25.46 27.76 20.75 27.76 20.75 20.72 12.23 20.72 20.75 10.2 20.75 6.25 24.25 6.25 24.25 11.43 19.55 17.24 24.25 17.24 24.25 24.28 32.77 24.28 24.25 34.8 24.25 38.75" fill="#fff"/></svg>',
  
  'Bash': '<svg class="tech-icon" viewBox="0 0 24 24" fill="#4EAA25"><path d="M21.038,4.9l-7.577-4.498C13.009,0.134,12.505,0,12,0c-0.505,0-1.009,0.134-1.462,0.403L2.961,4.9 C2.057,5.437,1.5,6.429,1.5,7.503v8.995c0,1.073,0.557,2.066,1.462,2.603l7.577,4.497C10.991,23.866,11.495,24,12,24 c0.505,0,1.009-0.134,1.461-0.402l7.577-4.497c0.904-0.537,1.462-1.529,1.462-2.603V7.503C22.5,6.429,21.943,5.437,21.038,4.9z M15.17,18.946l0.013,0.646c0.001,0.078-0.05,0.167-0.111,0.198l-0.383,0.22c-0.061,0.031-0.111-0.007-0.112-0.085L14.57,19.29 c-0.328,0.136-0.66,0.169-0.872,0.084c-0.04-0.016-0.057-0.075-0.041-0.142l0.139-0.584c0.011-0.046,0.036-0.092,0.069-0.121 c0.012-0.011,0.024-0.02,0.036-0.026c0.022-0.011,0.043-0.014,0.062-0.006c0.229,0.077,0.521,0.041,0.802-0.101 c0.357-0.181,0.596-0.545,0.592-0.907c-0.003-0.328-0.181-0.465-0.613-0.468c-0.55,0.001-1.064-0.107-1.072-0.917 c-0.007-0.667,0.34-1.361,0.889-1.8l-0.007-0.652c-0.001-0.08,0.048-0.168,0.111-0.2l0.37-0.236 c0.061-0.031,0.111,0.007,0.112,0.087l0.006,0.653c0.273-0.109,0.511-0.138,0.726-0.088c0.047,0.012,0.067,0.076,0.048,0.151 l-0.144,0.578c-0.011,0.044-0.036,0.088-0.065,0.116c-0.012,0.012-0.025,0.021-0.038,0.028c-0.019,0.01-0.038,0.013-0.057,0.009 c-0.098-0.022-0.332-0.073-0.699,0.113c-0.385,0.195-0.52,0.53-0.517,0.778c0.003,0.297,0.155,0.387,0.681,0.396 c0.7,0.012,1.003,0.318,1.01,1.023C16.105,17.747,15.736,18.491,15.17,18.946z M19.143,17.859c0,0.06-0.008,0.116-0.058,0.145 l-1.916,1.164c-0.05,0.029-0.09,0.004-0.09-0.056v-0.494c0-0.06,0.037-0.093,0.087-0.122l1.887-1.129 c0.05-0.029,0.09-0.004,0.09,0.056V17.859z M20.459,6.797l-7.168,4.427c-0.894,0.523-1.553,1.109-1.553,2.187v8.833 c0,0.645,0.26,1.063,0.66,1.184c-0.131,0.023-0.264,0.039-0.398,0.039c-0.42,0-0.833-0.114-1.197-0.33L3.226,18.64 c-0.741-0.44-1.201-1.261-1.201-2.142V7.503c0-0.881,0.46-1.702,1.201-2.142l7.577-4.498c0.363-0.216,0.777-0.33,1.197-0.33 c0.419,0,0.833,0.114,1.197,0.33l7.577,4.498c0.624,0.371,1.046,1.013,1.164,1.732C21.686,6.557,21.12,6.411,20.459,6.797z"/></svg>',
  'FastAPI': '<svg class="tech-icon" viewBox="0 0 24 24" fill="#009688"><path d="M12 .0387C5.3729.0384.0003 5.3931 0 11.9988c-.001 6.6066 5.372 11.9628 12 11.9625 6.628.0003 12.001-5.3559 12-11.9625-.0003-6.6057-5.3729-11.9604-12-11.96m-.829 5.4153h7.55l-7.5805 5.3284h5.1828L5.279 18.5436q2.9466-6.5444 5.892-13.0896"/></svg>',
  'Debian': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#A80030" d="M73.776 67.531c-2.065.028.391 1.063 3.087 1.479a27.453 27.453 0 002.023-1.741c-1.679.41-3.387.419-5.11.262m11.086-2.763c1.229-1.697 2.127-3.556 2.442-5.478-.276 1.369-1.019 2.553-1.72 3.801-3.86 2.431-.363-1.443-.002-2.916-4.15 5.225-.57 3.133-.72 4.593m4.093-10.648c.249-3.72-.733-2.544-1.063-1.125.384.201.69 2.622 1.063 1.125M65.944 3.283c1.102.198 2.381.35 2.202.612 1.206-.263 1.48-.506-2.202-.612m2.202.613l-.779.161.725-.064.054-.097m34.372 51.634c.123 3.34-.978 4.961-1.969 7.829l-1.786.892c-1.46 2.838.142 1.802-.903 4.059-2.281 2.027-6.921 6.345-8.406 6.738-1.084-.023.734-1.278.972-1.771-3.052 2.098-2.449 3.147-7.118 4.422l-.136-.305c-11.516 5.417-27.51-5.318-27.299-19.966-.123.931-.349.697-.605 1.074-.594-7.537 3.481-15.107 10.353-18.196 6.722-3.329 14.602-1.963 19.417 2.524-2.644-3.465-7.909-7.137-14.148-6.793-6.111.097-11.828 3.98-13.735 8.196-3.132 1.972-3.495 7.6-4.859 8.628-1.835 13.491 3.453 19.318 12.398 26.175 1.407.949.396 1.093.587 1.815-2.972-1.392-5.694-3.493-7.931-6.065 1.186 1.739 2.468 3.429 4.125 4.756-2.803-.949-6.546-6.79-7.64-7.028 4.832 8.649 19.599 15.169 27.333 11.935-3.579.131-8.124.073-12.145-1.413-1.688-.869-3.984-2.669-3.574-3.007 10.553 3.944 21.456 2.988 30.586-4.333 2.323-1.81 4.861-4.887 5.594-4.93-1.105 1.661.188.8-.66 2.266 2.316-3.733-1.005-1.521 2.394-6.448l1.256 1.729c-.467-3.098 3.848-6.861 3.41-11.762.99-1.499 1.104 1.612.054 5.061 1.457-3.825.384-4.44.759-7.597.404 1.062.935 2.188 1.208 3.308-.95-3.696.975-6.226 1.45-8.373-.467-.208-1.464 1.634-1.692-2.732.034-1.896.528-.993.718-1.46-.373-.215-1.349-1.668-1.944-4.456.431-.655 1.151 1.698 1.739 1.795-.378-2.217-1.028-3.907-1.053-5.609-1.713-3.579-.606.478-1.996-1.536-1.823-5.687 1.513-1.32 1.738-3.903 2.763 4.003 4.339 10.208 5.062 12.777-.552-3.133-1.443-6.168-2.532-9.105.839.354-1.352-6.446 1.091-1.943-2.609-9.6-11.166-18.569-19.038-22.778.962.881 2.179 1.989 1.743 2.162-3.915-2.331-3.227-2.513-3.787-3.498-3.19-1.297-3.399.104-5.511.003-6.012-3.188-7.171-2.85-12.703-4.848l.252 1.177c-3.984-1.327-4.641.503-8.945.004-.263-.205 1.379-.74 2.73-.937-3.85.508-3.67-.759-7.438.14.929-.651 1.909-1.082 2.9-1.637-3.139.191-7.495 1.828-6.151.339-5.121 2.286-14.218 5.493-19.322 10.28l-.161-1.073c-2.339 2.809-10.2 8.387-10.826 12.022l-.625.146c-1.218 2.06-2.004 4.396-2.97 6.517-1.592 2.713-2.334 1.044-2.107 1.469-3.132 6.349-4.687 11.683-6.03 16.057.958 1.432.022 8.614.385 14.364-1.572 28.394 19.928 55.962 43.43 62.329 3.445 1.23 8.567 1.184 12.924 1.311-5.141-1.471-5.806-.778-10.813-2.525-3.614-1.701-4.405-3.644-6.964-5.864l1.014 1.79c-5.019-1.775-2.918-2.198-7.002-3.491l1.083-1.412c-1.627-.123-4.309-2.74-5.042-4.191l-1.779.07c-2.138-2.638-3.277-4.538-3.194-6.011l-.575 1.024c-.652-1.119-7.865-9.893-4.123-7.85-.696-.637-1.62-1.035-2.622-2.856l.762-.871c-1.802-2.316-3.315-5.287-3.2-6.276.96 1.298 1.627 1.54 2.287 1.763-4.548-11.285-4.803-.622-8.248-11.487l.729-.059c-.559-.842-.898-1.756-1.347-2.652l.316-3.161c-3.274-3.786-.916-16.098-.443-22.851.328-2.746 2.733-5.669 4.563-10.252l-1.114-.192c2.131-3.717 12.167-14.928 16.815-14.351 2.251-2.829-.446-.011-.886-.723 4.945-5.119 6.5-3.617 9.838-4.537 3.6-2.137-3.089.833-1.383-.815 6.223-1.589 4.41-3.613 12.528-4.42.857.487-1.987.752-2.701 1.385 5.185-2.536 16.408-1.959 23.697 1.408 8.458 3.952 17.961 15.638 18.336 26.631l.427.114c-.216 4.37.669 9.424-.865 14.066l1.043-2.201M51.233 70.366l-.29 1.448c1.357 1.845 2.435 3.843 4.167 5.283-1.246-2.434-2.173-3.44-3.877-6.731m3.208-.126c-.718-.795-1.144-1.751-1.62-2.704.456 1.675 1.388 3.114 2.255 4.578l-.635-1.874m56.785-12.343l-.304.762a36.72 36.72 0 01-3.599 11.487 36.107 36.107 0 003.903-12.249M66.353 2.293c1.396-.513 3.433-.281 4.914-.617-1.93.162-3.852.259-5.75.503l.836.114M17.326 28.362c.322 2.979-2.242 4.135.567 2.171 1.506-3.39-.588-.935-.567-2.171M14.025 42.15c.646-1.986.764-3.18 1.011-4.328-1.788 2.285-.823 2.773-1.011 4.328"/></svg>',
  'WASM': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 302.69 157.03"><defs><style> .cls-1 { fill: #393939; } .cls-2 { fill: #654ff0; } </style></defs><title>web-assembly-logo</title><g id="Layer_2" data-name="Layer 2"><g id="Notch_-_Purple" data-name="Notch - Purple"><g><path class="cls-1" d="M27,156.68H22.41l-4.34-15.24q-.28-1-.7-2.88t-.51-2.61q-.18,1.12-.57,2.9t-.66,2.66l-4.23,15.17H6.87l-3.3-12.8L.21,131.12H4.48L8.13,146a64.24,64.24,0,0,1,1.22,6.33q.19-1.49.58-3.32t.7-3l4.16-14.93h4.14l4.27,15a56.12,56.12,0,0,1,1.29,6.22A45.58,45.58,0,0,1,25.75,146l3.64-14.86h4.23Z" transform="translate(-0.21)"/><path class="cls-1" d="M54.91,156.68H40.46V131.12H54.91v3.53H44.63v7h9.63v3.5H44.63v8H54.91Z" transform="translate(-0.21)"/><path class="cls-1" d="M63.66,131.12h7.59q5.28,0,7.63,1.54a5.39,5.39,0,0,1,2.35,4.86,5.89,5.89,0,0,1-1.15,3.72,5.16,5.16,0,0,1-3.32,1.87v.17a6.6,6.6,0,0,1,4,2,6.06,6.06,0,0,1,1.27,4,6.56,6.56,0,0,1-2.4,5.39,10.34,10.34,0,0,1-6.69,1.95H63.66Zm4.18,10.56h4a6.88,6.88,0,0,0,3.83-.83A3.18,3.18,0,0,0,76.89,138a2.83,2.83,0,0,0-1.3-2.6,8.14,8.14,0,0,0-4.13-.8H67.84Zm0,3.39v8.09h4.44a6.54,6.54,0,0,0,4-1A3.71,3.71,0,0,0,77.57,149a3.37,3.37,0,0,0-1.36-3,7.22,7.22,0,0,0-4.14-1Z" transform="translate(-0.21)"/><path class="cls-1" d="M108.87,156.68l-3.18-8.13H95.44l-3.15,8.13h-3L99.39,131h2.5l10.05,25.66Zm-4.11-10.8-3-7.92q-.58-1.5-1.19-3.69A33.24,33.24,0,0,1,99.5,138l-3,7.92Z" transform="translate(-0.21)"/><path class="cls-1" d="M135.25,149.88a6.27,6.27,0,0,1-2.45,5.26,10.61,10.61,0,0,1-6.64,1.89,16.64,16.64,0,0,1-7-1.17V153a18.33,18.33,0,0,0,3.43,1,18,18,0,0,0,3.67.38,7.41,7.41,0,0,0,4.48-1.13,3.7,3.7,0,0,0,1.5-3.14,4,4,0,0,0-.53-2.18,5,5,0,0,0-1.78-1.57,24.92,24.92,0,0,0-3.8-1.62,12.14,12.14,0,0,1-5.1-3,6.68,6.68,0,0,1-1.53-4.56,5.67,5.67,0,0,1,2.22-4.7,9.23,9.23,0,0,1,5.87-1.75,17.31,17.31,0,0,1,7,1.4l-.93,2.59a15.84,15.84,0,0,0-6.15-1.33,6,6,0,0,0-3.69,1,3.34,3.34,0,0,0-1.33,2.81,4.31,4.31,0,0,0,.49,2.18,4.6,4.6,0,0,0,1.65,1.56,20.48,20.48,0,0,0,3.56,1.57,14.08,14.08,0,0,1,5.53,3.08A6.05,6.05,0,0,1,135.25,149.88Z" transform="translate(-0.21)"/><path class="cls-1" d="M160.27,149.88a6.27,6.27,0,0,1-2.45,5.26,10.61,10.61,0,0,1-6.64,1.89,16.64,16.64,0,0,1-7-1.17V153a18.33,18.33,0,0,0,3.43,1,18,18,0,0,0,3.67.38,7.41,7.41,0,0,0,4.48-1.13,3.7,3.7,0,0,0,1.5-3.14,4,4,0,0,0-.53-2.18,5,5,0,0,0-1.78-1.57,24.92,24.92,0,0,0-3.8-1.62,12.14,12.14,0,0,1-5.1-3,6.68,6.68,0,0,1-1.53-4.56,5.67,5.67,0,0,1,2.22-4.7,9.23,9.23,0,0,1,5.87-1.75,17.31,17.31,0,0,1,7,1.4l-.93,2.59a15.84,15.84,0,0,0-6.15-1.33,6,6,0,0,0-3.69,1,3.34,3.34,0,0,0-1.33,2.81,4.31,4.31,0,0,0,.49,2.18,4.6,4.6,0,0,0,1.65,1.56,20.48,20.48,0,0,0,3.56,1.57,14.08,14.08,0,0,1,5.53,3.08A6.05,6.05,0,0,1,160.27,149.88Z" transform="translate(-0.21)"/><path class="cls-1" d="M185.11,156.68H170.87V131.12h14.25v2.64H173.84V142h10.59v2.62H173.84V154h11.28Z" transform="translate(-0.21)"/><path class="cls-1" d="M207.46,156.68,198.79,134h-.14q.24,2.69.25,6.4v16.26h-2.74V131.12h4.48l8.09,21.08h.14L217,131.12h4.44v25.56h-3V140.21q0-2.83.25-6.15h-.14l-8.74,22.62Z" transform="translate(-0.21)"/><path class="cls-1" d="M233.84,131.12h7.22q5.09,0,7.36,1.52a5.37,5.37,0,0,1,2.27,4.81,5.55,5.55,0,0,1-1.27,3.75,6.1,6.1,0,0,1-3.7,1.91v.17q5.82,1,5.82,6.12a6.57,6.57,0,0,1-2.32,5.35,9.86,9.86,0,0,1-6.48,1.92h-8.92Zm3,10.94h4.89a8,8,0,0,0,4.53-1,3.81,3.81,0,0,0,1.38-3.33,3.37,3.37,0,0,0-1.54-3.1,9.61,9.61,0,0,0-4.9-1h-4.37Zm0,2.52v9.56h5.33a7.59,7.59,0,0,0,4.66-1.2,4.42,4.42,0,0,0,1.56-3.75,4,4,0,0,0-1.6-3.5,8.55,8.55,0,0,0-4.87-1.12Z" transform="translate(-0.21)"/><path class="cls-1" d="M262.41,156.68V131.12h3V154h11.28v2.69Z" transform="translate(-0.21)"/><path class="cls-1" d="M292.86,143.9l6.82-12.78h3.22l-8.53,15.64v9.91h-3v-9.77l-8.51-15.79h3.25Z" transform="translate(-0.21)"/></g><g id="icon"><path class="cls-2" d="M163.76,0c0,.19,0,.38,0,.58a12.34,12.34,0,0,1-24.68,0c0-.2,0-.39,0-.58H97.64V107.62H205.26V0ZM149,96.1l-5.24-25.93h-.09L138,96.1h-7.22L122.6,58h7.13l4.88,25.93h.09L140.58,58h6.67l5.28,26.25h.09L158.19,58h7L156.1,96.1Zm39.26,0-2.43-8.48H173l-1.87,8.48H164L173.22,58h11.25l11.21,38.1Z" transform="translate(-0.21)"/><polygon class="cls-2" points="177.3 67.39 174.19 81.37 183.87 81.37 180.3 67.39 177.3 67.39"/></g></g></g></svg>',
  
  
  
  
  
  
};

function renderProjectCard(p, data) {
  const pr = data.projects[p.key];
  const isOpen = openProjects[p.id];

  return `<div class="project-card${isOpen ? ' is-open' : ''}">
    ${projectPreview(p)}
    <div class="project-content">
      ${projectHeader(p, pr)}
      ${pr.sub ? `<p class="project-sub">${pr.sub}</p>` : ''}
      <p class="project-desc">${pr.desc}</p>
      ${projectTags(p)}
      ${projectActions(p, data, isOpen)}
      ${projectDetail(p, pr, isOpen)}
    </div>
  </div>`;
}

function projectHeader(p, pr) {
  return `<div class="project-header">
    <h4 class="project-name">${p.id}</h4>
    <span class="project-badge">
      <span class="badge-dot"></span>
      ${pr.badge}
    </span>
  </div>`;
}

function projectPreview(p) {
  if (p.video) {
    return `<div class="project-img"><video src="${p.video}" autoplay muted loop playsinline></video></div>`;
  }
  return `<div class="project-img"><img src="${p.img}" alt="${p.id} preview" draggable="false" loading="lazy" /></div>`;
}

function projectTags(p) {
  return `<div class="project-tags">${p.tags.map(t => {
    const icon = TECH_ICONS[t] || '';
    return `<span class="project-tag" aria-label="${t}" title="${t}">${icon}<span class="tech-tooltip">${t}</span></span>`;
  }).join('')}</div>`;
}

function projectActions(p, data, isOpen) {
  return `<div class="project-actions">
    <button class="expand-btn" data-project="${p.id}"><span class="arrow-purple" style="transform:${isOpen ? 'rotate(90deg)' : 'rotate(0)'}">→</span> ${isOpen ? data.projects.showLess : data.projects.showMore}</button>
    <div class="project-links">
      <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="pill-link" aria-label="GitHub" title="GitHub">${icons.github}<span class="tech-tooltip">GitHub</span></a>
      <a href="${p.landing}" target="_blank" rel="noopener noreferrer" class="pill-link" aria-label="Landing Page" title="Landing Page">${icons.external}<span class="tech-tooltip">Landing</span></a>
    </div>
  </div>`;
}

function projectDetail(p, pr, isOpen) {
  const sections = getDetailSections(p.key, pr);
  return `<div class="project-detail${isOpen ? ' open' : ''}">
    <div class="project-detail-inner">
      ${sections.map(s => {
        if (s.list) return `<div><p class="detail-label">${s.label}</p><ul class="detail-list">${s.list.map(i => `<li><span class="detail-bullet">·</span><span>${i}</span></li>`).join('')}</ul></div>`;
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
  $('skillsHeading').textContent = data.skills.heading;
  $('skillsSub').textContent = data.skills.subheading;

  renderSkillCategories(data);
  renderRoadmap(data);
}

const TUX_SVG = '<svg version="1.1" viewBox="0 0 216 256" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Tux</title><defs id="tux_fx"><linearGradient id="gradient_belly_shadow"><stop offset="0" stop-color="#000000"/><stop offset="1" stop-color="#000000" stop-opacity="0.25"/></linearGradient><linearGradient id="gradient_wing_tip_right_shadow"><stop offset="0" stop-color="#110800"/><stop offset="0.59" stop-color="#a65a00" stop-opacity="0.8"/><stop offset="1" stop-color="#ff921e" stop-opacity="0"/></linearGradient><linearGradient id="gradient_wing_tip_right_glare_1"><stop offset="0" stop-color="#7c7c7c"/><stop offset="1" stop-color="#7c7c7c" stop-opacity="0.33"/></linearGradient><linearGradient id="gradient_wing_tip_right_glare_2"><stop offset="0" stop-color="#7c7c7c"/><stop offset="1" stop-color="#7c7c7c" stop-opacity="0.33"/></linearGradient><linearGradient id="gradient_foot_left_layer_1"><stop offset="0" stop-color="#b98309"/><stop offset="1" stop-color="#382605"/></linearGradient><linearGradient id="gradient_foot_left_glare"><stop offset="0" stop-color="#ebc40c"/><stop offset="1" stop-color="#ebc40c" stop-opacity="0"/></linearGradient><linearGradient id="gradient_foot_right_shadow"><stop offset="0" stop-color="#000000"/><stop offset="1" stop-color="#000000" stop-opacity="0"/></linearGradient><linearGradient id="gradient_foot_right_layer_1"><stop offset="0" stop-color="#3e2a06"/><stop offset="1" stop-color="#ad780a"/></linearGradient><linearGradient id="gradient_foot_right_glare"><stop offset="0" stop-color="#f3cd0c"/><stop offset="1" stop-color="#f3cd0c" stop-opacity="0"/></linearGradient><linearGradient id="gradient_eyeball"><stop offset="0" stop-color="#fefefc"/><stop offset="0.75" stop-color="#fefefc"/><stop offset="1" stop-color="#d4d4d4"/></linearGradient><linearGradient id="gradient_pupil_left_glare"><stop offset="0" stop-color="#757574" stop-opacity="0"/><stop offset="0.25" stop-color="#757574"/><stop offset="0.5" stop-color="#757574"/><stop offset="1" stop-color="#757574" stop-opacity="0"/></linearGradient><linearGradient id="gradient_pupil_right_glare_2"><stop offset="0" stop-color="#949494" stop-opacity="0.39"/><stop offset="0.5" stop-color="#949494"/><stop offset="1" stop-color="#949494" stop-opacity="0.39"/></linearGradient><linearGradient id="gradient_eyelid_left"><stop offset="0" stop-color="#c8c8c8"/><stop offset="1" stop-color="#797978"/></linearGradient><linearGradient id="gradient_eyelid_right"><stop offset="0" stop-color="#747474"/><stop offset="0.13" stop-color="#8c8c8c"/><stop offset="0.25" stop-color="#a4a4a4"/><stop offset="0.5" stop-color="#d4d4d4"/><stop offset="0.62" stop-color="#d4d4d4"/><stop offset="1" stop-color="#7c7c7c"/></linearGradient><linearGradient id="gradient_eyebrow"><stop offset="0" stop-color="#646464" stop-opacity="0"/><stop offset="0.31" stop-color="#646464" stop-opacity="0.58"/><stop offset="0.47" stop-color="#646464"/><stop offset="0.73" stop-color="#646464" stop-opacity="0.26"/><stop offset="1" stop-color="#646464" stop-opacity="0"/></linearGradient><linearGradient id="gradient_beak_base"><stop offset="0" stop-color="#020204"/><stop offset="0.73" stop-color="#020204"/><stop offset="1" stop-color="#5c5c5c"/></linearGradient><linearGradient id="gradient_mandible_lower"><stop offset="0" stop-color="#d2940a"/><stop offset="0.75" stop-color="#d89c08"/><stop offset="0.87" stop-color="#b67e07"/><stop offset="1" stop-color="#946106"/></linearGradient><linearGradient id="gradient_mandible_upper"><stop offset="0" stop-color="#ad780a"/><stop offset="0.12" stop-color="#d89e08"/><stop offset="0.25" stop-color="#edb80b"/><stop offset="0.39" stop-color="#ebc80d"/><stop offset="0.53" stop-color="#f5d838"/><stop offset="0.77" stop-color="#f6d811"/><stop offset="1" stop-color="#f5cd31"/></linearGradient><linearGradient id="gradient_nares"><stop offset="0" stop-color="#3a2903"/><stop offset="0.55" stop-color="#735208"/><stop offset="1" stop-color="#ac8c04"/></linearGradient><linearGradient id="gradient_beak_corner"><stop offset="0" stop-color="#f5ce2d"/><stop offset="1" stop-color="#d79b08"/></linearGradient><radialGradient id="fill_belly_shadow_left" href="#gradient_belly_shadow" xlink:href="#gradient_belly_shadow" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1" gradientTransform="translate(61.18,121.19) scale(19,18)"/><radialGradient id="fill_belly_shadow_right" href="#gradient_belly_shadow" xlink:href="#gradient_belly_shadow" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1" gradientTransform="translate(125.74,131.6) scale(23.6,18)"/><radialGradient id="fill_belly_shadow_middle" href="#gradient_belly_shadow" xlink:href="#gradient_belly_shadow" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1" gradientTransform="translate(94.21,127.47) scale(9.35,10)"/><linearGradient id="fill_foot_left_base" href="#gradient_foot_left_layer_1" xlink:href="#gradient_foot_left_layer_1" gradientUnits="userSpaceOnUse" x1="23.18" y1="193.01" x2="64.31" y2="262.02"/><linearGradient id="fill_foot_left_glare" href="#gradient_foot_left_glare" xlink:href="#gradient_foot_left_glare" gradientUnits="userSpaceOnUse" x1="64.47" y1="210.83" x2="77.41" y2="235.21"/><linearGradient id="fill_foot_right_shadow" href="#gradient_foot_right_shadow" xlink:href="#gradient_foot_right_shadow" gradientUnits="userSpaceOnUse" x1="146.93" y1="211.96" x2="150.2" y2="235.73"/><linearGradient id="fill_foot_right_base" href="#gradient_foot_right_layer_1" xlink:href="#gradient_foot_right_layer_1" gradientUnits="userSpaceOnUse" x1="151.5" y1="253.02" x2="192.94" y2="185.84"/><linearGradient id="fill_foot_right_glare" href="#gradient_foot_right_glare" xlink:href="#gradient_foot_right_glare" gradientUnits="userSpaceOnUse" x1="162.81" y1="180.67" x2="161.59" y2="191.64"/><radialGradient id="fill_wing_tip_right_shadow_lower" href="#gradient_wing_tip_right_shadow" xlink:href="#gradient_wing_tip_right_shadow" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1" gradientTransform="translate(169.71,194.53) rotate(15) scale(19.66,20.64)"/><radialGradient id="fill_wing_tip_right_shadow_upper" href="#gradient_wing_tip_right_shadow" xlink:href="#gradient_wing_tip_right_shadow" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1" gradientTransform="translate(169.71,189.89) rotate(-2.42) scale(19.74,14.86)"/><radialGradient id="fill_wing_tip_right_glare_1" href="#gradient_wing_tip_right_glare_1" xlink:href="#gradient_wing_tip_right_glare_1" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1" gradientTransform="translate(184.65,176.62) rotate(23.5) scale(6.95,3.21)"/><linearGradient id="fill_wing_tip_right_glare_2" href="#gradient_wing_tip_right_glare_2" xlink:href="#gradient_wing_tip_right_glare_2" gradientUnits="userSpaceOnUse" x1="165.69" y1="173.58" x2="168.27" y2="173.47"/><radialGradient id="fill_eyeball_left" href="#gradient_eyeball" xlink:href="#gradient_eyeball" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1" gradientTransform="translate(86.49,51.41) rotate(-0.6) scale(10.24,15.68)"/><linearGradient id="fill_pupil_left_glare" href="#gradient_pupil_left_glare" xlink:href="#gradient_pupil_left_glare" gradientUnits="userSpaceOnUse" x1="84.29" y1="46.64" x2="89.32" y2="55.63"/><radialGradient id="fill_eyelid_left" href="#gradient_eyelid_left" xlink:href="#gradient_eyelid_left" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1" gradientTransform="translate(84.89,43.74) rotate(-9.35) scale(6.25,5.77)"/><linearGradient id="fill_eyebrow_left" href="#gradient_eyebrow" xlink:href="#gradient_eyebrow" gradientUnits="userSpaceOnUse" x1="83.59" y1="32.51" x2="94.48" y2="43.63"/><radialGradient id="fill_eyeball_right" href="#gradient_eyeball" xlink:href="#gradient_eyeball" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1" gradientTransform="translate(118.06,51.41) rotate(-1.8) scale(13.64,15.68)"/><linearGradient id="fill_pupil_right_glare" href="#gradient_pupil_right_glare_2" xlink:href="#gradient_pupil_right_glare_2" gradientUnits="userSpaceOnUse" x1="117.87" y1="47.25" x2="123.66" y2="54.11"/><linearGradient id="fill_eyelid_right" href="#gradient_eyelid_right" xlink:href="#gradient_eyelid_right" gradientUnits="userSpaceOnUse" x1="112.9" y1="36.23" x2="131.32" y2="47.01"/><linearGradient id="fill_eyebrow_right" href="#gradient_eyebrow" xlink:href="#gradient_eyebrow" gradientUnits="userSpaceOnUse" x1="119.16" y1="31.56" x2="131.42" y2="43.14"/><radialGradient id="fill_beak_base" href="#gradient_beak_base" xlink:href="#gradient_beak_base" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1" gradientTransform="translate(97.64,60.12) rotate(-36) scale(11.44,10.38)"/><radialGradient id="fill_mandible_lower_base" href="#gradient_mandible_lower" xlink:href="#gradient_mandible_lower" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1" gradientTransform="translate(109.77,70.61) rotate(-22.4) scale(27.15,19.07)"/><linearGradient id="fill_mandible_upper_base" href="#gradient_mandible_upper" xlink:href="#gradient_mandible_upper" gradientUnits="userSpaceOnUse" x1="78.09" y1="69.26" x2="126.77" y2="68.88"/><radialGradient id="fill_naris_left" href="#gradient_nares" xlink:href="#gradient_nares" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1" gradientTransform="translate(92.11,59.88) scale(1.32,1.42)"/><radialGradient id="fill_naris_right" href="#gradient_nares" xlink:href="#gradient_nares" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1" gradientTransform="translate(104.65,59.7) scale(2.78,1.62)"/><linearGradient id="fill_beak_corner" href="#gradient_beak_corner" xlink:href="#gradient_beak_corner" gradientUnits="userSpaceOnUse" x1="126.74" y1="67.49" x2="126.74" y2="71.09"/><filter id="blur_belly_shadow_left"><feGaussianBlur stdDeviation="0.64 0.55"/></filter><filter id="blur_belly_shadow_right"><feGaussianBlur stdDeviation="0.98"/></filter><filter id="blur_belly_shadow_middle"><feGaussianBlur stdDeviation="0.68"/></filter><filter id="blur_belly_shadow_lower" x="-0.8" width="2.6" y="-0.2" height="1.4"><feGaussianBlur stdDeviation="1.25"/></filter><filter id="blur_belly_glare" x="-0.8" width="2.6" y="-0.5" height="2"><feGaussianBlur stdDeviation="1.78 2.19"/></filter><filter id="blur_head_glare" x="-0.3" width="1.6" y="-0.3" height="1.6"><feGaussianBlur stdDeviation="1.73"/></filter><filter id="blur_neck_glare" x="-0.2" width="1.4" y="-0.2" height="1.4"><feGaussianBlur stdDeviation="0.78"/></filter><filter id="blur_wing_left_glare" x="-0.2" width="1.4" y="-0.2" height="1.4"><feGaussianBlur stdDeviation="0.98"/></filter><filter id="blur_wing_right_glare" x="-0.2" width="1.4" y="-0.2" height="1.4"><feGaussianBlur stdDeviation="1.19 1.17"/></filter><filter id="blur_foot_left_layer_1" x="-0.2" width="1.4" y="-0.2" height="1.4"><feGaussianBlur stdDeviation="3.38"/></filter><filter id="blur_foot_left_layer_2"><feGaussianBlur stdDeviation="2.1 2.06"/></filter><filter id="blur_foot_left_glare"><feGaussianBlur stdDeviation="0.32"/></filter><filter id="blur_foot_right_shadow"><feGaussianBlur stdDeviation="1.95 1.9"/></filter><filter id="blur_foot_right_layer_1" x="-0.2" width="1.4" y="-0.2" height="1.4"><feGaussianBlur stdDeviation="4.12"/></filter><filter id="blur_foot_right_layer_2" x="-0.2" width="1.4" y="-0.2" height="1.4"><feGaussianBlur stdDeviation="3.12 3.37"/></filter><filter id="blur_foot_right_glare" x="-0.2" width="1.4" y="-0.2" height="1.4"><feGaussianBlur stdDeviation="0.41"/></filter><filter id="blur_wing_tip_right_shadow_lower" x="-0.3" width="1.6" y="-0.3" height="1.6"><feGaussianBlur stdDeviation="2.45"/></filter><filter id="blur_wing_tip_right_shadow_upper" x="-0.2" width="1.4" y="-0.2" height="1.4"><feGaussianBlur stdDeviation="1.12 0.81"/></filter><filter id="blur_wing_tip_right_glare" x="-0.2" width="1.4" y="-0.2" height="1.4"><feGaussianBlur stdDeviation="0.88"/></filter><filter id="blur_pupil_left_glare" x="-0.3" width="1.6" y="-0.3" height="1.6"><feGaussianBlur stdDeviation="0.44"/></filter><filter id="blur_eyebrow_left"><feGaussianBlur stdDeviation="0.12"/></filter><filter id="blur_pupil_right_glare" x="-0.2" width="1.4" y="-0.2" height="1.4"><feGaussianBlur stdDeviation="0.45"/></filter><filter id="blur_eyebrow_right"><feGaussianBlur stdDeviation="0.13"/></filter><filter id="blur_beak_shadow_lower" x="-0.2" width="1.4" y="-0.2" height="1.4"><feGaussianBlur stdDeviation="1.75"/></filter><filter id="blur_beak_shadow_upper"><feGaussianBlur stdDeviation="0.8 0.74"/></filter><filter id="blur_mandible_lower_glare" x="-0.2" width="1.4" y="-0.2" height="1.4"><feGaussianBlur stdDeviation="0.77"/></filter><filter id="blur_mandible_upper_shadow"><feGaussianBlur stdDeviation="0.65"/></filter><filter id="blur_mandible_upper_glare" x="-0.2" width="1.4" y="-0.2" height="1.4"><feGaussianBlur stdDeviation="0.73"/></filter><filter id="blur_naris_left" x="-0.2" width="1.4" y="-0.2" height="1.4"><feGaussianBlur stdDeviation="0.1"/></filter><filter id="blur_naris_right"><feGaussianBlur stdDeviation="0.1"/></filter><filter id="blur_beak_corner" x="-0.2" width="1.4" y="-0.2" height="1.4"><feGaussianBlur stdDeviation="0.23"/></filter><clipPath id="clip_body"><use href="#body_base" xlink:href="#body_base"/></clipPath><clipPath id="clip_wing_left"><use href="#wing_left_base" xlink:href="#wing_left_base"/></clipPath><clipPath id="clip_wing_right"><use href="#wing_right_base" xlink:href="#wing_right_base"/></clipPath><clipPath id="clip_foot_left"><use href="#foot_left_base" xlink:href="#foot_left_base"/></clipPath><clipPath id="clip_foot_right"><use href="#foot_right_base" xlink:href="#foot_right_base"/></clipPath><clipPath id="clip_wing_tip_right"><use href="#wing_tip_right_base" xlink:href="#wing_tip_right_base"/></clipPath><clipPath id="clip_eye_left"><use href="#eyeball_left" xlink:href="#eyeball_left"/></clipPath><clipPath id="clip_pupil_left"><use href="#pupil_left_base" xlink:href="#pupil_left_base"/></clipPath><clipPath id="clip_eye_right"><use href="#eyeball_right" xlink:href="#eyeball_right"/></clipPath><clipPath id="clip_pupil_right"><use href="#pupil_right_base" xlink:href="#pupil_right_base"/></clipPath><clipPath id="clip_mandible_lower"><use href="#mandible_lower_base" xlink:href="#mandible_lower_base"/></clipPath><clipPath id="clip_mandible_upper"><use href="#mandible_upper_base" xlink:href="#mandible_upper_base"/></clipPath><clipPath id="clip_beak"><use href="#mandible_lower_base" xlink:href="#mandible_lower_base"/><use href="#mandible_upper_base" xlink:href="#mandible_upper_base"/></clipPath></defs><g id="tux"><g id="body"><path id="body_base" fill="#020204" d="m 106.95,0 c -6,0 -12.02,1.18 -17.46,4.12 -5.78,3.11 -10.52,8.09 -13.43,13.97 -2.92,5.88 -4.06,12.16 -4.24,19.08 -0.33,13.14 0.3,26.92 1.29,39.41 0.26,3.8 0.74,6.02 0.25,9.93 -1.62,8.3 -8.88,13.88 -12.76,21.17 -4.27,8.04 -6.07,17.13 -9.29,25.65 -2.95,7.79 -7.09,15.1 -9.88,22.95 -3.91,10.97 -5.08,23.03 -2.5,34.39 1.97,8.66 6.08,16.78 11.62,23.73 -0.8,1.44 -1.58,2.91 -2.4,4.34 -2.57,4.43 -5.71,8.64 -7.17,13.55 -0.73,2.45 -1.02,5.07 -0.55,7.59 0.47,2.52 1.75,4.93 3.75,6.53 1.31,1.04 2.9,1.72 4.53,2.1 1.63,0.37 3.32,0.46 5,0.43 6.37,-0.14 12.55,-2.07 18.71,-3.69 3.66,-0.96 7.34,-1.81 11.03,-2.58 13.14,-2.69 27.8,-1.61 39.99,0.15 4.13,0.63 8.23,1.44 12.29,2.43 6.36,1.54 12.69,3.5 19.23,3.69 1.72,0.05 3.46,-0.03 5.14,-0.4 1.68,-0.38 3.31,-1.06 4.65,-2.13 2.01,-1.6 3.29,-4.02 3.76,-6.54 0.47,-2.52 0.18,-5.15 -0.56,-7.61 -1.48,-4.92 -4.65,-9.11 -7.27,-13.52 -1.04,-1.75 -2,-3.53 -3.03,-5.28 7.9,-8.87 14.26,-19.13 17.94,-30.4 4.01,-12.3 4.75,-25.55 3.06,-38.38 -1.69,-12.83 -5.76,-25.27 -11.11,-37.05 -6.72,-14.76 -12.37,-20.1 -16.47,-33.07 -4.42,-14.02 -0.77,-30.61 -4.06,-43.32 -1.17,-4.32 -3.04,-8.45 -5.45,-12.23 -2.82,-4.43 -6.4,-8.39 -10.65,-11.47 -6.78,-4.92 -15.3,-7.54 -23.96,-7.54 z"/><path id="belly" fill="#fdfdfb" d="m 83.13,74 c -0.9,1.13 -1.48,2.49 -1.84,3.89 -0.35,1.4 -0.48,2.85 -0.54,4.3 -0.11,2.89 0.07,5.83 -0.7,8.62 -0.82,2.98 -2.65,5.57 -4.44,8.08 -3.11,4.36 -6.25,8.84 -7.78,13.97 -0.93,3.1 -1.24,6.39 -0.91,9.62 -3.47,5.1 -6.48,10.53 -8.98,16.18 -3.78,8.57 -6.37,17.69 -7.28,27.01 -1.12,11.41 0.34,23.15 4.85,33.69 3.25,7.63 8.11,14.6 14.38,20.04 3.18,2.76 6.72,5.11 10.5,6.97 13.11,6.45 29.31,6.46 42.2,-0.41 6.74,-3.59 12.43,-8.84 17.91,-14.15 3.3,-3.2 6.59,-6.48 9.11,-10.32 4.85,-7.41 6.54,-16.41 7.59,-25.2 1.83,-15.36 1.89,-31.6 -4.85,-45.53 -2.32,-4.8 -5.41,-9.22 -9.12,-13.05 -0.98,-6.7 -2.93,-13.27 -5.76,-19.42 -2.05,-4.45 -4.54,-8.68 -6.44,-13.18 -0.78,-1.85 -1.46,-3.75 -2.32,-5.56 -0.87,-1.81 -1.93,-3.55 -3.39,-4.94 -1.48,-1.42 -3.33,-2.43 -5.28,-3.07 -1.95,-0.65 -4.01,-0.94 -6.06,-1.04 -4.11,-0.21 -8.22,0.33 -12.33,0.16 -3.27,-0.13 -6.53,-0.7 -9.8,-0.51 -1.63,0.1 -3.26,0.39 -4.78,1.01 -1.52,0.61 -2.92,1.56 -3.94,2.84 z"/><g id="body_self_shadows"><path id="belly_shadow_left" opacity="0.25" fill="url(#fill_belly_shadow_left)" filter="url(#blur_belly_shadow_left)" clip-path="url(#clip_body)" d="m 68.67,115.18 c 0.87,1.31 -0.55,5.84 19.86,2.94 0,0 -3.59,0.39 -7.12,1.21 -5.49,1.84 -10.27,3.89 -13.97,6.61 -3.65,2.7 -6.33,6.21 -9.68,9.22 0,0 5.43,-9.92 6.78,-12.91 1.36,-2.99 -0.22,-2.85 0.85,-7.25 1.07,-4.4 3.69,-8.63 3.69,-8.63 0,0 -2.14,6.22 -0.41,8.81 z"/><path id="belly_shadow_right" opacity="0.42" fill="url(#fill_belly_shadow_right)" filter="url(#blur_belly_shadow_right)" clip-path="url(#clip_body)" d="m 134.28,113.99 c -4.16,2.9 -6.6,2.56 -11.64,3.12 -5.05,0.57 -18.7,0.36 -18.7,0.36 0,0 1.97,-0.03 6.36,0.78 4.38,0.82 13.31,1.6 18.34,3.51 5.04,1.92 6.87,2.47 9.93,4.4 4.35,2.75 7.55,7.06 11.71,10.08 0,0 0.2,-4 -1.48,-6.99 -1.68,-2.99 -6.2,-7.7 -7.53,-12.1 -1.32,-4.4 -1.96,-13.04 -1.96,-13.04 0,0 -0.88,6.99 -5.03,9.88 z"/><path id="belly_shadow_middle" opacity="0.2" fill="url(#fill_belly_shadow_middle)" filter="url(#blur_belly_shadow_middle)" clip-path="url(#clip_body)" d="m 95.17,107.81 c -0.16,1.25 -0.36,2.5 -0.6,3.74 -0.12,0.61 -0.26,1.22 -0.48,1.8 -0.23,0.58 -0.56,1.14 -1.02,1.55 -0.41,0.37 -0.9,0.62 -1.4,0.85 -1.94,0.88 -4.01,1.47 -6.12,1.74 0.84,0.06 1.68,0.14 2.53,0.23 0.53,0.06 1.06,0.12 1.57,0.25 0.52,0.14 1.03,0.34 1.46,0.65 0.47,0.35 0.84,0.82 1.12,1.34 0.55,1.02 0.73,2.2 0.83,3.37 0.13,1.48 0.14,2.98 0.03,4.46 0.1,-0.99 0.31,-1.98 0.62,-2.92 0.57,-1.72 1.47,-3.32 2.69,-4.65 0.49,-0.52 1.02,-1.01 1.6,-1.42 1.79,-1.26 4.07,-1.81 6.24,-1.51 -2.21,0.09 -4.44,-0.6 -6.2,-1.93 -0.9,-0.68 -1.68,-1.52 -2.22,-2.5 -0.84,-1.52 -1.08,-3.37 -0.65,-5.05 z"/><path id="belly_shadow_lower" opacity="0.11" fill="#000000" filter="url(#blur_belly_shadow_lower)" clip-path="url(#clip_body)" d="m 89.85,137.14 c -1.06,4.03 -1.79,8.15 -2.17,12.31 -0.55,5.87 -0.42,11.78 -0.74,17.67 -0.26,4.99 -0.85,10.04 0.02,14.97 0.41,2.35 1.15,4.64 2.2,6.78 0.16,-0.82 0.29,-1.64 0.36,-2.47 0.37,-4 -0.3,-8.01 -0.53,-12.01 -0.4,-7.02 0.57,-14.04 0.97,-21.06 0.3,-5.39 0.27,-10.8 -0.11,-16.19 z"/></g><g id="body_glare"><path id="belly_glare" opacity="0.75" fill="#7c7c7c" filter="url(#blur_belly_glare)" clip-path="url(#clip_body)" d="m 160.08,131.23 c 1.03,-0.16 7.34,5.21 6.48,7.21 -0.86,1.99 -2.49,0.79 -3.65,0.8 -1.16,0.02 -4.33,1.46 -4.86,0.55 -0.54,-0.91 1.4,-3.03 2.41,-4.81 0.82,-1.43 -1.4,-3.59 -0.38,-3.75 z"/><path id="head_glare" fill="#7c7c7c" filter="url(#blur_head_glare)" clip-path="url(#clip_body)" d="m 121.52,11.12 c -2.21,1.56 -1.25,3.51 -0.3,5.46 0.95,1.96 -2.09,7.59 -2.12,7.83 -0.03,0.24 5.98,-2.85 7.62,-4.87 1.94,-2.37 6.83,3.22 6.56,2.37 0.01,-1.52 -9.55,-12.34 -11.76,-10.79 z"/><path id="neck_glare" fill="#838384" filter="url(#blur_neck_glare)" clip-path="url(#clip_body)" d="m 138.27,76.63 c -1.86,1.7 0.88,4.25 2.17,7.24 0.81,1.86 3.04,4.49 5.2,4.07 1.63,-0.32 2.63,-2.66 2.48,-4.3 -0.3,-3.18 -2.98,-3.93 -4.93,-5.02 -1.54,-0.86 -3.61,-3.18 -4.92,-1.99 z"/></g></g><g id="wings"><g id="wing_left"><path id="wing_left_base" fill="#020204" d="m 63.98,100.91 c -6.1,6.92 -12.37,13.63 -15.81,21.12 -1.71,3.8 -2.51,7.93 -3.68,11.93 -1.32,4.54 -3.12,8.94 -5.14,13.22 -1.87,3.95 -3.93,7.81 -5.98,11.66 -1.5,2.81 -3.02,5.67 -3.54,8.81 -0.41,2.48 -0.18,5.04 0.46,7.47 0.63,2.43 1.64,4.75 2.79,6.98 4.88,9.55 12.21,17.77 20.89,24.07 3.94,2.85 8.15,5.32 12.58,7.35 2.4,1.09 4.92,2.07 7.56,2.11 1.32,0.03 2.65,-0.19 3.86,-0.72 1.2,-0.53 2.28,-1.38 3,-2.49 0.88,-1.36 1.18,-3.05 1,-4.66 -0.18,-1.61 -0.81,-3.15 -1.65,-4.53 -2.06,-3.38 -5.31,-5.83 -8.44,-8.25 -6.76,-5.23 -13.29,-10.76 -19.55,-16.58 -1.76,-1.65 -3.53,-3.34 -4.76,-5.42 -1.2,-2.02 -1.85,-4.32 -2.29,-6.63 -1.21,-6.33 -0.9,-12.99 1.25,-19.07 0.85,-2.38 1.96,-4.65 3.04,-6.93 1.86,-3.95 3.62,-7.98 6.07,-11.6 3.05,-4.51 7.13,-8.33 9.61,-13.17 2.1,-4.09 2.95,-8.68 3.76,-13.2 0.64,-3.54 1.85,-7 2.47,-10.54 -1.21,2.3 -5.11,6.07 -7.5,9.07 z"/><path id="wing_left_glare" opacity="0.95" fill="#7c7c7c" filter="url(#blur_wing_left_glare)" clip-path="url(#clip_wing_left)" d="m 56.96,126.1 c -2,1.84 -3.73,3.97 -5.13,6.31 -2.3,3.84 -3.65,8.16 -5.33,12.31 -1.24,3.09 -2.69,6.2 -2.86,9.53 -0.09,1.71 0.16,3.42 0.22,5.13 0.06,1.71 -0.1,3.49 -0.94,4.98 -0.7,1.25 -1.87,2.23 -3.22,2.71 1.83,0.61 3.45,1.79 4.6,3.33 0.96,1.3 1.58,2.81 2.41,4.18 0.68,1.12 1.51,2.16 2.54,2.97 1.02,0.82 2.25,1.4 3.54,1.56 1.79,0.23 3.65,-0.36 4.97,-1.58 -1.66,-15.55 -0.14,-31.42 4.44,-46.37 0.29,-0.94 0.59,-1.89 0.67,-2.87 0.07,-0.99 -0.12,-2.03 -0.72,-2.81 -0.31,-0.42 -0.74,-0.75 -1.23,-0.96 -0.48,-0.2 -1.02,-0.28 -1.54,-0.21 -0.52,0.06 -1.03,0.26 -1.45,0.57 -0.42,0.32 -0.76,0.74 -0.97,1.22 z"/></g><g id="wing_right"><path id="wing_right_base" fill="#020204" d="m 162.76,127.12 c 5.24,4.22 8.57,10.59 9.6,17.24 0.8,5.18 0.28,10.51 -0.89,15.62 -1.17,5.12 -2.97,10.06 -4.77,15 -0.71,1.96 -1.43,3.95 -1.71,6.02 -0.29,2.08 -0.11,4.27 0.89,6.11 1.15,2.11 3.29,3.56 5.59,4.24 2.27,0.68 4.72,0.66 7.02,0.09 2.3,-0.57 6.17,-1.31 8.04,-2.77 4.75,-3.69 5.88,-10.1 7.01,-15.72 1.17,-5.87 0.6,-12.02 -0.43,-17.95 -1.41,-8.09 -3.78,-15.99 -6.79,-23.62 -2.22,-5.62 -5.06,-10.98 -8.44,-15.96 -3.32,-4.89 -8.02,-8.7 -11.5,-13.48 -1.21,-1.66 -2.66,-3.38 -3.84,-5.06 -2.56,-3.62 -1.98,-2.94 -3.57,-5.29 -1.15,-1.7 -2.97,-2.28 -4.88,-3.02 -1.92,-0.74 -4.06,-0.96 -6.04,-0.41 -2.6,0.73 -4.73,2.79 -5.86,5.24 -1.13,2.46 -1.33,5.28 -0.89,7.95 0.57,3.44 2.14,6.64 3.92,9.64 2,3.39 4.32,6.66 7.35,9.18 3.16,2.63 6.98,4.37 10.19,6.95 z"/><path id="wing_right_glare" fill="#838384" filter="url(#blur_wing_right_glare)" clip-path="url(#clip_wing_right)" d="m 150.42,118.99 c 0.42,0.4 0.86,0.81 1.31,1.19 3.22,2.63 4.93,5.58 8.2,8.16 5.34,4.22 10.75,11.5 11.8,18.15 0.82,5.19 -0.26,8.01 -1.58,14.12 -1.32,6.12 -5.06,14.78 -7.09,20.68 -0.8,2.35 1.64,1.38 1.32,3.86 -0.16,1.22 -0.18,2.45 -0.03,3.67 0.02,-0.23 0.03,-0.48 0.06,-0.71 0.39,-3.38 1.42,-6.63 2.55,-9.82 2.17,-6.13 4.66,-12.15 6.38,-18.45 1.72,-6.29 1.53,-10.82 0.63,-16.23 -1.13,-6.81 -5.09,-13.09 -10.69,-17.24 -3.97,-2.93 -8.64,-4.81 -12.86,-7.38 z"/></g></g><g id="feet"><g id="foot_left"><path id="foot_left_base" fill="url(#fill_foot_left_base)" d="m 34.98,175.33 c 1.38,-0.57 2.93,-0.68 4.39,-0.41 1.47,0.27 2.86,0.91 4.09,1.74 2.47,1.68 4.3,4.12 6.05,6.54 4.03,5.54 7.9,11.2 11.42,17.08 2.85,4.78 5.46,9.71 8.76,14.18 2.15,2.93 4.57,5.64 6.73,8.55 2.16,2.92 4.07,6.08 5.03,9.58 1.25,4.55 0.76,9.56 -1.4,13.75 -1.52,2.95 -3.86,5.48 -6.7,7.19 -2.84,1.71 -5.83,2.47 -9.15,2.47 -5.27,0 -10.42,-2.83 -15.32,-4.78 -9.98,-3.98 -20.82,-5.22 -31.11,-8.32 -3.16,-0.95 -6.27,-2.08 -9.45,-2.95 -1.42,-0.39 -2.85,-0.73 -4.19,-1.34 -1.34,-0.6 -2.59,-1.51 -3.33,-2.77 -0.57,-0.98 -0.8,-2.13 -0.8,-3.26 0,-1.14 0.28,-2.26 0.67,-3.32 0.77,-2.13 2.02,-4.06 2.86,-6.17 1.37,-3.44 1.62,-7.23 1.43,-10.93 -0.18,-3.69 -0.78,-7.36 -1.03,-11.05 -0.12,-1.65 -0.16,-3.32 0.16,-4.95 0.31,-1.62 1.01,-3.21 2.2,-4.35 1.1,-1.06 2.55,-1.69 4.05,-2 1.49,-0.31 3.03,-0.32 4.55,-0.29 1.52,0.03 3.05,0.12 4.57,-0.01 1.52,-0.12 3.05,-0.46 4.37,-1.22 1.26,-0.72 2.29,-1.79 3.14,-2.96 0.85,-1.17 1.54,-2.45 2.25,-3.72 0.7,-1.26 1.43,-2.52 2.36,-3.64 0.92,-1.12 2.06,-2.09 3.4,-2.64 z"/><path id="foot_left_layer_1" fill="#d99a03" filter="url(#blur_foot_left_layer_1)" clip-path="url(#clip_foot_left)" d="m 37.16,177.7 c 1.25,-0.5 2.67,-0.56 3.98,-0.26 1.32,0.3 2.55,0.94 3.61,1.77 2.14,1.65 3.62,3.97 5.05,6.26 3.42,5.54 6.76,11.15 9.92,16.86 2.4,4.31 4.68,8.7 7.62,12.65 1.95,2.62 4.18,5.03 6.17,7.62 1.99,2.59 3.76,5.41 4.64,8.56 1.14,4.05 0.68,8.54 -1.28,12.26 -1.42,2.68 -3.58,4.96 -6.2,6.48 -2.61,1.52 -5.67,2.28 -8.69,2.14 -4.82,-0.22 -9.23,-2.63 -13.77,-4.26 -8.71,-3.16 -18.14,-3.59 -27.08,-6.05 -3.2,-0.87 -6.32,-2.03 -9.53,-2.84 -1.43,-0.36 -2.88,-0.66 -4.23,-1.23 -1.35,-0.57 -2.62,-1.45 -3.36,-2.72 -0.54,-0.95 -0.76,-2.06 -0.73,-3.15 0.04,-1.09 0.31,-2.17 0.7,-3.19 0.78,-2.04 2,-3.88 2.78,-5.92 1.19,-3.08 1.34,-6.47 1.12,-9.76 -0.22,-3.29 -0.8,-6.56 -1,-9.85 -0.08,-1.48 -0.1,-2.97 0.2,-4.41 0.3,-1.45 0.93,-2.85 1.98,-3.89 1.14,-1.13 2.7,-1.74 4.29,-1.99 1.58,-0.24 3.19,-0.13 4.78,0.01 1.6,0.14 3.2,0.32 4.8,0.23 1.6,-0.1 3.22,-0.49 4.54,-1.39 1.2,-0.81 2.1,-2 2.79,-3.27 0.69,-1.27 1.18,-2.64 1.71,-3.98 0.52,-1.35 1.09,-2.69 1.91,-3.89 0.82,-1.19 1.93,-2.24 3.28,-2.79 z"/><path id="foot_left_layer_2" fill="#f5bd0c" filter="url(#blur_foot_left_layer_2)" clip-path="url(#clip_foot_left)" d="m 35.99,174.57 c 1.22,-0.6 2.65,-0.72 3.98,-0.45 1.33,0.27 2.57,0.92 3.62,1.77 2.09,1.7 3.43,4.13 4.67,6.51 2.84,5.46 5.5,11.04 8.9,16.19 2.48,3.73 5.33,7.2 7.83,10.92 3.39,5.03 6.15,10.57 7.29,16.5 0.76,4 0.74,8.31 -1.18,11.9 -1.27,2.37 -3.32,4.31 -5.75,5.52 -2.42,1.22 -5.21,1.71 -7.92,1.47 -4.27,-0.37 -8.14,-2.47 -12.16,-3.94 -7.13,-2.59 -14.84,-3.22 -22.18,-5.18 -3.09,-0.82 -6.13,-1.89 -9.26,-2.54 -1.39,-0.29 -2.8,-0.5 -4.12,-1 -1.32,-0.5 -2.57,-1.33 -3.25,-2.55 -0.47,-0.86 -0.63,-1.86 -0.56,-2.84 0.07,-0.97 0.36,-1.92 0.74,-2.83 0.77,-1.8 1.9,-3.46 2.49,-5.32 0.88,-2.75 0.52,-5.72 -0.14,-8.53 -0.65,-2.8 -1.6,-5.55 -1.89,-8.41 -0.13,-1.27 -0.13,-2.57 0.17,-3.82 0.29,-1.25 0.88,-2.45 1.81,-3.34 1.2,-1.15 2.88,-1.73 4.56,-1.89 1.67,-0.16 3.35,0.06 5.01,0.3 1.66,0.24 3.34,0.5 5.01,0.42 1.68,-0.07 3.39,-0.51 4.7,-1.54 1.3,-1.02 2.12,-2.53 2.59,-4.09 0.47,-1.57 0.62,-3.2 0.81,-4.82 0.19,-1.62 0.43,-3.26 1.06,-4.77 0.63,-1.51 1.69,-2.9 3.17,-3.64 z"/><path id="foot_left_glare" fill="url(#fill_foot_left_glare)" filter="url(#blur_foot_left_glare)" clip-path="url(#clip_foot_left)" d="m 51.2,188.21 c 2.25,4.06 3.62,8.72 5.85,12.82 2.05,3.77 4.38,7.65 6.46,11.12 0.93,1.55 3.09,3.93 5.27,7.62 1.98,3.34 3.98,8.01 5.1,9.58 -0.64,-1.84 -1.96,-6.77 -3.54,-10.28 -1.47,-3.28 -3.19,-5.15 -4.24,-6.92 -2.08,-3.47 -4.33,-6.6 -6.47,-9.91 -2.95,-4.57 -5.2,-9.68 -8.43,-14.03 z"/></g><g id="foot_right"><path id="foot_right_shadow" opacity="0.2" fill="url(#fill_foot_right_shadow)" filter="url(#blur_foot_right_shadow)" clip-path="url(#clip_body)" d="m 198.7,215.61 c -0.4,1.33 -1.02,2.62 -1.81,3.8 -1.75,2.59 -4.3,4.55 -6.84,6.35 -4.33,3.07 -8.85,5.89 -12.89,9.38 -2.7,2.34 -5.17,4.97 -7.45,7.73 -1.95,2.36 -3.79,4.84 -6.02,6.94 -2.25,2.12 -4.89,3.84 -7.74,4.77 -3.47,1.13 -7.13,1.08 -10.47,0.22 -2.34,-0.6 -4.63,-1.64 -6.08,-3.53 -1.45,-1.89 -1.92,-4.44 -2.09,-6.94 -0.3,-4.42 0.23,-8.93 0.71,-13.42 0.4,-3.73 0.77,-7.46 0.92,-11.18 0.27,-6.77 -0.18,-13.47 -1.09,-20.05 -0.16,-1.11 -0.32,-2.22 -0.23,-3.35 0.09,-1.14 0.47,-2.32 1.27,-3.2 0.74,-0.81 1.77,-1.29 2.79,-1.52 1.02,-0.24 2.06,-0.25 3.09,-0.28 2.43,-0.06 4.86,-0.21 7.25,0.01 1.51,0.13 2.99,0.41 4.49,0.55 2.51,0.24 5.12,0.12 7.64,-0.62 2.71,-0.8 5.29,-2.29 8.05,-2.7 1.13,-0.17 2.26,-0.15 3.36,0.01 1.12,0.15 2.24,0.46 3.1,1.15 0.66,0.52 1.14,1.23 1.51,1.99 0.56,1.14 0.9,2.39 1.1,3.68 0.17,1.14 0.24,2.31 0.53,3.41 0.48,1.81 1.58,3.35 2.89,4.6 1.32,1.25 2.85,2.24 4.39,3.22 1.53,0.97 3.07,1.93 4.7,2.73 0.77,0.38 1.56,0.72 2.29,1.15 0.74,0.44 1.42,0.97 1.91,1.67 0.66,0.95 0.92,2.2 0.72,3.43 z"/><path id="foot_right_base" fill="url(#fill_foot_right_base)" d="m 213.47,222.92 c -2.26,2.68 -5.4,4.45 -8.53,6.05 -5.33,2.71 -10.86,5.1 -15.87,8.37 -3.36,2.19 -6.46,4.76 -9.36,7.53 -2.48,2.37 -4.83,4.9 -7.61,6.91 -2.81,2.03 -6.05,3.5 -9.48,4.01 -0.95,0.14 -1.9,0.21 -2.86,0.21 -3.24,0 -6.48,-0.78 -9.46,-2.08 -2.7,-1.17 -5.3,-2.86 -6.86,-5.36 -1.56,-2.52 -1.92,-5.59 -1.92,-8.56 -0.01,-5.23 0.96,-10.41 1.87,-15.57 0.76,-4.29 1.48,-8.58 1.95,-12.91 0.85,-7.86 0.84,-15.81 0.28,-23.71 -0.1,-1.32 -0.21,-2.65 -0.01,-3.96 0.2,-1.31 0.74,-2.62 1.74,-3.48 0.93,-0.8 2.17,-1.16 3.4,-1.22 1.22,-0.07 2.44,0.12 3.65,0.3 2.85,0.42 5.73,0.74 8.52,1.48 1.76,0.46 3.48,1.08 5.23,1.56 2.94,0.79 6.01,1.17 9.02,0.82 3.25,-0.38 6.41,-1.6 9.68,-1.52 1.34,0.03 2.67,0.28 3.95,0.69 1.3,0.41 2.59,1 3.55,1.98 0.73,0.74 1.24,1.67 1.62,2.64 0.57,1.44 0.88,2.98 1.01,4.52 0.11,1.37 0.09,2.76 0.35,4.11 0.43,2.21 1.6,4.24 3.04,5.97 1.45,1.74 3.18,3.21 4.91,4.66 1.73,1.45 3.46,2.89 5.32,4.16 0.87,0.6 1.77,1.16 2.6,1.81 0.83,0.66 1.59,1.42 2.11,2.34 0.45,0.81 0.69,1.72 0.69,2.65 0,0.52 -0.07,1.04 -0.23,1.56 -0.45,1.43 -1.28,2.82 -2.3,4.04 z"/><path id="foot_right_layer_1" fill="#cd8907" filter="url(#blur_foot_right_layer_1)" clip-path="url(#clip_foot_right)" d="m 213.21,216.12 c -0.53,1.33 -1.28,2.58 -2.22,3.67 -2.07,2.42 -4.93,4.01 -7.78,5.44 -4.88,2.44 -9.92,4.58 -14.5,7.52 -3.06,1.97 -5.9,4.28 -8.55,6.78 -2.26,2.13 -4.41,4.41 -6.95,6.21 -2.57,1.83 -5.53,3.14 -8.65,3.6 -3.8,0.56 -7.72,-0.16 -11.25,-1.67 -2.46,-1.06 -4.84,-2.56 -6.27,-4.83 -1.42,-2.26 -1.75,-5.02 -1.75,-7.69 -0.02,-4.71 0.87,-9.37 1.71,-14 0.7,-3.85 1.36,-7.71 1.78,-11.6 0.76,-7.08 0.73,-14.22 0.25,-21.32 -0.08,-1.19 -0.17,-2.39 0.01,-3.57 0.18,-1.18 0.67,-2.35 1.57,-3.13 0.85,-0.73 1.99,-1.05 3.11,-1.1 1.11,-0.06 2.22,0.12 3.33,0.28 2.61,0.38 5.23,0.67 7.78,1.33 1.61,0.42 3.18,0.98 4.78,1.4 2.68,0.72 5.49,1.06 8.24,0.74 2.97,-0.34 5.85,-1.44 8.83,-1.37 1.23,0.03 2.44,0.26 3.61,0.62 1.19,0.37 2.37,0.9 3.25,1.78 0.66,0.67 1.11,1.51 1.48,2.38 0.53,1.29 0.89,2.67 0.91,4.07 0.03,1.46 -0.28,2.92 -0.09,4.37 0.16,1.17 0.66,2.28 1.3,3.28 0.63,1 1.4,1.91 2.17,2.81 1.48,1.75 2.96,3.53 4.82,4.87 2.11,1.53 4.62,2.43 6.8,3.85 0.65,0.43 1.28,0.91 1.74,1.54 0.78,1.06 0.98,2.5 0.54,3.74 z"/><path id="foot_right_layer_2" fill="#f5c021" filter="url(#blur_foot_right_layer_2)" clip-path="url(#clip_foot_right)" d="m 212.91,214.61 c -0.6,1.35 -1.37,2.6 -2.28,3.71 -2.12,2.58 -4.99,4.35 -8,5.49 -4.97,1.88 -10.39,2.13 -15.26,4.27 -2.97,1.3 -5.65,3.26 -8.36,5.12 -2.18,1.49 -4.42,2.94 -6.82,3.98 -2.72,1.19 -5.6,1.85 -8.5,2.32 -1.84,0.29 -3.71,0.51 -5.57,0.41 -1.86,-0.1 -3.72,-0.54 -5.37,-1.49 -1.24,-0.72 -2.36,-1.75 -3.03,-3.1 -0.73,-1.49 -0.86,-3.24 -0.85,-4.94 0.05,-4.5 1.02,-8.96 0.99,-13.47 -0.03,-3.93 -0.81,-7.8 -1.03,-11.72 -0.43,-7.54 1.19,-15.2 -0.24,-22.59 -0.22,-1.19 -0.53,-2.37 -0.52,-3.58 0.01,-0.6 0.1,-1.21 0.31,-1.77 0.22,-0.55 0.56,-1.06 1.01,-1.42 0.39,-0.29 0.84,-0.47 1.31,-0.56 0.46,-0.08 0.94,-0.06 1.41,0.01 0.93,0.15 1.82,0.51 2.73,0.78 2.6,0.78 5.35,0.76 8,1.35 1.66,0.36 3.26,0.97 4.91,1.41 2.75,0.76 5.63,1.08 8.46,0.75 3.04,-0.36 6.01,-1.46 9.07,-1.38 1.26,0.03 2.5,0.26 3.71,0.62 1.21,0.36 2.42,0.87 3.34,1.8 0.65,0.67 1.13,1.52 1.51,2.4 0.57,1.29 0.96,2.69 0.95,4.11 -0.01,0.74 -0.12,1.47 -0.19,2.21 -0.06,0.74 -0.08,1.49 0.09,2.2 0.18,0.72 0.55,1.37 0.97,1.96 0.42,0.59 0.9,1.12 1.34,1.7 1.22,1.61 2.1,3.49 3.05,5.3 0.95,1.81 2.02,3.6 3.53,4.91 2.05,1.77 4.7,2.48 6.99,3.89 0.67,0.41 1.31,0.89 1.78,1.55 0.38,0.52 0.63,1.15 0.73,1.81 0.09,0.65 0.03,1.34 -0.17,1.96 z"/><path id="foot_right_glare" fill="url(#fill_foot_right_glare)" filter="url(#blur_foot_right_glare)" clip-path="url(#clip_foot_right)" d="m 148.08,181.58 c 2.82,-0.76 5.22,1.38 7.27,2.99 1.32,1.13 3.24,0.85 4.86,0.9 2.69,-0.09 5.36,0.45 8.05,0.12 5.3,-0.45 10.49,-1.75 15.81,-1.97 2.54,-0.16 5.4,-0.31 7.59,1.17 0.89,0.62 2.2,3.23 3.07,2.25 -0.36,-2.74 -2.39,-5.39 -5.11,-6.12 -2.14,-0.34 -4.3,0.25 -6.46,0.06 -6.39,-0.15 -12.75,-1.34 -19.16,-1 -4.46,0.04 -8.91,-0.17 -13.37,-0.34 -1.75,-0.36 -2.37,1.19 -3.32,1.79 0.25,0.19 0.34,0.25 0.77,0.15 z"/></g></g><g id="wing_tip_right"><g id="wing_tip_right_shadow"><path id="wing_tip_right_shadow_lower" opacity="0.35" fill="url(#fill_wing_tip_right_shadow_lower)" filter="url(#blur_wing_tip_right_shadow_lower)" clip-path="url(#clip_foot_right)" d="m 185.49,187.61 c -0.48,-0.95 -1.36,-1.66 -2.35,-2.07 -0.98,-0.41 -2.06,-0.55 -3.13,-0.54 -2.13,0.02 -4.25,0.57 -6.38,0.39 -1.79,-0.16 -3.49,-0.83 -5.24,-1.26 -1.81,-0.44 -3.73,-0.61 -5.52,-0.12 -1.92,0.52 -3.61,1.81 -4.67,3.49 -0.94,1.48 -1.38,3.23 -1.52,4.98 -0.14,1.75 0.01,3.5 0.19,5.25 0.12,1.26 0.27,2.52 0.57,3.75 0.31,1.23 0.78,2.43 1.52,3.46 1.07,1.48 2.66,2.54 4.37,3.17 2.8,1.03 5.98,0.98 8.73,-0.15 4.88,-2.12 9.01,-5.92 11.52,-10.6 0.91,-1.68 1.61,-3.47 2.06,-5.31 0.18,-0.74 0.32,-1.49 0.32,-2.25 0.01,-0.75 -0.12,-1.52 -0.47,-2.19 z"/><path id="wing_tip_right_shadow_upper" opacity="0.35" fill="url(#fill_wing_tip_right_shadow_upper)" filter="url(#blur_wing_tip_right_shadow_upper)" clip-path="url(#clip_foot_right)" d="m 185.49,184.89 c -0.48,-0.69 -1.36,-1.2 -2.35,-1.5 -0.98,-0.3 -2.06,-0.39 -3.13,-0.39 -2.13,0.02 -4.25,0.42 -6.38,0.28 -1.79,-0.11 -3.49,-0.6 -5.24,-0.9 -1.81,-0.32 -3.73,-0.45 -5.52,-0.09 -1.92,0.37 -3.61,1.3 -4.67,2.52 -0.94,1.07 -1.38,2.34 -1.52,3.6 -0.14,1.26 0.01,2.53 0.19,3.79 0.12,0.91 0.27,1.83 0.57,2.72 0.31,0.89 0.78,1.76 1.52,2.5 1.07,1.07 2.66,1.83 4.37,2.29 2.8,0.75 5.98,0.71 8.73,-0.11 4.88,-1.53 9.01,-4.28 11.52,-7.66 0.91,-1.22 1.61,-2.51 2.06,-3.84 0.18,-0.54 0.32,-1.08 0.32,-1.62 0.01,-0.55 -0.12,-1.11 -0.47,-1.59 z"/></g><path id="wing_tip_right_base" fill="#020204" d="m 189.55,178.72 c -0.35,-0.95 -0.97,-1.79 -1.72,-2.47 -0.75,-0.68 -1.64,-1.2 -2.57,-1.6 -1.86,-0.79 -3.89,-1.09 -5.89,-1.46 -1.87,-0.35 -3.74,-0.78 -5.62,-1.1 -1.96,-0.33 -3.98,-0.55 -5.92,-0.11 -1.69,0.38 -3.26,1.26 -4.54,2.43 -1.28,1.17 -2.28,2.63 -3,4.21 -1.27,2.79 -1.67,5.92 -1.43,8.97 0.18,2.27 0.76,4.61 2.25,6.32 1.21,1.39 2.92,2.26 4.68,2.78 3.04,0.9 6.35,0.85 9.36,-0.13 4.97,-1.67 9.37,-4.98 12.35,-9.29 0.98,-1.43 1.82,-2.98 2.2,-4.66 0.29,-1.28 0.3,-2.66 -0.15,-3.89 z"/><g id="wing_tip_right_glare"><defs><path id="path_wing_tip_right_glare" d="m 168.89,171.07 c -0.47,0.03 -0.93,0.08 -1.4,0.17 -2.99,0.53 -5.73,2.42 -7.27,5.03 -1.09,1.85 -1.58,4.03 -1.43,6.17 0.07,-1.5 0.46,-2.97 1.19,-4.28 1.23,-2.23 3.47,-3.91 5.98,-4.37 1.54,-0.28 3.13,-0.11 4.68,0.08 1.5,0.19 3,0.39 4.47,0.7 2.28,0.5 4.53,1.26 6.44,2.59 0.44,0.31 0.86,0.66 1.21,1.08 0.35,0.41 0.62,0.89 0.73,1.42 0.15,0.78 -0.07,1.6 -0.46,2.29 -0.39,0.7 -0.92,1.3 -1.48,1.86 -0.46,0.46 -0.94,0.89 -1.43,1.32 2.21,-0.43 4.44,-1.03 6.28,-2.31 0.77,-0.55 1.48,-1.2 1.94,-2.02 0.46,-0.83 0.65,-1.83 0.43,-2.75 -0.16,-0.62 -0.5,-1.19 -0.92,-1.67 -0.42,-0.48 -0.93,-0.87 -1.45,-1.24 -2.31,-1.62 -5.01,-2.65 -7.81,-2.99 -1.8,-0.33 -3.61,-0.61 -5.42,-0.83 -1.41,-0.18 -2.86,-0.33 -4.28,-0.25 z"/></defs><use id="wing_tip_right_glare_1" href="#path_wing_tip_right_glare" xlink:href="#path_wing_tip_right_glare" fill="url(#fill_wing_tip_right_glare_1)" filter="url(#blur_wing_tip_right_glare)" clip-path="url(#clip_wing_tip_right)"/><use id="wing_tip_right_glare_2" href="#path_wing_tip_right_glare" xlink:href="#path_wing_tip_right_glare" fill="url(#fill_wing_tip_right_glare_2)" filter="url(#blur_wing_tip_right_glare)" clip-path="url(#clip_wing_tip_right)"/></g></g><g id="face"><g id="eyes"><g id="eye_left"><path id="eyeball_left" fill="url(#fill_eyeball_left)" d="m 84.45,38.28 c -1.53,0.08 -3,0.79 -4.12,1.84 -1.13,1.05 -1.92,2.43 -2.41,3.88 -0.97,2.92 -0.75,6.08 -0.53,9.15 0.2,2.77 0.41,5.6 1.45,8.18 0.52,1.3 1.25,2.51 2.22,3.51 0.97,0.99 2.2,1.76 3.55,2.09 1.26,0.32 2.62,0.26 3.86,-0.13 1.25,-0.4 2.38,-1.11 3.32,-2.02 1.36,-1.33 2.27,-3.07 2.8,-4.9 0.53,-1.83 0.68,-3.75 0.65,-5.66 -0.04,-2.38 -0.35,-4.77 -1.09,-7.03 -0.75,-2.26 -1.94,-4.4 -3.6,-6.11 -0.8,-0.83 -1.72,-1.55 -2.75,-2.06 -1.04,-0.51 -2.2,-0.8 -3.35,-0.74 z"/><g id="pupil_left"><path id="pupil_left_base" fill="#020204" d="m 80.75,50.99 c -0.32,1.94 -0.33,3.97 0.33,5.81 0.44,1.22 1.17,2.33 2.05,3.28 0.57,0.62 1.23,1.18 1.99,1.55 0.77,0.37 1.65,0.52 2.48,0.32 0.76,-0.19 1.42,-0.68 1.91,-1.29 0.49,-0.61 0.82,-1.34 1.05,-2.09 0.69,-2.21 0.58,-4.62 -0.11,-6.83 -0.49,-1.61 -1.32,-3.16 -2.6,-4.24 -0.62,-0.52 -1.34,-0.93 -2.12,-1.11 -0.78,-0.19 -1.63,-0.14 -2.36,0.19 -0.81,0.37 -1.44,1.07 -1.85,1.86 -0.41,0.79 -0.62,1.67 -0.77,2.55 z"/><path id="pupil_left_glare" fill="url(#fill_pupil_left_glare)" filter="url(#blur_pupil_left_glare)" clip-path="url(#clip_pupil_left)" d="m 84.84,49.59 c 0.21,0.55 0.91,0.75 1.3,1.19 0.37,0.42 0.76,0.87 0.97,1.4 0.39,1.01 -0.39,2.51 0.43,3.23 0.25,0.22 0.77,0.23 1.02,0 0.99,-0.9 0.77,-2.71 0.38,-3.99 -0.36,-1.15 -1.23,-2.25 -2.31,-2.8 -0.5,-0.26 -1.25,-0.47 -1.68,-0.11 -0.27,0.24 -0.24,0.74 -0.11,1.08 z"/></g><path id="eyelid_left" fill="url(#fill_eyelid_left)" clip-path="url(#clip_eye_left)" d="m 81.14,44.46 c 2.32,-1.38 5.13,-1.7 7.82,-1.45 2.68,0.26 5.27,1.04 7.87,1.75 1.91,0.52 3.84,1 5.63,1.84 1.78,0.84 3.44,2.08 4.43,3.8 0.16,0.27 0.29,0.56 0.46,0.83 0.17,0.27 0.37,0.52 0.62,0.71 0.25,0.19 0.57,0.32 0.88,0.3 0.16,-0.01 0.32,-0.05 0.45,-0.13 0.14,-0.08 0.26,-0.2 0.33,-0.34 0.08,-0.16 0.11,-0.35 0.1,-0.53 -0.01,-0.18 -0.05,-0.36 -0.1,-0.54 -0.65,-2.37 -2.19,-4.38 -3.35,-6.55 -0.7,-1.3 -1.28,-2.66 -1.98,-3.96 -2.43,-4.45 -6.42,-7.94 -10.95,-10.21 -4.53,-2.27 -9.59,-3.36 -14.65,-3.65 -5.86,-0.35 -11.73,0.35 -17.51,1.37 -2.51,0.44 -5.06,0.96 -7.27,2.21 -1.11,0.62 -2.13,1.42 -2.92,2.42 -0.8,0.99 -1.36,2.18 -1.55,3.44 -0.17,1.22 0.01,2.47 0.44,3.62 0.42,1.15 1.08,2.2 1.86,3.15 1.54,1.91 3.53,3.39 5.36,5.03 1.83,1.63 3.52,3.44 5.57,4.79 1.02,0.68 2.13,1.24 3.31,1.57 1.18,0.33 2.44,0.42 3.64,0.17 1.24,-0.25 2.4,-0.86 3.41,-1.64 1.01,-0.77 1.88,-1.7 2.71,-2.66 1.66,-1.93 3.21,-4.04 5.39,-5.34 z"/><path id="eyebrow_left" fill="url(#fill_eyebrow_left)" filter="url(#blur_eyebrow_left)" d="m 90.77,36.57 c 2.16,2.02 3.76,4.52 4.85,7.16 -0.48,-2.91 -1.23,-5.26 -3.13,-7.16 -1.16,-1.09 -2.49,-2.05 -3.98,-2.72 -1.32,-0.59 -2.77,-0.96 -3.61,-0.97 -0.83,-0.02 -1.03,0 -1.2,0.01 -0.18,0.01 -0.31,0.01 0.23,0.08 0.54,0.06 1.75,0.39 3.05,0.97 1.3,0.58 2.62,1.54 3.79,2.63 z"/></g><g id="eye_right"><path id="eyeball_right" fill="url(#fill_eyeball_right)" d="m 111.61,38.28 c -2.39,1.65 -4.4,3.94 -5.38,6.68 -1.24,3.45 -0.77,7.31 0.43,10.77 1.22,3.55 3.27,6.93 6.36,9.06 1.54,1.07 3.33,1.8 5.19,2.02 1.87,0.22 3.8,-0.09 5.47,-0.95 2.02,-1.06 3.57,-2.91 4.53,-4.98 0.96,-2.08 1.37,-4.37 1.5,-6.66 0.16,-2.9 -0.12,-5.86 -1.08,-8.61 -1.04,-2.99 -2.92,-5.75 -5.58,-7.47 -1.32,-0.86 -2.83,-1.45 -4.4,-1.67 -1.57,-0.22 -3.19,-0.05 -4.67,0.52 -0.84,0.33 -1.62,0.78 -2.37,1.29 z"/><g id="pupil_right"><path id="pupil_right_base" fill="#020204" d="m 117.14,45.52 c -0.9,0.06 -1.78,0.37 -2.55,0.85 -0.76,0.48 -1.41,1.13 -1.92,1.88 -1.03,1.49 -1.48,3.31 -1.55,5.12 -0.05,1.35 0.1,2.72 0.55,4 0.45,1.28 1.2,2.47 2.25,3.33 1.07,0.89 2.42,1.42 3.81,1.49 1.39,0.06 2.79,-0.34 3.93,-1.13 0.91,-0.63 1.64,-1.5 2.16,-2.48 0.52,-0.97 0.84,-2.05 0.98,-3.15 0.25,-1.93 -0.03,-3.95 -0.93,-5.69 -0.89,-1.74 -2.41,-3.17 -4.24,-3.84 -0.8,-0.29 -1.65,-0.44 -2.49,-0.38 z"/><path id="pupil_right_glare" fill="url(#fill_pupil_right_glare)" filter="url(#blur_pupil_right_glare)" clip-path="url(#clip_pupil_right)" d="m 122.71,53.36 c 1,-1 -0.71,-3.65 -2.05,-4.74 -0.97,-0.78 -3.78,-1.61 -3.66,-0.75 0.12,0.85 1.39,1.95 2.23,2.79 1.05,1.03 3,3.18 3.48,2.7 z"/></g><path id="eyelid_right" fill="url(#fill_eyelid_right)" clip-path="url(#clip_eye_right)" d="m 102.56,47.01 c 2.06,-1.71 4.45,-3.01 7,-3.8 5.25,-1.62 11.2,-0.98 15.84,1.97 1.6,1.01 3.03,2.27 4.52,3.45 1.48,1.17 3.06,2.27 4.85,2.9 0.97,0.34 2,0.54 3.02,0.43 0.92,-0.09 1.81,-0.44 2.57,-0.96 0.76,-0.53 1.4,-1.23 1.88,-2.02 0.96,-1.58 1.27,-3.5 1.1,-5.34 -0.33,-3.69 -2.41,-6.94 -4.15,-10.21 -0.55,-1.02 -1.07,-2.06 -1.73,-3.01 -2.01,-2.93 -5.23,-4.86 -8.6,-5.99 -3.37,-1.13 -6.93,-1.54 -10.46,-1.98 -1.58,-0.2 -3.17,-0.41 -4.74,-0.22 -1.81,0.22 -3.51,0.95 -5.28,1.4 -0.84,0.22 -1.69,0.37 -2.52,0.61 -0.83,0.24 -1.65,0.57 -2.33,1.11 -0.98,0.79 -1.6,1.98 -1.87,3.21 -0.27,1.24 -0.21,2.52 -0.01,3.77 0.39,2.5 1.33,4.93 1.24,7.46 -0.06,1.73 -0.61,3.44 -0.54,5.17 0.02,0.51 0.12,1.55 0.21,2.05 z"/><path id="eyebrow_right" fill="url(#fill_eyebrow_right)" filter="url(#blur_eyebrow_right)" d="m 119.93,31.18 c -0.41,0.52 -0.78,1.08 -1.07,1.7 1.85,0.4 3.61,1.16 5.19,2.21 3.06,2.03 5.38,4.99 7.01,8.29 0.38,-0.42 0.72,-0.87 1.02,-1.37 -1.64,-3.44 -4,-6.55 -7.16,-8.65 -1.52,-1 -3.21,-1.77 -4.99,-2.18 z"/></g></g><g id="beak"><g id="beak_shadow"><path id="beak_shadow_lower" fill="#000000" fill-opacity="0.258824" filter="url(#blur_beak_shadow_lower)" clip-path="url(#clip_body)" d="m 81.12,89.33 c 1.47,4.26 4.42,7.89 7.92,10.72 1.16,0.95 2.39,1.82 3.76,2.43 1.36,0.62 2.87,0.97 4.36,0.84 1.46,-0.12 2.85,-0.7 4.13,-1.42 1.28,-0.72 2.46,-1.59 3.7,-2.37 2.12,-1.35 4.39,-2.44 6.6,-3.64 2.65,-1.45 5.23,-3.1 7.46,-5.14 1.03,-0.93 1.98,-1.95 3.11,-2.75 1.13,-0.81 2.49,-1.39 3.87,-1.29 1.04,0.07 2.01,0.51 3.03,0.73 0.51,0.11 1.03,0.16 1.55,0.08 0.51,-0.08 1.01,-0.29 1.37,-0.67 0.44,-0.46 0.64,-1.12 0.61,-1.76 -0.02,-0.63 -0.24,-1.25 -0.54,-1.81 -0.59,-1.13 -1.49,-2.1 -1.89,-3.31 -0.36,-1.08 -0.29,-2.24 -0.26,-3.37 0.03,-1.14 0.01,-2.32 -0.51,-3.33 -0.4,-0.76 -1.07,-1.37 -1.83,-1.77 -0.76,-0.41 -1.62,-0.62 -2.48,-0.7 -1.72,-0.16 -3.44,0.18 -5.17,0.27 -2.28,0.13 -4.58,-0.15 -6.87,-0.02 -2.85,0.18 -5.65,1 -8.51,1.01 -3.26,0.01 -6.52,-1.06 -9.74,-0.55 -1.39,0.22 -2.71,0.72 -4.03,1.16 -1.33,0.45 -2.7,0.84 -4.1,0.82 -1.59,-0.03 -3.13,-0.58 -4.72,-0.69 -0.79,-0.06 -1.6,0 -2.35,0.28 -0.74,0.28 -1.41,0.79 -1.78,1.5 -0.21,0.4 -0.31,0.86 -0.33,1.31 -0.02,0.46 0.04,0.91 0.15,1.36 0.22,0.88 0.63,1.71 0.96,2.55 1.2,3.07 1.46,6.42 2.53,9.53 z"/><path id="beak_shadow_upper" opacity="0.3" fill="#000000" filter="url(#blur_beak_shadow_upper)" clip-path="url(#clip_body)" d="m 77.03,77.2 c 2.85,1.76 5.41,3.93 7.56,6.39 1.99,2.29 3.68,4.89 6.29,6.58 1.83,1.2 4.04,1.87 6.28,2.08 2.63,0.24 5.29,-0.15 7.83,-0.84 2.35,-0.63 4.62,-1.53 6.7,-2.71 3.97,-2.25 7.28,-5.55 11.65,-7.03 0.95,-0.33 1.94,-0.56 2.86,-0.96 0.92,-0.39 1.79,-0.99 2.23,-1.83 0.42,-0.82 0.4,-1.75 0.54,-2.64 0.15,-0.96 0.48,-1.88 0.66,-2.83 0.18,-0.95 0.2,-1.96 -0.24,-2.83 -0.37,-0.72 -1.04,-1.29 -1.81,-1.66 -0.77,-0.36 -1.64,-0.52 -2.51,-0.56 -1.72,-0.08 -3.43,0.33 -5.16,0.47 -2.28,0.19 -4.58,-0.08 -6.87,-0.01 -2.85,0.08 -5.66,0.67 -8.51,0.8 -3.25,0.14 -6.49,-0.34 -9.74,-0.44 -1.41,-0.05 -2.83,-0.03 -4.21,0.2 -1.39,0.22 -2.75,0.65 -3.92,1.37 -1.14,0.69 -2.07,1.64 -3.11,2.45 -0.52,0.41 -1.08,0.78 -1.68,1.07 -0.61,0.28 -1.28,0.48 -1.96,0.51 -0.35,0.01 -0.71,-0.01 -1.05,0.04 -0.59,0.08 -1.13,0.39 -1.47,0.83 -0.34,0.45 -0.47,1.02 -0.36,1.55 z"/></g><path id="beak_base" fill="url(#fill_beak_base)" d="m 91.66,58.53 c 1.53,-1.71 2.57,-3.8 4.03,-5.56 0.73,-0.88 1.58,-1.69 2.57,-2.26 0.99,-0.57 2.15,-0.89 3.29,-0.79 1.27,0.11 2.46,0.74 3.39,1.61 0.93,0.87 1.62,1.97 2.17,3.12 0.53,1.11 0.95,2.28 1.71,3.24 0.81,1.02 1.94,1.71 2.97,2.52 0.51,0.4 1.01,0.83 1.41,1.34 0.41,0.51 0.72,1.1 0.86,1.74 0.13,0.65 0.06,1.33 -0.16,1.95 -0.23,0.62 -0.61,1.18 -1.09,1.64 -0.95,0.92 -2.25,1.42 -3.56,1.6 -2.62,0.37 -5.27,-0.41 -7.92,-0.34 -2.67,0.08 -5.29,1.02 -7.97,0.93 -1.33,-0.05 -2.69,-0.38 -3.79,-1.14 -0.55,-0.39 -1.03,-0.88 -1.38,-1.45 -0.34,-0.57 -0.55,-1.23 -0.58,-1.9 -0.02,-0.64 0.13,-1.28 0.39,-1.86 0.25,-0.59 0.61,-1.12 1.01,-1.62 0.81,-0.99 1.8,-1.81 2.65,-2.77 z"/><g id="mandible_lower"><path id="mandible_lower_base" fill="url(#fill_mandible_lower_base)" d="m 77.14,75.05 c 0.06,0.26 0.15,0.5 0.28,0.73 0.23,0.38 0.57,0.69 0.93,0.95 0.36,0.27 0.75,0.49 1.13,0.72 2.01,1.27 3.65,3.04 5.11,4.92 1.95,2.52 3.68,5.31 6.29,7.14 1.84,1.3 4.04,2.03 6.28,2.26 2.63,0.26 5.29,-0.16 7.83,-0.91 2.35,-0.69 4.62,-1.66 6.7,-2.95 3.97,-2.44 7.28,-6.02 11.65,-7.63 0.95,-0.35 1.94,-0.6 2.86,-1.03 0.92,-0.44 1.79,-1.08 2.23,-2 0.42,-0.88 0.4,-1.9 0.54,-2.87 0.15,-1.03 0.48,-2.03 0.66,-3.06 0.18,-1.03 0.2,-2.13 -0.24,-3.08 -0.37,-0.78 -1.04,-1.4 -1.81,-1.79 -0.77,-0.4 -1.64,-0.58 -2.51,-0.62 -1.72,-0.08 -3.43,0.36 -5.16,0.52 -2.28,0.21 -4.58,-0.09 -6.87,-0.02 -2.85,0.09 -5.66,0.73 -8.51,0.87 -3.25,0.15 -6.49,-0.35 -9.74,-0.48 -1.41,-0.06 -2.83,-0.04 -4.22,0.2 -1.39,0.23 -2.75,0.71 -3.91,1.51 -1.13,0.78 -2.03,1.84 -3.07,2.74 -0.52,0.45 -1.08,0.86 -1.7,1.16 -0.61,0.3 -1.29,0.49 -1.98,0.47 -0.35,-0.01 -0.72,-0.06 -1.05,0.04 -0.21,0.07 -0.4,0.2 -0.56,0.35 -0.16,0.16 -0.29,0.34 -0.41,0.52 -0.29,0.42 -0.54,0.87 -0.75,1.34 z"/><path id="mandible_lower_glare" fill="#d9b30d" filter="url(#blur_mandible_lower_glare)" clip-path="url(#clip_mandible_lower)" d="m 89.9,78.56 c -0.33,1.37 -0.13,2.87 0.56,4.11 0.68,1.24 1.84,2.2 3.19,2.65 1.7,0.57 3.62,0.29 5.21,-0.54 0.93,-0.48 1.77,-1.16 2.3,-2.06 0.27,-0.44 0.46,-0.94 0.53,-1.46 0.06,-0.51 0.02,-1.05 -0.16,-1.54 -0.2,-0.53 -0.56,-1 -0.99,-1.37 -0.44,-0.37 -0.95,-0.64 -1.5,-0.82 -1.08,-0.36 -2.77,-0.66 -3.91,-0.68 -2.02,-0.04 -4.9,0.34 -5.23,1.71 z"/></g><g id="mandible_upper"><path id="mandible_upper_shadow" fill="#604405" filter="url(#blur_mandible_upper_shadow)" clip-path="url(#clip_mandible_lower)" d="m 84.31,67.86 c -1.16,0.68 -2.27,1.43 -3.36,2.2 -0.57,0.41 -1.15,0.84 -1.45,1.47 -0.21,0.44 -0.26,0.94 -0.27,1.43 0,0.5 0.03,0.99 -0.04,1.48 -0.04,0.33 -0.13,0.66 -0.14,0.99 -0.01,0.17 0,0.34 0.04,0.5 0.05,0.16 0.13,0.32 0.24,0.44 0.15,0.16 0.35,0.26 0.56,0.32 0.21,0.06 0.42,0.09 0.64,0.14 1.01,0.24 1.89,0.86 2.66,1.56 0.77,0.69 1.47,1.48 2.28,2.13 2.18,1.78 5.07,2.52 7.89,2.56 2.82,0.05 5.61,-0.54 8.36,-1.16 2.16,-0.49 4.32,-0.99 6.39,-1.76 3.2,-1.18 6.16,-2.96 8.72,-5.19 1.17,-1.01 2.26,-2.12 3.57,-2.94 1.15,-0.73 2.44,-1.21 3.62,-1.9 0.11,-0.06 0.21,-0.13 0.3,-0.2 0.1,-0.08 0.18,-0.18 0.24,-0.28 0.09,-0.19 0.09,-0.42 0.03,-0.62 -0.06,-0.2 -0.18,-0.38 -0.31,-0.55 -0.15,-0.18 -0.31,-0.34 -0.49,-0.5 -1.23,-1.05 -2.89,-1.43 -4.51,-1.56 -1.61,-0.12 -3.24,-0.03 -4.83,-0.3 -1.5,-0.25 -2.92,-0.81 -4.37,-1.27 -1.52,-0.49 -3.07,-0.87 -4.64,-1.13 -3.71,-0.61 -7.52,-0.49 -11.19,0.27 -3.49,0.73 -6.87,2.05 -9.94,3.87 z"/><path id="mandible_upper_base" fill="url(#fill_mandible_upper_base)" d="m 83.94,63.95 c -1.66,1.12 -3.16,2.49 -4.43,4.04 -0.72,0.89 -1.38,1.86 -1.74,2.94 -0.29,0.86 -0.39,1.76 -0.57,2.65 -0.07,0.33 -0.15,0.66 -0.14,1 0,0.16 0.02,0.33 0.07,0.5 0.05,0.16 0.14,0.31 0.25,0.43 0.2,0.2 0.47,0.31 0.74,0.37 0.28,0.05 0.56,0.06 0.84,0.09 1.25,0.15 2.4,0.75 3.44,1.47 1.04,0.71 2,1.55 3.07,2.22 2.35,1.49 5.16,2.15 7.95,2.26 2.78,0.11 5.56,-0.31 8.3,-0.86 2.17,-0.43 4.33,-0.95 6.39,-1.76 3.16,-1.25 6.01,-3.16 8.72,-5.19 1.24,-0.92 2.46,-1.87 3.57,-2.94 0.37,-0.37 0.74,-0.74 1.14,-1.08 0.4,-0.33 0.85,-0.62 1.35,-0.78 0.76,-0.24 1.58,-0.17 2.37,-0.04 0.59,0.1 1.18,0.23 1.78,0.21 0.3,-0.02 0.6,-0.07 0.88,-0.18 0.28,-0.11 0.54,-0.28 0.73,-0.52 0.25,-0.3 0.38,-0.7 0.38,-1.09 0,-0.4 -0.12,-0.79 -0.32,-1.13 -0.4,-0.68 -1.09,-1.14 -1.81,-1.46 -0.99,-0.44 -2.06,-0.65 -3.11,-0.91 -3.23,-0.78 -6.37,-1.93 -9.34,-3.41 -1.48,-0.73 -2.92,-1.54 -4.37,-2.32 -1.5,-0.8 -3.02,-1.57 -4.64,-2.07 -3.64,-1.1 -7.6,-0.74 -11.19,0.51 -3.98,1.38 -7.58,3.84 -10.31,7.05 z"/><path id="mandible_upper_glare" fill="#f6da4a" filter="url(#blur_mandible_upper_glare)" clip-path="url(#clip_mandible_upper)" d="m 109.45,64.75 c -0.2,-0.24 -0.48,-0.42 -0.78,-0.51 -0.3,-0.09 -0.62,-0.09 -0.93,-0.04 -0.62,0.11 -1.18,0.44 -1.7,0.8 -1.47,1.01 -2.77,2.26 -3.91,3.64 -1.5,1.83 -2.74,3.94 -3.16,6.27 -0.07,0.39 -0.11,0.8 -0.07,1.19 0.05,0.4 0.2,0.79 0.49,1.07 0.24,0.25 0.58,0.4 0.92,0.45 0.35,0.05 0.71,0 1.04,-0.11 0.66,-0.22 1.21,-0.69 1.74,-1.15 2.87,-2.58 5.47,-5.66 6.51,-9.38 0.1,-0.37 0.19,-0.75 0.19,-1.14 0,-0.39 -0.1,-0.78 -0.34,-1.09 z"/><path id="naris_left" opacity="0.8" fill="url(#fill_naris_left)" filter="url(#blur_naris_left)" d="m 92.72,59.06 c -0.77,-0.25 -2.03,1.1 -1.62,1.79 0.11,0.19 0.46,0.43 0.7,0.3 0.35,-0.19 0.64,-0.89 1.02,-1.16 0.25,-0.18 0.2,-0.84 -0.1,-0.93 z"/><path id="naris_right" opacity="0.8" fill="url(#fill_naris_right)" filter="url(#blur_naris_right)" d="m 102.56,59.42 c 0.2,0.64 1.23,0.53 1.83,0.84 0.52,0.27 0.94,0.86 1.53,0.88 0.56,0.01 1.44,-0.2 1.51,-0.76 0.09,-0.73 -0.98,-1.2 -1.67,-1.47 -0.89,-0.34 -2.03,-0.52 -2.86,-0.06 -0.19,0.11 -0.4,0.36 -0.34,0.57 z"/></g><path id="beak_corner" fill="url(#fill_beak_corner)" filter="url(#blur_beak_corner)" clip-path="url(#clip_beak)" d="m 129.27,69.15 a 2.42,3.1 16.94 0 1 -2.81,3.04 2.42,3.1 16.94 0 1 -2.12,-3.04 2.42,3.1 16.94 0 1 2.81,-3.05 2.42,3.1 16.94 0 1 2.12,3.05 z"/></g></g></g></svg>';

function renderSkillCategories(data) {
  const items = data.skills.categories.flatMap(cat => [...cat.domino, ...cat.aprender, ...cat.roadmap]);
  const tuxCell = `<div class="skill-cell tux-cell" title="Linux" aria-label="Linux">
        <span class="tux" aria-hidden="true">${TUX_SVG}</span>
        <span class="tux-label">LINUX</span>
      </div>`;

  $('skillsCategories').innerHTML = `
    <div class="skills-grid">${items.map(s => {
      const icon = SKILL_ICONS[s] || '';
      return `<div class="skill-cell" title="${s}" aria-label="${s}">${icon}<span class="skill-name">${s}</span></div>`;
    }).join('')}
      ${tuxCell}
    </div>`;
}

function renderRoadmap(data) {
  $('roadmapSection').innerHTML = `<div class="roadmap-grid">
    <div><p class="cat-label">${data.skills.roadmapLabel}</p></div>
    <a class="roadmap-card roadmap-link" href="https://myroadmapp.vercel.app" target="_blank" rel="noopener noreferrer">
      <p class="roadmap-year">myroadmap</p>
      <p class="roadmap-label">${data.skills.roadmapLinkLabel}</p>
      <p class="roadmap-item">myroadmapp.vercel.app →</p>
    </a>
  </div>`;
}

// ---- Setup ----
function renderSetupSection(data) {
  stopYtScroll();
  $('setupHeading').textContent = data.setup.heading;
  $('setupSub').textContent = data.setup.sub;

  $('setupGrid').innerHTML = `
    <div class="setup-image-wrap" data-open-modal>
      <img src="assets/setup-2026.jpg" alt="Setup 2026" class="setup-image" draggable="false" loading="lazy" />
      <div class="setup-image-hint">${data.setup.hint}</div>
    </div>
    <div class="yt-feed" id="ytFeed">
      <div class="yt-feed-track" id="ytFeedTrack"></div>
    </div>
    <div class="gh-graph" id="ghGraph"></div>`;
}

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
    if (!track.isConnected) { ytAnimId = null; return; }
    if (!track.dataset.anim) return;
    if (!ytPaused) {
      x -= YT_SCROLL_SPEED;
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
    const data = await fetchJson('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCZIZwWoayEW1CXxqE0TwyLQ', 10 * 60 * 1000);
    if (data.status !== 'ok' || !data.items?.length) { fallback(); return; }
    const items = data.items.slice(0, YT_FEED_LIMIT);
    const html = items.map(v => `
      <a href="${escapeHtml(v.link)}" target="_blank" rel="noopener noreferrer" class="yt-feed-item">
        <img src="${escapeHtml(v.thumbnail)}" alt="${escapeHtml(v.title)}" class="yt-feed-thumb" loading="lazy" />
        <span class="yt-feed-title">${escapeHtml(v.title)}</span>
      </a>
    `).join('');
    track.innerHTML = html + html;
    startYtScroll();
  } catch { fallback(); }
}

// ---- YouTube Subscriber Count ----
async function fetchYtSubscriberCount() {
  const el = $('ytSubsPt');
  if (!el) return;

  if (ytSubscriberCount !== null) {
    el.textContent = `${ytSubscriberCount} ${t[lang].contact.subscribers}`;
    return;
  }

  if (!YT_API_KEY) {
    el.textContent = '—';
    return;
  }

  try {
    const data = await fetchJson(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YT_CHANNEL_ID}&key=${YT_API_KEY}`,
      60 * 60 * 1000
    );
    if (data?.items?.[0]?.statistics?.subscriberCount) {
      ytSubscriberCount = parseInt(data.items[0].statistics.subscriberCount).toLocaleString();
      el.textContent = `${ytSubscriberCount} ${t[lang].contact.subscribers}`;
    } else {
      el.textContent = '—';
    }
  } catch {
    el.textContent = '—';
  }
}

// ---- GitHub Graph ----
const GH_PALETTE = [
  'transparent',
  'rgba(124,58,237,0.25)',
  'rgba(124,58,237,0.65)',
  '#7c3aed',
  '#8b5cf6',
];
const GH_LEVELS = ['NONE', 'FIRST_QUARTILE', 'SECOND_QUARTILE', 'THIRD_QUARTILE', 'FOURTH_QUARTILE'];

async function fetchGhGraph() {
  const container = $('ghGraph');
  if (!container) return;

  const TO = new Date();
  const FROM = new Date(TO);
  FROM.setDate(FROM.getDate() - 118);
  TO.setHours(23, 59, 59, 999);

  try {
    const years = [...new Set([FROM.getFullYear(), TO.getFullYear()])];
    const all = await Promise.all(years.map((y) =>
      fetchJson(`https://github-contributions-api.jogruber.de/v4/LioExp?y=${y}`, 60 * 60 * 1000)
    ));
    const days = all
      .flatMap((d) => d.contributions || [])
      .filter((d) => {
        const t = new Date(d.date + 'T00:00:00');
        return t >= FROM && t <= TO;
      })
      .sort((a, b) => a.date.localeCompare(b.date));

    // Group days into Sunday–Saturday columns like GitHub
    const weeks = [];
    let week = [];
    for (const day of days) {
      const dow = new Date(day.date + 'T00:00:00').getDay();
      if (week.length === 0 && dow !== 0) {
        week = Array(dow).fill(null);
      }
      week.push(day);
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }
    if (week.length) {
      while (week.length < 7) week.push(null);
      weeks.push(week);
    }

    // Body: weeks only
    let bodyHtml = '<div class="gh-body">';
    bodyHtml += '<div class="gh-weeks">';
    for (const week of weeks) {
      bodyHtml += '<div class="gh-week">';
      for (const day of week) {
        if (!day) {
          bodyHtml += '<span class="gh-cell" style="background:transparent"></span>';
          continue;
        }
        let idx = typeof day.level === 'number' ? day.level : GH_LEVELS.indexOf(day.contributionLevel);
        if (idx < 0 || idx > 4) idx = 0;
        const color = GH_PALETTE[idx];
        bodyHtml += `<span class="gh-cell" style="background:${color}" title="${day.date}: ${day.count} commit${day.count !== 1 ? 's' : ''}"></span>`;
      }
      bodyHtml += '</div>';
    }
    bodyHtml += '</div></div>';

    container.innerHTML = bodyHtml;
  } catch {
    container.innerHTML = '';
  }
}

// ---- Contact ----
function renderContactSection(data) {
  $('contactHeading').textContent = data.contact.heading;
  $('contactText').textContent = data.contact.subtext;
  $('briefingBtnText').textContent = briefingOpen ? data.contact.briefingToggleOpen : data.contact.briefingToggleClosed;
  const arrow = document.querySelector('.arrow-toggle');
  if (arrow) arrow.classList.toggle('open', briefingOpen);
  $('whereLabel').textContent = data.contact.whereLabel;

  renderYtCards(data);
  renderSocialList(data);
  renderDiscordCard(data);
  renderBriefing(data);
}

function renderYtCards(data) {
  const subsText = ytSubscriberCount
    ? `${ytSubscriberCount} ${data.contact.subscribers}`
    : (YT_API_KEY ? '⋯' : '—');

  $('ytGrid').innerHTML = `
    <a href="https://youtube.com/@lioexp" target="_blank" rel="noopener noreferrer" class="yt-card" data-testid="link-contact-yt-pt" aria-label="YouTube PT" title="YouTube PT">
      <div class="yt-icon">${icons.yt}</div>
      <div class="yt-info">
        <div class="yt-title"><span class="yt-lang yt-subs" id="ytSubsPt">${subsText}</span></div>
        <p class="yt-desc">${data.contact.ytPTdesc}</p>
        <div class="yt-footer"><span class="yt-handle">@lioexp →</span></div>
      </div>
    </a>
    <a href="https://youtube.com/@lioexp-en" target="_blank" rel="noopener noreferrer" class="yt-card" data-testid="link-contact-yt-en" aria-label="YouTube EN" title="YouTube EN">
      <div class="yt-icon">${icons.yt}</div>
      <div class="yt-info">
        <div class="yt-title"><span class="yt-lang">EN</span></div>
        <p class="yt-desc">${data.contact.ytENdesc}</p>
        <div class="yt-footer"><span class="yt-handle">@lioexp-en →</span></div>
      </div>
    </a>`;

  fetchYtSubscriberCount();
}

function renderSocialList(data) {
  $('socialList').innerHTML = data.contact.socials.map(s =>
    `<a href="${s.href}" target="${s.href.startsWith('mailto') ? '' : '_blank'}" rel="noopener noreferrer" class="social-item" data-testid="${s.testid}">
      <div><span class="social-name">${s.label}</span><p class="social-sub">${s.sub}</p></div>
      <span class="social-handle">${s.handle} →</span>
    </a>`
  ).join('');
}

function renderDiscordCard(data) {
  const d = data.contact.discord;
  $('discordCard').innerHTML = `
    <a href="${d.href}" target="_blank" rel="noopener noreferrer" class="yt-card" aria-label="${d.name}" title="${d.name}">
      <div class="yt-icon discord-icon">${icons.discord}</div>
      <div class="yt-info">
        <p class="yt-desc">${d.desc}</p>
        <div class="yt-footer"><span class="yt-handle">${d.handle} →</span></div>
      </div>
    </a>`;
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
    <a href="mailto:lioexp0@gmail.com?subject=${encodeURIComponent(data.contact.mailtoSubject)}" class="briefing-email">${data.contact.sendEmail}</a>
  </div>`;
}

// ---- Footer ----
function renderFooter(data) {
  $('footer').innerHTML = `
    <div class="footer-inner">
      <p class="footer-tagline">~ ${data.contact.footer.tagline}</p>
      <button class="verse-btn" data-verse>${data.contact.footer.colossians}</button>
      <p class="verse-full" id="verseFull">"${data.contact.footer.verse}" — ${data.contact.footer.colossians}</p>
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
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', t[lang].setup.modalHeading);
  const data = t[lang];
  overlay.innerHTML = `
    <div class="setup-modal">
      <button class="setup-modal-close" data-close-modal aria-label="Fechar">×</button>
      <div class="setup-modal-content">
        <div class="setup-modal-image"><img src="assets/setup-2026.jpg" alt="Setup 2026" draggable="false" loading="lazy" /></div>
        <div class="setup-modal-items">
          <p class="setup-modal-heading">${data.setup.modalHeading}</p>
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
  lastFocused = document.activeElement;
  trapFocus(overlay);
  overlay.querySelector('.setup-modal-close').focus();
}

function closeSetupModal() {
  const modal = $('setupModal');
  if (!modal) return;
  modal.classList.remove('open');
  document.documentElement.style.overflow = '';
  document.removeEventListener('keydown', closeOnEscape);
  untrapFocus();
  setTimeout(() => modal.remove(), 300);
  if (lastFocused) lastFocused.focus();
}

function closeOnEscape(e) {
  if (e.key === 'Escape') closeSetupModal();
}

function trapFocus(root) {
  const focusables = () => [...root.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(el => el.offsetParent !== null);
  const onKey = (e) => {
    if (e.key !== 'Tab') return;
    const items = focusables();
    if (!items.length) { e.preventDefault(); return; }
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };
  root.addEventListener('keydown', onKey);
  root.dataset.focusTrap = '1';
  root._trapKey = onKey;
}

function untrapFocus(root) {
  const r = $('setupModal');
  if (r && r._trapKey) r.removeEventListener('keydown', r._trapKey);
}

// =============================================
// State Mutators
// =============================================
function toggleProject(name) {
  openProjects[name] = !openProjects[name];
  renderProjects();
}

function toggleBriefing() {
  briefingOpen = !briefingOpen;
  renderContact();
}

function switchLang(l) {
  lang = l;
  localStorage.setItem('lang', l);
  document.documentElement.lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  render();
  fetchYtFeed();
  fetchGhGraph();
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
