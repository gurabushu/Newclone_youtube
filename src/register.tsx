

  interface buttonProps {
        onBack: () => void
        onRegister: () => void

    }

export function Register({ onBack, onRegister }: buttonProps) {
  

    return(
        <div>
            <h1>新規登録ページ</h1>
            <input type="text" placeholder="ユーザー名" />
            <input type="password" placeholder="パスワード" />
            <input type="email" placeholder="メールアドレス" />
            <button onClick={onRegister}>登録</button>
            <button onClick={onBack}>戻る</button>
        </div>
    )
}