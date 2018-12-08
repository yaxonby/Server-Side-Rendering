"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _react = _interopRequireDefault(require("react"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _server = require("react-dom/server");

var _App = _interopRequireDefault(require("./Components/App"));

var _configureStore = _interopRequireDefault(require("./redux/configureStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import counterApp from './reducers'
module.exports = function render(initialState) {
  // Model the initial state
  var store = (0, _configureStore.default)(initialState);
  var content = (0, _server.renderToString)(_react.default.createElement(_reactRedux.Provider, {
    store: store
  }, _react.default.createElement(_App.default, null)));
  var preloadedState = store.getState();
  return {
    content: content,
    preloadedState: preloadedState
  };
};
/*
const app = Express()
const port = 3000
app.use((req, res) => {
 return  res.end(
     template({
         body:   renderToString(<App  />)
    })
)
});
app.listen(port, ()=>{console.log(`Ok. Server listen post ${port}`)})

*/