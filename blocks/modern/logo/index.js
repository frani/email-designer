const render = ({
  href = "htts://frani.dev",
  logo = "https://storage.palta.app/statics/logotipo.png",
}) => {
  const rendered = `
    <!-- START LOGO -->
            <table
                class="wrapper"
                role="module"
                data-type="image"
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="table-layout: fixed"
                data-muid="b52e72d1-7b25-4bb6-8a35-ea5d550a69c3"
              >
                <tbody>
                  <tr>
                    <td
                      style="
                        font-size: 6px;
                        line-height: 10px;
                        padding: 35px 0px 35px 0px;
                      "
                      valign="top"
                      align="left"
                    >
                      <a href="${href}"
                        ><img
                          class="max-width"
                          border="0"
                          style="
                            display: block;
                            color: #000000;
                            text-decoration: none;
                            font-family: Helvetica, arial,
                              sans-serif;
                            font-size: 16px;
                            max-width: 192px !important;
                            height: auto !important;
                            width: 192px;
                          "
                          width="192"
                          alt="palta"
                          data-proportionally-constrained="true"
                          data-responsive="true"
                          src="${logo}"
                      /></a>
                    </td>
                  </tr>
                </tbody>
              </table>
    <!-- END LOGO -->
    `;
  return rendered;
};

module.exports = { render };
