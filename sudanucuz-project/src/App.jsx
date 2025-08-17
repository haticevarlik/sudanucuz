import { useState } from 'react'
import './App.css'
import PageContent from './layout/PageContent'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ShopPage from './pages/ShopPage'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <PageContent>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/shop">
            <ShopPage/>
          </Route>
          <Route exact path="/shop/:productKey">
            <ProductDetail/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          
        </Switch>
      </PageContent>
    </Router>
  )
}

export default App
