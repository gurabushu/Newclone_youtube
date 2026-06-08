
import { useState } from 'react'

const API_URL = 'http://localhost:3001'

type UserType = { name: string; age: number; email: string }

interface LoginProps {
  onBack: () => void
  onLogin: (user: UserType) => void
  onLogout: () => void
}


// ログイン機能の実装例
export function Login({ onBack, onLogin, onLogout }: LoginProps) {
    const [currentuser, setCurrentuser] = useState<UserType | null>(null) /// ログイン中は user を代入、未ログインは null
    const [username, setUsername] = useState('') /// ユーザー名の入力状態
    const [password, setPassword] = useState('') /// パスワードの入力状態

      /// ログイン処理
    const handleLogin = async () => {
        if (!username || !password) {
            alert('ユーザー名とパスワードを入力してください')
            return
        }
    const handleLogout = () => {
        onLogout()
        setCurrentuser(null)
        onLogout()
        alert('ログアウトしました')
    }

        // name で検索して取得
        const res = await fetch(`${API_URL}/users?name=${username}`)
        const users = await res.json()

        // パスワードはフロント側で比較
        if (users.length > 0 && users[0].password === password) {
            const user = { name: users[0].name, age: users[0].age ?? 0, email: users[0].email ?? '' }
            setCurrentuser(user)
            onLogin(user)
            alert(`ようこそ、${users[0].name}さん！`)
            
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
  

  /// ログイン状態を判定する関数
  export function isUserStatus(currentuser: UserType | null) {
    const userStatus = currentuser == null
    if(userStatus === true){

      
    }
  }

   
  

  