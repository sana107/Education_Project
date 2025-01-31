import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Chip,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestSeries.css";
const TestSeries = () => {
  // Added two more cards to the data array
  const testSeriesData = [
    {
      title: "SSC GD Constable 2025 Mock Test Series",
      tests: "917 Total Tests | 4 Free Tests",
      languages: "English, Hindi +5 More",
      details: [
        "1 Live Test",
        "40 Full Tests",
        "24 GK Capsule",
        "852 more tests",
      ],
      attempts: "522k attempted",
    },
    {
      title: "SSC GD Constable 2025 Mock Test Series",
      tests: "917 Total Tests | 4 Free Tests",
      languages: "English, Hindi +5 More",
      details: [
        "1 Live Test",
        "40 Full Tests",
        "24 GK Capsule",
        "852 more tests",
      ],
      attempts: "522k attempted",
    },
    {
      title: "RRB NTPC 2025 Mock Test Series",
      tests: "500 Total Tests | 2 Free Tests",
      languages: "English, Hindi +4 More",
      details: [
        "5 Live Tests",
        "30 Full Tests",
        "15 GK Capsules",
        "432 more tests",
      ],
      attempts: "300k attempted",
    },
    {
      title: "IBPS PO 2025 Mock Test Series",
      tests: "800 Total Tests | 5 Free Tests",
      languages: "English, Hindi +6 More",
      details: [
        "10 Live Tests",
        "50 Full Tests",
        "30 GK Capsules",
        "700 more tests",
      ],
      attempts: "450k attempted",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 200000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      <div className="container-fluid textbox">
        <Box className="textposition" sx={{ p: 2, position: "relative" }}>
          <div className="testexam">
            <h5 className="examheading">Popular Test Series</h5>
            <div className="hrline">
              <hr className="second" />
              <hr className="first" />
            </div>
          </div>
          <div className="slider-container  textslider">
            <Slider {...settings}>
              {testSeriesData.map((series, index) => (
                <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
                  {" "}
                  {/* Adjusted for 4 columns on medium screens */}
                  <Card
                    className="teztseriesinbox shadoww"
                    sx={{
                      borderRadius: 2,
                      boxShadow: 3,
                      p: 2,
                      backgroundColor: "#fff6f6",
                    }}
                  >
                    {" "}
                    {/* Added backgroundColor */}
                    <CardContent className="teztseriesinboxindex ">
                      {/* Align "522k attempted" to the right side */}
                      <Box
                        className="testattemp"
                        sx={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <i class="fa-solid fa-user-shield"></i>{" "}
                        <Chip
                          label={series.attempts}
                          color="primary"
                          size="small"
                          sx={{ mb: 1 }}
                          className="testatmp"
                        />
                      </Box>
                      <div className="textin-secton">
                        <div className="testinsideradius">
                          <div className="card-body text-center">
                            {/* Title */}
                            <h6 className="mb-3 texttittle">{series.title}</h6>

                            {/* Subtitle */}
                            <p className="mb-4 testradiusborder">
                              <h4 className="testseries"> {series.tests}</h4>

                              <div className="testlanguage">
                                <span>
                                  <i class="fa-solid fa-language"></i>
                                  {series.languages}
                                </span>
                              </div>
                              <div className="vrline"></div>
                            </p>

                            {/* Features List */}
                            <ul
                              className="list-unstyled  mb-4"
                              style={{ fontSize: "0.95rem" }}
                            >
                              {series.details.map((detail, i) => (
                                <h4 key={i} variant="body2">
                                  + {detail}
                                </h4>
                              ))}
                            </ul>

                            {/* Button */}
                          </div>
                          <div className="testintop"></div>
                          <div className="testinright"></div>
                          <div className="testinbottom"></div>
                          <div className="testinleft"></div>
                        </div>
                      </div>
                      <div className="testviewbuttondiv">
                        <button
                          className="btn btn-danger btn-lg w-100 testviewbutton"
                          style={{
                            borderRadius: "8px",
                            fontWeight: "bold",
                          }}
                        >
                          View Test
                        </button>
                      </div>
                    </CardContent>
                    <div className="teztseriesinboxredius"></div>
                  </Card>
                </Grid>
              ))}
            </Slider>
          </div>
        </Box>
        <div className="testboxin"></div>
      </div>
    </div>
  );
};

export default TestSeries;

// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   Grid,
//   Chip,
// } from "@mui/material";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./TestSeries.css";
// import { baseUrl } from "../../../Config";
// const TestSeries = () => {
//   const [testSeriesData, setTestSeriesData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTestSeries = async () => {
//       try {
//         const response = await axios.post(`${baseUrl}/testSeries/findAll`);

//         // Ensure response.data is an array
//         if (Array.isArray(response.data.data)) {
//           setTestSeriesData(response.data.data);
//         } else {
//           console.error("API response is not an array:", response.data);
//           setTestSeriesData([]); // Fallback to empty array
//         }

//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to fetch test series:", err);
//         setError("Failed to fetch test series");
//         setLoading(false);
//       }
//     };

//     fetchTestSeries();
//   }, []);
//   // console.log(testSeriesData, "testdata");
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 200,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     responsive: [
//       {
//         breakpoint: 1100,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 767,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   if (loading) return <Typography>Loading test series...</Typography>;
//   if (error) return <Typography color="error">{error}</Typography>;

//   return (
//     <div className="container-fluid textbox">
//       <Box className="textposition" sx={{ p: 2, position: "relative" }}>
//         <div className="testexam">
//           <h5 className="examheading">Popular Test Series</h5>
//           <div className="hrline">
//             <hr className="second" />
//             <hr className="first" />
//           </div>
//         </div>
//         <div className="slider-container textslider">
//           <Slider {...settings}>
//             {testSeriesData.map((item, index) => (
//               <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
//                 <Card
//                   className="teztseriesinbox shadoww"
//                   sx={{
//                     borderRadius: 2,
//                     boxShadow: 3,
//                     p: 2,
//                     backgroundColor: "#fff6f6",
//                   }}
//                 >
//                   <CardContent className="teztseriesinboxindex">
//                     <Box
//                       className="testattemp"
//                       sx={{ display: "flex", justifyContent: "flex-end" }}
//                     >
//                       <i className="fa-solid fa-user-shield"></i>{" "}
//                       <Chip
//                         label="100 attempt"
//                         color="primary"
//                         size="small"
//                         sx={{ mb: 1 }}
//                         className="testatmp"
//                       />
//                     </Box>
//                     <div className="textin-secton">
//                       <div className="testinsideradius">
//                         <div className="card-body text-center">
//                           <h6 className="mb-3 texttittle">{item.name}</h6>
//                           <p className="mb-4 testradiusborder">
//                             <h4 className="testseries">
//                               {" "}
//                               Price {item.pricing}
//                             </h4>
//                             <div className="testlanguage">
//                               <span>
//                                 <i className="fa-solid fa-language"></i>
//                                 {/* {item.languages} */}
//                                 hindi english
//                               </span>
//                             </div>
//                             <div className="vrline"></div>
//                           </p>
//                           {/* <ul
//                               className="list-unstyled  mb-4"
//                               style={{ fontSize: "0.95rem" }}
//                             >
//                               {item.details?.map((detail, i) => (
//                                 <h4 key={i} variant="body2">
//                                   + {detail.price}
//                                 </h4>
//                               ))}
//                             </ul> */}
//                         </div>
//                         <div className="testintop"></div>
//                         <div className="testinright"></div>
//                         <div className="testinbottom"></div>
//                         <div className="testinleft"></div>
//                       </div>
//                     </div>
//                     <div className="testviewbuttondiv">
//                       <button
//                         className="btn btn-danger btn-lg w-100 testviewbutton"
//                         style={{
//                           borderRadius: "8px",
//                           fontWeight: "bold",
//                         }}
//                       >
//                         View Test
//                       </button>
//                     </div>
//                   </CardContent>
//                   <div className="teztseriesinboxredius"></div>
//                 </Card>
//               </Grid>
//             ))}
//           </Slider>
//         </div>
//       </Box>
//       <div className="testboxin"></div>
//     </div>
//   );
// };

// export default TestSeries;
