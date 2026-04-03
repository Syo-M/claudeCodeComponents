import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'

const root = path.resolve(__dirname, '..')

const config: StorybookConfig = {
  stories: [
    path.join(root, 'atoms/**/*.stories.tsx'),
    path.join(root, 'molecules/**/*.stories.tsx'),
    path.join(root, 'organisms/**/*.stories.tsx'),
  ],
  addons: [
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
}

export default config
