class BookCollection {
  constructor() {
    this.booksArray = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook(title, author) {
    const book = {
      title: title,
      author: author,
    };
    this.booksArray.push(book);
    localStorage.setItem('books', JSON.stringify(this.booksArray));
  }

  removeBook(index) {
    this.booksArray.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.booksArray));
  }
}

const booksCollection = new BookCollection();
const booksDiv = document.querySelector('.books');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addBook = document.querySelector('#add-book');

function displayBooks() {
  booksDiv.innerHTML = '';
  booksArray.forEach((book, id) => {
    booksDiv.innerHTML += `<div class="book-container"><p>${book.title}</p><p>${book.author}</p><button id="${id}" onclick="removeBook(this.id)">Remove</button><hr></div>`;
  });
}

displayBooks();

function removeBook(bookId) { //eslint-disable-line
  booksArray.splice(bookId, 1);
  storage.setItem('books', JSON.stringify(booksArray));
  displayBooks();
}

addBook.addEventListener('click', (e) => {
  e.preventDefault();
  const newBook = new Book(titleInput.value, authorInput.value);
  booksArray.push(newBook);
  storage.setItem('books', JSON.stringify(booksArray));
  displayBooks();

  titleInput.value = '';
  authorInput.value = '';
});

const booksCollection = new BookCollection();
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addBook = document.querySelector('#add-book');
 
const booksDiv = document.querySelector('.books');
function displayBooks() {
  booksDiv.innerHTML = '';
  booksCollection.booksArray.forEach((book, id) => {
    booksDiv.innerHTML += `<div class="book-container"><div class="book-info"><p class="display-title">" ${book.title.charAt(0).toUpperCase() + book.title.slice(1)} "</p><p>by</p><p class="display-author">${book.author.charAt(0).toUpperCase() + book.author.slice(1)}</p></div><button id="${id}" class="remove-btn" onclick="remove(this.id)">Remove</button></div>`;
  });
}
 
displayBooks();
 
function remove(bookId) { //eslint-disable-line
  booksCollection.removeBook(bookId);
  displayBooks();
}
 
addBook.addEventListener('click', (e) => {
  e.preventDefault();
  if (titleInput.value && authorInput.value) {
    booksCollection.addBook(titleInput.value, authorInput.value);
    displayBooks();
 
    titleInput.value = '';
    authorInput.value = '';
  }
});