// Contenido de Preguntas Frecuentes de la página /faqs, agrupado por categoría.
// FaqsPage.js numera los items de forma continua a través de todas las categorías.
//
// Para poner un link dentro de una description, usá la sintaxis [texto](url):
// FaqsItem.js la detecta y la convierte en un <a> real. Una URL suelta
// (sin corchetes) también se vuelve clickeable automáticamente.

import rulebookPdf from "../assets/files/ReglamentoOficial.pdf";

export const faqsData = [
  {
    category: "Registro y participación",
    items: [
      {
        title: "¿Cómo puedo participar en el torneo?",
        description:
          "Debes ingresar al [registro](https://verdanskcodm.com/register). Regístrate durante el periodo de reclutamiento del 23 de octubre 12 PM [CST-6] al 31 de octubre 6 PM [CST-6].",
      },
      {
        title: "¿Tiene algún costo registrarse?",
        description: "No. El registro es completamente gratuito.",
      },
      {
        title: "¿Hay alguna restricción de edad para participar?",
        description: "Debes ser mayor de 18 años para participar en el torneo.",
      },
      {
        title: "¿Cómo sabré si fui seleccionado?",
        description:
          "Para cada fase, los jugadores seleccionados serán notificados por medio de los canales en el servidor oficial de Discord de CODM Señal Verdansk.",
      },
      {
        title: "¿Necesito tener una cuenta de Discord para participar?",
        description:
          "No es necesario tener una cuenta de Discord para completar tu registro. Sin embargo, en caso de ser seleccionado para avanzar en el torneo, será obligatorio contar con una cuenta de Discord ya que la información de seleccionados e indicaciones serán compartidas por este medio.",
      },
      {
        title: "¿Dónde puedo consultar el reglamento?",
        description: `Puedes consultar el reglamento oficial directamente [aquí](${rulebookPdf}).`,
      },
    ],
  },
  {
    category: "Offline Qualifiers",
    items: [
      {
        title: "¿Cuándo serán las Offline Qualifiers?",
        description: "Se realizarán los días 3 y 4 de noviembre.",
      },
      {
        title: "¿Cuántos jugadores serán seleccionados?",
        description:
          "Se seleccionarán 1,500 jugadores para participar en las Offline Qualifiers.",
      },
      {
        title: "¿Cómo se seleccionarán los jugadores?",
        description:
          "Los jugadores serán seleccionados al azar entre quienes hayan completado correctamente su registro, incluyendo el ingreso correcto de su usuario de Discord.",
      },
      {
        title: "¿Cómo sabré si fui seleccionado para las Offline Qualifiers?",
        description:
          "Todos los jugadores seleccionados serán notificados por medio de los canales en el servidor oficial de Discord de CODM Señal Verdansk.",
      },
      {
        title: "¿Cuántos jugadores pasarán a la siguiente etapa?",
        description: "400 jugadores podrán avanzar a las Online Qualifiers.",
      },
    ],
  },
  {
    category: "Online Qualifiers",
    items: [
      {
        title: "¿Cuándo serán las Online Qualifiers?",
        description:
          "Se realizarán los días 6 y 7 de noviembre y serán transmitidos en línea en los canales oficiales de CODM LATAM.",
      },
      {
        title: "¿Cuántos jugadores participarán?",
        description: "Participarán 400 jugadores, divididos en 4 bloques.",
      },
      {
        title: "¿Cómo se determinará quién avanza?",
        description:
          "Los 25 mejores jugadores de cada bloque avanzarán a la siguiente etapa, mediante una selección de kills y desempate según criterios de Activision.",
      },
    ],
  },
  {
    category: "Etapa de draft",
    items: [
      {
        title: "¿Qué es el Draft?",
        description:
          "Es la etapa en la que 25 creadores de contenido seleccionarán a 3 jugadores principales y 1 de banca para formar parte de su squad. Esta etapa está incluida al final de los Online Qualifiers y no será transmitida en línea.",
      },
    ],
  },
  {
    category: "La gran final",
    items: [
      {
        title: "¿Cuándo será la Gran Final?",
        description:
          "La Gran Final se realizará el 14 de noviembre en la Ciudad de México.",
      },
      {
        title:
          "¿Si quedo seleccionado para La Gran Final, necesito estar presencialmente en el Venue de la Ciudad de México?",
        description:
          "No, aunque el evento es presencial, todos los jugadores participarán de forma remota.",
      },
    ],
  },
  {
    category: "Información general",
    items: [
      {
        title: "¿Aún tienes dudas?",
        description:
          "No te preocupes, envíanos un mensaje por nuestro [Instagram oficial](https://www.instagram.com/callofdutymobilelatam).",
      },
    ],
  },
];

export default faqsData;
