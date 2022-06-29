function App() {
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
        <h1>Все нарушения</h1>

        <div className="card"></div>

        {
          <div className="card">
            BasicTable
            {/*             <img src="" alt=""></img>
            <p></p>
            <div>
              <div>
                <span>Участок:</span>
                <b>Таб.номер</b>
              </div>
              <button>
                <img src="" alt=""></img>
              </button>
            </div> */}
          </div>
        }
      </div>
    </div>
  )
}

export default App
