import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  parameters: {
    docs: {
      description: {
        component: 'リンク Atom。default / subtle / button の3バリアント。外部リンクアイコン・disabled 対応。',
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['default', 'subtle', 'button'] },
    external: { control: 'boolean' },
    disabled: { control: 'boolean' },
    href: { control: 'text' },
  },
  decorators: [(Story) => <div style={{ padding: '16px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Link>

export const デフォルト: Story = {
  args: {
    href: '#',
    children: 'リンクテキスト',
    variant: 'default',
  },
}

export const Subtle: Story = {
  args: {
    href: '#',
    children: '控えめなリンク',
    variant: 'subtle',
  },
}

export const ボタン風: Story = {
  args: {
    href: '#',
    children: 'ボタン風リンク',
    variant: 'button',
  },
}

export const 外部リンク: Story = {
  args: {
    href: 'https://example.com',
    children: '外部サイトを開く',
    external: true,
  },
}

export const Disabled: Story = {
  args: {
    href: '#',
    children: '無効なリンク',
    disabled: true,
  },
}
