// const el = document.querySelector("#text h1");
// const text = "Cabelos";
// const interval = 50;

// function showText(el, text, interval) {

//     const char = text.split("").reverse();

//     const typer = setInterval(() => {
        
//         if(!char.length) {
//             return clearInterval(typer);
//         }

//         const next = char.pop();

//         el.innerHTML += next;

//     }, interval)

// }

// showText(el, text, interval);

var div = document.querySelector('#text h1');
var textos = ['Baixe o APP.', 'Já pensou qual corte vai Hoje?', 'Agende seu Corte Agora', 'Vai um corte ai?'];

function escrever(str, done) {
    var char = str.split('').reverse();
    var typer = setInterval(function() {
        if (!char.length) {
            clearInterval(typer);
            return setTimeout(done, 500); // só para esperar um bocadinho
        }
        var next = char.pop();
        div.innerHTML += next;
    }, 120);
}

function limpar(done) {
    var char = div.innerHTML;
    var nr = char.length;
    var typer = setInterval(function() {
        if (nr-- == 0) {
            clearInterval(typer);
            return done();
        }
        div.innerHTML = char.slice(0, nr);
    }, 100);
}

function rodape(conteudos, el) {
    var atual = -1;
    function prox(cb){
        if (atual < conteudos.length - 1) atual++;
        else atual = 0;
        var str = conteudos[atual];
        escrever(str, function(){
            limpar(prox);
        });
    }
    prox(prox);
}
rodape(textos);