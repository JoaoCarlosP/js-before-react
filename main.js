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


// ====== short syntax ======
//  Quando  a propriedade tem o mesmo nome da variavel atribuid
//  usa-se short syntax

{
    const age = 15
    const name = 'Joao'

    const user = {
        age,    //mesmo que 'age = age'
        name
    }

    document.body.innerText = JSON.stringify(user)
}


// ========= Optional Chaining ========
{
    const User = {
        id: 125631,
        name: 'Joao',
        age: 19,
        address: {
            street: 'Rua teste',
            number: 167,
            zip: {
                code: 16089100,
                city: 'San Francisco'
            },
            showFullAddress() {
                return 'ok';
            }
        }
    }

    // ------> Verificação da existencia de um valor

    // document.body.innerText = User.address 
    //     ? User.address.zip
    //         ? User.address.zip.code
    //         :'Não informado'
    //     :'Não informado'

    // A outra opção mais 'simples' seria o optional chaining, juntado com Nullish Coalescing
    document.body.innerText = User.address?.zip?.city ?? 'Não informado'

    //Nesse caso, verifica se a função existe, se existir, ele a chama, caso contrário, retorna undefined
    document.body.innerText = User.address?.showFullAddress?.()

    // Dessa forma, também é possível procurar propriedades especifica em objetos
    // Caso ela não exista, retornará undefined
    const key = 'street'
    document.body.innerText = User.address[key]
}

document.body.innerText = '' //Limpando o documento

// =============== MÉTODOS EM ARRAY ===========

// Importantes => .map, .filter, .every, .some, .find, .findIndex, .reduce

{
    const array = [ 1, 2, 3, 4, 5, 6 ]

    //Maneiras de percorres array
    // for( const i of array ){
    //     document.body.innerText += i
    // }

    // array.forEach(item => {
    //     document.body.innerText += item
    // })

    // --------> map
    // O que difere o .map do forEach é que com o map, é que com o map é possivel
    // fazer retornos para um novo array, com o forEach não!
    const novoArray = array.map(item => {
        return item * 2
    })
    // document.body.innerText += JSON.stringify(novoArray)
    
    // --------> filter
    
    // Basicamente filtra apenas os valores dado uma condição
    const arrayFilter = array
        .filter(item => (item % 2 === 0))
        .map(item => item * 10) //Multiplicando os selected por 10

    // document.body.innerText += JSON.stringify(arrayFilter)

    // -------> every

    // Retorna true se todos os itens satisfazerem uma condição
    const todosOsItensSaoNumeros = array
        .every(item => typeof item === 'number')

    document.body.innerText += JSON.stringify(todosOsItensSaoNumeros)
}

