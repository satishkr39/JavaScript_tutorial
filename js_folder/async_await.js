
const getData = async() => {
    var data = "Hello World";
    return data;
}
  
getData().then(data => console.log(data));

// SYNCHRONOUS VS ASYNCHRONOUS
// To test a synchronous system, write this code in JavaScript:

console.log(" I ");

console.log(" eat ");

console.log(" Ice Cream ");

// ASYNCHRONOUS CODE
console.log("===== ASYNCHRONOUS CODE ========")
console.log("I");
// This will be shown after 2 seconds
setTimeout(()=>{
  console.log("eat");
},2000)
console.log("Ice Cream")

/*                 async and await demo using ice-cream shop demo        
link : https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/
*/
console.log("====================== ice cream demo for await and async ======================")
// You can store the ingredients inside objects like this:
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 // Let's make our functions. We'll use arrow functions here:
//Now, let's establish a relationship between these two functions using a callback, like this:
// 1st Function

let order = (fruit_name, call_production) =>{

    setTimeout(function(){
  
      console.log(`${stocks.Fruits[fruit_name]} was selected`)
  
  // Order placed. Call production to start
     call_production();
    },2000)
  };
//Let's complete our ice cream production by nesting a function inside another function – this is also known as a callback, remember?

let production = () =>{

    setTimeout(()=>{
      console.log("production has started")
      setTimeout(()=>{
        console.log("The fruit has been chopped")
        setTimeout(()=>{
          console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
          setTimeout(()=>{
            console.log("start the machine")
            setTimeout(()=>{
              console.log(`Ice cream placed on ${stocks.holder[1]}`)
              setTimeout(()=>{
                console.log(`${stocks.toppings[0]} as toppings`)
                setTimeout(()=>{
                  console.log("serve Ice cream")
                },2000)
              },3000)
            },2000)
          },1000)
        },1000)
      },2000)
    },0000)
  
  };
  // Trigger 👇
  order(0, production);

  // the above code to deliver ice-cream involves lots of callback. in order to resolve those Promise was introduced
 // refer to async_await_using_promise.js