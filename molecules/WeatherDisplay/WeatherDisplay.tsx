// Next.js で使う場合は先頭に 'use client' を追加すること

import { useState, useEffect } from 'react'
import styles from './WeatherDisplay.module.css'

// ── 型定義 ─────────────────────────────────────────

type WeatherData = {
  code: number
  tempMax: number
  tempMin: number
}

type Props = {
  /** 天気を取得する地点の緯度（デフォルト: 大阪 34.6937） */
  latitude?: number
  /** 天気を取得する地点の経度（デフォルト: 大阪 135.5022） */
  longitude?: number
  /** 地点名の表示ラベル（デフォルト: "大阪"） */
  locationLabel?: string
}

// ── 天気コード → ラベル・絵文字マップ ────────────────

const WEATHER_LABELS: Record<number, { label: string; emoji: string }> = {
  0:  { label: '快晴',           emoji: '☀️' },
  1:  { label: 'ほぼ晴れ',       emoji: '🌤️' },
  2:  { label: '一部曇り',       emoji: '⛅' },
  3:  { label: '曇り',           emoji: '☁️' },
  45: { label: '霧',             emoji: '🌫️' },
  48: { label: '霧',             emoji: '🌫️' },
  51: { label: '霧雨',           emoji: '🌦️' },
  53: { label: '霧雨',           emoji: '🌦️' },
  55: { label: '霧雨',           emoji: '🌦️' },
  61: { label: '小雨',           emoji: '🌧️' },
  63: { label: '雨',             emoji: '🌧️' },
  65: { label: '大雨',           emoji: '🌧️' },
  71: { label: '小雪',           emoji: '🌨️' },
  73: { label: '雪',             emoji: '🌨️' },
  75: { label: '大雪',           emoji: '❄️' },
  80: { label: 'にわか雨',       emoji: '🌦️' },
  81: { label: 'にわか雨',       emoji: '🌦️' },
  82: { label: '激しいにわか雨', emoji: '⛈️' },
  95: { label: '雷雨',           emoji: '⛈️' },
  96: { label: '激しい雷雨',     emoji: '⛈️' },
  99: { label: '激しい雷雨',     emoji: '⛈️' },
}

function getWeatherInfo(code: number) {
  return WEATHER_LABELS[code] ?? { label: '不明', emoji: '❓' }
}

// ── コンポーネント ────────────────────────────────────

export function WeatherDisplay({
  latitude = 34.6937,
  longitude = 135.5022,
  locationLabel = '大阪',
}: Props) {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&forecast_days=1`
    )
      .then(res => {
        if (!res.ok) throw new Error()
        return res.json()
      })
      .then(data => setWeather({
        code:    data.daily.weather_code[0],
        tempMax: Math.round(data.daily.temperature_2m_max[0]),
        tempMin: Math.round(data.daily.temperature_2m_min[0]),
      }))
      .catch(() => setError(true))
  }, [latitude, longitude])

  if (error) return <span className={styles.error}>天気取得失敗</span>
  if (!weather) return <span className={styles.loading}>取得中...</span>

  const { label, emoji } = getWeatherInfo(weather.code)

  return (
    <span className={styles.weather}>
      <span className={styles.label}>
        <span>{emoji}</span>
        <span>{locationLabel} {label}</span>
      </span>
      <span className={styles.divider}>|</span>
      <span className={styles.temp}>{weather.tempMax}° / {weather.tempMin}°</span>
    </span>
  )
}
