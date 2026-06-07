import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Upload from './main.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Upload />
  </StrictMode>
)

//動画アップロード画面を実装したい
async function uploadVideo(){
  const fileInput = document.getElementById("fileInput") as HTMLInputElement;


  if (!fileInput.files || fileInput.files.length === 0){
    alert("ファイルが選択されていません");;
    return;
  }

    const file = fileInput.files?.[0];
}

export default Upload
