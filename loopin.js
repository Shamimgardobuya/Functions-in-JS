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

