# General Assembly Project 1 : Simple Front-End Game

### Timeframe
7 days

## Technologies used

* JavaScript (ES6)
* HTML5 + HTML5 Audio
* CSS
* Git

## Installation

1. Clone or download the repo
1. Open the `index.html` in your browser of choice

## Game overview

Mastermind is my own re-creation of the classic 1970's board game. The aim of the game is to guess the 4 colour code that has been randomly created by the computer.

![Masterind-header-screenshot](https://user-images.githubusercontent.com/47188720/55615363-2dac9f80-5787-11e9-960f-e16e6833a04f.png)

You can find a hosted version here - https://adamponddesign.github.io/mastermind/






## Game Instructions

1. Upon page load the first player guess circle is highlighted.


![Masterind-screenshot](https://user-images.githubusercontent.com/47188720/55614542-25ebfb80-5785-11e9-9a56-3ce6684c461d.png)


2. Player then clicks on the coloured buttons at the bottom of the screen to place their colour choice into the selected circle. Other colour buttons can be clicked to change the choice.


![gameplayimage1](https://user-images.githubusercontent.com/47188720/55617181-6d758600-578b-11e9-8154-c51a6d00ac48.png)

3. Player then clicks on to the next circle to highlight it for selection.

![gameplayimage2](https://user-images.githubusercontent.com/47188720/55617361-ce9d5980-578b-11e9-99bf-289b020ab308.png)

4. This process is repeated until the player has their first full line of colours, and is ready to guess.
Once the 'Guess' button is clicked, the player receives feedback on their guess in the results on the right side of the board.

![gameplayimage3](https://user-images.githubusercontent.com/47188720/55617876-0953c180-578d-11e9-815c-23e870dba839.png)





5. Results Key
 * Green Circle = correct colour, correct location
  * Orange Circle = correct colour, incorrect location
  * Empty Circle = selected colour is nowhere in the code.


  The results colours are placed randomly in the results area, so the player must determine which of their choices equates to which result indicator.

6. The row selector is automatically moved down, and the player can make another guess. The player has 10 attempts to correctly guess the computer code.



## Process
Prior to coding, I utilised an online task manager (Trello), and sudo code to break the project down to achievable chunks.

I initially worked on the logic side of the game, using numbers for the code rather than colours, as I found numbers easier to work with and generate.


Once I had the logic completed for a one line guess, I moved on to the basic styling via HTML and CSS.
Multiplying my one line to ten lines, then adding in the coloured buttons for user selection.

I then adjusted the logic to use colours rather than numbers.

Upon completion of my game board, I added in some media breakpoints so that the game would display correctly on multiple screen sizes and devices.


## Challenges
 Once I had completed the logic for one line of code, I initially struggled to carry that logic on throughout the game.  I also had some issues with the selection rows and highlighted circles not behaving as expected.

## Wins
Big wins for me in this project were
* Building on my knowledge of array methods
* Improving my troubleshooting skills
* Moving the gameplay selection areas down a line upon 'guess' button click
* Achieving a full board reset upon conclusion of the game.


## Future features
In the future I would like to add a game timer/countdown, and varying difficulty levels with more colour options and longer code lengths.  I would also like to include an introduction screen detailing the game rules.
