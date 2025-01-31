import Slider from "react-slick";
import { Link, NavLink, useParams } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';
import { Box, Grid, Paper } from '@mui/material';
import '../../Books.css';
import { useSelector } from "react-redux";

export default function SBi() {
  const { tabData } = useSelector((state) => state.Book);
  const [showAll, setShowAll] = useState(false);
  const { category } = useParams();

  // Find the current category dynamically
  const currentTab = tabData.find((tab) => tab.category === category);

  if (!currentTab) {
    return <div>Category not found!</div>;
  }

  const currentData = currentTab.exams;
  const displayedData = showAll ? currentData : currentData.slice(0, 6);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: '#EEEAEA' }}>
        <div className="container">
          <div className="book-section">
            <div className='book-section-box'>
              <div className='boks-navbar'>
                <div>
                  <Link to='/book'>
                    <i className="fa-solid fa-arrow-left"></i>
                  </Link>
                </div>
                <div className="book-tittle">
                  <h6>Books</h6>
                  <span>{currentTab.span}</span>
                </div>
              </div>
              <div className='bookinput'>
                <input type="search" className='search-input' placeholder='Search' />
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
              </div>
              <div className='search-icons2' data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="https://i.ibb.co/2KFH6vB/Fill-7.png" alt="" />
              </div>
            </div>
            <div className="books-content">
              <Box className="examinnerbox">
                <div className='paddininsideboxes'>
                  <div className='d-flex mt-4' style={{ justifyContent: 'space-between' }}>
                    <div><h5 className="examheading">{currentTab.span}</h5></div>
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
                        <Grid item key={index}>
                          <NavLink style={{ textDecoration: 'none' }} to={`/book/${exam.link}`}>
                            <Paper
                              className="examin bookspos"
                              elevation={3}
                              sx={{
                                alignContent: 'center',
                                textAlign: 'left',
                                backgroundColor: '#fff',
                                borderRadius: '10px',
                                width: '118px',
                                height: '115px'
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
                              <div className='bookssectionround'></div>
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
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" style={{ borderRadius: '0px' }}>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Search</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className='bookinput d-block' style={{ maxWidth: '330px', margin: '0px auto' }}>
                  <input type="search" className='search-input' placeholder='Search' />
                  <i className="fa-solid fa-magnifying-glass search-icon"></i>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-dark">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
