const messages = [
    "Are you sure?",
    "Really sure??",
    "C'mon stop being silly!",
    "Kristina please...",
    "Just think about it.       ",
    "If you say no, I will be really upset...",
    "I will be very upset...",
    "I will be very very very upset...",
    "Ok fine, have it your way...",
    "Rude..."

];

let messageIndex = 0;


function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = messages[messageIndex];

    if (messages[messageIndex] === "Rude...") {
   
        window.location.href = "forcedYesPage.html"; 
        return;
    }

    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yespage.html";
}


