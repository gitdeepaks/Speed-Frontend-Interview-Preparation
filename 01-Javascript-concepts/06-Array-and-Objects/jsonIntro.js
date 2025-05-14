const post = {
  id: 1,
  title: 'Post One',
  body: 'The body',
};

//convert JSON to String
const str = JSON.stringify(post);

//parse JSON
const obj = JSON.parse(str);
console.log(obj);

const posts = [
  { id: 1, title: 'Post One', body: 'The body' },
  { id: 2, title: 'Post Two', body: 'The body 2' },
  { id: 3, title: 'Post Three', body: 'The body 3' },
];
