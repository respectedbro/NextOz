const getData = () => {
  return fetch(
    "https://nextproj-7966c-default-rtdb.firebaseio.com/goods.json"
  ).then((r) => r.json());
};

export default getData;
