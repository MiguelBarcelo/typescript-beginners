// string[]
let stringArr = ['one', 'two', 'three'];

// (string | number)[]
let guitars = ['Strat', 'Les Paul', 5150];

// (string | number | boolean)[]
let mixedData = ['EVH', 1984, true];

// stringArr only accepts string elements
// so, this following it's an error
// TS complains about this
// Type 'number' is not assignable to type 'string'.ts(2322)
stringArr[0] = 42
stringArr.push(88);

// only accepts the elements were defined
stringArr[3] = 'Four';
stringArr.push('Five');

guitars[0] = 1984;
guitars.push('Jim');

// It's not assignable
stringArr = guitars

// It's OK
guitars = stringArr


// I want to add another definition
let rgb: Array<string> = ['Red', 'Green', 'Blue'];
let cars: Array<string | number> = [];
cars.push('Sentra');
cars.push(300);
