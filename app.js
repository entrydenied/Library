// Holds books
let myLibrary = [];


// Makes books
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    
    this.info = function() {
      return(title + " by " + author + ", " + pages + ", " + read)
    }
  }
  
  const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet')
  
  console.log(theHobbit.info());

  // Adds books to the Library
  function addBookToLibrary() {
    
  }