# Modal

オーバーレイ付きのモーダルダイアログコンポーネント。

## 使用元プロジェクト
- なし（新規追加）

## 依存
- なし（React のみ）

## Props / API

| Prop | 型 | 必須 | デフォルト | 説明 |
|---|---|---|---|---|
| `isOpen` | `boolean` | ✓ | — | モーダルの開閉状態 |
| `onClose` | `() => void` | ✓ | — | 閉じる処理 |
| `title` | `string` | — | — | ヘッダーに表示するタイトル |
| `children` | `React.ReactNode` | ✓ | — | モーダル本文 |
| `footer` | `React.ReactNode` | — | — | フッターに表示するコンテンツ（ボタン等） |
| `size` | `'sm' \| 'md' \| 'lg'` | — | `'md'` | 幅のサイズ（400 / 560 / 720px） |
| `closeOnOverlayClick` | `boolean` | — | `true` | オーバーレイクリックで閉じるか |

## 移植時の注意

- `createPortal` を使わずそのまま描画しているため、`position: fixed` を妨げる CSS プロパティ（`transform`, `filter` など）が祖先要素に設定されている場合は正しく全画面表示されません。その際は `createPortal` に切り替えてください。
- Next.js で使う場合は `'use client'` ディレクティブを先頭に追加してください。
- `isOpen` が `true` の間、`document.body` に `overflow: hidden` を設定してスクロールをロックします。
- アニメーション（フェードイン・スケールアップ）は `prefers-reduced-motion` でオフになります。
