// Holds books
let myLibrary = [];


// Book constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }

  // Adds books to the Library
  function addBookToLibrary() {

  }

  // 3. Write a function that loops through the array and displays each book on the page


function availableBooks(array) {
    console.table(myLibrary);
}

  
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet')
const theHobber = new Book('The Hobber', 'J.R.E. Experience', '321 pages', 'read')

console.log(theHobbit.info());
myLibrary.push(theHobbit, theHobber);


availableBooks(myLibrary);



    
// this.info = function() {
//   return(title + " by " + author + ", " + pages + ", " + read)
// }