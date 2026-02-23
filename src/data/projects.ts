import type { ProjectItem } from "@/types/content";

export const projects: ProjectItem[] = [
  {
    id: "inventory-erp-ims",
    category: "erp",
    name: {
      en: "Inventory ERP (IMS)",
      so: "Inventory ERP (IMS)"
    },
    shortDescription: {
      en: "Inventory and store management ERP for stock movement, purchases, requests, and approvals.",
      so: "ERP loogu talagalay maamulka inventory-ga iyo bakhaarka: stock movement, purchases, requests, iyo approvals."
    },
    longDescription: {
      en: "ERP module suite focused on operational inventory workflows, store requests, stock visibility, and management reporting.",
      so: "Qaybo ERP ah oo diiradda saaraya hawlaha inventory-ga, codsiyada bakhaarka, muuqaalka stock-ga, iyo warbixinnada maamulka."
    },
    features: [
      {
        en: "Stock-in / stock-out transactions",
        so: "Transactions-ka stock-in / stock-out"
      },
      {
        en: "Request and approval workflow",
        so: "Workflow codsi iyo ansixin"
      },
      {
        en: "Low-stock alerts and audit trails",
        so: "Digniino stock hoose iyo audit trails"
      }
    ],
    stack: ["React", "Node.js", "MySQL", "Charting"],
    image: "/project-placeholder.svg",
    status: "completed",
    year: "2024",
    links: {}
  },
  {
    id: "ai-digital-repository",
    category: "ai",
    name: {
      en: "AI-Powered Institutional Digital Repository Management System",
      so: "Nidaamka Maamulka Kaydka Dijitaalka Hay'adeed ee leh AI"
    },
    shortDescription: {
      en: "A digital repository platform with AI-assisted search, metadata extraction, and document organization.",
      so: "Madal kayd dijitaal ah oo leh raadinta AI, metadata extraction, iyo habaynta dukumiintiyada."
    },
    longDescription: {
      en: "Repository management system designed for institutions to organize, retrieve, and enrich documents using AI-assisted indexing and metadata workflows.",
      so: "Nidaam maamul kayd dijitaal ah oo loogu talagalay hay'ado si ay u habeeyaan, u helaan, una kobciyaan dukumiintiyada iyadoo la adeegsanayo indexing iyo metadata workflows AI taageerayo."
    },
    features: [
      {
        en: "Document ingestion and classification",
        so: "Gelinta dukumiintiyada iyo kala-soocid"
      },
      {
        en: "AI-assisted metadata extraction",
        so: "Metadata extraction oo AI taageerayo"
      },
      {
        en: "Search and retrieval across repository records",
        so: "Search iyo retrieval dhammaan records-ka kaydka"
      }
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "AI APIs", "S3"],
    image: "/project-placeholder.svg",
    status: "in-progress",
    year: "2025",
    links: {}
  },
  {
    id: "ai-human-vs-ai-detection",
    category: "ai",
    name: {
      en: "AI Human vs AI Detection",
      so: "AI Human vs AI Detection"
    },
    shortDescription: {
      en: "A detection platform for identifying AI-generated vs human-generated content with review workflows.",
      so: "Madal lagu kala saaro content-ka AI-gareeyay iyo kan aadanaha sameeyay oo leh review workflows."
    },
    longDescription: {
      en: "A practical analysis system for content verification, scoring, and review queues to support educators, teams, or institutions.",
      so: "Nidaam falanqayn wax ku ool ah oo loogu talagalay xaqiijinta content-ka, scoring, iyo review queues si ay uga faa'iidaystaan macallimiin, kooxo, ama hay'ado."
    },
    features: [
      {
        en: "Content scoring with confidence indicators",
        so: "Content scoring leh confidence indicators"
      },
      {
        en: "Review history and flagged cases",
        so: "Taariikh review iyo cases la calaamadeeyay"
      },
      {
        en: "API-ready integration for web dashboards",
        so: "API-ready integration oo loogu talagalay web dashboards"
      }
    ],
    stack: ["Next.js", "Node.js", "AI APIs", "PostgreSQL"],
    image: "/project-placeholder.svg",
    status: "in-progress",
    year: "2026",
    links: {}
  },
  {
    id: "events-management-web-mobile",
    category: "web",
    name: {
      en: "Events Management System (Web & Mobile)",
      so: "Nidaamka Maamulka Events-ka (Web & Mobile)"
    },
    shortDescription: {
      en: "An events management solution for web and mobile workflows including planning, ticketing, and operational updates.",
      so: "Xal maamulka events-ka ah oo taageera web iyo mobile, oo leh planning, ticketing, iyo updates hawlgal."
    },
    longDescription: {
      en: "A unified system for event operations with admin web dashboards and mobile-friendly workflows for staff and coordinators.",
      so: "Nidaam mideysan oo loogu talagalay hawlgalka events-ka leh admin web dashboards iyo mobile workflows u sahlan staff-ka iyo coordinators."
    },
    features: [
      {
        en: "Event setup, scheduling, and hall management",
        so: "Sameynta event-ka, jadwal, iyo maamulka hall-ka"
      },
      {
        en: "Web dashboard and mobile workflow support",
        so: "Web dashboard iyo taageero mobile workflows"
      },
      {
        en: "Ticket tracking and attendee updates",
        so: "Raadraaca tikidhada iyo updates-ka ka-qaybgalayaasha"
      }
    ],
    stack: ["Next.js", "Flutter", "Node.js", "PostgreSQL"],
    image: "/project-placeholder.svg",
    status: "in-progress",
    year: "2025",
    links: {}
  },
  {
    id: "mini-hotel-management-system",
    category: "erp",
    name: {
      en: "Mini Hotel Management System",
      so: "Mini Hotel Management System"
    },
    shortDescription: {
      en: "A hotel operations system for rooms, bookings, guest records, billing, and front-desk management.",
      so: "Nidaam hawlgal hotel ah oo loogu talagalay qolal, bookings, guest records, billing, iyo maamulka front-desk."
    },
    longDescription: {
      en: "A compact but practical hotel management platform for daily operations including reservations, check-in/check-out, and payment summaries.",
      so: "Madal maamul hotel oo kooban balse wax ku ool ah, oo loogu talagalay hawl maalmeedka sida reservations, check-in/check-out, iyo payment summaries."
    },
    features: [
      {
        en: "Room status and reservation management",
        so: "Maamulka room status iyo reservations"
      },
      {
        en: "Guest records and billing workflow",
        so: "Guest records iyo billing workflow"
      },
      {
        en: "Printable receipts and summary reports",
        so: "Receipts la daabici karo iyo summary reports"
      }
    ],
    stack: ["React", "Node.js", "MySQL", "TailwindCSS"],
    image: "/project-placeholder.svg",
    status: "in-progress",
    year: "2025",
    links: {}
  },
  {
    id: "library-management-system",
    category: "web",
    name: {
      en: "Library Management System",
      so: "Library Management System"
    },
    shortDescription: {
      en: "A library system for cataloging books, member records, borrowing/returns, and overdue tracking.",
      so: "Nidaam maktabad ah oo loogu talagalay cataloging books, member records, amaah/soo celin, iyo overdue tracking."
    },
    longDescription: {
      en: "A library operations platform for schools or institutions with catalog search, borrower management, and circulation reporting.",
      so: "Madal hawlgal maktabadeed oo ku habboon dugsiyo ama hay'ado, leh catalog search, borrower management, iyo circulation reporting."
    },
    features: [
      {
        en: "Book catalog and search tools",
        so: "Book catalog iyo qalabka search-ka"
      },
      {
        en: "Borrow/return workflow with due dates",
        so: "Workflow amaah/soo celin leh due dates"
      },
      {
        en: "Overdue tracking and librarian reports",
        so: "Overdue tracking iyo warbixinno librarian"
      }
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    image: "/project-placeholder.svg",
    status: "planned",
    year: "2026",
    links: {}
  }
];
