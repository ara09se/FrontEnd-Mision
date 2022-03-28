export default class Order {
    flavors
    accesories
    contactInfo
    description

    constructor (data={}) {
        this.flavors = data.flavors ?? []
        this.accesories = data.accesories ?? []
        this.contactInfo = data.contactInfo ?? {}
        this.description = data.description ?? ''
    }

    reset (){
        this.flavors = []
        this.accesories = []
        this.contactInfo = {}
        this.description = ''
    }
    isValid (){
        return this.flavors.length>0 && this.contactInfo.name.split(' ').length>1  && this.contactInfo.phone.length>9
    }
}