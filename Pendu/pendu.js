/*
TODO list :
-Générer un mot aléatoire
-Afficher le mot en masquer ______
-Pouvoir proposer des lettres
-Afficher les lettres trouvées
-Gérer un nombre d'érreur max

*/
const allWords = ["fleur", "montagne", "ministre", "constitution", "dictateur", "corompre", "petrole", "prisonnier"];
const buttonPlay = document.getElementById("beginGame");
const wordToFindDiv = document.getElementById("wordToFindDiv");

buttonPlay.addEventListener("click", function() {
    beginGame();
})

function beginGame() {
    // Générer un mot au hazard
    wordToFindDiv.innerHTML = "";
    let wordToFind = generateWord();
    let wordToFindArray = Array.from(wordToFind);

    let table = document.createElement("table");
    let line = document.createElement("tr");
    wordToFindArray.forEach(letter => {
        // Créer un TD (case du tableau) par lettre
        let td = document.createElement("td");
        td.dataset.letter = letter;
        td.innerText = "_";
        line.appendChild(td);
    });
    table.appendChild(line);
    wordToFindDiv.appendChild(table);
}

function generateWord() {
    let indexWord = getRandomInt(allWords.length);
    return allWords[indexWord];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
