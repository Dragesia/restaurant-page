export default function menuPage() {
    const content = document.querySelector("#content");

    const context = document.querySelector(".context");
    context.innerHTML = "";

    const p = document.createElement("p");
    p.innerHTML = "Menu stuff here";

    context.appendChild(p);
}