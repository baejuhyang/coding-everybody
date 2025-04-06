const toggleBtns = document.querySelectorAll('input.toggle');

const Body = {
    setBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
    },
    setColor: function (color) {
        document.querySelector('body').style.color = color;
    },
};

const toggleBtnHandler = () => {
    if (document.querySelector('body').style.backgroundColor === 'black') {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        toggleBtns.forEach((btn) => {
            btn.value = 'Dark';
        });
    } else {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        toggleBtns.forEach((btn) => {
            btn.value = 'Light';
        });
    }
};
