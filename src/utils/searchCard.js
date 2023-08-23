export const searchCards = (movies, line, checkbox, tagSavedMovies) => {
  line = line.toLowerCase();
  const searchMovies = [];
  movies.forEach((item) => {
    if (
      checkbox
        ? item.nameRU.toLowerCase().includes(line) ||
          item.nameEN.toLowerCase().includes(line)
        : item.nameRU.toLowerCase().includes(line) & (item.duration < 40) ||
          item.nameEN.toLowerCase().includes(line) & (item.duration < 40)
    )
      searchMovies.push(item);
  });
  if (!tagSavedMovies) {
    localStorage.setItem("searchMovies", JSON.stringify(searchMovies));
    localStorage.setItem("checkbox", JSON.stringify(checkbox));
    localStorage.setItem("line", JSON.stringify(line));
  }
  return searchMovies;
};
