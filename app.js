// variables
let numeroSecreto;
let numeroDeUsuario = 0;
let intentos = 1;
let palabraVeces = "intento";

// lógica
numeroSecreto = Math.floor(Math.random() * 10) + 1;
console.log(`Numero secreto: ${numeroSecreto}`);

numeroDeUsuario = prompt("Digite un número entre 1 e 10");
console.log(`Numero de usuario ${numeroDeUsuario}`);

while (numeroDeUsuario != numeroSecreto) {

    if (numeroDeUsuario == numeroSecreto) {
        alert(`Felicidades, has acertado el número secreto en ${intentos} ${palabraVeces}`);
        break;
    }
    else if (numeroDeUsuario < numeroSecreto) {
        alert("El número secreto es mayor que " + numeroDeUsuario);
        numeroDeUsuario = prompt("Inténtalo de nuevo, te quedan " + (3 - intentos) + " intentos");
        intentos++;
        palabraVeces = "intentos";

    }
    else if (numeroDeUsuario > numeroSecreto) {
        alert("El número secreto es menor que " + numeroDeUsuario);
        numeroDeUsuario = prompt("Inténtalo de nuevo, te quedan " + (3 - intentos) + " intentos");
        intentos++;
        palabraVeces = "intentos";

    }
    else  (intentos == 3); {
        alert(`Haz llegado al numero maximo de intentos, el numero secreto era ${numeroSecreto}`);
        break;
    }
}