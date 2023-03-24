/**
 * type
 */
type Guitarist = {
  name: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [1984, 5150, 'OU812']
};

let jp: Guitarist = {
  name: 'Jimmy',
  active: true,
  albums: ['I', 'II', 3, 'IV']
};

evh = jp;
jp = evh;

// Property 'age' does not exist on type 'Guitarist'.ts(2339)
jp.age = 56;


// Optional property using ? at the end of property name
type Car = {
  model: string;
  manufacturer?: string;
  type: string;
};

// Ommited manufacturer prop
let sentra: Car = {
  model: 'Nissan',
  type: 'Sedan'
};

let murcielago: Car = {
  model: 'Lamborghini',
  manufacturer: 'Lamborghini',
  type: 'Sport'
};

// Lead with optional properties 
// - using ? at the end of property name
// - Narrowing
const manufactureredBy = (car: Car) => {
  return `${car.manufacturer?.toLocaleUpperCase()}`
};

const manufacturer = (car: Car) => {
  if (car.manufacturer) {
    return `${car.manufacturer?.toLocaleUpperCase()}`; 
  }
  return `Standard`;
}


/**
 * interface 
 */
interface User {
  name: string;
  pass: string;
  email: string;
}

let miguel: User = {
  name: 'Miguel',
  pass: '***',
  email: 'miguel.barcelo'
}
