let questions = document.querySelectorAll('.faq__question');

for(let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', function() {
        //this.classList.toggle('active');
        let answer = this.nextElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
}