const render = ({ text = "hola mundo! " }) => {
  const rendered = `
    <!-- START WHITE BOX TEXT -->
             <table
                  class="module"
                  role="module"
                  data-type="text"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  style="table-layout: fixed"
                  data-muid="6a53c6a4-e02f-451f-af7a-b8de0d21d0f3"
                  data-mc-module-version="2019-10-22"
                >
                  <tbody>
                    <tr>
                      <td
                        style="
                          background-color: #ffffff;
                          padding: 0px 20px 0px 20px;
                          line-height: 22px;
                          text-align: inherit;
                        "
                        height="100%"
                        valign="top"
                        role="module-content"
                      >
                        <div>
                          
                          <div
                            style="
                              font-family: inherit;
                              text-align: inherit;
                            "
                          >
                            ${text}
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                
    <!-- END WHITE BOX TEXT -->
    `;
  return rendered;
};

module.exports = { render };
