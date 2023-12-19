import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardHeader } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useStockCall from "../hooks/useStockCall";
import { SentimentSatisfiedOutlined } from "@mui/icons-material";



export default function BrandsCard({ brand,handleOpen,setInfo }) {
  const {deleteStockData}=useStockCall()
  console.log(brand)
  return (
   
        <Card sx={{ minHeight:375,maxHeight: 385,display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
          <CardHeader title={brand?.name}  />
          <CardMedia
            component="img"
            sx={{ height: 130, objectFit: "contain" }}
            image={brand?.image}
            title={brand?.name}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Phone : {brand?.name}
            </Typography>
          </CardContent>

          <CardActions
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "end",
              gap: 2,
            }}
          >
            <EditIcon sx={{ cursor: "pointer", "&:hover": { color: "red" } }} onClick={()=>{handleOpen(); setInfo(brand)}}/>
            <DeleteIcon
              sx={{ cursor: "pointer", "&:hover": { color: "red" } }}
              onClick={()=>deleteStockData("brands",brand.id)}
             />
          </CardActions>
        </Card>
 
  );
}
