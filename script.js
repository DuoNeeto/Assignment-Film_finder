/* ============== 
FRANCHISE PICKER 
===============*/

const allRadioButtons = document.getElementsByName("movie-filter");

const addListenersToRadioButtons = function (array) {
  return array.forEach((element) => {
    let listItemAndChildren = element.parentNode.childNodes;
    console.log(listItemAndChildren);
    return listItemAndChildren.forEach((item) => {
      item.addEventListener("click", (evt) => {
        //De parent element en al haar children krijgen een eventListener.
        return filterData(evt);
      });
    });
  });
};

const filterData = function (evt) {
  let clickEventValue = evt.target.getAttribute("value");

  switch (
    clickEventValue // Eeen switch statement om tussen films/franchises te switchen.
  ) {
    case "new-movies":
      // console.log("The switch case works fine");
      const moviesFrom2014AndLater = movies.filter(
        (movie) => parseInt(movie.year) >= 2014
      );
      // Voeg toe de selectie films in de photoGrid.
      photoGrid(moviesFrom2014AndLater);

      // Test
      /*       console.log(
        "Dit is de selectie van films >= 2014:",
        moviesFrom2014AndLater
      ); */

      break;
    // De onderstaande cases zijn gecombineerd omdat deze allen een zelfde werking moeten hebben.
    case "x-men":
    case "avengers":
    case "princess":
    case "batman":
      //console.log("de gecombineerde case werkt ook.");

      const chosenFranchise = movies.filter((movie) =>
        movie.title.toLowerCase().includes(clickEventValue)
      );
      // Stop de gekozen franchise in de photoGrid
      photoGrid(chosenFranchise);
      console.log(chosenFranchise);
      break;
  }
};
addListenersToRadioButtons(allRadioButtons);

/* ===========
  PHOTO GRID 
=============*/

const photoGrid = function (movieSelection) {
  // Verwijder de films die al op de pagina stonden.
  resetMovies();

  movieSelection.forEach(function (movie, i) {
    // VARIABLES
    const gridLocation = document.querySelector("body nav ul");
    const createCell = document.createElement("li");
    const createLabel = document.createElement("label");
    const createAnchor = document.createElement("a");
    const createPoster = document.createElement("img");
    const posterID = movie.poster;
    const imdbID = movie.imdbID;
    const imdbAdress = "https://www.imdb.com/title/";

    // CREATE ELEMENTS

    // Create de cel <li>
    createCell.classList.add("photo-grid-cell");

    // Create de <label>
    createLabel.innerHTML = movie.title;
    createLabel.setAttribute("for", movie.title);

    // Create de <a> met het volgende attribuut.
    createAnchor.setAttribute("href", imdbAdress.concat(imdbID));

    // Zet de opacity naar 100%
    // createPoster.style.opacity = "100%";

    // Create de filmposter, met een nieuwe class.
    createPoster.classList.add("photo-grid-cell-image");

    // Zet op iedere poster een attribuut (een link naar IMDB)
    createPoster.setAttribute("src", posterID);

    // Plaats binnen de nieuwe <li> de nieuwe <a> en stop in deze in de nieuwe <img>.
    gridLocation
      .appendChild(createCell)
      // .appendChild(createLabel)  // Deze staat verkeerd omdat hij een label in <li> moet maken,
      // nu maakt hij van de label een parent van de nieuwe anchor-tag en poster-image.
      .appendChild(createAnchor)
      .appendChild(createPoster);

    // Onthou de selectie films van de laatst gemaakte keuze.
    // previousSelection.push(movie);
    //console.log(previousSelection);
  });
};

// Verwijder de films van de vorige selectie, maak de grid leeg.
const resetMovies = function () {
  const childrenOfUnorderedlist = document.querySelectorAll("body nav ul *");
  childrenOfUnorderedlist.forEach(function (element) {
    element.remove();
  });
};

/* ================
    DECORATION
=================*/

// Wanneer de muis boven een film hangt, dan verschijnt de film-poster in het groot op de achtergrond van de body.

const hoverOverMovie = function () {
  const imgElements = document.getElementsByClassName("photo-grid-cell-image");
  const imgURL = document.getElementsByClassName("photo-grid-cell-image");
  const bodyBackground = document.getElementsByTagName("body");
  const createHover = imgElements; // incompleet

  // console.log("dit zit in imgElements:", imgElements);

  Array.from(imgElements).forEach(function (element) {
    console.log("Dit is ieder los element van imgElements:", element);
    /*     element.addEventListener("mouseover", function (evt) {
      const target = evt.target;
      console.log("Dit ziet er in de event target:", target); */
    /* target.bodyBackground.setAttribute(
              "backgroundImage",
              imgURL[i].style.poster
            ); */
  });
};

console.log(hoverOverMovie());
