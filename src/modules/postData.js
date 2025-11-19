const postData = (cart) => {
  return fetch("http://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(cart),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((r) => r.json());
};

export default postData;
