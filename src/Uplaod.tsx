// アップロードページコンポーネント
//ここでの処理内容説明は、動画ファイルを選択してアップロードする機能を提供することです。
// ユーザーはファイル入力から動画を選択し、アップロードボタンをクリックすると、
// サーバーから事前署名付きURLを取得し、そのURLに動画ファイルをPUTリクエストで送信します。
// 成功すると、ユーザーにアップロード完了の通知が表示されます。
// 失敗した場合はエラーメッセージが表示されます。

interface UploadPageProps {
  onBack: () => void
}

export function UploadPage({ onBack }: UploadPageProps) {
  return (
    <div>
      <button onClick={onBack}>← 戻る</button>
      <h1>動画アップロード</h1>
      <input type="file" id="fileInput" accept="video/*" />
      <button onClick={uploadVideo}>アップロード</button>
    </div>
  )
}

//動画アップロード画面を実装したい
export async function uploadVideo(){
  const fileInput = document.getElementById("fileInput") as HTMLInputElement;


  if (!fileInput.files || fileInput.files.length === 0){
    alert("ファイルが選択されていません");;
    return;
  }
  const file = fileInput.files[0];

  try {
    const response = await fetch("http://localhost:3000/getPresignedUrl");
    const data = await response.json();
    const presignedUrl = data.presignedUrl;

    await fetch(presignedUrl, {
      method: "PUT",
      body: file,
    });

    alert("動画がアップロードされました");
  } catch (error) {
    console.error("動画のアップロードに失敗しました", error);
    alert("動画のアップロードに失敗しました");
  }


}


//動画アップロード画面を実装したい
function Upload(){


  return (
    <>
      <input 
        type="file"
        id="fileInput"
        accept="video/*"
      />
      <button onClick={uploadVideo}>
        アップロード    
      </button>
    </>
  );

}

export default Upload
