const render = ({ content = "", style = "" }) => {
  if (style === "") {
    style = `
     body,
      p,
      div {
        font-family: arial, helvetica, sans-serif;
        font-size: 15px;
      }
      body {
        color: #000000;
      }
      body a {
        color: #1188e6;
        text-decoration: none;
      }
      p {
        margin: 0;
        padding: 0;
      }
      table.wrapper {
        width: 100% !important;
        table-layout: fixed;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      img.max-width {
        max-width: 100% !important;
      }
      .column.of-2 {
        width: 50%;
      }
      .column.of-3 {
        width: 33.333%;
      }
      .column.of-4 {
        width: 25%;
      }
      ul ul ul ul {
        list-style-type: disc !important;
      }
      ol ol {
        list-style-type: lower-roman !important;
      }
      ol ol ol {
        list-style-type: lower-latin !important;
      }
      ol ol ol ol {
        list-style-type: decimal !important;
      }
      @media screen and (max-width: 480px) {
        .preheader .rightColumnContent,
        .footer .rightColumnContent {
          text-align: left !important;
        }
        .preheader .rightColumnContent div,
        .preheader .rightColumnContent span,
        .footer .rightColumnContent div,
        .footer .rightColumnContent span {
          text-align: left !important;
        }
        .preheader .rightColumnContent,
        .preheader .leftColumnContent {
          font-size: 80% !important;
          padding: 5px 0;
        }
        table.wrapper-mobile {
          width: 100% !important;
          table-layout: fixed;
        }
        img.max-width {
          height: auto !important;
          max-width: 100% !important;
        }
        a.bulletproof-button {
          display: block !important;
          width: auto !important;
          font-size: 80%;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        .columns {
          width: 100% !important;
        }
        .column {
          display: block !important;
          width: 100% !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
        .social-icon-column {
          display: inline-block !important;
        }
      }
      span.code {
        background-color: #bae6fa;
        padding: 2px 5px;
        border-radius: 5px;
        font-family: "Courier New", Courier, monospace;
      }
    `;
  }

  const rendered = `

  <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Strict//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd'>
<html
  data-editor-version="2"
  class="sg-campaigns"
  xmlns="http://www.w3.org/1999/xhtml"
>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
    />
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <!--<![endif]-->
    <!--[if (gte mso 9)|(IE)]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
        body {
          width: 640px;
          margin: 0 auto;
        }
        table {
          border-collapse: collapse;
        }
        table,
        td {
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
        img {
          -ms-interpolation-mode: bicubic;
          margin-inline: 0.5em;
        }
      </style>
    <![endif]-->
    <style type="text/css">
      ${style}
    </style>
    <!--user entered Head Start-->
    <!--End Head user entered-->
  </head>
  <body>
    <center
      class="wrapper"
      data-link-color="#1188E6"
      data-body-style="font-size:15px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#F6f6f6;"
    >
      <div class="webkit">
        <table
          cellpadding="0"
          cellspacing="0"
          border="0"
          width="100%"
          class="wrapper"
          bgcolor="#F6f6f6"
        >
          <tr>
            <td valign="top" bgcolor="#F6f6f6" width="100%">
              <table
                width="100%"
                role="content-container"
                class="outer"
                align="center"
                cellpadding="0"
                cellspacing="0"
                border="0"
              >
                <tr>
                  <td width="100%">
                    <table
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                    >
                      <tr>
                        <td>
                          <!--[if mso]>
    <center>
    <table><tr><td width='640'>
  <![endif]-->
                          <table
                            width="100%"
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            style="width: 100%; max-width: 640px"
                            align="center"
                          >
                            <tr>
                              
                              <td
                                role="modules-container"
                                style="
                                  padding: 35px 0px 35px 0px;
                                  color: #000000;
                                  text-align: left;
                                "
                                bgcolor="#f6f6f6"
                                width="100%"
                                align="left"
                              >
                              ${content}
                              </td>
                            </tr>
                          </table>
                          <!--[if mso]>
                                  </td>
                                </tr>
                              </table>
                            </center>
                            <![endif]-->
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </center>
  </body>
</html>


    `;
  return rendered;
};

module.exports = { render };
