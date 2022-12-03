export default function homePage() {
    const menuBtn = document.querySelector(".menu");
    const homeBtn = document.querySelector(".home");
    const contactBtn = document.querySelector(".contact");

    menuBtn.classList.remove("active");
    menuBtn.classList.add("passive");
    homeBtn.classList.remove("passive");
    homeBtn.classList.add("active");
    contactBtn.classList.remove("active");
    contactBtn.classList.add("passive");

    const content = document.querySelector("#content");

    const context = document.querySelector(".context");
    context.innerHTML = "";

    const p = document.createElement("p");
    p.innerHTML = "Brand chef Argentinian-born maestro Lionel Andres Messi Cuccittini has drawn on over 30 years' experience. Come and visit us today for a great tasting Argentinian food served in the grand atmosphere. Restaurant de Cuccittini blends the energy of Buenos Aires' legendary cantinas with the charm of Europe's open-air markets. This warm, intimate space features the best of Argentinian cuisine.";

    context.appendChild(p);
}