import type { Meta, StoryObj } from '@storybook/react'
import { UserMenu } from './UserMenu'

const meta: Meta<typeof UserMenu> = {
  title: 'Organisms/UserMenu',
  component: UserMenu,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'ヘッダーに配置するドロップダウンユーザーメニュー。アバター・表示名・メールアドレスを表示し、アカウント設定・サインアウトを提供する。Clerk などの認証ライブラリに依存せずProps で動作する。',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px', minHeight: '200px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    displayName: { control: 'text' },
    email: { control: 'text' },
    avatarUrl: { control: 'text' },
    onSignOut: { action: 'signOut' },
    onOpenSettings: { action: 'openSettings' },
  },
}

export default meta
type Story = StoryObj<typeof UserMenu>

export const デフォルト: Story = {
  args: {
    displayName: '山田 太郎',
    email: 'taro@example.com',
  },
}

export const アバターあり: Story = {
  args: {
    displayName: 'プリン',
    email: 'purin@example.com',
    avatarUrl: 'https://api.dicebear.com/7.x/adventurer/svg?seed=purin',
  },
}

export const 設定ボタンなし: Story = {
  args: {
    displayName: '山田 太郎',
    email: 'taro@example.com',
    onOpenSettings: undefined,
  },
}

export const 長い名前: Story = {
  args: {
    displayName: 'とても長い表示名のユーザー',
    email: 'very-long-email-address@example-domain.com',
  },
}
