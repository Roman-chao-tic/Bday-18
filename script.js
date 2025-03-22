// script.js
let matchFree = false;
let matchHeld = false;
let matchLit = false;
let lightTimer = null;
let bandBurned = false;

// Get DOM elements
const matchstick = document.getElementById("matchstick-container");
const band = document.getElementById("band");
const card = document.getElementById("card");
const pages = document.querySelectorAll(".card-page");

let currentPage = 0;

// Matchstick click logic
matchstick.addEventListener("click", () => {
    if (!matchFree) {
        matchFree = true;
        matchstick.style.cursor = "grab";
    } else if (!matchHeld) {
        matchHeld = true;
    } else if (!matchLit) {
        matchLit = true;
        matchstick.style.background = "orange";
        lightTimer = setTimeout(() => {
            matchLit = false;
            matchstick.style.background = "#8b4513";
        }, 10000); // 10 seconds
    } else if (matchLit) {
        matchLit = false;
        matchstick.style.background = "#8b4513";
        clearTimeout(lightTimer);
    }
});

// Burn band and reveal card
band.addEventListener("mouseover", () => {
    if (matchLit && !bandBurned) {
        bandBurned = true;
        band.style.backgroundColor = "black";
        setTimeout(() => {
            document.getElementById("envelope-container").style.display = "none";
            card.style.display = "block";
        }, 1000);
    }
});

// Card navigation logic
pages.forEach((page, index) => {
    page.addEventListener("click", () => {
        if (index < pages.length - 1) {
            page.classList.add("hidden");
            pages[index + 1].classList.remove("hidden");
        } else {
            document.getElementById("card").classList.add("hidden");
        }
    });
});
