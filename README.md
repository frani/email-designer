<div align="center">
<h1>
  <br>
  <spam style="font-size: 3em">💌</spam>
  <br>
	Email <i>Designer</i>
  <br>
</h1>
<i>Zero-Dependencies Tool to create HTML emails in a modular and simple way</i>
  <br>
  <br>
</div>

# Install

if you are using Yarn:

```sh
yarn add email-designer
```

if you are using NPM:

```sh
npm i email-designer
```

# Usage

This module comes to provide a solution to the problem of non-dynamism or dependence on developers when designing new email templates.

using email-designer can find dynamism and ease for the developer to send new emails with easy and simple structures to adjust when programming.

> 🍋 easy peasy lemon squeezy

This service will be a module in which we can pass a JSON that describes the structure we want for our new email, as well as the data in between. In response, we will receive an HTML of our email.

## Ejemplo:

```jsx
// let import email designer
const emailDesigner = require('email-desginer')

/**
 * la estructura es simplemente una lista de bloques/componente
 * y cada bloque/componente es descripto con un JSON.
 *
 * El email-HTML se genera siguiendo el orden del array
 */
const blocks = [
	{
		name: "base/logo",
		params: {
			url: 'https://image.com/logo.png',
			maxHeight: '80px'
		}
	},
	{
		name: "base/title",
		params: {
			title: 'Buenos Dias',
			subtitle: 'Argentina'
		}
	},
	{
		name: 'juanson/otp-code' // al ser un proyecto open-source, otros usuarios pueden aportar de sus diseños al proyecto
		params: {
			code: '123 456'
		}
	},
	{
		name: 'base/footer',
		params: {
			title: 'adios',
			text: 'gracias por leer este email'
		}
	},
	{
		name: 'base/social media',
		params: {
			twitter: '@franidev',
			discord: '@frani'
		}
	}
]

const HTML = emailDesginer.createHTML({ blocks })
await sendEmail(HTML)

// OR change email options

const options = {
	backgroundColor: '#dddddd'
}

const emailHTML = emailDesginer.createHTML({ blocks, options })
await sendEmail(emailHTML)
```

---

# PR with your Block !

Use block sample in `/blocks/sample` to start to create your block

Everyone can create their own block and add it to mail-designer repo!

You can add your block or design as you like. Simply add a folder with the name you prefer and within it, your components.

# Wabout Templates ?

pos claro! miralos como una funcion que create un HTML con una seria de blocks y data ya predefinida y solo hay que cambiar info!
