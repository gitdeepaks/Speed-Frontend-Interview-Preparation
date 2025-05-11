const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map((number) => `Doubled number will be ${number * 2}`);
console.log(doubleNumbers);

// forEach method

const newDoubled = [];

numbers.forEach((num) => newDoubled.push(num * 2));

console.log(newDoubled);

const companies = [
  {
    name: 'Google',
    category: 'IT',
    revenue: 1000000,
    startDate: '1999',
    endDate: '2048',
  },
  {
    name: 'Apple',
    category: 'IT',
    revenue: 2000000,
    startDate: '1991',
    endDate: '4000',
  },
  {
    name: 'Tesla',
    category: 'Automotive',
    revenue: 3000000,
    startDate: '2006',
    endDate: '2099',
  },
  {
    name: 'Amazon',
    category: 'IT',
    revenue: 4000000,
    startDate: '1996',
    endDate: '2096',
  },
  {
    name: 'Microsoft',
    category: 'IT',
    revenue: 5000000,
    startDate: '1991',
    endDate: '2055',
  },
  {
    name: 'Meta',
    category: 'IT',
    revenue: 6000000,
    startDate: '2005',
    endDate: '3000',
  },
  {
    name: 'Netflix',
    category: 'Entertainment',
    revenue: 7000000,
    startDate: '2021',
    endDate: '2089',
  },
  {
    name: 'Adobe',
    category: 'Software',
    revenue: 8000000,
    startDate: '1971',
    endDate: '2011',
  },
  {
    name: 'Salesforce',
    category: 'Cloud Computing',
    revenue: 9000000,
    startDate: '1857',
    endDate: '2028',
  },
  {
    name: 'Oracle',
    category: 'IT',
    revenue: 10000000,
    startDate: '1978',
    endDate: '2067',
  },
  {
    name: 'IBM',
    category: 'IT',
    revenue: 11000000,
    startDate: '1980',
    endDate: '2049',
  },
  {
    name: 'Intel',
    category: 'Semiconductor',
    revenue: 12000000,
    startDate: '1992',
    endDate: '2029',
  },
  {
    name: 'AMD',
    category: 'Semiconductor',
    revenue: 13000000,
    startDate: '1997',
    endDate: '2024',
  },
  {
    name: 'NVIDIA',
    category: 'Semiconductor',
    revenue: 14000000,
    startDate: '1996',
    endDate: '2055',
  },
  {
    name: 'Qualcomm',
    category: 'Semiconductor',
    revenue: 15000000,
    startDate: '2005',
    endDate: '2024',
  },
];

//create a array of company names

const compNames = companies.map((c, index) => `${c.name} - ${index}`);

console.log(compNames);

//create a  Arr with comp cat

categoriesCompo = companies.map((c) => {
  return { name: c.name, category: c.category };
});
console.log(categoriesCompo);

// Create an Arr of length of years

const compYears = companies.map((c) => {
  return {
    name: c.name,
    length: c.endDate - c.startDate,
  };
});

console.log(compYears);

// Chain Methods
const squareDouble = numbers
  .map((num) => Math.sqrt(num))
  .map((sqrt) => sqrt * 2)
  .filter((num) => num % 2 === 0)
  .reduce((acc, currVal) => currVal + acc, 0);
console.log(squareDouble);
