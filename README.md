# Scrivito Progressbar
[![CMS: Scrivito](https://img.shields.io/badge/CMS-Scrivito-brightgreen.svg)](https://scrivito.com) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A progressbar React component/Scrivito widget for the Scrivito CMS.

## Screenshot

![Screenshot](https://raw.githubusercontent.com/mdwp/scrivito-progressbar/master/progressbar-screenshot.png)

## Installation

Open your terminal.

`$ cd` to your Scrivito project

```shell
$ npm install scrivito-progressbar
```

Import the widget in your javascript (e.g. in `index.js` or `Widgets/index.js`).

Add this line to your index.js:

```js
import "scrivito-progressbar";
```

Also add the styling of the react-sweet-progress component to your app. (e.g. in `index.scss`):

```scss
@import "~react-sweet-progress/lib/style.css";
```

## Features
A progress bar as a bar or as a circle.

## Widget properties

In the widget properties you can set:
- Percent
- Type
- Style (Success, Active, Error)

