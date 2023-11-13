// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html



let number1 = document.querySelector("#number1")
let number2 = document.querySelector("#number2")
let num1,num2;


toGetRandomNumber(); // to call the function
function toGetRandomNumber(){
    num1 = Math.ceil(Math.random() * 100);
    number1.innerHTML = num1;

    num2 = Math.ceil(Math.random() * 100);
    number2.innerHTML = num2;

}

// Iteration 3: Creating variables required to make the game functional

let score = 0;

let plus = document.querySelector("#plus")
let minus = document.querySelector("#minus")
let mul = document.querySelector("#mul")
let divide = document.querySelector("#divide")
let modulus = document.querySelector("#modulus")

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

let number3 = document.querySelector("#number3")
let num3 = 0;

// Iteration 5: Creating a randomise function to make the game functional

randomise()
function randomise(){
    let value = Math.ceil(Math.random() * 5)                           //this changes the value randomly


    switch(value){
        case(0):
        randomise();
        
        case(1):
        num3 = num1 + num2;
        break;
        
        case(2):
        num3 = num1 - num2;
        break;
        
        case(3):
        num3 = num1 * num2;
        break;
        
        case(4):
        num3 = (num1 / num2).toPrecision(1);
        break;
    
        case(5):
        num3 = num1 % num2;
        break;
    }
    number3.innerHTML = num3;                                       //the number is changed now using innerHTML
}

// Iteration 6: Making the Operators (button) functional


plus.addEventListener("click", () =>{
    if(num3 == num1 + num2){
        score++;
        resettimer(timerun);
        toGetRandomNumber();
        randomise();
    }
    else{
        location.href = "./gameover.html";
    }

})

minus.addEventListener("click", () =>{
    if(num3 == num1 - num2){
        score++;
        resettimer(timerun);
        toGetRandomNumber();
        randomise();
    }
    else{
        location.href = "./gameover.html";
    }
})

mul.addEventListener("click", () =>{
    if(num3 == num1 * num2){
        score++;
        resettimer(timerun);
        toGetRandomNumber();
        randomise();
    }
    else{
        location.href = "./gameover.html";
    }
})

divide.addEventListener("click", () =>{
    if(num3 == num1 / num2){
        score++;
        resettimer(timerun);
        toGetRandomNumber();
        randomise();
    }
    else{
        location.href = "./gameover.html";
    }
})

modulus.addEventListener("click", () =>{
    if(num3 == num1 % num2){                                  //if this condition is satisfied
        score++;                                              // score is incremented
        resettimer(timerun);                                  // the timer is reset
        toGetRandomNumber();                                  // the random number functio is invoked again to give new random numbers
        randomise();                                          // and the radomise funtion is invoked which helps in changing the value of number 3
    }
    else{
        location.href = "./gameover.html";                   // else the game goes to gameover page
    }
})
    
// Iteration 7: Making Timer functional


let timer = document.querySelector("#timer")
let time = 20;
let timerun; // this is for how the time is to run

function toRunTimer(){
    timer.innerHTML = time;
    timerun = setInterval(function ()
    {
        time--;
        if(time == 0)
        {
            location.href = "./gameover.html"
        }
        timer.innerHTML = time;
    },1000)
    localStorage.setItem("score", score)                        // the score here is store din the local storage so that it can be retrieved 
}                                                               // in the page where the score is displayed   

function resettimer(timetracking){
    clearInterval(timetracking);
    time = 20
    toRunTimer();
}

// this timetracking here is parameter we added while creating a function, which tell the resettimer function what it needs to reset, when we call the function at the time of clicking


toRunTimer(); // calling the timer's function to make it work

