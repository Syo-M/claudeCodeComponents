# WeatherDisplay

Open-Meteo API で今日の天気を取得して表示する Molecule。APIキー不要。

## 使用元

- `organisms/InfoBar`

## Props

| Prop | 型 | デフォルト | 説明 |
|---|---|---|---|
| `latitude` | `number` | `34.6937` | 緯度 |
| `longitude` | `number` | `135.5022` | 経度 |
| `locationLabel` | `string` | `"大阪"` | 地点名 |

## 移植時の注意

- Next.js で使う場合はファイル先頭に `'use client'` を追加する
