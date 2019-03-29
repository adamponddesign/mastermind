document.addEventListener('DOMContentLoaded', () => {

  console.log('js loaded')








})



/*
NOTES

** create variables
  - make an empty array for
  const userGuess = []
  - make an empty array for ComputerRandomCode
  const ComputerRandomCode = []



** create DOM target areas




** create computerRandomCode

    - perform a (for) loop 3 times
      - on each pass..
      - pick a random number between 1 and 3
      - add the number to the array computerRandomCode

    - computerRandomCode should contain a 3 number array
    - console.log(computerRandomCode)


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
