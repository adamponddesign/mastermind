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



  // ** fisher-Yates shuffle function
  function shuffle(array) {
    let i = array.length
    let j
    let temp

    while(--i > 0){
      j = Math.floor(Math.random() * (i+1))
      temp = array[j]
      array[j] = array[i]
      array[i] = temp
    }
    return array
  }

  // user input and game play

  form.addEventListener('submit', (e) => {                //add a 'submit' event listener to the userGuess form
    e.preventDefault()
    userGuess = [parseInt(userGuessOne.value), parseInt(userGuessTwo.value), parseInt(userGuessThree.value)]  // add each value to the userGuess array

    console.log('user guess ' + userGuess)                  // log userGuess.. which is now an array

    const colorResult = userGuess.map((element, index) => {     // .map move over each element and index in the userGuess array

      if (element === computerRandomCode[index]) {              // if current element equals computerRandomCode, (current index)
        return 'red'
      } else if (computerRandomCode.includes(element)) {        // if computerRandomCode includes the current element in any location
        return 'white'
      } else
        return 'Null'
    })


    console.log(colorResult)
    console.log('the shuffled array is ' + shuffle(colorResult))

  })                                                      // event listener closing tag

















})  //main DOM closing tag
