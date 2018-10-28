//Contagem regressiva da porcentagem da bateria
//Definição das variáveis
var count = new Number();
var count = 101
var temporizador

//função que liga lanterna e descarrega a bateria
function start(){

 if ((count - 1) >= 0){
    count -= 1;
    if (count == 0) {
       count = "00";
       tempo.innerText='00%';
       estado.innerText = 'DESLIGADA'
       return;
   }else if(count < 10){
       count = "0"+count;
   }
   tempo.innerText=count + '%';
   estado.innerText = 'LIGADA'
   temporizador = setTimeout('start();', 1000);
}
}
//função que desliga a lanterna e para de descarregar
function stop(){
  estado.innerText = 'DESLIGADA'
  clearTimeout (temporizador);
}
//função que troca a bateria
function reinicia(){
    count = 100
    stop();
    tempo.innerText = 100+'%'
    estado.innerText = 'DESLIGADA'

}
