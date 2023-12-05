---
title: Solo Sphere
---

A beautiful theme for [Nuxt Content](https://content.nuxtjs.org) ready for [Nuxt Studio](https://nuxt.studio).

_Currently, this theme is meant to be used with a single page._

## Installation

You have two options to install this [Nuxt Layer](https://nuxt.com/docs/getting-started/layers).

### Creating a new project

<!-- add template -->

### Adding to an existing project

First, you need to install the package:

```bash
pnpm install -D @barbapapazes/solo-sphere
```

Then, you will need to extend your project:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  extends: '@barbapapazes/solo-sphere'
})
```

_Voilà!_ You're good to go!

## Usage

Solo Sphere is meant to be used with the `content` directory from [Nuxt Content](https://content.nuxtcom).

To get started, you just have to create a `content` directory at the root of your project and add an `index.md` file inside.

```md [content/index.md]
---
title: Hello World
---

Lorem...
```

::alert{type="info"}
Do not forget that you can overwrite any component or layout from Solo Sphere by creating a file with the same name in your project.
::

## Layouts

Solo Sphere comes with a layout called `prose`. It renders the content of your markdown files in the way you're reading this page.

```md [content/index.md]
---
title: Hello World
layout: prose
---

Lorem...
```

## Components

_No components yet..._
