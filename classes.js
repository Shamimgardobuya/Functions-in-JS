//creating classes in javascript
//
class Students{
    constructor(name,age,school){
    this.name=name
    this.age=age 
    this.school=school
    this.hobby=function(){
        return `i love playing games`
    }



    }
// Students.prototype.country=function(){

// }


}
  //prototype in Javascript
  //

var  firstStudent= new Students("Lenovo",45,"AkiraChix");
console.log(firstStudent);
console.log(firstStudent.hobby());

//new keyword for creating object
function Studen(name,age,country){
    this.name=name
    this.age=age
    this.country=country

}
var pers=new Students("Javascript,") 
//array constructors

let names=["Chiri","Zipporah","Shamim"]
let n