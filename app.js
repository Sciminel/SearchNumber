const valeurInput = document.querySelector('.nombre');
const btn = document.querySelector('.search');
const btnRestart = document.querySelector('.restart');
const nombreTape = document.querySelector('.number');
const txtValeur = document.querySelector('.txt-indice');
const nbChance = document.querySelector('.nb-chance');

let numAChercher = Math.floor((Math.random()* 100) + 1);
let compteur = 5;

console.log(numAChercher);
console.log(valeurInput.value);


btn.addEventListener('click', () => {

    if(numAChercher > valeurInput.value){
        nombreTape.classList.add('nope');
        nombreTape.innerText = valeurInput.value
        txtValeur.innerText = 'Le nombre est plus grand';
        compteur--;
    }else if(numAChercher < valeurInput.value){
        nombreTape.classList.add('nope');
        nombreTape.innerText = valeurInput.value
        txtValeur.innerText = 'Le nombre est plus petit';
        compteur--;
    }else if(numAChercher == valeurInput.value){
        nombreTape.classList.remove('nope');
        nombreTape.classList.add('yes');
        nombreTape.innerText = valeurInput.value
        txtValeur.innerText = "C'est exact ! Bravo !";
        valeurInput.disabled = true;
    }else if(isNaN(numAChercher) == true){
        txtValeur.innerText = "Ce n'est pas un nombre..";
        compteur--;
    }else{
        txtValeur.innerText = "Je ne comprend pas la valeur que tu viens d'inserer..";
        compteur--;
    }
    nbChance.innerText = `il vous reste ${compteur} chance`;
    valeurInput.value = '';
    if(compteur === 0){
        txtValeur.innerText = `Tu as utilisé toutes tes chances, le nombre exact était : ${numAChercher}`;
        nombreTape.innerText = numAChercher;
        valeurInput.disabled = true;

    }

})

btnRestart.addEventListener('click', (e) => {
    val = Math.floor((Math.random()* 100) + 1);
    numAChercher = val;
    valeurInput.disabled = false;
    nombreTape.classList.remove('yes', 'nope');
    nombreTape.innerText = ''
    txtValeur.innerText = "";
    nbChance.innerText = ``;

    compteur = 5;
})
