// // // //Call bind apply

// // // const user1 = {
// // //   name: 'Deepak',
// // //   age: 26,
// // // };

// // // const user2 = {
// // //   name: 'Ghungroo',
// // //   age: 46,
// // // };

// // // function printDetails(city, country) {
// // //   console.log(
// // //     `Name: ${this.name},Age:${this.age}, Location:${city} ${country}`
// // //   );
// // // }

// // // printDetails.call(user1, 'Jaipur', 'India');
// // // printDetails.call(user2, ['Jaipur', 'India']);
// // // const newDetails = printDetails.bind(user1, 'Jaipur', 'India');
// // // const obj = {
// // //   name: 'Sankhyan',
// // //   greet: function () {
// // //     return `Hello, ${this.name}`;
// // //   },
// // // };

// // // const greetFn = obj.greet.bind(obj);

// // // console.log(greetFn());

// // // let cart = ['Milk', 'Bread', 'Butter', 'Juice', 'Nuts'];

// // // const preview = cart.slice(1, 4);

// // // console.log(preview);

// // // const newArr = [...oldArray];
// // // const newObj = [...oldArray];
// // const nums = [1, 2, 3];

// // const copy = [...nums, 4];

// // console.log(copy);

// // const newStudent = {
// //   name: 'Deepak',
// // };

// // const copy1 = { ...newStudent, age: 27 };

// // console.log(copy1);

// //Rest

// // function logAll(...items) {
// //   console.log(items);
// // }
// // logAll('pen', 'pencil', 'Eraser');

// // const [first, ...rest] = [10, 20, 30, 40];

// // console.log(first, rest);
// const mySetr = new Set();
// mySetr.add(10);
// mySetr.add(10);
// mySetr.add(20);
// mySetr.add(50);

// console.log(mySetr.has(60));
// console.log(mySetr);

// console.log(mySetr.size);

// for (const val of mySetr) {
//   console.log(val);
// }
// const map = new Map();

// map.set('name', 'Deepak');
// map.set('age', 26);

// console.log(map);
// for (const [key, value] of map) {
//   console.log(key, value);
// }

// const myPromise = new Promise((res, rej) => {
//   if (true) {
//     res('');
//   } else {
//     rej('');
//   }
// });

// myPromise
//   .then((res) => console.log(res))
//   .catch(() => console.log())
//   .finally(() => {});

function orderFood(isResOpen) {
  return new Promise((res, rej) => {
    console.log('Placing Order');
    setTimeout(() => {
      if (isResOpen) {
        res('Order Recieved');
      } else {
        rej('Order Closed');
      }
    }, 2000);
  });
}

orderFood(false)
  .then((res) => {
    console.log(res);
    return ' Preparing Food';
  })
  .then((res) => {
    console.log(res);
    return 'Out for Delivery';
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err))
  .finally(() => {
    console.log('Thanks for using Swiggy!');
  });
