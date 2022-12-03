export default function menuPage() {
    const menuBtn = document.querySelector(".menu");
    const homeBtn = document.querySelector(".home");
    const contactBtn = document.querySelector(".contact");

    menuBtn.classList.remove("passive");
    menuBtn.classList.add("active");
    homeBtn.classList.remove("active");
    homeBtn.classList.add("passive");
    contactBtn.classList.remove("active");
    contactBtn.classList.add("passive");

    const content = document.querySelector("#content");

    const context = document.querySelector(".context");
    context.innerHTML = "";

    const p = document.createElement("p");
    p.innerHTML = "Menu stuff here";

    context.appendChild(p);
}