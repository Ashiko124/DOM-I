// function countdown() {
//     var seconds = 60;
//     function tick() {
//         var counter = document.getElementById("counter");
//         seconds--;
//         counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
//         if( seconds > 0 ) {
//             setTimeout(tick, 1000);
//         } else {
//             alert("Game over");
//         }
//     }
//     tick();
//// function countdown () {
    //var seconds = document.getElementById('secondOnes');
    // seconds.innerHTML = "0";



// let digits 


// function theTimer () {
//     countUp = setInterval (func, 0){
        
//     }
// }

// countdown();

  //setInterval(function, 1000)

let variable = setInterval(selector, 1000);

function selector(num) {  
    let count = document.getElementById('secondOnes').innerHTML = "0";
    // num++;
    count = parseInt(num, 10);
    document.getElementById("secondOnes").innerHTML = count;
};

for (i = 0; i < 10; i++) {
    selector(i);
}





// for(i = counter; i < 10; i++) {
//     counter = i;
// }

//console.log(count);

// pseudo code 

// 1. select the counter elements 
// 2. set a count variable to zero
// 3. write a function that lets the counter count up to 10 seconds, 
// 4. turn all digits and colon red at 10 seconds and
// 5. stop (clearInterval ?)

// Hints // 

// SET INTERVAL //

// setInterval(function, 0)
// same as setTimeout(), but repeats the execution of the function continuously.

// CLEAR INTERVAL //

// The window.clearInterval() method can be written without the window prefix.
// The clearInterval() method uses the variable returned from setInterval():
// myVar = setInterval(function, 10000);
// clearInterval(myVar);