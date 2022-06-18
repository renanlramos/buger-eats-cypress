var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11999999999',
            address: {
                postalcode: '13380011',
                street: 'Rua Heitor Penteado',
                number: '3',
                details: 'ap 10',
                district: 'Centro',
                city_state: 'Nova Odessa/SP'
            },
            delivery_method: 'Moto'
    }
    return data
}
}