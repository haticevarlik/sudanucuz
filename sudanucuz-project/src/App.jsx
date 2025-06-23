import { useState } from 'react'
import './App.css'
import PageContent from './layout/PageContent'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ShopPage from './pages/ShopPage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <PageContent>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/shop">
            <ShopPage/>
          </Route>
        </Switch>
      </PageContent>
    </Router>
  )
}

export default App
