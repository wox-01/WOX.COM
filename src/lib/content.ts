export type Project = {
  name: string;
  repo?: string; // yoksa (ör. private repo) kart tıklanamaz olarak render edilir
  category: "ai" | "web" | "mobile"; // dilden bağımsız, filtreleme/ikon için
  type: string; // ekranda gösterilen çevrilmiş etiket
  description: string;
  stack: string[];
  team: string;
};

type Fact = { label: string; value: string };
type SkillGroup = { group: string; items: string[] };
type QaItem = { question: string; answer: string };
type StatItem = { value: number; suffix?: string; label: string };
type JourneyEntry = {
  date: string;
  title: string;
  description: string;
  current?: boolean;
};

export type Content = {
  ui: {
    nav: {
      start: string;
      about: string;
      projects: string;
      contact: string;
      openMenu: string;
      closeMenu: string;
      backToTop: string;
    };
    hero: {
      name: string;
      eyebrow: string;
      headingPre: string;
      headingAccentPre: string;
      headingAccent: string;
      headingAccentPost: string;
      sub: string;
      drag: string;
    };
    about: {
      eyebrow: string;
      resumeLabel: string;
      downloadCv: string;
      openPdf: string;
      download: string;
    };
    journey: { eyebrow: string; heading: string; now: string };
    qa: { label: string; placeholder: string };
    projectsSection: { eyebrow: string };
    projectsBanner: string;
    contact: { eyebrow: string; heading: [string, string] };
    projectList: {
      openProject: string;
      viewProject: string;
      privateProject: string;
    };
    slider: {
      web: { title: string; description: string; cta: string };
      mobile: { title: string; description: string; cta: string };
    };
    categoryHero: { web: string; mobile: string };
    webStatement: string;
    trustStatement: string;
  };
  about: string;
  facts: Fact[];
  skills: SkillGroup[];
  qa: QaItem[];
  stats: StatItem[];
  journey: JourneyEntry[];
  projects: Project[];
};

export const CONTENT: Record<"tr" | "en", Content> = {
  tr: {
    ui: {
      nav: {
        start: "Başlangıç",
        about: "Hakkımda",
        projects: "Projeler",
        contact: "İletişim",
        openMenu: "Menüyü aç",
        closeMenu: "Menüyü kapat",
        backToTop: "Başa dön",
      },
      hero: {
        name: "CAN YAŞA",
        eyebrow: "YAPAY ZEKA MÜHENDİSLİĞİ",
        headingPre: "Çoğu RAG tutorial'ı embed ve retrieve'de biter.",
        headingAccentPre: "Ben ",
        headingAccent: "bitmeyen",
        headingAccentPost: " tarafı kuruyorum.",
        sub: "Bilgisayar Mühendisliği öğrencisiyim — LLM, RAG ve uygulamalı yapay zeka mühendisliğine odaklanıyorum.",
        drag: "Sürükle",
      },
      about: {
        eyebrow: "HAKKIMDA",
        resumeLabel: "resume.pdf",
        downloadCv: "CV indir",
        openPdf: "PDF Aç",
        download: "İndir",
      },
      journey: { eyebrow: "SÜREÇ", heading: "Buraya kadar gelen yol.", now: "şu an" },
      qa: { label: "BANA SOR", placeholder: "Yukarıdan bir soru seç." },
      projectsSection: { eyebrow: "PROJELER" },
      projectsBanner: "Proje Yelpazem",
      contact: {
        eyebrow: "İLETİŞİM",
        heading: ["Staj, proje ya da sadece merhaba —", "yazman yeterli."],
      },
      projectList: {
        openProject: "Projeyi Aç",
        viewProject: "Projeyi gör",
        privateProject: "Özel proje",
      },
      slider: {
        web: {
          title: "Web Projeleri",
          description: "Uçtan uca kurduğum web sistemleri.",
          cta: "Web Projelerini Keşfet",
        },
        mobile: {
          title: "Mobil Projeleri",
          description: "Flutter ile geliştirdiğim mobil uygulamalar.",
          cta: "Mobil Projelerini Keşfet",
        },
      },
      categoryHero: {
        web: "Kurduğum web sistemleri.",
        mobile: "Geliştirdiğim mobil uygulamalar.",
      },
      webStatement:
        "İyi bir web sitesi sadece güzel görünmez — güven verir, yönlendirir, dönüştürür.",
      trustStatement:
        "Çoğu yazılım demoda iyi görünür, üretimde çöker. Ben güvenle kullanılabilecek tarafı kuruyorum.",
    },
    about:
      "Bilgisayar Mühendisliği öğrencisiyim; LLM, RAG ve uygulamalı yapay zeka mühendisliğine odaklanıyorum. Mobil ve full-stack geliştirme geçmişim var (Flutter, Firebase, PHP/MySQL).",
    facts: [
      { label: "EĞİTİM", value: "Artvin Çoruh Üniversitesi — Bilgisayar Mühendisliği, 2024–" },
      { label: "DENEYİM", value: "Tostbang Teknoloji — Yazılım Geliştirme Stajyeri, 2026–" },
      { label: "SERTİFİKA", value: "AWS Cloud Technology and Services · Introduction to AWS" },
      { label: "DİL", value: "Türkçe (anadil), İngilizce (C1), Almanca (A2)" },
    ],
    skills: [
      {
        group: "Framework & Araçlar",
        items: ["Flutter", "Firebase", "MySQL", "HTML/CSS", "Unity", "AWS", "OpenAI API"],
      },
      { group: "Kendi Kendine Öğrenim", items: ["Machine Learning", "Deep Learning", "LLM'ler"] },
    ],
    qa: [
      {
        question: "Nerelisin?",
        answer:
          "Antalya'da yaşıyorum. Artvin Çoruh Üniversitesi'nde Bilgisayar Mühendisliği okuyorum, 2024'ten beri.",
      },
      {
        question: "Yazılımdan önce ne yapıyordun?",
        answer:
          "2023'te Antalya'da bir su parkında resepsiyonist olarak çalıştım — yoğun, uluslararası bir ortamda İngilizce iletişim kurmayı ve baskı altında sakin kalmayı orada öğrendim.",
      },
      {
        question: "Hedefin ne?",
        answer:
          "Uzun vadede uygulamalı yapay zeka / makine öğrenmesi mühendisliğinde çalışmak istiyorum — tutorial değil, gerçek sistemler kuran biri olarak.",
      },
      {
        question: "RAG nedir, neden önemli?",
        answer:
          "RAG, modele kendi dokümanlarından doğru ve kaynak gösteren cevap üretme yeteneği kazandırır. Bunu personal-brain'de sıfırdan kurdum: chunking, retrieval kalitesi, context assembly, grounding.",
      },
      {
        question: "En çok hangi projede zorlandın?",
        answer:
          "TEKNOFEST'teki ilaç takip uygulamasında — LLM'in esnek girdi anlayışını, hatırlatmaların deterministik ve güvenilir çalışmasıyla dengelemek gerekiyordu.",
      },
      {
        question: "Şu an ne öğreniyorsun?",
        answer:
          "Deep learning temelleri ve LLM/RAG sistem mühendisliği üzerine kendi kendime çalışıyorum.",
      },
    ],
    stats: [
      { value: 5, label: "Proje" },
      { value: 2, label: "Sertifika" },
      { value: 2, suffix: "+", label: "Yıldır kod yazıyorum" },
    ],
    journey: [
      {
        date: "EYL 2024",
        title: "Bilgisayar Mühendisliği'ne başladım",
        description: "Artvin Çoruh Üniversitesi'nde lisans eğitimime başladım.",
      },
      {
        date: "OCA 2026",
        title: "İlk yapay zeka projem",
        description:
          "TEKNOFEST Sağlıkta Yapay Zeka kategorisi için 4 kişilik takımla LLM destekli ilaç takip uygulaması geliştirdim.",
      },
      {
        date: "MAR 2026",
        title: "leo_gym'i solo geliştirdim",
        description:
          "Flutter + Firebase ile uçtan uca bir spor salonu uygulaması — kimlik doğrulama, gerçek zamanlı veri, üçüncü parti API entegrasyonu.",
      },
      {
        date: "MAY 2026",
        title: "İlk yazılım stajım",
        description:
          "TNC Group / Software Persona'da uzaktan staj — UI/UX, web ve mobil geliştirme üzerine yapılandırılmış eğitim aldım.",
      },
      {
        date: "HAZ 2026",
        title: "Gerçek müşteriler için geliştirdim",
        description:
          "Berber randevu sistemi ve Baril Medikal katalog sitesini gerçek işletmeler için uçtan uca kurdum ve teslim ettim.",
      },
      {
        date: "TEM 2026",
        title: "Tostbang Teknoloji'de stajyerim",
        description:
          "Şu anda üretim odaklı bir ekipte web ve mobil geliştirmeye katkı sağlıyorum.",
        current: true,
      },
    ],
    projects: [
      {
        name: "personal-brain",
        repo: "https://github.com/wox-01/personal-brain",
        category: "ai",
        type: "AI Sistemi",
        description:
          "Dökümanlarını yükleyip doğal dilde soru sorabildiğin, kaynak gösteren RAG tabanlı kişisel bilgi yönetim sistemi.",
        stack: ["Next.js", "FastAPI", "PostgreSQL", "OpenAI API"],
        team: "Solo",
      },
      {
        name: "leo_gym",
        repo: "https://github.com/wox-01/leo_gym",
        category: "mobile",
        type: "Mobil Uygulama",
        description:
          "Üyelik, antrenman ve beslenme takibini tek çatıda toplayan Flutter + Firebase tabanlı spor salonu uygulaması.",
        stack: ["Flutter", "Firebase"],
        team: "Solo",
      },
      {
        name: "berber-sistemi-web",
        repo: "https://github.com/wox-01/berber-sistemi-web",
        category: "web",
        type: "Web Uygulaması",
        description:
          "Gerçek bir müşteri için geliştirilmiş, çakışmasız randevu akışına sahip berber randevu ve yönetim sistemi.",
        stack: ["PHP", "MySQL"],
        team: "2 kişilik ekip",
      },
      {
        name: "Asenkron-Akilli-Ilac-Takibi-Sistemi",
        repo: "https://github.com/g-yavuz/Asenkron-Akilli-Ilac-Takibi-Sistemi",
        category: "mobile",
        type: "Mobil Uygulama",
        description:
          "TEKNOFEST Sağlıkta Yapay Zeka kategorisi için geliştirilen, LLM destekli akıllı ilaç hatırlatma uygulaması.",
        stack: ["Flutter", "Firebase", "OpenAI API"],
        team: "4 kişilik ekip",
      },
      {
        name: "Baril Medikal",
        category: "web",
        type: "Web Uygulaması",
        description:
          "Bir medikal cihaz firması için 2 kişilik ekiple geliştirilen, ürün yönetimi için admin paneli olan full-stack ürün katalog sitesi.",
        stack: ["PHP", "MySQL"],
        team: "2 kişilik ekip",
      },
    ],
  },
  en: {
    ui: {
      nav: {
        start: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        backToTop: "Back to top",
      },
      hero: {
        name: "CAN YAŞA",
        eyebrow: "AI ENGINEERING",
        headingPre: "Most RAG tutorials end at embed and retrieve.",
        headingAccentPre: "I build the part that ",
        headingAccent: "never ends",
        headingAccentPost: ".",
        sub: "I'm a Computer Engineering student — focused on LLMs, RAG, and applied AI engineering.",
        drag: "Drag",
      },
      about: {
        eyebrow: "ABOUT",
        resumeLabel: "resume.pdf",
        downloadCv: "Download CV",
        openPdf: "Open PDF",
        download: "Download",
      },
      journey: { eyebrow: "JOURNEY", heading: "The road so far.", now: "present" },
      qa: { label: "ASK ME", placeholder: "Pick a question above." },
      projectsSection: { eyebrow: "PROJECTS" },
      projectsBanner: "My Project Range",
      contact: {
        eyebrow: "CONTACT",
        heading: ["Internship, project, or just a hello —", "reach out."],
      },
      projectList: {
        openProject: "Open project",
        viewProject: "View project",
        privateProject: "Private project",
      },
      slider: {
        web: {
          title: "Web Projects",
          description: "Web systems I've built end to end.",
          cta: "Explore Web Projects",
        },
        mobile: {
          title: "Mobile Projects",
          description: "Mobile apps I've built with Flutter.",
          cta: "Explore Mobile Projects",
        },
      },
      categoryHero: {
        web: "Web systems I've built.",
        mobile: "Mobile apps I've built.",
      },
      webStatement:
        "A good website doesn't just look good — it builds trust, guides, and converts.",
      trustStatement:
        "Most software looks good in a demo and breaks in production. I build the part people can trust.",
    },
    about:
      "I'm a Computer Engineering student focused on LLMs, RAG, and applied AI engineering. I have a background in mobile and full-stack development (Flutter, Firebase, PHP/MySQL).",
    facts: [
      { label: "EDUCATION", value: "Artvin Çoruh University — Computer Engineering, 2024–" },
      { label: "EXPERIENCE", value: "Tostbang Teknoloji — Software Development Intern, 2026–" },
      { label: "CERTIFICATE", value: "AWS Cloud Technology and Services · Introduction to AWS" },
      { label: "LANGUAGE", value: "Turkish (native), English (C1), German (A2)" },
    ],
    skills: [
      {
        group: "Frameworks & Tools",
        items: ["Flutter", "Firebase", "MySQL", "HTML/CSS", "Unity", "AWS", "OpenAI API"],
      },
      { group: "Self-Directed Learning", items: ["Machine Learning", "Deep Learning", "LLMs"] },
    ],
    qa: [
      {
        question: "Where are you from?",
        answer:
          "I live in Antalya. I've been studying Computer Engineering at Artvin Çoruh University since 2024.",
      },
      {
        question: "What did you do before software?",
        answer:
          "In 2023 I worked as a receptionist at a water park in Antalya — a busy, international environment where I learned to communicate in English and stay calm under pressure.",
      },
      {
        question: "What's your goal?",
        answer:
          "Long term, I want to work in applied AI / machine learning engineering — building real systems, not just tutorials.",
      },
      {
        question: "What is RAG, and why does it matter?",
        answer:
          "RAG gives a model the ability to answer accurately from your own documents, with sources. I built one from scratch in personal-brain: chunking, retrieval quality, context assembly, grounding.",
      },
      {
        question: "Which project challenged you most?",
        answer:
          "The medication tracker at TEKNOFEST — balancing the LLM's flexible input understanding with reminders that had to run deterministically and reliably.",
      },
      {
        question: "What are you learning right now?",
        answer:
          "I'm self-studying deep learning fundamentals and LLM/RAG systems engineering.",
      },
    ],
    stats: [
      { value: 5, label: "Projects" },
      { value: 2, label: "Certificates" },
      { value: 2, suffix: "+", label: "Years coding" },
    ],
    journey: [
      {
        date: "SEP 2024",
        title: "Started Computer Engineering",
        description: "Began my undergraduate degree at Artvin Çoruh University.",
      },
      {
        date: "JAN 2026",
        title: "My first AI project",
        description:
          "Built an LLM-powered medication tracking app with a 4-person team for the TEKNOFEST AI in Healthcare category.",
      },
      {
        date: "MAR 2026",
        title: "Built leo_gym solo",
        description:
          "An end-to-end gym app with Flutter + Firebase — authentication, real-time data, third-party API integration.",
      },
      {
        date: "MAY 2026",
        title: "My first software internship",
        description:
          "Remote internship at TNC Group / Software Persona — structured training in UI/UX, web, and mobile development.",
      },
      {
        date: "JUN 2026",
        title: "Built for real clients",
        description:
          "Built and delivered a barber booking system and the Baril Medikal catalog site end to end for real businesses.",
      },
      {
        date: "JUL 2026",
        title: "Interning at Tostbang Teknoloji",
        description: "Currently contributing to web and mobile development on a production-focused team.",
        current: true,
      },
    ],
    projects: [
      {
        name: "personal-brain",
        repo: "https://github.com/wox-01/personal-brain",
        category: "ai",
        type: "AI System",
        description:
          "A RAG-based personal knowledge management system — upload your documents and ask questions in natural language, with sources.",
        stack: ["Next.js", "FastAPI", "PostgreSQL", "OpenAI API"],
        team: "Solo",
      },
      {
        name: "leo_gym",
        repo: "https://github.com/wox-01/leo_gym",
        category: "mobile",
        type: "Mobile App",
        description:
          "A Flutter + Firebase gym app bringing membership, workout, and nutrition tracking together in one place.",
        stack: ["Flutter", "Firebase"],
        team: "Solo",
      },
      {
        name: "berber-sistemi-web",
        repo: "https://github.com/wox-01/berber-sistemi-web",
        category: "web",
        type: "Web App",
        description:
          "A barber booking and management system built for a real client, with a conflict-free appointment flow.",
        stack: ["PHP", "MySQL"],
        team: "Team of 2",
      },
      {
        name: "Asenkron-Akilli-Ilac-Takibi-Sistemi",
        repo: "https://github.com/g-yavuz/Asenkron-Akilli-Ilac-Takibi-Sistemi",
        category: "mobile",
        type: "Mobile App",
        description:
          "An LLM-powered smart medication reminder app built for the TEKNOFEST AI in Healthcare category.",
        stack: ["Flutter", "Firebase", "OpenAI API"],
        team: "Team of 4",
      },
      {
        name: "Baril Medikal",
        category: "web",
        type: "Web App",
        description:
          "A full-stack product catalog site built with a 2-person team for a medical device company, with an admin panel for product management.",
        stack: ["PHP", "MySQL"],
        team: "Team of 2",
      },
    ],
  },
};
