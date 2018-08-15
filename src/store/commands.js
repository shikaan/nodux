export const COMMANDS = {
    OPEN_TABLE: 'OPEN_TABLE',
    PLACE_ORDER: 'PLACE_ORDER',
    AMEND_ORDER: 'AMEND_ORDER',
    MARK_DRINKS_SERVED: 'MARK_DRINKS_SERVED',
    CLOSE_TABLE: 'CLOSE_TABLE'
}

/**
 * @param {Number} tableNumber 
 */
export const openTable = ({ tableNumber }) => {
    return {
        type: COMMANDS.OPEN_TABLE,
        payload: { tableNumber }
    }
}

/**
 * @param {Number} tableNumber 
 * @param {Array<DrinkDto>} drinks 
 */
export const placeOrder = ({ tableNumber, drinkDtos }) => {
    return {
        type: COMMANDS.PLACE_ORDER,
        payload: { tableNumber, drinkDtos }
    }
}

/**
 * @param {Number} tableNumber 
 * @param {Array<DrinkDto>} drinks 
 */
export const amendOrder = ({ tableNumber, drinkDtos }) => {
    return dispatch => {

        // if (canBeAmended(orderNumber)) {
            dispatch({
                type: COMMANDS.AMEND_ORDER,
                payload: { tableNumber, drinkDtos }
            })
        // }

        // Handle CannotCancelServedItem (should change the state)
    }
}

/**
 * @param {Number} tableNumber 
 * @param {Array<DrinkDto>} drinks 
 */
export const markDrinksServed = ({ tableNumber, drinkDtos }) => {
    return dispatch => {
        // if (isNotServed(drinkDtos)) {
            dispatch({
                type: COMMANDS.MARK_DRINKS_SERVED,
                payload: { tableNumber, drinkDtos }
            })
        // }
    }
}

/**
 * @param {Number} tableNumber 
 */
export const closeTable = ({ tableNumber }) => {
    return {
        type: COMMANDS.CLOSE_TABLE,
        payload: { tableNumber }
    }
}