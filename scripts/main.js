// Factory Functions
const book = (id, artwork, title, author, genre) => {
  return { id, artwork, title, author, genre };
}

// Functions
const init = () => {
  // Check to see if localStorage has anything in it.
  let catalogueList = document.getElementById("catalogue-list");
  if (!localStorage.initialVisit) {
    localStorage.setItem("initialVisit", "true");
    localStorage.setItem("uniqueId", "3");

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
      catalogueList.appendChild(newListItem);
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
      catalogueList.appendChild(newListItem);
    }

  }
};

let formStatus = false;
const toggleForm = () => {
  let dropdown = document.getElementById("dropdown");
  let createBookButton = document.getElementById("add-new-book-button");
  if (formStatus == false) {
    formStatus = true;
    createBookButton.innerHTML = "Hide New Book Form";
    dropdown.innerHTML = `
    <div>
      <fieldset>
        <legend>Enter Book Details</legend>
        <input autocomplete="off" placeholder="Artwork URL" type="text" id="artwork" name="artwork"><br><br>
        <input autocomplete="off" placeholder="Title" type="text" id="title" name="title"><br><br>
        <input autocomplete="off" placeholder="Author" type="text" id="author" name="author"><br><br>
        <input autocomplete="off" placeholder="Genre" type="text" id="genre" name="genre"><br><br>
        <button onclick="createBook()">Submit</button>
      </fieldset>
    </div>
    `
  } else {
    formStatus = false;
    createBookButton.innerHTML = "Add New Book";
    dropdown.innerHTML = "";
  }
};

const createBook = () => {
  let catalogueList = document.getElementById("catalogue-list");
  if (
    document.getElementById("artwork").value == "" ||
    document.getElementById("title").value == "" ||
    document.getElementById("author").value == "" ||
    document.getElementById("genre").value == ""
  ) {
    alert("Please fill out the form competely.")
  } else {
    let uniqueId = JSON.parse(localStorage.uniqueId);
    uniqueId++;
    localStorage.setItem("uniqueId", uniqueId);
    let newBook = book(
      uniqueId,
      document.getElementById("artwork").value,
      document.getElementById("title").value,
      document.getElementById("author").value,
      document.getElementById("genre").value,
    );
    let library = JSON.parse(localStorage.library);
    library.push(newBook);
    localStorage.setItem("library", JSON.stringify(library));
    let newListItem = document.createElement("li");

    newListItem.innerHTML = `
    <div id="${newBook.id}" class="card">
      <div class="card-art">
        <img src="${newBook.artwork}"
      </div><br><br>
      <div class="card-details">
        Title: ${newBook.title}<br>
        Author: ${newBook.author}<br>
        Genre: ${newBook.genre}<br>
      </div><br>
      <a class="remove-book" onclick="removeBook(${newBook.id})">Remove Book</a> 
    </div>
    `;
    catalogueList.appendChild(newListItem);

    document.getElementById("artwork").value = "";
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("genre").value = "";
  }
};

const removeBook = (target) => {
  let library = JSON.parse(localStorage.library);
  for (let i = 0; i < library.length; i++) {
    if (library[i].id == target) {
      library.splice(i, 1);
      localStorage.setItem("library", JSON.stringify(library));
      document.getElementById(`${target}`).remove();
    }
  }
};

init();