const books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "The pact of the sun", author: "George Orwell", year: 1949 },
];

function extractAndSortTitles(books, callback) {

    const titles = books.map(book => book.title);
    const sortedTitles = titles.sort();
    callback(sortedTitles);

}
  
function logTitles(titles) {

    console.log("Titles in alphabetical order:");
    titles.forEach(title => console.log(title));
    
}
  
extractAndSortTitles(books, logTitles);