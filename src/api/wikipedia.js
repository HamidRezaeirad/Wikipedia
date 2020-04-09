import wikipedia from "../services/wikipedia";

const getUserProfile = params => {
  const url =
    `api.php?origin=*` +
    `&action=query` +
    `&format=json` +
    `&formatversion=2` +
    `&prop=pageimages|pageterms|description|extracts` +
    `&piprop=thumbnail` +
    `&titles=${params.title}` +
    `&pithumbsize=400` +
    "&exintro" +
    "&explaintext";
  return new Promise((resolver, reject) => {
    wikipedia
      .get(url)
      .then(res => {
        resolver(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export { getUserProfile };
