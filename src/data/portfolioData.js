export const profileData = {
  name: "Jerold M. Amora",
  fullName: "Jerold Micarandayo Amora",
  role: "Vue & Laravel Developer | Fresh Graduate",
  degree: "BS in Information Technology",
  honors: "Cum Laude",
  age: 23,
  email: "jeroldash.amora@gmail.com",
  phone: "09243153866",
  location: "Cabadbaran City, Agusan del Norte, Philippines",
  bio: "I am a 23-year-old fresh graduate with a degree in Information Technology (BSIT, Cum Laude), equipped with web development skills (Vue, Laravel, NestJS, JavaScript, PHP, Python) and a solid technical foundation in computer systems servicing gained through Senior High School TVL track and TESDA NC II certification. Eager to apply my skills, gain practical experience, and grow both personally and professionally in the IT field.",

  socials: [
    { name: "GitHub", url: "https://github.com/JEIT25", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/jerold-amora-26233727b/", icon: "Linkedin" },
    { name: "Email", url: "mailto:jeroldash.amora@gmail.com", icon: "Mail" },
    { name: "Phone", url: "tel:09243153866", icon: "Phone" }
  ],

  achievements: [
    {
      title: "Graduated Cum Laude",
      institution: "CSU Cabadbaran Campus",
      year: "2026",
      badge: "Academic Excellence"
    },
    {
      title: "Graduated with Honors",
      institution: "Candelaria Institute of Tech. - Cabadbaran INC.",
      year: "2022",
      badge: "Senior High TVL Track"
    }
  ],

  education: [
    {
      degree: "Senior High School – TVL Track (Computer System Servicing Strand)",
      institution: "Candelaria Institute of Tech. - Cabadbaran INC.",
      period: "2021 – 2022",
      honor: "Graduated with Honors",
      details: "Comprehensive training in PC assembly, OS deployment, network configuration, and TESDA NC II preparation."
    },
    {
      degree: "BS in Information Technology",
      institution: "CSU - Cabadbaran Campus",
      period: "2022 – 2026",
      honor: "Graduated Cum Laude",
      details: "Focused on Full-Stack Web Development, Database Management, and Machine Learning integration in Capstone systems."
    }
  ],

  experience: [
    {
      role: "Intern – MIS Office",
      company: "CSU Cabadbaran Campus",
      period: "08/2025 – 12/2025",
      location: "Cabadbaran Campus",
      responsibilities: [
        "Assisted in maintaining and troubleshooting campus network infrastructure and IT hardware.",
        "Provided technical support for software configuration, operating system installation, and computer diagnostics.",
        "Supported database maintenance tasks and user account management under the MIS administration."
      ]
    }
  ],

  capstone: {
    title: "QR-Based Attendance Tracking with Isolation Forest Anomaly Detection",
    tagline: "Capstone System Project (2025 - 2026)",
    technologies: ["Vue", "NestJS", "Python / Isolation Forest", "MySQL", "REST API", "Tailwind CSS"],
    description: "An intelligent, real-time student and employee attendance monitoring system that pairs quick QR code verification with Machine Learning anomaly detection (Isolation Forest algorithm) to automatically spot suspicious timestamps, proxy scanning, and irregular log patterns.",
    keyFeatures: [
      "Real-Time QR Scanner interface built with Vue Composition API",
      "Isolation Forest Anomaly Detection engine flagging outlier check-ins in milliseconds",
      "NestJS REST API backend with Sanctum authorization & structured response schemas",
      "Comprehensive Admin dashboard with customizable automated audit reports and metrics export"
    ]
  },

  projects: [
    {
      id: "capstone-attendance",
      systemName: "CSUCC QR Connect (Capstone System)",
      category: "Capstone System Project",
      url: "https://csucc-qr-connect-frontend-neon.vercel.app/",
      tech: ["Nuxt (Vue)", "NestJS API", "Python Flask (Isolation Forest)", "PostgreSQL"],
      description: "CSUCC QR Connect is an intelligent attendance monitoring system developed for CSU Cabadbaran Campus that pairs configurable two-way QR scanning (instructor batch-scanning and student self-scanning) with a real-time Python Isolation Forest machine learning microservice that calculates Haversine distance and device-fingerprint frequencies to detect and block proxy attendance fraud."
    },
    {
      id: "mis-support-portal",
      systemName: "FixIT: IT Helpdesk & Support System",
      category: "Full-Stack Web Application",
      url: "https://frontend-it-helpdesk-ticketing-syst.vercel.app/",
      tech: ["Vue", "Laravel API", "PostgreSQL", "Tailwind CSS", "Pinia"],
      description: "FixIT is a structured, role-aware IT helpdesk system that features a 6-stage automated ticket status lifecycle, role-based access control for Employees, IT Agents, and Administrators, 10MB file attachments, and internal support notes."
    },
    // {
    //   id: "laravel-vue-boilerplate",
    //   systemName: "Laravel + Vue SPA Enterprise Starter",
    //   category: "Open Source System",
    //   url: "#",
    //   tech: ["Laravel", "Vue", "Pinia", "Sanctum Auth", "Vite"],
    //   description: "High-performance SPA boilerplate featuring Sanctum stateful authentication, dynamic role-based access control, responsive layout primitives, and automated API error handling."
    // },
    // {
    //   id: "techserv-nc2-helper",
    //   systemName: "PC Diagnostics & Network Subnet Calculator",
    //   category: "Technical Utility System",
    //   url: "#",
    //   tech: ["JavaScript", "HTML5", "CSS3", "Node.js"],
    //   description: "Automated IP address calculator, TCP/IP subnetting validator, and hardware diagnostic checklist tool designed for TVL & TESDA NC II computer servicing technicians."
    // },
    // {
    //   id: "system-slot-5",
    //   systemName: "Full-Stack E-Commerce & Service Management Portal",
    //   category: "Upcoming Hosted System #1",
    //   url: "#",
    //   tech: ["Vue", "Laravel API", "MySQL", "Stripe API"],
    //   description: "Next-generation service scheduling and inventory tracking platform featuring real-time checkout analytics, invoice generation, and customer portal."
    // },
    // {
    //   id: "system-slot-6",
    //   systemName: "Microservice Network Telemetry Dashboard",
    //   category: "Upcoming Hosted System #2",
    //   url: "#",
    //   tech: ["Vue", "NestJS", "PostgreSQL", "WebSocket"],
    //   description: "Real-time network ping latency monitoring, server health metric telemetry, and instant alert notification system."
    // }
  ],

  technicalSkills: {
    languages: ["JavaScript", "PHP", "Python"],
    frameworks: ["Vue", "Laravel", "NestJS"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Vite", "NPM"],
    databases: ["MySQL", "PostgreSQL"],
    frontend: ["HTML5", "CSS3", "Tailwind CSS", "RESTful APIs", "Pinia", "Vue Router"],
    hosting: ["Vercel", "Supabase", "Render", "Railway"],
    aiTools: ["Claude", "Gemini", "DeepSeek"]
  },

  expertise: [
    {
      category: "Hardware & Software Servicing",
      items: [
        "PC Assembly, Upgrades, and Component Testing",
        "Hardware and Software Troubleshooting",
        "OS Installation & Configuration (Windows)"
      ]
    },
    {
      category: "Network Infrastructure & Diagnostics",
      items: [
        "Basic Network Configuration & Troubleshooting",
        "IP Addressing (TCP/IP), Subnetting, DHCP & DNS Setup",
        "LAN Connectivity Testing & Cabling Standards"
      ]
    },
    {
      category: "Web Development",
      items: [
        "Full-Stack Single Page Application (SPA) Architecture",
        "Vue Reactive State Management & Component Design",
        "Laravel RESTful API Design & Authentication"
      ]
    }
  ],

  certificates: [
    {
      id: "cert-js",
      title: "Programming with JavaScript",
      issuer: "Meta (via Coursera)",
      date: "08/16/2024",
      verifyUrl: "https://coursera.org/verify/KMVOLI7V7WI7",
      certNumber: "KMVOLI7V7WI7",
      maskedNumber: "KMVO••••••WI7",
      signatureBlurred: true,
      logo: "meta",
      imagePath: "/certificates/cert-js.png",
      description: "Advanced JavaScript concepts, asynchronous programming, DOM manipulation, object-oriented design, and testing."
    },
    {
      id: "cert-frontend",
      title: "Introduction to Front-End Development",
      issuer: "Meta (via Coursera)",
      date: "07/19/2024",
      verifyUrl: "https://coursera.org/verify/H6UKDMT3GEK4",
      certNumber: "H6UKDMT3GEK4",
      maskedNumber: "H6UK••••••EK4",
      signatureBlurred: true,
      logo: "meta",
      imagePath: "/certificates/cert-frontend.png",
      description: "Core Web Technologies, responsive web design principles, UI component structuring, and modern web browser rendering."
    },
    {
      id: "cert-git",
      title: "Version Control (GIT)",
      issuer: "Meta (via Coursera)",
      date: "07/11/2025",
      verifyUrl: "https://coursera.org/verify/ZWZ2HI53A9Y1",
      certNumber: "ZWZ2HI53A9Y1",
      maskedNumber: "ZWZ2••••••Y1",
      signatureBlurred: true,
      logo: "meta",
      imagePath: "/certificates/cert-git.png",
      description: "Git commands, branching workflows, pull requests, merge conflict resolution, and collaborative GitHub repository management."
    },
    {
      id: "cert-udemy",
      title: "Master Laravel, Vue, Inertia (VILT Stack)",
      issuer: "Udemy (Instructor: Piotr Jura)",
      date: "08/26/2024",
      verifyUrl: "https://ude.my/UC-a9838473-22a9-4a2c-b7f0-29d3bc925773",
      certNumber: "UC-a9838473-22a9-4a2c-b7f0-29d3bc925773",
      maskedNumber: "UC-a983••••-22a9-••••-29d3bc925773",
      signatureBlurred: true,
      logo: "udemy",
      imagePath: "/certificates/cert-udemy.png",
      description: "Comprehensive VILT stack application engineering: Laravel API backend, Vue Composition API, Inertia.js, and authorization."
    },
    {
      id: "cert-tesda",
      title: "Computer System Servicing NC II (COC 1)",
      issuer: "TESDA (Republic of the Philippines)",
      date: "08/19/2025",
      verifyUrl: "Official TESDA Registry",
      certNumber: "[ PERMANENTLY REDACTED ]",
      maskedNumber: "[ PERMANENTLY REDACTED ]",
      signatureBlurred: true,
      isPermanentlyBlurred: true,
      logo: "tesda",
      imagePath: "/certificates/cert-tesda.png",
      description: "National Certificate II qualification for COC 1 Level (Install and Configure Computer Systems), including PC hardware assembly and operating system deployment."
    },
    {
      id: "cert-mis-ojt",
      title: "On-the-Job Training (OJT) Certificate of Completion",
      issuer: "MIS Office • Caraga State University (CSUCC)",
      date: "12/22/2025",
      verifyUrl: "Official CSUCC MIS Office Record (486 Hours)",
      logo: "csu",
      imagePath: "/certificates/cert-mis-ojt.png",
      description: "Successfully completed 486 hours of practical On-the-Job Training (OJT) at the Management Information System (MIS) Office, CSU Cabadbaran Campus."
    }
  ],

  languages: [
    { name: "Bisaya", proficiency: "Native / Mother Tongue" },
    { name: "Filipino", proficiency: "Fluent" },
    { name: "English", proficiency: "Professional / Fluent" }
  ]
}
