// Next.js で使う場合は先頭に 'use client' を追加すること

import { DateTime } from '../../molecules/DateTime/DateTime'
import { WeatherDisplay } from '../../molecules/WeatherDisplay/WeatherDisplay'
import styles from './InfoBar.module.css'

type Props = {
  /** 天気取得地点の緯度（デフォルト: 大阪 34.6937） */
  latitude?: number
  /** 天気取得地点の経度（デフォルト: 大阪 135.5022） */
  longitude?: number
  /** 地点名の表示ラベル（デフォルト: "大阪"） */
  locationLabel?: string
  /** 秒を表示するか（デフォルト: true） */
  showSeconds?: boolean
}

export function InfoBar({
  latitude,
  longitude,
  locationLabel,
  showSeconds,
}: Props) {
  return (
    <div className={styles.bar}>
      <DateTime showSeconds={showSeconds} />
      <WeatherDisplay
        latitude={latitude}
        longitude={longitude}
        locationLabel={locationLabel}
      />
    </div>
  )
}
