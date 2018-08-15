"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Drink = void 0;

const uuid = require('uuid/v1');

class Drink {
  constructor(name) {
    this._id = uuid();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbC9kcmluay5qcyJdLCJuYW1lcyI6WyJ1dWlkIiwicmVxdWlyZSIsIkRyaW5rIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiX2lkIiwiX25hbWUiLCJfc2VydmVkIiwiaWQiLCJzZXJ2ZWQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBcEI7O0FBRU8sTUFBTUMsS0FBTixDQUFZO0FBQ2ZDLEVBQUFBLFdBQVcsQ0FBQ0MsSUFBRCxFQUFPO0FBQ2QsU0FBS0MsR0FBTCxHQUFXTCxJQUFJLEVBQWY7QUFDQSxTQUFLTSxLQUFMLEdBQWFGLElBQWI7QUFDQSxTQUFLRyxPQUFMLEdBQWUsS0FBZjtBQUNIOztBQUVELE1BQUlDLEVBQUosR0FBUztBQUNMLFdBQU8sS0FBS0gsR0FBWjtBQUNIOztBQUVELE1BQUlELElBQUosR0FBVztBQUNQLFdBQU8sS0FBS0UsS0FBWjtBQUNIOztBQUVELE1BQUlHLE1BQUosR0FBYTtBQUNULFdBQU8sS0FBS0YsT0FBWjtBQUNIOztBQUVELE1BQUlFLE1BQUosQ0FBV0MsS0FBWCxFQUFrQjtBQUNkLFNBQUtILE9BQUwsR0FBZSxDQUFDLENBQUNHLEtBQWpCO0FBQ0g7O0FBckJjIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdXVpZCA9IHJlcXVpcmUoJ3V1aWQvdjEnKVxyXG5cclxuZXhwb3J0IGNsYXNzIERyaW5rIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICB0aGlzLl9pZCA9IHV1aWQoKVxyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX3NlcnZlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWRcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZXJ2ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZlZFxyXG4gICAgfVxyXG5cclxuICAgIHNldCBzZXJ2ZWQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9zZXJ2ZWQgPSAhIXZhbHVlO1xyXG4gICAgfVxyXG59Il19