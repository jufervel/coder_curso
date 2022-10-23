
let posibilidades = ['piedra', 'papel', 'tijera']

const regex = '(piedra|papel|tijera)'
let value = prompt("Vamos a jugar piedra papel o tijera\nescribe tu seleccion").toLowerCase().match(regex);

function validar(option){
    while (option == null){
        alert('que onda wachim, no es una opción')
        option = prompt("Vamos a jugar piedra papel o tijera \nescribe tu seleccion").toLowerCase().match(regex)
        
    }
    
    return option[0]
}

validar(value)
  