import type { LocalizedText } from "@/types/content";

export type TestimonialItem = {
  id: string;
  name: string;
  role: LocalizedText;
  organization: LocalizedText;
  quote: LocalizedText;
};

export const testimonials: TestimonialItem[] = [
  {
    id: "zabrin",
    name: "Zabrin",
    role: {
      en: "Finance",
      so: "Finance"
    },
    organization: {
      en: "Isfaham Institution",
      so: "Isfaham Institution"
    },
    quote: {
      en: "The system delivery was practical and clear. Our finance work became easier to manage and report.",
      so: "Gaarsiinta nidaamku waxay ahayd mid wax ku ool ah oo cad. Shaqadeena finance-ka way fududaatay in la maareeyo lana warbixiyo."
    }
  },
  {
    id: "feysal",
    name: "Feysal",
    role: {
      en: "Sales & Marketing",
      so: "Sales & Marketing"
    },
    organization: {
      en: "Dubai Collection",
      so: "Dubai Collection"
    },
    quote: {
      en: "Good communication, clean UI, and useful updates. The solution matched our workflow and team needs.",
      so: "Isgaarsiin fiican, UI nadiif ah, iyo updates faa'iido leh. Xalku wuxuu la jaan qaaday workflow-gayaga iyo baahida kooxda."
    }
  }
];
