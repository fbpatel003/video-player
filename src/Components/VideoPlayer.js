function VideoPlayer(props) {
  return (
    <>
      <div className="videoPlay">
        <h1>{props.videoName}</h1>
        <iframe
          width="80%"
          height="50%"
          src={props.videoSrc}
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </>
  );
}

export default VideoPlayer;
