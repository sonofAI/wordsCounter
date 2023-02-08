let text = document.getElementById("text");
let count = document.getElementById("word-count");
let uniqueness = document.getElementById("unique-percentage");

count.innerText = "Words: 0";
uniqueness.innerText = "Unique words: 0%";

let allWords = [];
let uniqueWords = [];

text.addEventListener("keyup", () => {
    allWords = text.value.trim().replace( /[^a-zA-Z ]/g , " ").replace(/ +/g, " ").split(" ");
    allWords = allWords.map(s => s.toLowerCase());
    count.innerText = `Words: ${allWords.length}`;
    uniqueWords = [... new Set(allWords)];
    let percentage = (uniqueWords.length / allWords.length * 100).toFixed(1);
    uniqueness.innerText = `Unique words: ${percentage}%`;
});

window.onload = function() {
    document.getElementById("text").value = "";
}
