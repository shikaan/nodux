export const getState = state => state
export const getTables = state => state.tables
export const getTable = ({ number }) => state => getTables(state).find(table => table.number === number)
export const getOrder = ({ tableNumber }) => state => getTable({number: tableNumber})(state).order