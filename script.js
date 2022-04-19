const storage = window.localStorage;
const booksArray = JSON.parse(storage.getItem('books')) || [];

function Book(title, author) {
  this.title = title;
  this.author = author;
  this.id = booksArray.length;
}

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
