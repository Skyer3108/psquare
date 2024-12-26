import { useContext, useState } from 'react'
// import {assets} from '../../assets'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'
import { StoreContext } from '../../Context/StoreContext'
const LoginPopUp = ({ handleLoginSuccess }) => {

    const [currentState, setCurrentState] = useState('Login')

    const {url}=useContext(StoreContext)

    console.log(url)
    // let url='http://localhost:5005'
    console.log(url)
    const [data,setData]=useState({
        name:'',
        email:'',
        password:'',
        confirmpassword:''
    })

    const navigate=useNavigate()

    console.log(data)

    const onChangeHandler=(event)=>{
        
        const name=event.target.name
        const value=event.target.value

        setData(data=>({...data,[name]:value}))

    }

    const onLogin=async(event)=>{

        event.preventDefault()

        let newUrl=url

        if(currentState==='Login'){

            newUrl+='/api/user/login'
            

        }else{
  newUrl+='/api/user/register'
        }

        const response=await axios.post(newUrl,data)
        console.log(response)

        if(response.status==200){

            const token = response.data.token
            handleLoginSuccess(token);

            alert('Login Sucessfully')
            navigate('/candidates');



        }else{
            alert(response.data.message)
        }

    }
    
    return (
        <div className="login">
            <div className="login-container">

                <div className='login-right'>
                    <div>
                        <img src="#" alt='logo' />
                    </div>

                    <div className='login-form'>


                        <p className='heading'>Welcome to Dashboard</p>
                        <form onSubmit={onLogin} className='login-input'>

{
     currentState === 'Login' ? <></>: <div>
     <label>Full name</label>
     <input onChange={onChangeHandler}  name='name' value={data.name} placeholder='Full name' />
 </div>
}
                           


                            <div>
                                <label>EmailAddress</label>
                                <input onChange={onChangeHandler}  name='email' value={data.email} placeholder='Email Address' />
                            </div>
                            <div>

                                <label for='password'>Password</label>
                                <input onChange={onChangeHandler}   type='password' name='password' value={data.password} id='password' placeholder='Password' />
                            </div>


{
    currentState === 'Login' ? <></>: 
    <div>

        <label>Confirm Password</label>
        <input onChange={onChangeHandler}  name='confirmpassword' value={data.confirmpassword} placeholder='Confirm Password' />
    </div>
}



<button className='btn'>{currentState === 'Sign Up' ? "Register" : "Login"}</button>

{
     currentState === 'Login' ? <p className='mes'>Create a new account ? <span onClick={() => setCurrentState('Sign Up')}>Click Here</span></p>
     : <p className='mes'>Already have a account ? <span onClick={() => setCurrentState('Login')}>Login here</span></p>
}



                        </form>


                    </div>


                </div>


                <div className='login-left'>
                    bhbb
                </div>
            </div>
        </div>
    )


}

export default LoginPopUp