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



export default function FirmCard({ firm }) {
  const {deleteStockData}=useStockCall()
  return (
   
        <Card sx={{ minHeight:375,maxHeight: 385,display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
          <CardHeader title={firm.name} subheader={firm.address} />
          <CardMedia
            component="img"
            sx={{ height: 130, objectFit: "contain" }}
            image={firm.image}
            title={firm.name}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Phone : {firm.phone}
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
            <EditIcon sx={{ cursor: "pointer", "&:hover": { color: "red" } }} />
            <DeleteIcon
              sx={{ cursor: "pointer", "&:hover": { color: "red" } }}
              onClick={()=>deleteStockData("firms",firm.id)}
             />
          </CardActions>
        </Card>
 
  );
}
