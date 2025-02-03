import { useState, useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Tabs, Tab, Grid, Paper, Button } from "@mui/material";
import "./ExamPreparing.css";
import { baseUrl } from "../../../Config";
import { NavLink } from "react-router-dom";
import { setSubExam } from "../../features/examSlice/subExamSlice";
import { useDispatch } from "react-redux";
// import { data } from "react-router-dom";

const ExamPreparing = () => {
  const dispatch = useDispatch();

  const [selectedTab, setSelectedTab] = useState(0);
  const [viewMore, setViewMore] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subCategories, setSubCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  // Replace this with your actual Bearer token
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzZhOTdhZTJlMTM3MGY2OTI2NTE0ZTEiLCJpYXQiOjE3MzgxNDU4MzN9.1WFIDe0tjsK6nhM8gtY9VOBgHQH1_AFkCRuhI4yix2E";
  const getSubExam = (examId) => {
    console.log(examId);
    const fetchSubExam = async () => {
      try {
        const response = await axios.post(
          `${baseUrl}/subExam/findByExamId`,
          { examId },
          {
            headers: {
              Authorization: `Bearer ${token}`, // Adding Bearer token here
            },
          }
        );
        console.log(response);
        if (response.data.status) {
          let subExamData = response.data.data;
          console.log(subExamData, "hi this is datat");
          dispatch(setSubExam(subExamData)); // Send data to Redux store
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubExam();
  };
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.post(
          `${baseUrl}/category/findAllCategories`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Adding Bearer token here
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
            Authorization: `Bearer ${token}`,
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
            {categories?.data
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
            <Box sx={{ marginTop: 4 }}>
              <Grid container spacing={3} justifyContent="flex-start">
                {subCategories.data?.map((item, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={index}
                    onClick={() => getSubExam(item._id)}
                    sx={{ textDecoration: "none" }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        padding: 2,
                        textAlign: "left",
                        backgroundColor: "#fff",
                        borderRadius: "16px",
                        overflow: "hidden",
                        transition: "transform 0.2s, box-shadow 0.2s",
                        cursor: "pointer",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                        },
                      }}
                    >
                      {/* Image Container */}
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          height: "200px",
                          borderRadius: "12px",
                          overflow: "hidden",
                          mb: 2,
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.examName}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.3s",
                          }}
                        />
                      </Box>

                      {/* Content Container */}
                      <Box sx={{ px: 1 }}>
                        {/* Category */}
                        <Typography
                          variant="subtitle2"
                          color="error"
                          fontWeight="600"
                          sx={{
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            mb: 1,
                          }}
                        >
                          {item.category}
                        </Typography>

                        {/* Exam Name */}
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            mb: 2,
                            fontSize: "1.1rem",
                            lineHeight: 1.3,
                            height: "2.6rem",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {item.examName}
                        </Typography>

                        {/* Details Row */}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mt: "auto",
                          }}
                        >
                          {/* Left side info */}
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1.5,
                            }}
                          >
                            <Typography
                              variant="body1"
                              color="error"
                              sx={{ fontWeight: 700 }}
                            >
                              ₹{item.price}
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 0.5,
                                color: "#666",
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 0.5,
                                }}
                              >
                                ⭐ {item.rating}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  "&::before": {
                                    content: '"•"',
                                    mx: 0.5,
                                  },
                                }}
                              >
                                {item.students} Students
                              </Typography>
                            </Box>
                          </Box>

                          {/* View Button */}
                          <Button
                            variant="contained"
                            color="error"
                            size="small"
                            sx={{
                              minWidth: "80px",
                              borderRadius: "20px",
                              textTransform: "none",
                              fontWeight: 600,
                              boxShadow: "none",
                              "&:hover": {
                                boxShadow: "none",
                                background: "#d32f2f",
                              },
                            }}
                          >
                            View
                          </Button>
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
