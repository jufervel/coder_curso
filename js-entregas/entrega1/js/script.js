 
const possibilities = ['piedra', 'papel', 'tijera']
const good_phrases = [
    'A ver si juegas mejor ya que gané',
    'No vayas a llorar porque te gané',
    'Ay pobrecite, volvió a perder',
    'Debes aceptar que no te quiere como debes aceptar que gané' 
]
const bad_phrases = [
    'yi sii il mijir jigiindi, seehh ganaste',
    'Una que te regalo ganaste',
    'Arbitro! el VAR ahora! no pudo haber ganado',
    'esto no es posible, falta para River por que ganaste'    
]
const tie_phrases = [
    'asustade? empatamos',
    'ni pata ti ni para mi, empatamos',
    'la siguiente gano seguro ya que empatamos',
    'sehh sehh empate, jugá'
]
let random_possibility = possibilities[Math.floor(Math.random() * possibilities.length)];

const regex = '(piedra|papel|tijera)'

alert('Vamos a jugar piedra papel o tijera')

let matches = parseInt(prompt("Cuantas partidas debo ganarte para que aceptes que eres manco?: "));
    
while (matches == null || /\D/.test(matches) || matches == "") {
    matches = prompt("emm... un numero papirricky o mamirricky: ");
};
alert(`Ok queridite vamo\' a jugar al que gane: ${matches}`)
let value = prompt("Para darte ventaja ya tengo mi selección, ¿cual es la tuya?:").toLowerCase();

function validar(option){
    
    while (option.match(regex) == null){
        alert('que onda wachim, '+ option+ ' no es una opción')
        option = prompt("Escribe bien tu seleccion por amor a cristo Jesus:").toLowerCase()
        
    }
    
    return option.match(regex)[0]
}

value_validated = validar(value)

win_user = 0
win_machine = 0

function who_win(d_1, d_2){
    let res=''
    if (d_1 ==  d_2){
            res = 'tie'
        } else if ( d_1 == 'piedra' && d_2 == 'papel'){
            res = 'd_2'
        }else if ( d_1 == 'piedra' && d_2 == 'tijera'){
            res = 'd_1'
        }else if ( d_1 == 'papel' && d_2 == 'tijera'){
            res = 'd_2'
        }else if (d_1 == 'papel' && d_2 == 'piedra'){
            res = 'd_1'
        }else if (d_1 == 'tijera' && d_2 == 'papel'){
            res = 'd_1'
        }else if ( d_1 == 'tijera' && d_2 == 'piedra'){
            res = 'd_2'
        }else {res = "queweada"}
    
    return res
    }
    

d_1= random_possibility
d_2= value_validated 
while (win_user < matches && win_machine < matches){
      
    console.log(`data anntes de result: user: ${win_user} , seleccion d2 ${d_2} vs machine ${win_machine} seleccion d1 ${d_1}`) 
    
    let result= who_win(d_1, d_2);
    
    if (result =='d_1'){
        win_machine++
        alert( good_phrases[Math.floor(Math.random() * good_phrases.length)]+ ' '+ d_1 + ' vs '+ d_2)
    }else if (result == 'tie'){
        console.log('igual')
        alert( tie_phrases[Math.floor(Math.random() * tie_phrases.length)]+ ' '+ d_1 + ' vs '+ d_2)
    }else{
         win_user++
         alert( bad_phrases[Math.floor(Math.random() * bad_phrases.length)]+ ' '+ d_2 + ' vs '+ d_1)
        }
   console.log(`user: ${win_user}, seleccion ${d_2} vs machine ${win_machine} seleccion ${d_1}`)

    d_1 = possibilities[Math.floor(Math.random() * possibilities.length)];
    pre_d_2 = prompt("Para darte ventaja ya tengo mi selección, ¿cual es la tuya?:").toLowerCase();
    d_2= validar(pre_d_2)
    console.log(`result: ${result}user: ${win_user}, seleccion ${d_2} vs machine ${win_machine} seleccion ${d_1}`)

    }
if (win_user < win_machine){
    alert(`te rompí la carita por ${win_machine - win_user}`+ ' '+ d_2 + ' vs '+ d_1)
}else{
    alert(`para que no llores te dejé ganar ${win_machine - win_user} `+ d_2 + ' vs '+ d_1)
}


