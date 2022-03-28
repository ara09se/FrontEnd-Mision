export default class FlavorRepository {
    getList() {
        return [
            {
                name:'Chocolate',
                price:140,
                quantity: 45,
            },
            {
                name:'Vainilla Francesa',
                price:140,
                quantity: 27,
            },
            {
                name:'Red Velvet',
                price: 150,
                quantity: 18,
            },
            {
                name: 'Café',
                price: 150,
                quantity: 52,
            }
        ];
    }
}