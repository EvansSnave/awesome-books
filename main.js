const books = JSON.parse(localStorage.getItem('books')) || [];

function displayBooks() {
  const bookCollection = document.getElementById('bookCollection');
  bookCollection.innerHTML = '';

  books.forEach((book, index) => {
    const bookDiv = document.createElement('div');

    const titlePara = document.createElement('p');
    titlePara.textContent = `${book.title} by ${book.author}`;
    bookDiv.appendChild(titlePara);

    const removePara = document.createElement('p');
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      // eslint-disable-next-line no-use-before-define
      removeBook(index);
    });
    removePara.appendChild(removeButton);
    bookDiv.appendChild(removePara);

    bookCollection.appendChild(bookDiv);
  });
}

function addBook() {
  const newBookTitle = document.getElementById('newBookTitle');
  const newBookAuthor = document.getElementById('newBookAuthor');
  books.push({ title: newBookTitle.value, author: newBookAuthor.value });
  localStorage.setItem('books', JSON.stringify(books));

  newBookTitle.value = '';
  newBookAuthor.value = '';

  displayBooks();
}

function removeBook(index) {
  books.splice(index, 1);
  localStorage.setItem('books', JSON.stringify(books));
  displayBooks();
}

document.getElementById('addButton').addEventListener('click', addBook);

displayBooks();
