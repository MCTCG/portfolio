export type Locale = "fr" | "en";

export const LOCALES: Locale[] = ["fr", "en"];

type Dict = {
  nav: {
    home: string;
    cv: string;
    contact: string;
    projects: string;
    downloadCv: string;
    role: string;
  };
  home: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    statProjects: string;
    statProjectsLabel: string;
    statSemesters: string;
    statSemestersLabel: string;
    statSpecialty: string;
    statSpecialtyLabel: string;
    statLangs: string;
    statLangsLabel: string;
    sectionProjects: string;
    sectionProjectsHint: string;
    sectionAbout: string;
    aboutP1: string;
    aboutP2: string;
    hobbiesTitle: string;
    hobbies: string[];
    universityTitle: string;
    seeProject: string;
  };
  cv: {
    title: string;
    subtitle: string;
    profile: string;
    profileText: string;
    age: string;
    availability: string;
    license: string;
    contact: string;
    languages: string;
    qualities: string;
    qualitiesList: string[];
    education: string;
    eduItems: { date: string; title: string; school: string; note?: string }[];
    experience: string;
    expItems: { title: string; company: string; note?: string }[];
    skills: string;
    skillsGroups: { title: string; items: string[] }[];
    universityProjects: string;
    uniProjects: { date: string; title: string; desc: string; year: "BUT 1" | "BUT 2" }[];
  };
  contact: {
    title: string;
    subtitle: string;
    sendEmail: string;
    location: string;
    phone: string;
    backHome: string;
  };
  projects: {
    backToProjects: string;
    objectives: string;
    technologies: string;
    implementation: string;
    items: Record<
      "wav" | "thermo" | "robot" | "nas",
      {
        title: string;
        tagline: string;
        teaser: string;
        objectives: string[];
        tech: string[];
        body: string;
        pdf?: string;
      }
    >;
  };
  footer: string;
};

export const dict: Record<Locale, Dict> = {
  fr: {
    nav: {
      home: "Accueil",
      cv: "CV & Profil",
      contact: "Contact",
      projects: "Projets",
      downloadCv: "Télécharger le CV",
      role: "BUT 2 GEII · AII",
    },
    home: {
      eyebrow: "Spécialisation Automatisme & Informatique Industrielle",
      title: "Génie électrique et",
      titleAccent: "informatique industrielle",
      intro:
        "Étudiant en BUT 2 GEII (parcours AII), je me spécialise à l'intersection du Génie Électrique et de l'Informatique Industrielle — apprentissage automatique, systèmes embarqués et automatisation. Voici une sélection de mes projets concrets en vision et analyse de données.",
      statProjects: "5",
      statProjectsLabel: "Grands projets en formation",
      statSemesters: "4",
      statSemestersLabel: "Semestres de formation",
      statSpecialty: "AII",
      statSpecialtyLabel: "Automatisme & Informatique Industrielle",
      statLangs: "Python · C/C++",
      statLangsLabel: "VHDL · SFC/LD · Arduino",
      sectionProjects: "Projets GEII / AII",
      sectionProjectsHint: "Cliquez pour voir les détails",
      sectionAbout: "À propos de moi",
      aboutP1:
        "Au-delà des cours et des travaux pratiques, je suis motivé par la passion de résoudre des problèmes concrets en utilisant des systèmes intelligents. Mes études en GEII m'ont apporté une base solide à la fois en matériel (capteurs, systèmes embarqués) et en logiciel (Codeblocks, MatLab, LabView).",
      aboutP2:
        "Je suis actuellement à la recherche d'une opportunité de stage où je pourrai appliquer mes compétences en apprentissage profond et acquérir une expérience pratique en milieu professionnel. Je crois au pouvoir de l'innovation collaborative et de l'apprentissage continu.",
      hobbiesTitle: "Loisirs",
      hobbies: ["Volley-ball", "Kitesurf", "Plongée sous-marine", "Impression 3D", "Échecs"],
      universityTitle: "Projets universitaires",
      seeProject: "Voir le projet",
    },
    cv: {
      title: "CV & Profil académique",
      subtitle: "Mathéo Caro",
      profile: "Profil",
      profileText:
        "Fasciné par les défis de l'industrie et désireux de mettre en pratique mes connaissances en Génie Électrique et Informatique Industrielle, je recherche un stage d'une durée de 8 semaines minimum afin d'acquérir une première expérience professionnelle.",
      age: "Âge — 20 ans (12/12/2005)",
      availability: "Disponibilité — à partir du 20 avril 2025",
      license: "Permis B en cours",
      contact: "Contact",
      languages: "Langues",
      qualities: "Qualités",
      qualitiesList: [
        "Persévérance",
        "Pensée critique",
        "Travail d'équipe",
        "Conception de projets",
        "Communication efficace",
      ],
      education: "Formation académique",
      eduItems: [
        {
          date: "Depuis Sept. 2024",
          title: "BUT 1 et 2 GEII",
          school: "IUT de Vélizy, UVSQ — Vélizy-Villacoublay",
        },
        {
          date: "2022 – 2024",
          title: "Baccalauréat américain",
          school: "CIC, Valencia — Venezuela",
          note: "Spécialisation en mathématiques.",
        },
        {
          date: "Juin 2024",
          title: "Harvard CS50x",
          school: "Diplôme digital de programmation",
        },
        {
          date: "Été 2022",
          title: "Certificats",
          school: "Électronique Arduino · Programme universitaire UAM",
        },
      ],
      experience: "Expériences en industrie",
      expItems: [
        {
          title: "Stage observation production plastique",
          company: "Plásticos Trébol (entreprise familiale) — Venezuela",
        },
        {
          title: "Apprenti mouliste",
          company: "Observation des procédés CNC",
        },
      ],
      skills: "Compétences techniques",
      skillsGroups: [
        {
          title: "Informatique",
          items: ["C / C++ et Python", "Code::Blocks", "Linux CLI", "LabView", "Arduino · Raspberry · Micro C"],
        },
        {
          title: "Informatique industrielle",
          items: ["FPGA Xilinx — VHDL", "Microcontrôleurs 8051-C"],
        },
        {
          title: "Électronique",
          items: ["Design PCB avec KiCad (CAO)", "Électronique numérique & analogique", "Conversion d'énergie", "Simulation LTSpice & PSIM"],
        },
        {
          title: "Automatisme",
          items: ["Automates programmables Schneider", "ACE Grafcet", "Ladder"],
        },
        {
          title: "Outils & divers",
          items: ["LibreOffice & Google + IA Gemini", "Canva", "Design et impression 3D"],
        },
      ],
      universityProjects: "Projets universitaires",
      uniProjects: [
        { date: "Sept. 2024", title: "Thermomètre numérique", desc: "Étude et réalisation d'un thermomètre numérique en technologie traversante.", year: "BUT 1" },
        { date: "Mai 2025", title: "Commande de moteur par FPGA", desc: "Commande par FPGA de la vitesse de rotation d'un moteur.", year: "BUT 1" },
        { date: "Avril 2025", title: "Conception de carte électronique", desc: "Réalisation d'une carte électronique (CAO : KiCad).", year: "BUT 1" },
        { date: "Déc. 2024", title: "Robot écologique", desc: "Réalisation d'un robot écologique pour une course intra-scolaire.", year: "BUT 1" },
        { date: "Janv. 2025", title: "Banc de test numérique", desc: "Banc de test contrôlé par carte numérique (décodage trame, FPGA…).", year: "BUT 2" },
        { date: "Févr. 2025", title: "Programmation d'automates", desc: "Programmation d'automates et micro-automates (Schneider, Arduino).", year: "BUT 2" },
        { date: "Sept. 2025", title: "Commande de bras manipulateur", desc: "Commande d'un bras manipulateur industriel.", year: "BUT 2" },
      ],
    },
    contact: {
      title: "Me contacter",
      subtitle: "Disponible pour un stage à partir du 20 avril 2025.",
      sendEmail: "Envoyer un email",
      location: "Vélizy-Villacoublay, France",
      phone: "+33 7 75 76 64 32",
      backHome: "Retour à l'accueil",
    },
    projects: {
      backToProjects: "← Retour aux projets",
      objectives: "Objectifs clés",
      technologies: "Technologies",
      implementation: "Détails de l'implémentation",
      items: {
        wav: {
          title: "Modification des fichiers .WAV",
          tagline: "Projet S2 — Traitement du signal & Python",
          teaser: "En utilisant Python et SciPy",
          objectives: [
            "Analyser la structure des fichiers WAV (en-tête, données).",
            "Implémenter des filtres numériques (passe-bas / passe-haut) en Python.",
            "Modifier l'amplitude et la fréquence des signaux.",
          ],
          tech: ["Python 3", "SciPy", "NumPy", "Traitement du signal"],
          body:
            "Ce projet portait sur la manipulation de signaux audio numériques. J'ai utilisé scipy.io.wavfile pour lire et écrire les fichiers WAV, et scipy.signal pour appliquer divers traitements : normalisation, coupure des fréquences indésirables, et modification du tempo par rééchantillonnage. L'approche a renforcé ma compréhension du passage entre les domaines temporel et fréquentiel (Transformée de Fourier). J'y ai aussi découvert ma passion pour la musique appliquée à l'ingénierie — une motivation inattendue qui a guidé tout le projet.",
        },
        thermo: {
          title: "Thermomètre numérique à électronique discrète",
          tagline: "Projet S1 — Électronique analogique & numérique",
          teaser: "Conception avec uniquement des composants discrets",
          objectives: [
            "Concevoir un circuit de conditionnement pour une thermistance CTP/CTN.",
            "Utiliser un comparateur (AOP) pour la conversion de température.",
            "Afficher le résultat sur des afficheurs 7 segments.",
          ],
          tech: ["Électronique analogique", "AOP", "Afficheur 7 segments", "LTSpice (simulation)"],
          body:
            "L'objectif : créer un thermomètre fonctionnel sans microcontrôleur, uniquement à partir de composants discrets (résistances, condensateurs, AOP, portes logiques). J'ai conçu le circuit pour lire la variation de résistance d'un capteur de température, convertir cette variation en tension, et utiliser des comparateurs pour piloter les décodeurs des afficheurs. Ce projet a consolidé ma compréhension de l'électronique de puissance et de l'instrumentation.",
        },
        robot: {
          title: "Robot autonome",
          tagline: "Projet S2 — Automatisme & IA",
          teaser: "Développement d'un robot autonome pour course intra-scolaire",
          objectives: [
            "Concevoir un robot autonome écologique de plus de 700 g pour parcourir un labyrinthe.",
            "Utiliser 2 servomoteurs et 2 capteurs de distance HC-SR04.",
            "Optimiser le modèle pour la vitesse et l'agilité face aux autres robots.",
          ],
          tech: ["C / C++", "Usinage des pièces", "Capteur ultrason HC-SR04"],
          body:
            "Conception complète d'un robot autonome : usinage des pièces mécaniques, intégration des capteurs ultrasons pour la détection d'obstacles, et programmation embarquée en C/C++ pour la prise de décision. L'optimisation du couple et de la masse a été clé pour battre les autres équipes lors de la course. Une expérience complète couvrant mécanique, électronique et logiciel.",
        },
      },
    },
    footer: "© Mathéo Caro — Portfolio GEII / AII",
  },
  en: {
    nav: {
      home: "Home",
      cv: "Resume",
      contact: "Contact",
      projects: "Projects",
      downloadCv: "Download CV",
      role: "BUT 2 GEII · AII",
    },
    home: {
      eyebrow: "Specialization in Industrial Automation & Computing",
      title: "Electrical engineering &",
      titleAccent: "industrial computing",
      intro:
        "Second-year BUT GEII student (AII track), I work at the intersection of electrical engineering and industrial computing — machine learning, embedded systems, and industrial automation. A selection of my hands-on projects in vision and data analysis.",
      statProjects: "5",
      statProjectsLabel: "Major projects completed",
      statSemesters: "4",
      statSemestersLabel: "Semesters of training",
      statSpecialty: "AII",
      statSpecialtyLabel: "Industrial Automation & Computing",
      statLangs: "Python · C/C++",
      statLangsLabel: "VHDL · SFC/LD · Arduino",
      sectionProjects: "GEII / AII Projects",
      sectionProjectsHint: "Click for details",
      sectionAbout: "About me",
      aboutP1:
        "Beyond classes and labs, I'm driven by the passion to solve concrete problems with intelligent systems. My GEII studies gave me a solid foundation in both hardware (sensors, embedded systems) and software (Codeblocks, MatLab, LabView).",
      aboutP2:
        "I'm currently looking for an internship to apply my skills in deep learning and gain practical industry experience. I believe in collaborative innovation and continuous learning.",
      hobbiesTitle: "Hobbies",
      hobbies: ["Volleyball", "Kitesurfing", "Scuba diving", "3D printing", "Chess"],
      universityTitle: "University projects",
      seeProject: "View project",
    },
    cv: {
      title: "Resume & Academic Profile",
      subtitle: "Mathéo Caro",
      profile: "Profile",
      profileText:
        "Fascinated by industrial challenges and eager to apply my knowledge in Electrical Engineering and Industrial Computing, I'm seeking an internship of at least 8 weeks to gain my first professional experience.",
      age: "Age — 20 (born 12/12/2005)",
      availability: "Available from April 20, 2025",
      license: "Driver's license in progress",
      contact: "Contact",
      languages: "Languages",
      qualities: "Qualities",
      qualitiesList: ["Perseverance", "Critical thinking", "Teamwork", "Project design", "Effective communication"],
      education: "Education",
      eduItems: [
        { date: "Since Sept. 2024", title: "BUT 1 & 2 GEII", school: "IUT de Vélizy, UVSQ — Vélizy-Villacoublay" },
        { date: "2022 – 2024", title: "American High School Diploma", school: "CIC, Valencia — Venezuela", note: "Specialization in mathematics." },
        { date: "June 2024", title: "Harvard CS50x", school: "Digital programming diploma" },
        { date: "Summer 2022", title: "Certificates", school: "Electronics & Arduino · UAM University Program" },
      ],
      experience: "Industry experience",
      expItems: [
        { title: "Plastic production observation internship", company: "Plásticos Trébol (family company) — Venezuela" },
        { title: "Mold-maker apprentice", company: "Observation of CNC processes" },
      ],
      skills: "Technical skills",
      skillsGroups: [
        { title: "Computing", items: ["C / C++ and Python", "Code::Blocks", "Linux CLI", "LabView", "Arduino · Raspberry · Micro C"] },
        { title: "Industrial computing", items: ["FPGA Xilinx — VHDL", "Microcontrollers 8051-C"] },
        { title: "Electronics", items: ["PCB design with KiCad (CAD)", "Digital & analog electronics", "Energy conversion", "LTSpice & PSIM simulation"] },
        { title: "Automation", items: ["Schneider PLCs", "ACE Grafcet", "Ladder logic"] },
        { title: "Tools & misc", items: ["LibreOffice & Google + Gemini AI", "Canva", "3D design and printing"] },
      ],
      universityProjects: "University projects",
      uniProjects: [
        { date: "Sept. 2024", title: "Digital thermometer", desc: "Study and build of a through-hole digital thermometer.", year: "BUT 1" },
        { date: "May 2025", title: "FPGA motor control", desc: "Motor speed control driven by an FPGA.", year: "BUT 1" },
        { date: "April 2025", title: "PCB design", desc: "PCB design and fabrication (CAD: KiCad).", year: "BUT 1" },
        { date: "Dec. 2024", title: "Eco-robot", desc: "Eco-robot built for an intra-school race.", year: "BUT 1" },
        { date: "Jan. 2025", title: "Digital test bench", desc: "Test bench controlled by a digital board (frame decoding, FPGA…).", year: "BUT 2" },
        { date: "Feb. 2025", title: "PLC programming", desc: "PLC and micro-PLC programming (Schneider, Arduino).", year: "BUT 2" },
        { date: "Sept. 2025", title: "Robotic arm control", desc: "Control of an industrial robotic arm.", year: "BUT 2" },
      ],
    },
    contact: {
      title: "Get in touch",
      subtitle: "Available for an internship from April 20, 2025.",
      sendEmail: "Send an email",
      location: "Vélizy-Villacoublay, France",
      phone: "+33 7 75 76 64 32",
      backHome: "Back to home",
    },
    projects: {
      backToProjects: "← Back to projects",
      objectives: "Key objectives",
      technologies: "Technologies",
      implementation: "Implementation details",
      items: {
        wav: {
          title: "WAV file processing",
          tagline: "S2 project — Signal processing & Python",
          teaser: "Using Python and SciPy",
          objectives: [
            "Analyze WAV file structure (header, data).",
            "Implement digital filters (low-pass / high-pass) in Python.",
            "Modify amplitude and frequency of signals.",
          ],
          tech: ["Python 3", "SciPy", "NumPy", "Signal processing"],
          body:
            "This project focused on digital audio signal manipulation. I used scipy.io.wavfile to read and write WAV files, and scipy.signal for normalization, frequency filtering, and tempo modification via resampling. It deepened my understanding of moving between time and frequency domains (Fourier Transform). I also discovered an unexpected passion for music applied to engineering — a motivation that drove the entire project.",
        },
        thermo: {
          title: "Discrete-component digital thermometer",
          tagline: "S1 project — Analog & digital electronics",
          teaser: "Built with discrete components only",
          objectives: [
            "Design a conditioning circuit for a PTC/NTC thermistor.",
            "Use an op-amp comparator for temperature conversion.",
            "Display the result on 7-segment displays.",
          ],
          tech: ["Analog electronics", "Op-amp", "7-segment display", "LTSpice (simulation)"],
          body:
            "Goal: build a working thermometer without a microcontroller, using only discrete components (resistors, capacitors, op-amps, logic gates). I designed the circuit to read the resistance variation of a temperature sensor, convert it to voltage, and use comparators to drive the 7-segment decoders. This project consolidated my understanding of power electronics and instrumentation fundamentals.",
        },
        robot: {
          title: "Autonomous robot",
          tagline: "S2 project — Automation & AI",
          teaser: "Autonomous robot for an intra-school race",
          objectives: [
            "Design an eco-friendly autonomous robot over 700g to traverse a maze.",
            "Use 2 servo motors and 2 HC-SR04 ultrasonic distance sensors.",
            "Optimize the model for speed and agility against other robots.",
          ],
          tech: ["C / C++", "Mechanical machining", "HC-SR04 ultrasonic sensor"],
          body:
            "Full autonomous robot build: machining the mechanical parts, integrating ultrasonic sensors for obstacle detection, and embedded C/C++ programming for decision-making. Torque and weight optimization were key to winning the race. A complete experience spanning mechanics, electronics, and software.",
        },
      },
    },
    footer: "© Mathéo Caro — GEII / AII Portfolio",
  },
};