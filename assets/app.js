// ROTATE MOON
let moon = document.querySelector('.moon');
let introSection = document.querySelector('.intro');
document.addEventListener('scroll', rotateMoon)
function rotateMoon() {
    let scrollY = window.scrollY;
    moon.style.transform = "rotate(" + scrollY / 4 + "deg)";
    introSection.style.filter = "blur(" + scrollY / 80 + "px)"
}

// FOLLOW CURSOR
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.style.top = (e.pageY - 30) + "px";
    cursor.style.left = (e.pageX - 30) + "px";
})
// SHOW "HOVER ME!" TEXT
const elHover = document.querySelectorAll('.like__item');
let random = Math.floor(Math.random() * 5);
elHover.forEach(element => {
    element.addEventListener('mouseover', () => {
        cursor.style.display = 'block';
    })

    element.addEventListener('mouseleave', () => {
        cursor.style.display = 'none';
    })
});

// DOT TRANSFORMATION
let introTitle = document.querySelector('.title__intro');
let dot = document.querySelector('.dot');
introTitle.addEventListener('mouseover', expandDot)
introTitle.addEventListener('mouseleave', () => {
    dot.style.width = "50px";
    dot.style.height = "50px";
})

function expandDot() {
    dot.style.width = "80%";
    dot.style.height = "117%";
}

// HIGHTLIGHT IMG SHOWING
let itemLike = document.querySelectorAll(".like__item");
let highlightItem = document.querySelectorAll(".highlight");
let imageLi = document.createElement('div');
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

itemLike.forEach(element => {
    element.addEventListener('mouseover', () => {
        hoveringImg(element, 'data-id', "url(./assets/hover", ".jpg)");
    })

    element.addEventListener('mouseleave', () => {
        removeHoveringImg(element);
    })
});

highlightItem.forEach(element => {
    element.addEventListener('mouseover', () => {
        hoveringImg(element, 'data-highlight', "url(./assets/highlight", ".gif)");
    })

    element.addEventListener('mouseleave', () => {
        removeHoveringImg(element);
    })
});

function hoveringImg(el, data, srcStart, srcEnd) {
    imageLi.classList.add('img__hover');
    let id = el.getAttribute(data);
    imageLi.style.backgroundImage = srcStart + id + srcEnd;
    imageLi.style.left = getRandom(0, 90) + '%';
    el.appendChild(imageLi);
}

function removeHoveringImg(el) {
    el.removeChild(imageLi);
}

//  PARALLAX
let statusPara = document.querySelectorAll('.status p');

window.addEventListener("scroll", function () {
    const distance = window.scrollY;
    console.log(distance)
    document.querySelector(".intro").style.transform = `translateY(${distance * 0.6}px)`;
    document.querySelector(".parallax").style.transform = `translateY(${distance * 0.5}px)`;

    statusPara.forEach(element => {
        if (distance > 1450 && distance < 2650) {
            element.style.color = 'white';
        } else {
            element.style.color = '#FF8906';
        }
    });
})

// CLICKABLE CANVA
let canvaIcon = document.querySelector('.canva__icon');

canvaIcon.addEventListener('click', () => {
    let iconCreate = document.createElement('span');
    let icon = ['javascript', 'css', 'html', 'sass', 'bootstrap', 'php', 'symfony'];

    iconCreate.classList.add('icon__on__canva');
    iconCreate.style.top = getRandom(0, 80) + '%';
    iconCreate.style.left = getRandom(0, 90) + '%';
    iconCreate.style.transform = "rotate(" + getRandom(-45, 45) + "deg)";
    iconCreate.innerHTML = icon[Math.floor(Math.random() * icon.length)];

    canvaIcon.appendChild(iconCreate);

    document.querySelector('.reset__canva').addEventListener('click', () => {
        canvaIcon.removeChild(iconCreate);
    })
})

// SHOWING STACK ACCORDEON
let accordeon = document.querySelector('.seemore__stack');
let listAccordeon = document.querySelector('.stacks');
accordeon.addEventListener('click', () => {
    console.log('Je clique ici');
    listAccordeon.classList.toggle('show');
    document.querySelector('.fa-chevron-down').classList.toggle('rotate');
})

