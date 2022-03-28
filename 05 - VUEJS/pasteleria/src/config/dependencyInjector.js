// Each injection
import AccesoryRepository from '../app/repositories/Accesory.repository'
import FlavorRepository from '../app/repositories/Flavor.repository'
import OrderRepository from '../app/repositories/Order.repository'

// Unic implemntation
const flavorRepo = new FlavorRepository()
const accesoryRepo = new AccesoryRepository()
const orderRepo = new OrderRepository()

export function configureDependencies(app) {
    app.provide(FlavorRepository.name, flavorRepo)
    app.provide(AccesoryRepository.name, accesoryRepo)
    app.provide(OrderRepository.name, orderRepo)
}