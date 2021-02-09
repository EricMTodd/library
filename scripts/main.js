let myLibrary = [
  {
    id: 1,
    artwork: "https://images-na.ssl-images-amazon.com/images/I/81qjQRVKc5L.jpg",
    title: "The Last Days of Socrates",
    author: "Plato",
    genre: "Philosophy"
  },
  {
    id: 2,
    artwork: "https://m.media-amazon.com/images/I/51N+DNCnhaL.jpg",
    title: "The Republic",
    author: "Plato",
    genre: "Philosophy"
  },
  {
    id: 3,
    artwork: "https://images-na.ssl-images-amazon.com/images/I/51cQEdN9KuL._SX331_BO1,204,203,200_.jpg",
    title: "Meditations",
    author: "Marcus Aurelius",
    genre: "Philosophy"
  }
];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

function displayCatalogue() {
  let catalogue = document.getElementById("catalogue");
  let catalogueList = document.createElement("ul");
  catalogue.appendChild(catalogueList);
  for (let i = 0; i < myLibrary.length; i++) {
    let currentIndex = myLibrary[i]
    let newLineItem = document.createElement("li");

    // HTML
    newLineItem.innerHTML = `
    <div class="card">
      <img src=${currentIndex.artwork} alt="Artwork for ${currentIndex.title}">
      <div class="container">
        <p>
          Title: ${currentIndex.title}
          <br>
          Author: ${currentIndex.author}
          <br>
          Genre: ${currentIndex.genre}
        </p>
      </div>
    </div>
    `;
    // End HTML

    catalogueList.appendChild(newLineItem);
  }
}

displayCatalogue();