// Bu birinci kullanım

// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Avatar from "@mui/material/Avatar";
// import LockIcon from "@mui/icons-material/Lock";
// import { Formik, Form } from "formik";
// // import image from "../assets/regi.avif";
// import Grid from "@mui/material/Grid";
// // import RegisterForm, { registerSchema } from "../components/RegisterForm";
// import { Link } from "react-router-dom";
// import { Box, useTheme } from "@mui/material";
// import { object, string } from "yup";
// import { TextField, Button } from "@mui/material";
// import { LoadingButton } from "@mui/lab";
// import image from "../assets/register.jpg";
// import useAuthCall from "../hooks/useAuthCall";

// const Register = () => {
//   const { register } = useAuthCall();
//   const theme = useTheme();

//   const registerSchema = object({
//     username: string()
//       .max(10, "Kullanıcı adı 10 karakterden az olmalıdır.")
//       .required(),
//     firstName: string().max(20, "İsim 20 karakterden az olmalıdır.").required(),
//     lastName: string()
//       .max(20, "Soyisim 30 karakterden az olmalıdır.")
//       .required(),

//     email: string().email().required(),
//     password: string()
//       .required("password zorunludur")
//       .min(8, "password en az 8 karakter olmalıdır")
//       .max(20, "password en fazla 20 karakter olmalıdır")
//       .matches(/\d+/, "Password bir sayı içermelidir")
//       .matches(/[a-z]/, "Password bir küçük harf içermelidir")
//       .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
//       .matches(/[@$!%*?&]+/, "Password bir özel karakter içermelidir"),
//   });

//   return (
//     <Container maxWidth="lg">
//       <Grid
//         container
//         justifyContent="center"
//         direction="row-reverse"
//         rowSpacing={{ sm: 3 }}
//         sx={{
//           height: "100vh",
//           p: 2,
//         }}
//       >
//         <Grid item xs={12}>
//           <Typography variant="h3" color="primary" align="center">
//             Inventory Management App
//           </Typography>
//         </Grid>

//         <Grid item xs={12} sm={10} md={6}>
//           <Avatar
//             sx={{
//               backgroundColor: "secondary.light",
//               m: "auto",
//               width: 40,
//               height: 40,
//             }}
//           >
//             <LockIcon size="30" />
//           </Avatar>
//           <Typography
//             variant="h4"
//             align="center"
//             mb={2}
//             color="secondary.light"
//           >
//             Register
//           </Typography>

//           <Formik
//             initialValues={{
//               username: "",
//               firstName: "",
//               lastName: "",
//               email: "",
//               password: "",
//             }}
//             validationSchema={registerSchema}
//             onSubmit={(values, actions) => {
//               console.log(values);
//               register(values);
//               actions.resetForm(); // initial values döndü
//               actions.setSubmitting(false);
//             }}
//             // component={(props) => <RegisterForm {...props} />}
//           >
//             {({
//               values,
//               handleChange,
//               handleBlur,
//               errors,
//               touched,
//               isSubmitting,
//             }) => (
//               <Form>
//                 <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//                   <TextField
//                     label="User Name"
//                     name="username"
//                     id="username"
//                     type="text"
//                     variant="outlined"
//                     value={values.username}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     helperText={touched.username && errors.username}
//                     error={touched.username && Boolean(errors.username)}
//                   />
//                   <TextField
//                     label="First Name"
//                     name="firstName"
//                     id="firstName"
//                     type="text"
//                     variant="outlined"
//                     value={values.firstName}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     helperText={touched.firstName && errors.firstName}
//                     error={touched.firstName && Boolean(errors.firstName)}
//                   />
//                   <TextField
//                     label="Last Name"
//                     name="lastName"
//                     id="last_name"
//                     type="text"
//                     variant="outlined"
//                     value={values.lastName}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     helperText={touched.lastName && errors.lastName}
//                     error={touched.lastName && Boolean(errors.lastName)}
//                   />
//                   <TextField
//                     label="Email"
//                     name="email"
//                     id="email"
//                     type="email"
//                     variant="outlined"
//                     value={values.email}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     helperText={touched.email && errors.email}
//                     error={touched.email && Boolean(errors.email)}
//                   />
//                   <TextField
//                     label="password"
//                     name="password"
//                     id="password"
//                     type="password"
//                     variant="outlined"
//                     value={values.password}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     helperText={touched.password && errors.password}
//                     error={touched.password && Boolean(errors.password)}
//                   />
//                   <TextField
//                     label="Confirm Password"
//                     name="password2"
//                     id="password2"
//                     type="password"
//                     variant="outlined"
//                     value={values.password2}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     helperText={touched.password2 && errors.password2}
//                     error={touched.password2 && Boolean(errors.password2)}
//                   />
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     size="large"
//                     disabled={isSubmitting}
//                   >
//                     Sıgn Up
//                   </Button>
//                 </Box>
//               </Form>
//             )}
//           </Formik>
//           <Box
//             sx={{
//               textAlign: "center",
//               mt: 2,
//               color: theme.palette.secondary.main,
//             }}
//           >
//             <Link to="/">Already have an account? Sign in</Link>
//           </Box>
//         </Grid>

//         <Grid item xs={12} sm={7} md={6}>
//           <Container>
//             <img src={image} alt="" />
//           </Container>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Register;



import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import { Formik, Form } from "formik";
// import image from "../assets/regi.avif";
import Grid from "@mui/material/Grid";
import RegisterForm, { registerSchema } from "../components/RegisterForm";
import { Link } from "react-router-dom";
import { Box, useTheme } from "@mui/material";
import { object, string } from "yup";
import { TextField, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import image from "../assets/register.jpg";
import useAuthCall from "../hooks/useAuthCall";

const Register = () => {
  const { register } = useAuthCall();
  const theme = useTheme();

  // const registerSchema = object({
  //   username: string()
  //     .max(10, "Kullanıcı adı 10 karakterden az olmalıdır.")
  //     .required(),
  //   firstName: string().max(20, "İsim 20 karakterden az olmalıdır.").required(),
  //   lastName: string()
  //     .max(20, "Soyisim 30 karakterden az olmalıdır.")
  //     .required(),

  //   email: string().email().required(),
  //   password: string()
  //     .required("password zorunludur")
  //     .min(8, "password en az 8 karakter olmalıdır")
  //     .max(20, "password en fazla 20 karakter olmalıdır")
  //     .matches(/\d+/, "Password bir sayı içermelidir")
  //     .matches(/[a-z]/, "Password bir küçük harf içermelidir")
  //     .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
  //     .matches(/[@$!%*?&]+/, "Password bir özel karakter içermelidir"),
  // });

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" align="center">
            Inventory Management App
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
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              console.log(values);
              register(values);
              actions.resetForm(); // initial values döndü
              actions.setSubmitting(false);
            }}
            component={(props) => <RegisterForm {...props} />}
          >
            {/* {({
              values,
              handleChange,
              handleBlur,
              errors,
              touched,
              isSubmitting,
            }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="User Name"
                    name="username"
                    id="username"
                    type="text"
                    variant="outlined"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.username && errors.username}
                    error={touched.username && Boolean(errors.username)}
                  />
                  <TextField
                    label="First Name"
                    name="firstName"
                    id="firstName"
                    type="text"
                    variant="outlined"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.firstName && errors.firstName}
                    error={touched.firstName && Boolean(errors.firstName)}
                  />
                  <TextField
                    label="Last Name"
                    name="lastName"
                    id="last_name"
                    type="text"
                    variant="outlined"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.lastName && errors.lastName}
                    error={touched.lastName && Boolean(errors.lastName)}
                  />
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.email && errors.email}
                    error={touched.email && Boolean(errors.email)}
                  />
                  <TextField
                    label="password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.password && errors.password}
                    error={touched.password && Boolean(errors.password)}
                  />
                  <TextField
                    label="Confirm Password"
                    name="password2"
                    id="password2"
                    type="password"
                    variant="outlined"
                    value={values.password2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.password2 && errors.password2}
                    error={touched.password2 && Boolean(errors.password2)}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
                  >
                    Sıgn Up
                  </Button>
                </Box>
              </Form>
            )} */}
          </Formik>
          <Box
            sx={{
              textAlign: "center",
              mt: 2,
              color: theme.palette.secondary.main,
            }}
          >
            <Link to="/">Already have an account? Sign in</Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={7} md={6}>
          <Container>
            <img src={image} alt="" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;