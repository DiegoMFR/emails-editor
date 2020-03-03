# Email Editor

Simple text editor web component for add and validate emails list.

## Getting Started

Download or clone the repo to your project, and import dist/bundle.js and dist/main.css into your HTML.

### Prerequisites

None :)

### Installing

- Create a folder in your project and clone the repo

```bash
cd my-email-editor-module-folder
git clone https://github.com/DiegoMFR/emails-editor.git
```

- Import the files in the dist folder into your HTML (see the included index.html for further reference)

```html
<head>
  ...
  <script src="my-email-editor-module-folder/dist/bundle.js" defer></script>
  <link rel="stylesheet" href="my-email-editor-module-folder/dist/main.css">
  ...
</head>
```
---
**NOTE**

```main.css``` contains the basic theme, you can create your own and use instead.

---


- Add the ```<email-editor>``` tag to your component body

```html
<div class="my-editor">
    <h2> Add emails here </h2>
    <email-editor></email-editor>
</div>
```

Live demo: https://diegomfr.github.io/emails-editor/

## Public methods

- Count current valid emails

```js
document.querySelector('email-editor').getEmailsCount()
```

- Add a random email

```js
document.querySelector('email-editor').addEmail()
```
- Listen for changes

```js
document.querySelector('email-editor')..addEventListener('editor:change', myEventHandler)
```
# Project Settings

### Here's a brief explanation on how to clone and run the project on your local environment.

Clone and install dependencies

```bash
git clone https://github.com/DiegoMFR/emails-editor.git
npm i
```

Run development build in watch mode

```bash
npm run dev
```

Run production build

```bash
npm run build
```

Run tests

```bash
npm run test
```


## Built With

* [Webpack](https://webpack.js.org/) - Bundle creation and artifacts pipeline.
* [SASS](https://sass-lang.com/) - Modular CSS preprocessor.
* [WebComponents](https://www.webcomponents.org/) - Web platform API for custom elements creation.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

[Git](https://git-scm.com/) - [NPM](https://www.npmjs.com/).

## Author

**Diego Morales** [Linkedin](www.linkedin.com/in/diegomfr)

