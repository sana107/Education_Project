import React, { useState, useEffect } from "react";
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
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
import axios from "axios";
import { baseUrl } from "../../Config";

const menuItems = [
  {
    text: "Profile edit ",
    icon: <Avatar sx={{ color: "red" }} />,
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
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProfileData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("authToken");
      if (!token) throw new Error("No token found");

      const response = await axios.post(
        `${baseUrl}/user/fetch-profile`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.status) {
        setUserData(response.data.data);
      } else {
        setError("Failed to fetch profile data");
        setUserData({});
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
      setError(error.message);
      setUserData({});
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch profile data when drawer opens
  useEffect(() => {
    if (open) {
      fetchProfileData();
    }
  }, [open]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleEditDialogOpen = () => {
    setOpenEditDialog(true);
  };

  const handleEditDialogClose = () => {
    setOpenEditDialog(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) throw new Error("No token found");

      handleEditDialogClose();
      // Refresh profile data after update
      fetchProfileData();
    } catch (error) {
      console.error("Error updating profile:", error);
      setError(error.message);
    }
  };

  return (
    <>
      <IconButton onClick={toggleDrawer}>
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

          {isLoading ? (
            <Typography>Loading...</Typography>
          ) : error ? (
            <Typography color="error">{error}</Typography>
          ) : (
            <>
              <Avatar
                src={userData.profileImage}
                sx={{ width: 60, height: 60, mx: "auto" }}
              />
              <Typography variant="h6">{userData.fullName}</Typography>
              <Typography variant="body2">{userData.email}</Typography>
            </>
          )}
        </Box>

        <List>
          {menuItems.map(({ text, icon }, index) => (
            <ListItemButton
              key={index}
              onClick={
                text === "Profile edit " ? handleEditDialogOpen : undefined
              }
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
          <Divider />
          <ListItemButton>
            <ListItemIcon sx={{ color: "red" }}>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
          </ListItemButton>
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
            name="fullName"
            value={userData.fullName || ""}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            value={userData.email || ""}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            margin="normal"
            name="number"
            value={userData.number || ""}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          />

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
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
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
