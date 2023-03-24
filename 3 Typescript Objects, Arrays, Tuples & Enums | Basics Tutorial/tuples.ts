// [string, number, boolean]
let tuple: [string, number, boolean] = ['Miguel', 43, true];

// (string | number | boolean)[]
let mixed = ['Barcelo', 43, true];

// It's not assignable
tuple = mixed;

// It's OK
mixed = tuple;
