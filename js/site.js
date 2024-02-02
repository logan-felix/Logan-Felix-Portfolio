console.log("JS ran!");
let randomNumber = Math.floor(Math.random() * 15);
console.log(randomNumber);

// ----------- Quote API --------------

function getQuote(){
    let url = `https://type.fit/api/quotes`;

    fetch(url)
        .then(r => r.json())
        .then(data => {
            loadQuote(data[randomNumber])
        })
}

function loadQuote(quote){
    let html = `
    <blockquote>
        "${quote.text}"
        <footer>
            -${quote.author}
        </footer>
    </blockquote>`;

    document.getElementById("quoteDiv").innerHTML += html;
}

getQuote();


// ------------ Slideshow --------------

let imageUrls = [
    "./images/TicTacToeSS.png",
    "./images/ConnectFourSS.png",
    "./images/ZombieGeneratorSS.png",
    "./images/NumberGuessingGameSS.png",
    "./images/PersonalWebsiteSS.png"
];

const slideShowImage = document.getElementById('slideshow-image');


let currentImageIndex = 0;

function updateImage() {
    currentImageIndex++;

    if(currentImageIndex >= imageUrls.length){
        currentImageIndex = 0;
    }

    slideShowImage.src = imageUrls[currentImageIndex];
}

setInterval(updateImage, 2500);