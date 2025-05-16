const colorObj = {
  color1: 'red',
  color2: 'white',
  color3: 'yello',
  color4: 'Green',
  color5: 'Blue',
};

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

const colorArr = ['Green', 'yello', 'Blue', 'Red'];
for (const key in colorArr) {
  console.log(colorArr[key]);
}

// Higher Order Array Methods

const socials = ['X or Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// Array.prototype.forEach();
// console.log(socials.__proto__)

socials.forEach((social, index, arr) => {
  console.log(`${social} - ${index} ,${arr}`);
});

const socialObjects = [
  { name: 'X', url: 'https://x.com' },
  { name: 'Y', url: 'https://y.com' },
  { name: 'Z', url: 'https://z.com' },
  { name: 'P', url: 'https://p.com' },
];

socialObjects.forEach((item) => console.log(item.url));

//Filter

// Array.prototype.filter();

const numbers = [1, 16, 2, 3, 5, 9, 6, 7, 8, 10, 5, 7];

// const evenNumber = numbers.filter((number) => number % 2 === 0);

// forEach
// const evenNumbers = [];
// numbers.forEach((numbers) => {
//   if (numbers % 2 === 0) {
//     evenNumbers.push(numbers);
//   }
// });

// console.log(evenNumbers);

const companies = [
  {
    name: 'Google',
    category: 'IT',
    revenue: 1000000,
    startDate: '2024-01-01',
    endDate: '2024-06-15',
  },
  {
    name: 'Apple',
    category: 'IT',
    revenue: 2000000,
    startDate: '2024-01-01',
    endDate: '2024-08-22',
  },
  {
    name: 'Tesla',
    category: 'Automotive',
    revenue: 3000000,
    startDate: '2024-01-01',
    endDate: '2024-11-30',
  },
  {
    name: 'Amazon',
    category: 'IT',
    revenue: 4000000,
    startDate: '2024-01-01',
    endDate: '2024-09-15',
  },
  {
    name: 'Microsoft',
    category: 'IT',
    revenue: 5000000,
    startDate: '2024-01-01',
    endDate: '2024-07-31',
  },
  {
    name: 'Meta',
    category: 'IT',
    revenue: 6000000,
    startDate: '2024-01-01',
    endDate: '2024-10-01',
  },
  {
    name: 'Netflix',
    category: 'Entertainment',
    revenue: 7000000,
    startDate: '2024-01-01',
    endDate: '2024-12-15',
  },
  {
    name: 'Adobe',
    category: 'Software',
    revenue: 8000000,
    startDate: '2024-01-01',
    endDate: '2024-05-20',
  },
  {
    name: 'Salesforce',
    category: 'Cloud Computing',
    revenue: 9000000,
    startDate: '2024-01-01',
    endDate: '2024-08-31',
  },
  {
    name: 'Oracle',
    category: 'IT',
    revenue: 10000000,
    startDate: '2024-01-01',
    endDate: '2024-11-15',
  },
  {
    name: 'IBM',
    category: 'IT',
    revenue: 11000000,
    startDate: '2024-01-01',
    endDate: '2024-07-15',
  },
  {
    name: 'Intel',
    category: 'Semiconductor',
    revenue: 12000000,
    startDate: '2024-01-01',
    endDate: '2024-09-30',
  },
  {
    name: 'AMD',
    category: 'Semiconductor',
    revenue: 13000000,
    startDate: '2024-01-01',
    endDate: '2024-12-01',
  },
  {
    name: 'NVIDIA',
    category: 'Semiconductor',
    revenue: 14000000,
    startDate: '2024-01-01',
    endDate: '2024-06-30',
  },
  {
    name: 'Qualcomm',
    category: 'Semiconductor',
    revenue: 15000000,
    startDate: '2024-01-01',
    endDate: '2024-10-31',
  },
];

// Get Semiconductor companies

const semiconductorCompanies = companies.filter((c) => c.category === 'Semiconductor');

// console.log(semiconductorCompanies);

// get the companies that start and end

const earlyCompanies = companies.filter(
  (c) => c.startDate >= '2024-01-01' && c.endDate === '2024-06-30'
);
console.log(earlyCompanies);

const longCompanies = companies.filter((c) => c.endDate - c.startDate === 1);

console.log(longCompanies);

// Array.prototype.map(); The Map filter
