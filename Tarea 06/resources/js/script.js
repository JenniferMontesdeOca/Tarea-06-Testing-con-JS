document.addEventListener("DOMContentLoaded", function () {
    let rollButton = document.getElementById("rollButton");

    if (rollButton) {
        rollButton.addEventListener("click", function () {
            let userName = document.getElementById('userName').value.trim();
            let greeting = userName ? `¡Hola, ${userName}!` : "¡Hola!";

            let dice1 = Math.floor(Math.random() * 6) + 1;
            let dice2 = Math.floor(Math.random() * 6) + 1;
            let sum = dice1 + dice2;

            let resultMessage;
            if (sum === 2) {
                resultMessage = "¡Doble uno! Mala suerte.";
            } else if (sum === 7 || sum === 11) {
                resultMessage = "¡Suerte! Has ganado esta ronda.";
            } else if (dice1 === dice2) {
                resultMessage = "¡Doble! Tienes un turno extra.";
            } else {
                resultMessage = "Nada especial, ¡intenta de nuevo!";
            }

            document.getElementById('output').innerText = `${greeting}\n🎲 Dado 1: ${dice1}, Dado 2: ${dice2}\n${resultMessage}`;
        });
    } else {
        console.error("El botón con id='rollButton' no se encontró en el DOM.");
    }
});
