import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import songsData from "./data/songs";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import SongDetails from "./pages/SongDetails";
import Playlist from "./pages/Playlist";
import "./App.css";

function App() {
  const [songs, setSongs] = useState(songsData);

  function handleTogglePlaylist(id) {
    const updated = songs.map((song) => {
      if (song.id === id) {
        return { ...song, isInPlaylist: !song.isInPlaylist };
      }
      return song;
    });
    setSongs(updated);
  }

  const playlistCount = songs.filter((s) => s.isInPlaylist).length;

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar playlistCount={playlistCount} />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home songs={songs} />} />
            <Route
              path="/songs"
              element={
                <Songs
                  songs={songs}
                  onTogglePlaylist={handleTogglePlaylist}
                />
              }
            />
            <Route
              path="/songs/:id"
              element={
                <SongDetails
                  songs={songs}
                  onTogglePlaylist={handleTogglePlaylist}
                />
              }
            />
            <Route
              path="/playlist"
              element={
                <Playlist
                  songs={songs}
                  onTogglePlaylist={handleTogglePlaylist}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
