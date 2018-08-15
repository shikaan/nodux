import uuid from 'uuid/v4';
import { Drink } from './drink.query';

export class Order {
    constructor() {
        Order.LAST_ORDER_NUMBER += 1

        this._id = uuid()
        this._drinks = []
    }

    addDrink(drink) {
        if (!(drink instanceof Drink)) {
            throw new TypeError('Expected instance of Drink')
        }

        this._drinks.push(drink)
    }

    replaceDrink(newDrink, oldDrinkId) {
        if (!(newDrink instanceof Drink)) {
            throw new TypeError('Expected instance of Drink')
        }
        
        this._drinks = this._drinks.map(item => {
            if (item.id === oldDrinkId) {
                return newDrink
            }
            return item
        })
    }

    markDrinkServed(drinkId) {
        this._drinks = this._drinks.map(drink => {
            if (drink.id === drinkId) {
                drink.served = true
                return drink
            }
            return drink
        })
    }

    get number() {
        return this._number
    }

    get drinks() {
        return this._drinks
    }
}