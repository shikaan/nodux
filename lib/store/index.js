"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "amendOrder", {
  enumerable: true,
  get: function () {
    return _commands.amendOrder;
  }
});
Object.defineProperty(exports, "closeTable", {
  enumerable: true,
  get: function () {
    return _commands.closeTable;
  }
});
Object.defineProperty(exports, "markDrinksServed", {
  enumerable: true,
  get: function () {
    return _commands.markDrinksServed;
  }
});
Object.defineProperty(exports, "openTable", {
  enumerable: true,
  get: function () {
    return _commands.openTable;
  }
});
Object.defineProperty(exports, "placeOrder", {
  enumerable: true,
  get: function () {
    return _commands.placeOrder;
  }
});
Object.defineProperty(exports, "getOrder", {
  enumerable: true,
  get: function () {
    return _queries.getOrder;
  }
});
Object.defineProperty(exports, "getState", {
  enumerable: true,
  get: function () {
    return _queries.getState;
  }
});
Object.defineProperty(exports, "getTables", {
  enumerable: true,
  get: function () {
    return _queries.getTables;
  }
});
Object.defineProperty(exports, "getTable", {
  enumerable: true,
  get: function () {
    return _queries.getTable;
  }
});
exports.app = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reducers = require("./reducers");

var _commands = require("./commands");

var _queries = require("./queries");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Application {
  constructor(store) {
    this.store = store;
  }

  dispatchCommand(command) {
    this.store.dispatch(command);
  }

  dispatchQuery(query) {
    return query(this.store.getState());
  }

}

const app = new Application((0, _redux.createStore)(_reducers.reducers, (0, _redux.applyMiddleware)(_reduxThunk.default)));
exports.app = app;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdG9yZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcHBsaWNhdGlvbiIsImNvbnN0cnVjdG9yIiwic3RvcmUiLCJkaXNwYXRjaENvbW1hbmQiLCJjb21tYW5kIiwiZGlzcGF0Y2giLCJkaXNwYXRjaFF1ZXJ5IiwicXVlcnkiLCJnZXRTdGF0ZSIsImFwcCIsInJlZHVjZXJzIiwidGh1bmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7OztBQUVBLE1BQU1BLFdBQU4sQ0FBa0I7QUFDZEMsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDZixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDSDs7QUFFREMsRUFBQUEsZUFBZSxDQUFDQyxPQUFELEVBQVU7QUFDckIsU0FBS0YsS0FBTCxDQUFXRyxRQUFYLENBQW9CRCxPQUFwQjtBQUNIOztBQUVERSxFQUFBQSxhQUFhLENBQUNDLEtBQUQsRUFBUTtBQUNqQixXQUFPQSxLQUFLLENBQUMsS0FBS0wsS0FBTCxDQUFXTSxRQUFYLEVBQUQsQ0FBWjtBQUNIOztBQVhhOztBQWNYLE1BQU1DLEdBQUcsR0FBRyxJQUFJVCxXQUFKLENBQWdCLHdCQUFZVSxrQkFBWixFQUFzQiw0QkFBZ0JDLG1CQUFoQixDQUF0QixDQUFoQixDQUFaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHsgcmVkdWNlcnMgfSBmcm9tICcuL3JlZHVjZXJzJ1xyXG5cclxuZXhwb3J0IHsgYW1lbmRPcmRlciwgY2xvc2VUYWJsZSwgbWFya0RyaW5rc1NlcnZlZCwgb3BlblRhYmxlLCBwbGFjZU9yZGVyIH0gZnJvbSAnLi9jb21tYW5kcydcclxuZXhwb3J0IHsgZ2V0T3JkZXIsIGdldFN0YXRlLCBnZXRUYWJsZXMsIGdldFRhYmxlIH0gZnJvbSAnLi9xdWVyaWVzJ1xyXG5cclxuY2xhc3MgQXBwbGljYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3Ioc3RvcmUpIHtcclxuICAgICAgICB0aGlzLnN0b3JlID0gc3RvcmVcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaENvbW1hbmQoY29tbWFuZCkge1xyXG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goY29tbWFuZClcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaFF1ZXJ5KHF1ZXJ5KSB7XHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5KHRoaXMuc3RvcmUuZ2V0U3RhdGUoKSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFwcCA9IG5ldyBBcHBsaWNhdGlvbihjcmVhdGVTdG9yZShyZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSkpIl19