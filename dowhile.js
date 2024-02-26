// Declaração de uma matriz (array) contendo cinco elementos do tipo string;
var matriz = ["vetor1", "vetor2", "vetor3", "vetor4", "vetor5"];

// inicio da variável 'posicao' com o valor 0 para representar a posição atual na matri;
var posicao = 0; 

// Usando um loop 'while' para percorrer a matriz até o final;
while (posicao < matriz.length) { 
    // Imprimindo no console o elemento na posição atual da matriz;
    console.log(matriz[posicao]); 
    // Incrementando a posição para passar para o próximo elemento na próxima repetição ou seja a cada repetição do loop while, a variável posicao é aumentada em 1;
    posicao++; 
    // a linha baixo encerra o bloco while;
}
