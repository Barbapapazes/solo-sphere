export default defineAppConfig({
  portfolio: {
    socials: {
      github: {
        name: 'GitHub',
        url: 'https://github.com/Barbapapazes',
        icon: 'i-simple-icons-github',
      },
      x: {
        name: 'X',
        url: 'https://x.com/soubiran_',
        icon: 'i-simple-icons-x',
      },
      linkedin: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/esteban25/',
        icon: 'i-simple-icons-linkedin',
      },
    },
    footer: {
      links: [{
        label: 'Ecosystem',
        children: [
          {
            to: 'https://esteban-soubiran.site',
            label: 'Portfolio',
            rel: 'noopener',
            target: '_blank',
          },
          {
            to: 'https://setup.esteban-soubiran.site',
            label: 'Setup',
            rel: 'noopener',
            target: '_blank',
          },
          {
            to: 'https://templates.esteban-soubiran.site',
            label: 'Templates',
            rel: 'noopener',
            target: '_blank',
          },
        ],
      }],
      text: 'Estéban Soubiran',
    },
    github: {
      dir: 'content',
      branch: 'main',
      owner: 'barbapapazes/solo-sphere',
    },
  },
})

declare module '@nuxt/schema' {
  interface AppConfigInput {

  }
}
