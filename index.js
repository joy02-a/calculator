const buttons = document.querySelectorAll('.buttons')
const display = document.querySelector('h1')
buttons.forEach(function(button){
    button.addEventListener('click',(e)=>{
        if(e.target.id === "clearAll"){
            display.innerHTML = ''
        }
        else if(e.target.id === "rem"){
            display.innerHTML += "%"
        }
        else if(e.target.id === "clear_one"){
            display.innerHTML = display.innerHTML.slice(0, -1)
        }
        else if(e.target.id === "div"){
            display.innerHTML += '/'
        }
        else if(e.target.id === "seven"){
            display.innerHTML += "7"
        }
        else if(e.target.id === "eight"){
            display.innerHTML += '8'
        }
        else if(e.target.id === "nine"){
            display.innerHTML += '9'
        }
        else if(e.target.id === "mul"){
            display.innerHTML += '*'
        }
        else if(e.target.id === "four"){
            display.innerHTML += '4'
        }
        else if(e.target.id === "five"){
            display.innerHTML += '5'
        }
        else if(e.target.id === "six"){
            display.innerHTML += '6'
        }
        else if(e.target.id === "sub"){
            display.innerHTML += '-'
        }
        else if(e.target.id === "one"){
            display.innerHTML += '1'
        }
        else if(e.target.id === "two"){
            display.innerHTML += '2'
        }
        else if(e.target.id === "three"){
            display.innerHTML += '3'
        }
        else if(e.target.id === "add"){
            display.innerHTML += '+'
        }
        else if(e.target.id === "d_zero"){
            display.innerHTML += '00'
        }
        else if(e.target.id === "zero"){
            display.innerHTML += '0'
        }
        else if(e.target.id === "dot"){
            display.innerHTML += '.'
        }
        else if(e.target.id === "eq"){
            display.innerHTML = eval(display.innerHTML)
        }
    })
})
