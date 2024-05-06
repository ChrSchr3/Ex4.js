//lista
lista_nomes = ['Amanda', 'Paulo', 'Miguel', 'Roxy', 'Bastião']
lista_sobrenome = ['Gastro', 'Juju', 'Kais', 'Voyer', 'Haas']
lista_cidade = ['Blumenau', 'Pomerode', 'Indaial', 'Penha', 'Apiuna']
lista_idade = ['19', '22', '30', '40', '10']
lista_cpf = [
  '001.001.001-11',
  '002.002.002-22',
  '003.003.003-33',
  '004.004.004-44',
  '005.005.005-55',
]

var saldo00 = 5
var saldo01 = 600
var saldo02 = 908
var saldo03 = 22500
var saldo04 = 195000
console.log(saldo01, saldo02, saldo03, saldo04, saldo00)

//soma
var soma1 = saldo00 + saldo01 + saldo02 + saldo03 + saldo04
console.log(soma1)
var mensagemsoma1 = `A soma de todos equivale a R$: ${soma1}`
console.log(mensagemsoma1)

//divisao
var divisao = soma1 / 5
console.log(divisao)
var mensagemdivisao = `A divisão equivale á R$: ${divisao}`
console.log(mensagemdivisao)

//mensagens
var mensagem01 = `Olá, ${lista_nomes[0]} ${lista_sobrenome[0]}, sua idade é de ${lista_idade[0]}, atualmente morando em ${lista_cidade[0]}, portadora do CPF: ${lista_cpf[0]}, seu saldo é de R$: ${saldo00}. `
if (saldo00 >= 100000) {
  console.log('Você é Milionario')
} else if (saldo00 >= 10000) {
  console.log('Você é Rico')
} else if (saldo00 >= 100) {
  console.log('Você é Bem de Vida')
} else if (saldo00 >= 0) {
  console.log('Você é pobre')
} else {
  console.log('Invalido')
}
console.log(mensagem01)
document.write(mensagem01)

var mensagem02 = `Olá, ${lista_nomes[1]} ${lista_sobrenome[1]}, sua idade é de ${lista_idade[1]}, atualmente morando em ${lista_cidade[1]}, portadora do CPF: ${lista_cpf[1]}, seu saldo é de R$: ${saldo01}. `
if (saldo01 >= 100000) {
  console.log('Você é Milionario')
} else if (saldo01 >= 10000) {
  console.log('Você é Rico')
} else if (saldo01 >= 100) {
  console.log('Você é Bem de Vida')
} else if (saldo01 >= 0) {
  console.log('Você é pobre')
} else {
  console.log('Invalido')
}
console.log(mensagem02)
//document.write(mensagem02)

var mensagem03 = `Olá, ${lista_nomes[2]} ${lista_sobrenome[2]}, sua idade é de ${lista_idade[2]}, atualmente morando em ${lista_cidade[2]}, portadora do CPF: ${lista_cpf[2]}, seu saldo é de R$: ${saldo02}. `
if (saldo02 >= 100000) {
  console.log('Você é Milionario')
} else if (saldo02 >= 10000) {
  console.log('Você é Rico')
} else if (saldo02 >= 100) {
  console.log('Você é Bem de Vida')
} else if (saldo02 >= 0) {
  console.log('Você é pobre')
} else {
  console.log('Invalido')
}
console.log(mensagem03)
//document.write(mensagem03)

var mensagem04 = `Olá, ${lista_nomes[3]} ${lista_sobrenome[3]}, sua idade é de ${lista_idade[3]}, atualmente morando em ${lista_cidade[3]}, portadora do CPF: ${lista_cpf[3]}, seu saldo é de R$: ${saldo03}. `
if (saldo03 >= 100000) {
  console.log('Você é Milionario')
} else if (saldo03 >= 10000) {
  console.log('Você é Rico')
} else if (saldo03 >= 100) {
  console.log('Você é Bem de Vida')
} else if (saldo03 >= 0) {
  console.log('Você é pobre')
} else {
  console.log('Invalido')
}
console.log(mensagem04)
//document.write(mensagem04)

var mensagem05 = `Olá, ${lista_nomes[4]} ${lista_sobrenome[4]}, sua idade é de ${lista_idade[4]}, atualmente morando em ${lista_cidade[4]}, portadora do CPF: ${lista_cpf[4]}, seu saldo é de R$: ${saldo04}. `
if (saldo04 >= 100000) {
  console.log('Você é Milionario')
} else if (saldo04 >= 10000) {
  console.log('Você é Rico')
} else if (saldo04 >= 100) {
  console.log('Você é Bem de Vida')
} else if (saldo04 >= 0) {
  console.log('Você é pobre')
} else {
  console.log('Invalido')
}
console.log(mensagem05)
//document.write(mensagem05)
