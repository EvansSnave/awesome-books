const books = [];

// Add book

const addBooks = () => {
  const booksContainer = document.querySelector('.books__list');
  const inputTitle = document.querySelector('.books__input--title').value;
  const inputAuthor = document.querySelector('.books__input--author').value;
  const newBook = {
    title: inputTitle,
    author: inputAuthor,
  };
  const newDiv = `
    <div class="book${books.length}">
      <p>${newBook.title}</p>
      <p>${newBook.author}</p>
      <button class="books__button--remove">Remove</button>
    </div>
  `;
  booksContainer.insertAdjacentHTML('afterbegin', newDiv);
  books.push(newBook);
  console.log(books);
};

const addButton = document.querySelector('.books__button--add');

addButton.addEventListener('click', () => {
  addBooks();
});

// Remove book

const removeButtton = document.querySelector('.books__button--remove');

const removeBook = () => {
  const newArray = books.filter(book => books.indexOf(book + 1) == book.parentNode);
};