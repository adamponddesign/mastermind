document.addEventListener('DOMContentLoaded', () => {

  let userGuess = []
  const computerRandomCode = []
  let counter = 0
  const userGuessOne = document.getElementById('userGuessOne')
  const userGuessTwo = document.getElementById('userGuessTwo')
  const userGuessThree = document.getElementById('userGuessThree')
  const userGuessFour = document.getElementById('userGuessFour')
  const userSelectButtonsDOM = document.querySelector('.userSelectButtons')
  const userReceiveDOM = document.querySelector('.userReceive') // array of 4 divs
  const user = document.querySelector('.user')
  const submitGuess = document.querySelector('.submitGuess')



  // const form = document.querySelector('form')
  const resultAreaOneDOM = document.querySelector('#resultAreaOne')
  const resultAreaTwoDOM = document.querySelector('#resultAreaTwo')
  const resultAreaThreeDOM = document.querySelector('#resultAreaThree')
  const resultAreaFourDOM = document.querySelector('#resultAreaFour')




  function getComputerRandomCodeFunction() {              // computer random Three digit number ***********
    const choices = ['red','yellow','blue','black']
    while(counter < 4 ){                                  // while counter is less than three...
      const number = Math.floor(Math.random() * 4)    //create a randow number between 1 and 3
      computerRandomCode.push(choices[number])                     //  add the number to the computerRandomCode array..
      counter++                                           // increase counter by one at the end of the loop to move on to next number
    }
  }
  getComputerRandomCodeFunction()

  console.log('computer random code ' + computerRandomCode)                      // call getComputerRandomCodeFunction



  //****************************************************************************************************************

  // addEventListener syntax -----   document.addEventListener(event, function, useCapture)

  userSelectButtonsDOM.addEventListener('click', (e) => {                //add a 'click' event listener to the userSelectButtonsDOM
    const userPickOne = e.target.className
    userGuessOne.className = userPickOne

    // const userPickTwo = e.target.className
    // userGuessTwo.className = userPickTwo
    //
    // const userPickThree = e.target.className
    // userGuessThree.className = userPickThree
    //
    // const userPickFour = e.target.className
    // userGuessFour.className = userPickFour

  })








  // event listener to remove the class of the userGuess when clicked -- should work for all four buttons
  userReceiveDOM.addEventListener('click', () => {
    user.className = ''
  })






  // eventlistener on submitGuess to add all class names to userGuess array
  submitGuess.addEventListener('click', () => {
    userGuess = [userGuessOne.className,userGuessTwo.className,userGuessThree.className,userGuessFour.className]
    console.log('the user guess is ' + userGuess)



    const colorResult = userGuess.map((element, i) => {     // .map move over each element and index in the userGuess array

      if (element === computerRandomCode[i]) {              // if current element equals computerRandomCode, (current index)
        return 'red'
      } else if (computerRandomCode.includes(element)) {        // if computerRandomCode includes the current element in any location
        return 'white'
      } else
        return 'nope'
    })

    console.log('the result is ' + colorResult)













  })











































  function shuffle(array) {    // ** fisher-Yates shuffle function
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





  // // USER INPUT / RESULT / RESULT SHUFFLE  *********************************************************************
  //
  // form.addEventListener('submit', (e) => {                //add a 'submit' event listener to the userGuess form
  //   e.preventDefault()
  //   userGuess = [parseInt(userGuessOne.value), parseInt(userGuessTwo.value), parseInt(userGuessThree.value)]  // add each value to the userGuess array
  //
  //   console.log('user guess ' + userGuess)                  // log userGuess.. which is now an array
  //
  //   const colorResult = userGuess.map((element, index) => {     // .map move over each element and index in the userGuess array
  //
  //     if (element === computerRandomCode[index]) {              // if current element equals computerRandomCode, (current index)
  //       return 'red'
  //     } else if (computerRandomCode.includes(element)) {        // if computerRandomCode includes the current element in any location
  //       return 'white'
  //     } else
  //       return 'nope'
  //   })
  //
  //   console.log('the result is ' + colorResult)
  //   console.log('the shuffled result is ' + shuffle(colorResult))
  //
  //   const shuffledResult = shuffle(colorResult)
  //
  //   resultAreaOneDOM.innerText = shuffledResult[0]
  //   resultAreaTwoDOM.innerText = shuffledResult[1]
  //   resultAreaThreeDOM.innerText = shuffledResult[2]
  //
  //
  //   // ***************    change color via class list change based on inner text
  //   // Result box one
  //   if (resultAreaOneDOM.innerText === 'red') {
  //     resultAreaOneDOM.classList.add('red')
  //   } else if (resultAreaOneDOM.innerText === 'white') {
  //     resultAreaOneDOM.classList.add('white')
  //   }
  //
  //   // Result box two
  //   if (resultAreaTwoDOM.innerText === 'red') {
  //     resultAreaTwoDOM.classList.add('red')
  //   } else if (resultAreaTwoDOM.innerText === 'white') {
  //     resultAreaTwoDOM.classList.add('white')
  //   }
  //
  //   // Result box three
  //   if (resultAreaThreeDOM.innerText === 'red') {
  //     resultAreaThreeDOM.classList.add('red')
  //   } else if (resultAreaThreeDOM.innerText === 'white') {
  //     resultAreaThreeDOM.classList.add('white')
  //   }
  //
  //
  // })                                                      // event listener closing tag
  //
















})  //main DOM closing tag
