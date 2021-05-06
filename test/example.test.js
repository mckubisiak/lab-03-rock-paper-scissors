import { rockPaperScissors } from '../utils.js';

const test = QUnit.test;

test('checks if user & computer throws are a match', (expect) => {
    const expected = 'draw';
    const actual = rockPaperScissors('rock', 'rock');
    expect.equal(actual, expected);
});

test('checks if user beats ', (expect) => {
    const expected = 'userwin';
    const actual = rockPaperScissors('paper', 'rock');
    expect.equal(actual, expected);
});

test('checks if user & computer throws area match', (expect) => {
    const expected = 'computerwin';
    const actual = rockPaperScissors('scissors', 'rock');
    expect.equal(actual, expected);
});

test('checks if user & computer throws are a match', (expect) => {
    const expected = 'draw';
    const actual = rockPaperScissors('paper', 'paper');
    expect.equal(actual, expected);
});

test('checks if user beats ', (expect) => {
    const expected = 'userwin';
    const actual = rockPaperScissors('scissors', 'paper');
    expect.equal(actual, expected);
});

test('checks if user & computer throws area match', (expect) => {
    const expected = 'computerwin';
    const actual = rockPaperScissors('scissors', 'scissors');
    expect.equal(actual, expected);
});