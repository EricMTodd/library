
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


// Constructor
function Book(id, artwork, title, author, genre) {
  this.id = id;
  this.artwork = artwork;
  this.title = title;
  this.author = author;
  this.genre = genre;
}


// Functions
function stringifyStorageData() {
  localStorage.setItem("library", JSON.stringify(library));
  // console.log(localStorage);
}


function parseStorageData() {
  library = JSON.parse(localStorage.getItem("library"))
  // console.log(JSON.parse(localStorage.getItem("library")))
}


let uniqueId = 3;
function addBookToLibrary() {
  if (
  document.getElementById("artwork").value == "" || 
  document.getElementById("title").value == "" || 
  document.getElementById("author").value == "" || 
  document.getElementById("genre").value == "" 
  ) {
    alert("Please fill out the form competely.")
  } else {
    uniqueId++;
    let newBook = new Book(
      uniqueId,
      document.getElementById("artwork").value,
      document.getElementById("title").value,
      document.getElementById("author").value,
      document.getElementById("genre").value,
    );
    parseStorageData();
    library.push(newBook);
    let catalogueList = document.getElementById("catalogueList")
    let newLineItem = document.createElement("li");
  
    newLineItem.innerHTML = `
    <div id="${newBook.id}" class="card">
      <img src=${newBook.artwork} alt="Artwork for ${newBook.title}">
      <div class="container">
        <p>
          Title: ${newBook.title}
          <br>
          Author: ${newBook.author}
          <br>
          Genre: ${newBook.genre}
        </p>
      </div>
      <a id="remove-book-from-library" onclick="removeBookFromLibrary(${newBook.id})">Remove Book</a>
    </div>
    `;
    catalogueList.appendChild(newLineItem);
  
    document.getElementById("artwork").value = ""
    document.getElementById("title").value = ""
    document.getElementById("author").value = ""
    document.getElementById("genre").value = ""
  }
  stringifyStorageData();
}


function removeBookFromLibrary(target) {
  for (let i = 0; i < library.length; i++) {
    if (library[i].id === target) {
      parseStorageData();
      library.splice(i, 1)
    }
  }
  document.getElementById(target).remove();
  stringifyStorageData();
}


let formStatus = false;
function toggleForm() {
  let dropdown = document.getElementById("dropdown");
  let addNewBookButton = document.getElementById("add-new-book-button");
  if (formStatus == false) {
    formStatus = true;
    addNewBookButton.innerHTML = "Hide New Book Form";
    dropdown.innerHTML = `
    <div>
      <fieldset>
        <legend>Enter Book Details</legend>
        <input placeholder="Artwork URL" type="text" id="artwork" name="artwork"><br><br>
        <input placeholder="Title" type="text" id="title" name="title"><br><br>
        <input placeholder="Author" type="text" id="author" name="author"><br><br>
        <input placeholder="Genre" type="text" id="genre" name="genre"><br><br>
        <button onclick="addBookToLibrary()">Add Book to Library</button>
      </fieldset>

    </div>
    `
  } else {
    formStatus = false;
    addNewBookButton.innerHTML = "Add New Book";
    dropdown.innerHTML = "";
  }
}


function displayCatalogue() {
  parseStorageData();
  let catalogueList = document.getElementById("catalogueList")
  for (let i = 0; i < library.length; i++) {
    let currentIndex = library[i]
    let newLineItem = document.createElement("li");

    newLineItem.innerHTML = `
    <div id="${currentIndex.id}" class="card">
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
      <a id="remove-book-from-library" onclick="removeBookFromLibrary(${currentIndex.id})">Remove Book</a>
    </div>
    `;

    catalogueList.appendChild(newLineItem);

  }
  stringifyStorageData();
}

function resetLibraryCatalogue() {
  parseStorageData();
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
  stringifyStorageData();
  location.reload();
}

displayCatalogue();