import axios from 'axios'
import React, { useState } from 'react'
import { createAlert } from '../../utils/createAlert'

function Register() {
    //Javascript
    const[value,setValue] = useState({
        email:'',
        firstname:'',
        lastname:'',
        password:'',
        confirmpassword:''
    })
    const hdlOnChange = (e)=>{
        //code body
        setValue({
            ...value,
            [e.target.name] : e.target.value
        })
    }
    const hdlSubmit = async(e) =>{
        e.preventDefault()
        try {
            console.log(value)
            const res = await axios.post('http://localhost:8000/api/register',value)
            console.log(res)
            createAlert("success", "Register")
        } catch (error) {
            createAlert("info", error.response.data.message)
            console.log(error.response.data.message)
            
        }
    }

  return (
    <div className='flex w-full h-full justify-end'>
        <div className='w-64 border p-4 rounded-b-md' >
            <h1 className=' text-x1 font-bold text-center'>
                Register
                </h1>

                {/* Form */}
                <form onSubmit={hdlSubmit}>
                    <div className='flex flex-col gap-2 py-4'>
                        <input 
                        placeholder='Email'
                        type='text'
                        name ='email'
                        className='border w-full border-gray-700 
                        rounded-md p-1 px-4'
                        onChange={hdlOnChange}
                        />
                        <input 
                        placeholder='Firstname'
                        type='text'
                        name='firstname'
                        className='border w-full border-gray-700 
                        rounded-md p-1 px-4'
                        onChange={hdlOnChange}
                        />
                         <input 
                        placeholder='Lastname'
                        type='text'
                        name = "lastname"
                        className='border w-full border-gray-700 
                        rounded-md p-1 px-4'
                        onChange={hdlOnChange}
                        />
                         <input 
                        placeholder='Password'
                        type='text'
                        name= "password"
                        className='border w-full border-gray-700 
                        rounded-md p-1 px-4'
                        onChange={hdlOnChange}
                        />
                         <input 
                        placeholder='Confirm password'
                        type='text'
                        name="confirmpassword"
                        className='border w-full border-gray-700 
                        rounded-md p-1 px-4'
                        onChange={hdlOnChange}
                        />
                    </div>
                    <div className='flex justify-center'>
                        <button

                        className='bg-violet-600 text-white px-2 py-1'
                        > Register</button>
                    </div>
                </form>
        </div>
    </div>
  )
}

export default Register