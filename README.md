# Frontend Component Library

React + TypeScript で構築した再利用可能な UI コンポーネントライブラリです。Storybook でコンポーネントカタログを確認できます。

**📖 Storybook：** https://claude-code-components.vercel.app/
**🔗 GitHub：** https://github.com/Syo-M/claudeCodeComponents

---

## コンポーネント一覧

### Atoms（基本要素）25個

| コンポーネント | 説明 |
|---|---|
| Button | 5バリアント・4サイズ・loading 対応 |
| Checkbox | 中間状態・エラー・無効対応 |
| Chip | selectable / deletable / static |
| Input | ラベル・エラー・ヒント・必須マーク |
| Textarea | 複数行入力・文字数カウント対応 |
| NumberInput | ±ステッパー付き数値入力（min/max/step） |
| Select | optgroup・プレースホルダー対応 |
| RadioGroup | 縦・横並び・グループ化 |
| Switch | ON/OFF トグル（sm/md サイズ） |
| Badge | 5ステータスバリアント |
| TagBadge | タグ表示用バッジ |
| Tooltip | CSS hover ベースのツールチップ（上下左右） |
| Link | テキストリンク（default/subtle/button バリアント、外部リンク対応） |
| Kbd | キーボードショートカット表示 |
| Breadcrumb | パンくずリスト（ARIA 対応） |
| IconButton | アイコン専用ボタン（3バリアント・3サイズ・active 状態） |
| PlayButton | 再生/停止トグルボタン（3サイズ） |
| Slider | レンジスライダー（進捗バー表示） |
| HamburgerButton | 3本線 ↔ × アニメーション |
| Avatar | ユーザーアバター画像 |
| Divider | 区切り線 |
| ErrorMessage | エラーメッセージ表示 |
| Spinner | ローディングスピナー |
| SkeletonBlock | スケルトンローディング |
| ProgressRing | 円形プログレス |

### Molecules（複合コンポーネント）22個

| コンポーネント | 説明 |
|---|---|
| SearchInput | 🔍アイコン＋クリアボタン付き検索入力 |
| FormField | label + 入力要素 + error + hint のラッパー |
| PasswordInput | パスワード表示/非表示トグル付き入力欄 |
| Tabs | コンテンツ切替タブ（line/contained バリアント、ARIA・キーボード操作対応） |
| Accordion | 折りたたみパネル（allowMultiple 対応、CSS grid アニメーション） |
| Alert | インラインバナー（info/success/warning/error） |
| Card | 汎用ラッパー（Header/Body/Footer サブコンポーネント付き） |
| Modal | オーバーレイ付きモーダルダイアログ（ESC・オーバーレイクリックで閉じる） |
| Toast | トースト通知（自動クローズ・useToast フック付き） |
| ChipGroup | ラベル付き選択チップグループ |
| SortSelector | ソート・表示切替用横並びボタングループ |
| Pagination | ページネーション（省略記号付き） |
| DropdownMenu | 汎用ドロップダウンメニュー（danger バリアント対応） |
| Stepper | フォームウィザード進捗（horizontal/vertical バリアント） |
| FileUpload | ドラッグ＆ドロップ対応ファイル入力（サイズ制限・複数選択対応） |
| TrackListItem | 選択可能な楽曲リスト行（index・label・sub・active・trailing） |
| CopyButton | クリップボードコピーボタン |
| AuthCard | 認証フォームカード |
| EmptyState | 空状態の表示 |
| SectionHeader | セクションヘッダー |
| DateTime | リアルタイム日時表示 |
| WeatherDisplay | Open-Meteo 天気表示（API キー不要） |

### Organisms（ページ構成要素）8個

| コンポーネント | 説明 |
|---|---|
| Sidebar | 折りたたみサイドナビ（サブメニュー・アイコン・ロゴ・フッター対応） |
| DataTable | 汎用ソートテーブル（ジェネリック型・ローディング・空状態対応） |
| InfoBar | DateTime + WeatherDisplay の情報バー |
| FavoritesBar | お気に入り保存・復元バー |
| InfoCard | 情報カード |
| PageHeader | ページヘッダー |
| UserMenu | ユーザーメニュー（アバター・ドロップダウン） |
| ProjectCard | プロジェクトカード |

### Hooks（カスタムフック）11個

| フック | 説明 |
|---|---|
| `useLocalStorage` | localStorage 永続化（タブ間同期・SSR 対応） |
| `useMediaQuery` | メディアクエリ判定（BREAKPOINTS プリセット付き） |
| `useKeyPress` | キーボードショートカット（IME 変換中は発火しない） |
| `useTheme` | ダーク/ライト/システムテーマ管理（data-theme 属性切替） |
| `useIntersectionObserver` | 要素の画面内出現検知（遅延ロード・無限スクロール向け） |
| `useClickOutside` | 要素外クリック検知 |
| `useDebounce` | デバウンス処理 |
| `useDisclosure` | 開閉状態管理（isOpen / open / close / toggle） |
| `useFavorites` | localStorage でお気に入りを保存・復元・削除 |
| `useClipboard` | クリップボードへのコピー |
| `useSwipe` | スワイプジェスチャー検知 |

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
- Storybook の Controls パネルで全プロパティをインタラクティブに確認可能
