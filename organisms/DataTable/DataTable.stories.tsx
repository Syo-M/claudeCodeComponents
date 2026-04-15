import type { Meta, StoryObj } from '@storybook/react'
import { DataTable } from './DataTable'
import type { DataTableColumn } from './DataTable'

const meta: Meta<typeof DataTable> = {
  title: 'Organisms/DataTable',
  component: DataTable,
  parameters: {
    docs: {
      description: {
        component: '汎用ソート可能テーブル。カラム定義と行データを渡すだけで使える。ローディング・空データ状態にも対応。',
      },
    },
  },
  decorators: [(Story) => <div style={{ padding: '24px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof DataTable>

type User = {
  id: string
  name: string
  email: string
  role: string
  status: 'Active' | 'Inactive'
}

const users: User[] = [
  { id: '1', name: '山田 太郎', email: 'yamada@example.com', role: 'Admin', status: 'Active' },
  { id: '2', name: '鈴木 花子', email: 'suzuki@example.com', role: 'User', status: 'Active' },
  { id: '3', name: '田中 一郎', email: 'tanaka@example.com', role: 'User', status: 'Inactive' },
  { id: '4', name: '佐藤 美咲', email: 'sato@example.com', role: 'Editor', status: 'Active' },
  { id: '5', name: '伊藤 健太', email: 'ito@example.com', role: 'User', status: 'Inactive' },
]

const columns: DataTableColumn<User>[] = [
  { id: 'name', header: '名前', accessor: row => row.name, sortable: true, width: '160px' },
  { id: 'email', header: 'メールアドレス', accessor: row => row.email, sortable: true },
  { id: 'role', header: 'ロール', accessor: row => row.role, sortable: true, width: '100px' },
  {
    id: 'status',
    header: 'ステータス',
    accessor: row => (
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        fontSize: '12px',
        fontWeight: 500,
        color: row.status === 'Active' ? 'var(--color-accent)' : 'var(--color-text-disabled)',
      }}>
        <span style={{
          width: '6px', height: '6px', borderRadius: '50%',
          background: row.status === 'Active' ? 'var(--color-accent)' : 'var(--color-text-disabled)',
          display: 'inline-block',
        }} />
        {row.status === 'Active' ? '有効' : '無効'}
      </span>
    ),
    width: '100px',
  },
]

export const 基本: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={users}
      keyExtractor={row => row.id}
    />
  ),
}

export const クリッカブル行: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={users}
      keyExtractor={row => row.id}
      onRowClick={(row) => alert(`${row.name} をクリックしました`)}
    />
  ),
}

export const ローディング: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={[]}
      keyExtractor={row => row.id}
      isLoading
    />
  ),
}

export const 空データ: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={[]}
      keyExtractor={row => row.id}
      emptyMessage="ユーザーが登録されていません"
    />
  ),
}
