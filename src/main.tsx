
import { useState } from 'react'
import './App.css'
import { createRoot } from 'react-dom/client'
import IndexVideo from './indexVideo.tsx'
import { UploadPage } from './Uplaod.tsx'
import { Login } from './login.tsx'
import { Register } from './register.tsx'
export default Main

function Main() {
  const [page, setPage] = useState<'home' | 'upload' | 'login' | 'register'>('home')
  const [status, setStatus] = useState('ログアウト')

  if (page === 'upload') {
    return <UploadPage onBack={() => setPage('home')} />
  }
  
  if (page === 'login') {
    return <Login onBack={() => setPage('home')} 
    onLogin={(_user) => { setStatus('ログイン'); setPage('home') }} 
    onLogout={() => { setStatus('ログアウト'); setPage('home') }} />
  }

  if (page === 'register') {
    return <Register onBack={() => setPage('home')} onRegister={() => setPage('login')} />
  }

  /// ログアウト状態のときの表示
  if (status === 'ログアウト') {
    return(
      <>
      <div className="nav">
           <h1>Whotube</h1>
      <ul className="nav">
        <button onClick={() => setPage('register')}>新規登録</button>
        <li>ユーザー情報</li>
        <button onClick={() => setPage('login')}>ログイン</button>
        </ul>
      </div>

      <div className="card">
        <IndexVideo />
      </div>
      </>
    )
  }

  /// ログイン状態のときの表示
if (status === 'ログイン') {
  return (
    <>
    <div className="nav">
      <h1>Whotube</h1>
      <ul className="nav">
        <li>ユーザー情報</li>
        <button onClick={() => { setStatus('ログアウト'); setPage('home') }}>ログアウト</button>
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
}

createRoot(document.getElementById('root')!).render(<Main />)
