// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { checkResult } from '../rpsUtils.js';
import { getRandomThrow } from '../rpsUtils.js';
const test = QUnit.test;

test('returns loss when player rock and computer paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'rock';
    const computer = 'paper';
    const expected = 'loss';

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkResult(player, computer);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('returns win with player rock and computer scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'rock';
    const computer = 'scissors';
    const expected = 'win';

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkResult(player, computer);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('returns draw when computer draws rock and player selects rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'rock';
    const computer = 'rock';
    const expected = 'draw';

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkResult(player, computer);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('returns win when computer draws paper and player selects rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'paper';
    const computer = 'rock';
    const expected = 'win';

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkResult(player, computer);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('returns draw when computer draws paper and player selects paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'paper';
    const computer = 'paper';
    const expected = 'draw';

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkResult(player, computer);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('returns loss when player draws paper and computer draws scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'paper';
    const computer = 'scissors';
    const expected = 'loss';

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkResult(player, computer);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('returns draw when player draws scissors and computer draws scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'scissors';
    const computer = 'scissors';
    const expected = 'draw';

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkResult(player, computer);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('returns loss when player draws scissors and computer draws rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'scissors';
    const computer = 'rock';
    const expected = 'loss';

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkResult(player, computer);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('returns win when player draws scissors and computer draws paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'scissors';
    const computer = 'paper';
    const expected = 'win';

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkResult(player, computer);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return rock paper or scissors', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow();
    //Assert
    // Make assertions about what is expected versus the actual result
    assert.equal(expected, actual === 'rock' || actual === 'paper' || actual === 'scissors');
});
