import { Table } from '../model/table.query';
import { Order } from '../model/order.query';
import { Drink } from '../model/drink.query';

import { COMMANDS } from './commands'

function openTable(state, { tableNumber }) {
    return {
        tables: [...state.tables, new Table(tableNumber)]
    }
}

function closeTable(state, { tableNumber }) {
    return {
        tables: state.tables.filter(table => table.number !== tableNumber)
    }
}

function placeOrder(state, { tableNumber, drinkDtos }) {
    const newTable = Object.assign(new Table, state.tables.find(table => table.number === tableNumber))
    const newOrder = new Order()

    drinkDtos.forEach(drinkDto => {
        newOrder.addDrink(new Drink(drinkDto.name))
    })
    newTable.order = newOrder

    return {
        tables: state.tables.map(table => {
            if (table.number === tableNumber) {
                return newTable
            }
            return table
        })
    }
}

function amendOrder(state, { tableNumber, drinkDtos }) {
    const newTable = Object.assign(new Table, state.tables.find(table => table.number === tableNumber))
    const newOrder = Object.assign(new Order, newTable.order)

    drinkDtos.forEach(drinkDto => {
        newOrder.replaceDrink(new Drink(drinkDto.name), drinkDto.id)
    })
    newTable.order = newOrder

    return {
        tables: state.tables.map(table => {
            if (table.number === tableNumber) {
                return newTable
            }
            return table
        })
    }
}

function markDrinksServed(state, { tableNumber, drinkDtos }) {
    const newTable = Object.assign(new Table, state.tables.find(table => table.number === tableNumber))
    const newOrder = Object.assign(new Order, newTable.order)

    drinkDtos.forEach(drinkDto => {
        newOrder.markDrinkServed(drinkDto.id)
    })
    newTable.order = newOrder

    return {
        tables: state.tables.map(table => {
            if (table.number === tableNumber) {
                return newTable
            }
            return table
        })
    }
}

export function reducers(state = { tables: [] }, action) {
    if (!action) {
        return state
    }

    switch (action.type) {
        case COMMANDS.OPEN_TABLE:
            return openTable(state, action.payload)
        case COMMANDS.PLACE_ORDER:
            return placeOrder(state, action.payload)
        case COMMANDS.AMEND_ORDER:
            return amendOrder(state, action.payload)
        case COMMANDS.MARK_DRINKS_SERVED:
            return markDrinksServed(state, action.payload)
        case COMMANDS.CLOSE_TABLE:
            return closeTable(state, action.payload)
        default:
            return state
    }
}