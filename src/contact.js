export default function contactPage() {
    const menuBtn = document.querySelector(".menu");
    const homeBtn = document.querySelector(".home");
    const contactBtn = document.querySelector(".contact");

    menuBtn.classList.remove("active");
    menuBtn.classList.add("passive");
    homeBtn.classList.remove("active");
    homeBtn.classList.add("passive");
    contactBtn.classList.remove("passive");
    contactBtn.classList.add("active");
    
    const content = document.querySelector("#content");
    
    const context = document.querySelector(".context");
    context.innerHTML = "";

    const p = document.createElement("p");
    p.innerHTML = "Contact stuff here";
    
    context.appendChild(p);
}