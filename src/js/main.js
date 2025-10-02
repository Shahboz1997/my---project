console.log('Hello world');
const surveyContainer = document.querySelector(".survey-page");
const surveyCollection = surveyContainer.querySelectorAll(".survey-item");

surveyCollection.forEach(item => {
    item.addEventListener("click", (evt) => { 
        console.log("item", item);
        const lorem= item.querySelector(".survey-text"); 
        if (!lorem.classList.contains("d-none")) {
            lorem.classList.remove("d-none");
        }
        else {
      lorem.classList.add("d-none");
    };
        console.log("evt", evt.target);
        const element = evt.target;
        const parent = element.closest(".survey-item");
        const text = parent.querySelector(".survey-text");
        text.classList.toggle("d-none");
    });
})


const rangeWrapper = document.querySelector('.range-wrapper');
const rangeInput = rangeWrapper.querySelector('#customRange');
const sliderFill = rangeWrapper.querySelector('.slider-fill');
const sliderTrumb = rangeWrapper.querySelector('.slider-trumb');
const rangeValue = rangeWrapper.querySelector('.range-value');

const rangeChangeHandler = (event) => {
    const rangeElement = event.target;
    const value = (rangeElement.value - rangeElement.min) / (rangeElement. max - rangeElement.min) * 30000;
    sliderFill.style.width = value/78.94  + 'px'; 
    sliderTrumb.style.left = value/78.94  + 'px';
    rangeValue.textContent = value.toFixed();
}
rangeInput.addEventListener('input', (evt) => rangeChangeHandler(evt));


const hamburger = document.querySelector(".hamburger");
console.log(hamburger);
const navMenu = document.querySelector(".nav-menu");
console.log(navMenu);

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
}
