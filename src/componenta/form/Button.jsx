import React from 'react'
import { Loader } from 'lucide-react';

function Button({isSubmitting , label}) {
    return (
        <div><button
            className='bg-violet-600 text-white px-2 py-1 rounded-md hover:cursor-pointer'
        >
            {
                isSubmitting 
                ? <div className='flex gap-2'>
                    <Loader className='animate-spin'/>
                    <p>Loading...</p>
                </div> 
                : <p>{label}</p>
            }
        </button></div>
    )
}

export default Button