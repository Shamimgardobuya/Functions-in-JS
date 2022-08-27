//create programme that loops through tthe numbers 1 to 100 
function addying(z){
    for(let i=0;i<z;i++){
        console.log(i);
    }

}
addying(100);
// // Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one
// //create two objects and compareif  if the attribute are in any of the objects.

// //create s function that will print out the name for the first function and inside it afunction that greets the name
// //the second function using console,concatenate the string with the variable 
function naming(name){    //parent function
    function greets(){    //child function 
        console.log(`Hi ${name}`);
    }
    greets()
}
naming("Js")
// returning a function
function names(name1){    //parent function
    function greets(){    //child function 
        console.log(`Hi ${name1}`);
    }
    return naming
}
const nameOf=names("Js")
console.log(nameOf);
nameOf() 
  //finding largest number in an array 
  //create array
  //ceate variable holding the largest
  //loop through the list
  //condition if any item in list is greatest than variable creaated 
  //assign the largest to the specific element
  //console the largest.

let arr1=[1,3,45,6]
let largest =0;
for(let p=0;p<arr1.length;p++){
    if(arr1[p]>largest){
        largest=arr1[p]
    }


    // }else{
    //   console.log(i);
    // }
    console.log(largest);
}
// }
// Write a JavaScript program to
//  calculate multiplication and division
//   of two numbers (input from user)
    // create a function and pass in two parameters
    //create a third variable and name it multiplication
    //using asterix,multiply the two parameters
    // create a third  variable and call it division
    // Use the / sign 
function Calculation(numb1,numb2){
    let multiply2=numb1*numb2
    let divide=numb1/numb2
    console.log(`The multiplication is ${multiply2} and the division of ${numb1} and ${numb2} is ${divide}`)

}
Calculation(3,4);
//    create a class calculator
  //with constructors of two numbers
  //inside the constructor create a function division
  //create an object and access the function
class Calculator{
    constructor(number1,number2){
        this.number1=number1
        this.number2=number2
        this.multiply=(number1,number2)=>
            console.log(number1*number2)
        ;
        this.division=function(){
            console.log(number1/number2)
        }

    }
}
let question=new Calculator(4,2)
console.log(question.division())
console.log(question.multiply())

  //create an object with attriutes of name and desire
  //create a function with a string of words
  //create another function to call the function back and reply with yes or no

let student={
    name_of:"Salma",
    desire:"Be a software developer"
}
function why(partb){
    let x="To acquire skills in JS,";
    let p="I know not of the path am going to end up in";
    let w="but working towards being skilled in all areas";
    let q="JS can be used in both front-end and back-end ";
    let s="and i have so much zeal and zest in learning it .";
    let win="With that i send my application letter . "
    let combine=`${x} ${p} ${w} ${q} ${s} ${win}`
    console.log(combine);
  
}
function hopingResponse(){
        console.log(`yes ${Object.values(student)}`);
}
why(hopingResponse)
hopingResponse()


let stu = (num1,num2) =>{
    console.log(num1+num2);
    return n
}
// Write a JavaScript program to compare two objects to 
// determine if the first one contains equivalent property values to the second one.
  //create two objects with two keys and values
  //compare the values using an if statement
  //
let objectOne={
    firstname:"AkiraChix",
    lastname:"Computer"
}
let objectTwo={
    firstname:"Zuenna",
    lastname:"Elon"
}
if(Object.values(objectOne)===Object.values(objectTwo)){
    console.log("Hello World");
}
else{
    console.log("Good evening");
}
//acess then compare the two objects
//can one access all the values of an object
//then compare the two
//is there a range in javascript 
//

console.log(objectOne.firstname);
const range = (start, end,length = end - start + 1) =>   //create a start and an end 
  Array.from({ length }, (_, i) => start + i)    // create the length 
  console.log(range(2001,2020));   //console the function
 async function range(start,end){
    for (let i = start; i <= end; i++) {
        yield i;
    }
}
await range()
// one can use also a for of loop
//can be used wuth rnge function
function looping(){
for (i of somebody(1, 5)) {   //starting point and ending point of the function
    console.log(i);         //console each variable
} 
}
looping()





