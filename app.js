const woltLink = "https://wolt.com/sr/srb/novi-pazar/venue/kafeterija-hancoffee";
const buttons = document.querySelectorAll("button");
buttons.forEach(e => {
    e.addEventListener("click", e => {
        window.location.href = woltLink;
    })
}) 

const copyrightLink = document.querySelector(".copyright-link");
copyrightLink.addEventListener("click", () => {
    window.location.href = "https://github.com/dejanaksovic";
})

