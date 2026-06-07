import { useState, useEffect } from "react"
import "./App.css"

type Video = {
  id: number
  title: string
  videoId: string
}

const API_URL = "http://localhost:3001"

function indexVideo() {
  const [videoList, setVideoList] = useState<Video[]>([])

  // 画面表示時に API から動画一覧を取得
  useEffect(() => {
    fetch(`${API_URL}/videos`)
      .then((res) => res.json())
      .then((data) => setVideoList(data))
      .catch(() => alert('APIに接続できません。npm run api を実行してください'))
  }, [])

  return (
    <div>
      <h1>動画一覧</h1>
      {videoList.length === 0 && <p>動画がまだありません。アップロード画面から追加してください。</p>}
      <div className="horizontal-list">
        {videoList.map((video) => (
          <div key={video.id}>
            <h2>{video.title}</h2>
            <iframe
              width="400"
              height="215"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default indexVideo