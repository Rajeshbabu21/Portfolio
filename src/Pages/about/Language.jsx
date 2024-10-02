import React from 'react'
import { LuBadgeCheck } from 'react-icons/lu'
import "./about.css"

const Language = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Programming Languages & Others</h3>

      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <span className='bsym'>
              <LuBadgeCheck />
            </span>

            <div>
              <h3 className='skills__name'>JAVA</h3>

              <span className='skills__level'>Intermediate</span>
            </div>
          </div>

          <div className='skills__data'>
            <span className='bsym'>
              <LuBadgeCheck />
            </span>

            <div>
              <h3 className='skills__name'>Pyhton</h3>

              <span className='skills__level'>Intermediate</span>
            </div>
          </div>

          <div className='skills__data'>
            <span className='bsym'>
              <LuBadgeCheck />
            </span>

            <div>
              <h3 className='skills__name'>OPPS</h3>

              <span className='skills__level'>Intermediate</span>
            </div>
          </div>
        </div>

        <div className='skills__group'>
          <div className='skills__data'>
            <span className='bsym'>
              <LuBadgeCheck />
            </span>

            <div>
              <h3 className='skills__name'>C++</h3>

              <span className='skills__level'>Basic</span>
            </div>
          </div>

          <div className='skills__data'>
            <span className='bsym'>
              <LuBadgeCheck />
            </span>

            <div>
              <h3 className='skills__name'>C</h3>

              <span className='skills__level'>Basic</span>
            </div>
          </div>

            {/* <h4 className='other'>Other</h4> */}
          <div className='skills__data'>

            {/* <br /> */}
            
            
            <span className='bsym'>
              <LuBadgeCheck />
            </span>

            <div>
              <h3 className='skills__name'>Figma</h3>

              <span className='skills__level'>Basic</span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Language