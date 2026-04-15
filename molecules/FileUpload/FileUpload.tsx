// Next.js で使う場合は先頭に 'use client' を追加すること

import { useState, useRef } from 'react'
import type { DragEvent } from 'react'
import styles from './FileUpload.module.css'

type Props = {
  onFiles: (files: File[]) => void
  accept?: string
  multiple?: boolean
  maxSizeMB?: number
  disabled?: boolean
  label?: string
}

function UploadIcon() {
  return (
    <svg className={styles.uploadIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="17 8 12 3 7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="12" y1="3" x2="12" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export function FileUpload({
  onFiles,
  accept,
  multiple = false,
  maxSizeMB,
  disabled = false,
  label = 'ファイルをドラッグ＆ドロップ、またはクリックして選択',
}: Props) {
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fileNames, setFileNames] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return
    const arr = Array.from(files)

    if (maxSizeMB) {
      const over = arr.find(f => f.size > maxSizeMB * 1024 * 1024)
      if (over) {
        setError(`ファイルサイズが上限（${maxSizeMB}MB）を超えています: ${over.name}`)
        return
      }
    }

    setError(null)
    setFileNames(arr.map(f => f.name))
    onFiles(arr)
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    if (!disabled) handleFiles(e.dataTransfer.files)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === ' ' && !disabled) {
      e.preventDefault()
      inputRef.current?.click()
    }
  }

  return (
    <div className={styles.wrapper}>
      <div
        className={[
          styles.dropzone,
          isDragging ? styles.dragging : '',
          disabled ? styles.disabled : '',
          error ? styles.hasError : '',
        ].filter(Boolean).join(' ')}
        onClick={() => !disabled && inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); if (!disabled) setIsDragging(true) }}
        onDragEnter={(e) => { e.preventDefault(); if (!disabled) setIsDragging(true) }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-label="ファイルを選択"
        aria-disabled={disabled}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          className={styles.input}
          onChange={(e) => handleFiles(e.target.files)}
          disabled={disabled}
          tabIndex={-1}
        />
        <div className={styles.content}>
          <UploadIcon />
          {fileNames.length > 0 ? (
            <p className={styles.fileNames}>
              {fileNames.length === 1 ? fileNames[0] : `${fileNames.length}件のファイル`}
            </p>
          ) : (
            <p className={styles.labelText}>{label}</p>
          )}
          {accept && <p className={styles.hint}>対応形式: {accept}</p>}
          {maxSizeMB && <p className={styles.hint}>最大サイズ: {maxSizeMB}MB</p>}
        </div>
      </div>
      {error && <p className={styles.error} role="alert">{error}</p>}
    </div>
  )
}
