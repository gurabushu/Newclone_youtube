
import { useState } from 'react'

type UserType = { name: string; age: number; email: string }

interface LoginProps {
  onBack: () => void
}

export function Login({ onBack }: LoginProps) {
    const [currentuser, setCurrentuser] = useState<UserType | null>(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        // 本来はAPIで認証するが、ここではテスト用に固定値で判定
        if (username === 'tonokyama' && password === '1234') {
            setCurrentuser({ name: username, age: 30, email: 'tonokyama@gmail.com' })
        } else {
            alert('ユーザー名またはパスワードが違います')
        }
    }

    return (
      <div>
        {currentuser !== null
          ? <h2>{currentuser.name}さんようこそ！</h2>
          : <p>ログインしてください。</p>
        }
        <input
          type="text"
          placeholder="ユーザー名"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>ログイン</button>
        <button onClick={onBack}>戻る</button>
      </div>
    )
  }