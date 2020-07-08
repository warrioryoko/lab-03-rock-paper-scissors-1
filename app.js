// import functions and grab DOM elements
import { getRandomThrow } from './rpsUtils.js';
const playButton = document.querySelector('#play-button');
const results = document.querySelector('#result');
const wins = document.querySelector('#tally');
const losses = document.querySelector('#loss-tally');
const draws = document.querySelector('#draws-tally');
console.log(getRandomThrow());



// initialize state
let winsData = 0;
let lossdata = 0;



// set event listeners to update state and DOM