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

export function checkResult(player, computer) {
    if (player === 'rock' && computer === 'paper') 
        return 'loss';
    if (player === 'rock' && computer === 'scissors')
        return 'win';
    if (player === 'rock' && computer === 'rock')
        return 'draw';
    if (player === 'paper' && computer === 'rock')
        return 'win';
    if (player === 'paper' && computer === 'paper')
        return 'draw';
    if (player === 'paper' && computer === 'scissors')
        return 'loss';
    if (player === 'scissors' && computer === 'rock')
        return 'loss';
    if (player === 'scissors' && computer === 'paper')
        return 'win';
    if (player === 'scissors' && computer === 'scissors')
        return 'draw';

}
