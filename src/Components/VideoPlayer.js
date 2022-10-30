function VideoPlayer(props) {

  let name = props.videoName;
  name = name.toUpperCase();

  return (
    <>
      <div className="videoPlay">
        <h1>{name}</h1>
        <iframe
          width="853"
          height="480"
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
