import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import useStockCall from "../../hooks/useStockCall";
import { flexColumn, modalStyle } from "../../styles/globalStyles";

export default function FirmModal({ open, handleClose, info,setInfo}) {
 
  const {postStockData,putStockData}=useStockCall()
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    console.log(info);
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(info)
    // içinde id varsa put stockdata çalıştır yoksa postStockData çalıştır
    if (info.id){
      putStockData("firms",info)
    }else{
      postStockData("firms",info)
    }

    
    handleClose()
    setInfo({
      name: "",
      phone: "",
      image: "",
      address: "",
    })
  }
  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box sx={flexColumn} component="form" onSubmit={handleSubmit}>
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
            />
            <TextField
              label="Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info.address}
              onChange={handleChange}
            />
            <TextField
              label="Phone"
              name="phone"
              id="phone"
              type="text"
              variant="outlined"
              value={info.phone}
              onChange={handleChange}
              required
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="text"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
              required
            />
            <LoadingButton variant="contained" type="Submit">
             {info.id ? "Update" :"Submit" }
            </LoadingButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
