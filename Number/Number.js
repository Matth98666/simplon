        // Je vous donne le générateur de nombres aléatoires compris entre 1 et 100.
        // La fonctionrandom donne un nombre compris entre 0 et 1. On le multiplie par 100 pour avoir 
        // un entier entre O et 1. On arrondit au plus bas et on ajoute 1.
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(randomNumber);

        // A vous de sélectionner les champs qui vont bien :
  
         // Les essais (liste des nombres entrés)
        const guesses = document.querySelector(".guesses");
       
        // Le dernier résultat
        const lastResult = document.querySelector(".lastResult");
  
      // Le commentaire indicatif (trop haut/bas)
        const lowOrHi = document.querySelector(".lowOrHi");
  
        // la proposition de l'utilisateur
        const guessSubmit = document.querySelector(".guessSubmit");
        const guessField = document.getElementById("guessField");
          // on initialise le compte des tentatives à 1
        let guessCount = 1;
        
        let resetButton;
  
        // la fonction qui contrôle les essais
        function checkGuess() {
          const userGuess = Number(guessField.value);
  // on l'affiche à partir d'un essai et on affiche le titre 'Previuos guesses'
          if (guessCount === 1) {
              
            guesses.textContent = 'Previous guesses: ';
          }
  
          guesses.textContent += userGuess + ' '; // on ajoute les essais successifs pour affichage
  
          // On teste si gagné ou perdu
          // si le chiffre est bon, c'est gagné on affiche sur fond vertun message de félicitations et
          // le jeu est terminé
          if (userGuess === randomNumber) {
            lastResult.textContent = 'Congratulations! You got it right!';
            lastResult.style.backgroundColor = 'green';
            lowOrHi.textContent = '';
            setGameOver();
        
  
           // ou bien si le compteur des essais arrive à 10 : fin du jeu, en rouge 
          } else if (guessCount === 10) {
            lastResult.textContent = 'Game Over';
            lastResult.style.color = 'red';
            lastResult.style.backgroundColor = 'black'
            setGameOver();
            // sinon, on affiche faux sur fond rouge
          } else {
            lastResult.textContent = 'False';
            lastResult.style.backgroundColor = 'red';
            // on dit à l'utilisateur s'il est au dessus ou au dessous du nombre cherché
            if(userGuess < randomNumber) {
              lowOrHi.textContent = 'Last guess was too low!' ;
            } else if( userGuess > randomNumber) {
              lowOrHi.textContent = 'Last guess was too high!';
            }
          }
          // On incrémente d'un le nombre d'essais
          guessCount++;
          // On vide le champ de saisie, et on lui donne le focus
          guessField.value = '';
          guessField.focus();
        }
  
        //on détecte le click sur le submit, et on appelle la fonction checkGuess
        guessSubmit.addEventListener('click', checkGuess);
  
        /*
        On écrit la fonction setGameOver qui désactive le champ de saisie et le bouton submit, 
        et qui crée un bouton reset "commencer un nouveau jeu".
        Ce bouton est rajouté au body, et on écoute l'événement 'click' sur ce bouton, en appelant la fonction
        resetGame
        */
        function setGameOver() {
          guessField.disabled = true;
          guessField.disabled = true;
          resetButton = document.createElement('button');
          resetButton.textContent = 'Begin a new game';
          document.body.appendChild(resetButton);
          resetButton.addEventListener('click', resetGame);
        }
  
        function resetGame() {
          guessCount = 1;
          const resetParas = document.querySelectorAll('.resultParas p');
          for (const resetPara of resetParas) {
            resetPara.textContent = '';
          }
          //Je vous laisse celle-ci qui initialise le jeu
          resetButton.parentNode.removeChild(resetButton);
          guessField.disabled = false;
          guessSubmit.disabled = false;
          guessField.value = '';
          guessField.focus();
          lastResult.style.backgroundColor = 'white';
          randomNumber = Math.floor(Math.random() * 100) + 1;
        }