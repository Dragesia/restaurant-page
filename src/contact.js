export default function contactPage() {
    const content = document.querySelector("#content");
    
    const context = document.querySelector(".context");
    context.innerHTML = "";

    const p = document.createElement("p");
    p.innerHTML = "Contact stuff here";
    
    context.appendChild(p);
}