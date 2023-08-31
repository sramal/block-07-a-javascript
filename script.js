const buttonColor = document.querySelector(".btn-color");
const buttonTitle = document.querySelector("#btn-title");
const buttonCircles = document.querySelector("#btn-circles");
const body = document.querySelector("body");

buttonColor.addEventListener("click", () => {
    if (body.style.backgroundColor === "yellow") {
        body.style.backgroundColor = "white";
    } else {
        body.style.backgroundColor = "yellow";
    }
});

buttonTitle.addEventListener("click", () => {
    const mainTitle = document.querySelector("#main-title");
    if (mainTitle.textContent === "Javascript DEMO") {
        mainTitle.textContent = "I am hungry!";
    } else {
        mainTitle.textContent = "Javascript DEMO";
    }
});

buttonCircles.addEventListener("click", () => {
    const circle = document.createElement("div");

    circle.style.width = "200px";
    circle.style.height = "200px";
    circle.style.borderRadius = "100%";
    circle.style.border = "1px solid black";

    body.append(circle);
});
