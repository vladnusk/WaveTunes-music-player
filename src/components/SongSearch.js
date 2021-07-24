import { Autocomplete, SearchInput, Button } from "evergreen-ui";
import { useEffect, useState } from "react";
import { playAudio } from "../util";
const SongSearch = ({
  setCurrentSong,
  currentSong,
  setSongs,
  defaultMusic,
  songs,
  audioRef,
  isPlaying,
}) => {
  const [songsOutput, setSongsOutput] = useState([]);
  const [songTitle, setSongTitle] = useState("");

  useEffect(() => {
    const fetchSongs = async () => {
      await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/search?q=${songTitle}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "97c1279ee6mshc24c405498b9905p11d15bjsnacf12715e3c3",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          if (response.data) {
            const songArr = response.data.map((song) => {
              return {
                name: song.title,
                artist: song.artist.name,
                id: song.id,
                cover: song.album.cover_big,
                audio: song.preview,
                key: song.id,
                color: ["#5C84C9", "#20364B"],
                active: false,
              };
            });

            const uniqueSongs = [];
            const duplicateCatcher = {};
            songArr.forEach((song) => {
              if (
                !(duplicateCatcher[song.artist] && duplicateCatcher[song.name])
              ) {
                uniqueSongs.push(song);
                duplicateCatcher[song.artist] = "ok";
                duplicateCatcher[song.name] = "ok";
              }
            });

            setSongsOutput(uniqueSongs);
          }
        })
        .catch((err) => {
          console.error(err);
          return <div>An error occured!</div>;
        });
    };
    fetchSongs();
  }, [songTitle]);

  const changeSongHandler = (changedSong) => {
    const selectedSong = songsOutput.find(
      (song) => `${song.artist} - ${song.name}` === changedSong
    );
    setCurrentSong(selectedSong);
    playAudio(isPlaying, audioRef);
  };

  const addToLibrary = () => {
    const localData = JSON.parse(localStorage.getItem("songs")) || [];
    let obj = songs.find((song) => song.id === currentSong.id);

    obj ? console.log("song already added!") : localData.push(currentSong);

    localStorage.setItem("songs", JSON.stringify(localData));

    setSongs(defaultMusic().concat(localData));
  };

  return (
    <div className="song-search">
      <Autocomplete
        title="Search results:"
        items={songsOutput.map((song) => `${song.artist} - ${song.name}`)}
        onChange={changeSongHandler}
      >
        {(props) => {
          const { getInputProps, getRef, inputValue } = props;
          return (
            <SearchInput
              onInput={(e) => {
                setSongTitle(e.target.value);
              }}
              placeholder="enter song or artist name"
              value={inputValue}
              ref={getRef}
              {...getInputProps()}
            />
          );
        }}
      </Autocomplete>

      <Button onClick={addToLibrary}>add song</Button>
    </div>
  );
};
export default SongSearch;
