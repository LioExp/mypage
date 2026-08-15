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
      filters: { domino: 'domino', aprender: 'a aprender', roadmap: 'roadmap' },
      categories: [
        { id: 'dev', label: 'DEV', desc: 'ferramentas de construção', domino: ['Python', 'Bash', 'CLI design', 'Git'], aprender: ['Rust', 'APIs REST'], roadmap: ['WASM', 'sistemas distribuídos'] },
        { id: 'linux', label: 'LINUX & INFRA', desc: 'o ambiente onde tudo corre', domino: ['Arch Linux', 'terminal workflow'], aprender: ['systemd', 'cron', 'iptables'], roadmap: ['containers', 'CI/CD'] },
        { id: 'networking', label: 'NETWORKING', desc: 'entender antes de proteger', domino: ['redes locais'], aprender: ['TCP/IP profundo', 'DNS', 'tshark'], roadmap: [] },
        { id: 'security', label: 'SEGURANÇA', desc: 'o destino', domino: [], aprender: ['OWASP Top 10', 'Burp Suite', 'prompt injection'], roadmap: ['Security+', 'Purple team', 'IA security'] }
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
      filters: { domino: 'mastered', aprender: 'learning', roadmap: 'roadmap' },
      categories: [
        { id: 'dev', label: 'DEV', desc: 'building tools', domino: ['Python', 'Bash', 'CLI design', 'Git'], aprender: ['Rust', 'REST APIs'], roadmap: ['WASM', 'distributed systems'] },
        { id: 'linux', label: 'LINUX & INFRA', desc: 'the environment where everything runs', domino: ['Arch Linux', 'terminal workflow'], aprender: ['systemd', 'cron', 'iptables'], roadmap: ['containers', 'CI/CD'] },
        { id: 'networking', label: 'NETWORKING', desc: 'understand before protecting', domino: ['local networks'], aprender: ['deep TCP/IP', 'DNS', 'tshark'], roadmap: [] },
        { id: 'security', label: 'SECURITY', desc: 'the destination', domino: [], aprender: ['OWASP Top 10', 'Burp Suite', 'prompt injection'], roadmap: ['Security+', 'Purple team', 'AI security'] }
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

const FEATHER = {
  terminal: '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>',
  zap: '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
  server: '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>',
  wind: '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>',
  clock: '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
  shield: '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
  shieldPlus: '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><line x1="12" y1="8" x2="12" y2="14"></line><line x1="9" y1="11" x2="15" y2="11"></line></svg>',
  repeat: '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>',
  layers: '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
  globe: '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
  message: '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
  users: '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
};

const SKILL_ICONS = {
  'Python': TECH_ICONS['Python'],
  'Rust': TECH_ICONS['Rust'],
  'CLI design': TECH_ICONS['CLI'],
  'redes locais': TECH_ICONS['Networking'],
  'local networks': TECH_ICONS['Networking'],
  'IA security': TECH_ICONS['AI'],
  'AI security': TECH_ICONS['AI'],
  'Bash': FEATHER.terminal,
  'terminal workflow': FEATHER.terminal,
  'Git': '<svg class="tech-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>',
  'Arch Linux': '<svg class="tech-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M11.39.605C10.376 3.092 9.764 4.72 8.635 7.132c.693.734 1.543 1.589 2.923 2.554-1.484-.61-2.496-1.224-3.252-1.86C6.86 10.842 4.596 15.138 0 23.395c3.612-2.085 6.412-3.37 9.021-3.862a6.61 6.61 0 01-.171-1.547l.003-.115c.058-2.315 1.261-4.095 2.687-3.973 1.426.12 2.534 2.096 2.478 4.409a6.52 6.52 0 01-.146 1.243c2.58.505 5.352 1.787 8.914 3.844-.702-1.293-1.33-2.459-1.929-3.57-.943-.73-1.926-1.682-3.933-2.713 1.38.359 2.367.772 3.137 1.234-6.09-11.334-6.582-12.84-8.67-17.74z"/></svg>',
  'systemd': FEATHER.wind,
  'cron': FEATHER.clock,
  'iptables': FEATHER.shield,
  'containers': '<svg class="tech-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/></svg>',
  'CI/CD': FEATHER.repeat,
  'TCP/IP profundo': FEATHER.layers,
  'deep TCP/IP': FEATHER.layers,
  'DNS': FEATHER.globe,
  'tshark': '<svg class="tech-icon" viewBox="0 0 24 24" fill="currentColor"><path d="m2.95 0c-1.62 0-2.95 1.32-2.95 2.95v18.1c0 1.63 1.32 2.95 2.95 2.95h18.1c1.62 0 2.95-1.32 2.95-2.95v-18.1c-.00024-1.63-1.32-2.95-2.95-2.95zm0 1.09h18.1c1.04 0 1.85.818 1.85 1.86v14h-5.27c-.335-.796-2.57-6.47.283-10.9a.516.517 0 00-.443-.794c-5.24.0827-8.2 3.19-9.74 6.21-1.35 2.64-1.63 4.91-1.69 5.53h-4.95v-14c0-1.04.817-1.86 1.85-1.86zm13.6 5.24c-2.62 5.24.248 11.4.248 11.4a.516.517 0 00.469.301h5.62v3.05c0 1.04-.817 1.86-1.85 1.86h-18.1c-1.04 0-1.85-.818-1.85-1.86v-3.05h5.39a.516.517 0 00.514-.477s.226-2.8 1.66-5.62c1.34-2.62 3.67-5.17 7.91-5.57z"/></svg>',
  'OWASP Top 10': '<svg class="tech-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M15.897 20.503c-.384 0-1.782-2.489-1.97-3.198-.393-1.486-.308-2.114-.285-2.314.072-.613.667-.92.703-1.748.01-.256.14-1.535.243-2.534a1.723 1.723 0 01-.733-.343c.676.908-.32 1.995-1.767 3.443-1.536 1.536-4.945 2.961-4.945 2.961s1.425-3.41 2.961-4.945c1.13-1.129 2.04-1.983 2.816-1.983.22 0 .427.067.627.216a1.722 1.722 0 01-.343-.733c-.999.103-2.278.232-2.534.244-.829.036-1.135.63-1.747.702-.07.008-.194.024-.388.024-.36 0-.963-.054-1.926-.31-.772-.203-3.648-1.84-3.14-2.045.26-.105 1.087-.176 2.175-.176 1.047 0 2.337.066 3.596.23 1.57.205 3.01.463 3.992.656.016-.053.035-.104.058-.154l-1.004-.48s-.8-.92-.715-.984a.02.02 0 01.012-.003c.126 0 .767.733.829.816l.605.202-.284-.249s-.388-1.438-.287-1.472h.004c.106 0 .459 1.25.489 1.34.07.06.303.152.596.32l-.308-.79s.14-1.305.243-1.305h.003c.105.021-.02 1.089-.047 1.221l.51.783a1.31 1.31 0 01.463-.082c.184 0 .374.036.558.107-.236-.502-.218-1.025.095-1.338a.84.84 0 01.353-.209.462.462 0 01.457-.383c.127 0 .254.05.352.148a.497.497 0 01.147.335c.151-.311.329-.73.317-.867-.03-.307-.386-.852-.39-.857a.076.076 0 01.064-.119c.025 0 .05.012.064.035.016.023.381.582.414.927.018.198-.21.696-.333.95a2.227 2.227 0 01.873.874c.245-.12.715-.334.927-.334l.024.001c.345.033.904.399.927.414a.076.076 0 01-.084.128c-.005-.004-.55-.36-.857-.39h-.015c-.15 0-.552.171-.852.317.12.004.242.053.335.147a.482.482 0 01.012.681.459.459 0 01-.247.128.845.845 0 01-.21.354.924.924 0 01-.67.255c-.212 0-.441-.055-.667-.16.132.343.142.708.025 1.02l.783.51c.095-.019.666-.088.993-.088.13 0 .222.011.228.04.02.106-1.305.247-1.305.247l-.79-.308c.168.293.26.527.32.596.091.03 1.374.392 1.34.493-.004.012-.026.017-.063.017-.283 0-1.41-.304-1.41-.304l-.248-.284.202.605c.087.065.876.755.813.841-.004.005-.009.007-.016.007-.139 0-.967-.722-.967-.722l-.481-1.004a1.18 1.18 0 01-.154.058c.193.982.451 2.422.656 3.992.335 2.569.26 5.261.054 5.77-.016.041-.042.06-.076.06M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12m0-22.153C6.393 1.847 1.847 6.393 1.847 12S6.393 22.153 12 22.153 22.153 17.607 22.153 12 17.607 1.847 12 1.847Z"/></svg>',
  'Burp Suite': '<svg class="tech-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0v24h24V0Zm11.063 3.357h1.874v2.756L10.41 9.2h2.527v3.748h4.579l-4.578 5.592v2.104h-1.876v-2.758l2.528-3.086h-2.527V11.05h-4.58l4.58-5.592Z"/></svg>',
  'prompt injection': FEATHER.message,
  'WASM': '<svg class="tech-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M14.745,0c0,0.042,0,0.085,0,0.129c0,1.52-1.232,2.752-2.752,2.752c-1.52,0-2.752-1.232-2.752-2.752 c0-0.045,0-0.087,0-0.129H0v24h24V0H14.745z M11.454,21.431l-1.169-5.783h-0.02l-1.264,5.783H7.39l-1.824-8.497h1.59l1.088,5.783 h0.02l1.311-5.783h1.487l1.177,5.854h0.02l1.242-5.854h1.561l-2.027,8.497H11.454z M20.209,21.431l-0.542-1.891h-2.861l-0.417,1.891 h-1.59l2.056-8.497h2.509l2.5,8.497H20.209z M17.812,15.028l-0.694,3.118h2.159l-0.796-3.118H17.812z"/></svg>',
  'sistemas distribuídos': FEATHER.server,
  'distributed systems': FEATHER.server,
  'Security+': FEATHER.shieldPlus,
  'Purple team': FEATHER.users,
  'APIs REST': FEATHER.zap,
  'REST APIs': FEATHER.zap,
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

function renderSkillCategories(data) {
  $('skillsCategories').innerHTML = data.skills.categories.map(cat => {
    const items = [...cat.domino, ...cat.aprender, ...cat.roadmap];
    if (!items.length) return '';

    return `<div class="skill-area">
      <div class="skill-area-head">
        <p class="cat-label">${cat.label}</p>
        <p class="cat-desc">${cat.desc}</p>
      </div>
      <div class="skill-items">${items.map(s => {
        const icon = SKILL_ICONS[s] || '';
        return `<span class="skill-item" title="${s}" aria-label="${s}">${icon}</span>`;
      }).join('')}</div>
    </div>`;
  }).join('');
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
