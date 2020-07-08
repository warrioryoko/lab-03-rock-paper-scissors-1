export function getRandomThrow() {
    let hand = null;
    const myNumber = Math.random();
    if (myNumber < .333) {
        return hand = 'rock';
    } else if (myNumber >= .333 && myNumber < .666) {
        return hand = 'paper';
    } else {
        return hand = 'scissors';
    }
}
console.log(getRandomThrow);