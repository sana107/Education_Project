import React from 'react'
import Banner from './Banner/Banner'
import ExamPreparing from './Exam-preparing/ExamPreparing'
import TestSeries from './Test-series/TestSeries'
import Footertop from '../Component/Footertop'
import Books from '../Books/Books'

export default function () {
  return (
    <div>
      <div>
      <Banner/>
      </div>
      <div className='section-padding'>
      <ExamPreparing/>
      {/* <Books/> */}
      </div>
      <div className='section-padding'> 
        <TestSeries/>
      </div>
      <Footertop/>
    </div>
  )
}
