import { useContext, useState } from "react"
import './employ.css'
import { useEffect } from "react"
import axios from "axios"

import { assets } from "../../assets/assets"

import { StoreContext } from "../../Context/StoreContext"
//import Editemp from "./Editemp"
const Employees = ({editPopUp}) => {

const [data,setData]=useState([])


     const {url}=useContext(StoreContext)

     const [popupShow,setPopUpShow]=useState(null)
    
        const fetchEmployees=async()=>{
    
    
            const res=await axios.get(`${url}/api/emp/get-employees`)

            console.log(res.data.employees)

            if(res.status===200){
                setData(res.data.employees)
               
            }else{
                alert(res.data.message)
            }

            
        }
    

        const togglePop=(candidateId)=>{

            setPopUpShow((prev)=>(prev===candidateId?null:candidateId))

        }


        //DELETE

        const handleDelete=async(id)=>{
       const res=await axios.delete(`${url}/api/emp/emp-delete/${id}`)

       console.log(res)
       if(res.data.status===200){
        alert('Employee Deleted Sucessfully')
        setPopUpShow(null)

        fetchEmployees()
       }
       else{
        alert(res.data.message)
       }
        }
        useEffect(()=>{
    
            fetchEmployees()
    
        },[])

    return (

            <div className='main-can'>




                <div className="ser">

                    <div className="ser-right">
                        <div className='all'>
                            <p>All</p>
                            <p>^</p>
                        </div>



                    </div>

                    <div className="ser-left">

                        <div>
                            <input placeholder="Search" />
                        </div>



                    </div>

                </div>


                <div className='candidate-details'>

                    <div className='candi-head'>
                        <p>Profile</p>
                        <p>Employee Name</p>
                        <p>Email Address</p>
                        <p>Phone Number</p>
                        <p>Position</p>
                        <p>Department</p>
                        
                        <p>Date of Join</p>


                    </div>

                       
        {
            data.length === 0 ? (
                <p>Loading employees...</p>
            ) :
           data.map((candidate,index)=>(
            <div key={candidate._id} className='candi-data'>
             <img src={assets.profile} />
        <p>{candidate.name}</p>
        <p>{candidate.email}</p>
        <p>{candidate.phno}</p>
        <p>{candidate.positon}</p>
     <p>{candidate.department}</p>
        <p>{candidate.dob.split('T')[0]}</p>
        
        <div className="dot">
        <img src={assets.dots} onClick={()=>togglePop(candidate._id)} className="edit"/>

{
    popupShow===candidate._id&&<div className="popup">
         <p onClick={()=>editPopUp(candidate)}>Edit</p>
         <p onClick={()=>handleDelete(candidate._id)}>Delete</p>
        </div>
}
            </div>
    
                </div>
           ))
        }



                </div>


            </div>
        
    )
}

export default Employees