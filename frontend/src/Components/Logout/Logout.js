import './logout.css'
const Logout=({viewLogout,handleLogout})=>{


    return(
    <div className="logout-pop">


<div className='logout-container'>
<div className='cont-head'>
<p className='log'>Log Out</p>
</div>

<p>Are you sure you want to log out?</p>

<div className='btns'>
    <button onClick={viewLogout} className='btn'>Cancel</button>
    <button onClick={handleLogout} className='btn-logout'>Log Out</button>
</div>



</div>
    </div>
    )
}

export default Logout