import './addCandi.css'

import { useState } from 'react'
const AddCandidate=({handlePop})=>{


    const [data,setData]=useState({
        name:'',
        email:'',
        phno:"",
        department:"",
        experience:"",
        resume:""

    })

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
 
    
    return (
        <div className='add-popup'>
 

 <div className='pop-form'>
<div className='head'>

<p>Add New Candidate</p>
<span onClick={handlePop}>X</span>

</div>
   



    <div className='form'>

<div>
    <input placeholder='Full Name'/>
</div>
<div>
    <input placeholder='Email Address'/>
</div><div>
    <input placeholder='Phone Number'/>
</div><div>
    <input placeholder='Department'/>
</div><div>
    <input placeholder='Experience'/>
</div>
<div>
    <input placeholder='Resume'/>
</div>




    </div>

    <div className='check'>
        <input type='checkbox'  checked={isChecked} 
                    onChange={handleCheckboxChange} />
                    <span>I hereby declare that the above information is true to the best of my knowledge and belief</span>

    </div>

<div className='btn-div'>
<button className='btn'>Save</button>
  
</div>


 </div>
        </div>
    )
}

export default AddCandidate