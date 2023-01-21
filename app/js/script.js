var burger = document.querySelector(".menu__body-btn")
var menu = document.querySelector(".menu__lists")
var overlay = document.querySelector(".overlay")
var body = document.querySelector("body")

burger.addEventListener("click", function () {
    menu.classList.toggle("show")
    burger.classList.toggle("show")
    overlay.classList.toggle("show")
    body.classList.toggle("stop-scroll")
})

overlay.addEventListener("click", function () {
    menu.classList.toggle("show")
    burger.classList.toggle("show")
    overlay.classList.toggle("show")
    body.classList.toggle("stop-scroll")
})

var tabButton = document.querySelectorAll(".tab__button")
var tabText = document.querySelectorAll(".tab__box")

tabButton.forEach(function (button, index) {
    button.addEventListener('click', function () {
        tabButton.forEach(function (activeButton) {
            activeButton.classList.remove("tab__active")
        })
        tabText.forEach(function (text) {
            text.classList.remove("show")
        })
        tabText[index].classList.add("show")
        tabButton[index].classList.add("tab__active")
    })
}) 

$('.slider-js').slick({
    infinite: true,
    arrows: false,
    dots: true,
    dotsClass: "slick-dots"
});