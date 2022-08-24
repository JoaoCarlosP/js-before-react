// Nullish Coalescing Operator

// const idade = 0;

// document.body.innerText = 'Sua idade é: ' + (idade ?? 'Valor não informado')

/* -------------------------  */

//Objetos

const User = {
    id: 125631,
    name: 'Joao',
    idade: 19,
    address: {
        rua: 'Teste',
        number: 167
    }
}

// =========== Métodos em objetos ===========

// "in" verifica se existe tal propriedade dentro do objeto
document.body.innerText = ('name' in User)

// 'Object.keys' Retorna todas as chaves primarias dentro do objeto
document.body.innerText = Object.keys(User)

// 'Object.value' Retorna toddos os valores de dentro do objeto
document.body.innerText = Object.values(User)

// JSON.stringify transforma o objeto em uma string
document.body.innerText = JSON.stringify(User)

// Object.entries retorna um vetor, sendo cada valor do indice, um novo vetor com a propriedade e valor do objeto [["id", 13151], ["name", "joao"] ......etc  ]
document.body.innerText = JSON.stringify(Object.entries(User))




// DESESTRUTURAÇÃO => Jogar atributos de objeto em uma variavel

//const adress = User.address         //comumente usado
const { address, idade } = User       //desestruturação
document.body.innerText = JSON.stringify({address, idade})

//------------------------------------------------

// Desestruturação - Renomeando um atributo
const { idade: age } = User     

document.body.innerText = JSON.stringify({age})

//------------------------------------------------

// Desestruturação - Adicionando uma propriedade e 'setando-a'

const { nickname = 'omanojao' } = User   

document.body.innerText = JSON.stringify({nickname})

//------------------------------------------------

// Desestruturação - Em funções

function mostrarIdade({ idade }){
    return idade;
}
document.body.innerText = mostrarIdade(User)

// Rest operator => Pegar resto das propriedades não selecionadas

const { name: nome, id, ...rest } = User

document.body.innerText = JSON.stringify(rest)

//Desestruturação com array
const array = [1, 2, 5, 10, 120, 150]

const [first, second, ...resto] = array
document.body.innerText = JSON.stringify({first, second, resto})


