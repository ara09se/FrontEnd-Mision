export default class OrderRepository {
    data = []

    save (order){
        this.data.push(order)
    }
    getList (){
        return this.data
    }
}