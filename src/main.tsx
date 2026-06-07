///ここの処理説明は、Reactの基本的な構造を示しています。
// `Main`コンポーネントは、動画アップロード機能を持つシンプルなUIを提供しています。
// 最後に、`createRoot`関数を使用して、`Main`コンポーネントをDOMにレンダリングしています。
import { useState } from 'react'
import './App.css'
import { createRoot } from 'react-dom/client'
import IndexVideo from './indexVideo.tsx'
import { UploadPage } from './Uplaod.tsx'

function Main() {
  const [page, setPage] = useState<'home' | 'upload'>('home')

  if (page === 'upload') {
    return <UploadPage onBack={() => setPage('home')} />
  }

  return (
    <>
      <h1>Whotube</h1>
      <div className="card">
        <p className="read-the-docs">
          動画をアップロードするためのサイトです。下記ボタンにて、アップロードページへ遷移します。
        </p>
        <button onClick={() => setPage('upload')}>
          Upload画面へ
        </button>
      </div>
      <div className="card">
        <IndexVideo />
      </div>
    </>
  )
}



export default Main


createRoot(document.getElementById('root')!).render(<Main />)
