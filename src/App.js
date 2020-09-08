import React from 'react'
import HomePage from './pages/homepage'
import CollectionPreviewShopPage from './pages/shoppage'
import Header from './components/header'
import {Switch, Route} from 'react-router-dom'
import SignInPage from './pages/signinpage'

import './App.css'

const Jackets = () => (
  <h1> Jackets </h1>
)

function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path='/' component = {HomePage} />
      <Route exact path='/shop' component = {CollectionPreviewShopPage} />
      <Route exact path='/jackets' component = {Jackets} />
      <Route exact path='/signin' component = {SignInPage} />
      </Switch>
    </div>
  )
}

export default App