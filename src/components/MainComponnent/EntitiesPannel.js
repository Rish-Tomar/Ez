import React from 'react'
import './entities.css'
function EntitiesPannel() {
  return (
    <div className='entitiesWrapper'>
        <div className='firstRow'>
            <span>4 Entities</span>
            <img  className='plus_sign' src='https://cdn-icons-png.flaticon.com/512/8371/8371357.png' alt='plus sign'/>
        </div>
        <div className='spacebetweenBilling smallFontt'>
            <span>Billing Location</span>
            <span>Entity Name</span>
            <span>Entity Code</span>
            <span>MSLA Valid through</span>
            <span>File Sharing</span>

        </div>
        <div className='billingDiv spacebetweenBilling smallFont'>
            <span>Riyadh, Kingdom of Saudi Arabia</span>
            <span>Lucas Films Private Limited</span>
            <span>LUCF01</span>
            <span>3 junne 2022-5 june 2030</span>
            <span>External</span>

        </div>
    </div>
  )
}

export default EntitiesPannel