
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}

document.getElementById('length').addEventListener('change', charLength)


function generatePassword(length) {
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*_-"
    let password = " "
    let uppercase = document.getElementById("uppercase")
    let lowercase = document.getElementById("lowercase")
    let numbers = document.getElementById("numbers")
    let symbols = document.getElementById("symbols")

    if(uppercase.checked && lowercase.checked && numbers.checked && symbols.checked){ // 1 TO 4
        charactes = values.slice(0,72)
    }
    else if((uppercase.checked) && lowercase.checked && numbers.checked){ // 1 TO 3
        charactes = values.slice(0,62)
    }
    else if((uppercase.checked) && lowercase.checked){ // 1 and 2
        charactes = values.slice(0,52)
    }
    else if((uppercase.checked) && lowercase.checked){ // 1 and 3
        charactes = values.slice(0,26) && values.slice(26,52)
    }
    else if((uppercase.checked) && lowercase.checked){ // 1 and 4
        charactes = values.slice(0,26) && values.slice(62,72)
    }
    else if(uppercase.checked) { // 1
        charactes = values.slice(0,26)
    }
    else if(lowercase.checked){ // 2
        charactes = values.slice(26,52)
    }
    else if(numbers.checked){ // 3
        charactes = values.slice(52,62)
    }
    else if(symbols.checked){ // 4
        charactes = values.slice(62,72)
    }

    for(let i = 0; i < length; i++){
        password += charactes.charAt(Math.floor(Math.random() * charactes.length))
    }
    
    document.getElementById("password__result").value = password
}

function passgenerator() {
    generatePassword(charLength())
}


    