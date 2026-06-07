///ここの処理説明は、Reactの基本的な構造を示しています。
// `Main`コンポーネントは、動画アップロード機能を持つシンプルなUIを提供しています。
// 最後に、`createRoot`関数を使用して、`Main`コンポーネントをDOMにレンダリングしています。
import { useState } from 'react'
import './App.css'
import { createRoot } from 'react-dom/client'
import IndexVideo from './indexVideo.tsx'
import { UploadPage } from './Uplaod.tsx'
import { Login } from './login.tsx'

function Main() {
  const [page, setPage] = useState<'home' | 'upload' | 'login'>('home')
  const status = 'ログイン状態: 未ログイン' // ここは後でログイン機能を実装する際に動的に変更される予定
  const testuser = 'テストユーザー: testuser' // ここも後で動的に変更される予定
  if (page === 'upload') {
    return <UploadPage onBack={() => setPage('home')} />
  }
  if (page === 'login') {
    return <Login onBack={() => setPage('home')} />
  }

  

  return (
    <>
    <div className="nav">
      <h1>Whotube</h1>
      <ul className="nav">
        <button onClick={() => setPage("login")}><li>ログイン</li> </button>
        <li>新規登録</li>
        <li>ユーザー情報</li>
        <li>{status}</li>
      </ul>
      </div>
      <div className="card">
        <p className="read-the-docs">
          動画をアップロードするためのサイトです。下記ボタンにて、アップロードページへ遷移します。
        </p>
        <button onClick={() => setPage('upload')}>
          アップロード画面へ
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
