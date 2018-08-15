"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = void 0;

var _order = require("./order");

class Table {
  constructor(number) {
    this._number = number;
    this._order = null;
  }

  get number() {
    return this._number;
  }

  get order() {
    return this._order;
  }

  set order(value) {
    if (!(value instanceof _order.Order)) {
      throw new TypeError('Expected instance of Order');
    }

    this._order = value;
  }

}

exports.Table = Table;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbC90YWJsZS5qcyJdLCJuYW1lcyI6WyJUYWJsZSIsImNvbnN0cnVjdG9yIiwibnVtYmVyIiwiX251bWJlciIsIl9vcmRlciIsIm9yZGVyIiwidmFsdWUiLCJPcmRlciIsIlR5cGVFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVPLE1BQU1BLEtBQU4sQ0FBWTtBQUNmQyxFQUFBQSxXQUFXLENBQUNDLE1BQUQsRUFBUztBQUNoQixTQUFLQyxPQUFMLEdBQWVELE1BQWY7QUFDQSxTQUFLRSxNQUFMLEdBQWMsSUFBZDtBQUNIOztBQUVELE1BQUlGLE1BQUosR0FBYTtBQUNULFdBQU8sS0FBS0MsT0FBWjtBQUNIOztBQUVELE1BQUlFLEtBQUosR0FBWTtBQUNSLFdBQU8sS0FBS0QsTUFBWjtBQUNIOztBQUVELE1BQUlDLEtBQUosQ0FBVUMsS0FBVixFQUFpQjtBQUNiLFFBQUksRUFBRUEsS0FBSyxZQUFZQyxZQUFuQixDQUFKLEVBQStCO0FBQzNCLFlBQU0sSUFBSUMsU0FBSixDQUFjLDRCQUFkLENBQU47QUFDSDs7QUFFRCxTQUFLSixNQUFMLEdBQWNFLEtBQWQ7QUFDSDs7QUFwQmMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcmRlciB9IGZyb20gJy4vb3JkZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlIHtcclxuICAgIGNvbnN0cnVjdG9yKG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX251bWJlciA9IG51bWJlclxyXG4gICAgICAgIHRoaXMuX29yZGVyID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGdldCBudW1iZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX251bWJlclxyXG4gICAgfVxyXG5cclxuICAgIGdldCBvcmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3JkZXJcclxuICAgIH1cclxuXHJcbiAgICBzZXQgb3JkZXIodmFsdWUpIHtcclxuICAgICAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIE9yZGVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBpbnN0YW5jZSBvZiBPcmRlcicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9vcmRlciA9IHZhbHVlXHJcbiAgICB9XHJcbn0iXX0=