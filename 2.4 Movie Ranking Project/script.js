window.addEventListener('DOMContentLoaded'), function() {
    var startBtn = document.getElementById('startBtn');
    var wordContainer = document.getElementById('wordContainer');
    var wordElement = document.getElementById('word');
    var textInput = document.getElementById('textInput');
    var feedback = document.getElementById('feedback');
    var resultContainer = document.getElementById('resultContainer');
    var speedElement = document.getElementById('speed');

    var words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew"];
    var currentWordIndex = 0;
    var startTime = 0;
    var endTime = 0; }

    function generateWord() {
        return words[Math.floor(Math.random() * words.length)];
    }

    function calculateTypingSpeed() {
        var timeElapsed = (endTime - startTime) / 1000; // Convert to seconds
        var speed = Math.round((textInput.value.length / 5) / (timeElapsed / 60)); // Assuming average word length is 5 characters
        return speed;
    }

    function startTypingPractice() {
        startBtn.style.display = 'none';
        wordContainer.style.display = 'block';
        textInput.value = '';
        textInput.focus();
        currentWordIndex = 0;
        startTime = Date.now();
        showNextWord();
    }

    function showNextWord() {
        if (currentWordIndex < words.length) {
            wordElement.textContent = generateWord();
            feedback.textContent = '';
        } else {
            finishTypingPractice();
        }
    }

    function finishTypingPractice() {
        endTime = Date.now();
        var speed = calculateTypingSpeed();
        wordContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        speedElement.textContent = 'Typing speed: ' + speed + ' words per minute';
    }

    startBtn
