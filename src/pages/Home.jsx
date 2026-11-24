function Home({ songs }) {
  const total = songs.length;
  const inPlaylist = songs.filter((s) => s.isInPlaylist).length;
  const trending = songs.filter((s) => s.streams >= 1000000).length;

  return (
    <div className="home-container">
      <h1>Music Playlist App</h1>
      <p className="intro">Welcome to the Music Playlist app!</p>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Songs</h3>
          <p className="stat-number">{total}</p>
        </div>
        <div className="stat-card">
          <h3>In Playlist</h3>
          <p className="stat-number">{inPlaylist}</p>
        </div>
        <div className="stat-card">
          <h3>Trending Songs</h3>
          <p className="stat-number">{trending}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
