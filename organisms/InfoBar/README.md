# InfoBar

`DateTime` + `WeatherDisplay` を組み合わせた情報バー Organism。

## 使用元プロジェクト

- `repositorys/MkDataList`

## 依存

- `molecules/DateTime`
- `molecules/WeatherDisplay`

## Props

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `latitude` | `number` | `34.6937` | 天気取得地点の緯度 |
| `longitude` | `number` | `135.5022` | 天気取得地点の経度 |
| `locationLabel` | `string` | `"大阪"` | 地点名の表示ラベル |
| `showSeconds` | `boolean` | `true` | 秒を表示するか |

## 移植時の注意

- Next.js で使う場合はファイル先頭に `'use client'` を追加する
- 相対 import パスに注意（`../../molecules/...`）
