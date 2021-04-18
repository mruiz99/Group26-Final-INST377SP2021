async function getGames() {
  const requestGames = await fetch('/api/games');
  const gamesData = await requestGames.json();
  return gamesData;
}

async function getGenre() {
  const requestGenres = await fetch('/api/genres');
  const genresData = await requestGenres.json();
  return genresData;
}