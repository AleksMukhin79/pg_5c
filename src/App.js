import * as React from 'react'
import StickyHeadTable from './testTable.js'

function App() {
  const [searchValue, setSearchValue] = React.useState('')

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
    //StickyHeadTable(searchValue)
  }

  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt="Logotype" />
          <div className="headerInfo">
            <h3 className="text-uppercase">Система 5С на производстве</h3>
            <p className="opacity-5">поиск выявленных нарушений</p>
          </div>
        </div>
      </header>

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue
              ? `Поиск по участку: "${searchValue}"`
              : 'Все нарушения'}{' '}
          </h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search"></img>
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск... "
            />
          </div>
        </div>

        <div className="card">{StickyHeadTable(searchValue)}</div>
      </div>
    </div>
  )
}

export default App
