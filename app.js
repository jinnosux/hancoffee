const woltLink = "https://wolt.com/sr/srb/novi-pazar/venue/kafeterija-hancoffee";
const buttons = document.querySelectorAll("button");
buttons.forEach(e => {
    e.addEventListener("click", e => {
        window.location.href = woltLink;
    })
}) 

