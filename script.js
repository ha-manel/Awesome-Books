class BookCollection {
  constructor() {
    this.booksArray = JSON.parse(localStorage.getItem('books')) || [];
  }

  displayBooks() {
    const booksDiv = document.querySelector('.books');
    booksDiv.innerHTML = '';
    this.booksArray.forEach((book, id) => {
      booksDiv.innerHTML += `<div class="book-container"><div class="book-info"><p class="display-title">" ${book.title.charAt(0).toUpperCase() + book.title.slice(1)} "</p><p>by</p><p class="display-author">${book.author.charAt(0).toUpperCase() + book.author.slice(1)}</p></div><button id="${id}" class="remove-btn" onclick="remove(this.id)">Remove</button></div>`;
    });
  }

  addBook(title, author) {
    const book = {
      title,
      author,
    };
    this.booksArray.push(book);
    localStorage.setItem('books', JSON.stringify(this.booksArray));
    this.displayBooks();
  }

  removeBook(index) {
    this.booksArray.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.booksArray));
    this.displayBooks();
  }
}

const booksCollection = new BookCollection();
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addBook = document.querySelector('#add-book');

booksCollection.displayBooks();

function remove(index) { //eslint-disable-line
  booksCollection.removeBook(index);
}

addBook.addEventListener('click', (e) => {
  e.preventDefault();
  if (titleInput.value && authorInput.value) {
    booksCollection.addBook(titleInput.value, authorInput.value);

    titleInput.value = '';
    authorInput.value = '';
  }
});
