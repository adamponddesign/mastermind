document.addEventListener('DOMContentLoaded', () => {

  let userGuess = []
  const computerRandomCode = []
  let counter = 0
  const userGuessOne = document.getElementById('userGuessOne')
  const userGuessTwo = document.getElementById('userGuessTwo')
  const userGuessThree = document.getElementById('userGuessThree')
  const userGuessFour = document.getElementById('userGuessFour')


  const allSpaces = document.querySelectorAll('.gameBoard div')     // target all the div within the gameBoard container div
  const userSelectButtonsDOM = document.querySelectorAll('.userSelectButtons div')


  const allSubmitBoxes = document.querySelectorAll('.submitGuess')  // all divs with the class of .submitGuess
  // let submitIndex = 0
  // const


  const resultAreaOneDOM = document.querySelector('#resultAreaOne')
  const resultAreaTwoDOM = document.querySelector('#resultAreaTwo')
  const resultAreaThreeDOM = document.querySelector('#resultAreaThree')
  const resultAreaFourDOM = document.querySelector('#resultAreaFour')
  const winner = document.querySelector('#winner')




  let currentSpace = allSpaces[0]

  // HIGHLIGHT CURRENT ACTIVE ROW **********************************************************************************
  let rowIndex = 0                                  // create a variable for where the row index will start..e.g. the first row
  const rows = document.querySelectorAll('.row')    // grab all rows and save to variable
  let currentRow = rows[rowIndex]                   // new variable --- of all the rows saved in 'rows', what is the index of the current row
  currentRow.classList.add('activeRow')                // to that 'currentRow' add a class of active


  // listener on every space... only to work if the containing parent has the class of activeRow
  allSpaces.forEach(element => {                      // for each space div within the 'allspaces' array
    element.addEventListener('click', (e) => {        //  add a click eventlistener
      if (!e.target.parentNode.classList.contains('activeRow')) {      // if the parent of the element clicked DOESN'T have the class of active..
        return false                                                // do nothing
      } else {
        currentSpace = e.target                                   // else return the info from the button clicked -- save it to currentSpace variable
        currentSpace.classList.add('activeCircle')                      // add a class of 'active' to the 'currentSpace' identified above
      }
    })
  })


  // THIS GETS THE CLASS NAME FROM THE USER SELECT BUTTON CLICKED, AND SETS IT TO THE TARGET ELEMENT SET ABOVE (currentSpace's class name)
  userSelectButtonsDOM.forEach(element => {                 // for each element in the userSelectButtons array (4 empty divs)
    element.addEventListener('click', (e) => {                //add a 'click' event to each div
      const userPick = e.target.className                     // add the classname of the button clicked to the variable userPickOne
      currentSpace.className = userPick                     // add the button clicked's classname (userPick) to the currentSpace's classname
    })
  })











  // computer random Four digit number *************************************************************
  function getComputerRandomCodeFunction() {
    const choices = ['red','yellow','blue','black']
    while(counter < 4 ){                                  // while counter is less than four...
      const number = Math.floor(Math.random() * 4)        //create a randow number between 1 and 4
      computerRandomCode.push(choices[number])            //  add the number to the computerRandomCode array..
      counter++                                           // increase counter by one at the end of the loop to move on to next number
    }
  }
  getComputerRandomCodeFunction()
  console.log('computer random code ' + computerRandomCode)    // call getComputerRandomCodeFunction
  // ************************************************************************************************




















  // eventlistener on submitGuess to
  //        add all class names to userGuess array
  //        determine color result
  //        shuffle the color result


  allSubmitBoxes.forEach(element => {

    element.addEventListener('click', (e) => {
      if (!e.target.parentNode.classList.contains('activeRow')) {      // if the parent of the element clicked DOESN'T have the class of active..
        return false                                                // do nothing
      } else {
        userGuess = [userGuessOne.className,userGuessTwo.className,userGuessThree.className,userGuessFour.className]   // add all class names to userGuess array
        console.log('the user guess is ' + userGuess)


        //       determine color result
        const colorResult = userGuess.map((element, i) => {     // .map move over each element and index in the userGuess array
          if (element === computerRandomCode[i]) {              // if current element equals computerRandomCode, (current index)
            return 'green'
          } else if (computerRandomCode.includes(element)) {        // if computerRandomCode includes the current element in any location
            return 'orange'
          } else
            return ''
        })
        console.log('the result is ' + colorResult)
        //       shuffle the color result
        const shuffledResult = shuffle(colorResult)
        console.log('the shuffled result is ' + shuffle(colorResult))

        resultAreaOneDOM.innerText = shuffledResult[0]
        resultAreaTwoDOM.innerText = shuffledResult[1]
        resultAreaThreeDOM.innerText = shuffledResult[2]
        resultAreaFourDOM.innerText = shuffledResult[3]

        if (resultAreaOneDOM === 'green' && resultAreaTwoDOM === 'green' && resultAreaThreeDOM === 'green' && resultAreaFourDOM === 'green') {
          winner.className = ''
        }

        // ***************    change color via class list change based on inner text
        // Result box one
        if (resultAreaOneDOM.innerText === 'green') {
          resultAreaOneDOM.classList.add('green')
          resultAreaOneDOM.innerText = ''
        } else if (resultAreaOneDOM.innerText === 'orange') {
          resultAreaOneDOM.classList.add('orange')
          resultAreaOneDOM.innerText = ''
        }

        // Result box two
        if (resultAreaTwoDOM.innerText === 'green') {
          resultAreaTwoDOM.classList.add('green')
          resultAreaTwoDOM.innerText = ''
        } else if (resultAreaTwoDOM.innerText === 'orange') {
          resultAreaTwoDOM.classList.add('orange')
          resultAreaTwoDOM.innerText = ''
        }

        // Result box three
        if (resultAreaThreeDOM.innerText === 'green') {
          resultAreaThreeDOM.classList.add('green')
          resultAreaThreeDOM.innerText = ''
        } else if (resultAreaThreeDOM.innerText === 'orange') {
          resultAreaThreeDOM.classList.add('orange')
          resultAreaThreeDOM.innerText = ''
        }

        // Result box four
        if (resultAreaFourDOM.innerText === 'green') {
          resultAreaFourDOM.classList.add('green')
          resultAreaFourDOM.innerText = ''
        } else if (resultAreaFourDOM.innerText === 'orange') {
          resultAreaFourDOM.classList.add('orange')
          resultAreaFourDOM.innerText = ''
        }


        // winner box when 4 reds
        if (resultAreaOneDOM.classList.contains('green') &&
        resultAreaTwoDOM.classList.contains('green') &&
        resultAreaThreeDOM.classList.contains('green') &&
        resultAreaFourDOM.classList.contains('green')
        ) {
          winner.classList.remove('hidden')
        } else {
          currentRow.classList.remove('activeRow')
          rowIndex++
          currentRow = rows[rowIndex]
          currentRow.classList.add('activeRow')
        }

      }
    })
  })













  // ********** fisher-Yates shuffle function
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
  // *******************************************








})  //main DOM closing tag
