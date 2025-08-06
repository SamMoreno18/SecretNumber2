// variables
let SecretNumber = Math.floor(Math.random() * 10) + 1;
let intentos = 0;
let userNum = 0;
let palabraVeces = "intento";

console.log(`Número secreto: ${SecretNumber}`);

// primer intento
userNum = parseInt(prompt("Digite un número entre 1 y 10"));

while (userNum !== SecretNumber) {
    if (userNum < SecretNumber) {
        alert(`El número secreto es mayor que ${userNum}`);
    } else {
        alert(`El número secreto es menor que ${userNum}`);
    }

    intentos++;
    palabraVeces = "intentos";

    if (intentos >= 3) {
        alert("Lo siento, has agotado tus intentos. El número secreto era " + SecretNumber);
        break;
    }

    userNum = parseInt(prompt("Inténtalo de nuevo, te quedan " + (3 - intentos) + " intentos"));
}

if (userNum === SecretNumber) {
    alert(`¡Felicidades! Has acertado el número secreto en ${intentos} ${palabraVeces}.`);
}
