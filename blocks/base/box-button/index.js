const render = ({
  text = "",
  buttonTitle = "Click Me",
  buttonURL = "https://www.npmjs.com/package/email-designer",
}) => {
  const rendered = `
   <!-- START CENTERED WHITE CONTAINER -->
            <table role="presentation" class="main">
              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="wrapper">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                      </br>
                        ${text}
                        </br>
                        </br>
                        <table
                          role="presentation"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="btn btn-primary"
                        >
                          <tbody>
                            <tr>
                              <td align="left">
                                <table
                                  role="presentation"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td>
                                        <a
                                          href="${buttonURL}"
                                          target="_blank"
                                          >${buttonTitle}</a
                                        >
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p>
                          This is a really simple email template. Its sole
                          purpose is to get the recipient to click the button
                          with no distractions.
                        </p>
                        <p>Good luck! Hope it works.</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- END MAIN CONTENT AREA -->
            </table>
            <!-- END CENTERED WHITE CONTAINER -->
    `;
  return rendered;
};

module.exports = { render };
