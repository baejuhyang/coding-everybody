const toggleBtns = document.querySelectorAll('input.toggle');

const toggleBtnHandler = () => {
    let target = document.querySelector('body');
    if (target.style.backgroundColor === 'black') {
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        toggleBtns.forEach((btn) => {
            btn.value = 'Dark';
        });
    } else {
        target.style.backgroundColor = 'black';
        target.style.color = 'white';
        toggleBtns.forEach((btn) => {
            btn.value = 'Light';
        });
    }
};
