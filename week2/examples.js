// Javascript examples

const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];

// to initialize score
function start(quiz) {
    let score = 0;

    // loop through array using for-of loop
    for (const [question,answer] of quiz) {
        const response = ask(question);
        check(response,answer);
}

    gameOver();

    // function declarations
    function ask(question) {
        return prompt(question);
    }

    // if - else block used to check answer
    // score is incremented by 1 
    function check(response,answer) {
        if (response === answer) {
            alert ('Correct!');
            score++;
        } else {
            alert (`Wrong! The correct answer was ${answer}`);
        }
    }

    // end of game, report the score
    // use ternary operator to check if the score is not equal to 1 adding s to make plural
    function gameOver() {
        alert (`Game Over, you scored ${score} point${score !==1 ? 's' : ''}`);
    }
}
start(quiz);



// forEach method
const colors = ['Red', 'Green', 'Blue']
colors.forEach( (color,indes) =>
    console.log(`Color at position ${index} is ${color}`));