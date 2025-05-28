// Variáveis de controle
var alturaTabuleiro = 800; // Altura do tabuleiro
var tamanhoBola = 75;         // Tamanho da bola
var velocidade = 9;        // Velocidade das bolas
var larguraTabuleiro = 600;  // Largura do tabuleiro
var larguraColuna = larguraTabuleiro * 0.2; // Largura de cada coluna (120px)
var time = 0;


//capturando os elementos que vai ser usado
const receptor1 = document.getElementById('bola_1');
const receptor2 = document.getElementById('bola_2');
const receptor3 = document.getElementById('bola_3');
const receptor4 = document.getElementById('bola_4');
const receptor5 = document.getElementById('bola_5');

var bolaMov1 = document.getElementById("bolaMov1")
var bolaMov2 = document.getElementById("bolaMov2")
var bolaMov3 = document.getElementById("bolaMov3")
var bolaMov4 = document.getElementById("bolaMov4")
var bolaMov5 = document.getElementById("bolaMov5")

var posiçãoColuna1 = 0
var posiçãoColuna2 = 0
var posiçãoColuna3 = 0
var posiçãoColuna4 = 0
var posiçãoColuna5 = 0

var bolas = [];

//Iniciar o evento
window.addEventListener("click", inicia);

//Deixando a bola invisivel
bolaMov1.classList.remove('bolaMove1');
bolaMov2.classList.remove('bolaMove2');
bolaMov3.classList.remove('bolaMove3');
bolaMov4.classList.remove('bolaMove4');
bolaMov5.classList.remove('bolaMove5');


function inicia() {

    //Deixando a bola visivel para o jogador
    bolaMov1.classList.add('bolaMove1');
    bolaMov2.classList.add('bolaMove2');
    bolaMov3.classList.add('bolaMove3');
    bolaMov4.classList.add('bolaMove4');
    bolaMov5.classList.add('bolaMove5');
    

    bolaMov1.style.left = '22.5px';
    bolaMov1.style.top = '-75px';

    bolaMov2.style.left = '142.5px';
    bolaMov2.style.top = '-75px';

    bolaMov3.style.left = '262.5px';
    bolaMov3.style.top = '-75px';

    bolaMov4.style.left = '382.5px';
    bolaMov4.style.top = '-75px';

    bolaMov5.style.left = '502.5px';
    bolaMov5.style.top = '-75px';
    
    // Inicia animação
    time = setInterval(movimentar, 20);
}


function movimentar() {
    // Atualiza bolaMov1
    var topAtual1 = parseFloat(bolaMov1.style.top); // Converte a string para número
    if (topAtual1 >= alturaTabuleiro) {
        bolaMov1.style.top = '-75px'; // Volta para o topo
    } else {
        bolaMov1.style.top = (topAtual1 + velocidade) + "px"; // Soma e depois adiciona "px"
    }

    // Atualiza bolaMov2
    var topAtual2 = parseFloat(bolaMov2.style.top);
    if (topAtual2 >= alturaTabuleiro) {
        bolaMov2.style.top = '-75px';
    } else {
        bolaMov2.style.top = (topAtual2 + velocidade) + "px";
    }

    // Atualiza bolaMov3
    var topAtual3 = parseFloat(bolaMov3.style.top);
    if (topAtual3 >= alturaTabuleiro) {
        bolaMov3.style.top = '-75px';
    } else {
        bolaMov3.style.top = (topAtual3 + velocidade) + "px";
    }

    // Atualiza bolaMov4
    var topAtual4 = parseFloat(bolaMov4.style.top);
    if (topAtual4 >= alturaTabuleiro) {
        bolaMov4.style.top = '-75px';
    } else {
        bolaMov4.style.top = (topAtual4 + velocidade) + "px";
    }

    // Atualiza bolaMov5
    var topAtual5 = parseFloat(bolaMov5.style.top);
    if (topAtual5 >= alturaTabuleiro) {
        bolaMov5.style.top = '-75px';
    } else {
        bolaMov5.style.top = (topAtual5 + velocidade) + "px";
    }
}


var pontuação = 0
window.addEventListener('keydown', function() {
    var tecla = event.key;
    
    if (tecla == 'a') {
        receptor1.classList.add('bola1Click');
        receptor1.classList.remove('bolaNormal');


        // console.log('Bola em movimento')
        // console.log('Y inicial:' + posiçãoColuna1_inicial)
        // console.log('Y final:' + posiçãoColuna1_final)
        // console.log('Diferença:' + (posiçãoColuna1_final-posiçãoColuna1_inicial))
        // console.log('\n')

        // console.log('Bola em receptiva')
        // console.log('Y inicial:' + posiçãoReceptor_inicial)
        // console.log('Y final:' + posiçãoReceptor_final)
        // console.log('Diferença:' + (posiçãoReceptor_final - posiçãoReceptor_inicial))
        // console.log('\n')

        
        posiçãoColuna1_inicial = bolaMov1.getBoundingClientRect().y;
        posiçãoColuna1_final = bolaMov1.getBoundingClientRect().y+ bolaMov1.getBoundingClientRect().height;

        posiçãoReceptor_inicial = receptor1.getBoundingClientRect().y;
        posiçãoReceptor_final = receptor1.getBoundingClientRect().y+ receptor1.getBoundingClientRect().height;
        
        

        if (posiçãoColuna1_final > posiçãoReceptor_inicial && posiçãoColuna1_inicial < posiçãoReceptor_final) {
            bolaMov1.style.top = '-75px';
            pontuação += 100;
        }

        
    }
    if (tecla == 's') {
        receptor2.classList.add('bola1Click');
        receptor2.classList.remove('bolaNormal');

        posiçãoColuna2_inicial = bolaMov2.getBoundingClientRect().y;
        posiçãoColuna2_final = bolaMov2.getBoundingClientRect().y+ bolaMov2.getBoundingClientRect().height;

        posiçãoReceptor_inicial = receptor2.getBoundingClientRect().y;
        posiçãoReceptor_final = receptor2.getBoundingClientRect().y+ receptor2.getBoundingClientRect().height;
        
        

        if (posiçãoColuna2_final > posiçãoReceptor_inicial && posiçãoColuna2_inicial < posiçãoReceptor_final) {
            bolaMov2.style.top = '-75px';
            pontuação += 100;
        }

    }
    if (tecla == 'd') {
        receptor3.classList.add('bola1Click');
        receptor3.classList.remove('bolaNormal');

        posiçãoColuna3_inicial = bolaMov3.getBoundingClientRect().y;
        posiçãoColuna3_final = bolaMov3.getBoundingClientRect().y+ bolaMov3.getBoundingClientRect().height;

        posiçãoReceptor_inicial = receptor3.getBoundingClientRect().y;
        posiçãoReceptor_final = receptor3.getBoundingClientRect().y+ receptor3.getBoundingClientRect().height;
        
        

        if (posiçãoColuna3_final > posiçãoReceptor_inicial && posiçãoColuna3_inicial < posiçãoReceptor_final) {
            bolaMov3.style.top = '-75px';
            pontuação += 100;
        }

    }
    if (tecla == 'f') {
        receptor4.classList.add('bola1Click');
        receptor4.classList.remove('bolaNormal');

        posiçãoColuna4_inicial = bolaMov4.getBoundingClientRect().y;
        posiçãoColuna4_final = bolaMov4.getBoundingClientRect().y+ bolaMov4.getBoundingClientRect().height;

        posiçãoReceptor_inicial = receptor4.getBoundingClientRect().y;
        posiçãoReceptor_final = receptor4.getBoundingClientRect().y+ receptor4.getBoundingClientRect().height;
        
        

        if (posiçãoColuna4_final > posiçãoReceptor_inicial && posiçãoColuna4_inicial < posiçãoReceptor_final) {
            bolaMov4.style.top = '-75px';
            pontuação += 100;
        }
    }
    if (tecla == 'g') {
        receptor5.classList.add('bola1Click');
        receptor5.classList.remove('bolaNormal');

        posiçãoColuna5_inicial = bolaMov5.getBoundingClientRect().y;
        posiçãoColuna5_final = bolaMov5.getBoundingClientRect().y+ bolaMov5.getBoundingClientRect().height;

        posiçãoReceptor_inicial = receptor5.getBoundingClientRect().y;
        posiçãoReceptor_final = receptor5.getBoundingClientRect().y+ receptor5.getBoundingClientRect().height;
        
        

        if (posiçãoColuna5_final > posiçãoReceptor_inicial && posiçãoColuna5_inicial < posiçãoReceptor_final) {
            bolaMov5.style.top = '-75px';
            pontuação += 100;
        }

    }
})


window.addEventListener('keyup', function() {
    var tecla = event.key;
    
    if (tecla == 'a') {
        receptor1.classList.remove('bola1Click');
        receptor1.classList.add('bolaNormal');

    }
    if (tecla == 's') {
        receptor2.classList.remove('bola1Click');
        receptor2.classList.add('bolaNormal');
    }
    if (tecla == 'd') {
        receptor3.classList.remove('bola1Click');
        receptor3.classList.add('bolaNormal');
    }
    if (tecla == 'f') {
        receptor4.classList.remove('bola1Click');
        receptor4.classList.add('bolaNormal');
    }
    if (tecla == 'g') {
        receptor5.classList.remove('bola1Click');
        receptor5.classList.add('bolaNormal');
    }
})



