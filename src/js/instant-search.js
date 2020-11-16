const search = document.getElementById('search-bar');
//const resultParagraph = document.getElementById('#instant-search__paragraph');

//Search books.json and filter it
const searchBooks = async (searchText) => {
  const res = await fetch('./books.json');
  const books = await res.json;
  JSON.stringify(books);
  console.log(books);

  //let text = books.text(); // leer cuerpo de la respuesta como texto
  //Get matches to current text input
  /* let matches = books.filter((books) => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return books.name.match(regex) || books.abbr.match(regex);
  });*/

  // Paso final es crear el outputHTML()
};

search.addEventListener('input', () => searchBooks(search.value));
console.log(searchBooks('Un chico y su perro en el fin del mundo'));
searchBooks();
