let myLibrary = [
  {
    artwork: "https://images-na.ssl-images-amazon.com/images/I/81qjQRVKc5L.jpg",
    title: "The Last Days of Socrates",
    author: "Plato",
    genre: "Philosophy"
  },
  {
    artwork: "https://m.media-amazon.com/images/I/51N+DNCnhaL.jpg",
    title: "The Republic",
    author: "Plato",
    genre: "Philosophy"
  },
  {
    artwork: "https://images-na.ssl-images-amazon.com/images/I/51cQEdN9KuL._SX331_BO1,204,203,200_.jpg",
    title: "Meditations",
    author: "Marcus Aurelius",
    genre: "Philosophy"
  }
];

let formStatus = false;
function toggleForm() {
  let dropdown = document.getElementById("dropdown");
  let addNewBookButton = document.getElementById("add-new-book-button");
  if (formStatus == false) {
    formStatus = true;
    addNewBookButton.innerHTML = "Hide New Book Form";
    dropdown.innerHTML = `
    <div>
      <input placeholder="Artwork URL" type="text" id="artwork" name="artwork"><br><br>
      <input placeholder="Title" type="text" id="title" name="title"><br><br>
      <input placeholder="Author" type="text" id="author" name="author"><br><br>
      <input placeholder="Genre" type="text" id="genre" name="genre"><br><br>
      <button onclick="addBookToLibrary()">Add This Book to the Library</button>
    </div>
    `
  } else {
    formStatus = false;
    addNewBookButton.innerHTML = "Add New Book";
    dropdown.innerHTML = "";
  }
}

// Constructor
function Book(artwork, title, author, genre) {
  this.artwork = artwork;
  this.title = title;
  this.author = author;
  this.genre = genre;
}

function addBookToLibrary() {
  if (
  document.getElementById("artwork").value == "" || 
  document.getElementById("title").value == "" || 
  document.getElementById("author").value == "" || 
  document.getElementById("genre").value == "" 
  ) {
    alert("Please fill out the form competely.")
  } else {
    let newBook = new Book(
      document.getElementById("artwork").value,
      document.getElementById("title").value,
      document.getElementById("author").value,
      document.getElementById("genre").value,
    );
    myLibrary.push(newBook);
    let catalogueList = document.getElementById("catalogueList")
    let newLineItem = document.createElement("li");
  
    newLineItem.innerHTML = `
    <div class="card">
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
    </div>
    `;
    catalogueList.appendChild(newLineItem);
  
    document.getElementById("artwork").value = ""
    document.getElementById("title").value = ""
    document.getElementById("author").value = ""
    document.getElementById("genre").value = ""
  }
}


function displayCatalogue() {
  let catalogueList = document.getElementById("catalogueList")
  for (let i = 0; i < myLibrary.length; i++) {
    let currentIndex = myLibrary[i]
    let newLineItem = document.createElement("li");

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

    catalogueList.appendChild(newLineItem);
  }
}

displayCatalogue();