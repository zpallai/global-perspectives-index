// Table
import React, { useMemo, useState, useEffect, useFlexLayout } from "react";
import TableTemplate from "./TableTemplate"
import { composite } from './Composite';

function Table() {

  const columns = useMemo(
    () => [
      {
        Header: "Composite Index",
        columns: [
          {
            Header: "Country",
            accessor: "title",
            width: 100
          },
          {
            Header: "Corruption",
            accessor: "corruption"
          },
          {
            Header: "Economy",
            accessor: "economy"
          },
          {
            Header: "Inequality",
            accessor: "inequality"
          },
          {
            Header: "Unemployment",
            accessor: "unemployment"
          }
          ,     {
            Header: "Index",
            accessor: "id"
          }
        ]
      },
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(composite);
  }, []);

  return (
    <div className="App">
      <TableTemplate columns={columns} data={data} />
    </div>
  );
}

export default Table;










