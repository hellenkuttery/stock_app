import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import { Link } from "react-router-dom";
import {  Formik } from "formik";
import LoginForm from "../components/LoginForm"
import { useSelector } from "react-redux";
import { object, string } from "yup";
import useAuthCall from '../hooks/useAuthCall';

const Login = () => {
//  const {   loading } = useSelector((state) => state?.auth);
  const {login}=useAuthCall()


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
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              // TODO: Login işlemleri burada gerçekleştirilecek
              login(values)
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props)=><LoginForm {...props}/>}

          >
            {/* {({ values, handleChange, handleBlur, errors, touched }) => (
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
            )} */}
          </Formik>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
          <Container>
            <img src={image} alt="img" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
