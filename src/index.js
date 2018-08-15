// const server = require('express')()

import { app, openTable, placeOrder, getTable, getOrder, getState, amendOrder, markDrinksServed, closeTable } from './store'
import log from './logger'
import { DrinkDto } from './model/drink.command';

const PORT = 1234

// server.post('/tables', (req, res, next) => {
//     app.dispatch()
// })

// server.listen(PORT, () => {
//     console.log(`App listening on ${PORT}`)
// })

log.info('Opening table 1')
app.dispatchCommand(openTable({ tableNumber: 1 }))
log.info('Retrieving table...')
log.debug(app.dispatchQuery(getTable({ number: 1 })))

log.info('Placing order table 1')
app.dispatchCommand(
    placeOrder({
        tableNumber: 1,
        drinkDtos: [
            new DrinkDto({ name: 'Beer' }),
            new DrinkDto({ name: 'Beer' }),
            new DrinkDto({ name: 'Whiskey' })
        ]
    })
)
log.info('Retrieving order...')
let order = app.dispatchQuery(getOrder({ tableNumber: 1 }))
log.debug(order)

log.info('Amend order table 1: first item is Lemonade')
app.dispatchCommand(
    amendOrder({
        tableNumber: 1,
        drinkDtos: [
            new DrinkDto({ name: 'Lemonade', id: order.drinks[0].id })
        ]
    })
)
log.info('Retrieving order...')
order = app.dispatchQuery(getOrder({ tableNumber: 1 }))
log.debug(order)

log.info('Mark first two drinks as served')
app.dispatchCommand(
    markDrinksServed({
        tableNumber: 1,
        drinkDtos: [
            new DrinkDto({ id: order.drinks[0].id }),
            new DrinkDto({ id: order.drinks[1].id })
        ]
    })
)
log.info('Retrieving order...')
order = app.dispatchQuery(getOrder({ tableNumber: 1 }))
log.debug(order)

log.info('Close table')
app.dispatchCommand(closeTable({tableNumber: 1}))

log.debug('State dump', app.dispatchQuery(getState))