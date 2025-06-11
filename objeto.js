//1 - criando um objeto, que é um tipo de dado
let pessoa = {
    nome: 'Mika',
    cpf : '123.456.789-00',
    idade: '22',
    genero: 'Feminino',
    telefone: '(11) 99999-9999',
    dataNascimento: '10/10/2000',
    endereco: {
        rua: 'Rua dos Bobos',
        numero: '0',
        bairro: 'Vila dos Devs',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '00000-000',
        localizacao: {
            latitude: '00.0000',
            longitude: '00.0000',
        }

    },
    cargo: 'Desenvolvedor',
    adicionar: function() {
        console.log('Adicionar')
    },
    remover: function() {
        console.log('Remover')
    },
    email: 'milima@gmail.com',

}
//imprimindo o objeto no console
console.log(pessoa.nome)

//2 - acessando os dados do objeto
console.log(pessoa.dataNascimento)
console.log(pessoa.endereco)
console.log(pessoa.endereco.localizacao.latitude)