//----------------------------------------------------------------------------------------------------------//
                                //Questions 1

function sort (num1, num2, num3){
if (num1 >= num2 && num1 >= num3) {
    if (num2 >= num3) {
        alert(num1 + ', ' + num2 + ', ' + num3);
    } else {
        alert(num1 + ', ' + num3 + ', ' + num2);
    }
} else if (num2 >= num1 && num2 >= num3) {
    if (num1 >= num3) {
        alert(num2 + ', ' + num1 + ', ' + num3);
    } else {
        alert(num2 + ', ' + num3 + ', ' + num1);
    }
} else {
    if (num1 >= num2) {
        alert(num3 + ', ' + num1 + ', ' + num2);
    } else {
        alert(num3 + ', ' + num2 + ', ' + num1);
    }
}
}
//----------------------------------------------------------------------------------------------------------//
                                    //Question 2

function irrt (){
    for (i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
    
}

//----------------------------------------------------------------------------------------------------------//
                                  //Question 3

function sum (){
    sum = 0;

    for (i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    console.log("The sum is " + sum);

}
//----------------------------------------------------------------------------------------------------------//
                                    //Question 4

function playGuessingGame() {
    attempts = 0;
    const maxAttempts = 3;
    const randomNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    userWantsToContinue = true;

    while (attempts < maxAttempts && userWantsToContinue) {
        const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));
        
        if (userGuess === randomNumber) {
            alert("Good Work! You guessed it right.");
            return; // End the game as the user guessed correctly
        } else {
            attempts++;
            if (attempts < maxAttempts) {
                userWantsToContinue = confirm("Wrong guess! Want to try again?");
            }
        }
    }

    if (attempts >= maxAttempts) {
        alert("Game Over! The correct number was " + randomNumber + ".");
    }
}

//----------------------------------------------------------------------------------------------------------//
                                 //Question 5


//----------------------------------------------------------------------------------------------------------//
//main part
//sort(3,-7,2)
//irrt()
//sum()
playGuessingGame();

