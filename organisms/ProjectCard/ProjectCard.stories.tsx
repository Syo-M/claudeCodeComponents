import type { Meta, StoryObj } from '@storybook/react'
import { ProjectCard } from './ProjectCard'

const meta: Meta<typeof ProjectCard> = {
  title: 'Organisms/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'プロジェクト・アプリを紹介するカード Organism。' +
          'ポートフォリオ・ショーケースページで使う。' +
          '`techs` で技術スタックを TagBadge として表示し、`links` でアクションリンクを並べる。',
      },
    },
  },
  decorators: [(Story) => <div style={{ padding: '24px', maxWidth: '360px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof ProjectCard>

export const Default: Story = {
  args: {
    name: 'Engineer Dashboard',
    description: 'エンジニア向けダッシュボード。ポモドーロタイマー・天気・時計などを1画面にまとめたツール。',
    techs: ['Next.js', 'TypeScript', 'Clerk', 'Supabase'],
    status: 'active',
    links: [
      { label: 'GitHub', href: 'https://github.com/' },
      { label: 'デモを見る', href: 'https://example.com/' },
    ],
  },
}

export const 開発中: Story = {
  args: {
    name: 'Notion Visualizer',
    description: 'Notion データベースの学習資料をカード形式で可視化するツール。タグフィルタ・検索対応。',
    techs: ['Next.js', 'Notion API', 'Clerk'],
    status: 'development',
    links: [
      { label: 'GitHub', href: 'https://github.com/' },
    ],
  },
}

export const リンクなし: Story = {
  args: {
    name: 'ZIT Prompt Maker',
    description: 'Stable Diffusion などのプロンプトをカテゴリ別チップで組み立てるビルダーツール。',
    techs: ['Next.js', 'PostgreSQL'],
  },
}

export const グリッド3列: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', padding: '16px', maxWidth: '900px' }}>
      <ProjectCard
        name="Engineer Dashboard"
        description="エンジニア向けダッシュボード。ポモドーロタイマー・天気・時計など。"
        techs={['Next.js', 'Clerk', 'Supabase']}
        status="active"
        links={[{ label: 'デモ', href: '#' }, { label: 'GitHub', href: '#' }]}
      />
      <ProjectCard
        name="Notion Blog"
        description="Notion をヘッドレス CMS として使う静的ブログ。Astro で SSG 生成。"
        techs={['Astro', 'Notion API']}
        status="active"
        links={[{ label: 'デモ', href: '#' }]}
      />
      <ProjectCard
        name="ZIT Prompt Maker"
        description="プロンプトをカテゴリ別に組み立てるビルダーツール。お気に入り保存対応。"
        techs={['Next.js', 'PostgreSQL']}
        status="development"
        links={[{ label: 'GitHub', href: '#' }]}
      />
    </div>
  ),
  decorators: [(Story) => <div style={{ padding: '24px' }}><Story /></div>],
  parameters: { layout: 'fullscreen' },
}
