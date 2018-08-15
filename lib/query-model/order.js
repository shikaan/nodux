"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Order = void 0;

var _v = _interopRequireDefault(require("uuid/v1"));

var _drink = require("./drink");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Order {
  constructor() {
    Order.LAST_ORDER_NUMBER += 1;
    this._id = (0, _v.default)();
    this._drinks = [];
  }

  placeDrink(drink) {
    if (!(drink instanceof _drink.Drink)) {
      throw new TypeError('Expected instance of Drink');
    }

    let hasReplacedDrink = false;
    this._drinks = this._drinks.map(item => {
      if (item.id === drink.id) {
        hasReplacedDrink = true;
        return drink;
      }

      return item;
    });

    if (!hasReplacedDrink) {
      this._drinks.push(drink);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xdWVyeS1tb2RlbC9vcmRlci5qcyJdLCJuYW1lcyI6WyJPcmRlciIsImNvbnN0cnVjdG9yIiwiTEFTVF9PUkRFUl9OVU1CRVIiLCJfaWQiLCJfZHJpbmtzIiwicGxhY2VEcmluayIsImRyaW5rIiwiRHJpbmsiLCJUeXBlRXJyb3IiLCJoYXNSZXBsYWNlZERyaW5rIiwibWFwIiwiaXRlbSIsImlkIiwicHVzaCIsIm1hcmtEcmlua1NlcnZlZCIsImRyaW5rSWQiLCJzZXJ2ZWQiLCJudW1iZXIiLCJfbnVtYmVyIiwiZHJpbmtzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFTyxNQUFNQSxLQUFOLENBQVk7QUFDZkMsRUFBQUEsV0FBVyxHQUFHO0FBQ1ZELElBQUFBLEtBQUssQ0FBQ0UsaUJBQU4sSUFBMkIsQ0FBM0I7QUFFQSxTQUFLQyxHQUFMLEdBQVcsaUJBQVg7QUFDQSxTQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNIOztBQUVEQyxFQUFBQSxVQUFVLENBQUNDLEtBQUQsRUFBUTtBQUNkLFFBQUksRUFBRUEsS0FBSyxZQUFZQyxZQUFuQixDQUFKLEVBQStCO0FBQzNCLFlBQU0sSUFBSUMsU0FBSixDQUFjLDRCQUFkLENBQU47QUFDSDs7QUFFRCxRQUFJQyxnQkFBZ0IsR0FBRyxLQUF2QjtBQUVBLFNBQUtMLE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFNLEdBQWIsQ0FBaUJDLElBQUksSUFBSTtBQUNwQyxVQUFJQSxJQUFJLENBQUNDLEVBQUwsS0FBWU4sS0FBSyxDQUFDTSxFQUF0QixFQUEwQjtBQUN0QkgsUUFBQUEsZ0JBQWdCLEdBQUcsSUFBbkI7QUFDQSxlQUFPSCxLQUFQO0FBQ0g7O0FBQ0QsYUFBT0ssSUFBUDtBQUNILEtBTmMsQ0FBZjs7QUFRQSxRQUFJLENBQUNGLGdCQUFMLEVBQXVCO0FBQ25CLFdBQUtMLE9BQUwsQ0FBYVMsSUFBYixDQUFrQlAsS0FBbEI7QUFDSDtBQUNKOztBQUVEUSxFQUFBQSxlQUFlLENBQUNDLE9BQUQsRUFBVTtBQUNyQixTQUFLWCxPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFhTSxHQUFiLENBQWlCSixLQUFLLElBQUk7QUFDckMsVUFBSUEsS0FBSyxDQUFDTSxFQUFOLEtBQWFHLE9BQWpCLEVBQTBCO0FBQ3RCVCxRQUFBQSxLQUFLLENBQUNVLE1BQU4sR0FBZSxJQUFmO0FBQ0EsZUFBT1YsS0FBUDtBQUNIOztBQUNELGFBQU9BLEtBQVA7QUFDSCxLQU5jLENBQWY7QUFPSDs7QUFFRCxNQUFJVyxNQUFKLEdBQWE7QUFDVCxXQUFPLEtBQUtDLE9BQVo7QUFDSDs7QUFFRCxNQUFJQyxNQUFKLEdBQWE7QUFDVCxXQUFPLEtBQUtmLE9BQVo7QUFDSDs7QUE1Q2MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXVpZCBmcm9tICd1dWlkL3YxJztcclxuaW1wb3J0IHsgRHJpbmsgfSBmcm9tICcuL2RyaW5rJztcclxuXHJcbmV4cG9ydCBjbGFzcyBPcmRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBPcmRlci5MQVNUX09SREVSX05VTUJFUiArPSAxXHJcblxyXG4gICAgICAgIHRoaXMuX2lkID0gdXVpZCgpXHJcbiAgICAgICAgdGhpcy5fZHJpbmtzID0gW11cclxuICAgIH1cclxuXHJcbiAgICBwbGFjZURyaW5rKGRyaW5rKSB7XHJcbiAgICAgICAgaWYgKCEoZHJpbmsgaW5zdGFuY2VvZiBEcmluaykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgaW5zdGFuY2Ugb2YgRHJpbmsnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGhhc1JlcGxhY2VkRHJpbmsgPSBmYWxzZVxyXG5cclxuICAgICAgICB0aGlzLl9kcmlua3MgPSB0aGlzLl9kcmlua3MubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gZHJpbmsuaWQpIHtcclxuICAgICAgICAgICAgICAgIGhhc1JlcGxhY2VkRHJpbmsgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZHJpbmtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICghaGFzUmVwbGFjZWREcmluaykge1xyXG4gICAgICAgICAgICB0aGlzLl9kcmlua3MucHVzaChkcmluaylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFya0RyaW5rU2VydmVkKGRyaW5rSWQpIHtcclxuICAgICAgICB0aGlzLl9kcmlua3MgPSB0aGlzLl9kcmlua3MubWFwKGRyaW5rID0+IHtcclxuICAgICAgICAgICAgaWYgKGRyaW5rLmlkID09PSBkcmlua0lkKSB7XHJcbiAgICAgICAgICAgICAgICBkcmluay5zZXJ2ZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZHJpbmtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZHJpbmtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBudW1iZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX251bWJlclxyXG4gICAgfVxyXG5cclxuICAgIGdldCBkcmlua3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyaW5rc1xyXG4gICAgfVxyXG59Il19