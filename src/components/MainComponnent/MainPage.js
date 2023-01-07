import React from 'react'
import EntitiesPannel from './EntitiesPannel'
import './mainpage.css'
function MainPage() {
  return (
    <div>
        <div className='userPannel'>
           <span className='userName'>Hi, User</span>
           <image alt ="user image"/>

        </div>
        <div className='detailsPannel'>
            <img className='imageWrapperr'src='https://cdn-icons-png.flaticon.com/512/3997/3997608.png' img='pdf'/>
            <span>Lucas films </span>

            <div className='detailswrapper'>
                <div className='detailsTitle'>
                    <span>Company Code</span>
                    <span>Domains</span>
                </div>
                <div className='emailsWrapper'>
                    <div>
                        <span>LUCF</span>
                    </div>
                    <div>
                        <span>@lucasFilms.com</span><br/>
                        <span>@lucasstarwars.com</span>
                    </div>
                </div>
            </div>
            <div>
                <span className='detailsTitle'>Company Logo</span>
                <span>unavailable</span>
                <hr/>
            </div>
            <div className='detailsLinks'>
                <span>Entities</span>
                <span>Invoice Codes</span>
                <span>Users</span>
            </div>

        </div>

        <EntitiesPannel/>

        {/* show entities */}


    </div>
  )
}

export default MainPage