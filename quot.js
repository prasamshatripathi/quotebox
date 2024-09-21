const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const button = document.getElementById('new-quote');

function getQuote() {
    fetch('https://blog.hubspot.com/sales/famous-quotes')
    .then(response => response.json())
    .then(data => {
        quoteText.textContent = `"${data.content}"`;
        authorText.textContent = `- ${data.author}`;
        speakQuote(data.content);
    })
    .catch(error => console.error('Error fetching quote:', error));
}

function speakQuote(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

button.addEventListener('click', getQuote);
