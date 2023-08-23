const render = ({
  message = "Visitá los ",
  title = "Terminos y Condiciones",
  url = "https://palta.app/notes/t%C3%A9rminos-y-condiciones",
}) => {
  const rendered = `
    <!-- START FOOTER TyC -->
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
                          padding-top: 25px;
                          padding-bottom: 5px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <div
                          style="
                            color: #000000;
                            font-family: Arial,
                              Helvetica Neue, Helvetica,
                              sans-serif;
                            line-height: 1.2;
                            padding-top: 0px;
                            padding-right: 10px;
                            padding-bottom: 0px;
                            padding-left: 10px;
                          "
                        >
                          <div
                            class="txtTinyMce-wrapper"
                            style="
                              line-height: 1.2;
                              font-size: 12px;
                              color: #000000;
                              font-family: Arial,
                                Helvetica Neue, Helvetica,
                                sans-serif;
                              mso-line-height-alt: 14px;
                            "
                          >
                            <p
                              style="
                                font-size: 13px;
                                line-height: 1.2;
                                word-break: break-word;
                                text-align: center;
                                mso-line-height-alt: 16px;
                                mso-ansi-font-size: 14px;
                                margin: 0;
                              "
                            >

                              <span
                                style="
                                  font-size: 13px;
                                  mso-ansi-font-size: 14px;
                                "
                                >${message}<a
                                  style="
                                    text-decoration: none;
                                    color: #000000;
                                    font-weight: bold;
                                  "
                                  href="${url}"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  ${title} </a
                                ></span
                              >
                            </p>
                          </div>
                        </div>
                        <table
                          class="divider"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="
                            table-layout: fixed;
                            vertical-align: top;
                            border-spacing: 0;
                            border-collapse: collapse;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            min-width: 100%;
                            -ms-text-size-adjust: 100%;
                            -webkit-text-size-adjust: 100%;
                          "
                          role="presentation"
                          valign="top"
                        >
                          <tbody>
                            <tr
                              style="vertical-align: top"
                              valign="top"
                            >
                              <td
                                class="divider_inner"
                                style="
                                  word-break: break-word;
                                  vertical-align: top;
                                  min-width: 100%;
                                  -ms-text-size-adjust: 100%;
                                  -webkit-text-size-adjust: 100%;
                                  padding-top: 10px;
                                  padding-right: 10px;
                                  padding-bottom: 10px;
                                  padding-left: 10px;
                                "
                                valign="top"
                              >
                                <table
                                  class="divider_content"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="85%"
                                  style="
                                    table-layout: fixed;
                                    vertical-align: top;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    width: 85%;
                                  "
                                  align="center"
                                  role="presentation"
                                  valign="top"
                                >
                                  <tbody>
                                    <tr
                                      style="
                                        vertical-align: top;
                                      "
                                      valign="top"
                                    >
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                        valign="top"
                                      >
                                        <span></span>
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
    <!-- END FOOTER TyC -->
    `;
  return rendered;
};

module.exports = { render };
