import { ThemeManager } from "./theme"

export interface IApp {
  name: string
  author: {
    name: string
    link: string
  }
}

export function AppSetup() {
  // declare app information
  const app: IApp = {
    name: 'Nuxt 3 Awesome Starter',
    author: {
      name: 'viandwi24',
      link: 'https://github.com/viandwi24'
    }
  }
  useState('app', () => app)

  // use theme manager
  const themeManager = ThemeManager()

  return {
    app,
    themeManager,
  }
}