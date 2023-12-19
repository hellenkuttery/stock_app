import React, { useEffect ,useState} from "react";
import useStockCall from "../hooks/useStockCall";
import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import BrandsCard from "./../components/BrandsCard";
import BrandsModal from '../components/modals/BrandsModal';

const Brands = () => {
  const { getStockData } = useStockCall();
  const { brands } = useSelector((state) => state.stock);
  //lifting State App
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

 
/* -------------------------------------------------------------------------- */
const handleClose = () => {
  setOpen(false);
  setInfo({
    name: "",
    image: "",
  });
  //* handleClose olduğunda yani modal kapnadığında formdaki verilerin temizlenmesi için burada tanımladık.
};
const [info, setInfo] = useState({
  name: "",
  image: "",
});
/* -------------------------------------------------------------------------- */
useEffect(() => {
  getStockData("brands");
  console.log(brands)
}, []);
  return (
    <Container maxWidth="xl">
      <Typography color="error" variant="h4" mt={10} mb={2}>
        Brands
      </Typography>
      <Button variant="contained" onClick={handleOpen}>Brands</Button>
      <BrandsModal open={open} handleClose={handleClose} info={info} setInfo={setInfo}/>
      <Grid container justifyContent="center" spacing={3} mt={3}>
        {brands?.map((brand) => (
        
          <Grid item xs={12} sm={6} md={4} lg={3} key={brand.id}>
            <BrandsCard brand={brand} handleOpen={handleOpen} setInfo={setInfo} />
          
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Brands;

