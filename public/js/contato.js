// Variáveis de controle
var alturaTabuleiro = 800; // Altura do tabuleiro
var time = 0;

//Variaveis para o jogo
var pontuação = 0;
var multiplicador = 1;
var velocidade = 9; 
var velocidadePausa =0
var pause = false;
var combo = 0 
     
//Variavel para inicio do jogo
var inicio = true;

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
// var bolaMov6 = document.getElementById("bolaMov6")
// var bolaMov7 = document.getElementById("bolaMov7")
// var bolaMov8 = document.getElementById("bolaMov8")
// var bolaMov9 = document.getElementById("bolaMov9")
// var bolaMov10 = document.getElementById("bolaMov10")

var posiçãoColuna1 = 0
var posiçãoColuna2 = 0
var posiçãoColuna3 = 0
var posiçãoColuna4 = 0
var posiçãoColuna5 = 0

//Iniciar o evento
window.addEventListener("click", inicia);

//Deixando a bola invisivel
bolaMov1.classList.remove('bolaMove1');
bolaMov2.classList.remove('bolaMove2');
bolaMov3.classList.remove('bolaMove3');
bolaMov4.classList.remove('bolaMove4');
bolaMov5.classList.remove('bolaMove5');
// bolaMov6.classList.remove('bolaMove6');
// bolaMov7.classList.remove('bolaMove7');
// bolaMov8.classList.remove('bolaMove8');
// bolaMov9.classList.remove('bolaMove9');
// bolaMov10.classList.remove('bolaMove10');


function inicia() {
    
    if (inicio == true) {
      //Deixando a bola visivel para o jogador
    bolaMov1.classList.add('bolaMove1');
    bolaMov2.classList.add('bolaMove2');
    bolaMov3.classList.add('bolaMove3');
    bolaMov4.classList.add('bolaMove4');
    bolaMov5.classList.add('bolaMove5');
    // bolaMov6.classList.add('bolaMove6');
    // bolaMov7.classList.add('bolaMove7');
    // bolaMov8.classList.add('bolaMove8');
    // bolaMov9.classList.add('bolaMove9');
    // bolaMov10.classList.add('bolaMove10');
    

    posicaoAleatoria = Math.random()*150 - 150;
    bolaMov1.style.left = '22.5px';
    bolaMov1.style.top =  `${posicaoAleatoria}px`;

    posicaoAleatoria = Math.random()*150 - 300;
    bolaMov2.style.left = '142.5px';
    bolaMov2.style.top = `${posicaoAleatoria}px`;
    
    posicaoAleatoria = Math.random()*150 - 450;
    bolaMov3.style.left = '262.5px';
    bolaMov3.style.top = `${posicaoAleatoria}px`;

    posicaoAleatoria = Math.random()*150 - 650;
    bolaMov4.style.left = '382.5px';
    bolaMov4.style.top = `${posicaoAleatoria}px`;

    posicaoAleatoria = Math.random()*150 - 800;
    bolaMov5.style.left = '502.5px';
    bolaMov5.style.top = `${posicaoAleatoria}px`;




    // posicaoAleatoria = Math.random()*150 - 500;
    // bolaMov6.style.left = '22.5px';
    // bolaMov6.style.top =  `${posicaoAleatoria}px`;

    // posicaoAleatoria = Math.random()*150 - 600;
    // bolaMov7.style.left = '142.5px';
    // bolaMov7.style.top = `${posicaoAleatoria}px`;
    
    // posicaoAleatoria = Math.random()*150 - 200;
    // bolaMov8.style.left = '262.5px';
    // bolaMov8.style.top = `${posicaoAleatoria}px`;

    // posicaoAleatoria = Math.random()*150 - 350;
    // bolaMov9.style.left = '382.5px';
    // bolaMov9.style.top = `${posicaoAleatoria}px`;

    // posicaoAleatoria = Math.random()*150 - 500;
    // bolaMov10.style.left = '502.5px';
    // bolaMov10.style.top = `${posicaoAleatoria}px`;
    
    // Inicia animação
    time = setInterval(movimentar, 20);  
    } 
    inicio = false;
}


function movimentar() {
    // Atualiza bolaMov1
    var topAtual1 = parseFloat(bolaMov1.style.top); // Converte a string para número
    if (topAtual1 >= (alturaTabuleiro)) {
        posicaoAleatoria = Math.random()*75 - 100;
        bolaMov1.style.top =  `${posicaoAleatoria}px`; // Volta para o topo
        multiplicador = 1;
        combo = 0;
        velocidade = 9
        
    } else {
        bolaMov1.style.top = (topAtual1 + velocidade) + "px"; // Soma e depois adiciona "px"
    }

    // Atualiza bolaMov2
    var topAtual2 = parseFloat(bolaMov2.style.top);
    if (topAtual2 >= (alturaTabuleiro)) {
        posicaoAleatoria = Math.random()*75 - 500;
        bolaMov2.style.top = `${posicaoAleatoria}px`;
        multiplicador = 1;
        combo = 0;
        velocidade = 9
    } else {
        bolaMov2.style.top = (topAtual2 + velocidade) + "px";
    }

    // Atualiza bolaMov3
    var topAtual3 = parseFloat(bolaMov3.style.top);
    if (topAtual3 >= (alturaTabuleiro)) {
        posicaoAleatoria = Math.random()*75 - 750;
        bolaMov3.style.top = `${posicaoAleatoria}px`;
        multiplicador = 1;
        combo = 0;
        velocidade = 9
    } else {
        bolaMov3.style.top = (topAtual3 + velocidade) + "px";
    }

    // Atualiza bolaMov4
    var topAtual4 = parseFloat(bolaMov4.style.top);
    if (topAtual4 >= (alturaTabuleiro)) {
        posicaoAleatoria = Math.random()*75 - 400;
        bolaMov4.style.top = `${posicaoAleatoria}px`;
        multiplicador = 1;
        combo = 0;
        velocidade = 9
    } else {
        bolaMov4.style.top = (topAtual4 + velocidade) + "px";
    }

    // Atualiza bolaMov5
    var topAtual5 = parseFloat(bolaMov5.style.top);
    if (topAtual5 >= (alturaTabuleiro)) {
        posicaoAleatoria = Math.random()*75 - 300;
        bolaMov5.style.top = `${posicaoAleatoria}px`;
        multiplicador = 1;
        combo = 0;
        velocidade = 9
    } else {
        bolaMov5.style.top = (topAtual5 + velocidade) + "px";
    }

    // Atualiza bolaMov6
    // var topAtual6 = parseFloat(bolaMov6.style.top); // Converte a string para número
    // if (topAtual6 >= alturaTabuleiro) {
    //     posicaoAleatoria = Math.random()*75 - 100;
    //     bolaMov6.style.top =  `${posicaoAleatoria}px`;
    //     multiplicador = 1;
    //     combo = 0;
    //     velocidade = 9 // Volta para o topo
        
    // } else {
    //     bolaMov6.style.top = (topAtual6 + velocidade) + "px"; // Soma e depois adiciona "px"
    // }

    // // Atualiza bolaMov7
    // var topAtual7 = parseFloat(bolaMov7.style.top);
    // if (topAtual7 >= alturaTabuleiro) {
    //     posicaoAleatoria = Math.random()*75 - 500;
    //     bolaMov7.style.top = `${posicaoAleatoria}px`;
    //     multiplicador = 1;
    //     combo = 0;
    //     velocidade = 9
    // } else {
    //     bolaMov7.style.top = (topAtual7 + velocidade) + "px";
    // }

    // // Atualiza bolaMov8
    // var topAtual8 = parseFloat(bolaMov8.style.top);
    // if (topAtual8 >= alturaTabuleiro) {
    //     posicaoAleatoria = Math.random()*75 - 750;
    //     bolaMov8.style.top = `${posicaoAleatoria}px`;
    //     multiplicador = 1;
    //     combo = 0;
    //     velocidade = 9
    // } else {
    //     bolaMov8.style.top = (topAtual8 + velocidade) + "px";
    // }

    // // Atualiza bolaMov9
    // var topAtual9 = parseFloat(bolaMov9.style.top);
    // if (topAtual9 >= alturaTabuleiro) {
    //     posicaoAleatoria = Math.random()*75 - 400;
    //     bolaMov9.style.top = `${posicaoAleatoria}px`;
    //     multiplicador = 1;
    //     combo = 0;
    //     velocidade = 9
    // } else {
    //     bolaMov9.style.top = (topAtual9 + velocidade) + "px";
    // }

    // // Atualiza bolaMov10
    // var topAtual10 = parseFloat(bolaMov10.style.top);
    // if (topAtual10 >= alturaTabuleiro) {
    //     posicaoAleatoria = Math.random()*75 - 300;
    //     bolaMov10.style.top = `${posicaoAleatoria}px`;
    //     multiplicador = 1;
    //     combo = 0;
    //     velocidade = 9
    // } else {
    //     bolaMov10.style.top = (topAtual10 + velocidade) + "px";
    // }

    id_pontos.innerHTML = pontuação;
    id_mult.innerHTML = multiplicador;
    id_combo.innerHTML = combo;

}

    


window.addEventListener('keydown', function() {
    var tecla = event.key;
    
    if (tecla == 'a' || tecla == 'A') {
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

        
        var posiçãoColuna1_inicial = bolaMov1.getBoundingClientRect().y;
        var posiçãoColuna1_final = bolaMov1.getBoundingClientRect().y+ bolaMov1.getBoundingClientRect().height;

        var posiçãoReceptor_inicial = receptor1.getBoundingClientRect().y;
        var posiçãoReceptor_final = receptor1.getBoundingClientRect().y+ receptor1.getBoundingClientRect().height;
        
        // var posiçãoColuna1_1_inicial = bolaMov6.getBoundingClientRect().y;
        // var posiçãoColuna1_1_final = bolaMov6.getBoundingClientRect().y+ bolaMov6.getBoundingClientRect().height;

        if (posiçãoColuna1_final > posiçãoReceptor_inicial && posiçãoColuna1_inicial < posiçãoReceptor_final) {
            posicaoAleatoria = Math.random()*150 - 150;
            bolaMov1.style.top = `${posicaoAleatoria}px`;
            pontuação += 100*multiplicador;
            combo++
            velocidade += 0.01
        } 
        // else if (posiçãoColuna1_1_final > posiçãoReceptor_inicial &&  posiçãoColuna1_1_inicial < posiçãoReceptor_final) {
        //     posicaoAleatoria = Math.random()*150 - 150;posicaoAleatoria = Math.random()*
        //     150 - 150;
        //     bolaMov6.style.top = `${posicaoAleatoria}px`;
        //     pontuação += 100*multiplicador;
        //     combo++
        // } 
        else {
            multiplicador = 1;
            combo = 0;
            velocidade = 9
        }
        
    }
    
    if (tecla == 's' || tecla == 'S') {
        receptor2.classList.add('bola1Click');
        receptor2.classList.remove('bolaNormal');

        var posiçãoColuna2_inicial = bolaMov2.getBoundingClientRect().y;
        var posiçãoColuna2_final = bolaMov2.getBoundingClientRect().y+ bolaMov2.getBoundingClientRect().height;

        // var posiçãoColuna2_2_inicial = bolaMov7.getBoundingClientRect().y;
        // var posiçãoColuna2_2_final = bolaMov7.getBoundingClientRect().y+ bolaMov7.getBoundingClientRect().height;

        var posiçãoReceptor_inicial = receptor2.getBoundingClientRect().y;
        var posiçãoReceptor_final = receptor2.getBoundingClientRect().y+ receptor2.getBoundingClientRect().height;     

        if (posiçãoColuna2_final > posiçãoReceptor_inicial && posiçãoColuna2_inicial < posiçãoReceptor_final) {
            posicaoAleatoria = Math.random()*150 - 150;
            bolaMov2.style.top = `${posicaoAleatoria}px`;
            pontuação += 100*multiplicador;
            combo++
            velocidade += 0.01
        } 
        // else if (posiçãoColuna2_2_final > posiçãoReceptor_inicial && posiçãoColuna2_2_inicial < posiçãoReceptor_final) {
        //     posicaoAleatoria = Math.random()*150 - 150;
        //     bolaMov7.style.top = `${posicaoAleatoria}px`;
        //     pontuação += 100*multiplicador;
        //     combo++
        // } 
        else {
            multiplicador = 1;
            combo = 0;
            velocidade = 9
        }

    }
    if (tecla == 'd' || tecla == 'D') {
        receptor3.classList.add('bola1Click');
        receptor3.classList.remove('bolaNormal');

        var posiçãoColuna3_inicial = bolaMov3.getBoundingClientRect().y;
        var posiçãoColuna3_final = bolaMov3.getBoundingClientRect().y+ bolaMov3.getBoundingClientRect().height;

        // var posiçãoColuna3_3_inicial = bolaMov8.getBoundingClientRect().y;
        // var posiçãoColuna3_3_final = bolaMov8.getBoundingClientRect().y+ bolaMov8.getBoundingClientRect().height;
        
        var posiçãoReceptor_inicial = receptor3.getBoundingClientRect().y;
        var posiçãoReceptor_final = receptor3.getBoundingClientRect().y+ receptor3.getBoundingClientRect().height;
        
        

        if (posiçãoColuna3_final > posiçãoReceptor_inicial && posiçãoColuna3_inicial < posiçãoReceptor_final) {
            posicaoAleatoria = Math.random()*150 - 150;
            bolaMov3.style.top = `${posicaoAleatoria}px`;
            pontuação += 100*multiplicador;
            combo++
            velocidade += 0.01
        } 
        // else if (posiçãoColuna3_3_final > posiçãoReceptor_inicial && posiçãoColuna3_3_inicial < posiçãoReceptor_final) {
        //     posicaoAleatoria = Math.random()*150 - 150;
        //     bolaMov8.style.top = `${posicaoAleatoria}px`;
        //     pontuação += 100*multiplicador;
        //     combo++
        // } 
        else {
            multiplicador = 1;
            combo = 0;
            velocidade = 9
        }

    }
    if (tecla == 'k' || tecla == 'K') {
        receptor4.classList.add('bola1Click');
        receptor4.classList.remove('bolaNormal');

        var posiçãoColuna4_inicial = bolaMov4.getBoundingClientRect().y;
        var posiçãoColuna4_final = bolaMov4.getBoundingClientRect().y+ bolaMov4.getBoundingClientRect().height;
        
        // var posiçãoColuna4_4_inicial = bolaMov9.getBoundingClientRect().y;
        // var posiçãoColuna4_4_final = bolaMov9.getBoundingClientRect().y+ bolaMov9.getBoundingClientRect().height;

        var posiçãoReceptor_inicial = receptor4.getBoundingClientRect().y;
        var posiçãoReceptor_final = receptor4.getBoundingClientRect().y+ receptor4.getBoundingClientRect().height;
        
        

        if (posiçãoColuna4_final > posiçãoReceptor_inicial && posiçãoColuna4_inicial < posiçãoReceptor_final) {
            posicaoAleatoria = Math.random()*150 - 150;
            bolaMov4.style.top = `${posicaoAleatoria}px`;
            pontuação += 100*multiplicador;
            combo++
            velocidade += 0.01
        } 
        // else if (posiçãoColuna4_4_final > posiçãoReceptor_inicial && posiçãoColuna4_4_inicial < posiçãoReceptor_final) {
        //     posicaoAleatoria = Math.random()*150 - 150;
        //     bolaMov9.style.top = `${posicaoAleatoria}px`;
        //     pontuação += 100*multiplicador;
        //     combo++
        // } 
        else {
            multiplicador = 1;
            combo = 0;
            velocidade = 9
        }
    }
    if (tecla == 'l' || tecla == 'L') {
        receptor5.classList.add('bola1Click');
        receptor5.classList.remove('bolaNormal');

        var posiçãoColuna5_inicial = bolaMov5.getBoundingClientRect().y;
        var posiçãoColuna5_final = bolaMov5.getBoundingClientRect().y+ bolaMov5.getBoundingClientRect().height;

        // var posiçãoColuna5_5_inicial = bolaMov10.getBoundingClientRect().y;
        // var posiçãoColuna5_5_final = bolaMov10.getBoundingClientRect().y+ bolaMov10.getBoundingClientRect().height;

        var posiçãoReceptor_inicial = receptor5.getBoundingClientRect().y;
        var posiçãoReceptor_final = receptor5.getBoundingClientRect().y + receptor5.getBoundingClientRect().height;
        
        

        if (posiçãoColuna5_final > posiçãoReceptor_inicial && posiçãoColuna5_inicial < posiçãoReceptor_final) {
            posicaoAleatoria = Math.random()*150 - 150;
            bolaMov5.style.top = `${posicaoAleatoria}px`;
            pontuação += 100*multiplicador;
            combo++
            velocidade += 0.01
        } 
        // else if (posiçãoColuna5_5_final > posiçãoReceptor_inicial && posiçãoColuna5_5_inicial < posiçãoReceptor_final) {
        //     posicaoAleatoria = Math.random()*150 - 150;
        //     bolaMov10.style.top = `${posicaoAleatoria}px`;
        //     pontuação += 100*multiplicador;
        //     combo++
        // }
         else {
            multiplicador = 1;
            combo = 0;
            velocidade = 9
        }

    }

    if (combo == 10 || combo == 20 || combo == 30 || combo == 50 || combo == 100) {
        multiplicador = multiplicador*2;
        velocidade = velocidade + velocidade*0.1;
    } 

    if (tecla == ' ') {
        if (pause == false) {
            velocidadePausa = velocidade;
            velocidade = 0;
            pause = true;
        } else {
            velocidade = velocidadePausa;
            pause = false;
        }
    }

    id_pontos.innerHTML = pontuação;
    id_mult.innerHTML = multiplicador;
    id_combo.innerHTML = combo;


})

window.addEventListener('keyup', function() {
    var tecla = event.key;
    
    
    if (tecla == 'a' || tecla == 'A') {
        receptor1.classList.remove('bola1Click');
        receptor1.classList.add('bolaNormal');

    }
    if (tecla == 's' || tecla == 'S') {
        receptor2.classList.remove('bola1Click');
        receptor2.classList.add('bolaNormal');
    }
    if (tecla == 'd' || tecla == 'D') {
        receptor3.classList.remove('bola1Click');
        receptor3.classList.add('bolaNormal');
    }
    if (tecla == 'k' || tecla == 'K') {
        receptor4.classList.remove('bola1Click');
        receptor4.classList.add('bolaNormal');
    }
    if (tecla == 'l' || tecla == 'L') {
        receptor5.classList.remove('bola1Click');
        receptor5.classList.add('bolaNormal');
    }
})



