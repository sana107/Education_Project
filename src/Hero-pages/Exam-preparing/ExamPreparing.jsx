import { useState, useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Tabs, Tab, Grid, Paper } from "@mui/material";
import "./ExamPreparing.css";
import { baseUrl } from "../../../Config";
import { NavLink } from "react-router-dom";
// import { data } from "react-router-dom";
const ExamPreparing = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [viewMore, setViewMore] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subCategories, setSubCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  // Replace this with your actual Bearer token
  const BEARER_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzZhOTdhZTJlMTM3MGY2OTI2NTE0ZTEiLCJpYXQiOjE3MzgxNDU4MzN9.1WFIDe0tjsK6nhM8gtY9VOBgHQH1_AFkCRuhI4yix2E";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.post(
          `${baseUrl}/category/findAllCategories`,
          {
            headers: {
              Authorization: `Bearer${BEARER_TOKEN}`, // Adding Bearer token here
            },
          }
        );
        if (response.data.status) {
          setCategoryId(response.data.data[0]._id);
        }
        setCategories(response.data); // Assuming API returns an array of categories
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);
  // console.log(categories, "data exam");

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleViewMore = () => {
    setViewMore((prev) => !prev);
  };

  useEffect(() => {
    fetchSubCategories();
  }, [categoryId]);

  const fetchSubCategories = async () => {
    // console.log(catId, "catData");
    // setCategoryId(catId);
    try {
      const response = await axios.post(
        `${baseUrl}/exam/findByCategoryId`,
        { categoryId },
        {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
          },
        }
      );
      setSubCategories(response.data); // subCategories
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };
  if (loading) {
    return <p>Loading categories...</p>;
  }
  // const currentTab = categories[selectedTab]?.name || "";
  // const currentData = categories[selectedTab]?.exams || [];

  return (
    <>
      <div className="container-fluid exambox">
        <Box className="examinnerbox" sx={{ padding: "20px" }}>
          <h5 className="examheading">Which Exam are you preparing for?</h5>

          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable prevent tabs example"
            textColor="primary"
            TabIndicatorProps={{ style: { display: "none" } }}
            sx={{
              "& .MuiTab-root": {
                border: "2px solid #F61A25",
                borderRadius: "30px",
                textTransform: "capitalize",
                marginX: 1,
                paddingX: 5,
                fontWeight: 700,
                fontSize: "1.2rem",
                transition: "all 0.3s",
                color: "#000",
                opacity: 1,
                "&:hover": {
                  opacity: 0.9,
                },
              },
              "& .MuiTab-root.Mui-selected": {
                backgroundColor: "#F61A25",
                color: "#fff",
              },
            }}
          >
            {categories.data
              .slice(0, viewMore ? categories.data.length : 3)
              .map((category, index) => (
                <Tab
                  key={index}
                  label={category.categoryName}
                  onClick={() => setCategoryId(category._id)}
                />
              ))}
            <Tab
              label={viewMore ? "Show Less" : "Show More"}
              onClick={handleViewMore}
            />
          </Tabs>

          <NavLink to="/subexam">
            <Box sx={{ marginTop: 4, backgroundColor: "red" }}>
              <Grid container spacing={3} justifyContent="flex-start">
                {subCategories.data?.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper
                      elevation={3}
                      sx={{
                        padding: "10px",
                        textAlign: "left",
                        // backgroundColor: "#fff",
                        backgroundColor: "cadetblue",
                        borderRadius: "15px",
                        overflow: "hidden",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {/* Exam Image */}
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          height: "140px",
                          borderRadius: "10px",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.examName}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                        />
                      </Box>

                      {/* Exam Details */}
                      <Box sx={{ padding: "10px", backgroundColor: "green" }}>
                        <Typography
                          variant="body2"
                          color="error"
                          fontWeight="bold"
                          sx={{ textTransform: "uppercase" }}
                        >
                          {item.category}
                        </Typography>
                        <Typography variant="h6" fontWeight="bold">
                          {item.examName}
                        </Typography>

                        {/* Price, Rating, Students Count */}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "5px",
                          }}
                        >
                          <Typography
                            variant="body1"
                            color="error"
                            fontWeight="bold"
                          >
                            {item.price}/-
                          </Typography>

                          <Typography
                            variant="body2"
                            sx={{
                              marginLeft: "10px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            ⭐ {item.rating}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ marginLeft: "10px" }}
                          >
                            {item.students} Std
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </NavLink>
        </Box>
      </div>
    </>
  );
};

export default ExamPreparing;
