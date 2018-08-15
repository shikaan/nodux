import uuid from 'uuid/v4'

export class Drink {
    constructor(name) {
        this._id = uuid()
        this._name = name;
        this._served = false;
    }

    get id() {
        return this._id
    }

    get name() {
        return this._name
    }

    get served() {
        return this._served
    }

    set served(value) {
        this._served = !!value;
    }
}