import type { Meta, StoryObj } from '@storybook/react'
import { InfoCard } from './InfoCard'

const meta: Meta<typeof InfoCard> = {
  title: 'Organisms/InfoCard',
  component: InfoCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'ダッシュボードのカード1枚分。ラベル・値・補足テキスト・アイコンを表示する情報表示カード。variant="accent" で強調表示が可能。',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'accent'],
    },
    fullWidth: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof InfoCard>

/** デフォルト（ラベル + 値） */
export const デフォルト: Story = {
  args: {
    label: '総ユーザー数',
    value: '1,284',
  },
}

/** アイコンあり（SVG自前実装） */
export const アイコンあり: Story = {
  args: {
    label: '月間売上',
    value: '¥428,500',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 6v1.5M10 12.5V14M7.5 11.5c0 .83.67 1.5 1.5 1.5h1.5a1.5 1.5 0 1 0 0-3H9a1.5 1.5 0 0 1 0-3H10.5c.83 0 1.5.67 1.5 1.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
}

/** 補足テキストあり */
export const descriptionあり: Story = {
  args: {
    label: 'アクティブセッション',
    value: '342',
    description: '前日比 +12% 増加',
  },
}

/** アイコン + 補足テキストあり */
export const アイコンとdescription: Story = {
  args: {
    label: 'タスク完了率',
    value: '87%',
    description: '今月の目標: 90%',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M16.5 5.5l-8 8-4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
}

/** accent バリアント */
export const Accent: Story = {
  args: {
    label: '今月の収益',
    value: '¥1,240,000',
    description: '目標達成率 103%',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M10 3l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    variant: 'accent',
  },
}

/** fullWidth */
export const FullWidth: Story = {
  args: {
    label: 'システム稼働状況',
    value: '正常稼働中',
    description: '最終確認: 2026-04-04 09:00',
    fullWidth: true,
  },
}

/** グリッドレイアウトで並べた例 */
export const グリッドレイアウト: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
      }}
    >
      <InfoCard
        label="総ユーザー数"
        value="1,284"
        description="先月比 +8%"
        icon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="8" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M2 17c0-3.314 2.686-6 6-6s6 2.686 6 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="15" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M17 17c0-2.21-1.343-4-3-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        }
      />
      <InfoCard
        label="月間売上"
        value="¥428,500"
        description="目標達成率 85%"
        icon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M10 6v1.5M10 12.5V14M7.5 11.5c0 .83.67 1.5 1.5 1.5h1.5a1.5 1.5 0 1 0 0-3H9a1.5 1.5 0 0 1 0-3H10.5c.83 0 1.5.67 1.5 1.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        }
      />
      <InfoCard
        label="今月の収益"
        value="¥1,240,000"
        description="目標達成率 103%"
        variant="accent"
        icon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 3l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        }
      />
    </div>
  ),
}
