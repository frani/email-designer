/*!
 * email-designer <https://github.com/frani/email-designer>
 *
 * Copyright (c) 2023-present, frani.
 * Released under the MIT License.
 */

"use strict";

/**
 * Create a HTML for Emails
 * @description in a notation way, create a HTML describing every blocks.
 * blocks follow struct sample:
 * {
 *  name: 'base/sample',
 *  params: {
 *    text: 'hello world'
 *  }
 * }
 * @param {Array} Blocks is an array of Block Types
 * @returns {String} HTML
 */
const createHTML = (
  blocks = [{ name: "base/sample", params: { text: "hello world" } }]
) => {
  console.log({ blocks });
  const renders = blocks.map((block) => {
    return render({ name: block.name, params: block.params });
  });
  const rendered = renders.join("");
  return rendered;
};

const render = ({ name = "base/sample", params = { text: "hello world" } }) => {
  const block = require(`./blocks/${name}`);
  const rendered = block.render(params);
  return rendered;
};

module.exports = { createHTML, render };
