//Selecionar elementos
let input = document.querySelector('input#input')
let lista = document.querySelector('select#seltab')
let divOutput = document.querySelector('div#div3')

//criar lista
let addNumbers = [];

//criar função 
function adicionar() {
    //pegando o valor do input e criando variavel para checagem se o numero existe dentro do array
    let valueInput = Number(input.value)
    let existe = null
    //rodando o array para checar se o numero ja esta no array
    for (let c = 0; c < addNumbers.length; c++) {
        if (valueInput == addNumbers[c]) {
            existe = true
        }
    }

    //checagem de numero entre 1 e 100, input vazio e se numero ja existe no array
    if ((input.value.length == 0) || (valueInput < 1 || valueInput > 100) || (existe == true)) {
        alert('Valor invalido ou ja encontrado na lista')
    } else {

        //adicionando valor do input ao array e organizando a ordem
        addNumbers.push(valueInput)
        addNumbers.sort((a, b) => a - b)

        //limpar lista antes de preenchela denovo
        lista.textContent = ''

        //criar elementos e adicionar a tela o numeros do array 
        for (let i = 0; i < addNumbers.length; i++) {
            let option = document.createElement('option')
            option.text += `Valor ${addNumbers[i]} Adicionado`
            lista.appendChild(option)

        }
        //limpar div de apresentacao
        divOutput.textContent = ''
    }

}

//function do botao de finalizar
function finalizar() {
    if (addNumbers.length == 0) {
        alert('Adiocione valores a lista antes de finalizar')

    }  else {
        //limpar lista de apresentacao
        divOutput.textContent = ''
        //total de numeros dentro do array
        //criaçao das variaveis
        let paragrafo1 = document.createElement('p')
        let total = addNumbers.length


        paragrafo1.textContent = `Ao todo, temos ${total} ${total === 1 ? 'número cadastrado' : 'números cadastrados'}`
        divOutput.appendChild(paragrafo1)

        //soma de todos numeros do array
        let soma = 0
        for (let c in addNumbers) {
            soma += addNumbers[c]

        }
        let paragrafo2 = document.createElement('p')
        paragrafo2.textContent = `Somando todos valores, temos ${soma}.`
        divOutput.appendChild(paragrafo2)


        //O maior valor
        c = 0
        let maior = 0
        for (let c in addNumbers) {
            if (maior < addNumbers[c]) {
                maior = addNumbers[c]
            }
        }

        let paragrafo3 = document.createElement('p')
        paragrafo3.textContent = `O maior valor informado foi ${maior}.`
        divOutput.appendChild(paragrafo3)

        //o menor valor
        c = 0
        let menor = addNumbers[0]
        for (let c in addNumbers) {
            if (menor > addNumbers[c]) {
                menor = addNumbers[c]
            }
        }
        let paragrafo4 = document.createElement('p')
        paragrafo4.textContent = `O menor valor informado foi ${menor}.`
        divOutput.appendChild(paragrafo4)

        //a media dos valores
        let media = soma / addNumbers.length
        let paragrafo5 = document.createElement('p')
        paragrafo5.textContent = `A media dos valores digitados é ${media}.`
        divOutput.appendChild(paragrafo5)
    }
}

