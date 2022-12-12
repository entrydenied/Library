// Global Definitions
let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let read = document.getElementById('read');
let container = document.getElementById('container')


// Holds books
let myLibrary = [];


// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

// 2. Add a function to the script that can take user’s input and store the new book objects into an array.
function addBookToLibrary() {
    myLibrary.push(this)   
}


let book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'unread')
let book2 = new Book('The Hobber', 'J.R.E. Experience', '321', 'read')

addBookToLibrary(book1);
addBookToLibrary(book2);
  
// 3. Write a function that loops through the array and displays each book on the page

function makeLibrary () {
    let i = 0;
	do {
		displayBooks(myLibrary[i])
		i++;
	} while (i <= myLibrary.length - 1)

    function displayBooks() {
        let bookContainer = document.createElement('li')
        bookContainer.classList.add('item-container')

        let titleValue = document.createElement('h5')
        titleValue.classList.add('book-title');
		titleValue.id = 'title-cont';
		titleValue.textContent = myLibrary[i].title;

        let authorValue = document.createElement('h5');
		authorValue.classList.add('book-author');
		authorValue.id = 'author-cont';
		authorValue.textContent = myLibrary[i].author;

        let pagesValue = document.createElement('h5');
		pagesValue.classList.add('book-pages');
		pagesValue.id = 'pages-cont';
		pagesValue.textContent = myLibrary[i].pages;

        let readValue = document.createElement('h5');
		readValue.classList.add('book-read');
		readValue.id = 'pages-cont';
		readValue.textContent = myLibrary[i].pages;

        container.appendChild(bookContainer);
		bookContainer.appendChild(titleValue);
		bookContainer.appendChild(authorValue);
		bookContainer.appendChild(pagesValue);
		bookContainer.appendChild(readValue);
    }
}

makeLibrary();

// availableBooks(myLibrary);

// let newBook = new Book (bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value)
// let usersBook = prompt()

 
// this.info = function() {
//   return(title + " by " + author + ", " + pages + ", " + read)
// }