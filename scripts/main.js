// Global variables
let initialVisit = true;
let library = [];


// Constructors
function book(id, artwork, title, author, genre) {
  this.id = id;
  this.artwork = artwork;
  this.title = title;
  this.author = author;
  this.genre = genre;
}

function stringifyLocalStorage() {
  // x = JSON.stringify(");
}

function parseLocalStorage() {
  //y = JSON.parse();
}

// Functions
function init() {
  // Check to see if localStorage has anything in it.
  let catalogue = document.querySelector("#catalogue")
  if (initialVisit == true) {
    // Load up dummy data of a few books
    library = [
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


    for (let i = 0; i < library.length; i++) {
      let newListItem = document.createElement("li");
      newListItem.innerHTML = `
      <div class="card">
        <div class="card-art">
          <img src="${library[i].artwork}"<br><br><br>
        </div>
        <div class="card-details">
          Title: ${library[i].title}<br>
          Author: ${library[i].author}<br>
          Genre: ${library[i].genre}<br>
        </div>
        <br><a class="remove-book">Remove Book</a>
      </div>
      `
      catalogue.appendChild(newListItem);
    }
  } else {
    // Load up localStorage

  }
}

function dropdownToggle() {
  // Toggle the add new book menu.
}

function addNewBook() {
  // Add a book!
}

function removeBook() {
  // Remove the selcted book
}

init();