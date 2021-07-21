import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import SongSearch from "./SongSearch";
const Nav = ({
  setLibraryStatus,
  libraryStatus,
  setCurrentSong,
  defaultMusic,
  currentSong,
  setSongs,
}) => {
  const openLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  };

  return (
    <nav>
      <h1>WaveTunes</h1>
      <SongSearch
        setCurrentSong={setCurrentSong}
        defaultMusic={defaultMusic}
        currentSong={currentSong}
        setSongs={setSongs}
      />
      <button
        className={libraryStatus ? "library-active" : ""}
        onClick={openLibraryHandler}
      >
        Library
        <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
      </button>
    </nav>
  );
};

export default Nav;
