// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './TagBadge.module.css'

/**
 * Notion / GitHub などが使うカラーネームと CSS カラー値のマッピング。
 * 任意の CSS カラー文字列も受け付ける。
 */
const COLOR_MAP: Record<string, { bg: string; text: string }> = {
  default:    { bg: 'rgba(150,150,150,0.15)', text: 'var(--color-text-secondary)' },
  gray:       { bg: 'rgba(150,150,150,0.15)', text: '#555' },
  brown:      { bg: 'rgba(140, 100, 80,0.15)', text: '#7a4f3a' },
  orange:     { bg: 'rgba(230,140, 60,0.15)', text: '#b85c00' },
  yellow:     { bg: 'rgba(230,200, 50,0.18)', text: '#8a6a00' },
  green:      { bg: 'rgba( 60,170, 90,0.15)', text: '#1e6e3a' },
  blue:       { bg: 'rgba( 60,130,210,0.15)', text: '#1a5ca8' },
  purple:     { bg: 'rgba(140, 80,200,0.15)', text: '#6a2aaa' },
  pink:       { bg: 'rgba(220, 80,130,0.15)', text: '#a02060' },
  red:        { bg: 'rgba(210, 60, 60,0.15)', text: '#a02020' },
}

type Props = {
  /** バッジに表示するテキスト */
  label: string
  /**
   * 色名（'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red'）
   * または任意の CSS カラー文字列（'#3b9' / 'hsl(200,80%,50%)' など）。
   * 任意 CSS カラーを指定した場合は bg を 15% 不透明で自動生成する。
   */
  color?: string
  className?: string
}

/**
 * TagBadge – 動的な色を持つタグバッジ Atom。
 * Notion・GitHub のようなカラー付きタグや、任意の CSS カラー文字列に対応する。
 * 既存の `Badge` とは異なり、バリアント enum ではなく動的な色文字列で指定する。
 */
export function TagBadge({ label, color = 'default', className }: Props) {
  const preset = COLOR_MAP[color]

  const bgColor   = preset ? preset.bg   : `color-mix(in srgb, ${color} 15%, transparent)`
  const textColor = preset ? preset.text : color

  return (
    <span
      className={[styles.tag, className].filter(Boolean).join(' ')}
      style={{ background: bgColor, color: textColor }}
    >
      {label}
    </span>
  )
}
