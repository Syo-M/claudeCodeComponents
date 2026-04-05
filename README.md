# Frontend Component Library

React + TypeScript で構築した再利用可能な UI コンポーネントライブラリです。Storybook でコンポーネントカタログを確認できます。

**📖 Storybook：** https://claude-code-components.vercel.app/
**🔗 GitHub：** https://github.com/Syo-M/claudeCodeComponents

---

## コンポーネント一覧

### Atoms（基本要素）

| コンポーネント | 説明 | Storybook |
|---|---|---|
| Button | 5バリアント・4サイズ・loading 対応 | [→ 確認](https://claude-code-components.vercel.app/?path=/story/atoms-button--primary) |
| Chip | selectable / deletable / static | [→ 確認](https://claude-code-components.vercel.app/?path=/story/atoms-chip--全バリアント) |
| Input | ラベル・エラー・ヒント・必須マーク | [→ 確認](https://claude-code-components.vercel.app/?path=/story/atoms-input--基本) |
| Badge | 5ステータスバリアント | [→ 確認](https://claude-code-components.vercel.app/?path=/story/atoms-badge--default) |
| Checkbox | 中間状態・エラー・無効対応 | [→ 確認](https://claude-code-components.vercel.app/?path=/story/atoms-checkbox--基本) |
| RadioGroup | 縦・横並び・グループ化 | [→ 確認](https://claude-code-components.vercel.app/?path=/story/atoms-radiogroup--縦並び) |
| Select | optgroup・プレースホルダー対応 | [→ 確認](https://claude-code-components.vercel.app/?path=/story/atoms-select--基本) |
| HamburgerButton | 3本線 ↔ × アニメーション | [→ 確認](https://claude-code-components.vercel.app/?path=/story/atoms-hamburgerbutton--インタラクティブ) |
| Avatar | ユーザーアバター画像 | |
| Divider | 区切り線 | |
| ErrorMessage | エラーメッセージ表示 | |
| Spinner | ローディングスピナー | |

### Molecules（複合コンポーネント）

| コンポーネント | 説明 | Storybook |
|---|---|---|
| DateTime | リアルタイム日時表示 | [→ 確認](https://claude-code-components.vercel.app/?path=/story/molecules-datetime--日本語) |
| WeatherDisplay | Open-Meteo 天気表示（API キー不要） | [→ 確認](https://claude-code-components.vercel.app/?path=/story/molecules-weatherdisplay--大阪) |
| ChipGroup | ラベル付き選択チップグループ | [→ 確認](https://claude-code-components.vercel.app/?path=/story/molecules-chipgroup--インタラクティブ) |
| AuthCard | 認証フォームカード | |
| EmptyState | 空状態の表示 | |
| FormField | ラベル付きフォームフィールド | |
| Modal | モーダルダイアログ | |
| PasswordInput | パスワード入力（表示切替付き） | |
| SectionHeader | セクションヘッダー | |
| Toast | トースト通知 | |

### Organisms（ページ構成要素）

| コンポーネント | 説明 | Storybook |
|---|---|---|
| InfoBar | DateTime + WeatherDisplay の情報バー | [→ 確認](https://claude-code-components.vercel.app/?path=/story/organisms-infobar--大阪) |
| FavoritesBar | お気に入り保存・復元バー | [→ 確認](https://claude-code-components.vercel.app/?path=/story/organisms-favoritesbar--インタラクティブ) |
| InfoCard | 情報カード | |
| PageHeader | ページヘッダー | |
| UserMenu | ユーザーメニュー | |

### Hooks

| フック | 説明 |
|---|---|
| `useClickOutside` | 要素外クリック検知 |
| `useDebounce` | デバウンス処理 |
| `useDisclosure` | 開閉状態管理 |
| `useFavorites` | localStorage でお気に入りを保存・復元・削除 |

---

## 技術スタック

| 項目 | 内容 |
|---|---|
| UI ライブラリ | React 18 |
| 言語 | TypeScript |
| カタログツール | Storybook 8 |
| ビルド | Vite |

---

## ローカルでの起動

```bash
npm install
npm run storybook
```

http://localhost:6006 で Storybook が起動します。

---

## デザインシステム

Pantone 2025「Mocha Mousse（#A47864）」をベースカラーとし、デジタル庁デザインシステム（DADS）の設計思想に基づくトークン体系を採用。ダークモード・`prefers-reduced-motion` 対応済み。

---

## 設計方針

- **Atomic Design** に基づいた階層構造（Atoms / Molecules / Organisms）
- デザインシステムの CSS 変数（トークン）を使用し、テーマの一貫性を保持
- 日本語 IME 対応のため、フォーム系コンポーネントの確定処理は **ボタンクリックのみ** をトリガーとしています
