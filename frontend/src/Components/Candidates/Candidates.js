import { useContext, useEffect, useState } from 'react'
import './candidates.css'
import AddCandidate from './AddCandidate'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'

const Candidates = ({handlePop}) => {

    const [isPopupVisible, setIsPopupVisible] = useState(false)
    const {url}=useContext(StoreContext)
    const [selectedCandidate, setSelectedCandidate] = useState(null)
    const [data,setData]=useState([])

    console.log(url)

    const handleStatusClick = (candidateId) => {
        setSelectedCandidate(candidateId)
        setIsPopupVisible(true)
    }

    const getCandidates=async()=>{

        const res=await axios.get(url+'/api/candidate/getall-candidate/')

        console.log(res.data.data)
        setData(res.data.data)

    }


    const handleStatusChange = async(status) => {

        let dat={
            status
        }

        console.log(`${url}+/api/candidate/update-candidate/${selectedCandidate}`)

        const res=await axios.patch(`${url}/api/candidate/update-candidate/${selectedCandidate}`,dat)

        console.log(res)
        if(res.data.status===200){

console.log('hhhh')
getCandidates()
            setIsPopupVisible(false)
            setSelectedCandidate(null)
        }
        else{
            alert(res.data.message)
        }

    
      
    }

    useEffect(()=>{

        getCandidates()

    },[])



    console.log(data)

    return (
        <div className='main-can'>

           

            <div className="ser">

                <div className="ser-right">
                    <div className='all'>
                        <p>All</p>
                        <p>^</p>
                    </div>

                    <div className='all'>
                        <p>All</p>
                        <p>^</p>
                    </div>

                </div>

                <div className="ser-left">

                    <div>
                        <input placeholder="Search" />
                    </div>

                    <div>
                        <button onClick={handlePop} className="btn">Add New Candidate</button>

                    </div>

                </div>

            </div>


            <div className='candidate-details'>

                <div className='candi-head'>
                    <p>Sr.no</p>
                    <p>Candidate Name</p>
                    <p>Email Address</p>
                    <p>Phone Number</p>
                    <p>position</p>
                    <p>Status</p>
                    <p>Experience</p>
                    <p>Resume</p>


                </div>

               
                    {
                       data.map((candidate,index)=>(
                        <div key={candidate._id} className='candi-data'>
                            <p>{index}</p>
                    <p>{candidate.name}</p>
                    <p>{candidate.email}</p>
                    <p>{candidate.phno}</p>
                    <p>{candidate.position}</p>
                    <p onClick={()=>handleStatusClick(candidate._id)}>{candidate.status}</p>
                    <p>{candidate.experience}</p>
                    <p>Resume</p>
                            </div>
                       ))
                    }

                

            </div>
             {/* Status change popup */}
             {isPopupVisible && (
                <div className="status-popup">
                    <div className="status-popup-content">
                        <h3>Select New Status</h3>
                        <ul>
                            <li onClick={() => handleStatusChange('new')}>New</li>
                            <li onClick={() => handleStatusChange('rejected')}>Rejected</li>
                            <li onClick={() => handleStatusChange('ongoing')}>Ongoing</li>
                            <li onClick={() => handleStatusChange('selected')}>Selected</li>
                        </ul>
                        <button onClick={() => setIsPopupVisible(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Candidates