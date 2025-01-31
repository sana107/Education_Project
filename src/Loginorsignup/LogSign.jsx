import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Tab,
  Tabs,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import axios from "axios";
import { baseUrl } from "../../Config";
import { useNavigate } from "react-router-dom";

const LogSign = () => {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);

  // State for login form values
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

  // State for sign-up form values
  const [signUpValues, setSignUpValues] = useState({
    fullName: "",
    number: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    address: "",
    state: "",
    city: "",
    pincode: "",
  });

  // State for error messages
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    number: "",
    dob: "",
    address: "",
    state: "",
    city: "",
    pincode: "",
  });

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  // Handle changes to the form fields for login and sign-up
  const handleInputChange = (e, form) => {
    const { name, value } = e.target;

    if (form === "login") {
      setLoginValues({
        ...loginValues,
        [name]: value,
      });
      validateFields(name, value, form);
    } else if (form === "signUp") {
      setSignUpValues({
        ...signUpValues,
        [name]: value,
      });
      validateFields(name, value, form);
    }
  };

  // Validate fields dynamically
  const validateFields = (name, value, form) => {
    let errorMessages = form === "login" ? { ...errors } : { ...errors };

    if (name === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(value)) {
        errorMessages.email = "Enter a valid email address";
      } else {
        errorMessages.email = "";
      }
    }

    if (name === "password") {
      if (value.length < 8) {
        errorMessages.password = "Password must be at least 8 characters";
      } else {
        errorMessages.password = "";
      }
    }

    if (name === "confirmPassword") {
      if (value !== signUpValues.password) {
        errorMessages.confirmPassword = "Passwords do not match";
      } else {
        errorMessages.confirmPassword = "";
      }
    }

    // Specific validations for Sign-Up fields
    if (form === "signUp") {
      if (name === "fullName" && value.trim() === "") {
        errorMessages.fullName = "Full Name is required";
      }
      if (name === "number") {
        // Ensure number is exactly 10 digits
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(value)) {
          errorMessages.number = "Phone number must be 10 digits";
        } else {
          errorMessages.number = "";
        }
      }
      if (name === "dob" && value.trim() === "") {
        errorMessages.dob = "Date of Birth is required";
      }
      if (name === "address" && value.trim() === "") {
        errorMessages.address = "Address is required";
      }
      if (name === "state" && value.trim() === "") {
        errorMessages.state = "State is required";
      }
      if (name === "city" && value.trim() === "") {
        errorMessages.city = "City is required";
      }
      if (name === "pincode") {
        // Ensure pincode is exactly 6 digits
        const pincodeRegex = /^[0-9]{6}$/;
        if (!pincodeRegex.test(value)) {
          errorMessages.pincode = "Pincode must be 6 digits";
        } else {
          errorMessages.pincode = "";
        }
      }
    }

    setErrors(errorMessages);
  };

  // Disable the "Login" button if fields are invalid
  const isLoginFormValid =
    loginValues.email &&
    loginValues.password &&
    !errors.email &&
    !errors.password;

  // Disable the "SignUp" button if fields are invalid
  const isSignUpFormValid =
    signUpValues.fullName &&
    signUpValues.number &&
    signUpValues.email &&
    signUpValues.password &&
    signUpValues.confirmPassword &&
    signUpValues.dob &&
    signUpValues.address &&
    signUpValues.state &&
    signUpValues.city &&
    signUpValues.pincode &&
    !errors.fullName &&
    !errors.number &&
    !errors.email &&
    !errors.password &&
    !errors.confirmPassword &&
    !errors.dob &&
    !errors.address &&
    !errors.state &&
    !errors.city &&
    !errors.pincode;

  // Handle form submission for login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/user/login`, {
        email: loginValues.email,
        password: loginValues.password,
      });

      if (response.data.status) {
        localStorage.setItem("authToken", response.data.token);
        // window.location.href = '/otp';
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Login failed", error);
      setErrors({ ...errors, email: "Invalid email or password" });
    }
  };

  // Handle form submission for sign-up
  // const handleSignUpSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(`${baseUrl}/user/register`, {
  //       fullName: signUpValues.fullName,
  //       number: signUpValues.number,
  //       email: signUpValues.email,
  //       password: signUpValues.password,
  //       dob: signUpValues.dob,
  //       address: signUpValues.address,
  //       state: signUpValues.state,
  //       city: signUpValues.city,
  //       pincode: signUpValues.pincode,
  //     });

  //     if (response.data.status) {
  //       // Store only the phone number in localStorage
  //       localStorage.setItem("userPhoneNumber", signUpValues.number);
  //       alert("Sign up successful!");
  //       window.location.href = "/otp"; // Redirect to OTP page after successful sign-up
  //     } else {
  //       alert(response.data.message);
  //     }
  //   } catch (error) {
  //     console.error("Sign up failed", error);
  //   }
  // };

  // newfuntion

  // Handle form submission for sign-up
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/user/register`, {
        fullName: signUpValues.fullName,
        number: signUpValues.number,
        email: signUpValues.email,
        password: signUpValues.password,
        dob: signUpValues.dob,
        address: signUpValues.address,
        state: signUpValues.state,
        city: signUpValues.city,
        pincode: signUpValues.pincode,
      });

      if (response.data.status) {
        // Store only the phone number in localStorage
        console.log(response);
        console.log(response.data.data._id); // "6799f04dd93b36e122624014"
        console.log(response.data.data.otp); // "502443"
        navigate("/otp", {
          state: {
            userId: response.data.data._id,
            otps: response.data.data.otp,
          },
        });
        localStorage.setItem("userPhoneNumber", signUpValues.number);
        alert("Sign up successful!");
        // window.location.href = "/otp"; // Redirect to OTP page after successful sign-up
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Sign up failed", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        padding: "5px",
        justifyContent: "center",
        minHeight: "auto",
        backgroundColor: "#f0f4f8",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: tabIndex === 0 ? 500 : 800,
          padding: 4,
          borderRadius: 2,
          transition: "width 0.3s ease",
        }}
      >
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{
            marginBottom: 2,
            "& .MuiTabs-indicator": {
              backgroundColor: "#ffd6d6 !important",
            },
            "& .MuiTab-root.Mui-selected": {
              color: "#000",
            },
            "& .MuiTab-root": {
              color: "#aaa",
            },
          }}
        >
          <Tab style={{ textTransform: "capitalize" }} label="Login" />
          <Tab style={{ textTransform: "capitalize" }} label="Sign Up" />
        </Tabs>

        {tabIndex === 0 ? (
          // Login Form
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleLoginSubmit}
          >
            <Typography variant="h6" gutterBottom>
              Login Here
            </Typography>
            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              variant="outlined"
              name="email"
              value={loginValues.email}
              onChange={(e) => handleInputChange(e, "login")}
              helperText={errors.email}
              error={!!errors.email}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              name="password"
              value={loginValues.password}
              onChange={(e) => handleInputChange(e, "login")}
              helperText={errors.password}
              error={!!errors.password}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                marginTop: 2,
                backgroundColor: "#f61a25",
                color: "#fff",
                textTransform: "capitalize",
              }}
              type="submit"
              disabled={!isLoginFormValid}
            >
              Login
            </Button>
          </Box>
        ) : (
          // Sign-Up Form
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSignUpSubmit}
          >
            <Typography variant="h6" gutterBottom>
              Sign Up Here
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  type="text"
                  margin="normal"
                  variant="outlined"
                  name="fullName"
                  value={signUpValues.fullName}
                  onChange={(e) => handleInputChange(e, "signUp")}
                  helperText={errors.fullName}
                  error={!!errors.fullName}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  margin="normal"
                  variant="outlined"
                  name="email"
                  value={signUpValues.email}
                  onChange={(e) => handleInputChange(e, "signUp")}
                  helperText={errors.email}
                  error={!!errors.email}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  type="text"
                  margin="normal"
                  variant="outlined"
                  name="number"
                  value={signUpValues.number}
                  onChange={(e) => handleInputChange(e, "signUp")}
                  helperText={errors.number}
                  error={!!errors.number}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  type="date"
                  margin="normal"
                  variant="outlined"
                  name="dob"
                  value={signUpValues.dob}
                  onChange={(e) => handleInputChange(e, "signUp")}
                  helperText={errors.dob}
                  error={!!errors.dob}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  name="password"
                  value={signUpValues.password}
                  onChange={(e) => handleInputChange(e, "signUp")}
                  helperText={errors.password}
                  error={!!errors.password}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  name="confirmPassword"
                  value={signUpValues.confirmPassword}
                  onChange={(e) => handleInputChange(e, "signUp")}
                  helperText={errors.confirmPassword}
                  error={!!errors.confirmPassword}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Address"
                  type="text"
                  margin="normal"
                  variant="outlined"
                  name="address"
                  value={signUpValues.address}
                  onChange={(e) => handleInputChange(e, "signUp")}
                  helperText={errors.address}
                  error={!!errors.address}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="State"
                  type="text"
                  margin="normal"
                  variant="outlined"
                  name="state"
                  value={signUpValues.state}
                  onChange={(e) => handleInputChange(e, "signUp")}
                  helperText={errors.state}
                  error={!!errors.state}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="City"
                  type="text"
                  margin="normal"
                  variant="outlined"
                  name="city"
                  value={signUpValues.city}
                  onChange={(e) => handleInputChange(e, "signUp")}
                  helperText={errors.city}
                  error={!!errors.city}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Pincode"
                  type="text"
                  margin="normal"
                  variant="outlined"
                  name="pincode"
                  value={signUpValues.pincode}
                  onChange={(e) => handleInputChange(e, "signUp")}
                  helperText={errors.pincode}
                  error={!!errors.pincode}
                />
              </Grid>
            </Grid>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                marginTop: 2,
                backgroundColor: "#f61a25",
                color: "#fff",
                textTransform: "capitalize",
              }}
              type="submit"
              disabled={!isSignUpFormValid}
            >
              Sign Up
            </Button>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default LogSign;
