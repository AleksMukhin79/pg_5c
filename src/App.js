import React from 'react'
import {  Routes, Route, } from "react-router-dom";

import Header from './components/Header.js'
import Home from './pages/Home.js'
import Violation from './pages/Violation.js'



function App() {
  const [searchValue, setSearchValue] = React.useState('')

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">
      <Header />
      <Routes>

        <Route path="/" element={<Home
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
        />}> 
        </Route>

        <Route path="/violation" exact
          element={<Violation />}>
        </Route>

        <Route path="/test" exact
          element={"это текст для проверки работы роутера"}>
        </Route>



      </Routes>
    </div>
  )
}

export default App
