// =============================================
// I18n Data
// =============================================
const t = {
  pt: {
    nav: ['inicio', 'sobre', 'projectos', 'skills', 'setup', 'contacto'],
    navIds: ['inicio', 'sobre', 'projectos', 'skills', 'setup', 'contacto'],
    hero: { tagline: '~ build. break. document.', age: '18 anos.', roles: 'Builder · Programmer · Experimentador', motto: 'Eu sou o experimento.', cta: 'ver projectos' },
    about: { label: 'SOBRE', heading: ['Builder que ', 'constrói', ', quebra e documenta tudo em público.'], cbpTitle: 'CBP Framework', cbpText: 'Trabalho com um framework simples — Create, Break, Protect. Construo uma coisa, tento destruí-la, e documento tudo. O processo é público porque aprender em privado desperdiça metade do valor.', nowTitle: 'Agora', nowText: 'Estou em Luanda. Hardware modesto, internet instável, escola de tarde. É o ambiente onde tudo o que construo tem de funcionar — por enquanto.', whyTitle: 'Porquê', whyText: 'Eu sou o experimento. Programação, segurança, neurociência, psicologia e arte não são áreas separadas — são lentes diferentes sobre o mesmo problema.', statsLabels: ['agora', 'idade', 'stack actual', 'foco 2026', 'a estudar', 'meta 2030'], statsValues: ['Luanda, Angola', '18 anos', 'Python · Linux · Networking', 'MyFi · KiandaBot', 'OWASP · Burp Suite', 'IA Security Eng.'], openTo: 'ABERTO PARA:', openTags: ['colaborações técnicas', 'projectos open source', 'feedback ao código', 'mentorias', 'oportunidades remotas'] },
    projects: {
      label: 'PROJECTOS', active: 'ACTIVOS', waiting: 'EM ESPERA', showMore: 'ver mais', showLess: 'ver menos',
      faber: { badge: 'a lançar', desc: 'Agente de código em Rust para terminal. 100% offline-first e otimizado para correr LLMs locais com baixo consumo de hardware.', why: 'Porquê existe', whyText: 'As ferramentas de IA para código assumem que tens fibra, uma conta paga e hardware recente. FABER não assume nada disso. Foi construído para funcionar no mesmo ambiente onde tudo o resto tem de funcionar — hardware modesto, internet instável, sem subscrição mensal.', how: 'Como funciona', howText: 'Corre um modelo quantizado localmente via llama.cpp. Sem cloud, sem tokens, sem rate limits. O agente lê o contexto do projecto, sugere código, executa comandos e aprende com o feedback directo no terminal. Tudo em Rust para manter o overhead mínimo.', status: 'Estado actual', statusItems: ['Core em Rust funcional', 'Integração llama.cpp estável', 'CLI básica operacional', 'Testes em hardware de 4GB RAM', 'Documentação e landing em progresso'], who: 'Para quem', whoText: 'Developers em mercados emergentes. Quem usa Raspberry Pi como máquina principal. Quem não quer depender de subscrições para ter um agente de código funcional.' },
      myfi: { badge: 'activo', desc: 'Plataforma modular de observabilidade e segurança de rede. Scan de dispositivos, tráfego em tempo real e arquitetura de Chunks.', problem: 'O problema', problemText: 'A maioria das pessoas partilha a rede sem saber o que está ligado, para onde os dados vão, ou quem está a consumir mais largura de banda. As ferramentas que existem ou são complexas demais (Wireshark) ou não dão controlo real sobre a rede.<br><br>MyFi nasceu para responder a isto: visibilidade total, controlo granular e uma arquitetura que permite instalar apenas o que precisas.', features: 'Funcionalidades Core', featureItems: ['Scan contínuo de dispositivos na rede local (ARP)', 'Monitorização de tráfego em tempo real (Live Stream) e em background', 'Definição de limites de consumo por dispositivo, com alertas Telegram', 'CLI interativa com tema personalizado, autocompletar e modo shell', 'Dashboard web com gráfico de tráfego, topologia de rede e KPIs'], extraLabel: 'Funcionalidades Extra (Chunks)', extraItems: ['GeoLocate — geolocaliza o tráfego externo (país, cidade, ISP)', 'PhoneIntel — analisa números de telefone (operadora, validade, deep scan)', 'UsernameIntel — verifica onde um username está registado', 'Arquitetura de Chunks — instala e desinstala módulos sem mexer no Core'], v3: 'v3.0 — o que mudou', v3Text: 'A v2.0 já era uma CLI completa, mas a v3.0 reestruturou o projecto com uma arquitectura modular de verdade:<br>• Motor de Chunks (ChunkEngine) que orquestra workflows<br>• Protocolo "Drop-in Module" — cada Chunk vive na sua própria pasta com register_chunk()<br>• Comando myfi chunk install &lt;url&gt; para instalar módulos da comunidade<br>• Tema centralizado com rich e cores consistentes em toda a interface<br>• Modo shell interativo com histórico e autocompletar dinâmico', roadmap: 'Roadmap próximo', roadmapText: '• Integração com SIM Alert AO para alertas via SMS<br>• Suporte para Windows e Android (PWA)<br>• Modo Guardião — controlo de acesso inteligente (NAC local)<br>• Expansão do ecossistema de Chunks da comunidade' },
      kianda: { badge: 'em planeamento', desc: 'Agente de vendas e automação com IA para pequenos negócios. Atendimento inteligente 24/7 direto no WhatsApp via Evolution API.', context: 'O contexto', contextText: 'Em Luanda, grande parte do comércio informal passa pelo WhatsApp. Pequenos negócios respondem a centenas de mensagens por dia, manualmente, muitas vezes perdendo vendas por demora ou ausência. KiandaBot entra nessa lacuna.', how: 'Como funciona', howText: 'Conecta ao WhatsApp Business via Evolution API. O comerciante configura catálogo, preços e respostas padrão. O bot gere consultas, confirma stock, calcula preços e encaminha apenas o que precisa de intervenção humana.', diff: 'Diferencial', diffItems: ['Sem broadcast ou spam — só resposta a quem pergunta', 'Contexto de conversa preservado por cliente', 'Configuração simples sem código para o comerciante', 'Funciona com conexão instável', 'Transferência suave para humano quando necessário'], vision: 'Visão', visionText: 'Um piloto com 3–5 negócios reais em Luanda para validar o modelo. Se funcionar, escala para outros mercados lusófonos com a mesma dinâmica informal.' },
      waitingProjects: [{ name: "SIM Alert AO", desc: "Alertas silenciosos por tempo de dados na rede", href: null }, { name: "FileFlow", desc: "Transferência e automação de ficheiros locais", href: "https://github.com/LioExp/File-flow-assistant" }, { name: "Rocket", desc: "Construção API inteligente com IA. Alta 2030.", href: null }]
    },
    skills: {
      label: 'SKILLS', heading: 'Onde estou no mapa.', 
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
      label: 'SETUP', heading: 'Onde construo.',
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
      label: 'CONTACTO', heading: 'Fala comigo.', subtext: 'Prefiro e-mail. Respondo a tudo que vale uma resposta.',
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
    about: { label: 'ABOUT', heading: ['Builder who ', 'builds', ', breaks and documents everything in public.'], cbpTitle: 'CBP Framework', cbpText: 'I work with a simple framework — Create, Break, Protect. I build something, try to break it, and document everything. The process is public because learning in private wastes half the value.', nowTitle: 'Now', nowText: "I'm in Luanda. Modest hardware, unstable internet, afternoon school. This is the environment where everything I build has to work — for now.", whyTitle: 'Why', whyText: 'I am the experiment. Programming, security, neuroscience, psychology and art aren\'t separate fields — they\'re different lenses on the same problem.', statsLabels: ['now', 'age', 'current stack', '2026 focus', 'studying', '2030 goal'], statsValues: ['Luanda, Angola', '18 years old', 'Python · Linux · Networking', 'MyFi · KiandaBot', 'OWASP · Burp Suite', 'AI Security Eng.'], openTo: 'OPEN TO:', openTags: ['technical collaborations', 'open source projects', 'code feedback', 'mentorships', 'remote opportunities'] },
    projects: {
      label: 'PROJECTS', active: 'ACTIVE', waiting: 'ON HOLD', showMore: 'show more', showLess: 'show less',
      faber: { badge: 'launching', sub: 'Phase 0 — imminent launch', desc: 'Rust code agent for the terminal. 100% offline-first and optimized to run local LLMs with minimal hardware overhead.', why: 'Why it exists', whyText: 'AI coding tools assume you have fibre, a paid account and recent hardware. FABER assumes none of that. It was built to work in the same environment where everything else has to work — modest hardware, unstable internet, no monthly subscription.', how: 'How it works', howText: 'Runs a quantized model locally via llama.cpp. No cloud, no tokens, no rate limits. The agent reads the project context, suggests code, executes commands and learns from direct feedback in the terminal. All in Rust to keep overhead minimal.', status: 'Current status', statusItems: ['Rust core functional', 'Stable llama.cpp integration', 'Basic CLI operational', 'Tested on 4GB RAM hardware', 'Documentation and landing in progress'], who: 'Who it\'s for', whoText: 'Developers in emerging markets. Those using Raspberry Pi as their main machine. Those who don\'t want to depend on subscriptions to have a functional code agent.' },
      myfi: { badge: 'active', desc: 'Modular network observability and security platform. Device scanning, live traffic monitoring and Chunk architecture.', problem: 'The problem', problemText: 'Most people share networks without knowing what\'s connected, where the data goes, or who\'s consuming the most bandwidth. Existing tools are either too complex (Wireshark) or don\'t give real control over the network.<br><br>MyFi was built to answer this: total visibility, granular control and an architecture that lets you install only what you need.', features: 'Core Features', featureItems: ['Continuous ARP scan of local network devices', 'Real-time traffic monitoring (Live Stream) and background capture', 'Per-device bandwidth limits with Telegram alerts', 'Interactive CLI with custom theme, autocomplete and shell mode', 'Web dashboard with traffic graph, network topology and KPIs'], extraLabel: 'Extra Features (Chunks)', extraItems: ['GeoLocate — geolocate external traffic (country, city, ISP)', 'PhoneIntel — analyze phone numbers (carrier, validity, deep scan)', 'UsernameIntel — check where a username is registered', 'Chunk Architecture — install and uninstall modules without touching Core'], v3: 'v3.0 — what changed', v3Text: 'v2.0 was already a complete CLI, but v3.0 restructured the project with a true modular architecture:<br>• ChunkEngine that orchestrates workflows<br>• "Drop-in Module" protocol — each Chunk lives in its own folder with register_chunk()<br>• myfi chunk install &lt;url&gt; command to install community modules<br>• Centralized theme with rich and consistent colors across the entire UI<br>• Interactive shell mode with history and dynamic autocomplete', roadmap: 'Next roadmap', roadmapText: '• Integration with SIM Alert AO for SMS alerts<br>• Windows and Android (PWA) support<br>• Guardian Mode — smart access control (local NAC)<br>• Community Chunk ecosystem expansion' },
      kianda: { badge: 'planning', desc: 'AI sales and automation agent for small businesses. Smart 24/7 automated support directly on WhatsApp via Evolution API.', context: 'The context', contextText: 'In Luanda, much of informal commerce runs through WhatsApp. Small businesses respond to hundreds of messages per day, manually, often losing sales due to delays or absence. KiandaBot fills that gap.', how: 'How it works', howText: 'Connects to WhatsApp Business via Evolution API. The merchant configures catalogue, prices and default responses. The bot handles queries, confirms stock, calculates prices and routes only what needs human intervention.', diff: 'What makes it different', diffItems: ['No broadcast or spam — only replies to those who ask', 'Conversation context preserved per customer', 'Simple no-code setup for the merchant', 'Works with unstable connections', 'Smooth handoff to human when needed'], vision: 'Vision', visionText: 'A pilot with 3–5 real businesses in Luanda to validate the model. If it works, scale to other Lusophone markets with the same informal dynamic.' },
      waitingProjects: [{ name: "SIM Alert AO", desc: "Silent alerts for mobile data time on the network", href: null }, { name: "FileFlow", desc: "Local file transfer and automation", href: "https://github.com/LioExp/File-flow-assistant" }, { name: "Rocket", desc: "AI-powered smart API builder. ETA 2030.", href: null }]
    },
    skills: {
      label: 'SKILLS', heading: 'Where I am on the map.',
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
      label: 'SETUP', heading: 'Where I build.',
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
      label: 'CONTACT', heading: 'Talk to me.', subtext: 'I prefer email. I reply to everything worth a reply.',
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
const FILTER_COLORS = { domino: '#22c55e', aprender: '#60a5fa', roadmap: '#6b7280' };
const SKILL_LEVELS = ['domino', 'aprender', 'roadmap'];
const YT_FEED_LIMIT = 12;
const YT_SCROLL_SPEED = 0.6;

// =============================================
// State
// =============================================
let lang = localStorage.getItem('lang') || 'pt';
let openProjects = {};
let skillFilter = null;
let briefingOpen = false;
let ytSubscriberCount = null;
let ytAnimId = null;
let ytPaused = false;

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

function hexToRgba(hex, alpha) {
  const v = parseInt(hex.slice(1), 16);
  return `rgba(${v >> 16},${(v >> 8) & 255},${v & 255},${alpha})`;
}

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

const TECH_ICONS = {
  'Rust': '<svg class="tech-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 1.5a8.5 8.5 0 110 17 8.5 8.5 0 010-17zm-1.8 4.7h2.2c1.3 0 2 .6 2 1.6 0 .8-.5 1.3-1.2 1.5l1.4 2.2h-1.4l-1.2-2H11.4v2h-1.2V8.2zm1.2 2.1h.9c.6 0 .9-.3.9-.6s-.3-.6-.9-.6h-.9v1.2z"/></svg>',
  'Python': '<svg class="tech-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M11.927 0C5.97 0 6.347 2.58 6.347 2.58l.006 2.668h5.666v.8H3.882s-3.882.443-3.882 5.922c0 5.48 3.39 5.297 3.39 5.297h2.023v-2.836s-.11-3.39 3.328-3.39h5.71s3.21-.05 3.21-3.155V2.58S17.94 0 11.927 0zM8.7 1.808a.95.95 0 110 1.9.95.95 0 010-1.9zm3.373 22.192c5.957 0 5.58-2.58 5.58-2.58l-.006-2.668h-5.666v-.8h8.137s3.882-.443 3.882-5.922c0-5.48-3.39-5.297-3.39-5.297h-2.023v2.836s.11 3.39-3.328 3.39h-5.71s-3.21.05-3.21 3.155v5.305s-.273 2.58 5.74 2.58zm3.227-1.808a.95.95 0 110-1.9.95.95 0 010-1.9z"/></svg>',
  'CLI': '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>',
  'Linux': '<svg class="tech-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12.002 0c-3.154 0-5.71 2.556-5.71 5.71 0 1.258.411 2.417 1.103 3.364C6.51 10.158 6 11.758 6 13.5c0 .647.076 1.274.218 1.875-.765.733-1.22 1.76-1.22 2.875 0 2.21 1.79 4 4 4 .432 0 .843-.07 1.228-.198 1.18.604 2.528.948 3.96.948 1.433 0 2.78-.344 3.96-.948.385.128.796.198 1.228.198 2.21 0 4-1.79 4-4 0-1.115-.455-2.142-1.22-2.875.142-.601.218-1.228.218-1.875 0-1.742-.51-3.342-1.395-4.426.692-.947 1.103-2.106 1.103-3.364C21.688 2.556 19.132 0 15.978 0h-3.976zm-1.5 5a1 1 0 110 2 1 1 0 010-2zm5 0a1 1 0 110 2 1 1 0 010-2z"/></svg>',
  'Networking': '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><circle cx="12" cy="20" r="1"></circle></svg>',
  'Cybersecurity': '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
  'llama.cpp': '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
  'LLM local': '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>',
  'AI': '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"></path></svg>',
  'WhatsApp': '<svg class="tech-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.12 8.12 0 01-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.71 4.3 3.79.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.17-.48-.3z"/></svg>',
  'Evolution API': '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4"></path><path d="M12 3v7"></path><path d="m9 7 3 3 3-3"></path><path d="M12 21v-3"></path></svg>',
};

function renderProjectCard(p, data) {
  const pr = data.projects[p.key];
  const isOpen = openProjects[p.id];

  return `<div class="project-card${isOpen ? ' is-open' : ''}">
    ${projectPreview(p)}
    <div class="project-content">
      ${projectHeader(p, pr)}
      <p class="project-sub">${pr.sub}</p>
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
  $('skillsLabel').textContent = data.skills.label;
  $('skillsHeading').textContent = data.skills.heading;
  $('skillsSub').textContent = data.skills.subheading;

  renderFilterPills(data);
  renderSkillCategories(data);
  renderRoadmap(data);
}

function renderFilterPills(data) {
  $('filterPills').innerHTML = SKILL_LEVELS.map(f => {
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

    const groups = SKILL_LEVELS.map(key => {
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
    const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCZIZwWoayEW1CXxqE0TwyLQ');
    const data = await res.json();
    if (data.status !== 'ok' || !data.items?.length) { fallback(); return; }
    const items = data.items.slice(0, YT_FEED_LIMIT);
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
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YT_CHANNEL_ID}&key=${YT_API_KEY}`
    );
    const data = await res.json();
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
  renderDiscordCard(data);
  renderBriefing(data);
}

function renderYtCards(data) {
  const subsText = ytSubscriberCount
    ? `${ytSubscriberCount} ${data.contact.subscribers}`
    : (YT_API_KEY ? '⋯' : '—');

  $('ytGrid').innerHTML = `
    <a href="https://youtube.com/@lioexp" target="_blank" rel="noopener noreferrer" class="yt-card" data-testid="link-contact-yt-pt">
      <div class="yt-icon">${icons.yt}</div>
      <div class="yt-info">
        <div class="yt-title"><span class="yt-name">YouTube PT</span><span class="yt-lang yt-subs" id="ytSubsPt">${subsText}</span></div>
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
    <a href="${d.href}" target="_blank" rel="noopener noreferrer" class="yt-card">
      <div class="yt-icon discord-icon">${icons.discord}</div>
      <div class="yt-info">
        <div class="yt-title"><span class="yt-name">${d.name}</span></div>
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
    <a href="mailto:lioexp0@gmail.com?subject=Briefing — Colaboração" class="briefing-email">${data.contact.sendEmail}</a>
  </div>`;
}

// ---- Footer ----
function renderFooter(data) {
  $('footer').innerHTML = `
    <div class="footer-inner">
      <p class="footer-tagline">~ ${data.contact.footer.tagline}</p>
      <button class="verse-btn" data-verse>${data.contact.footer.colossians}</button>
      <p class="verse-full" id="verseFull">"${data.contact.footer.verse}" — Colossenses 3:23</p>
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
  renderProjects();
}

function toggleBriefing() {
  briefingOpen = !briefingOpen;
  renderContact();
}

function setFilter(f) {
  skillFilter = skillFilter === f ? null : f;
  renderSkills();
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
  fetchYtFeed();
  fetchGhGraph();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
});
