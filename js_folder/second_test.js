//require(console.log)
const cars = ["audi", "bmw"]
cars.push("toyouta")
console.log(cars)

// operator
var a = 2
console.log(typeof(a)) // number

var name = "satish"
console.log(typeof(name)) // string

// exponenation
var x = 2;
var y= 3;
x **= y;
console.log(x) // 2^3

let xx = 16 + "Volvo";
console.log(xx)

console.log(typeof 0)              // Returns "number"
console.log(typeof 314)            // Returns "number"
console.log(typeof 3.14)           // Returns "number"
console.log(typeof (3))            // Returns "number"
console.log(typeof (3 + 4) )


// Any variable can be emptied, by setting the value to undefined. The type will also be undefined.

cars_1 = ["bmw"]
console.log("Cars_1 now : "+cars_1)

cars_1 = undefined;    // Value is undefined, type is undefined
console.log("assgining after undefined : "+cars_1)

// FUNCTIONS
function myFunction(a,b){
    console.log("Called myFunction")
    sum = a+b
    return sum
}

// calling function
sum = myFunction(2,3)
console.log(sum)

// object definition
cars_object = {company : "BMW", color:"Blue", Mileage:"50KM"}
console.log(cars_object)
console.log(cars_object.company) // access object properties
console.log(cars_object["color"]) // another way to access object properties

// defining method inside object
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
console.log(person.fullName())

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)

// STRING METHODS
slice_texxt = text.slice(3)
console.log(slice_texxt)
// substr
console.log(text.substr(2,10))

let firstName = "John";
let lastName = "Doe";

let text_11 = `Welcome ${firstName}, ${lastName}!`;
console.log(text_11)

// GLOBAL NUMBER METHODS
console.log("=================== NUMBER METHOD ============")
console.log(Number(true)); // 1
console.log(Number(false)); //0
console.log(Number("10")); // 10
console.log(Number("  10")); // 10
console.log(Number("10  ")); //10
console.log(Number(" 10  "));
console.log(Number("10.33")); // 10.33
console.log(Number("10,33")); // NaN
console.log(Number("10 33")); // NaN
console.log(Number("John")); //NaN

console.log("========== parseint method ========")
console.log(parseInt("-10")); // -10
console.log(parseInt("-10.33")); // -10
console.log(parseInt("10")); // 10
console.log(parseInt("10.33")); //10
console.log(parseInt("10 20 30"));// 10
console.log(parseInt("10 years"));//10
console.log(parseInt("years 10")); //NaN

console.log("========= parseFloat() ==========")
console.log(parseFloat("10"));
console.log(parseFloat("10.33"));
console.log(parseFloat("10 20 30"));
console.log(parseFloat("10 years"));
console.log(parseFloat("years 10"));

console.log("========= ARRAYS ==========")
const cars_arr = []
cars_arr[0] = "BMW";
cars_arr[1] = "skoda";
cars_arr[2] = "Honda";
console.log(cars_arr)

const cars_new_array = new Array("Saab", "Volvo", "BMW");
console.log(cars_new_array)
console.log(typeof(cars_new_array))

console.log("========= JS ARRAY METHODS ==========")
// toString() methods
console.log(cars_new_array.toString()) // Saab,Volvo,BMW
// join method
console.log(cars_new_array.join("*")) // Saab*Volvo*BMW
// pop
console.log(cars_new_array.pop()) // BMW
// push
console.log(cars_new_array.push("BMW")) // 3
//shifting
console.log(cars_new_array.shift()) // saab
// unshift
console.log(cars_new_array.unshift('maruti')) //3
// delete
delete cars_new_array[0];
console.log(cars_new_array) // [ <1 empty item>, 'Volvo', 'BMW' ]
//indexOf()
console.log("INDEX OF BMW : ",cars_new_array.indexOf('BMW'))
// concat
my_name = ['satish']
my_last_name = ['kumar', 'singh']
merged_array = my_name.concat(my_last_name)
console.log(merged_array) // [ 'satish', 'kumar', 'singh' ]
// splice
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits) // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]
// slice
const citrus = fruits.slice(1);
console.log(citrus) //['Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]]
// sorting
console.log(fruits.sort()) // [ 'Apple', 'Banana', 'Kiwi', 'Lemon', 'Mango', 'Orange' ]
// map()
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
console.log(numbers2)
function myFunction(value, index, array) {
  return value * 2;
}
// filter()
filtered_number = numbers1.filter(filter_function);
console.log(filtered_number) //[ 45, 16, 25 ]
function filter_function(value){
  return value > 10 // return only value which are greater than 18
}
// reduce
sum = numbers1.reduce(myFunction);
function myFunction(total, value, index, array) {
  return total + value;
}
console.log(sum) // 99
// every()
every_result = numbers1.every(every_function);
function every_function(value){
  return value > 3; // return if the value is greater than 10
}
console.log(every_result)
// Array.from()
console.log(Array.from("ABCDE")) // [ 'A', 'B', 'C', 'D', 'E' ]
// Array.keys()
const keys = cars_new_array.keys()
console.log(keys)   // Object [Array Iterator] {}
for (let x of keys){
  console.log(x)  // 0   1   2
}
console.log("========= JS DATES  ==========")
const d = new Date()
console.log(d) //2021-12-23T06:27:09.270Z
console.log("toUTCString() : "+d.toUTCString()) // Thu, 23 Dec 2021 06:27:09 GMT
console.log("toDateString(): ", d.toDateString()) // Thu Dec 23 2021
let msec = Date.parse("March 21, 2012");
console.log("MiliiSecods : "+msec) // 1332268200000
const millisec_to_date = new Date(msec);
console.log("miliseconds parsed to date : "+millisec_to_date)
// SET DATE METHODS
d.setFullYear(2020)
console.log("Setting year to 2020 : "+d) // Wed Dec 23 2020 12:22:45 GMT+0530 (India Standard Time)
d.setMonth(6)
console.log("Setting Month to 6: "+d)  //  Thu Jul 23 2020 12:23:47 GMT+0530 (India Standard Time)
d.setDate(15) 
console.log("Setting Date to 15: "+d) // Wed Jul 15 2020 12:23:47 GMT+0530 (India Standard Time)
// setDate() method can also be used to add days to a date:
d.setDate(d.getDate() + 50);
console.log("Adding 50 to days : "+d) // Thu Sep 03 2020 12:24:45 GMT+0530 (India Standard Time)
// comparing dates
let date_result = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  date_result = "Today is before January 14, 2100.";
} else {
  date_result = "Today is after January 14, 2100.";
}
console.log("Date Result is : "+date_result)
// BOOLEAN
console.log(Boolean(10>9))  // true
console.log("========= LOPING  ==========")
const person_loop = {name : "satish", title:"Kumar", lastName : "Singh"}
for (x in person_loop){
  console.log("Key Name : ", x)
  console.log("Key Values: ", person_loop[x])
}

const numbers_for_in = [45, 4, 9, 16, 25];

let txt_for_in = "";
for (let x in numbers_for_in) {
  txt_for_in += numbers_for_in[x];
}
console.log(txt_for_in)
// for of loop
for_of_text = "Javascript"
for (let x of for_of_text){
  console.log(x)
}
for(let x in person_loop){
  console.log(x)
}
console.log("========= SETS ==========")
// CREATE A SET
const a_set = new Set(["a", "b", "c"])
console.log("the set is : ", a_set)  // Set(3) { 'a', 'b', 'c' }
// add set
a_set.add('d')
console.log("The new set is : ", a_set) //  Set(4) { 'a', 'b', 'c', 'd' }
// values method
console.log(a_set.values())  // [Set Iterator] { 'a', 'b', 'c', 'd' }
console.log("========= MAP ==========")
// new map
const fruits_map = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(" MAP IS : ", fruits_map) // Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }
// add element using set()
fruits_map.set("guavaa", 100)
console.log(fruits_map) //Map(4) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200, 'guavaa' => 100 }
// get()
console.log(fruits_map.get("apples")) // 500
// size property
console.log("Size property : ", fruits_map.size)
// set
console.log(fruits_map.set("apples", 1000))
console.log("New fruits map is : ", fruits_map) // apple value is set to 100
// delete
console.log(fruits_map.delete("appless")) // returns true if deleted or false if not exists
console.log("========= type of operator ==========")
console.log(typeof "John" )                // Returns "string"
console.log(typeof 3.14  )                 // Returns "number"
console.log(typeof NaN    )                // Returns "number"
console.log(typeof false)               // Returns "boolean"
console.log(typeof [1,2,3,4])              // Returns "object"
console.log(typeof {name:'John', age:34})  // Returns "object"
console.log(typeof new Date())             // Returns "object"
console.log(typeof function () {})         // Returns "function"
console.log(typeof myCar)                  // Returns "undefined" *
console.log(typeof null)                   // Returns "object"
console.log("John".constructor)                // Returns function String()  {[native code]}
console.log((3.14).constructor)                // Returns function Number()  {[native code]}
console.log(false.constructor)                 // Returns) function Boolean() {[native code]}
console.log([1,2,3,4].constructor)        // Returns) function Array()   {[native code]}
console.log({name:')John))',age:34}.constructor)  // Returns) function Object()  {[native code]}
console.log(new Date().constructor)           // Returns function) Date()    {[native code]}
console.log(function () {}.constructor)        // Returns function Function)(){[native code

// this keyword
const person_this = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  },
  myFunction : function() {
    return this;
  }
};
console.log(person_this.fullName()) // John Doe
console.log(person_this.myFunction()) /* OP : {
  firstName: 'John',
  lastName: 'Doe',
  id: 5566,
  fullName: [Function: fullName],
  myFunction: [Function: myFunction]
}*/
console.log("========= ARROW FUNCTION  ==========")
// BEFORE ARROW FUNCTION
hello = function(){
    return "Hello WOrld"
}
// after arrow function
hello_arrow =  () => {
    return "Hello from arrow function"
}
console.log(hello_arrow())
console.log("========= js callbacks ==========")
function displayer(){
  console.log("DISPLAYER FUNCTION CALLED")
  console.log("THE SUM IS : "+sum)
}
function calculator(a, b, callbackFunction){
  console.log("CALCULATOR FUNCTION CALLED")
  sum = a + b;
  displayer(sum)
}
calculator(2,3, displayer)

/*console.log("=========  ==========")
console.log("=========  ==========")
console.log("=========  ==========")
console.log("=========  ==========")
console.log("=========  ==========")
console.log("=========  ==========")
*/