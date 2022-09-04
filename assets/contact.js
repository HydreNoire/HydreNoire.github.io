let btn = new ClipboardJS('#copy');
let alertSuccess = document.querySelector(".alert__copy");

btn.on('success', () => {
    alertSuccess.style.display = "block";
    setTimeout( () => {
        alertSuccess.style.display = "none";
    }, 950);
});

btn.on('error', () => {
    alert('nope')
});