// Next.js で使う場合は先頭に 'use client' を追加すること

import styles from './Pagination.module.css'

type Props = {
  /** 現在ページ（1始まり） */
  page: number
  /** 総ページ数 */
  totalPages: number
  /** ページ変更コールバック */
  onChange: (page: number) => void
  /** 現在ページの前後に表示するページ数（デフォルト: 1） */
  siblingCount?: number
  /** 最初・最後のページを常に表示するか（デフォルト: true） */
  showEdges?: boolean
}

function getPages(page: number, total: number, sibling: number): (number | '...')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const left = Math.max(2, page - sibling)
  const right = Math.min(total - 1, page + sibling)
  const showLeftDots = left > 2
  const showRightDots = right < total - 1
  const middle = Array.from({ length: right - left + 1 }, (_, i) => left + i)
  return [
    1,
    ...(showLeftDots ? ['...' as const] : []),
    ...middle,
    ...(showRightDots ? ['...' as const] : []),
    total,
  ]
}

export function Pagination({
  page,
  totalPages,
  onChange,
  siblingCount = 1,
  showEdges = true,
}: Props) {
  const pages = showEdges
    ? getPages(page, totalPages, siblingCount)
    : Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav aria-label="ページネーション">
      <ul className={styles.nav}>
        {/* 前ページボタン */}
        <li>
          <button
            className={styles.btn}
            onClick={() => onChange(page - 1)}
            disabled={page <= 1}
            aria-label="前のページ"
          >
            ◀
          </button>
        </li>

        {/* ページ番号 */}
        {pages.map((p, idx) =>
          p === '...' ? (
            <li key={`ellipsis-${idx}`}>
              <span className={styles.ellipsis} aria-hidden="true">…</span>
            </li>
          ) : (
            <li key={p}>
              <button
                className={[styles.btn, p === page ? styles.active : ''].filter(Boolean).join(' ')}
                onClick={() => onChange(p)}
                aria-label={`${p}ページ`}
                aria-current={p === page ? 'page' : undefined}
              >
                {p}
              </button>
            </li>
          )
        )}

        {/* 次ページボタン */}
        <li>
          <button
            className={styles.btn}
            onClick={() => onChange(page + 1)}
            disabled={page >= totalPages}
            aria-label="次のページ"
          >
            ▶
          </button>
        </li>
      </ul>
    </nav>
  )
}
