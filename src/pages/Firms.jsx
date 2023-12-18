import React, { useEffect ,useState} from "react";
import useStockCall from "../hooks/useStockCall";
import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

import FirmCard from "./../components/FirmCard";
import FirmModal from './../components/modals/FirmModal';

const Firms = () => {
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);
  //lifting State App
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    getStockData("firms");
  }, []);
/* -------------------------------------------------------------------------- */
const [info, setInfo] = useState({
    
  name: "",
  phone: "",
  image: "",
  address: "",
});

/* -------------------------------------------------------------------------- */

  return (
    <Container maxWidth="xl">
      <Typography color="error" variant="h4" mt={10} mb={2}>
        Firms
      </Typography>
      <Button variant="contained" onClick={handleOpen}>New Firm</Button>
      <FirmModal open={open} handleClose={handleClose} info={info} setInfo={setInfo}/>
      <Grid container justifyContent="center" spacing={3} mt={3}>
        {firms?.map((firm) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={firm.id}>
            <FirmCard firm={firm} handleOpen={handleOpen} setInfo={setInfo} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Firms;

// const { token } = useSelector(state => state.auth);
// const BASE_URL = process.env.REACT_APP_BASE_URL;

// const getFirms = async () => {
//   dispatch(fetchStart()); // 'dispatch' doğru şekilde kullanılmış

//   try {
//     const { data } = await axios(`${BASE_URL}stock/firms/`, {
//       headers: {
//         Authorization: `Token ${token}`, // 'Token' yerine `${token}` kullanılmalı
//       },
//     });

//     console.log(data);
//     dispatch(getSuccess({ data, url: 'firms' })); // 'dispatch' kullanımı düzeltilmiş

//   } catch (error) {
//     dispatch(fetchFail());
//   }
// };
