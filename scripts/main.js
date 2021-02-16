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


// Functions
function init() {
  // Check to see if localStorage has anything in it.
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
    ]
  } else {
    // Load up localStorage
  }
}

function addNewBook() {
  // Add a book!
}

function removeBook() {
  // Remove the selcted book
}