let myName: string = 'Miguel';
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myName = 'Barcelo';
meaningOfLife = 43;
isLoading = true;
album = 'Van Halen'
//...
album = 1984

// Functions and their parameters
const sum = (a: number, b: number): number => {
  return a + b;
};

// Union Types
let postId: string | number;
postId = 'MB-08';
//...
postId = 8;

let isActive: number | boolean;
isActive = 1;
//...
isActive = true;

// RegExp
let re: RegExp = /\w+/g;