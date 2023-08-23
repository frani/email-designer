const fs = require("fs");
const emailDesigner = require("./");

const text = `
Gracias por Participar

Ahora solo tenes que hacer CLICK en el siguiente boton.

Saludos
`;

const HTML = emailDesigner.createHTML([
  {
    name: "base/sample",
    params: {
      name: "hola mundo",
    },
  },
  {
    name: "base/box-text",
    params: {
      text,
      buttonTitle: "Click Me",
    },
  },
  {
    name: "base/box-otp",
    params: {
      text,
      otp: "123 456",
    },
  },
  {
    name: "base/social-icons",
    params: {
      address: "olegario andrade 315",
    },
  },
  {
    name: "base/footer",
    params: {
      address: "olegario andrade 315",
    },
  },
]);

fs.writeFileSync("./example.html", HTML);
