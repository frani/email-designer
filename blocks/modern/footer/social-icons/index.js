const render = ({
  address = "",
  unsubscribeMessage = "Don't like these emails?",
  unsubscribeUrl = "https://www.npmjs.com/package/email-designer",
}) => {
  const rendered = `
    <!-- START SOCIAL ICONS -->
            <div style="background-color: #f6f6f6">
              <div
                class="block-grid"
                style="
                  min-width: 320px;
                  max-width: 640px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  margin: 0 auto;
                  background-color: #f6f6f6;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: #f6f6f6;
                  "
                >
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 640px;
                      display: table-cell;
                      vertical-align: top;
                      width: 640px;
                    "
                  >
                    <div
                      class="col_cont"
                      style="width: 100% !important"
                    >
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid
                            transparent;
                          border-right: 0px solid
                            transparent;
                          padding-top: 5px;
                          padding-bottom: 5px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <table
                          class="social_icons"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="presentation"
                          style="
                            table-layout: fixed;
                            vertical-align: top;
                            border-spacing: 0;
                            border-collapse: collapse;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                          "
                          valign="top"
                        >
                          <tbody>
                            <tr
                              style="vertical-align: top"
                              valign="top"
                            >
                              <td
                                style="
                                  word-break: break-word;
                                  vertical-align: top;
                                  padding-top: 10px;
                                  padding-right: 10px;
                                  padding-bottom: 10px;
                                  padding-left: 10px;
                                "
                                valign="top"
                              >
                                <table
                                  class="social_table"
                                  align="center"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  style="
                                    table-layout: fixed;
                                    vertical-align: top;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    mso-table-tspace: 0;
                                    mso-table-rspace: 0;
                                    mso-table-bspace: 0;
                                    mso-table-lspace: 0;
                                  "
                                  valign="top"
                                >
                                  <tbody>
                                    <tr
                                      style="
                                        vertical-align: top;
                                        display: inline-block;
                                        text-align: center;
                                      "
                                      align="center"
                                      valign="top"
                                    >
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          padding-bottom: 0;
                                          padding-right: 2.5px;
                                          padding-left: 2.5px;
                                        "
                                        valign="top"
                                      >
                                        <a
                                          href="https://facebook.com/palta.app"
                                          target="_blank"
                                          ><img
                                            width="32"
                                            height="32"
                                            src="https://storage.palta.app/statics/icons/facebook.png"
                                            alt="Facebook"
                                            title="Facebook"
                                            style="
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              margin-inline: 0.5em;
                                              height: auto;
                                              border: 0;
                                              display: block;
                                            "
                                        /></a>
                                      </td>
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          padding-bottom: 0;
                                          padding-right: 2.5px;
                                          padding-left: 2.5px;
                                        "
                                        valign="top"
                                      >
                                        <a
                                          href="https://twitter.com/palta.app"
                                          target="_blank"
                                          ><img
                                            width="32"
                                            height="32"
                                            src="https://storage.palta.app/statics/icons/twitter.png"
                                            alt="Twitter"
                                            title="Twitter"
                                            style="
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              margin-inline: 0.5em;
                                              height: auto;
                                              border: 0;
                                              display: block;
                                            "
                                        /></a>
                                      </td>
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          padding-bottom: 0;
                                          padding-right: 2.5px;
                                          padding-left: 2.5px;
                                        "
                                        valign="top"
                                      >
                                        <a
                                          href="https://instagram.com/palta.app"
                                          target="_blank"
                                          ><img
                                            width="32"
                                            height="32"
                                            src="https://storage.palta.app/statics/icons/instagram.png"
                                            alt="Instagram"
                                            title="Instagram"
                                            style="
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              margin-inline: 0.5em;
                                              height: auto;
                                              border: 0;
                                              display: block;
                                            "
                                        /></a>
                                      </td>
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          padding-bottom: 0;
                                          padding-right: 2.5px;
                                          padding-left: 2.5px;
                                        "
                                        valign="top"
                                      >
                                        <a
                                          href="https://linkedin.com/palta.app"
                                          target="_blank"
                                          ><img
                                            width="32"
                                            height="32"
                                            src="https://storage.palta.app/statics/icons/linkedin-in.png"
                                            alt="LinkedIn"
                                            title="LinkedIn"
                                            style="
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              margin-inline: 0.5em;
                                              height: auto;
                                              border: 0;
                                              display: block;
                                            "
                                        /></a>
                                      </td>
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          padding-bottom: 0;
                                          padding-right: 2.5px;
                                          padding-left: 2.5px;
                                        "
                                        valign="top"
                                      >
                                        <a
                                          href="https://api.whatsapp.com/send/?phone=5492617234124"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          ><img
                                            width="32"
                                            height="32"
                                            src="https://storage.palta.app/statics/icons/whatsapp.png"
                                            alt="whatsapp"
                                            title="whatsapp"
                                            style="
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              margin-inline: 0.5em;
                                              height: auto;
                                              border: 0;
                                              display: block;
                                            "
                                        /></a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    <!-- END SOCIAL ICONS -->
    `;
  return rendered;
};

module.exports = { render };
