import { NavLink } from 'react-router-dom'
import './sidbar.css'

import { assets } from '../../assets/assets'
import { useContext, useEffect } from 'react'
import axios from 'axios'
import { StoreContext } from '../../Context/StoreContext'

const Sidebar = ({ viewLogout }) => {

    
    return (
        <div className="side-bar">

            <div className='logo'>
                <img src={assets.logo} alt='logo' />

                <input type='text' placeholder='Search' />
            </div>

            <div className='sidebar-options'>


                <div className='siderbar-recruit'>
                    <p className='heading-section'>Recruitment</p>
                    <NavLink  to='/candidates' className='sidebar-option'>

                        <img src={assets.useradd} alt="logo" />
                        <p>Candidates</p>

                    </NavLink>

                </div>



                <div className='siderbar-organi'>

                    <p className='heading-section'>Organization</p>
                    <NavLink to='/employees' className='sidebar-option'>

                        <img src={assets.user} alt="logo" />
                        <p>Employes</p>

                    </NavLink> <NavLink className='sidebar-option'>

                        <img src={assets.cellur} alt="logo" />
                        <p>Attendance</p>

                    </NavLink>
                    <NavLink className='sidebar-option'>

                        <img src={assets.shine} alt="logo" />
                        <p>Leaves</p>

                    </NavLink>
                   

                </div>

                <div>
                    <p className='heading-section'>Others</p>
                </div>


<div className='log-out'>

    <img src={assets.logout} alt='log-out' />
<p className='logout' onClick={viewLogout}>Logout</p>
  
</div>


            </div>




        </div>
    )

}

export default Sidebar