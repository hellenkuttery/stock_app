import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import { Button } from "@mui/material";
import { useSelector } from 'react-redux';
import useStockCall from '../hooks/useStockCall';
import DeleteIcon from "@mui/icons-material/Delete";
import {btnStyle} from "../styles/globalStyles"


const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function ProductTable() {
    const {products}=useSelector(state=>state.stock)
    console.log(products)
    const {deleteStockData}=useStockCall()
    const columns = [
        {
          field: "id",
          headerName: "ID",
          minWidth: 40,
          maxWidth: 70,
          headerAlign: "center",
          align: "center",
          flex: 1,
        //   renderCell:({id})=>{
        //     return id.slice(id.length-5)
        //   }
        },
        {
          field: "category",
          headerName: "Category",
          minWidth: 150,
          headerAlign: "center",
          align: "center",
          flex: 2,
          renderCell: ({ row }) => {
            return row?.categoryId?.name;
          },
        },
        {
          field: "brand",
          headerName: "Brand",
          minWidth: 150,
          headerAlign: "center",
          align: "center",
          flex: 2,
          renderCell: ({ row }) => {
            return row?.brandId?.name;
          },
        },
        {
          field: "name",
          headerName: "Name",
          minWidth: 150,
          headerAlign: "center",
          align: "center",
          flex: 2,
        },
        {
          field: "stock",
          headerName: "Stock",
          type: "number",
          minWidth: 110,
          headerAlign: "center",
          align: "center",
          flex: 0.8,
        },
        {
          field: "actions",
          headerAlign: "center",
          headerName: "Actions",
          align: "center",
          // description: "This column has a value getter and is not sortable.",
          sortable: false, //! o sütunda sort işlemlerini kapat
          minWidth: 40,
          flex: 1,
          renderCell: params => (
          
            <DeleteIcon
              onClick={() => deleteStockData("products", params.id)}
              sx={btnStyle}
            />
          ),
        },
      ];





  return (
    <Box sx={{ height: 400, width: '80%',color:"white"}}>
      <DataGrid 
      
        rows={products}
        columns={columns}
        sx={{color:"white"}}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{
            toolbar: GridToolbar,
          }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}