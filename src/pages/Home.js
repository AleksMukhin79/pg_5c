import React from 'react'
import StickyHeadTable from '../testTable.js'

function Home({ searchValue, setSearchValue, onChangeSearchInput }) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Поиск по участку: "${searchValue}"` : 'Все нарушения'}
        </h1>

        <div className="search-block d-flex">
          <img src="img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className="clear cu-p"
              src="img/btn-remove.svg"
              alt="Clear"
            />
          )}

          <input
            type="text"
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск... "
          />
        </div>
      </div>
      <div className="card">{StickyHeadTable(searchValue)}</div>
    </div>
  )
}
export default Home
