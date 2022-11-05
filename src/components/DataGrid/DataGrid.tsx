import React, { useState } from "react";
// import { DataGrid } from "@mui/x-data-grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
interface IDataGrid {
  dataRow?: any;
  dataColumn?: any;
}

const SystemDataGrid: React.FC<IDataGrid> = ({ dataRow, dataColumn }) => {
  const [pageSize, setPageSize] = useState(0);
  console.log(dataRow);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {dataColumn.length > 0 &&
              dataColumn.map((item: any) => (
                <TableCell align={item.alignRight ? "right" : undefined}>
                  {item.headerName}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataRow.length > 0 &&
            dataRow.map((row: any) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell>
                  <img
                    src={row.image}
                    style={{
                      width: "30%",
                      height: "auto",
                    }}
                    alt="Product Cart"
                  />
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="error">
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SystemDataGrid;
