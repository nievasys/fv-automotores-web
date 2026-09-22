export interface GuideSection {
  h2: string;
  parrafos: string[];
  lista?: string[];
}

export interface Article {
  slug: string;
  pregunta: string;
  intro: string;
  categoria: string;
  publishedAt: string;
  updatedAt: string;
  readMinutes: number;
  videoUrl?: string;
  cover: string;
  secciones: GuideSection[];
}

export const AUTHOR = {
  name: "Juan Pablo Viola",
  role: "FV Automotores · Adrogué",
  photo: "/presentacion-juampi.webp",
};

export function formatFechaLarga(iso: string): string {
  return new Date(iso).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export const BLOG_ARTICLES: readonly Article[] = [
  {
    slug: "como-saber-en-que-registro-esta-radicado-mi-auto",
    pregunta: "¿Cómo saber en qué registro de Zona Sur está radicado mi auto?",
    intro:
      "Para conocer la radicación exacta de un vehículo por patente en Adrogué o cualquier localidad de Zona Sur, tenés que ingresar a la web oficial de la DNRPA, en la sección «Consultas — Radicación por patentes». Colocás el dominio y el sistema te indica el número de Registro Seccional correspondiente, su dirección física y los datos de contacto.",
    categoria: "Trámites e informes",
    publishedAt: "2026-09-10",
    updatedAt: "2026-09-16",
    readMinutes: 3,
    videoUrl:
      "https://www.tiktok.com/@fabioviolaautomotores/video/7626732798442851604?is_from_webapp=1&sender_device=pc",
    cover: "/hero_background.webp",
    secciones: [
      {
        h2: "¿Qué es la radicación y por qué importa?",
        parrafos: [
          "Cada auto está radicado en el registro seccional que corresponde a la localidad donde vive su titular. Ese dato no es menor: define dónde hacés trámites, pagás el impuesto automotor y realizás la transferencia.",
          "Si vas a comprar o vender un usado en Zona Sur, conocer la radicación te evita sorpresas y te adelanta los plazos de cada gestión.",
        ],
      },
      {
        h2: "Paso a paso para conocer tu registro",
        parrafos: [
          "Entrá a la web oficial de la DNRPA, andá a la sección «Consultas — Radicación por patentes» e ingresá el dominio del vehículo.",
          "El sistema te va a devolver el número del Registro Seccional, su dirección física y los datos de contacto. No hace falta sacar turno para esta consulta: es gratuita y demora segundos.",
        ],
      },
      {
        h2: "Consejo de FV Automotores",
        parrafos: [
          "En FV Automotores verificamos la radicación de cada vehículo antes de publicarlo y te acompañamos en la transferencia para que no tengas que hacer doble viaje.",
        ],
      },
    ],
  },
] as const;