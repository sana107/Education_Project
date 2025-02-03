import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Avatar,
  Typography,
  Divider,
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  colors,
} from "@mui/material";
import {
  Menu,
  Share,
  Star,
  Feedback,
  Info,
  LocationOn,
  Policy,
  Receipt,
  Subscriptions,
  Redeem,
  ExitToApp,
  Close,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import axios, { Axios } from "axios";
import { baseUrl } from "../../Config";

// Dynamically simulated user data
const initialUserData = {
  name: "Girja Rajput",
  email: "mailto:girja@example.com",
  phone: "123-456-7890",
  gender: "female",
  dob: "1990-01-01",
  profileImage: "https://via.placeholder.com/60",
};
const menuItems = [
  {
    text: "Profile edit ",
    icon: (
      <Avatar
        src={initialUserData.profileImage}
        alt="User"
        sx={{ color: "red" }}
      />
    ),
  },
  { text: "Share the app", icon: <Share sx={{ color: "red" }} /> },
  { text: "Rate the app", icon: <Star sx={{ color: "red" }} /> },
  { text: "Feedback", icon: <Feedback sx={{ color: "red" }} /> },
  { text: "About us", icon: <Info sx={{ color: "red" }} /> },
  { text: "Check my position", icon: <LocationOn sx={{ color: "red" }} /> },
  { text: "Privacy Policy", icon: <Policy sx={{ color: "red" }} /> },
  { text: "My Transaction", icon: <Receipt sx={{ color: "red" }} /> },
  {
    text: "Prepp + Subscription",
    icon: <Subscriptions sx={{ color: "red" }} />,
  },
  { text: "Refer & Earn Program", icon: <Redeem sx={{ color: "red" }} /> },
];

const UserId = () => {
  const [open, setOpen] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  //   const [userData, setUserData] = useState("");
  const [userData, setUserData] = useState({});

  const [editedData, setEditedData] = useState({ ...userData });

  const toggleDrawer = () => setOpen(!open);
  const handleEditDialogOpen = () => {
    // API call when user clicks on 'Profile edit'
    fetchProfileData();
    setOpenEditDialog(true);
  };

  const handleEditDialogClose = () => setOpenEditDialog(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = () => {
    setUserData(editedData);
    handleEditDialogClose();
  };

  const fetchProfileData = async () => {
    try {
      const token = localStorage.getItem("authToken"); // Get the stored token
      if (!token) throw new Error("No token found");

      const response = await axios.post(
        `${baseUrl}/user/fetch-profile`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.status) {
        console.log(response, "USER ID");
        setUserData(response.data.data); // ✅ Ensure data is set
      } else {
        setUserData({}); // ✅ Avoid null state
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
      setUserData({}); // ✅ Handle failure gracefully
    }
  };

  return (
    <>
      <IconButton onClick={toggleDrawer} sx={{ color: "" }}>
        <Menu />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 355,
            p: 2,
            textAlign: "center",
            background: "linear-gradient(to right, #c0392b, #e74c3c)",
            color: "white",
          }}
        >
          <IconButton
            onClick={toggleDrawer}
            sx={{ position: "absolute", top: 10, right: 10, color: "white" }}
          >
            <Close />
          </IconButton>
          <Avatar
            src={userData.profileImage}
            sx={{ width: 60, height: 60, mx: "auto" }}
          />
          <Typography variant="h6">{userData.fullName}</Typography>

          <Typography variant="body2" sx={{ color: "white" }}>
            {userData.email}
          </Typography>
        </Box>
        <List>
          {menuItems.map(({ text, icon, action }, index) => (
            <ListItemButton
              key={index}
              onClick={
                text === "Profile edit " ? handleEditDialogOpen : undefined
              }
            >
              <ListItemIcon>{icon}</ListItemIcon>
              {action ? (
                <NavLink
                  to={action}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    color: isActive ? "red" : "inherit",
                  })}
                >
                  <ListItemText primary={text} />
                </NavLink>
              ) : (
                <ListItemText primary={text} />
              )}
            </ListItemButton>
          ))}
          <Divider />
          <ListItemButton>
            <ListItemIcon sx={{ color: "red" }}>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
          </ListItemButton>
          <Divider />
        </List>
      </Drawer>

      <Dialog open={openEditDialog} onClose={handleEditDialogClose}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Avatar
              src={userData.profileImage}
              sx={{ width: 100, height: 100, mx: "auto" }}
            />
            <Typography variant="body2" sx={{ mt: 1 }}>
              Current Profile Image
            </Typography>
          </Box>

          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={userData.fullName}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }} // ✅ Prevents overlap
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            // value={userData.email}
            value={userData?.email || ""}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }} // ✅ Prevents overlap
          />

          {/* <TextField
            label="Email"
            name="email"
            value={editedData?.email || ""}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          /> */}

          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            margin="normal"
            name="phone"
            value={userData.number}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }} // ✅ Prevents overlap
          />
          {/* <FormControl fullWidth margin='normal'>
            <InputLabel>Gender</InputLabel>
            <Select
              name='gender'
              value={userData.gender}
              onChange={handleInputChange}
              label='Gender'
            >
              <MenuItem value='male'>Male</MenuItem>
              <MenuItem value='female'>Female</MenuItem>
              <MenuItem value='other'>Other</MenuItem>
            </Select>
          </FormControl> */}
          <TextField
            label="Date of Birth"
            variant="outlined"
            fullWidth
            margin="normal"
            name="dob"
            type="date"
            value={
              userData.dob
                ? new Date(userData.dob).toISOString().split("T")[0]
                : ""
            }
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveChanges} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UserId;
