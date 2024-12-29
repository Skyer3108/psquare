import { useContext, useState } from "react"
import { StoreContext } from "../../Context/StoreContext"
import axios from "axios"


const Editemp=({ editPopUp,editCandidate})=>{

    console.log(editCandidate._id)

    const {url}=useContext(StoreContext)


    const [data,setData]=useState({
        name:editCandidate.name,
        email:editCandidate.email,
        phno:editCandidate.phno,
        department:editCandidate.department,
        position:editCandidate.positon,
        dob:editCandidate.dob,
    })

    const handleEditChange=(e)=>{
        const name=e.target.name
        const value=e.target.value

        setData({...data,[name]:value})

        console.log(data)

    }
    console.log(data)

    const handleUpdate=async()=>{

 const res=await axios.patch(`${url}/api/emp/emp-update/${editCandidate._id}`,data)

 if(res.data.status===200){
    alert('Employee Edited Sucessfully')
    window.location.reload()
 }else{
    alert(res.data.message)
 }

    }    


    return(

        <div className='add-popup'>


            <div className='pop-form'>
                <div className='head'>

                    <p>Edit Employee Details</p>
                    <span onClick={editPopUp}>X</span>

                </div>




                <div className='form'>

                    <div>
                        <input onChange={handleEditChange} type='text' name='name' value={data.name} placeholder='Full Name' />
                    </div>
                    <div>
                        <input onChange={handleEditChange} type='text' name='email' value={data.email} placeholder='Email Address' />
                    </div><div>
                        <input onChange={handleEditChange} type='text'name='phno' value={data.phno} placeholder='Phone Number' />
                    </div><div>
                        <input onChange={handleEditChange} type='text' name='department' value={data.department} placeholder='Department' />
                    </div><div>
                        <input onChange={handleEditChange} type='text' name='position' value={data.position} placeholder='Position' />
                    </div>
                    <div>
                        <input onChange={handleEditChange} name='dob' type="date" value={data.dob} placeholder='Date Of Joining' />
                    </div>




                </div>

               

                <div className='btn-div'>
                    <button onClick={handleUpdate} className='btn'>Update</button>

                </div>


            </div>
        </div>

    )
}

export default Editemp