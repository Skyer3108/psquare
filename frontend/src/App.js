
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoginPopUp from './Components/LoginPopUp/LoginPopUp';
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';
import Candidates from './Components/Candidates/Candidates';
import AddCandidate from './Components/Candidates/AddCandidate';
import { useNavigate } from 'react-router-dom';
import Employees from './Components/Employees/Employees';
import Editemp from './Components/Employees/Editemp';
import Logout from './Components/Logout/Logout';

function App() {

  const [showAdd, setShowAdd] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [logoutPopup, setLogoutPopup] = useState(false)

  //edit candidate
  const [editCandidate, setEditCandidate] = useState(null)

  const [editOpen, setEditOpen] = useState(false)
  const navigate = useNavigate()

  const handlePop = () => {

    console.log('Clicked')
    setShowAdd(!showAdd)


  }


  const editPopUp = (candidate) => {

    setEditOpen(!editOpen)

    setEditCandidate(candidate)
  }

  useEffect(() => {

    const token = localStorage.getItem('authToken')
    if (token) {
      setIsLoggedIn(true);
    }
  }, [])


  const handleLoginSuccess = (token) => {
    localStorage.setItem('authToken', token);
    setIsLoggedIn(true);
  };


  //Logout
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    navigate('/')
    setLogoutPopup(!logoutPopup)
  };

  const viewLogout = () => {

    setLogoutPopup(!logoutPopup)
  }
  return (
    <>

      {
        showAdd ? <AddCandidate handlePop={handlePop} /> : ""
      }

      {
        editOpen && <Editemp editPopUp={editPopUp} editCandidate={editCandidate} />
      }

      {
        logoutPopup&&<Logout handleLogout={handleLogout} viewLogout={viewLogout}/>
      }


      <div className='main'>
        {
          isLoggedIn && <Sidebar viewLogout={viewLogout} />
        }


        <div className='left'>

          {
            isLoggedIn && <Navbar />
          }


          <Routes>

            <Route path='/' element={isLoggedIn ? <Navigate to="/candidates" /> : <LoginPopUp handleLoginSuccess={handleLoginSuccess} />} />
            <Route path='/candidates' element={isLoggedIn ? <Candidates handlePop={handlePop} /> : <Navigate to="/" />} />

            <Route path='/employees' element={<Employees editPopUp={editPopUp} />} />

          </Routes>

        </div>



      </div>




    </>
  );
}

export default App;
