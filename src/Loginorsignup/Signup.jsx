import React from "react";

const Signup = () => {
  return (
    <>
      <Box component="form" noValidate autoComplete="off">
        <Typography variant="h6" gutterBottom>
          Signup Here
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Full Name"
              margin="normal"
              variant="outlined"
              name="fullName"
              value={signupValues.fullName}
              onChange={handleSignupChange}
              helperText={errors.fullName}
              error={!!errors.fullName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone Number"
              margin="normal"
              variant="outlined"
              name="phone"
              value={signupValues.phone}
              onChange={handleSignupChange}
              helperText={errors.phone}
              error={!!errors.phone}
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
              value={signupValues.email}
              onChange={handleSignupChange}
              helperText={errors.email}
              error={!!errors.email}
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
              value={signupValues.dob}
              onChange={handleSignupChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Address"
              margin="normal"
              variant="outlined"
              name="address"
              value={signupValues.address}
              onChange={handleSignupChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="State"
              margin="normal"
              variant="outlined"
              name="state"
              value={signupValues.state}
              onChange={handleSignupChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="City"
              margin="normal"
              variant="outlined"
              name="city"
              value={signupValues.city}
              onChange={handleSignupChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Pincode"
              margin="normal"
              variant="outlined"
              name="pincode"
              value={signupValues.pincode}
              onChange={handleSignupChange}
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
              value={signupValues.password}
              onChange={handleSignupChange}
              helperText={errors.password}
              error={!!errors.password}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Confirm-password"
              type="password"
              margin="normal"
              variant="outlined"
              name="confirmPassword"
              value={signupValues.confirmPassword}
              onChange={handleSignupChange}
              helperText={errors.confirmPassword}
              error={!!errors.confirmPassword}
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
          disabled={!isSignupFormValid}
        >
          Sign up
        </Button>
      </Box>
    </>
  );
};

export default Signup;
