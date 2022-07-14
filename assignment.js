class Fruits{
    constructor(name,quantity){
        this.name=name
        this.quantity=quantity

    }
}
let item1=new Fruits("Book",6);   //object
function pricing(){           //function for pricing
    let x={"Orange":40,"Book":80};   //object for price
    if (item1.name in x){             //check if property of object in pricing object
        // for (const val in x){
            let pricing= x[item1.name]*item1.quantity   //multiply for the exact property//will calculate for the specific price,no loops  
            console.log(`${pricing} is the price of ${item1.name}`);                     

        //  }  

    }
    else{
        console.log("Item not found");
    }
      //for price of each item 
    //multiplied the attribute with value of object
                                 //console for price.
}
pricing()
// create a class,takes in fruit,quantity
//create a this holding type of fruit with price
//create instance of class
//create a method for multiplying the value
class KioskCalc{
    constructor(fruitb,quantityb){
        this.fruitb=fruitb
        this.quantityb=quantityb
        this.fruitsPricelist={"orange": 30, "mango": 15, "avocado": 40}
        this.getTotalCost=function(){
            return `you have bought ${quantityb}${fruitb}s  for sh${quantityb*this.price1} `


        }
           KioskCalc.prototype.price1=40;
    }

}
let customer1=new KioskCalc("avocado",8)
console.log(customer1.getTotalCost());
 
// let getTotalCost=function (){
//     let result= customer1.quantityb*this.fruitsPricelist[customer1.fruitb]
//     console.log(result);
// }
// console.log(KioskCalc.getTotalCost());
// }
// let customer1={
//     fruitb:"orange",
//     quantityb:3,
//     pricee:function getTotalCost(){
//               let result= customer1.quantityb*this.fruitsPricelist[customer1.fruitb]
//               console.log(result);

//     }
// };
// console.log(customer1.pricee());

