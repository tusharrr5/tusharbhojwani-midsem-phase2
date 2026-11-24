import { Link } from "react-router";

export function formatDuration(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

function SongCard({ song, onTogglePlaylist }) {
  return (
    <div className="song-card">
      <h3>
        {song.title} {
        song.streams >= 1000000 && <span className="trending-badge">Trending 🔥</span>
        }
      </h3>
      <p>Artist: {song.artist}</p>
      <p>Genre: {song.genre}</p>
      <p>Duration: {formatDuration(song.duration)}</p>

      <button
        className={song.isInPlaylist ? "btn-remove" : "btn-add"}
        onClick={() => onTogglePlaylist(song.id)}
      >
        {song.isInPlaylist ? "Remove from Playlist" : "Add to Playlist"}
      </button>

      <Link to={`/songs/${song.id}`} className="details-link">
        View Details
      </Link>
    </div>
  );
}

export default SongCard;
