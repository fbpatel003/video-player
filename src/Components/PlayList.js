import React from "react";

function PlayList(props) {
  // console.log("PlayList" + props.data)

  return (
    <>
      <div className="SidePlayList">
        <h1>PlayList</h1>
        {props.data.map((element) => {
          return (
            <>
              <div
                className="playListVideos"
                onClick={() => {
                  props.start(element.trailer, element.name);
                }}
              >
                <img
                  className="Thumnail"
                  src={element.poster}
                  alt={element.name}
                  width="45%"
                  height="150"
                />
                <h3 className="Name">
                  {element.name} - {element.year}
                </h3>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default PlayList;
