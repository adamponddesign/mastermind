document.addEventListener('DOMContentLoaded', () => {

  //  ** create variables
  //  - make an empty array for userGuess & computerRandomCode
  let userGuess = []
  let userGuessOne = document.querySelector('#userGuessOne')
  let userGuessTwo = document.querySelector('#userGuessTwo')
  let userGuessThree = document.querySelector('#userGuessThree')
  let computerRandomCode = []
  let counter = 0
  const form = document.querySelector('form')
  let input = document.querySelector('input')




  function getComputerRandomCodeFunction() {              // computer random Three digit number ***********

    while(counter < 3 ){                                  // while counter is less than three...
      const number = Math.floor(Math.random() * 3) + 1    //create a randow number between 1 and 3
      computerRandomCode.push(number)                     //  add the number to the computerRandomCode array..
      counter++                                           // increase counter by one at the end of the loop to move on to next number

    }
    console.log('computer random code ' + computerRandomCode)        // log computerRandomCode.. which is now an array

  }
  getComputerRandomCodeFunction()                         // call getComputerRandomCodeFunction
  // ********************************************



  // user input and result

  form.addEventListener('submit', (e) => {                //add a 'submit' event listener to the userGuess form
    e.preventDefault()
    userGuess = [parseInt(userGuessOne.value), parseInt(userGuessTwo.value), parseInt(userGuessThree.value)]  // add each value to the userGuess array

    console.log('user guess ' + userGuess)                  // log userGuess.. which is now an array


  })                                                      // event listener closing tag



















  /*
NOTES


** create DOM target areas



** create UserGuess code

    - get input from user
        - user guess 1  (choose a number between 1 and 3)   add to userGuess array
        - user guess 2  (choose a number between 1 and 3)   add to userGuess array
        - user guess 3  (choose a number between 1 and 3)   add to userGuess array

    - UserGuess should contain a 3 number array
    - console.log(userGuess)

** Game Logic

- compare the two arrays

    position one

  - if (userGuess[0] === computerRandomCode[0]) {                                                    // perfect match... position and number
  add class of red to one of the result area divs                                                    // add a red circle
  } else if (userGuess[0] === computerRandomCode[1] && userGuess[0] === computerRandomCode[2]) {     // match number but not position of both other options
  add class of white to TWO of the result area divs                                                  // add two whites
} else if (userGuess[0] === computerRandomCode[1] || userGuess[0] === computerRandomCode[2]) {       // match number but not position of one other options
    add class of white to ONE of the result area divs                                                // add one white
  } else {                                                                                           // no matches
    do nothing                                                                                       // do nothing
  }

    position two

    - if (userGuess[1] === computerRandomCode[1]) {                                                    // perfect match... position and number
    add class of red to one of the result area divs                                                    // add a red circle
  } else if (userGuess[1] === computerRandomCode[0] && userGuess[1] === computerRandomCode[2]) {     // match number but not position of both other options
    add class of white to TWO of the result area divs                                                  // add two whites
  } else if (userGuess[1] === computerRandomCode[0] || userGuess[1] === computerRandomCode[2]) {       // match number but not position of one other options
      add class of white to ONE of the result area divs                                                // add one white
    } else {                                                                                           // no matches
      do nothing                                                                                       // do nothing
    }

    position three

    - if (userGuess[2] === computerRandomCode[2]) {                                                    // perfect match... position and number
    add class of red to one of the result area divs                                                    // add a red circle
  } else if (userGuess[2] === computerRandomCode[0] && userGuess[2] === computerRandomCode[1]) {     // match number but not position of both other options
    add class of white to TWO of the result area divs                                                  // add two whites
  } else if (userGuess[2] === computerRandomCode[0] || userGuess[2] === computerRandomCode[1]) {       // match number but not position of one other options
      add class of white to ONE of the result area divs                                                // add one white
    } else {                                                                                           // no matches
      do nothing                                                                                       // do nothing
    }





*/










})  //main DOM closing tag
