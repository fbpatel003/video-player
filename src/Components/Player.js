import React, { useState } from "react";
import PlayList from "./PlayList";
import VideoPlayer from "./VideoPlayer";

function Player() {
  const [alldata, setalldata] = useState([]);
  const [selectedName, setSelectedName] = useState(
    "Click on Playlist Video to Play"
  );
  const [selectedSrc, setSelectedSrc] = useState("");

  function start(clickedSrc, clickedName) {
    setSelectedName(clickedName);
    setSelectedSrc(clickedSrc);
  }

  FetchSetData();

  function FetchSetData() {
    fetch("https://api-uat.greatmanagerinstitute.com/api/v2/getTrailerList")
      .then((res) => res.json())
      .then((res) => {
        //   console.log(res.data);
        setalldata(res.data);
      })
      .catch((error) => console.log(error));
  }
  //   console.log(alldata);

  return (
    <>
      <VideoPlayer videoSrc={selectedSrc} videoName={selectedName} />
      <PlayList data={alldata} start={start} />
    </>
  );
}

export default Player;
