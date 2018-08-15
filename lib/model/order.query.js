"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Order = void 0;

var _v = _interopRequireDefault(require("uuid/v4"));

var _drink = require("./drink.query");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Order {
  constructor() {
    Order.LAST_ORDER_NUMBER += 1;
    this._id = (0, _v.default)();
    this._drinks = [];
  }

  addDrink(drink) {
    if (!(drink instanceof _drink.Drink)) {
      throw new TypeError('Expected instance of Drink');
    }

    this._drinks.push(drink);
  }

  replaceDrink(newDrink, oldDrinkId) {
    if (!(newDrink instanceof _drink.Drink)) {
      throw new TypeError('Expected instance of Drink');
    }

    this._drinks = this._drinks.map(item => {
      if (item.id === oldDrinkId) {
        return newDrink;
      }

      return item;
    });
  }

  markDrinkServed(drinkId) {
    this._drinks = this._drinks.map(drink => {
      if (drink.id === drinkId) {
        drink.served = true;
        return drink;
      }

      return drink;
    });
  }

  get number() {
    return this._number;
  }

  get drinks() {
    return this._drinks;
  }

}

exports.Order = Order;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbC9vcmRlci5xdWVyeS5qcyJdLCJuYW1lcyI6WyJPcmRlciIsImNvbnN0cnVjdG9yIiwiTEFTVF9PUkRFUl9OVU1CRVIiLCJfaWQiLCJfZHJpbmtzIiwiYWRkRHJpbmsiLCJkcmluayIsIkRyaW5rIiwiVHlwZUVycm9yIiwicHVzaCIsInJlcGxhY2VEcmluayIsIm5ld0RyaW5rIiwib2xkRHJpbmtJZCIsIm1hcCIsIml0ZW0iLCJpZCIsIm1hcmtEcmlua1NlcnZlZCIsImRyaW5rSWQiLCJzZXJ2ZWQiLCJudW1iZXIiLCJfbnVtYmVyIiwiZHJpbmtzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFTyxNQUFNQSxLQUFOLENBQVk7QUFDZkMsRUFBQUEsV0FBVyxHQUFHO0FBQ1ZELElBQUFBLEtBQUssQ0FBQ0UsaUJBQU4sSUFBMkIsQ0FBM0I7QUFFQSxTQUFLQyxHQUFMLEdBQVcsaUJBQVg7QUFDQSxTQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNIOztBQUVEQyxFQUFBQSxRQUFRLENBQUNDLEtBQUQsRUFBUTtBQUNaLFFBQUksRUFBRUEsS0FBSyxZQUFZQyxZQUFuQixDQUFKLEVBQStCO0FBQzNCLFlBQU0sSUFBSUMsU0FBSixDQUFjLDRCQUFkLENBQU47QUFDSDs7QUFFRCxTQUFLSixPQUFMLENBQWFLLElBQWIsQ0FBa0JILEtBQWxCO0FBQ0g7O0FBRURJLEVBQUFBLFlBQVksQ0FBQ0MsUUFBRCxFQUFXQyxVQUFYLEVBQXVCO0FBQy9CLFFBQUksRUFBRUQsUUFBUSxZQUFZSixZQUF0QixDQUFKLEVBQWtDO0FBQzlCLFlBQU0sSUFBSUMsU0FBSixDQUFjLDRCQUFkLENBQU47QUFDSDs7QUFFRCxTQUFLSixPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFhUyxHQUFiLENBQWlCQyxJQUFJLElBQUk7QUFDcEMsVUFBSUEsSUFBSSxDQUFDQyxFQUFMLEtBQVlILFVBQWhCLEVBQTRCO0FBQ3hCLGVBQU9ELFFBQVA7QUFDSDs7QUFDRCxhQUFPRyxJQUFQO0FBQ0gsS0FMYyxDQUFmO0FBTUg7O0FBRURFLEVBQUFBLGVBQWUsQ0FBQ0MsT0FBRCxFQUFVO0FBQ3JCLFNBQUtiLE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFTLEdBQWIsQ0FBaUJQLEtBQUssSUFBSTtBQUNyQyxVQUFJQSxLQUFLLENBQUNTLEVBQU4sS0FBYUUsT0FBakIsRUFBMEI7QUFDdEJYLFFBQUFBLEtBQUssQ0FBQ1ksTUFBTixHQUFlLElBQWY7QUFDQSxlQUFPWixLQUFQO0FBQ0g7O0FBQ0QsYUFBT0EsS0FBUDtBQUNILEtBTmMsQ0FBZjtBQU9IOztBQUVELE1BQUlhLE1BQUosR0FBYTtBQUNULFdBQU8sS0FBS0MsT0FBWjtBQUNIOztBQUVELE1BQUlDLE1BQUosR0FBYTtBQUNULFdBQU8sS0FBS2pCLE9BQVo7QUFDSDs7QUE3Q2MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXVpZCBmcm9tICd1dWlkL3Y0JztcclxuaW1wb3J0IHsgRHJpbmsgfSBmcm9tICcuL2RyaW5rLnF1ZXJ5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBPcmRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBPcmRlci5MQVNUX09SREVSX05VTUJFUiArPSAxXHJcblxyXG4gICAgICAgIHRoaXMuX2lkID0gdXVpZCgpXHJcbiAgICAgICAgdGhpcy5fZHJpbmtzID0gW11cclxuICAgIH1cclxuXHJcbiAgICBhZGREcmluayhkcmluaykge1xyXG4gICAgICAgIGlmICghKGRyaW5rIGluc3RhbmNlb2YgRHJpbmspKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGluc3RhbmNlIG9mIERyaW5rJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2RyaW5rcy5wdXNoKGRyaW5rKVxyXG4gICAgfVxyXG5cclxuICAgIHJlcGxhY2VEcmluayhuZXdEcmluaywgb2xkRHJpbmtJZCkge1xyXG4gICAgICAgIGlmICghKG5ld0RyaW5rIGluc3RhbmNlb2YgRHJpbmspKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGluc3RhbmNlIG9mIERyaW5rJylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fZHJpbmtzID0gdGhpcy5fZHJpbmtzLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IG9sZERyaW5rSWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdEcmlua1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBtYXJrRHJpbmtTZXJ2ZWQoZHJpbmtJZCkge1xyXG4gICAgICAgIHRoaXMuX2RyaW5rcyA9IHRoaXMuX2RyaW5rcy5tYXAoZHJpbmsgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZHJpbmsuaWQgPT09IGRyaW5rSWQpIHtcclxuICAgICAgICAgICAgICAgIGRyaW5rLnNlcnZlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHJldHVybiBkcmlua1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkcmlua1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG51bWJlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbnVtYmVyXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRyaW5rcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZHJpbmtzXHJcbiAgICB9XHJcbn0iXX0=