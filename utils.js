

export function rockPaperScissors(userthrow, computerthrow) {
    if (userthrow === computerthrow) return 'draw';
}

export function computerThrow(randomNumber) {
    if (randomNumber === 1) return 'rock';
    else if (randomNumber === 2) return 'paper';
    else if (randomNumber === 3) return 'scissors';
}