  //create an array of items and each item using th arrow. multiply each by 3
  //create a function and pass in paramter
  //loop through each element using the array
  //multiply by three
  //print the new array
  //call function of the array 
function iterating(){
    arr2=[1,2,3,4]
    arr2.forEach(i => {
        // let x=2;
        // i*=x
        console.log(i*2);

    });
    console.log(arr2);
     //console the new list inside,after the operation
}
iterating()
let b=["Name","Somebody","People"];
b.push("Orange")//fpr addying element to last position
console.log(b);
let c=new Array("Banana","Kiwi")
//using map in your array 
//
let d=c.map(item => `I love ${item}`)
console.log(d);
let e= c.map(function(item){
  return `I love ${item}`
})
console.log(e);
//



console.log(b);
console.log(b[1])
function people(){
  return `You guys`
}
function students(a,callingb){    //calling the function again 
  console.log(a);
  console.log(callingb);

}
students(26,people());
let arr3=["Kiwi","Orange","Water melon"]
console.log(arr3.splice(1,2,3));
console.log(arr3);

let peopl={
  name:20,
  country:"Kenya"


};
console.log(peopl["country"]);
console.log(peopl.country);   //access the property using dot.


let person=new Object(peopl);   ///creating object from object
console.log(person.name);
person["age"]=32
console.log(person);

for([key,values] of Object.entries(person)){
  console.log(`${key}:${values}`);
}
// Object.freeze(person);
person['school']="Akirachix"  
Object.seal(person);//added a new property    ///work slike dictionaries
console.log(person);
   //removing an attribute in an object 
   //

delete(person.age);
console.log(person);
   //methods are functions as values in object

let table={
  name:"Anita",
  country:"Kenya",
  hobby:function(){
    return `My ${this.name}favourite hobby is baking`        //use of this to access property of object.    //name a property pf the global variable.
  },
  friends:{
    her:30,
    country:"Rwanda",
    nam:"She",

  },
}
console.log(table.hobby());
console.log(table.country);
console.log(table.friends.nam);
console.log(table.friends.country);
console.log(table.friends.her);
console.log(table.friends.nam);

 //using arrays remove multiple items from an array.\
 //use .splice to  remove many items by specifying index of item
//create an array of fruits
//using .splice() remove fruit Cherry 
//
let newArray=["Cherry","Banana","Grapes"]

newArray.splice(-2);
console.log(newArray);

//closures


//create a function thatreturns the first elementof the array
//console the first element using indexing 
function first(x){
        console.log(x[0])
}
first([])
// Write a simple JavaScript program to join all elements of the following array into a string.
  //create a function and pass in a parameter
  //create an empty string
  ///loop through tthe elemenets of the array
  //concatenate using plus sign

  //call the function
  function joining(p){
    let colors=""
    let i=0
    while(i<p.length){
      colors+=p[i]
      console.log(colors)

      i++

  }
  // for(let i=0;i<p.length;i++){
  //   let _word=""
  //   _word+=[i]
  //   console.log(_word)
  // }
  // // colors+=p[i]  
  }
  joining(["Purple","Onion","Plant"])


  // Write a JavaScript program which accept a number as input and insert dashes
  //  (-) between each two even numbers.
  
  // For example if you accept 025468 the output should be 0-254-6-8
// 
//create a function
      // create an array of numbers and print all the elements that are divisible by 2

let arrOne=[1,2,3,4,5,6,78,9];
let arrP=item=>item%2==0
// console.log(arrP);
arrOne.map(arrP)








