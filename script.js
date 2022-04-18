function Book(title, author) {
  this.title = title;
  this.author = author;
}

let booksArray = [];
const storage = window.localStorage;
const booksDiv = document.querySelector('.books');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addBook = document.querySelector('#add-book');

function displayBooks() {
  const retrievedBooks = JSON.parse(storage.getItem('books'));
  if (retrievedBooks) {
    retrievedBooks.forEach((book) => {
      createBookDiv(book);
    });
  }
}

displayBooks();

function removeBook(element) {
  booksArray = JSON.parse(storage.getItem('books'));
  booksArray.splice(booksArray.findIndex((a) => a.title === element.previousSibling.innerText
    && a.author === element.previousSibling.previousSibling.innerText), 1);
  storage.setItem('books', JSON.stringify(booksArray));
  booksDiv.innerHTML = '';
  displayBooks();
}

function createBookDiv(book) {
  const bookContainer = document.createElement('div');
  bookContainer.className = 'book-container';
  bookContainer.innerHTML = `<p>${book.title}</p><p>${book.author}</p>`;
  const removeBtn = document.createElement('button');
  removeBtn.onclick = removeBook(this);
  booksDiv.appendChild(bookContainer);
}

addBook.addEventListener('click', (e) => {
  e.preventDefault();
  const newBook = new Book(titleInput.value, authorInput.value);
  booksArray = JSON.parse(storage.getItem('books'));
  if (!booksArray) {
    booksArray = [];
  }
  booksArray.push(newBook);
  storage.setItem('books', JSON.stringify(booksArray));
  createBookDiv(newBook);
  titleInput.value = '';
  authorInput.value = '';
});
