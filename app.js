const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

function showScore(scores) {
    result.querySelector('span').textContent = `${scores}%`;
    result.classList.remove('d-none');
}

form.addEventListener('submit', e => {
    e.preventDefault();
    let scores = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            scores += 25;
        }
    })

    // show result on page
   showScore(scores);
});