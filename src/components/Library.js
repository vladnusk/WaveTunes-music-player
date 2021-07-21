import {useEffect} from "react";

import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  defaultMusic,
}) => {

  // useEffect(()=>{
    
     
  //       const localData = JSON.parse(localStorage.getItem("songs")) || [];
  //       setSongs(defaultMusic().concat(localData))
  //       console.log(localData)
     
  // }, [songs])
 

  return (
    <div className={`library ${libraryStatus ? "active-library" : " "}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            cover={song.cover}
            name={song.name}
            artist={song.artist}
            active={song.active}
            key={song.id}
            id={song.id}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
            defaultSong={song.default}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
