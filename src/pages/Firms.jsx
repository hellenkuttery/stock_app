import React, { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

import FirmCard from "./../components/FirmCard";

const Firms = () => {
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);
  useEffect(() => {
    getStockData("firms");
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography color="error" variant="h4" mt={10} mb={2}>
        Firms
      </Typography>
      <Button variant="contained">New Firm</Button>

      <Grid container justifyContent="center" spacing={3} mt={3}>
        {firms?.map((firm) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={firm._id}>
            <FirmCard firm={firm} />
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
