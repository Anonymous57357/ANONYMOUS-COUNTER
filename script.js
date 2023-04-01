//document.getElementById("count").innerText = 23
// console.log basic out in js

// let count = 47 + 35;
// console.log(count);

// let firstBatch = 5;
// let secoundBatch = 8;
// let count = (firstBatch + secoundBatch);
// console.log(firstBatch + secoundBatch);


// let MyAge = 22;
// console.log(MyAge);



// 1. Create a variable, myAge, and set it value to your age
// 2. Log the myAge variable to the console
// 3. Log myDogAge to the console

//2. MATHEMATICAL OPERATION

// let MyAge = 22;
// let humanDogRatio = 7;
// let myDogAge = (MyAge * humanDogRatio);
// console.log(myDogAge);  



// 3.REASSIGNMENT

// let addittion = 5; 
// addittion = addittion + 7; 
// addittion = addittion + 7; 
// addittion = addittion + 7; 
// addittion = addittion + 7; 

// addittion = addittion - 26; 

// console.log(addittion);

//4. Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

// let bonusPoints = 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);   

// 5.intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count `

// (onClick) its a java script function

function increment () {
    console.log("The Button Is Clicked");   
}


// 7.Setting up the the race 🏎 🏎 🏎
// function coundown () {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// coundown();
// coundown();


// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎

// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

// function helloBuddy () {
//     console.log(42);    
// }



// 12.Create a function that logs out the sum of all the lap times

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function lapTime() {
//     let totalLapTime = lap1 + lap2 + lap3;
//     console.log(totalLapTime);
// }
// lapTime();


// 13.Create a function that increments the lapsCompleted variable with one
// Run it three times

// THATS MY METHOD
// let lapsCompleted = 0

// function incrementsLaps () {
//     let lapsCompleted = 1 * 3;
//     console.log( lapsCompleted)
// }

// incrementsLaps ();
// incrementsLaps ();
// incrementsLaps ();

// ITS SCRIMBA(tutor) METHOD

// let lapsCompleted = 0

// function incrementslaps () {
//     lapsCompleted = lapsCompleted + 1;
//     console.log(lapsCompleted)
// }

// incrementslaps();
// incrementslaps();
// incrementslaps();


//14 document.getElementById("count").innerText = 5

//15.change the count-el in the HTML to reflect the new count


// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count


//15.camelcase
// let countEl = document.getElementById("count-el");
// console.log(countEl);

// let count = 1 // the count its begins with 0

// function increment () {
//     // count = count + 1 ;
//     // another shortcut method
//     countEl.innerText = count
//     count += 1;
// }

// 16.DOM (document object model) ---------> used to modify the website
// dOcument --- is getElementByiId     
// OBJECT ----- ?
// MODEL ------?   



























































// 17.
let  EntriesEl = document.getElementById("entries-el"); // entries
let HEADER = document.getElementById("header"); // HEADING id (red button top counter)
// console.log(HEADER);
let count = 0 // this for "incremment button" and couter number
console.log (EntriesEl);  

// increment button
function alexa () { // red (increment button)
    // 25.use the plus equal for count
    count += 1 ;
    HEADER.textContent = count;
    // EntriesEl.textContent = Countstr;
    console.log(count);
}

// 1. Grab the save-el paragrah and store it in a variable called saveEl

function save() { // green (save button)
    let Countstr = count + " - ";
   // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    EntriesEl.textContent += Countstr;
    HEADER.textContent = 0;
    count = 0;
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count);
} 


// 18.
// 1. Create a function, save(), which logs out the count when it's called

// 26.CREATE A SAVE FEATURE




// 27. Debugging online
// using "textContent" instead of "innerText" for spacing


// 28. SET THE COUNT TO ZERO





    


















































// save(); 

// 19.what is string 

// 20 WRITE YOUR FIRST STRING VARIABLE
// Create a variable, message, that stores the string: "You have tree new notifications" 

// let username = " per"; 

// let message = " You have tree new notifications"; 
// answer = message + "," + username + "!"; 
// console.log(answer); 

// console.log(username);

// 21.LOG A GREETING TO THE CONSOLE

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// let name = "per mukesh";

// let greetings = "Hi, my name is "

// let myGreetings = greetings + name;
// myGreetings = greetings + name + " am from india";
// console.log(myGreetings);


// 22.STRINGS VS NUMBERS\

// NUMBER
// let name = "4";

// let greetings = 20;

// let myGreetings = greetings + name;
// myGreetings = greetings + name + "";
// console.log(myGreetings);

// STRING
//     let name = 4;

//     let greetings = 20;

//     let myGreetings = greetings + name;
//     myGreetings = greetings + name + "";
// console.log(myGreetings);

// console.log(4 + 5) // 9
// console.log("2" + "4") // 24
// console.log("5" + 1) // 51
// console.log(100 + "100") // 100100


// 23.render a welcome a message


// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

// let hellobuddy = document.getElementById("welcome-el");

// let Name = "per mukesh";
// let Greetings = " welcome back  " ;


//     hellobuddy.innerText = Name + Greetings;

   



    // let WelcomeEl = document.getElementById("welcome-el");

    // let Name = "Mr. mukesh ";
    // let Greetings = " welcome back";

    // WelcomeEl.innerText = Name + Greetings;


    //24. IMPROVE THE MESSAGE WITH STRING CONCANETATION

    // Add an emoji to the end!       
   // WRITE YOUR CODE BELOW HERE
   // HINT: count = count + 
//    WelcomeEl.inerText = WelcomeEl.innerText + "👋"
//    SHORTFORM METHOD
//    WelcomeEl.innerText += " 👋"
   





    






    
