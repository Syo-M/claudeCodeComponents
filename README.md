# claudeCodeComponents

アトミックデザインベースの React コンポーネントライブラリ。

**Storybook でコンポーネントを確認する →** https://claude-code-components.vercel.app

---

## コンポーネント一覧

### Atoms（最小単位）

| コンポーネント | 説明 | Storybook |
|---|---|---|
| Button | 5バリアント・4サイズ・loading対応 | [→ 確認](https://claude-code-components.vercel.app/?path=/story/atoms-button--primary) |
| Chip | selectable / deletable / static | [→ 確認](https://claude-code-components.vercel.app/?path=/story/atoms-chip--全バリアント) |
| Input | ラベル・エラー・ヒント・必須マーク | [→ 確認](https://claude-code-components.vercel.app/?path=/story/atoms-input--基本) |
| Badge | 5ステータスバリアント | [→ 確認](https://claude-code-components.vercel.app/?path=/story/atoms-badge--default) |
| Checkbox | 中間状態・エラー・無効対応 | [→ 確認](https://claude-code-components.vercel.app/?path=/story/atoms-checkbox--基本) |
| RadioGroup | 縦・横並び・グループ化 | [→ 確認](https://claude-code-components.vercel.app/?path=/story/atoms-radiogroup--縦並び) |
| Select | optgroup・プレースホルダー対応 | [→ 確認](https://claude-code-components.vercel.app/?path=/story/atoms-select--基本) |
| HamburgerButton | 3本線 ↔ × アニメーション | [→ 確認](https://claude-code-components.vercel.app/?path=/story/atoms-hamburgerbutton--インタラクティブ) |

### Molecules（Atom を組み合わせた単位）

| コンポーネント | 説明 | Storybook |
|---|---|---|
| DateTime | リアルタイム日時表示 | [→ 確認](https://claude-code-components.vercel.app/?path=/story/molecules-datetime--日本語) |
| WeatherDisplay | Open-Meteo 天気表示（APIキー不要） | [→ 確認](https://claude-code-components.vercel.app/?path=/story/molecules-weatherdisplay--大阪) |
| ChipGroup | ラベル付き選択チップグループ | [→ 確認](https://claude-code-components.vercel.app/?path=/story/molecules-chipgroup--インタラクティブ) |

### Organisms（Molecule・Atom を組み合わせた単位）

| コンポーネント | 説明 | Storybook |
|---|---|---|
| InfoBar | DateTime + WeatherDisplay の情報バー | [→ 確認](https://claude-code-components.vercel.app/?path=/story/organisms-infobar--大阪) |
| FavoritesBar | お気に入り保存・復元バー | [→ 確認](https://claude-code-components.vercel.app/?path=/story/organisms-favoritesbar--インタラクティブ) |

### Hooks

| フック | 説明 |
|---|---|
| `useFavorites` | localStorage でお気に入りを保存・復元・削除 |

---

## デザインシステム

Pantone 2025「Mocha Mousse（#A47864）」をベースカラーとし、デジタル庁デザインシステム（DADS）の設計思想に基づくトークン体系を採用。ダークモード・`prefers-reduced-motion` 対応済み。

---

## 移植方法

各コンポーネントの `README.md` に依存・移植時の注意を記載しています。

```bash
# Storybook をローカルで起動
npm install
npm run storybook
```
