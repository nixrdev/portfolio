export const EXPERIENCES = [
  {
    "year": "Feb 2026 - Present",
    "role": "Software Engineer - AI and backend system (Internship)",
    "company": "Figmenta",
    "location": "Milan, Italy",
    "description": "Developing multiple agentic features and participating in product development decisions, designing features while working with tradeoffs across the full development cycle end to end spanning database, API, UI, and agentic systems. Currently building Cadence, a content automation platform controllable via Claude and ChatGPT, architected with an MCP layer.",
    "technologies": [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "React.js",
      "PostgreSQL",
      "REST APIs",
      "Supabase"
    ]
  },
  {
    "year": "Apr 2026 - Present",
    "role": "Open Source Developer (SOC 2026)",
    "company": "AOSSIE",
    "location": "Canberra, Australian Capital Territory (Remote)",
    "description": "Contributing to open-source projects under AOSSIE during Spring of Code 2026.",
    "technologies": [
      "JavaScript",
      "TypeScript",
    ]
  },
  {
    year: "July 2025 - Present",
    role: "Full Stack Developer (Internship)",
    company: "Bitwrap Technologies",
    location: "Ambala Haryana, India",
    description: `Developing and integrating end-to-end features for business use cases, driving both frontend and backend development and Ensuring system performance and security through adherence to best practices and robust architectural design.`,
    technologies: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "tailwind CSS",
      "PostgreSQL",
    ],
  },
  ];

export const PROJECTS = [
  {
    name: "Cadence",
    description:
      "Content automation platform for social publishing, scheduling, analytics, inbox, and AI agent workflows.",
    longDescription:
      "A content automation platform with optimized media upload and publishing for social assets, bringing average image and short-form video readiness to under 20 seconds while reducing Cloudflare R2 storage costs by 25%. Built a reliable FFmpeg and Inngest worker with Cloudflare R2 multipart uploads, retries, leases, heartbeats, and per-workspace concurrency controls for large media processing. Owns platform integrations end to end across Instagram Graph API, YouTube, TikTok, Google Calendar, OAuth, scoped permissions, workspace-aware tools, and media import.",
    technologies: ["FFmpeg", "Inngest", "Cloudflare R2", "TypeScript", "Node.js", "Instagram Graph API", "YouTube API", "TikTok API", "OAuth"],
    features: [
      "Sub-20s media readiness for images and short-form video",
      "Resilient FFmpeg + Inngest worker with retries and leases",
      "27% Cloudflare R2 storage cost reduction",
      "End-to-end integrations: Instagram, YouTube, TikTok, Calendar",
    ],
    liveLink: "https://app.cadence.figmenta.site",
    githubLink: "",
    videoLink: "",
  },
  {
    name: "VoxCtrl",
    description:
      "On-device voice command daemon in Go with local audio capture and speech-to-text — all client-side for zero cloud dependency.",
    longDescription:
      "An on-device voice-command daemon in Go with local audio capture and speech-to-text, keeping command processing fully client-side with zero cloud dependency. Leverages Goroutines and Channels for concurrent audio processing, achieving sub-1.5s response latency for real-time voice interaction. Packaged as a systemd daemon with SQLite session logging for always-on background execution across Linux devices.",
    technologies: ["Go (Golang)", "SQLite", "Linux", "systemd", "Speech-to-Text"],
    features: [
      "Zero-cloud on-device processing",
      "Sub-1.5s response latency with concurrent Goroutine processing",
      "systemd daemon packaging for always-on Linux execution",
      "SQLite session logging",
    ],
    liveLink: "",
    githubLink: "https://github.com/nixrdev/voxctrl",
    videoLink: "",
  },
  {
    name: "Agentic Industrial IoT Anomaly Control",
    description:
      "Agentic industrial anomaly-diagnosis platform combining real-time IoT telemetry, statistical fault detection, incident correlation, and historical retrieval.",
    longDescription:
      "An agentic industrial anomaly-diagnosis platform that combines real-time IoT telemetry, statistical fault detection, incident correlation, and historical retrieval to transform raw sensor data into traceable maintenance decisions. A decision engine evaluates anomaly strength, detector agreement, retrieval similarity, and data quality to recommend actions or escalate uncertain cases for human review. Built with an LLM explanation and observability pipeline where OpenTelemetry and SigNoz trace retrieval, inference latency, abstention reasons, operator actions, and outcomes.",
    technologies: ["IoT", "Go (Golang)", "OpenTelemetry", "SigNoz", "LLM", "LangGraph"],
    features: [
      "Real-time telemetry-driven anomaly diagnosis",
      "Decision engine with escalation for uncertain cases",
      "LLM explanation pipeline with policy-bound answers",
      "Observability via OpenTelemetry and SigNoz",
    ],
    liveLink: "",
    githubLink: "https://github.com/nixrdev/AI-Powered-Industrial-Anomaly-Detection",
    videoLink: "",
  },
  {
    name: "Four-in-a-Row",
    description:
      "A full-stack implementation of the classic Connect Four game featuring a React client with canvas graphics and a Go backend.",
    longDescription:
      "This repository hosts a complete client-server implementation of the Four-in-a-Row game. The client is built with React and Vite, utilizing Konva for high-performance canvas rendering and Framer Motion for smooth visual effects. The backend is powered by Go, designed to handle game logic and state management efficiently.",
    technologies: [
      "React.js",
      "Vite",
      "TypeScript",
      "Konva (Canvas)",
      "Framer Motion",
      "Zustand",
      "Go (Golang)",
    ],
    features: [
      "Interactive Konva canvas-based game board",
      "Real-time game state management with Zustand",
      "Smooth animations using Framer Motion",
      "Client-server architecture",
      "Scalable Go backend structure",
    ],
    liveLink: "https://4-rows-game.vercel.app/",
    githubLink: "https://github.com/nixrdev/4_rows_game",
    videoLink: "",
  },
  {
    name: "DTIX",
    description:
      "Full Stack ticketing & NFT marketplace platform on Node.js, MongoDB, and Redis with a real-time auction engine and Stripe payments.",
    longDescription:
      "A ticketing platform with backend on Node.js, MongoDB, and Redis solving concurrent seat selection and race conditions during high-demand sales. Features a real-time auction engine over WebSockets (Socket.io) with sub-100ms bid propagation across distributed bidders. Integrated Stripe payments and a production NFT ticketing system on Vercel with payment flow and digital ownership verification.",
    technologies: [
      "Node.js",
      "MongoDB",
      "Redis",
      "Socket.io",
      "Stripe API",
      "WebSockets",
      "Vercel",
      "NFT",
    ],
    features: [
      "Concurrent seat selection handling under high-demand sales",
      "Real-time auction engine with sub-100ms bid propagation",
      "Stripe payment integration",
      "NFT ticketing with digital ownership verification",
    ],
    liveLink: "https://dtix.vercel.app/",
    githubLink: "https://github.com/nixrdev/dtix",
    videoLink: "",
  },
];

export const OPENSOURCE = [
  {
    org: "OpenSSF",
    project: "gittuf",
    description: "gittuf is a platform-agnostic Git security system",
    links: [
      "https://github.com/gittuf/gittuf/pull/1305#event-25185296641",
      "https://github.com/gittuf/gittuf/pull/1317#event-25079047386",
      "https://github.com/gittuf/gittuf/pull/1294#event-24853947514"
    ],
  },
];
