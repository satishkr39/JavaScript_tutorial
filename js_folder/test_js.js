const a = "sk";
console.log(a)


var result = 2>3 ? " 2 Greater" : "3 Greater"
console.log(result)

console.log(typeof null)

console.log(function () {}.constructor)        // Returns function Function)()

// string to number
var pi = "3.14"
console.log(typeof pi)
var pi_number = Number(pi)
console.log(typeof  pi_number)
console.log(Number("99 88"))
console.log(String(100 + 23))

const person = {
    name : "satish",
    roll : "66",
    getRoll : function(value){
        return this.roll;
    }
}

delete person.roll

console.log(person)

// slice string
var myName = "satish kumar singh"
console.log(myName.slice(0,6))
console.log(myName.substring(3))
console.log(myName.replace('s', 't'))
console.log(myName.toUpperCase())
// split()
console.log(myName.split(" "))  // [ 'satish', 'kumar', 'singh' ]

console.log(myName.indexOf('t'))  //2
console.log(myName.lastIndexOf('s'))  //13
console.log(myName.startsWith('s')) // true
console.log(myName.startsWith('S')) // false


var welcome = "welcome ${myName}"
console.log(welcome)

var extraSmallNumber = 0.0000234
console.log(extraSmallNumber)
console.log(-2/0)

const points = new Array(40)
console.log(points)

const cars = ['bmw', 'toyota', 'suzuki']
console.log(cars.join(','))
console.log(cars.shift())

const numbers = [1,22,2,56,-90,100]
numbers.sort() // sorting number
console.log(numbers, numbers[0], numbers[numbers.length-1])

// map funciton 
const numbers1 = numbers.map(myFunctionMap);
function myFunctionMap(value, index, array){
    console.log(value, index, array)
    return value*2
}
console.log(numbers1)

const d = new Date('11/02/2021')
console.log(d)