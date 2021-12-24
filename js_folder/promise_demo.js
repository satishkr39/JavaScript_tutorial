// syntax of promise
let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
); 
    
// working demo
// defining a promise obj
// LINK : https://www.youtube.com/watch?v=2IPw-mWe10U
// FLOW OF PROMISE
/*
1. A NEW PROMISE OBJECT IS CREATED USING new Promise(function(resovle, reject)) constructor
2. the resolve and reject are callback methods, the method that will be called on success and failure
3. when success occur, resolve is called -- the resolve will then look for promise object then part and it will 
    call the first method
4. when error/reject occur, reject is called -- the reject will look for 2nd method in promise object and it will
   call the second method
5. below ex when x = 0 then resolve() is called which calls the myDisplayer() with OK value
6. when x != 0 then reject() is called which calls the myDisplayer() with Not Okay! value.
*/
let my_promise = new Promise(function(resolve, reject){
    let x = 10;
    if (x == 0){
        resolve("OK")
    }
    else{
        reject("Not Okay!")
    }
});
my_promise.then(
    function(value){myDisplayer(value);},
    function(error){myDisplayer(error);}
);
function myDisplayer(value){
    console.log("My Displayer Called")
    console.log(value)
}