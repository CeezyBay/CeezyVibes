const quotes = [
    "Ceezy Energy > Everything.",
  "Vibe high, stay original.",
  "Legacy in motion, one thread at a time.",
  "Not just quotes — Ceezy drops.",
  "Mood swings, but my vibes don’t."
];

let currentQuote = "";

const likeBtn = document.getElementById('like-btn');
const saveBtn = document.getElementById('save-btn')
const quoteText = document.getElementById('quote-display')

//keep track
let likedQuotes = []

let savedQuotes = JSON.parse(localStorage.getItem('ceezyQuotes')) || [];

document.getElementById('new-vibe').addEventListener('click', () => {
    const random = Math.floor(Math.random () * quotes.length);
    currentQuote = quotes[random];
    quoteText.textContent = currentQuote;

    //Reset icons visual based on state
    updateLikeIcon();
    updateSaveIcon();
});

document.getElementById('send-btn').addEventListener('click', () => {
    const message = encodeURIComponent(`Yo! Check  this out:\n"${currentQuote}" - from Ceezy  Empire`);
    const whatsappURL = `https://wa.me/?text=${message}`;
    window.open(whatsappURL, "_blank");
})

likeBtn.addEventListener('click', () => {
    if (likedQuotes.includes(currentQuote)) {
        likedQuotes = likedQuotes.filter(q => q !== captureEvents);
    } else {
        likedQuotes.push(currentQuote);
    }
    updateLikeIcon();
})

saveBtn.addEventListener('click', () => {
    if (savedQuotes.includes(currentQuote)) {
        savedQuotes = savedQuotes.filter(q => q !== currentQuote);
        localStorage.setItem('ceezyQuotes', JSON.stringify(savedQuotes));
    } else {
        savedQuotes.push(currentQuote);
        localStorage.setItem('ceezyQuotes',JSON.stringify(savedQuotes));
    }
    updateSaveIcon();
})

function updateLikeIcon() {
    if(likedQuotes.includes(currentQuote)){
        likeBtn.classList.remove('bx-heart');
        likeBtn.classList.add('bxs-heart');
    } else {
        likeBtn.classList.remove('bxs-heart');
        likeBtn.classList.add('bxs-heart');
    }
}

function updateSaveIcon() {
    if (savedQuotes.includes(currentQuote)){
        saveBtn.classList.remove('bx-bookmark');
        saveBtn.classList.add('bxs-bookmark');
    } else {
        saveBtn.classList.remove('bxs-bookmark');
        saveBtn.classList.add('bx-bookmark')
    }
}