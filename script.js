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

// Website Navigation
const navList = document.querySelector('#nav-list');
const navAddNew = document.querySelector('#nav-add-new');
const navContact = document.querySelector('#nav-contact');

const bookListSection = document.querySelector('.books-list');
const addNewSection = document.querySelector('.add-new-book');
const contactSection = document.querySelector('.contact-info');

navList.addEventListener('click', () => {
  bookListSection.classList.add('display-section');
  addNewSection.classList.remove('display-section');
  contactSection.classList.remove('display-section');
});

navAddNew.addEventListener('click', () => {
  bookListSection.classList.remove('display-section');
  addNewSection.classList.add('display-section');
  contactSection.classList.remove('display-section');
});

navContact.addEventListener('click', () => {
  bookListSection.classList.remove('display-section');
  addNewSection.classList.remove('display-section');
  contactSection.classList.add('display-section');
});

// Show date and time
const dateTime = document.querySelector('#date-text');

function getDate() {
  const currentdate = new Date();
  const datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + ", "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();
    dateTime.innerHTML = datetime;
}

setInterval(getDate, 1000); 