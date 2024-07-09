const paragraph = document.getElementById('paragraph').innerText;
const inputText = document.getElementById('inputText');
const startButton = document.getElementById('startButton');
const timeDisplay = document.getElementById('time');
const accuracyDisplay = document.getElementById('accuracy');

let startTime, interval;

startButton.addEventListener('click', () => {
    inputText.value = '';
    inputText.disabled = false;
    inputText.focus();
    startButton.disabled = true;
    startTime = new Date().getTime();
    
    interval = setInterval(() => {
        const currentTime = new Date().getTime();
        const timeElapsed = ((currentTime - startTime) / 1000).toFixed(2);
        timeDisplay.innerText = timeElapsed;
    }, 100);
});

inputText.addEventListener('input', () => {
    const input = inputText.value;
    const inputLength = input.length;
    const paragraphSlice = paragraph.slice(0, inputLength);

    if (input === paragraph) {
        clearInterval(interval);
        inputText.disabled = true;
        startButton.disabled = false;
    }

    calculateAccuracy();
});

function calculateAccuracy() {
    const input = inputText.value;
    const inputLength = input.length;
    const correctChars = input.split('').filter((char, index) => char === paragraph[index]).length;
    const accuracy = ((correctChars / inputLength) * 100).toFixed(2);
    accuracyDisplay.innerText = isNaN(accuracy) ? 0 : accuracy;
}
