# WEB 301 — Assignment 7: Music Playlist

## Student Details
- **Student Name:** Tushar Bhojwani
- **Roll Number / UID:** 150
- **Assigned Problem Statement:** P6 — Music Playlist
- **Live Vercel Deployment Link:** https://tusharbhojwani-midsem-phase2.vercel.app
- **GitHub Link:** https://github.com/tusharr5/tusharbhojwani-midsem-phase2

---

## Instructions to Run the Application

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## Features Implemented
- **Home (`/`):** Summary counts for total songs, songs in playlist, and trending tracks.
- **Songs List (`/songs`):**
  - Search songs by title or artist.
  - Dropdown filter by genre (`All`, `Romantic`, `Motivational`, `Sufi`, `Punjabi`).
  - Reusable `SongCard` with formatted duration (`m:ss`), `Trending 🔥` badge for songs with streams &ge; 1,000,000, and toggle buttons to add/remove songs from the playlist.
- **Song Details (`/songs/:id`):** Dynamic routing using `useParams()` displaying song details (album, year, streams, duration, genre, artist), trending badge, and toggle button.
- **Playlist (`/playlist`):** Displays all songs added to playlist along with total duration in `m:ss`, or shows `"Your playlist is empty"`.
- **Navbar:** Real-time count of songs currently saved in the playlist with persistent state across route navigation.
# tusharbhojwani-midsem-phase2
