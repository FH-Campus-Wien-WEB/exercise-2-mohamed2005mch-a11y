window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      for (const movie of movies) {
        /* Task 1.3. Add your code from exercise 1 here 
           and include a non-functional 'Edit' button
           to pass this test */
           const article = document.createElement("article");
           article.id = movie.imdbID;

           article.innerHTML = `
                <img src="${movie.Poster}" alt="${movie.Title} Poster">
            <div>
                <h1>${movie.Title}</h1>
                <button onclick="location.href='edit.html?imdbID=${movie.imdbID}'">Edit</button>
                <p><strong>Released:</strong> ${movie.Released}</p>
                <p><strong>Runtime:</strong> ${movie.Runtime} minutes</p>
                <p><strong>Genres:</strong>
                    ${movie.Genres.map(g => `<span class="genre">${g}</span>`).join("")}
                </p>
                <p><strong>Directors:</strong> ${movie.Directors.join(", ")}</p>
                <p><strong>Writers:</strong> ${movie.Writers.join(", ")}</p>
                <p><strong>Actors:</strong> ${movie.Actors.join(", ")}</p>
                <p>${movie.Plot}</p>
                <p><strong>Metascore:</strong> ${movie.Metascore}</p>
                <p><strong>IMDb Rating:</strong> ${movie.imdbRating}</p>
            </div>
            `;
            
            bodyElement.append(article)
      }

    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
          xhr.status +
          " - " +
          xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
