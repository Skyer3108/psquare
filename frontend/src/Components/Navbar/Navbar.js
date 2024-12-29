import './navbar.css'

import { assets } from '../../assets/assets'

const Navbar=()=>{

    return(
       
            <div className="nav-bar">
                <p>Candidate</p>

                <div className='nav-left'>
                    <img src={assets.mail} alt=""/>
                    <img src={assets.noti} alt=""/>
                    <img src={assets.profile} alt=""/>
                </div>
            </div>
      
    )

}
export default Navbar