document.addEventListener('DOMContentLoaded', () => {

  let userGuess = []
  let computerRandomCode = []
  let counter = 0

  const allSpaces = document.querySelectorAll('.gameBoard div div')     // target all the div within the gameBoard container div
  const userSelectButtonsDOM = document.querySelectorAll('.userSelectButtons div')

  const allSubmitBoxes = document.querySelectorAll('.submitGuess')  // all divs with the class of .submitGuess
  const winner = document.querySelector('#winner')
  const loser = document.querySelector('#loser')

  let currentSpace = allSpaces[0]

  const allResultsAreas = document.querySelectorAll('.resultsContainer')

  const playAgainButtons = document.querySelectorAll('.playAgainButton')

  // HIGHLIGHT CURRENT ACTIVE ROW
  let rowIndex = 0                                  // create a variable for where the row index will start..e.g. the first row
  const rows = document.querySelectorAll('.row')    // grab all rows and save to variable
  let currentRow = rows[rowIndex]                   // new variable --- of all the rows saved in 'rows', what is the index of the current row
  currentRow.classList.add('activeRow')                // to that 'currentRow' add a class of active
  let currentResultsArea = allResultsAreas[rowIndex]

  const audio = document.querySelectorAll('audio')



  // const allSpacesArray = Array.from(allSpaces)
  //
  // const row1 = allSpacesArray.slice(0, 4)
  // const row2 = allSpacesArray.slice(10, 14)
  // const row3 = allSpacesArray.slice(20, 24)
  // const row4 = allSpacesArray.slice(30, 34)
  // const row5 = allSpacesArray.slice(40, 44)
  // const row6 = allSpacesArray.slice(50, 54)
  // const row7 = allSpacesArray.slice(60, 64)
  // const row8 = allSpacesArray.slice(70, 74)
  // const row9 = allSpacesArray.slice(80, 84)
  // const row10 = allSpacesArray.slice(90, 94)

  const allSpacesBoard = document.querySelectorAll('.space')
  allSpacesBoard[0].classList.add('activeCircle')



  // FUNCTIONS *******************************************************************
  function shuffle(array) {  // fisher-Yates shuffle function
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

  function getComputerRandomCodeFunction() {   // computer random Four digit number *******************************
    const choices = ['red','yellow','blue','black']
    while(counter < 4 ){                                  // while counter is less than four...
      const number = Math.floor(Math.random() * 4)        //create a randow number between 1 and 4
      computerRandomCode.push(choices[number])            //  add the number to the computerRandomCode array..
      counter++                                           // increase counter by one at the end of the loop to move on to next number
    }
  }
  getComputerRandomCodeFunction()
  console.log('computer random code ' + computerRandomCode)    // call getComputerRandomCodeFunction





  // EVENT LISTENERS *************************************************

  // listener on every space... only to work if the containing parent has the class of activeRow
  allSpacesBoard.forEach(element => {                      // for each space div within the 'allspaces' array
    element.addEventListener('click', (e) => {        //  add a click eventlistener
      if (!e.target.parentNode.classList.contains('activeRow')) {      // if the parent of the element clicked DOESN'T have the class of active..
        return false                                                // do nothing
      } else {
        currentSpace = e.target
        const allSpaces = currentSpace.parentNode.querySelectorAll('.space')      // else return the info from the button clicked -- save it to currentSpace variable
        allSpaces.forEach(space => space.classList.remove('activeCircle'))
        currentSpace.classList.add('activeCircle')                      // add a class of 'active' to the 'currentSpace' identified above
      }
    })
  })


  // THIS GETS THE CLASS NAME FROM THE USER SELECT BUTTON CLICKED, AND SETS IT TO THE TARGET ELEMENT SET ABOVE (currentSpace's class name)
  userSelectButtonsDOM.forEach(element => {                 // for each element in the userSelectButtons array (4 empty divs)
    element.addEventListener('click', (e) => {                //add a 'click' event to each div
      const userPick = e.target.classList                     // add the classname of the button clicked to the variable userPickOne
      currentSpace.classList = userPick                   // add the button clicked's classname (userPick) to the currentSpace's classname

    })
  })




  allSubmitBoxes.forEach(element => {         // on submit
    element.addEventListener('click', (e) => {
      if (!e.target.parentNode.classList.contains('activeRow')) {      // if the parent of the element clicked DOESN'T have the class of active..
        return false                                                // do nothing
      } else {                            // if the row is active...


        const userGuessArray = Array.from(currentRow.children)

        userGuess = [   // add all class names to userGuess array
          userGuessArray[0].className,
          userGuessArray[1].className,
          userGuessArray[2].className,
          userGuessArray[3].className
        ]

        console.log('user guess is ' + userGuess)

        //       determine color result
        const colorResult = userGuess.map((element, i) => {     // .map move over each element and index in the userGuess array
          if (element === computerRandomCode[i]) {              // if current element equals computerRandomCode, (current index)
            return 'green'
          } else if (computerRandomCode.includes(element)) {        // if computerRandomCode includes the current element in any location
            return 'orange'
          } else
            return ''
        })

        const shuffledResult = shuffle(colorResult)

        // console.log('the result is ' + colorResult)     // result
        console.log('the shuffled result is ' + shuffledResult)   // shuffle the result



        // send the shuffledResult to the currentResultsArea
        const results = Array.from(currentResultsArea.children)   // make an array containing the children of currentResultsArea


        results.forEach((element, index) => {       // for each item in the results array
          if(shuffledResult[index]) {
            element.classList.add(shuffledResult[index])
          }
          // first element add classlist of shuffledResult index 1, second element add classlist of shuffledResult index 2
          // because one of the shuffledResult's may be ''... we have to add an 'if' condition
          // if shuffledResult index 1 is truthy.. carryout the code, if not the code will not be run
        })

        const winCase = shuffledResult.every(element => element === 'green')  // if all four items 'green' = winCase

        if (winCase) {
          winner.classList.remove('hidden')
          audio[0].play()
        } else if (rowIndex === 9 & !winCase) {
          loser.classList.remove('hidden')
          audio[2].play()
          currentRow.classList.remove('activeRow')
        } else {
          currentSpace.classList.remove('activeCircle')
          currentRow.classList.remove('activeRow')
          rowIndex++
          currentRow = rows[rowIndex]
          currentRow.classList.add('activeRow')             // update activeRow
          currentSpace = currentRow.children[0]
          currentSpace.classList.add('activeCircle')
          currentResultsArea = allResultsAreas[rowIndex]    // update currentResultsArea
        }
      }
    })
  })



  playAgainButtons.forEach(element => {

    element.addEventListener('click', () => {
      audio[1].play()
      loser.classList.add('hidden')
      winner.classList.add('hidden')
      counter = 0
      rowIndex = 0
      currentRow.classList.remove('activeRow')
      currentRow = rows[rowIndex]
      computerRandomCode = []
      getComputerRandomCodeFunction()
      console.log('computer random code ' + computerRandomCode)    // call getComputerRandomCodeFunction
      currentRow.classList.add('activeRow')
      currentResultsArea = allResultsAreas[rowIndex]


      allResultsAreas.forEach(element => {
        const results = Array.from(element.children)
        results.forEach(result => result.classList.remove('orange', 'green'))
      })


      console.log(rows)
      rows.forEach(element => {
        const allSpaces = Array.from(element.children)
        allSpaces.forEach(element => element.classList.remove('yellow', 'red', 'blue', 'black'))
        allSpacesBoard.forEach(element => element.classList.add('space'))

      })
    })
  })



})  //main DOM closing tag
