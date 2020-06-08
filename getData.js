const fetch = require("node-fetch");
const url =
  "https://raw.githubusercontent.com/LucaKaufmann/video-data/master/v2/data.json";

let data;

const getData = () => {
  let data;
  fetch(url)
    .then((res) => res.json())
    .then((json) => (data = json));
  setTimeout(() => {
    return data;
  }, 2000);
};

setTimeout(() => {
  console.log(data);
}, 5000);

exports.getData = getData;
