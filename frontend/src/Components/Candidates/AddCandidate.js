import './addCandi.css'

import { useContext, useState } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'

const AddCandidate = ({ handlePop }) => {
    const { url } = useContext(StoreContext)

    console.log(url)

    const [data, setData] = useState({
        name: '',
        email: '',
        phno: "",
        position: "",
        experience: "",
        // resume: ""

    })



    console.log(data)

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleChnage = (e) => {
        const name = e.target.name
        const value = e.target.value;

        setData({ ...data, [name]: value })
    }

    const addCandidate = async () => {

        const res = await axios.post(url + '/api/candidate/addcadidate', data)


        if (res.data.status === 200) {

            alert('Candidate Added Sucessfully')
            handlePop()
            window.location.reload()
        }
        else {
            alert(res.data.message)
        }
    }


    return (
        <div className='add-popup'>


            <div className='pop-form'>
                <div className='head'>

                    <p>Add New Candidate</p>
                    <span onClick={handlePop}>X</span>

                </div>




                <div className='form'>

                    <div>
                        <input onChange={handleChnage} name='name' type='text' value={data.name} placeholder='Full Name' />
                    </div>
                    <div>
                        <input onChange={handleChnage} name='email' type='text' value={data.email} placeholder='Email Address' />
                    </div><div>
                        <input onChange={handleChnage} name='phno' type='text' value={data.phno} placeholder='Phone Number' />
                    </div><div>
                        <input onChange={handleChnage} name='position' type='text' value={data.position} placeholder='Position' />
                    </div><div>
                        <input onChange={handleChnage} name='experience' type='text' value={data.experience} placeholder='Experience' />
                    </div>
                    <div>
                        <input placeholder='Resume' />
                    </div>




                </div>

                <div className='check'>
                    <input type='checkbox' checked={isChecked}
                        onChange={handleCheckboxChange} />
                    <span>I hereby declare that the above information is true to the best of my knowledge and belief</span>

                </div>

                <div className='btn-div'>
                    <button onClick={addCandidate} className='btn'>Save</button>

                </div>


            </div>
        </div>
    )
}

export default AddCandidate