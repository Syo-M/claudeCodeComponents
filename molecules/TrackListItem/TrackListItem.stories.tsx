import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { TrackListItem } from './TrackListItem'

const meta: Meta<typeof TrackListItem> = {
  title: 'Molecules/TrackListItem',
  component: TrackListItem,
  parameters: {
    docs: {
      description: { component: '選択可能なリストアイテム。トラックリスト・アルバムリスト・プレイリストなどに使える汎用リスト行。' },
    },
  },
  argTypes: {
    active: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof TrackListItem>

export const Default: Story = {
  args: {
    index: 1,
    label: 'Chill Music 01',
    onClick: () => {},
  },
}

export const アクティブ: Story = {
  args: {
    index: 3,
    label: 'Chill Music 03',
    active: true,
    onClick: () => {},
  },
}

export const サブテキスト付き: Story = {
  args: {
    index: 1,
    label: 'Nocturne Op.9 No.2',
    sub: 'Chopin',
    trailing: '4:32',
    onClick: () => {},
  },
}

export const トラックリスト: Story = {
  render: () => {
    const [current, setCurrent] = useState(2)
    const tracks = [
      { title: 'Chill Music 01', duration: '3:24' },
      { title: 'Chill Music 02', duration: '4:12' },
      { title: 'Chill Music 03', duration: '2:58' },
      { title: 'Chill Music 04', duration: '5:01' },
      { title: 'Chill Music 05', duration: '3:45' },
    ]
    return (
      <div style={{ padding: '16px', maxWidth: '360px', background: 'var(--color-surface-raised)', borderRadius: '12px' }}>
        {tracks.map((t, i) => (
          <TrackListItem
            key={i}
            index={i + 1}
            label={t.title}
            trailing={t.duration}
            active={i === current}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    )
  },
}

export const アルバムリスト: Story = {
  render: () => {
    const [current, setCurrent] = useState(0)
    const albums = [
      { title: 'Chill Musics', count: '6 tracks' },
      { title: 'Jazz Standards', count: '12 tracks' },
      { title: 'Classical Piano', count: '8 tracks' },
    ]
    return (
      <div style={{ padding: '16px', maxWidth: '360px', background: 'var(--color-surface-raised)', borderRadius: '12px' }}>
        {albums.map((a, i) => (
          <TrackListItem
            key={i}
            label={a.title}
            sub={a.count}
            active={i === current}
            activeIndicator=">"
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    )
  },
}

export const インデックスなし: Story = {
  args: {
    label: 'メニュー項目',
    sub: '補足テキスト',
    trailing: '>',
    onClick: () => {},
  },
}
