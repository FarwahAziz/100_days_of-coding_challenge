//question 7 & 8
//making number 8 by all airthimetic operaters 
console.log(5+3)
console.log(10-2)
console.log(4*2)
console.log(16/2)

//question no 9

let myfavouritenumber:number=6
console.log(`my Favourite number is ${myfavouritenumber}`)
//DAY 4
//question 10
//kindly check Q 1 for this

//question 11  & 12

let names:string[]=["ayesha","umer","ibtisam"]
for (let i = 0; i < names.length; i++) {
    console.log (`My friend name is ${names[i]}`)   
   
}
//question 13

let cars:string[]=["corolla","Aqua","civic"]
cars.forEach(element => {
    console.log(`I would like to own a ${element}`)
});

//question 14

let guestlist:string[]=["rida","unsa","hiba"]
guestlist.forEach(myfriends => {
    console.log(`I'm inviting ${myfriends} on dinner of my birthday party`)

});


//question 15
let unabletoattend="rida"
console.log(`${unabletoattend} is unable to attend the dinner`)

let newguest="haya"
guestlist[guestlist.indexOf(unabletoattend)]=newguest

guestlist.forEach(guest=> {
      console.log(`Dear ${guest}, would you like to join me for dinner?`)});
//Day 6
      //question 16
console.log("we have found a bigger table so inviting some more guests")
guestlist.unshift("ammad")
guestlist.push("afiya")
guestlist.splice(guestlist.length / 2, 0, "Charles Darwin");

guestlist.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`)});
//question 17

console.log("unfortunately only two peaple can attend the dinner")
while (guestlist.length>2) {
    let removedguest=(guestlist.pop())
    console.log(`sorry ${removedguest} sorry i cant ivite you on dinner`)  
}
guestlist.forEach(guest=> {
    console.log(`Dear ${guest}, would you like to join me for dinner?`)});

    //question 17

    guestlist.splice(0,guestlist.length)
    console.log(guestlist)

    //question 18


    let placetovisit:string[]=["Canada","Turkey","dubai","Maldives","KSA"]
    console.log("original order",placetovisit);
    //printing in alphabetical order
    
    console.log("Alphabetical order",placetovisit.slice().sort());
    
    console.log("reverse order",placetovisit.slice().sort().reverse());
    
    console.log("original order",placetovisit);
    
    console.log("reverse order change")
    placetovisit.reverse()
    console.log(placetovisit);
    
    console.log("origninal order",placetovisit.sort())
    console.log(placetovisit);
    
    console.log("reverse alphabetical order",placetovisit.sort().reverse())
    console.log(placetovisit)
    
