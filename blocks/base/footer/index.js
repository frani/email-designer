const render = ({
  address = "",
  unsubscribeMessage = "Don't like these emails?",
  unsubscribeUrl = "https://www.npmjs.com/package/email-designer",
}) => {
  const rendered = `
    <!-- START FOOTER -->
            <div class="footer">
              <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
              >
                <tr>
                  <td class="content-block">
                    <span class="apple-link"> ${address} </span>
                    <br />
                    ${unsubscribeMessage}
                    <a href="${unsubscribeUrl}">Unsubscribe</a>.
                  </td>
                </tr>
                <tr>
                  <td class="content-block powered-by">
                    Powered by <a href="https://www.npmjs.com/package/email-designer"> 💌 Email Designer</a>.
                  </td>
                </tr>
              </table>
            </div>
    <!-- END FOOTER -->
    `;
  return rendered;
};

module.exports = { render };
