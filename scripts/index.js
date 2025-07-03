function showPopUp(popup_header, popup_desc) {
    document.getElementById("popup_close").style.visibility = "visible";

    var popup = document.getElementById("popup_dialog");
    popup.classList.add("show");

    var popup_header_el = document.getElementById("popup_header");
    popup_header_el.textContent = popup_header;

    var popup_desc_el = document.getElementById("popup_desc");
    popup_desc_el.textContent = popup_desc;
}

function closePopUp() {
    const popup = document.getElementById("popup_dialog");

    document.getElementById("popup_close").style.visibility = "hidden";

    // Remove .show and add .hiding
    popup.classList.remove("show");
    popup.classList.add("hiding");

    // Define a one-time handler to avoid stacking event listeners
    function handleAnimationEnd(e) {
        if (e.animationName === "popup-hide") {
            popup.classList.remove("hiding");
            // popup.style.visibility = "hidden";
            popup.removeEventListener("animationend", handleAnimationEnd);
        }
    }

    popup.addEventListener("animationend", handleAnimationEnd);
}

function onNameClicked() {
    showPopUp("Thanks for stopping by!~", "Hi there. Unknown visitor! Thank you for stopping by this little project I made just for fun! Or website. Trust me there will be a LOT more to come.")
}