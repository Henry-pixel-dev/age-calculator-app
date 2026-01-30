let date = new Date(2026, 0, 29);
let sameDate = date;
// console.log(date)
sameDate.setDate(30);

console.log(sameDate.getDate());

let actualcopy = new Date(date.getTime())

console.log(actualcopy)