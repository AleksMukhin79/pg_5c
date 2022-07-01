import React from 'react'
import Header from './components/Header.js'
import Home from './pages/Home.js'
import Violation from './pages/Violation.js'

import { Route } from 'react-router-dom'

function App() {
  const [searchValue, setSearchValue] = React.useState('')

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">
      <Header />

      <Route path="/test">это текст для проверки работы роутера</Route>

      <Route path="/" exact>
        <Home
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
        />
      </Route>

      <Route path="/Violation" exact>
        <Violation />
      </Route>
    </div>
  )
}

export default App
