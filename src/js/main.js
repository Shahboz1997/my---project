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
    const value = (rangeElement.value - rangeElement.min) / (rangeElement. max - rangeElement.min) * 100;
    sliderFill.style.width = value + '%'; 
    sliderTrumb.style.left = value + '%';
    rangeValue.textContent = value.toFixed();
}

rangeInput.addEventListener('input', (evt) => rangeChangeHandler(evt));



// console.log('Helloworld');
// const menuWrapper = headerWrapper.querySelector(".menu-wrapper");
// const burger = pageheader.querySelector(".burger");
// const closeButton = pageheader.querySelector(".button-close");

// burgerBtnClickHandler = () => {
//   menuWrapper.classList.add("d-flex");
//   menuWrapper.classList.remove("d-none");
// };

// btnCloseClickHandler = () => {
//   menuWrapper.classList.remove("d-flex");
//   menuWrapper.classList.add("d-none");
// };
// if (window.innerWidth < 1357) {
//   console.log("mobile");
//   menuWrapper.classList.remove("d-flex");
//   menuWrapper.classList.add("d-none");

//   burger.classList.remove("d-none");
//   burger.classList.add("d-flex");

//   burger.addEventListener("click", burgerBtnClickHandler);
//   closeButton.addEventListener("click", btnCloseClickHandler);
//}
 //<input class="visually-hidden" type="range" id="amount" name="cash" min="1000" max="25000" value="5000" />