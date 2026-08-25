export interface FaqItem {
  question: string;
  answer: string;
  videoUrl?: string;
}

export const HOME_FAQS: readonly FaqItem[] = [
  {
    question: "¿Cómo saber en qué registro de Zona Sur está radicado tu auto?",
    answer:
      'Para conocer la radicación exacta de un vehículo por patente en Adrogué o cualquier localidad de Zona Sur, debes ingresar a la web oficial de la DNRPA en la sección "Consultas - Radicación por patentes". Colocando el dominio, el sistema te indicará el número de Registro Seccional correspondiente, su dirección física y datos de contacto.',
    videoUrl:
      "https://www.tiktok.com/@fabioviolaautomotores/video/7626732798442851604?is_from_webapp=1&sender_device=pc",
  },
  {
    question:
      "¿Qué informe tengo que sacar al comprar un auto usado en Zona Sur?",
    answer:
      "Al comprar un auto usado en Adrogué o cualquier localidad de Zona Sur, es fundamental sacar un Informe Histórico de Titularidad y de Estado de Dominio para verificar que el vehículo no tenga problemas legales. Además, es recomendable solicitar un informe de infracciones de tránsito para asegurarse de que no existan multas pendientes. También es importante revisar la documentación del vehículo, como la cédula verde, el título de propiedad y el último comprobante de pago del impuesto automotor. En FV Automotores, te asesoramos en cada paso para que tu compra sea segura y sin sorpresas.",
  },
  {
    question:
      "¿Cómo solicitar un Informe de Dominio para transferir en Adrogué?",
    answer:
      'El Informe de Dominio es clave para verificar que el auto no tenga prendas, embargos o inhibiciones antes de comprarlo. Se puede tramitar de forma 100% digital en la web de la DNRPA abonando los aranceles correspondientes. El proceso es sencillo: te dirigis hacia "Turnos e inicio de Trámites", luego a "Informes Online". Ingresás tu CUIL, el número de patente y seleccionas el trámite. Tenes dos opciones: Informe de Estado de Dominio o Informe Histórico de Titularidad y de Estado de Dominio. Nosotros te recomendamos que saques el Informe Histórico de Titularidad y de Estado de Dominio, la diferencia de costo es mínima y te permite más información. Abonas, y en aproximadamente 44, 48 horas recibís el informe completo en tu correo electrónico.',
    videoUrl:
      "https://www.tiktok.com/@fabioviolaautomotores/video/7616038069929561365?is_from_webapp=1&sender_device=pc",
  },
  {
    question:
      "¿Cómo sacar el informe de infracciones de tránsito en Buenos Aires?",
    answer:
      "El informe ya no se puede solicitar a través del portal de la DNRPA. Para verificar las multas pendientes, debes solicitar un informe a través de la página SUATS (Sistema Unificado de Administraciones Tributarias Subnacionales). Ingresas, elegís la opción inicial (con un costo de $7000 pesos aproximadamente), y luego seguis los pasos que te proporciona el sistema. Es importante destacar que las infracciones les corresponden al vehículo, no a la persona, por lo que el informe se realiza por patente.",
    videoUrl:
      "https://www.tiktok.com/@fabioviolaautomotores/video/7611642180158917909?is_from_webapp=1&sender_device=pc",
  },
  {
    question: "¿Toman permutas?",
    answer:
      "Sí, en FV Automotores aceptamos permutas. Si estás interesado en realizar una permuta, te invitamos a contactarnos para evaluar tu vehículo y discutir las opciones disponibles.",
  },
  {
    question: "¿Toman consignaciones?",
    answer:
      "Sí, en FV Automotores aceptamos consignaciones. Si estás interesado en realizar una consignación, te invitamos a contactarnos para evaluar tu vehículo y discutir las opciones disponibles.",
  },
  {
    question: "¿Queres saber si tu auto tuvo gnc?",
    answer:
      "Para saber si tu auto tuvo gnc debes entrar a la web de Energas -> Trámites y servicios -> Gas natural vehicular (GNV) -> Consulta por dominio. Introducimos una patente y consultamos si tuvo gas.",
    videoUrl:
      "https://www.tiktok.com/@fabioviolaautomotores/video/7664998071536798996?is_from_webapp=1&sender_device=pc",
  },
] as const;
