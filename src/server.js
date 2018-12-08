import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
//import counterApp from './reducers'
import {renderToString} from  'react-dom/server';
import  App  from  './Components/App';
import configureStore from './redux/configureStore'

module.exports = function render(initialState) {
  // Model the initial state
  const store = configureStore(initialState)
  let content = renderToString(
    <Provider store={store} >
       <App />
    </Provider>
  );
const preloadedState = store.getState()
return {content, preloadedState};
}



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
