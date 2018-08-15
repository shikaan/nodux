"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Drink = void 0;

var _v = _interopRequireDefault(require("uuid/v4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Drink {
  constructor(name) {
    this._id = (0, _v.default)();
    this._name = name;
    this._served = false;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get served() {
    return this._served;
  }

  set served(value) {
    this._served = !!value;
  }

}

exports.Drink = Drink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbC9kcmluay5xdWVyeS5qcyJdLCJuYW1lcyI6WyJEcmluayIsImNvbnN0cnVjdG9yIiwibmFtZSIsIl9pZCIsIl9uYW1lIiwiX3NlcnZlZCIsImlkIiwic2VydmVkIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVPLE1BQU1BLEtBQU4sQ0FBWTtBQUNmQyxFQUFBQSxXQUFXLENBQUNDLElBQUQsRUFBTztBQUNkLFNBQUtDLEdBQUwsR0FBVyxpQkFBWDtBQUNBLFNBQUtDLEtBQUwsR0FBYUYsSUFBYjtBQUNBLFNBQUtHLE9BQUwsR0FBZSxLQUFmO0FBQ0g7O0FBRUQsTUFBSUMsRUFBSixHQUFTO0FBQ0wsV0FBTyxLQUFLSCxHQUFaO0FBQ0g7O0FBRUQsTUFBSUQsSUFBSixHQUFXO0FBQ1AsV0FBTyxLQUFLRSxLQUFaO0FBQ0g7O0FBRUQsTUFBSUcsTUFBSixHQUFhO0FBQ1QsV0FBTyxLQUFLRixPQUFaO0FBQ0g7O0FBRUQsTUFBSUUsTUFBSixDQUFXQyxLQUFYLEVBQWtCO0FBQ2QsU0FBS0gsT0FBTCxHQUFlLENBQUMsQ0FBQ0csS0FBakI7QUFDSDs7QUFyQmMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXVpZCBmcm9tICd1dWlkL3Y0J1xyXG5cclxuZXhwb3J0IGNsYXNzIERyaW5rIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICB0aGlzLl9pZCA9IHV1aWQoKVxyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX3NlcnZlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWRcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZXJ2ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZlZFxyXG4gICAgfVxyXG5cclxuICAgIHNldCBzZXJ2ZWQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9zZXJ2ZWQgPSAhIXZhbHVlO1xyXG4gICAgfVxyXG59Il19