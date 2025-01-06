import '../pages/index.css';

import { booksData } from './components/books-data.js';

const bookTemplate = document.querySelector('#book-template');
const booksPlace = document.querySelector('.place');

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

  return bookElement;
};


booksData.forEach((book) => {
  const bookElement = createCard(book);

  booksPlace.append(bookElement);
})