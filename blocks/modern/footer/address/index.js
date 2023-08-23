const render = ({
  address = "Palta SAS, Campus Olegario, Olegario Andrade 315, Mendoza, M5500 BDP",
}) => {
  const rendered = `
    <!-- START FOOTER ADDRES -->
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
                          padding-top: 15px;
                          padding-bottom: 5px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <div
                          style="
                            color: #b3b1b1;
                            font-family: Arial,
                              Helvetica Neue, Helvetica,
                              sans-serif;
                            line-height: 1.5;
                            padding-top: 25px;
                            padding-right: 45px;
                            padding-bottom: 10px;
                            padding-left: 45px;
                          "
                        >
                          <div
                            class="txtTinyMce-wrapper"
                            style="
                              line-height: 1.5;
                              font-size: 12px;
                              color: #b3b1b1;
                              font-family: Arial,
                                Helvetica Neue, Helvetica,
                                sans-serif;
                              mso-line-height-alt: 18px;
                            "
                          >
                            <p
                              style="
                                text-align: center;
                                line-height: 1.5;
                                word-break: break-word;
                                font-size: 11px;
                                mso-line-height-alt: 17px;
                                margin: 0;
                              "
                            >
                              <span style="font-size: 11px"
                                >2023 © Palta Derechos
                                Reservados.</span
                              ><br /><span
                                style="font-size: 11px"
                                >${address}</span
                              >
                            </p>
                            <p
                              style="
                                text-align: center;
                                line-height: 1.5;
                                word-break: break-word;
                                mso-line-height-alt: 18px;
                                margin: 0;
                              "
                            >
                              &nbsp;
                            </p>
                            <p
                              style="
                                line-height: 1.5;
                                word-break: break-word;
                                text-align: center;
                                mso-line-height-alt: 18px;
                                margin: 0;
                              "
                            >
                              &nbsp;
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    <!-- END FOOTER ADDRES -->
    `;
  return rendered;
};

module.exports = { render };
