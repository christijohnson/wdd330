const game = {
    start(quiz) {
        this.questions = [...quiz];
        this.score = 0;

        for(const question of this.questions) {
            this.question = question;
            this.ask();
        }
        
        this.gameOver();
    },
    ask() {
        const question = `What is ${this.question.name}'s real name?`;
        const response = prompt(question);
        this.check(response);
    },
    check(response) {
        const answer = this.question.realName;
        if(response === answer) {
            alert('Correct!');
            this.score++;
        } else {
            alert(`Wrong! The correct answer was ${answer}`);
        }
    },
    gameOver() {
        alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    }
}

const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    render(target, content,attributes) {
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    }
};

// more examples

ask() 
{
    const question = `What is ${this.question.name}'s real name?`;
    view.render(view.question,question);
    const response = prompt(question);
    this.check(response);
};
check(response) 
{
    const answer = this.question.realName;
    if(response === answer) {
        view.render(veiw.result,'Correct!',{'class': 'correct'});
        alert('Correct!');
        this.score++;
        view.render(view.result, `Wrong! The correct answer was ${answer}`,{'class': 'wrong'});
        alert(`Wrong! The correct answer was ${answer}`);
    }
};
gameOver() 
{
    view.render(view.info, `Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
}