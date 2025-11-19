const inputone = document.getElementById('inputone')
const inputtwo = document.getElementById('inputtwo')
const btn = document.getElementById('btn')
const output = document.getElementById('output')
btn.addEventListener('click', (e) => {
    e.preventDefault()
    const number1 = Number(inputone.value)
    const number2 = Number(inputtwo.value)
    let result = ''
    if (isNaN(number1) && isNaN(number2)){
        result = 'Ошибки в обоих полях'
    }
    if(isNaN(number1) && !isNaN(number2)){
        result ='Ошибка в первом поле'
    }
    if (!isNaN(number1) && isNaN(number2)){
        result = 'ошибка во втором поле'
    }
    if (!isNaN(number1) && !isNaN(number2)){
        result = `Результат = ${number1 + number2}`
    }
    output.innerText = result
})