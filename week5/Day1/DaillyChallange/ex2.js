const morse = `{
  "0": "-----", "1": ".----", "2": "..---", "3": "...--",
  "4": "....-", "5": ".....", "6": "-....", "7": "--...",
  "8": "---..", "9": "----.", "a": ".-", "b": "-...",
  "c": "-.-.", "d": "-..", "e": ".", "f": "..-.",
  "g": "--.", "h": "....", "i": "..", "j": ".---",
  "k": "-.-", "l": ".-..", "m": "--", "n": "-.",
  "o": "---", "p": ".--.", "q": "--.-", "r": ".-.",
  "s": "...", "t": "-", "u": "..-", "v": "...-",
  "w": ".--", "x": "-..-", "y": "-.--", "z": "--..",
  ".": ".-.-.-", ",": "--..--", "?": "..--..", "!": "-.-.--",
  "-": "-....-", "/": "-..-.", "@": ".--.-.", "(": "-.--.",
  ")": "-.--.-"
}`;

// 1. Convert JSON to JS object
function toJs() {
  return new Promise((resolve, reject) => {
    const morseObj = JSON.parse(morse);
    if (Object.keys(morseObj).length === 0) {
      reject("Error: Morse object is empty.");
    } else {
      resolve(morseObj);
    }
  });
}

// 2. Convert user's input to Morse
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const input = document.getElementById("userInput").value.toLowerCase();
    const morseArr = [];

    for (const char of input) {
      if (char === " ") continue;
      if (morseJS[char]) {
        morseArr.push(morseJS[char]);
      } else {
        reject(`Error: Character "${char}" not supported.`);
        return;
      }
    }
    resolve(morseArr);
  });
}

// 3. Display output
function joinWords(morseTranslation) {
  document.getElementById("output").innerText = morseTranslation.join('\n');
}

// Chain the functions
function startMorseTranslation() {
  toJs()
    .then(toMorse)
    .then(joinWords)
    .catch(error => {
      document.getElementById("output").innerText = error;
    });
}
