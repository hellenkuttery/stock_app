import Box from "@mui/material/Box";

import { Form} from "formik";

import { useSelector } from "react-redux";
import { TextField } from "@mui/material";
import { object, string } from "yup";
import { LoadingButton } from "@mui/lab";

const LoginForm = ({ values, handleChange, handleBlur, errors, touched }) => {
    const { loading } = useSelector((state) => state?.auth);

    let loginSchema = object({
        email: string().email().required("Bu Alan Zorunludur"),
        password: string()
          .required("Password Zorunludur")
          .min(8, "Password en az 8 karakter olmalıdır")
          .max(20, "Passwaod  en fazla 20 karakter olmalıdır")
          .matches(/[A-Z]/, "En az bir büyük harf içermelidir")
          .matches(/[a-z]/, "En az bir küçük harf içermelidir")
          .matches(/\d/, "En az bir rakam içermelidir")
          .matches(/[@$!%*?&]/, "En az bir özel karakter içermelidir"),
      });
  return (
   
        <Form>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Email"
              name="email"
              id="email"
              type="email"
              value={values?.email || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              variant="outlined"
            />
            <TextField
              label="Password"
              name="password"
              id="password"
              type="password"
              value={values?.password || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              variant="outlined"
            />
            <LoadingButton variant="contained" type="Submit" loading={loading}>
              SUBMIT
            </LoadingButton>
          </Box>
        </Form>
  
  )
}

export default LoginForm