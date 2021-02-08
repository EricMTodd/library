let myLibrary = [
  {
    id: 1,
    title: "The Last Days of Socrates",
    author: "Plato",
    genre: "Philosophy"
  },
  {
    id: 2,
    title: "Republic",
    author: "Plato",
    genre: "Philosophy"
  },
  {
    id: 3,
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
    let newLineItem = document.createElement("li");
    newLineItem.innerHTML = `Title: ${myLibrary[i].title}`;
    catalogueList.appendChild(newLineItem);
  }
}

displayCatalogue();