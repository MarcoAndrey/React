// ------------------------------------------------------------------------------------------------------------------------
// Fetch Api con Promises
// Jason Placeholder https://jsonplaceholder.typicode.com/

// ------------------------------------------------------------------------------------------------------------------------

const url = "https://jsonplaceholder.typicode.com/posts/1/comments";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });
