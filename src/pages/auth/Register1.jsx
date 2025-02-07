import axios from 'axios'
import React, { useState } from 'react'
import { createAlert } from '../../utils/createAlert'
import { useForm } from 'react-hook-form'
import FormInput from '../../componenta/form/FormInput'
import Button from '../../componenta/form/Button'

//validator
import { registerSchema } from '../../utils/validators'
import { zodResolver } from '@hookform/resolvers/zod'

function Register1() {
    //Javascript
   const { register, handleSubmit, formState} = useForm({
    resolver: zodResolver(registerSchema)
   })
    const { isSubmitting, errors } = formState

    console.log(errors)

    const hdlSubmit = async(value) =>{
        try {
            console.log(value)

            //Delay
            await new Promise ((resolve)=> setTimeout(resolve,3000))

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
                Register1
                </h1>

                {/* Form */}
                <form onSubmit={ handleSubmit(hdlSubmit)}>
                    <div className='flex flex-col gap-2 py-4'>

                    <FormInput register={register} name= "email" />
                    <FormInput register={register} name= "firstname" />
                    <FormInput register={register} name= "lastname" />
                    <FormInput register={register} name= "password" />
                    <FormInput register={register} name= "confirmpassword" />

                    </div>
                    <div className='flex justify-center'>
                        <Button isSubmitting={isSubmitting} label = "register"/>
                    </div>
                </form>
        </div>
    </div>
  )
}

export default Register1