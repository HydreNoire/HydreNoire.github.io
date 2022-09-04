let mail = document.querySelector('#mail');
let btnCopy = document.querySelector('#copy');

btnCopy.addEventListener('click', () => {
    let copy = mail.select();

    document.execCommand('copy', true, copy);
});