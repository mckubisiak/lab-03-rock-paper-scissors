

export function rockPaperScissors(userthrow, computerthrow) {
    if (userthrow === computerthrow) return 'draw';
    else if (userthrow === 1 && computerthrow === 2) return 'computerwin';
    else if (userthrow === 1 && computerthrow === 3) return 'userwin';
    else if (userthrow === 2 && computerthrow === 3) return 'computerwin';
    else if (userthrow === 2 && computerthrow === 1) return 'userwin';
    else if (userthrow === 3 && computerthrow === 2) return 'userwin';
    else if (userthrow === 3 && computerthrow === 1) return 'computerwin';
}

export function computerThrow(randomNumber) {
    if (randomNumber === 1) return 'rock';
    else if (randomNumber === 2) return 'paper';
    else if (randomNumber === 3) return 'scissors';
}