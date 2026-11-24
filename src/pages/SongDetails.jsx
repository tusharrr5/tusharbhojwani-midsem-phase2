import { useParams, Link } from "react-router";
import { formatDuration } from "../components/SongCard";

function SongDetails({ songs, onTogglePlaylist }) {
  const { id } = useParams();
  const song = songs.find((s) => s.id === Number(id));

  if (!song) return <p>Song not found.</p>;

  return (
    <div className="details-container">
      <Link to="/songs" className="back-link">← Back to Songs</Link>
      <div className="details-card">
        <h2>
          {song.title} {song.streams >= 1000000 && <span className="trending-badge">Trending 🔥</span>}
        </h2>
        <p><strong>Artist:</strong> {song.artist}</p>
        <p><strong>Album:</strong> {song.album}</p>
        <p><strong>Genre:</strong> {song.genre}</p>
        <p><strong>Year:</strong> {song.year}</p>
        <p><strong>Duration:</strong> {formatDuration(song.duration)}</p>
        <p><strong>Streams:</strong> {song.streams}</p>

        <button
          className={song.isInPlaylist ? "btn-remove" : "btn-add"}
          onClick={() => onTogglePlaylist(song.id)}
        >
          {song.isInPlaylist ? "Remove from Playlist" : "Add to Playlist"}
        </button>
      </div>
    </div>
  );
}

export default SongDetails;
