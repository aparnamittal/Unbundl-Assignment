let thumbnails = document.getElementsByClassName("thumbnail");
let slider = document.getElementsByClassName("slider");
let buttonRight = document.getElementsByClassName("slide-right");
let buttonLeft = document.getElementsByClassName("slide-left");

buttonLeft.addEventListener("click", () => {
    slider.scrollLeft -= 125;
})
buttonRight.addEventListener("click", () => {
    slider.scrollRight += 125;
})

const maxScrolLeft = slider.scrollWidth - slider.clientWidth;
// alert(maxScrolLeft);

function autoPlay() {
    if (slider.scrollLeft > (maxScrolLeft - 1)) {
        slider.scrollLeft -= maxScrolLeft
    } else {
        slider.scrollLeft += 1;
    }
}

let paly = setInterval(autoPlay, 50);

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("mouseover", () => {
        clearInterval(paly)
    })
    thumbnails[i].addEventListener("mouseout", () => {
        return play = setInterval(autoPlay, 50);
    })
}
