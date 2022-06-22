let myLibrary = [];
let order = "title";
let displayedLibrary = new Array;

function Book()
{ /*name, author, pages, hasRead*/}

function Book(title, author, pages, hasRead)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

Book.prototype.info = function()
{
    console.log(this);
    return `${this.title} by ${this.author}, ${this.pages} pages, ${ this.hasRead ? "read" : "not read yet"}`;
}

function addBookButton()
{
    addBook();
    reinitializeCardTable();
}

function addBook()
{
    const addBookForm = document.getElementById("addBookForm");
    const inputArr = Array.from(addBookForm.querySelectorAll("input"));

    let title;
    let author;
    let pages;
    let hasRead;

    for(let inputElement of inputArr)
    {
        switch(inputElement.getAttribute("for"))
        {
            case "title": title = inputElement.value;
            break;
            
            case "author":  author = inputElement.value;
            break;
            
            case "pages":  pages = inputElement.value;
            break;
            
            case "hasRead":  hasRead = inputElement.checked;
            break;
        }
    }
    
    //add code to find if book already exists in lib
    myLibrary.push(new Book(title, author, pages, hasRead));
    
    // for(let inputElement of inputArr)
    // {inputElement.value = "";}
}



////////////////////////////////////////////////
//limits results by page number, search parameters etc
function limitResultsby()
{
    const search = document.getElementById("searchFilter");
    const pagesLowerLimit = document.getElementById("pagesLowerLimit");
    const pagesUpperLimit = document.getElementById("pagesUpperLimit");
    //read

    let filteredLibrary = myLibrary;

    if(search.value.length)
    {filteredLibrary = filteredLibrary.filter((book) => {return book.title.toLowerCase().includes(search.value.toLowerCase()) || book.author.toLowerCase().includes(search.value.toLowerCase());});    }

    if(pagesLowerLimit.value)
    {filteredLibrary = filteredLibrary.filter((book) => {return pagesLowerLimit.value <= book.pages;});}
    
    if(pagesUpperLimit.value)
    {filteredLibrary = filteredLibrary.filter((book) => {return book.pages <= pagesUpperLimit.value;});}

    // console.log(filteredLibrary);
    return filteredLibrary;
}

function sortResultsByButton(inputOrder){
    order = inputOrder;
    filterResults();
}

function sortBooksArrayBy(booksArr = myLibrary, order = "title")
{
    switch(order)
    {
        case "title":   booksArr.sort((a, b) => a.title.localeCompare(b.title))
                        break;
                        
        case "author":  booksArr.sort((a, b) => a.author.localeCompare(b.author))
                        break;
                        
        case "pages":   booksArr.sort((a, b) => a.pages > b.author)
                        break;
    }

    return booksArr;
}



function filterResults(myLibrary = myLibrary)
{
    let filterResults;

    function orderByTitle()
    {
        
    };







}

function reinitializeCardTable()
{
    const existingCards = document.querySelector(".card-table");
    
    while(existingCards.hasChildNodes())
    {existingCards.removeChild(existingCards.firstChild);}

    //take in filter

    let displayedResults = filterResults(myLibrary);

    populateTable();


}


function populateTable(displayResults = myLibrary)
{
    const table = document.querySelector(".card-table");
    for(const book of displayResults)
    {
        const card = document.createElement("div");
        card.className = "card";

        const title = document.createElement("div");
        title.textContent = book.title;
        title.className = "title";

        const author = document.createElement("span");
        author.textContent = book.author;
        author.className = "author";
        
        const hasRead = document.createElement("input");
        hasRead.type = "checkbox";
        hasRead.className = "hasRead";
        hasRead.checked = book.hasRead;
        hasRead.id = book.title;

        hasRead.addEventListener("change", () =>
        {book.hasRead = hasRead.checked;});

        card.appendChild(title);
        card.appendChild(author);
        author.appendChild(hasRead);

        table.appendChild(card);
    }
}

function initialize()
{
    theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
    myLibrary.push(theHobbit);
    myLibrary.push(new Book("Twilight", "Stephanie Meyers", 295, false));
    myLibrary.push(new Book("Harry Potter: Prisoner of Askaban","J.K. Rowling", 300 , false));
    myLibrary.push(new Book("The Bible", "God", 851, true));
    myLibrary.push(new Book("The Screwtape Letters", "C.S. Lewis", 51, true));
    myLibrary.push(new Book("Mere Christianity", "C.S. Lewis", 51, false));
    myLibrary.push(new Book("Cracking the Coding Interview", "Aal Laackman", 51, false));
    myLibrary.push(new Book("The Hobbit", "J.R. Tolkien", 51, false));
    myLibrary.push(new Book("Crime and Punishment", "Doestevsky", 51, false));
    myLibrary.push(new Book("", "", 51, true));
    myLibrary.push(new Book("", "", 51, false));
    myLibrary.push(theHobbit);
    myLibrary.push(theHobbit);
    myLibrary.push(theHobbit);
    myLibrary.push(theHobbit);
    myLibrary.push(theHobbit);
    myLibrary.push(theHobbit);
    myLibrary.push(theHobbit);
    console.log(theHobbit.info());

    sortBooksArrayBy();
    //myLibrary.sort()

    populateTable();
    // addButtonEvents();
}

function listResultsButton()
{
    document.getElementById("filterDropdown").classList.toggle("show");
}



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////


initialize();

/*
If you haven’t already, set up your project with skeleton HTML/CSS and JS files.
All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:

let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}
Write a function that loops through the array and displays each book on the page. 
You can display them in some sort of table, or each on their own “card”. 
It might help for now to manually add a few books to your array so you can see the display.

Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: 
author, title, number of pages, whether it’s been read and anything else you might want.

Add a button on each book’s display to remove the book from the library.

You will need to associate your DOM elements with the actual book objects in some way. 
One easy solution is giving them a data-attribute that corresponds to the index of the library array.

Add a button on each book’s display to change its read status.
To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.
hello */
