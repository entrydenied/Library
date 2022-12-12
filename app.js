// Global Definitions
let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let read = document.getElementById('read');


// Holds books
let myLibrary = [];


// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  // 3. Write a function that loops through the array and displays each book on the page

function makeLibrary () {
    for (let i = 0; i <= myLibrary.length -1; i++) {
        displayBooks(makeLibrary[i])
    }
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




    // 2. Add a function to the script that can take user’s input and store the new book objects into an array.
function addBookToLibrary() {
    let newBook = new Book (bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value)
    // let usersBook = prompt()
    myLibrary.push(newBook)   
}


let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet')
let theHobber = new Book('The Hobber', 'J.R.E. Experience', '321 pages', 'read')

console.log(theHobbit);
myLibrary.push(theHobbit, theHobber);


availableBooks(myLibrary);



    
// this.info = function() {
//   return(title + " by " + author + ", " + pages + ", " + read)
// }