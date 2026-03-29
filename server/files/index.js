window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      const myMovies = document.createElement("main")
      movies.forEach(element => {
          const movieArticle = document.createElement("article")
          movieArticle.setAttribute("id", element.imdbID)

          const actorList = document.createElement("ul")
          const writerList = document.createElement("ul")
          const genreList = document.createElement("div")

          const ratingSection = document.createElement("section")
          const writersSection = document.createElement("section")
          const actorsSection = document.createElement("section")
          const descriptionSection = document.createElement("section")
          const headSection = document.createElement("section")

          element.Actors.forEach(actor => {
              const actorOnList = document.createElement("li")
              actorOnList.textContent = actor
              actorList.append(actorOnList)
          })

          element.Writers.forEach(writer => {
              const writerOnList = document.createElement("li")
              writerOnList.textContent = writer
              writerList.append(writerOnList)
          })

          element.Genres.forEach(genre => {
              const genreOnList = document.createElement("span")
              genreOnList.textContent = genre
              genreList.append(genreOnList)
              genreOnList.classList.add("genre")
          })

          const poster = document.createElement("img")
          poster.src=element.Poster

          const title = document.createElement("h1")
          title.textContent=element.Title

          const description = document.createElement("h2")
          description.textContent= "Description"

            const actors = document.createElement("h2")
          actors.textContent= "Actors"

            const writers = document.createElement("h2")
          writers.textContent= "Writers"

          const headline = document.createElement("p")
          headline.textContent=  element.Released + ", " + element.Runtime + " minutes" 

          const directors = document.createElement("p")
          directors.textContent="Directed by " + element.Directors 

          const plot = document.createElement("p")
          plot.textContent=element.Plot

          const ratings = document.createElement("h2")
          ratings.textContent="Ratings"

          const ratingsText1 = document.createElement("p")
          ratingsText1.textContent="Rated " + element.Metascore + " out of 100 on Metascore"

          const ratingsText2 = document.createElement("p")
          ratingsText2.textContent= "Rated " + element.imdbRating + " out of 10 on ImdB" 

          const formButton = document.createElement("button")
          formButton.textContent = "Edit"
          formButton.addEventListener("click", () => { 
            location.href = "edit.html?imdbID=" + element.imdbID
          })

          headSection.append(title, headline, genreList, directors)
          ratingSection.append(ratings, ratingsText1, ratingsText2)
          writersSection.append(writers, writerList)
          actorsSection.append(actors, actorList)
          descriptionSection.append(description, plot)

          movieArticle.append(poster, headSection, ratingSection, descriptionSection,actorsSection, writersSection, formButton)
        myMovies.append(movieArticle)
      });
      bodyElement.append(myMovies)
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
