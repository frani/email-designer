const fs = require("fs");
const emailDesigner = require(".");

const text = `
Gracias por Participar

Ahora solo tenes que hacer CLICK en el siguiente boton.

Saludos
`;

const HTML = emailDesigner.createHTML(
  [
    {
      name: "modern/logo",
      params: {},
    },
    {
      name: "modern/box/top",
      params: {},
    },
    {
      name: "modern/box/text",
      params: {
        text: "a ver che si pongo esto que puede pasar ?",
      },
    },
    {
      name: "modern/box/bottom",
      params: {},
    },
    {
      name: "modern/footer/tyc",
      params: {},
    },
    {
      name: "modern/footer/social-icons",
      params: {},
    },
    {
      name: "modern/footer/address",
      params: {
        address: "olegario andrade 315",
      },
    },
  ],
  "modern/layout"
);

fs.writeFileSync("./example-modern.html", HTML);
