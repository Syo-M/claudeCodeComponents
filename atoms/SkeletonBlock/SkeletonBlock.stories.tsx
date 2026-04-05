import type { Meta, StoryObj } from '@storybook/react'
import { SkeletonBlock } from './SkeletonBlock'

const meta: Meta<typeof SkeletonBlock> = {
  title: 'Atoms/SkeletonBlock',
  component: SkeletonBlock,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'ローディング中のコンテンツ領域を示す骨格プレースホルダー Atom。' +
          '`width` / `height` / `radius` を指定するだけでテキスト行・カード・アバターなど様々な形状に対応する。',
      },
    },
  },
  argTypes: {
    radius: { control: 'select', options: ['sm', 'md', 'lg', 'full'] },
  },
  decorators: [(Story) => <div style={{ padding: '24px', maxWidth: '400px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof SkeletonBlock>

export const Default: Story = {
  args: { width: '240px', height: '1em' },
}

export const テキスト行3行: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <SkeletonBlock width="100%" height="1em" />
      <SkeletonBlock width="85%"  height="1em" />
      <SkeletonBlock width="60%"  height="1em" />
    </div>
  ),
}

export const カード骨格: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <SkeletonBlock width="60%" height="1.4em" radius="sm" />
      <SkeletonBlock width="100%" height="0.9em" />
      <SkeletonBlock width="80%"  height="0.9em" />
      <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
        <SkeletonBlock width="60px" height="24px" radius="full" />
        <SkeletonBlock width="60px" height="24px" radius="full" />
      </div>
    </div>
  ),
}

export const アバター: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <SkeletonBlock width="40px" height="40px" radius="full" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <SkeletonBlock width="120px" height="0.9em" />
        <SkeletonBlock width="80px"  height="0.75em" />
      </div>
    </div>
  ),
}
