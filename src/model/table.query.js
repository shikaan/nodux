import { Order } from './order.query';

export class Table {
    constructor(number) {
        this._number = number
        this._order = null
    }

    get number() {
        return this._number
    }

    get order() {
        return this._order
    }

    set order(value) {
        if (!(value instanceof Order)) {
            throw new TypeError('Expected instance of Order')
        }

        this._order = value
    }
}