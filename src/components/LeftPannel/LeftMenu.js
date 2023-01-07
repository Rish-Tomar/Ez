import React, { useState } from 'react'
import './Leftmenu.css'
import { companies } from '../../assets/companies'
function LeftMenu() {
   
  const [menuItems,setMenuItems]=useState(7)
  
  function displayCompany(ele){
    return(
            <div className='companyCard'>
                <div className='spaceBetween'>
                    <span>Company Name</span>
                    <span>{ele.company}</span>
                </div>
                <div className='spaceBetween'>
                    <span> {ele.entities} Entities</span>
                    <span>{ele.users}</span>
                </div>
            </div>
    )
  }

  return (
    <div className='outerWrapper'>
        <div className='verticalColumnnOne'>
            <img src='https://cdn-icons-png.flaticon.com/512/5835/5835688.png' alt="Companny Logo"/>
            <div className='box'>
                
            </div>
            <div className='box'>
                
            </div>
            <div className='box'>
                
            </div>

        </div>
        <div className='verticalColumnTwo'>
            CLIENT
            < >
                <img className="imageWrapper" src="https://cdn-icons-png.flaticon.com/512/51/51271.png" />
                <span>Creation time</span>
                <img className="imageWrapper" src="https://cdn-icons-png.flaticon.com/512/8371/8371357.png"/>
                <br/>
                <input className='inputBox' type='text' placeholder='Company, User, Domain, Server, Location'/>
            </>
            <div className='componentTwo'>
                <span>April 2021</span> <img className='imageWrapper' src='https://cdn-icons-png.flaticon.com/512/9292/9292799.png'/>
            </div>
            <div>
                {companies.map((ele)=>(
                    displayCompany(ele)
                ))}
            </div>
           

        </div>
    </div>
  )
}

export default LeftMenu