import { NavLink } from 'react-router-dom'
import './sidbar.css'

const Sidebar = ({handleLogout }) => {
    return (
        <div className="side-bar">

            <div className='logo'>
                <img src='#' alt='logo' />

                <input type='text' placeholder='Search' />
            </div>

            <div className='sidebar-options'>


<div className='siderbar-recruit'>
<p className='heading-section'>Recruitment</p>
<NavLink className='sidebar-option'>

<img src='#' alt="logo" />
<p>Candidates</p>

</NavLink>

</div>

               

<div className='siderbar-organi'>

    <p className='heading-section'>Organization</p>
<NavLink className='sidebar-option'>

<img src='#' alt="logo" />
<p>Employes</p>

</NavLink> <NavLink className='sidebar-option'>

<img src='#' alt="logo" />
<p>Attendance</p>

</NavLink>
<NavLink className='sidebar-option'>

<img src='#' alt="logo" />
<p>Leaves</p>

</NavLink>
<NavLink className='sidebar-option'>

<img src='#' alt="logo" />
<p>Add Items</p>

</NavLink>

</div>

<div>
    <p className='heading-section'>Others</p>
</div>
               

              <p className='logout' onClick={handleLogout }>Logout</p>

            </div>




        </div>
    )

}

export default Sidebar