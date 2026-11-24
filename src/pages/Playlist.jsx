import SongCard, { formatDuration } from "../components/SongCard";

function Playlist({ songs, onTogglePlaylist }) {
  const playlist = songs.filter((s) => s.isInPlaylist);
  const totalDuration = playlist.reduce((sum, s) => sum + s.duration, 0);

  if (playlist.length === 0) {
    return <p className="empty-text">Your playlist is empty</p>;
  }

  return (
    <div>
      <h2>My Playlist</h2>
      <p><strong>Total Duration:</strong> {formatDuration(totalDuration)}</p>
      <div className="songs-grid">
        {playlist.map((song) => (
          <SongCard key={song.id} song={song} onTogglePlaylist={onTogglePlaylist} />
        ))}
      </div>
    </div>
  );
}

export default Playlist;
