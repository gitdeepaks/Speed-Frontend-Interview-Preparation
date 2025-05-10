(function () {
  const user = 'Deepak';
  console.log(user);
  const hello = () => console.log('Hello from IIFEE');
  hello();
})();

(function (name) {
  console.log('Hello ' + name);
})('Sean');

(function hello() {
  console.log('Hello');
})();

// function getCelsius(temp) {
//   const celsius = ((temp - 32) * 5) / 9;
//   return celsius;
// }

const getCelsius = (t) => ((t - 32) * 5) / 9;

console.log(getCelsius(101));

// Challange 2

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max,
  };
}

console.log(minMax([2, 4, 2, 6]));

// Challange - 3

((length, width) => {
  const area = length * width;

  const output = `The area will be ${length} x ${width}  and area ${area}`;

  console.log(output);
})(20, 15);
