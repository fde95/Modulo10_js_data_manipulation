let carros = [
    {
        id : 1,
        owner : 'Juan Manuel',
        vehicle : 'Car',
        brand : 'Hyundai',
        model : 'Azzera',
        manufactured : 2011,
        fuel : 'Flex',
        doors : 4,
        gearbox : 'Automático'
    },
    {
        id : 2,
        owner : 'Pablo Alfredo',
        vehicle : 'Car',
        brand : 'Kia',
        model : 'Soul',
        manufactured : 2012,
        fuel : 'Flex',
        doors : 4,
        gearbox : 'Automático'
    },
    {
        id : 3,
        owner : 'Juan Mario',
        vehicle : 'Car',
        brand : 'Peugeot',
        model : '207w',
        manufactured : 2007,
        fuel : 'Gasolina',
        doors : 4,
        gearbox : 'Manual'
    },
    {
        id : 4,
        owner : 'Felipe Espinoza',
        vehicle : 'Car',
        brand : 'Honda',
        model : 'Civic',
        manufactured : 2011,
        fuel : 'Flex',
        doors : 4,
        gearbox : 'Manual'
    },
];

function getCars(){
    return carros
}

export default getCars()