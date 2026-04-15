// Next.js で使う場合は先頭に 'use client' を追加すること

import { useState, useMemo } from 'react'
import styles from './DataTable.module.css'

export type DataTableColumn<T> = {
  id: string
  header: string
  accessor: (row: T) => React.ReactNode
  sortable?: boolean
  width?: string
}

type Props<T> = {
  columns: DataTableColumn<T>[]
  data: T[]
  keyExtractor: (row: T) => string
  onRowClick?: (row: T) => void
  emptyMessage?: string
  isLoading?: boolean
}

type SortState = {
  columnId: string
  direction: 'asc' | 'desc'
} | null

function SortIcon({ state }: { state: 'asc' | 'desc' | 'none' }) {
  if (state === 'asc') return <span aria-hidden="true">↑</span>
  if (state === 'desc') return <span aria-hidden="true">↓</span>
  return <span aria-hidden="true" style={{ opacity: 0.4 }}>↕</span>
}

export function DataTable<T>({
  columns,
  data,
  keyExtractor,
  onRowClick,
  emptyMessage = 'データがありません',
  isLoading = false,
}: Props<T>) {
  const [sort, setSort] = useState<SortState>(null)

  const handleSort = (colId: string) => {
    setSort(prev => {
      if (!prev || prev.columnId !== colId) return { columnId: colId, direction: 'asc' }
      if (prev.direction === 'asc') return { columnId: colId, direction: 'desc' }
      return null
    })
  }

  const sortedData = useMemo(() => {
    if (!sort) return data
    const col = columns.find(c => c.id === sort.columnId)
    if (!col) return data
    return [...data].sort((a, b) => {
      const av = col.accessor(a)
      const bv = col.accessor(b)
      const aVal = typeof av === 'string' || typeof av === 'number' ? av : ''
      const bVal = typeof bv === 'string' || typeof bv === 'number' ? bv : ''
      if (aVal < bVal) return sort.direction === 'asc' ? -1 : 1
      if (aVal > bVal) return sort.direction === 'asc' ? 1 : -1
      return 0
    })
  }, [data, sort, columns])

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            {columns.map(col => (
              <th
                key={col.id}
                className={[styles.th, col.sortable ? styles.sortable : ''].filter(Boolean).join(' ')}
                style={col.width ? { width: col.width } : undefined}
                onClick={col.sortable ? () => handleSort(col.id) : undefined}
                aria-sort={
                  sort?.columnId === col.id
                    ? sort.direction === 'asc' ? 'ascending' : 'descending'
                    : undefined
                }
              >
                <span className={styles.thContent}>
                  <span>{col.header}</span>
                  {col.sortable && (
                    <span className={styles.sortIcon}>
                      <SortIcon
                        state={
                          sort?.columnId === col.id ? sort.direction : 'none'
                        }
                      />
                    </span>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <tr key={i} className={styles.tr}>
                {columns.map(col => (
                  <td key={col.id} className={styles.td}>
                    <div className={styles.skeleton} />
                  </td>
                ))}
              </tr>
            ))
          ) : sortedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className={styles.emptyCell}>
                {emptyMessage}
              </td>
            </tr>
          ) : (
            sortedData.map(row => (
              <tr
                key={keyExtractor(row)}
                className={[styles.tr, onRowClick ? styles.clickable : ''].filter(Boolean).join(' ')}
                onClick={onRowClick ? () => onRowClick(row) : undefined}
              >
                {columns.map(col => (
                  <td key={col.id} className={styles.td}>
                    {col.accessor(row)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
