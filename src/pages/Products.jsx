import React, { useEffect ,useState} from "react";
import useStockCall from "../hooks/useStockCall";
import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import ProductModal from "../components/modals/ProductModal"
import ProductTable from "../components/ProductTable"
const Products = () => {
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);
  //lifting State App
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    getStockData("products");
    getStockData("categories");
    getStockData("brands");
  }, []);
/* -------------------------------------------------------------------------- */
const [info, setInfo] = useState({    
  name: "",
  categoryId: "",
  brandId: "",
});


/* -------------------------------------------------------------------------- */

  return (
    <Container maxWidth="xl" sx={{height:"100vh"}}>
      <Typography color="error" variant="h4" mt={10} mb={2}>
        Products
      </Typography>
      <Button variant="contained" onClick={handleOpen}>Products</Button>
      <ProductModal open={open} handleClose={handleClose} info={info} setInfo={setInfo}/>
       <ProductTable/>
   </Container>
 
  );
};

export default Products;

