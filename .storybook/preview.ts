import type { Preview } from '@storybook/react'
import './globals.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FAF8F5' },
        { name: 'dark',  value: '#1A1512' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      source: { type: 'auto', language: 'tsx' },
      codePanel: true,
    },
    a11y: { test: 'todo' },
  },
  tags: ['autodocs'],
}

export default preview
