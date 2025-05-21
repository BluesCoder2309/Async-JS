
  const sentences = `The quick brown fox jumps over the lazy dog. Sphinx of black quartz, judge my vow. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump!`;

  const sentenceElement = document.getElementById("sentence");
  const inputElement = document.getElementById("input");
  const startButton = document.getElementById("start-btn");
  const timerElement = document.getElementById("timer");
  const speedElement = document.getElementById("speed");
  const accuracyElement = document.getElementById("accuracy");
  const resultElement = document.getElementById("result");
  const retryButton = document.getElementById("retry-btn");

  let interval, timeout;
  let timeLeft = 30;
  let originalSentence = '';

  function startTest() {
    // Reset UI
    inputElement.value = "";
    timeLeft = 30;
    timerElement.textContent = "00:30";
    resultElement.style.display = "none";

    // Setup sentence
    originalSentence = sentences;
    sentenceElement.textContent = originalSentence;

    // Enable input
    inputElement.disabled = false;
    inputElement.focus();
    startButton.disabled = true;

    // Start countdown
    interval = setInterval(() => {
      timeLeft--;
      timerElement.textContent = `00:${timeLeft < 10 ? "0" + timeLeft : timeLeft}`;
      if (timeLeft <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    // Stop test after 30 seconds
    timeout = setTimeout(endTest, 30000);
  }

  function endTest() {
    clearInterval(interval);
    clearTimeout(timeout);

    // Disable input and start button
    inputElement.disabled = true;
    startButton.disabled = true;

    // Calculate result
    const userInput = inputElement.value.trim();
    const originalWords = originalSentence.trim().split(/\s+/);
    const userWords = userInput.split(/\s+/);

    let correctWordCount = 0;
    let correctCharCount = 0;
    const totalCharCount = originalSentence.replace(/\s+/g, '').length;

    for (let i = 0; i < userWords.length; i++) {
      if (userWords[i] === originalWords[i]) {
        correctWordCount++;
        correctCharCount += userWords[i].length;
      }
    }

    const speed = Math.round((correctWordCount / 30) * 60);
    const accuracy = Math.round((correctCharCount / totalCharCount) * 100);

    speedElement.textContent = speed;
    accuracyElement.textContent = accuracy;

    resultElement.style.display = "block";
  }

  function retryTest() {
    inputElement.value = "";
    inputElement.disabled = true;
    startButton.disabled = false;
    timerElement.textContent = "00:30";
    resultElement.style.display = "none";
    sentenceElement.textContent = "";
  }

  startButton.addEventListener("click", startTest);
  retryButton.addEventListener("click", retryTest);
