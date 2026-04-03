// Next.js で使う場合はファイル先頭に 'use client' を追加すること

import { useState, useEffect, useCallback } from 'react'

// ── 型定義（プロジェクト側の型に合わせて変更可） ────────

export type Favorite = {
  id: string
  name: string
  /** 保存するデータ本体（SelectionMap など任意の型で可） */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selection: Record<string, any>
  createdAt: string
}

// ── localStorage ユーティリティ ───────────────────────

function load(key: string): Favorite[] {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as Favorite[]) : []
  } catch {
    return []
  }
}

function save(key: string, favorites: Favorite[]) {
  try {
    localStorage.setItem(key, JSON.stringify(favorites))
  } catch {
    // localStorage が使えない環境では無視
  }
}

// ── フック ────────────────────────────────────────────

/**
 * お気に入りを localStorage で管理するカスタムフック。
 *
 * @param storageKey localStorage のキー名（プロジェクトごとに変更すること）
 */
export function useFavorites(storageKey = 'favorites') {
  const [favorites, setFavorites] = useState<Favorite[]>([])

  // クライアントサイドのみ読み込み（SSR 対応）
  useEffect(() => {
    setFavorites(load(storageKey))
  }, [storageKey])

  const addFavorite = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (name: string, selection: Record<string, any>) => {
      const newFav: Favorite = {
        id: crypto.randomUUID(),
        name: name.trim(),
        selection,
        createdAt: new Date().toISOString(),
      }
      setFavorites(prev => {
        const next = [newFav, ...prev]
        save(storageKey, next)
        return next
      })
    },
    [storageKey]
  )

  const removeFavorite = useCallback(
    (id: string) => {
      setFavorites(prev => {
        const next = prev.filter(f => f.id !== id)
        save(storageKey, next)
        return next
      })
    },
    [storageKey]
  )

  return { favorites, addFavorite, removeFavorite }
}
