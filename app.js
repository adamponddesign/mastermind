document.addEventListener('DOMContentLoaded', () => {

  //  ** variables
  let userGuess = []
  const computerRandomCode = []
  let counter = 0
  const userGuessOne = document.querySelector('#userGuessOne')
  const userGuessTwo = document.querySelector('#userGuessTwo')
  const userGuessThree = document.querySelector('#userGuessThree')
  const form = document.querySelector('form')



  // let resultsArray = []
  // let allresultsSquaresDom = document.querySelectorAll('.resultsContainer > div')
  // let whiteCounter = 0
  // let redCounter = 0
  // let input = document.querySelector('input')
  // let resultAreaOneDOM = document.querySelector('#resultAreaOne')
  // let resultAreaTwoDOM = document.querySelector('#resultAreaTwo')
  // let resultAreaThreeDOM = document.querySelector('#resultAreaThree')



  function getComputerRandomCodeFunction() {              // computer random Three digit number ***********
    while(counter < 3 ){                                  // while counter is less than three...
      const number = Math.floor(Math.random() * 3) + 1    //create a randow number between 1 and 3
      computerRandomCode.push(number)                     //  add the number to the computerRandomCode array..
      counter++                                           // increase counter by one at the end of the loop to move on to next number

    }
    console.log('computer random code ' + computerRandomCode)        // log computerRandomCode.. which is now an array

  }
  getComputerRandomCodeFunction()                         // call getComputerRandomCodeFunction
  // *******************************************





  // user input and game play

  form.addEventListener('submit', (e) => {                //add a 'submit' event listener to the userGuess form
    e.preventDefault()
    userGuess = [parseInt(userGuessOne.value), parseInt(userGuessTwo.value), parseInt(userGuessThree.value)]  // add each value to the userGuess array

    console.log('user guess ' + userGuess)                  // log userGuess.. which is now an array

    const colorResult = userGuess.map((element, index) => {

      if (element === computerRandomCode[index]) {
        return 'red'
      } else if (computerRandomCode.includes(element)) {
        return 'white'
      } else
        return 'Null'
    })

    console.log(colorResult)

  })                                                      // event listener closing tag

















})  //main DOM closing tag
