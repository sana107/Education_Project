import React from 'react'
import './Banner.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { baseUrl } from "./config";

export default function Banner() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    // speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 4000,
    cssEase: "linear",
    waitForAnimate: false
  };
    return (
        <>
            <div className="container-fluid banner">
                <div className="container">
                    <div className="row bannerrow">
                    <div className="colsm8">
                        <div className='banner-how'>
                            <div className='howare'>
                                <h4>How are you ?</h4>
                            </div>
                            <div className="gettheapp">
                                <img src="https://cdn.shopify.com/s/files/1/0629/1757/4806/files/Google_Play_Store_badge_EN_svg_480x480.webp?v=1709611481" alt="" />
                                <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/W1QY2DmqqYlXYGii3wew/media/00971964-47f2-4cf9-94c0-f798b591af33.png" alt="" />
                                <div className='gettheappleft'>

                                </div>
                            </div>
                        </div>
                        <div className='emoji'>
                            <div><i class="fa-regular fa-face-smile"></i><i class="fa-regular fa-face-smile"></i><i class="fa-regular fa-face-smile"></i><i class="fa-regular fa-face-smile"></i>
                                <h4>Comprehensive Exam Covrege ,Adaptive Learning PLatform ,Real-Time Performance Analytics</h4>
                            </div>
                        </div>
                        <div className='banner-data'>
                            <div className='banner-data-inside'>
                                <div className='banner-box'>
                                    <div className='banner-trophy'>
                                        <div>
                                            <img src="https://i.ibb.co/xq27VKm/images.jpg" alt="" />
                                        {/* <i class="fa-solid fa-trophy"></i> */}
                                        </div>
                                    </div>
                                    <div className='banner-box-data'>
                                        <h4>Extensive User Base</h4>
                                        <p>Over [ x number] of students trust our platform annually for their exam preparation needs.</p>
                                    </div>
                                </div>
                                <div className='banner-box'>
                                    <div className='banner-trophy'>
                                        <div>
                                            <img src="https://i.ibb.co/xq27VKm/images.jpg" alt="" />
                                        {/* <i class="fa-solid fa-trophy"></i> */}
                                        </div>
                                    </div>
                                    <div className='banner-box-data'>
                                        <h4>Innovative Features</h4>
                                        <p>Introduced advanced AI-driven analytics and adaptive testing revolutionizing the mock test.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='divbox'>

                            </div>
                                        <div className='hrline'>
                                         <hr className='first' /><hr className='second' />
                                        </div>
                        </div>
                    </div>
                    <div className="colsm4">
                    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src='https://img.freepik.com/free-vector/couple-student-with-reading-book-hands_25030-39008.jpg?t=st=1735641493~exp=1735645093~hmac=c0fd25e9f30d27af971607c8431871dbad84239bf254bba00f472dd94434ba66&w=740' />
        </div>
        <div>
          <img src='https://img.freepik.com/free-vector/couple-student-with-reading-book-hands_25030-39026.jpg?t=st=1735641460~exp=1735645060~hmac=533d5ad4b052010baaea352ab2b6a41b296764a4f2872a62e93e16fc2e9afda1&w=740' />
        </div>
        <div>
          <img src='https://img.freepik.com/free-vector/three-girls-doing-different-things_1308-31174.jpg?t=st=1735641397~exp=1735644997~hmac=1eb3b1acbc0ec3a42356664701480bd38b6f4f2d27703e5e8ffc6435549a777f&w=740' />
        </div>
        <div>
          <img src='https://img.freepik.com/premium-vector/university-student-collection_23-2148179365.jpg?w=740' />
        </div>
        <div>
        <img src="https://img.freepik.com/free-vector/flat-people-going-university-collection_23-2148190292.jpg?t=st=1735640844~exp=1735644444~hmac=05d31357845da6ded94918f2a0bee9ca6d188d295e344492b8705662ff0243fb&amp;w=740" alt="https://img.freepik.com/free-vector/flat-people-going-university-collection_23-2148190292.jpg?t=st=1735640844~exp=1735644444~hmac=05d31357845da6ded94918f2a0bee9ca6d188d295e344492b8705662ff0243fb&amp;w=740" width="538" height="359" class="shrinkToFit"/>
        </div>
      </Slider>
    </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
{/* <div className="container my-4">
<div className="text-center mb-4">
<h4>How are you?</h4>
<div className="d-flex justify-content-center mt-2">
<span className="emoji">😊</span>
<span className="emoji">😐</span>
<span className="emoji">☹️</span>
</div>
</div>

<div className="text-center mb-4">
<button className="btn btn-dark me-2">
<i className="fab fa-google-play"></i> Get it on Google Play
</button>
<button className="btn btn-dark">
<i className="fab fa-apple"></i> Download on App Store
</button>
</div>

<div className="text-center">
<h5 className="text-danger fw-bold">
Comprehensive Exam Coverage, Adaptive Learning Platform, Real-Time
Performance Analytics
</h5>
</div>

<div className="row mt-4">
<div className="col-md-6">
<div className="card p-3 shadow-sm">
<div className="card-body">
  <h6 className="card-title text-danger">Extensive User Base</h6>
  <p className="card-text">
    Over <b>[X number]</b> of students trust our platform annually
    for their exam preparation needs.
  </p>
</div>
</div>
</div>
<div className="col-md-6">
<div className="card p-3 shadow-sm">
<div className="card-body">
  <h6 className="card-title text-danger">Innovative Features</h6>
  <p className="card-text">
    Introduced advanced AI-driven analytics and adaptive testing,
    revolutionizing the mock test.
  </p>
</div>
</div>
</div>
</div>
</div> */}
