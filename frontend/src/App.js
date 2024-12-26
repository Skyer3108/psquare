
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { useEffect, useState } from 'react';
import LoginPopUp from './Components/LoginPopUp/LoginPopUp';
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';
import Candidates from './Components/Candidates/Candidates';
import AddCandidate from './Components/Candidates/AddCandidate';
import { useNavigate } from 'react-router-dom';

function App() {

  const [showAdd,setShowAdd]=useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate=useNavigate()

    const handlePop=()=>{

        console.log('Clicked')
        setShowAdd(!showAdd)

    }

    useEffect(()=>{

      const token=localStorage.getItem('authToken')
      if (token) {
        setIsLoggedIn(true); 
      }
    },[])


    const handleLoginSuccess = (token) => {
      localStorage.setItem('authToken', token); 
      setIsLoggedIn(true); 
    };

    const handleLogout = () => {
      localStorage.removeItem('authToken'); 
      setIsLoggedIn(false); 
      navigate('/')
    };
  return (
   <>

{
                showAdd?<AddCandidate handlePop={handlePop}/>:""
            }


   <div className='main'>
   {
isLoggedIn&& <Sidebar handleLogout ={handleLogout }/>
   }
   

    <div className='left'>

{
  isLoggedIn&&<Navbar/>
}
      

    <Routes>

<Route path='/' element={<LoginPopUp handleLoginSuccess={handleLoginSuccess}/>}  />
    <Route path='/candidates' element={<Candidates handlePop={handlePop}/>}/>

</Routes>

    </div>

  

   </div>




   </>
  );
}

export default App;
