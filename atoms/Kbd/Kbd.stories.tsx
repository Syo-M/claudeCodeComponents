import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Kbd } from './Kbd'

const meta: Meta<typeof Kbd> = {
  title: 'Atoms/Kbd',
  component: Kbd,
  parameters: {
    docs: {
      description: {
        component: 'キーボードショートカット表示 Atom。キーキャップ風のスタイル。',
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] },
  },
  decorators: [(Story) => <div style={{ padding: '16px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Kbd>

export const 基本: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Kbd>Enter</Kbd>
      <Kbd>Escape</Kbd>
      <Kbd>Tab</Kbd>
      <Kbd>Backspace</Kbd>
      <Kbd>⌘</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>⌥</Kbd>
    </div>
  ),
  args: {},
}

export const サイズsm: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Kbd size="sm">⌘</Kbd>
      <Kbd size="sm">K</Kbd>
      <Kbd size="sm">Enter</Kbd>
    </div>
  ),
  args: {},
}

export const ショートカット組み合わせ例: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Kbd>⌘</Kbd>
        <span style={{ fontSize: '12px', color: 'var(--color-text-sub)' }}>+</span>
        <Kbd>K</Kbd>
        <span style={{ fontSize: '14px', marginLeft: '8px', color: 'var(--color-text-sub)' }}>コマンドパレット</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Kbd>⌘</Kbd>
        <span style={{ fontSize: '12px', color: 'var(--color-text-sub)' }}>+</span>
        <Kbd>⇧</Kbd>
        <span style={{ fontSize: '12px', color: 'var(--color-text-sub)' }}>+</span>
        <Kbd>P</Kbd>
        <span style={{ fontSize: '14px', marginLeft: '8px', color: 'var(--color-text-sub)' }}>コマンドパレット（全）</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Kbd>Ctrl</Kbd>
        <span style={{ fontSize: '12px', color: 'var(--color-text-sub)' }}>+</span>
        <Kbd>Z</Kbd>
        <span style={{ fontSize: '14px', marginLeft: '8px', color: 'var(--color-text-sub)' }}>元に戻す</span>
      </div>
    </div>
  ),
  args: {},
}
