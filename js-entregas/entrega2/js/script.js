const possibilities = ['Piedra', 'Papel', 'Tijera']
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

const regex = '(piedra|papel|tijera)'



let form1 = document.getElementById("formulario1")
let form2 = document.getElementById("formulario2")

let game = document.getElementById("game")
let button = document.querySelector(".btn")
let button2 = document.querySelector(".btn2")
let name_1 = document.getElementById("inputNombre")
let number_matches = document.getElementById("matches")
let name_w = name_1.value
let qty_matches = number_matches.value
let selection = document.getElementById('inputselection').value
let random_possibility = possibilities[Math.floor(Math.random() * possibilities.length)]
let human_cont = document.getElementById('checkH')
let machine_cont = document.getElementById('checkM')
let win_user = 0
let win_machine = 0



button.addEventListener("click", () => {


    if (name_1.value.length != 0) {

        name_w = name_1.value
        console.log(name_w)
        if (number_matches.value.length <= 2) {
            qty_matches = number_matches.value
            console.log(qty_matches)
            form1.classList.toggle('not_active')
            form2.classList.toggle('not_active')
        } else { alert('selecciona cuantas partidas, o tienes miedito?') }
    } else {
        alert('que onda wey, escribe tu ... nombre')
    }
})


const human = document.getElementById("human")
const machine = document.getElementById("machine")
let objeto = {
    "Piedra": "./imgs/piedra.png",
    "Papel": "./imgs/papel.png",
    "Tijera": "./imgs/tijera.png"
}
function builtElement(src, container) {
    let img = document.createElement('img')
    img.setAttribute("src", src)
    container.appendChild(img)
}
function who_win(d_1, d_2) {
    let res = ''
    if (d_1 == d_2) {
        res = 'tie'
    } else if (d_1 == 'Piedra' && d_2 == 'Papel') {
        res = 'd_2'
    } else if (d_1 == 'Piedra' && d_2 == 'Tijera') {
        res = 'd_1'
    } else if (d_1 == 'Papel' && d_2 == 'Tijera') {
        res = 'd_2'
    } else if (d_1 == 'Papel' && d_2 == 'Piedra') {
        res = 'd_1'
    } else if (d_1 == 'Tijera' && d_2 == 'Papel') {
        res = 'd_1'
    } else if (d_1 == 'Tijera' && d_2 == 'Piedra') {
        res = 'd_2'
    } else { res = "queweada" }

    return res
}
function deletedGame (){
    human_cont.innerHTML=''
    machine_cont.innerHTML=''
    win_user =0
    win_machine = 0
    document.querySelector('.formulario_1').reset()
    name_1.value=''
    
    game.classList.toggle('not_active')
    form1.classList.toggle('not_active')
    

}



button2.addEventListener("click", () => {

    if (document.getElementById('inputselection').value.length > 6) {
        alert(`te tengo que decir todo ${name_w}? selecciona una pinche jugada`)
    } else {
        
        
        selection = possibilities.find(obj => obj == document.getElementById('inputselection').value)
        console.log(selection, 'test_')
        form2.classList.toggle('not_active')
        game.classList.toggle('not_active')
        human.setAttribute("src", objeto[selection])
        machine.setAttribute("src", objeto[random_possibility])
        winner = who_win(selection, random_possibility)

        
        


        if (winner == 'd_1') {
            builtElement("./imgs/check.png", human_cont)
            builtElement("./imgs/cross.png", machine_cont)
            win_user++
            setTimeout(()=>{
                alert( bad_phrases[Math.floor(Math.random() * bad_phrases.length)]+ ' '+ win_user + ' vs '+ win_machine)
            }, 500)
            
            
            
        } else if (winner == 'd_2') {
            builtElement("./imgs/check.png", machine_cont)
            builtElement("./imgs/cross.png", human_cont)
            win_machine++
            
            setTimeout(()=>{                
                alert( good_phrases[Math.floor(Math.random() * good_phrases.length)]+ ' '+ win_machine + ' vs '+ win_user)
            }, 500)
        }else if (winner == 'tie'){
            /* builtElement("./imgs/check.png", machine_cont)
            builtElement("./imgs/cross.png", human_cont) */

            setTimeout(()=>{                
                alert( tie_phrases[Math.floor(Math.random() * good_phrases.length)]+ ' '+ win_machine + ' vs '+ win_user)
            }, 500)
            
        }
        setTimeout(()=>{
            if (win_user < win_machine && (win_machine == qty_matches)){
                deletedGame ()
                alert(`te rompí la carita por ${win_machine - win_user} partidas de diferencia`)
                

            }else if (win_user > win_machine && (win_user == qty_matches)){
                deletedGame ()
                alert(`Para que no llores te dejé ganar esta vez por ${ win_user- win_machine} partidas de diferencia`)
            }else{
                game.classList.toggle('not_active')
                form2.classList.toggle('not_active')
                random_possibility = possibilities[Math.floor(Math.random() * possibilities.length)]
                document.querySelector('.formulario_2').reset()
            }
            
            
        }, 1000)
       



    }
    
    

    console.log(selection, random_possibility)
}

)




/*  

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
   
    if (win_user < matches && win_machine < matches){

        d_1 = possibilities[Math.floor(Math.random() * possibilities.length)];
        pre_d_2 = prompt("Para darte ventaja ya tengo mi selección, ¿cual es la tuya?:").toLowerCase();
        d_2= validar(pre_d_2)
    }
    console.log(`result: ${result}user: ${win_user}, seleccion ${d_2} vs machine ${win_machine} seleccion ${d_1}`)

    }
if (win_user < win_machine){
    alert(`te rompí la carita por ${win_machine - win_user} partidas de diferencia`)
}else{
    alert(`Para que no llores te dejé ganar esta vez por ${ win_user- win_machine} partidas de diferencia`)
}
 */

