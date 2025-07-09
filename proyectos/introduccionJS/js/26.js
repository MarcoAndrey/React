// ------------------------------------------------------------------------------------------------------------------------
// Fetch Api con Async / Await
// Jason Placeholder https://jsonplaceholder.typicode.com/

// ------------------------------------------------------------------------------------------------------------------------

const url = "https://jsonplaceholder.typicode.com/posts/1/comments";

fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("hubo un problema");
  })
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error.message));

// ------------------------------------------------------------------------------------------------------------------------

const consultarApi = async () => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      throw new Error("hubo un error...");
    }
    const error = await response.json();
    console.log(error);
  } catch (error) {
    console.log(error.message);
  }
};

consultarApi();
