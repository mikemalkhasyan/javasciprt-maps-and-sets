//Saturday To Do List
//8am: Walk the dogs
//12pm: Lunch
//3pm: Watch a movie

const saturday = new Map();

saturday.set(8, 'walk the dogs');
saturday.set(12, 'lunch');
saturday.set(3, 'watch a movie');

//How do we get the value associated with the 12 key?
const noon = saturday.get(12);
console.log('What am I doing at 12pm on Saturday', noon);

//How do we get the value associated with the 9 key?
const nine = saturday.get(9)
console.log('What am I doing at 9 on Saturday', nine);