import '../pages/index.css';

import { booksData } from './components/books-data.js';

const bookTemplate = document.querySelector('#book-template');
const booksPlace = document.querySelector('.place');
const addBookButton = document.querySelector('.place__button');
const addBookPopup = document.querySelector('#popupAddBook');
const addBookForm = document.forms['add-book'];

const createCard = (bookData) => {
  const bookElement = bookTemplate.content.querySelector('.book').cloneNode(true);

  const bookName = bookElement.querySelector('.book__name');
  const bookAuthor = bookElement.querySelector('.book__author');
  const bookPagesCount = bookElement.querySelector('.book__pages-count');
  const bookReading = bookElement.querySelector('.switcher__checkbox');
  const bookDelete = bookElement.querySelector('.book__delete');

  bookName.textContent = bookData.name;
  bookAuthor.textContent = bookData.author;
  bookPagesCount.textContent = bookData.pages;
  bookReading.checked = bookData.isRead;

  bookDelete.addEventListener('click', () => {
    handleDeleteBook(bookElement);
  });

  return bookElement;
};

const handleDeleteBook = (bookElement) => {
  bookElement.remove();
}

booksData.forEach((book) => {
  const bookElement = createCard(book);

  booksPlace.append(bookElement);
});

const handleAddBookFormSubmit = (event) => {
  event.preventDefault();

  const newBookData = {
    name: addBookForm.bookName.value,
    author: addBookForm.bookAuthor.value,
    pages: addBookForm.bookPages.value,
    isRead: addBookForm.bookIsRead.checked,
  };

  const bookElement = createCard(newBookData);

  booksPlace.insertBefore(bookElement, addBookButton.nextSibling);

  addBookPopup.close();
}

addBookForm.addEventListener('submit', handleAddBookFormSubmit);

addBookButton.addEventListener('click', () => {
  addBookPopup.showModal();
});