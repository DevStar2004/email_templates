<div align="center">
  <p>
    <a href="https://maizzle.com" target="_blank">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://github.com/maizzle/maizzle/raw/master/.github/logo-dark.svg">
        <img alt="Maizzle Starter" src="https://github.com/maizzle/maizzle/raw/master/.github/logo-light.svg" width="300" height="225" style="max-width: 100%;">
      </picture>
    </a>
  </p>
  <p>Quickly build HTML emails with utility-first CSS</p>
<div>

[![Version][npm-version-shield]][npm]
[![Build][github-ci-shield]][github-ci]
[![Downloads][npm-stats-shield]][npm-stats]
[![License][license-shield]][license]

  </div>
</div>

## Getting Started

## Overview

This repository contains a collection of email templates designed for various notifications and communications related to the KohortPay platform. The templates are built using Maizzle, a framework for rapidly developing email templates with Tailwind CSS.

## Templates Included

1. **Payment Group Details**
2. **New Member Joins the Group**
3. **Authorization Payment**
4. **Capture Payment**
5. **Payment Group Completion**

## Setup & Usage

1. **Clone the Repository:**
   ```sh
   git clone <repository-url>
   ```
2. **Navigate to the Project Directory:**
   ```sh
   cd <project-directory>
   ```
3. **Install Dependencies:**
   ```sh
   npm install
   ```
4. **Build the Templates:**
   ```sh
   maizzle build
   ```

## Template Structure

Each template is structured with a set of predefined components and variables, allowing for dynamic content injection. Components include headers, footers, buttons, and other UI elements, while variables hold the data to be displayed in the templates.

### Components

- `<x-header>`: Contains the email's main title and pretitle.
- `<x-footer>`: Holds the footer information and any additional links.
- `<x-button>`: Represents a clickable button, usually used for CTAs.
- `<x-item-row>`: Displays individual items in a recapitulative section.
- `<x-total-row>`: Shows the total amount in a recapitulative section.

### Variables

Variables are used to inject dynamic content into the templates. They are defined in the `config.js` file under the `locals` object and are referenced in the templates using the `@{{variableName}}` syntax.

Example:

```js
locals: {
  customer: {
    firstName: "John",
  },
  paymentIntent: {
    amount: "30€",
  },
  // ... other variables ...
}
```

## Customization & Testing

- Modify the variables in `config.js` to test the templates with different data sets.
- Ensure that the templates are displayed correctly in various email clients and devices.
- Adjust the variable names and structures as per project requirements and naming conventions.

## License

The Maizzle framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

[npm]: https://www.npmjs.com/package/@maizzle/framework
[npm-stats]: https://npm-stat.com/charts.html?package=%40maizzle%2Fframework&from=2019-03-27
[npm-version-shield]: https://img.shields.io/npm/v/@maizzle/framework.svg
[npm-stats-shield]: https://img.shields.io/npm/dt/@maizzle/framework.svg?color=6875f5
[github-ci]: https://github.com/maizzle/framework/actions
[github-ci-shield]: https://github.com/maizzle/framework/actions/workflows/nodejs.yml/badge.svg
[license]: ./LICENSE
[license-shield]: https://img.shields.io/npm/l/@maizzle/framework.svg?color=0e9f6e
