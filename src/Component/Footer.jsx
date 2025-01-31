import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <>
            <footer>
             
                <div className="container-fluid px-2">
                    <div className="cntr">
                        <div className='footer-section'>
                            <div className='footerbox1'>
                                <div className='box1'>
                                    <img src="https://i.ibb.co/48Nm1Nw/Screenshot-2025-01-01-160007.png" alt="" />
                                </div>
                            </div>
                            <div className='footerbox'>
                                <div>
                                    <h4>Company <hr /></h4>
                                    <ul>
                                        <li><hr /> About</li>
                                        <li><hr /> Blog</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='footerbox'>
                                <div>
                                    <h4>Product & Service<hr /></h4>
                                    <ul>
                                        <li><hr /> Batch & Course</li>
                                        <li><hr /> Free Quizzes</li>
                                    </ul>
                                </div>                            </div>
                            <div className='footerbox'>
                                <div>
                                    <h4>Support <hr /></h4>
                                    <ul>
                                        <li><hr /> Contact</li>
                                        <li><hr /> Documention</li>
                                    </ul>
                                </div>                            </div>
                        </div>
                        <div className='footer-bottom'>
                            <a href="">© 2024 . <span >Khatihelper <i class="fa fa-certificate" aria-hidden="true"></i> <i class="fa-solid fa-check"></i>
                            </span> . All rights reserved</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
