//TASK OF DAY 1
//question 1
let myname:string="farwah Aziz"
console.log(`hellow! ${myname} would you like to learn some python today?`)

//question 2

console.log(myname.toLowerCase())
console.log(myname.toUpperCase())
console.log(myname.charAt(0).toUpperCase()+ myname.slice(1).toLowerCase())

//TASK OF DAY 2

//question 4 & 5

let famousquote:string="A person who never made amistake never tried anything new"
console.log(`Elbert Einstien once said "${famousquote}"`)

let famousperson:string="Elbert Einstien"
let quote:string=`${famousperson}said"A person who never made amistake never tried anything new"`
console.log(quote)


//question 6

let myName: string = "\t\n Farwah \t\n"; // This saves the name with whitespace

console.log(myName); // Shows the name with whitespace
console.log(myName.trim()); // Shows the name without whitespace
