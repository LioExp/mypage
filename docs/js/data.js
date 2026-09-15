const t = {
  pt: {
    nav: ['inicio', 'sobre', 'projectos', 'skills', 'setup', 'contacto'],
    navIds: ['inicio', 'sobre', 'projectos', 'skills', 'setup', 'contacto'],
    hero: { tagline: '~ build. break. document.', age: '18 anos.', roles: 'Builder · Programmer · Experimentador', motto: 'Eu sou o experimento.', cta: 'ver projectos' },
    about: { heading: ['Builder que ', 'constrói', ', quebra e documenta tudo em público.'], displayTitle: ['about', 'me'], cbpText: 'Trabalho com um framework simples — Create, Break, Protect. Construo uma coisa, tento destruí-la, e documento tudo. O processo é público porque aprender em privado desperdiça metade do valor.', fullText: `<span class="about-text-line">Eu construo sistemas.</span><span class="about-text-line">Não só para fazer funcionar. Quero entender por que funciona, quanto custa e como pode ser quebrado. Sou builder e programador, e é isso que me move: descer abaixo da abstração, construir as minhas próprias soluções e descobrir até onde aguentam.</span><span class="about-text-line">É assim que aprendo: <strong>construindo</strong>. Python, Rust, Linux, networking, segurança e IA não são uma lista de tecnologias — são ferramentas diferentes para problemas diferentes. Alguns projetos começam como uma pergunta, outros como um problema real. O que sai disso é código, experimento, ferramenta e, principalmente, coisas que posso testar no mundo real.</span><span class="about-text-line"><a class="about-text-link" href="https://github.com/LioExp/Faber" target="_blank" rel="noopener noreferrer">FABER</a> <span aria-hidden="true">·</span> <a class="about-text-link" href="https://lioexp.github.io/MyFi/" target="_blank" rel="noopener noreferrer">MyFi</a> <span aria-hidden="true">·</span> <a class="about-text-link" href="https://kiandabot.vercel.app/" target="_blank" rel="noopener noreferrer">KiandaBot</a> <span aria-hidden="true">·</span> <a class="about-text-link" href="https://myroadmapp.vercel.app" target="_blank" rel="noopener noreferrer">MyRoadMapp</a></span><span class="about-text-line">Mas construir é só o começo.</span><span class="about-text-line">Depois quero saber onde quebra, quanto consome, quais são os limites, o que acontece quando alguém usa de uma forma que eu não esperava. Daí vem a minha forma de trabalhar: <span class="about-luanda">Create. Break. Protect.</span></span><span class="about-text-line">Não como etapas separadas, mas como um ciclo.</span><span class="about-text-line"><span class="about-luanda">Segurança, performance e eficiência</span> não entram no fim — fazem parte da construção desde o início.</span><span class="about-text-line">E essa forma de trabalhar nasceu de um contexto específico.</span><span class="about-text-line">Construo em <span class="about-luanda">Luanda</span> <a class="about-inline-link" href="https://www.google.com/maps/search/?api=1&query=Luanda%2C%20Angola" target="_blank" rel="noopener noreferrer" aria-label="Abrir Luanda no mapa" title="Abrir Luanda no mapa">${ABOUT_ICONS.pin}</a>, com hardware modesto <span class="about-inline-icon" aria-hidden="true">${ABOUT_ICONS.monitor}</span> e uma conexão que nem sempre colabora. Isso ensinou-me a prestar atenção ao que é fácil ignorar quando há recursos de sobra: RAM, CPU, armazenamento, latência, dependências, consumo.</span><span class="about-text-line">Quando os recursos são limitados, cada decisão importa. Deixei de ver isso apenas como limitação e passei a ver como parte do problema de engenharia.</span><span class="about-text-line">É esse problema que continuo a perseguir.</span><span class="about-text-line">Ainda estou construindo o caminho, e a direção é clara: entender sistemas cada vez mais profundamente e levar isso para a interseção entre segurança e inteligência artificial.</span><span class="about-text-line">Systems → Linux → Networking → Security → AI Security.</span><span class="about-text-line">Não é uma lista para aprender. São camadas que preciso de entender para chegar onde quero.</span><span class="about-text-line">Ainda há muito para construir, quebrar e aprender.</span><span class="about-text-line"><a class="about-inline-link" href="#skills" aria-label="Ver roadmap" title="Ver roadmap">→ ver roadmap</a></span>`, openTags: ['collab', 'open source'] },
    projects: {
      label: 'Projectos', heading: 'Projectos', active: 'ACTIVOS', waiting: 'EM ESPERA', showMore: 'ver mais', showLess: 'ver menos',
      faber: { badge: 'a lançar', sub: 'Fase 0 — lançamento iminente', desc: 'Agente de código em Rust para terminal. 100% offline-first e otimizado para correr LLMs locais com baixo consumo de hardware.', why: 'Porquê existe', whyText: 'As ferramentas de IA para código assumem que tens fibra, uma conta paga e hardware recente. FABER não assume nada disso. Foi construído para funcionar no mesmo ambiente onde tudo o resto tem de funcionar — hardware modesto, internet instável, sem subscrição mensal.', how: 'Como funciona', howText: 'Corre um modelo quantizado localmente via llama.cpp. Sem cloud, sem tokens, sem rate limits. O agente lê o contexto do projecto, sugere código, executa comandos e aprende com o feedback directo no terminal. Tudo em Rust para manter o overhead mínimo.', status: 'Estado actual', statusItems: ['Core em Rust funcional', 'Integração llama.cpp estável', 'CLI básica operacional', 'Testes em hardware de 4GB RAM', 'Documentação e landing em progresso'], who: 'Para quem', whoText: 'Developers em mercados emergentes. Quem usa Raspberry Pi como máquina principal. Quem não quer depender de subscrições para ter um agente de código funcional.' },
      myfi: { badge: 'activo', desc: 'Plataforma modular de observabilidade e segurança de rede. Scan de dispositivos, tráfego em tempo real e arquitetura de Chunks.', problem: 'O problema', problemText: 'A maioria das pessoas partilha a rede sem saber o que está ligado, para onde os dados vão, ou quem está a consumir mais largura de banda. As ferramentas que existem ou são complexas demais (Wireshark) ou não dão controlo real sobre a rede.<br><br>MyFi nasceu para responder a isto: visibilidade total, controlo granular e uma arquitetura que permite instalar apenas o que precisas.', features: 'Funcionalidades Core', featureItems: ['Scan contínuo de dispositivos na rede local (ARP)', 'Monitorização de tráfego em tempo real (Live Stream) e em background', 'Definição de limites de consumo por dispositivo, com alertas Telegram', 'CLI interativa com tema personalizado, autocompletar e modo shell', 'Dashboard web com gráfico de tráfego, topologia de rede e KPIs'], extraLabel: 'Funcionalidades Extra (Chunks)', extraItems: ['GeoLocate — geolocaliza o tráfego externo (país, cidade, ISP)', 'PhoneIntel — analisa números de telefone (operadora, validade, deep scan)', 'UsernameIntel — verifica onde um username está registado', 'Arquitetura de Chunks — instala e desinstala módulos sem mexer no Core'], v3: 'v3.0 — o que mudou', v3Text: 'A v2.0 já era uma CLI completa, mas a v3.0 reestruturou o projecto com uma arquitectura modular de verdade:<br>• Motor de Chunks (ChunkEngine) que orquestra workflows<br>• Protocolo "Drop-in Module" — cada Chunk vive na sua própria pasta com register_chunk()<br>• Comando myfi chunk install &lt;url&gt; para instalar módulos da comunidade<br>• Tema centralizado com rich e cores consistentes em toda a interface<br>• Modo shell interativo com histórico e autocompletar dinâmico', roadmap: 'Roadmap próximo', roadmapText: '• Integração com SIM Alert AO para alertas via SMS<br>• Suporte para Windows e Android (PWA)<br>• Modo Guardião — controlo de acesso inteligente (NAC local)<br>• Expansão do ecossistema de Chunks da comunidade' },
      kianda: { badge: 'em planeamento', desc: 'Agente de vendas e automação com IA para pequenos negócios. Atendimento inteligente 24/7 direto no WhatsApp via Evolution API.', context: 'O contexto', contextText: 'Em Luanda, grande parte do comércio informal passa pelo WhatsApp. Pequenos negócios respondem a centenas de mensagens por dia, manualmente, muitas vezes perdendo vendas por demora ou ausência. KiandaBot entra nessa lacuna.', how: 'Como funciona', howText: 'Conecta ao WhatsApp Business via Evolution API. O comerciante configura catálogo, preços e respostas padrão. O bot gere consultas, confirma stock, calcula preços e encaminha apenas o que precisa de intervenção humana.', diff: 'Diferencial', diffItems: ['Sem broadcast ou spam — só resposta a quem pergunta', 'Contexto de conversa preservado por cliente', 'Configuração simples sem código para o comerciante', 'Funciona com conexão instável', 'Transferência suave para humano quando necessário'], vision: 'Visão', visionText: 'Um piloto com 3–5 negócios reais em Luanda para validar o modelo. Se funcionar, escala para outros mercados lusófonos com a mesma dinâmica informal.' },
      myroadmapp: { badge: 'activo', desc: 'Roadmap vivo de aprendizagem para AI Security Engineer. Curadoria humana, sem paralisia por escolha — o próximo passo já foi decidido.', problem: 'O problema', problemText: 'A internet tem informação infinita, mas o verdadeiro problema nunca foi falta de conteúdo. É não saber o que estudar, em que ordem, e qual recurso escolher. Horas perdidas a pesquisar cursos e vídeos sem um caminho lógico.', how: 'Como funciona', howText: 'Um caminho estruturado de aprendizagem que evolui constantemente. Cada recurso é selecionado manualmente — se amanhã encontrar algo melhor, o roadmap melhora. Entra, aprende, avança.', features: 'Funcionalidades', featureItems: ['Roadmap estruturado com dependências e ordem de estudo', 'Curadoria humana — cada recurso foi validado na prática', 'Sem necessidade de conta para começar', 'Actualizações contínuas à medida que evolui', 'Exemplo: Redes → Linux → Python → Docker → LLM Security → AI Agents'], vision: 'Visão', visionText: 'Ninguém deveria perder centenas de horas só para descobrir o que estudar a seguir. O roadmap é o mesmo que uso diariamente — disponibilizado publicamente para quem quiser seguir o mesmo caminho.' },
      waitingProjects: [{ name: "SIM Alert AO", desc: "Alertas silenciosos por tempo de dados na rede", href: null }, { name: "FileFlow", desc: "Transferência e automação de ficheiros locais", href: "https://github.com/LioExp/File-flow-assistant" }]
    },
    skills: {
      heading: 'Onde estou no mapa.', subheading: 'o fruto da minha jornada.',
      categories: [
        { id: 'systems', label: 'SYSTEMS & OS', skills: ['Rust', 'Bash', 'Arch Linux', 'Debian'] },
        { id: 'backend', label: 'BACKEND & CLOUD', skills: ['Python', 'FastAPI', 'Containers', 'Git', 'WASM', 'SQLite', 'MySQL'] },
        { id: 'security', label: 'SECURITY', skills: ['OWASP Top 10', 'Burp Suite'] }
      ],
      roadmapLabel: 'ROADMAP', roadmapLinkLabel: 'ver o roadmap completo',
    },
    setup: {
      heading: 'Onde construo.',
      sub: 'onde tudo acontece.',
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
      ],
      article: {
        label: 'BUILD LOG',
        kicker: 'hardware / constraints',
        title: 'Construir com pouco também é construir',
        meta: '4 min de leitura · 02 SET 2026',
        excerpt: 'O que um Pentium antigo, 3.7 GiB de RAM e uma ligação instável me ensinaram sobre criar software.',
        body: [
          'O meu setup não foi escolhido para parecer impressionante. Foi escolhido porque é o que tenho — e porque ainda é suficiente para transformar ideias em coisas reais.',
          'Com 3.7 GiB de RAM, cada processo tem um custo. Aprendi a preferir ferramentas pequenas, a perceber o que corre em background e a escrever software que não depende de uma ligação perfeita para continuar útil.',
          'Isto muda a forma de construir. Em vez de começar pela tecnologia mais pesada, começo pela pergunta mais simples: qual é a menor versão que já resolve o problema?',
          'Limitações não tornam o trabalho menor. Tornam as decisões mais visíveis. E, às vezes, é exatamente aí que um produto começa a ficar bom.'
        ]
      },
      writing: {
        heading: 'Escrita recente',
        moreLabel: 'mais artigos',
        items: [
          { id: 'build-log', title: 'Construir com pouco também é construir', reading: '4 min', tags: ['Hardware', 'Processo'], date: '02 SET 2026' },
          { id: 'offline-first', title: 'Quando a internet falha, o produto precisa continuar', reading: '3 min', tags: ['Produto', 'Offline-first'], date: '28 AGO 2026' }
        ]
      }
    },
    contact: {
      heading: 'Fala comigo.', subtext: 'Prefiro e-mail. Respondo a tudo que vale uma resposta.',
      briefingToggleOpen: 'fechar briefing', briefingToggleClosed: 'como estruturar o teu e-mail',
      mailtoSubject: 'Briefing — Colaboração',
      briefingIntro: 'Se a ideia envolve publicidade, parceria, software, projecto especial ou qualquer acção em que marca e repertório técnico precisem andar juntos, este é o canal principal.',
      briefingListLabel: 'Um bom briefing tem',
      briefingItems: ['Objectivo da campanha', 'Produto ou link principal', 'Janela de publicação', 'Formato desejado', 'Mensagens obrigatórias', 'Faixa de orçamento', 'Necessidade de uso de imagem, direitos ou whitelisting'],
      fastestWayLabel: 'Forma mais rápida', fastestWayText: 'Mandar contexto, link do produto, prazo e expectativa comercial no mesmo e-mail acelera bastante a resposta.',
      sendEmail: 'enviar e-mail agora',
      whereLabel: 'Onde me encontras',
      ytPTdesc: 'Vídeos longos. Builds, documentação de projectos, processo em aberto.',
      ytENdesc: 'Shorts. Quick takes, demos rápidas, audiência internacional.',
      subscribers: 'inscritos',
      socials: [
        { label: 'X / Twitter', icon: 'x', sub: 'pensamentos, updates, threads técnicas', handle: '@lioexp', href: 'https://x.com/lioexp', testid: 'link-contact-x' },
        { label: 'LinkedIn', icon: 'linkedin', sub: 'rede profissional, colaborações formais', handle: 'in/lioexp', href: '#', testid: 'link-contact-linkedin' },
        { label: 'GitHub', icon: 'github', sub: 'código aberto, repositórios, contribuições', handle: 'github.com/lioexp', href: 'https://github.com/lioexp', testid: 'link-contact-github' },
        { label: 'E-mail', icon: 'email', sub: 'canal principal para colaborações', handle: 'lioexp0@gmail.com', href: 'mailto:lioexp0@gmail.com', testid: 'link-contact-email' }
      ],
      discord: { name: 'Discord', desc: 'comunidade, debugging, builds ao vivo', handle: 'entra no server', href: 'https://discord.gg/wkmuHa3P8q' },
      footer: {
        tagline: 'build. break. document.',
        colossians: 'Col 3:23',
        verse: 'Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens'
      }
    }
  },
  en: {
    nav: ['home', 'about', 'projects', 'skills', 'setup', 'contact'],
    navIds: ['inicio', 'sobre', 'projectos', 'skills', 'setup', 'contacto'],
    hero: { tagline: '~ build. break. document.', age: '18 years old.', roles: 'Builder · Programmer · Experimenter', motto: 'I am the experiment.', cta: 'view projects' },
    about: { label: 'ABOUT', heading: ['Builder who ', 'builds', ', breaks and documents everything in public.'], displayTitle: ['about', 'me'], cbpText: 'I work with a simple framework — Create, Break, Protect. I build something, try to break it, and document everything. The process is public because learning in private wastes half the value.', fullText: `<span class="about-text-line">I build systems.</span><span class="about-text-line">Not just to make them work. I want to understand why they work, what they cost, and how they can break. I'm a builder and a programmer, and that's what drives me: going below the abstraction, building my own solutions, and discovering how far they hold up.</span><span class="about-text-line">That's how I learn: by building. Python, Rust, Linux, networking, security, and AI aren't a technology list — they're different tools for different problems. Some projects start as a question, others as a real problem. What comes out of it is code, experiment, tooling, and most importantly, things I can test in the real world.</span><span class="about-text-line"><a class="about-text-link" href="https://github.com/LioExp/Faber" target="_blank" rel="noopener noreferrer">FABER</a> <span aria-hidden="true">·</span> <a class="about-text-link" href="https://lioexp.github.io/MyFi/" target="_blank" rel="noopener noreferrer">MyFi</a> <span aria-hidden="true">·</span> <a class="about-text-link" href="https://kiandabot.vercel.app/" target="_blank" rel="noopener noreferrer">KiandaBot</a> <span aria-hidden="true">·</span> <a class="about-text-link" href="https://myroadmapp.vercel.app" target="_blank" rel="noopener noreferrer">MyRoadMapp</a></span><span class="about-text-line">But building is just the beginning.</span><span class="about-text-line">Then I want to know where it breaks, how much it consumes, what the limits are, what happens when someone uses it in a way I didn't expect. That's where my way of working comes from: <span class="about-luanda">Create. Break. Protect.</span></span><span class="about-text-line">Not as separate stages, but as a cycle.</span><span class="about-text-line"><span class="about-luanda">Security, performance, and efficiency</span> don't come in at the end — they're part of the build from the start.</span><span class="about-text-line">And that way of working was born from a specific context.</span><span class="about-text-line">I build in <span class="about-luanda">Luanda</span> <a class="about-inline-link" href="https://www.google.com/maps/search/?api=1&query=Luanda%2C%20Angola" target="_blank" rel="noopener noreferrer" aria-label="Open Luanda in Maps" title="Open Luanda in Maps">${ABOUT_ICONS.pin}</a>, with modest hardware <span class="about-inline-icon" aria-hidden="true">${ABOUT_ICONS.monitor}</span> and a connection that doesn't always cooperate. That taught me to pay attention to what's easy to ignore when there are resources to spare: RAM, CPU, storage, latency, dependencies, consumption.</span><span class="about-text-line">When resources are limited, every decision matters. I stopped seeing this only as a limitation and started seeing it as part of the engineering problem.</span><span class="about-text-line">That's the problem I keep pursuing.</span><span class="about-text-line">I'm still building the path, and the direction is clear: understanding systems more and more deeply and taking that to the intersection of security and artificial intelligence.</span><span class="about-text-line">Systems → Linux → Networking → Security → AI Security.</span><span class="about-text-line">It's not a list to learn. These are layers I need to understand to get where I want to go.</span><span class="about-text-line">There's still a lot to build, break, and learn.</span><span class="about-text-line"><a class="about-inline-link" href="#skills" aria-label="View roadmap" title="View roadmap">→ view roadmap</a></span>`, openTags: ['collab', 'open source'] },
    projects: {
      label: 'PROJECTS', heading: 'Projects', active: 'ACTIVE', waiting: 'ON HOLD', showMore: 'show more', showLess: 'show less',
      faber: { badge: 'launching', sub: 'Phase 0 — imminent launch', desc: 'Rust code agent for the terminal. 100% offline-first and optimized to run local LLMs with minimal hardware overhead.', why: 'Why it exists', whyText: 'AI coding tools assume you have fibre, a paid account and recent hardware. FABER assumes none of that. It was built to work in the same environment where everything else has to work — modest hardware, unstable internet, no monthly subscription.', how: 'How it works', howText: 'Runs a quantized model locally via llama.cpp. No cloud, no tokens, no rate limits. The agent reads the project context, suggests code, executes commands and learns from direct feedback in the terminal. All in Rust to keep overhead minimal.', status: 'Current status', statusItems: ['Rust core functional', 'Stable llama.cpp integration', 'Basic CLI operational', 'Tested on 4GB RAM hardware', 'Documentation and landing in progress'], who: 'Who it\'s for', whoText: 'Developers in emerging markets. Those using Raspberry Pi as their main machine. Those who don\'t want to depend on subscriptions to have a functional code agent.' },
      myfi: { badge: 'active', desc: 'Modular network observability and security platform. Device scanning, live traffic monitoring and Chunk architecture.', problem: 'The problem', problemText: 'Most people share networks without knowing what\'s connected, where the data goes, or who\'s consuming the most bandwidth. Existing tools are either too complex (Wireshark) or don\'t give real control over the network.<br><br>MyFi was built to answer this: total visibility, granular control and an architecture that lets you install only what you need.', features: 'Core Features', featureItems: ['Continuous ARP scan of local network devices', 'Real-time traffic monitoring (Live Stream) and background capture', 'Per-device bandwidth limits with Telegram alerts', 'Interactive CLI with custom theme, autocomplete and shell mode', 'Web dashboard with traffic graph, network topology and KPIs'], extraLabel: 'Extra Features (Chunks)', extraItems: ['GeoLocate — geolocate external traffic (country, city, ISP)', 'PhoneIntel — analyze phone numbers (carrier, validity, deep scan)', 'UsernameIntel — check where a username is registered', 'Chunk Architecture — install and uninstall modules without touching Core'], v3: 'v3.0 — what changed', v3Text: 'v2.0 was already a complete CLI, but v3.0 restructured the project with a true modular architecture:<br>• ChunkEngine that orchestrates workflows<br>• "Drop-in Module" protocol — each Chunk lives in its own folder with register_chunk()<br>• myfi chunk install &lt;url&gt; command to install community modules<br>• Centralized theme with rich and consistent colors across the entire UI<br>• Interactive shell mode with history and dynamic autocomplete', roadmap: 'Next roadmap', roadmapText: '• Integration with SIM Alert AO for SMS alerts<br>• Windows and Android (PWA) support<br>• Guardian Mode — smart access control (local NAC)<br>• Community Chunk ecosystem expansion' },
      kianda: { badge: 'planning', desc: 'AI sales and automation agent for small businesses. Smart 24/7 automated support directly on WhatsApp via Evolution API.', context: 'The context', contextText: 'In Luanda, much of informal commerce runs through WhatsApp. Small businesses respond to hundreds of messages per day, manually, often losing sales due to delays or absence. KiandaBot fills that gap.', how: 'How it works', howText: 'Connects to WhatsApp Business via Evolution API. The merchant configures catalogue, prices and default responses. The bot handles queries, confirms stock, calculates prices and routes only what needs human intervention.', diff: 'What makes it different', diffItems: ['No broadcast or spam — only replies to those who ask', 'Conversation context preserved per customer', 'Simple no-code setup for the merchant', 'Works with unstable connections', 'Smooth handoff to human when needed'], vision: 'Vision', visionText: 'A pilot with 3–5 real businesses in Luanda to validate the model. If it works, scale to other Lusophone markets with the same informal dynamic.' },
      myroadmapp: { badge: 'active', desc: 'A living learning roadmap to become an AI Security Engineer. Human curation, no choice paralysis — the next step is already decided.', problem: 'The problem', problemText: 'The internet has infinite information, but the real problem was never lack of content. It\'s not knowing what to study, in what order, or which resource to choose. Hours wasted searching for courses and videos without a logical path.', how: 'How it works', howText: 'A structured learning path that constantly evolves. Each resource is hand-picked — if something better comes along tomorrow, the roadmap improves. You enter, learn, advance.', features: 'Features', featureItems: ['Structured roadmap with dependencies and study order', 'Human curation — every resource was validated in practice', 'No account needed to start', 'Continuous updates as it evolves', 'Example: Networking → Linux → Python → Docker → LLM Security → AI Agents'], vision: 'Vision', visionText: 'No one should spend hundreds of hours just to figure out what to study next. This is the same roadmap I use daily — made public for anyone who wants to follow the same path.' },
      waitingProjects: [{ name: "SIM Alert AO", desc: "Silent alerts for mobile data time on the network", href: null }, { name: "FileFlow", desc: "Local file transfer and automation", href: "https://github.com/LioExp/File-flow-assistant" }]
    },
    skills: {
      heading: 'Where I am on the map.', subheading: 'the fruit of my journey.',
      categories: [
        { id: 'systems', label: 'SYSTEMS & OS', skills: ['Rust', 'Bash', 'Arch Linux', 'Debian'] },
        { id: 'backend', label: 'BACKEND & CLOUD', skills: ['Python', 'FastAPI', 'Containers', 'Git', 'WASM', 'SQLite', 'MySQL'] },
        { id: 'security', label: 'SECURITY', skills: ['OWASP Top 10', 'Burp Suite'] }
      ],
      roadmapLabel: 'ROADMAP', roadmapLinkLabel: 'view the full roadmap',
    },
    setup: {
      heading: 'Where I build.',
      sub: 'where everything happens.',
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
      ],
      article: {
        label: 'BUILD LOG',
        kicker: 'hardware / constraints',
        title: 'Building with less is still building',
        meta: '4 min read · 02 SEP 2026',
        excerpt: 'What an old Pentium, 3.7 GiB of RAM and an unstable connection taught me about making software.',
        body: [
          'My setup was not chosen to look impressive. It was chosen because it is what I have — and because it is still enough to turn ideas into real things.',
          'With 3.7 GiB of RAM, every process has a cost. I learned to prefer small tools, understand what runs in the background and write software that does not depend on a perfect connection to remain useful.',
          'It changes the way you build. Instead of starting with the heaviest technology, I start with a simpler question: what is the smallest version that already solves the problem?',
          'Limitations do not make the work smaller. They make the decisions more visible. Sometimes, that is exactly where a product starts to become good.'
        ]
      },
      writing: {
        heading: 'Recent writing',
        moreLabel: 'more blogs',
        items: [
          { id: 'build-log', title: 'Building with less is still building', reading: '4 min', tags: ['Hardware', 'Process'], date: '02 SEP 2026' },
          { id: 'offline-first', title: 'When the internet fails, the product should keep going', reading: '3 min', tags: ['Product', 'Offline-first'], date: '28 AUG 2026' }
        ]
      }
    },
    contact: {
      heading: 'Talk to me.', subtext: 'I prefer email. I reply to everything worth a reply.',
      briefingToggleOpen: 'close briefing', briefingToggleClosed: 'how to structure your email',
      mailtoSubject: 'Briefing — Collaboration',
      briefingIntro: 'If the idea involves advertising, partnership, software, a special project or any action where brand and technical background need to work together, this is the main channel.',
      briefingListLabel: 'A good briefing includes',
      briefingItems: ['Campaign objective', 'Product or main link', 'Publication window', 'Desired format', 'Required messages', 'Budget range', 'Image usage, rights or whitelisting needs'],
      fastestWayLabel: 'Fastest way', fastestWayText: 'Sending context, product link, deadline and commercial expectation in the same email speeds up the reply significantly.',
      sendEmail: 'send email now',
      whereLabel: 'Where to find me',
      ytPTdesc: 'Long-form videos. Builds, project documentation, process in the open.',
      ytENdesc: 'Shorts. Quick takes, fast demos, international audience.',
      subscribers: 'subscribers',
      socials: [
        { label: 'X / Twitter', icon: 'x', sub: 'thoughts, updates, technical threads', handle: '@lioexp', href: 'https://x.com/lioexp', testid: 'link-contact-x' },
        { label: 'LinkedIn', icon: 'linkedin', sub: 'professional network, formal collaborations', handle: 'in/lioexp', href: '#', testid: 'link-contact-linkedin' },
        { label: 'GitHub', icon: 'github', sub: 'open source code, repositories, contributions', handle: 'github.com/lioexp', testid: 'link-contact-github', href: 'https://github.com/lioexp' },
        { label: 'Email', icon: 'email', sub: 'main channel for collaborations', handle: 'lioexp0@gmail.com', href: 'mailto:lioexp0@gmail.com', testid: 'link-contact-email' }
      ],
      discord: { name: 'Discord', desc: 'community, debugging, live builds', handle: 'join the server', href: 'https://discord.gg/wkmuHa3P8q' },
      footer: {
        tagline: 'build. break. document.',
        colossians: 'Col 3:23',
        verse: 'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters'
      }
    }
  }
};

const ASCII_LIOEXP = `<span class="text-white">██╗     ██╗ ██████╗ </span><span class="text-purple">███████╗██╗  ██╗██████╗</span><br><span class="text-white">██║     ██║██╔═══██╗</span><span class="text-purple">██╔════╝╚██╗██╔╝██╔══██╗</span><br><span class="text-white">██║     ██║██║   ██║</span><span class="text-purple">█████╗   ╚███╔╝ ██████╔╝</span><br><span class="text-white">██║     ██║██║   ██║</span><span class="text-purple">██╔══╝   ██╔██╗ ██╔═══╝</span><br><span class="text-white">███████╗██║╚██████╔╝</span><span class="text-purple">███████╗██╔╝ ██╗██║</span><br><span class="text-white">╚══════╝╚═╝ ╚═════╝</span><span class="text-purple"> ╚══════╝╚═╝  ╚═╝╚═╝</span>`;

const ASCII_LIOCOSTA = `<span class="text-white">██╗     ██╗██████╗ </span><span class="text-purple"> ██████╗ ██████╗ ███████╗████████╗█████╗ </span><br><span class="text-white">██║     ██║██╔══██╗</span><span class="text-purple">██╔════╝██╔═══██╗██╔════╝╚══██╔══╝██╔══██╗</span><br><span class="text-white">██║     ██║██║  ██║</span><span class="text-purple">██║     ██║   ██║███████╗   ██║   ███████║</span><br><span class="text-white">██║     ██║██║  ██║</span><span class="text-purple">██║     ██║   ██║╚════██║   ██║   ██╔══██║</span><br><span class="text-white">███████╗██║██████╔╝</span><span class="text-purple">╚██████╗╚██████╔╝███████║   ██║   ██║  ██║</span><br><span class="text-white">╚══════╝╚═╝╚═════╝ </span><span class="text-purple"> ╚═════╝ ╚═════╝ ╚══════╝   ╚═╝   ╚═╝  ╚═╝</span>`;

const ABOUT_ASCII = ` █████╗ ██████╗  ██████╗ ██╗   ██╗████████╗
██╔══██╗██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝
███████║██████╔╝██║   ██║██║   ██║   ██║
██╔══██║██╔══██╗██║   ██║██║   ██║   ██║
██║  ██║██████╔╝╚██████╔╝╚██████╔╝   ██║
╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝    ╚═╝`;

const ME_ASCII = `███╗   ███╗███████╗
████╗ ████║██╔════╝
██╔████╔██║█████╗
██║╚██╔╝██║██╔══╝
██║ ╚═╝ ██║███████╗
╚═╝     ╚═╝╚══════╝`;

// =============================================
// Persona Data
// =============================================
const PERSONAS = {
  lioexp: {
    displayName: 'LioExp',
    title: 'LioExp — Portfolio',
    banner: 'assets/banner.png',
    githubUser: 'LioExp',
    ascii: ASCII_LIOEXP,
  },
  liocosta: {
    displayName: 'Lio Costa',
    title: 'Lio Costa — Portfolio',
    banner: 'assets/banner-liocosta.png',
    githubUser: 'LioExp',
    ascii: ASCII_LIOCOSTA,
  }
};

const icons = {
  github: '<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>',
  external: '<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>',
  yt: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  discord: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>',
  x: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  linkedin: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  email: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.25" y="4.5" width="19.5" height="15" rx="2.25"/><path d="m3 7 8.02 5.12a1.84 1.84 0 0 0 1.98 0L21 7"/></svg>',
};

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
  },
  {
    id: 'MyRoadMapp', key: 'myroadmapp', color: '#10b981',
    img: 'assets/myroadmapp-preview.png', imgBg: '#0a0a0a',
    tags: ['Web', 'AI', 'Productivity'],
    github: 'https://github.com/LioExp/myroadmap', landing: 'https://myroadmapp.vercel.app',
  }
];
