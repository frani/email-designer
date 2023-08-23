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
    },
    {
      name: "modern/box/text",
      params: {
        text: "a ver che si pongo esto que puede pasar ?",
      },
    },
    {
      name: "modern/box/text",
      params: {
        text: "a ver che si pongo esto que puede pasar ?",
      },
    },
    {
      name: "modern/box/bottom",
    },
    {
      name: "modern/box/top",
    },
    {
      name: "modern/box/text",
      params: {
        text: "a ver che si pongo esto que puede pasar ?",
        style:
          "padding: 100px 0px 0px 20px; font-family: arial; font-weight: 600;",
      },
    },
    {
      name: "modern/box/bottom",
    },
    {
      name: "modern/box/top",
    },
    {
      name: "modern/box/text",
      params: {
        text: "a ver che si pongo esto que puede pasar ?",
      },
    },
    {
      name: "modern/box/otp",
      params: {
        otp: "123654",
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
      params: {
        whatsapp: "https://wa.me/+549",
        instagram: "https://instagram.com/palta-app",
        facebook: "https://fb.com/palta-app",
      },
    },
    {
      name: "modern/footer/address",
      params: {
        address:
          "Palta SAS, Campus Olegario, Olegario Andrade 315, Mendoza, M5500 BDP",
      },
    },
  ],
  "modern/layout"
);

fs.writeFileSync("./example-modern.html", HTML);
