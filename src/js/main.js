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
console.log('Helloworld');
const menuWrapper = headerWrapper.querySelector(".menu-wrapper");
const burger = pageheader.querySelector(".burger");
const closeButton = pageheader.querySelector(".button-close");

burgerBtnClickHandler = () => {
  menuWrapper.classList.add("d-flex");
  menuWrapper.classList.remove("d-none");
};

btnCloseClickHandler = () => {
  menuWrapper.classList.remove("d-flex");
  menuWrapper.classList.add("d-none");
};
if (window.innerWidth < 1357) {
  console.log("mobile");
  menuWrapper.classList.remove("d-flex");
  menuWrapper.classList.add("d-none");

  burger.classList.remove("d-none");
  burger.classList.add("d-flex");

  burger.addEventListener("click", burgerBtnClickHandler);
  closeButton.addEventListener("click", btnCloseClickHandler);
}
