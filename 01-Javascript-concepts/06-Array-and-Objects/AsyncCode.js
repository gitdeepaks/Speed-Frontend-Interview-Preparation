// const myPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej('promise rejected');
//   }, 2000);
// });

// myPromise.then((data) => console.log(data)).catch((err) => console.log(err));
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const fetchData = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log('Error to fetch', error);
  }
};

fetchData();
