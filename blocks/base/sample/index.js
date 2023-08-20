const render = ({ name = "hello world" }) => {
  const rendered = `
    <h1>${name}</h1>
    `;
  return rendered;
};

module.exports = { render };
