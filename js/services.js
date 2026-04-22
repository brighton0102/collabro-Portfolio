// This file is used to handle interactive logic for the services page

document.addEventListener("DOMContentLoaded", () => {
    // Optional: Add scroll effect to navbar to blend nicely when scrolling down
    const navbar = document.querySelector(".navbar");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(15, 15, 15, 0.9)";
            navbar.style.backdropFilter = "blur(10px)";
            navbar.style.borderBottom = "1px solid #27272a";
            // Set position sticky if needed via JS (though often handled in CSS)
            navbar.style.position = "sticky";
            navbar.style.top = "0";
            navbar.style.zIndex = "1000";
        } else {
            navbar.style.background = "transparent";
            navbar.style.backdropFilter = "none";
            navbar.style.borderBottom = "none";
            navbar.style.position = "static";
        }
    });
});
