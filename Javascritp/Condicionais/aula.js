let precoGasolina = 6.66;
let precoEtanol = 5.79;
let tipoCombustivel = 'Etanol';
let gastoMedio = 10;
let distancia = 100;
let valorGastoViagem;

if (tipoCombustivel == 'Gasolina'){     
    valorGastoViagem = (distancia/gastoMedio) * precoGasolina;
    console.log('Com gasolina o valor foi '+ valorGastoViagem)
}
else {
    valorGastoViagem = (distancia/gastoMedio) * precoEtanol;
    console.log('Com etanol o valor foi ' + valorGastoViagem);
}
