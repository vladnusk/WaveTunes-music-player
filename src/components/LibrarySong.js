import React from "react";
import { playAudio } from "../util";
import { IconButton, TrashIcon } from "evergreen-ui";
import defaultMusic from "../data";
const LibrarySong = ({
  name,
  artist,
  cover,
  id,
  setCurrentSong,
  songs,
  audioRef,
  isPlaying,
  setSongs,
  active,
  defaultSong,
}) => {
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong({ ...selectedSong[0] });
    //Set Active in library
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);

    //Play audio
    playAudio(isPlaying, audioRef);
  };

  const deleteSong = (e) => {
    e.stopPropagation();
    const selectedSong = songs.filter((state) => state.id === id);
    const localData = JSON.parse(localStorage.getItem("songs")) || [];
    const indexToDelete = localData
      .map((item) => {
        return item.id;
      })
      .indexOf(selectedSong[0].id);
    localData.splice(indexToDelete, 1);
    localStorage.setItem("songs", JSON.stringify(localData));

    const updatedSongs = defaultMusic().concat(localData);

    setSongs(updatedSongs);
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${active ? "selected" : ""}`}
    >
      <img src={cover} alt="" />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>

      <div className={`delete-song ${defaultSong ? "hidden" : ""}`}>
        <IconButton
          onClick={deleteSong}
          icon={TrashIcon}
          intent="danger"
          size="small"
        />
      </div>
    </div>
  );
};

export default LibrarySong;
