// import functions and grab DOM elements
import { rockPaperScissors } from './utils.js';
import { computerThrow } from './utils.js';


const matchesPlayed = document.querySelector('#matchesplayed');
const matchesWon = document.querySelector('#wins');
const winPercent = document.querySelector('#winpercent');
const results = document.querySelector('#results');
const resetSpan = document.querySelector('#coward');
const playButton = document.querySelector('#throw-button');
const resetButton = document.querySelector('#reset-button');



// initialize state
let totalMatches = 0;
let totalWins = 0;
let totalResets = 0;




playButton.addEventListener('click', () => {
    
    let randomNumber = Math.ceil(Math.random() * 3);
    const selectedRadio = document.querySelector('input:checked'); 
    const userThrow = Number (selectedRadio.value);
    const computeroutput = computerThrow(randomNumber);
    
    // console.log(typeof randomNumber);
    // console.log(typeof userThrow);

    const resultThrow = rockPaperScissors(userThrow, randomNumber);

// console.log(resultThrow);

    
    if (resultThrow === 'computerwin') {
        totalMatches++;
        matchesPlayed.textContent = `Matches Played: ${totalMatches}`;
        matchesWon.textContent = `Wins: ${totalWins}`;
        winPercent.textContent = `Win Percentage: ${Math.ceil(totalWins / totalMatches * 100)}`;
        results.textContent = `Sorry you lose to ${computeroutput}`;
        
    }
        
    else if (resultThrow === 'draw'){
        totalMatches++;
        matchesPlayed.textContent = `Matches Played: ${totalMatches}` ;
        winPercent.textContent = `Win Percentage: ${Math.ceil(totalWins / totalMatches * 100)}`;
        results.textContent = `It's a draw with ${computeroutput}`;
        matchesWon.textContent = `Wins: ${totalWins}`;
    }

    else if (resultThrow === 'userwin'){
        totalMatches++;
        totalWins++;
        matchesPlayed.textContent = `Matches Played: ${totalMatches}`;
        winPercent.textContent = `Win Percentage: ${Math.ceil(totalWins / totalMatches * 100)}`;
        matchesWon.textContent = `Wins: ${totalWins}`;
        results.textContent = `Congrats you won vs ${computeroutput}`;
    }

    
});

resetButton.addEventListener('click', () => {
    totalResets++;
    totalWins = 0;
    totalMatches = 0;
    matchesPlayed.textContent = `Matches Played: 0`;
    winPercent.textContent = `Win Percentage: 0`;
    matchesWon.textContent = `Wins: 0`;
    resetSpan.textContent = `Cowards clicks: ${totalResets}`;
});



// set event listeners to update state and DOM