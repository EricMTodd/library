// Global variables


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
  let catalogue = document.querySelector("#catalogue")
  if (!localStorage.initialVisit) {
    // Set localStorage values, creating a library and recording the visit.
    localStorage.setItem("initialVisit", "true");

    let library = [
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
          <img src="${library[i].artwork}"
        </div><br><br>
        <div class="card-details">
          Title: ${library[i].title}<br>
          Author: ${library[i].author}<br>
          Genre: ${library[i].genre}<br>
        </div><br>
        <a class="remove-book">Remove Book</a>
      </div>
      `
      catalogue.appendChild(newListItem);
    }
    localStorage.setItem("library", JSON.stringify(library));
    window.location.reload();
  } else {
    // Load up localStorage
    let library = JSON.parse(localStorage.library);
    for (let i = 0; i < library.length; i++) {
      let newListItem = document.createElement("li");
      newListItem.innerHTML = `
      <div id="${library[i].id}" class="card">
        <div class="card-art">
          <img src="${library[i].artwork}"
        </div><br><br>
        <div class="card-details">
          Title: ${library[i].title}<br>
          Author: ${library[i].author}<br>
          Genre: ${library[i].genre}<br>
        </div><br>
        <a class="remove-book" onclick="removeBook(${library[i].id})">Remove Book</a>
      </div>
      `
      catalogue.appendChild(newListItem);
    }

  }
}

function dropdownToggle() {
  // Toggle the add new book menu.
}

function addNewBook() {
  // Add a book!
}

function removeBook(target) {
  let library = JSON.parse(localStorage.library);
  for (let i = 0; i < library.length; i++) {
    if (library[i].id == target) {
      library.splice(i, 1);
      document.getElementById(`${target}`).remove();
    }
  }
  localStorage.setItem("library", JSON.stringify(library));
}

init();