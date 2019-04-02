document.addEventListener('DOMContentLoaded', () => {

  let userGuess = []
  const computerRandomCode = []
  let counter = 0

  const allSpaces = document.querySelectorAll('.gameBoard div')     // target all the div within the gameBoard container div
  const userSelectButtonsDOM = document.querySelectorAll('.userSelectButtons div')

  const allSubmitBoxes = document.querySelectorAll('.submitGuess')  // all divs with the class of .submitGuess
  const winner = document.querySelector('#winner')
  const loser = document.querySelector('#loser')

  let currentSpace = allSpaces[0]

  const allResultsAreas = document.querySelectorAll('.resultsContainer')

  // HIGHLIGHT CURRENT ACTIVE ROW
  let rowIndex = 0                                  // create a variable for where the row index will start..e.g. the first row
  const rows = document.querySelectorAll('.row')    // grab all rows and save to variable
  let currentRow = rows[rowIndex]                   // new variable --- of all the rows saved in 'rows', what is the index of the current row
  currentRow.classList.add('activeRow')                // to that 'currentRow' add a class of active
  let currentResultsArea = allResultsAreas[rowIndex]






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
        console.log('the result is ' + colorResult)
        //       shuffle the color result
        const shuffledResult = shuffle(colorResult)
        console.log('the shuffled result is ' + shuffledResult)


        // send the shuffledResult to the currentResultsArea
        const results = Array.from(currentResultsArea.children)   // make an array containing the children of currentResultsArea


        results.forEach((element, index) => {       // for each item in the results array
          if(shuffledResult[index]) {
            element.classList.add(shuffledResult[index])
          }
          // first element add classlist of shuffledResult index 1
          // second element add classlist of shuffledResult index 2
          // because one of the shuffledResult's may be ''... we have to add an 'if' condition
          // if shuffledResult index 1 it truthy.. carryout the code.
          // if shuffledResult index 2 is empty this will not pass the condition, and so the code will not be run
        })



        if (results[0].classList.contains('green') &&
          results[1].classList.contains('green') &&
          results[2].classList.contains('green') &&
          results[3].classList.contains('green')) {
          winner.classList.remove('hidden')
        } else {
          currentRow.classList.remove('activeRow')
          rowIndex++
          currentRow = rows[rowIndex]
          currentRow.classList.add('activeRow')             // update activeRow
          currentResultsArea = allResultsAreas[rowIndex]    // update currentResultsArea
        }

        // const finalSubmitButton = document.querySelector('#finalSubmit')
        //
        // finalSubmitButton.addEventListener('click', () => {
        //   if (results[0].classList.contains('green') &&
        //   results[1].classList.contains('green') &&
        //   results[2].classList.contains('green') &&
        //   results[3].classList.contains('green')) {
        //     winner.classList.remove('hidden')
        //   } else {
        //     loser.classList.remove('hidden')
        //   }
        // })




      }
    })
  })









})  //main DOM closing tag
