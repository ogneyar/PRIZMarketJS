import React from 'react'
import { 
  BrowserRouter, Switch, Route, Redirect 
} from 'react-router-dom'

import { HomePage } from './pages/home/HomePage'
import Tutorial from './pages/tutorials/Tutorial'

import './styles/App.css'


const App = () => {
  return (
    <BrowserRouter>
        
        <Switch>
          <Route component={ HomePage } path="/" exact />
          <Route component={ Tutorial } path="/tutorials" />
          <Redirect to="/" />
        </Switch>
    
    </BrowserRouter> 
  )
}


export default App;
