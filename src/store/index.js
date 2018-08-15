import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers'

export { amendOrder, closeTable, markDrinksServed, openTable, placeOrder } from './commands'
export { getOrder, getState, getTables, getTable } from './queries'

class Application {
    constructor(store) {
        this.store = store
    }

    dispatchCommand(command) {
        this.store.dispatch(command)
    }

    dispatchQuery(query) {
        return query(this.store.getState())
    }
}

export const app = new Application(createStore(reducers, applyMiddleware(thunk)))