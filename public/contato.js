const bolas_Mov1 = document.getElementById('bola_1');
const bolas_Mov2 = document.getElementById('bola_2');
const bolas_Mov3 = document.getElementById('bola_3');
const bolas_Mov4 = document.getElementById('bola_4');
const bolas_Mov5 = document.getElementById('bola_5');

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

window.addEventListener('keydown', function() {
    var tecla = event.key;
    
    if (tecla == 'a') {
        bolas_Mov1.classList.add('bola1Click');
        bolas_Mov1.classList.remove('bolaNormal');

        posiçãoColuna1 = bolaMov1.getBoundingClientRect().y+ bolaMov1.getBoundingClientRect().height;

        if (condition) {
            
        }
        console.log(posiçãoColuna1)
    }
    if (tecla == 's') {
        bolas_Mov2.classList.add('bola1Click');
        bolas_Mov2.classList.remove('bolaNormal');
    }
    if (tecla == 'd') {
        bolas_Mov3.classList.add('bola1Click');
        bolas_Mov3.classList.remove('bolaNormal');
    }
    if (tecla == 'f') {
        bolas_Mov4.classList.add('bola1Click');
        bolas_Mov4.classList.remove('bolaNormal');
    }
    if (tecla == 'g') {
        bolas_Mov5.classList.add('bola1Click');
        bolas_Mov5.classList.remove('bolaNormal');
    }
})



// document.addEventListener("click", function(evt) {
//   let elemento = evt.target;
//   let DOMRect_q = elemento.getBoundingClientRect();

//   posx.innerHTML = `posx: ${DOMRect_q.x};`;
//   posy.innerHTML = `posy: ${DOMRect_q.y};`;
//   largura.innerHTML = `largura: ${DOMRect_q.width};`;
//   altura.innerHTML = `altura: ${DOMRect_q.height};`;
// });


window.addEventListener('keyup', function() {
    var tecla = event.key;
    
    if (tecla == 'a') {
        bolas_Mov1.classList.remove('bola1Click');
        bolas_Mov1.classList.add('bolaNormal');

    }
    if (tecla == 's') {
        bolas_Mov2.classList.remove('bola1Click');
        bolas_Mov2.classList.add('bolaNormal');
    }
    if (tecla == 'd') {
        bolas_Mov3.classList.remove('bola1Click');
        bolas_Mov3.classList.add('bolaNormal');
    }
    if (tecla == 'f') {
        bolas_Mov4.classList.remove('bola1Click');
        bolas_Mov4.classList.add('bolaNormal');
    }
    if (tecla == 'g') {
        bolas_Mov5.classList.remove('bola1Click');
        bolas_Mov5.classList.add('bolaNormal');
    }
})



