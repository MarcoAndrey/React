// Performance y multiple Async Await
// ------------------------------------------------------------------------------------------------------------------------

const url = "https://jsonplaceholder.typicode.com/posts/1/comments";
const url2 = "https://jsonplaceholder.typicode.com/todos";

const consultarApi = async () => {
  try {
    const inicio = performance.now();
    const response = await fetch(url);
    if (response.ok) {
      throw new Error("hubo un error...");
    }
    const data = await response.json();
    console.log(data);
    const fin = performance.now();
    console.log(`El resultado del primeo es: ${fin - inicio} ms`);
  } catch (error) {
    console.log(error.message);
  }
};

consultarApi();

const consultarApi2 = async () => {
  try {
    const inicio = performance.now();

    const [response, response2] = await Promise.all([fetch(url), fetch(url2)]);

    const [data, data2] = await Promise.all([
      response.json(),
      response2.json(),
    ]);

    console.log(data);
    console.log(data2);

    const fin = performance.now();

    console.log(`El resultado del segundo es: ${fin - inicio} ms`);
  } catch (error) {
    console.log(error.message);
  }
};

consultarApi2();
