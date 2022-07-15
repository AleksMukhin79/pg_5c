import * as React from "react";

function Violation() {
  const [rows, setItems] = React.useState([]);

  /*   const tableData = rows.reduce((acc, item) => {
    const data = { ...item, deps_name: item.deps.name, deps_id: item.deps.id }
    return [...acc, data]
  }, []) */

  React.useEffect(() => {
    fetch("http://localhost:4444/violations/")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Детали нарушения</h1>
      </div>
      <div className="d-fex flex-wrap">
        Здесь будут фотки выбранного нарушения
      </div>
    </div>
  );
}
export default Violation;
