import React from 'react'
import './offers.css'

export const Offers = () => {
  return (
    <section id='offers'>
      <div className='para-1'>Deals & discounts</div>
      <div className='para-2'>Lorem ipsum dolor sit amet consectetur. Facilisi id elementum morbi netus diam sed. Ut placerat porta erat orci.</div>
      <div className="grid">
        <div className="column">
          <img src="./assets/pedro-gandra-w7riMytN6Wk-unsplash.jpg" style={{ width: '300px', height: '300px' }} alt="" />
        </div>
        <div className="column">
          <img src="./assets/drew-dizzy-graham-cB4Uqoc9D9k-unsplash.jpg" style={{ width: '300px', height: '300px' }} alt="" />
        </div>
        <div className="column">
          <img src="./assets/shot-by-cerqueira-IJmr4nrqzow-unsplash.jpg" style={{ width: '300px', height: '300px' }} alt="" />
        </div>
        <div className="column">
          <img src="./assets/weiqi-xiong-mlw5KDesQrA-unsplash.jpg" style={{ width: '300px', height: '300px' }} alt="" />
        </div>
        <div className="column">
          <img src="./assets/harrison-fitts-VXHqJN52K6s-unsplash.jpg" style={{ width: '300px', height: '300px' }} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Offers