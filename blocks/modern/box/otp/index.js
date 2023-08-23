const render = ({ otp = "123 456" }) => {
  const rendered = `
    <!-- START WHITE BOX TEXT -->
            <table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout: fixed" width="100%" data-muid="99ee8124-8cdf-4394-a8ba-6e311081ac15">
              <tbody>
                <tr>
                  <td align="center" class="outer-td"  style="padding: 35px 0px 35px 0px; background-color: #ffffff;">
                    <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align: center">
                      <tbody>
                        <tr>
                          <td align="center" bgcolor="#3E2CE2" class="inner-td" style="
                              border-radius: 6px;
                              font-size: 16px;
                              text-align: center;
                              background-color: inherit;
                            ">
                            <span class="code" style="
                                font-size: 30px;
                                background-color: #bae6fa;
                                font-family: 'Courier New',
                                  Courier, monospace;
                                padding-top: 4px;
                                padding-right: 10px;
                                padding-bottom: 4px;
                                padding-left: 10px;
                                border-radius: 5px;
                              "><strong>${otp}</strong></span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
                
    <!-- END WHITE BOX TEXT -->
    `;
  return rendered;
};

module.exports = { render };
