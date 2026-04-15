import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Pagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Molecules/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component:
          'ページネーション UI。前後ページボタン・ページ番号・省略記号を表示する。',
      },
    },
  },
  decorators: [(Story) => <div style={{ padding: '24px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Pagination>

export const 基本: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    return (
      <Pagination
        page={page}
        totalPages={10}
        onChange={setPage}
      />
    )
  },
}

export const 少ないページ数: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    return (
      <Pagination
        page={page}
        totalPages={5}
        onChange={setPage}
      />
    )
  },
}

export const 多いページ数: Story = {
  render: () => {
    const [page, setPage] = useState(10)
    return (
      <Pagination
        page={page}
        totalPages={20}
        onChange={setPage}
      />
    )
  },
}
