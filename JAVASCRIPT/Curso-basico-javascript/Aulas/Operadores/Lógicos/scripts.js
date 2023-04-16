// E = &&, os 2 precisam ser verdade para ser verdade

serRico = true;
terSaude = true;
serRicoDeVerdade = serRico && terSaude;

console.log(serRicoDeVerdade);

// Ou = ||, somente 1 precisa ser verdade para ser verdade

comerChocolate = true;
comerChocotone = false;
serFeliz = comerChocolate || comerChocotone;

console.log(serFeliz);

// Não = !, negação da afirmação

serTriste = !serFeliz;

console.log(serTriste); // False pois serFeliz = true


