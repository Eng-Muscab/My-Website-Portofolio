import type { Locale } from "@/i18n/config";
import type { LocalizedText } from "@/types/content";

type StatItem = {
  key: string;
  label: LocalizedText;
  value: string;
};

type HighlightItem = {
  key: "institutionalSystems" | "databaseProcedures" | "cleanUiTemplates" | "aiRepository";
  description: LocalizedText;
};

export const profile = {
  name: "Eng Moscab Bashir Hassan",
  brandName: "Eng Moscab",
  avatarImage: "/profile-photo.jpg",
  title: {
    en: "ML & Full-Stack Developer",
    so: "Horumariye ML & Full-Stack"
  } satisfies LocalizedText,
  tagline: {
    en: "Turning your ideas into ML-powered products, automation tools, and full-stack systems built for real business growth.",
    so: "Waxaan fikradahaaga u beddelaa alaabooyin ML ku shaqeeya, automation tools, iyo nidaamyo full-stack ah oo loogu dhisay koboc ganacsi oo dhab ah."
  } satisfies LocalizedText,
  location: {
    en: "Somalia (Remote-friendly).",
    so: "Soomaaliya (Shaqo fog waa suurtagal)."
  } satisfies LocalizedText,
  links: {
    email: "moscabbashir@gmail.com",
    whatsapp: "612374744",
    github: "https://github.com/Eng-Muscab",
    linkedin: "",
    x: ""
  },
  about: {
    en: [
      "I build ML-powered products and full-stack systems for real business workflows, from dashboards and portals to intelligent automation and detection tools.",
      "My focus is practical delivery: modern UI, reliable backend APIs, database design, and production-ready features that teams can use every day.",
      "I integrate machine learning and AI features where they add value, including classification, search, metadata extraction, and smart workflow assistance."
    ],
    so: [
      "Waxaan dhisaa alaabooyin ML ku shaqeeya iyo nidaamyo full-stack ah oo u adeegaya hawlo ganacsi oo dhab ah, laga bilaabo dashboards iyo portals ilaa automation iyo detection tools.",
      "Diiraddaydu waa gaarsiin wax ku ool ah: UI casri ah, backend APIs la isku halayn karo, naqshad database, iyo features diyaar u ah production oo kooxuhu maalin walba isticmaali karaan.",
      "Waxaan ku daraa machine learning iyo AI marka ay qiimo keenaan, sida classification, search, metadata extraction, iyo caawinta workflows."
    ]
  } satisfies Record<Locale, string[]>,
  stats: [
    {
      key: "systems",
      label: { en: "Systems Built", so: "Nidaamyo La Dhisay" },
      value: "12+"
    },
    {
      key: "modules",
      label: { en: "Projects / Modules", so: "Projects / Modules" },
      value: "40+"
    },
    {
      key: "clients",
      label: { en: "Clients Served", so: "Macaamiil La Adeegay" },
      value: "150+"
    },
    {
      key: "experience",
      label: { en: "Years Experience", so: "Sano Khibrad" },
      value: "1+ Year"
    }
  ] satisfies StatItem[],
  highlights: [
    {
      key: "institutionalSystems",
      description: {
        en: "Full-stack platforms for institutions, operations teams, and business workflows.",
        so: "Madallo full-stack ah oo loogu talagalay hay'ado, kooxo hawlgal, iyo workflows ganacsi."
      }
    },
    {
      key: "databaseProcedures",
      description: {
        en: "Prisma database schema design, SQL query optimization, migrations, and report logic.",
        so: "Naqshad Prisma database schema, SQL query optimization, migrations, iyo report logic."
      }
    },
    {
      key: "cleanUiTemplates",
      description: {
        en: "Responsive interfaces and printable forms/cards for operational teams.",
        so: "Interfaces responsive ah iyo forms/cards daabacaad loo diyaariyey kooxaha hawlgalka."
      }
    },
    {
      key: "aiRepository",
      description: {
        en: "ML/AI features such as detection, smart search, classification, and automation.",
        so: "Astaamo ML/AI ah sida detection, smart search, classification, iyo automation."
      }
    }
  ] satisfies HighlightItem[],
  cta: {
    en: "Available for ML, full-stack, and automation projects.",
    so: "Waxaan diyaar u ahay mashruucyo ML, full-stack, iyo automation."
  } satisfies LocalizedText
};
