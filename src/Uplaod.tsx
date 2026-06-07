

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
