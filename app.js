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

  // 2. Add a function to the script that can take user’s input and store the new book objects into an array.
  function addBookToLibrary() {
    let newBook = new Book (bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value)
    // let usersBook = prompt()
    myLibrary.push(newBook)

  }

  // 3. Write a function that loops through the array and displays each book on the page
function availableBooks(array) {
    console.table(myLibrary);
}

  



let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet')
let theHobber = new Book('The Hobber', 'J.R.E. Experience', '321 pages', 'read')

console.log(theHobbit);
myLibrary.push(theHobbit, theHobber);


availableBooks(myLibrary);



    
// this.info = function() {
//   return(title + " by " + author + ", " + pages + ", " + read)
// }