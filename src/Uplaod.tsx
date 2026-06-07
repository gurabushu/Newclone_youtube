import { useState } from 'react'

const API_URL = 'http://localhost:3001'

interface UploadPageProps {
  onBack: () => void
}

export function UploadPage({ onBack }: UploadPageProps) {
  const [title, setTitle] = useState('')
  const [videoId, setVideoId] = useState('')

  const handleUpload = async () => {
    if (!title || !videoId) {
      alert('タイトルと動画IDを入力してください')
      return
    }

    // APIに POSTリクエストで保存
    await fetch(`${API_URL}/videos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, videoId }),
    })

    alert('追加しました！')
    setTitle('')
    setVideoId('')
  }

  return (
    <div>
      <button onClick={onBack}>← 戻る</button>
      <h1>動画追加</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
        <input
          placeholder="動画タイトル"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="YouTube動画ID (例: dQw4w9WgXcQ)"
          value={videoId}
          onChange={(e) => setVideoId(e.target.value)}
        />
        <p style={{ fontSize: '12px', color: '#888' }}>
          YouTube URLの v= 以降の文字列を入力<br />
          例: https://www.youtube.com/watch?v=<strong>dQw4w9WgXcQ</strong>
        </p>
        <button onClick={handleUpload}>一覧に追加</button>
      </div>
    </div>
  )
}
