import { rockPaperScissors } from '../utils.js';
import { computerThrow } from '../utils.js';

const test = QUnit.test;

test('checks if user & computer throws are a match', (expect) => {
    const expected = 'draw';
    const actual = rockPaperScissors(1, 1);
    expect.equal(actual, expected);
});

test('checks if user beats rock with paper ', (expect) => {
    const expected = 'userwin';
    const actual = rockPaperScissors(2, 1);
    expect.equal(actual, expected);
});

test('checks if users scissors lose to rock', (expect) => {
    const expected = 'computerwin';
    const actual = rockPaperScissors(3, 1);
    expect.equal(actual, expected);
});

test('checks if user beats ', (expect) => {
    const expected = 'userwin';
    const actual = rockPaperScissors(3, 2);
    expect.equal(actual, expected);
});



test('checks that a random 1 will give us rock', (expect) => {
    const expected = 'rock';
    const actual = computerThrow(1);
    expect.equal(actual, expected);
});

test('checks that a random 1 will give us paper', (expect) => {
    const expected = 'paper';
    const actual = computerThrow(2);
    expect.equal(actual, expected);
});

test('checks that a random 1 will give us scissors', (expect) => {
    const expected = 'scissors';
    const actual = computerThrow(3);
    expect.equal(actual, expected);
});