import React from 'react'
import './about.css'
import Navbar from '../navbar/Navbar'

export const About = () => {
  return (
    <>
      <Navbar />
      {/* .............ABOUT US SECTION....................... */}
      <section className="about">
        <div className="column">
          <img src="../../../assets/" alt="image" className="go" />
        </div>
        <div className="column">
          <div className="text-box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat suscipit aliquid quod nulla id tempora rem labore repellat est quia dolores minus expedita, itaque, eius veritatis, sunt aspernatur maiores fugit!
          </div>
        </div>
      </section>
    </>
  )
}

export default About