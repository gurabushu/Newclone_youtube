import "./App.css"

function indexVideo(){
   const videoList = [
      { id: 1, title: "動画1", videoId: "video1" },
      { id: 2, title: "動画2", videoId: "video2" },
      { id: 3, title: "動画3", videoId: "video3" },
    ];

  return(
    <div>
      <h1>動画一覧</h1>
      <div className="horizontal-list">
      {videoList.map((video) => (
        <div key={video.id}>
          <h2>{video.title}</h2>
          <iframe
            width="400"
            height="215"
            src={`https://www.youtube.com/embed/${video.videoId}`}
            allowFullScreen
          />
        </div>
      ))}
     </div>
    </div>
  )
}


export default indexVideo