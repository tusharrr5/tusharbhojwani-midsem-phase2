import { useState } from "react";
import SongCard from "../components/SongCard";

function Songs({ songs, onTogglePlaylist }) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  const filtered = songs.filter((song) => {
    const matchSearch = song.title.toLowerCase().includes(search.toLowerCase());
    const matchGenre = genre === "All" || song.genre === genre;
    return matchSearch && matchGenre;
  });

  return (
    <div>
      <h2>All Songs</h2>

      <div className="filters-bar">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="All">All</option>
          <option value="Romantic">Romantic</option>
          <option value="Motivational">Motivational</option>
          <option value="Sufi">Sufi</option>
          <option value="Punjabi">Punjabi</option>
        </select>
      </div>

      <div className="songs-grid">
        {filtered.map((song) => (
          <SongCard key={song.id} song={song} onTogglePlaylist={onTogglePlaylist} />
        ))}
      </div>
    </div>
  );
}

export default Songs;
