let myLibrary = new Array();

function Book()
{
    // name, author, pages, hasRead
}

function Book(name, author, pages, hasRead)
{
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}


Book.prototype.info = function()
{
    console.log(this);
    return `${this.name} by ${this.author}, ${this.pages} pages, ${ this.hasRead ? "read" : "not read yet"}`;
}

theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());

function addBookToLibrary()
{
    
}