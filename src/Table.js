// Table
import React, { useMemo, useState, useEffect, useFlexLayout } from "react";
import TableTemplate from "./TableTemplate"
import { cpi } from './CPI';

function Table() {
  // console.log(cpi);

  const columns = useMemo(
    () => [
      {
        Header: "Data",
        columns: [
          {
            Header: "Country Name",
            accessor: "Country Name",
            width: 100
          },
          {
            Header: "Indicator",
            accessor: "Indicator"
          },
          {
            Header: "2012",
            accessor: "2012"
          },
          {
            Header: "2013",
            accessor: "2013"
          },
          {
            Header: "2014",
            accessor: "2014"
          }
          ,     {
            Header: "2015",
            accessor: "2015"
          }
        ]
      },
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(cpi);
  }, []);

  return (
    <div className="App">
      <TableTemplate columns={columns} data={data} />
    </div>
  );
}

export default Table;










