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
  console.log(total, value)
  return total + value;
}
console.log(sum) // 99



/*
console.log("=========  ==========")
console.log("=========  ==========")
console.log("=========  ==========")
console.log("=========  ==========")
console.log("=========  ==========")
console.log("=========  ==========")
console.log("=========  ==========")
console.log("=========  ==========")
console.log("=========  ==========")
console.log("=========  ==========")
console.log("=========  ==========")
console.log("=========  ==========")
*/