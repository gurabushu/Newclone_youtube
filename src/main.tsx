///ここの処理説明は、Reactの基本的な構造を示しています。
// `Main`コンポーネントは、動画アップロード機能を持つシンプルなUIを提供しています。
// 最後に、`createRoot`関数を使用して、`Main`コンポーネントをDOMにレンダリングしています。

import './App.css'
import { createRoot } from 'react-dom/client'
import IndexVideo from './indexVideo.tsx'

function Main() {
  return (
    <>
      <h1>Youtube簡易サイト</h1>
      <div className="card">
        <p className="read-the-docs">
          動画をアップロードするためのサイトです。下記ボタンにて、アップロードページへ遷移します。
        </p>
        <button onClick={() => {}}>
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
