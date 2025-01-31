import './Books.css';
import Slider from "react-slick";
import { Link, NavLink } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab, Grid, Paper } from '@mui/material';
import { useSelector } from 'react-redux';


export default function Books() {
  const {tabData} = useSelector((state)=>state.Book);
  const [selectedTab, setSelectedTab] = useState(0);
  const [showAll, setShowAll] = useState(false); 

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const currentData = Array.isArray(tabData[selectedTab]?.exams)
  ? tabData[selectedTab].exams
  : [];  // Default to an empty array if exams is not an array


  const displayedData = showAll ? currentData : currentData.slice(0, 6); // Display only 10 items or all based on the state
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="container-fluid" style={{backgroundColor:'#EEEAEA'}}>
      <div className="container">
        <div className="book-section">
        <div className='book-section-box'>
          <div className='boks-navbar'>
            <div>
              <Link to='/'> 
                <i class="fa-solid fa-arrow-left"></i>
              </Link>
            </div>
            <div className="book-tittle">
              <h6>Books</h6>
              <span>Government Exams</span>
            </div>
          </div>
          <div className='bookinput'>
            <input type="search" className='search-input' placeholder='Search' />
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
          </div>
          <div className='search-icons2' data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src="https://i.ibb.co/2KFH6vB/Fill-7.png" alt="" />
          </div>
        </div>
          <div className="books-content">
            <Box className="examinnerbox" >
              {/* Tabs */}
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                className="mt-3 tabsbutton"
                variant="scrollable"
                scrollButtons={true}
                aria-label="scrollable prevent tabs example"
                textColor="primary"
                TabIndicatorProps={{
                  style: { display: 'none' },
                }}
                sx={{
                  '& .MuiTab-root': {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: '8px',
                    backgroundColor: '#FDC0B6',
                    marginX: 1,
                    padding: '10px',
                    fontWeight: 600,
                    fontSize: '12px',
                    transition: 'all 0.3s',
                    color: '#686868',
                    fontFamily: "'Poppins', sans-serif",
                    height: '55px',
                  },
                  '& .MuiTab-root.Mui-selected': {
                    backgroundColor: '#EB3E22',
                    color: '#fff',
                  },
                  '& .MuiTab-wrapper': {
                    flexDirection: 'column',
                  },
                }}
              >
                {Object.keys(tabData).map((key, index) => (
                  <Tab
                    style={{
                      fontSize: '16px',
                      fontWeight: '500',
                      textAlign: 'left'
                    }}
                    key={index}
                    label={<span style={{ fontSize: '12px', marginRight: 'auto', fontFamily: "'Poppins', sans-serif", }}>
                      {tabData[key].label}
                    </span>}
                    icon={
                      <p>
                        {tabData[key].span}
                      </p>
                    }
                  />
                ))}
              </Tabs>
              <div className='paddininsideboxes'>
              <div className='d-flex mt-4 ' style={{ justifyContent: 'space-between' }}>
                <div><h5 className="examheading">{tabData[selectedTab].span}</h5></div>
                <div>
                  <span onClick={toggleShowAll} style={{ cursor: 'pointer', color: '#EB3E22' }}>
                    {showAll ? 'See Less' : 'See All'}
                  </span>
                </div>
              </div>
              {/* Dynamic Content */}
              <Box sx={{ marginTop: 4 }}>
                <Grid container spacing={3} className='bookwrap'>
                  {displayedData.map((exam, index) => (
                    <Grid item key={index} >
                      <NavLink to={`/book/${exam.link}`} style={{ textDecoration: 'none' }}>
                      <Paper
                        className="examin bookspos"
                        elevation={3}
                        sx={{
                          alignContent: 'center',
                          textAlign: 'left',
                          backgroundColor: '#fff',
                          borderRadius: '10px',
                          width: '118px',
                          height:'115px'
                        }}
                      >
                        <Box sx={{ alignContent: 'center', textAlign: 'center' }}>
                          <img
                            src={exam.logo}
                            alt={exam.title}
                            style={{
                              width: '35px',
                              height: '37px',
                            }}
                          />
                          <h4 variant="h4" fontWeight="bold" style={{ fontSize: '12px', fontWeight: '500', paddingTop: '10px' }}>
                            {exam.title}
                          </h4>
                        </Box>
                        <div className='bookssectionround'>

                        </div>
                      </Paper>
                    </NavLink>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              </div>
            </Box>
          </div>
        </div>
      </div>
      <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content" style={{borderRadius:'0px'}}>
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Search </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className='bookinput d-block' style={{maxWidth:'330px',margin:'0px auto'}}>
            <input type="search" className='search-input' placeholder='Search' />
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
          </div>
      </div>
      <div class="modal-footer">
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        <button type="button" class="btn btn-dark">Search</button>
      </div>
    </div>
  </div>
</div>
    </div>

  );
}
