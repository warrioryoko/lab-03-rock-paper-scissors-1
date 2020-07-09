// import functions and grab DOM elements
import { getRandomThrow } from './rpsUtils.js';
import { checkResult } from './rpsUtils.js';
const playButton = document.querySelector('#play-button');
const results = document.querySelector('#result');
const wins = document.querySelector('#tally');
const losses = document.querySelector('#loss-tally');
const draws = document.querySelector('#draws-tally');







// initialize state
let winsData = 0;
let lossdata = 0;
let drawsData = 0;




// set event listeners to update state and DOM
playButton.addEventListener('click', () => {
    const playerInfo = document.querySelector('input:checked');
    const player = playerInfo.value;
    const computer = getRandomThrow();
    console.log(computer);
    console.log(player);
    const result = checkResult(player, computer);
    console.log(result);
    if (result === 'win');
    return winsData ++;
    results.style.textcontent = 'You have ' + winsData + ' wins!';
    
});