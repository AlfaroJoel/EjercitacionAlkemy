const btn1 = document.querySelector('.btn_red');
const body = document.querySelector('body');

btn1.addEventListener('click', () => {
    body.className = 'color__red';
})