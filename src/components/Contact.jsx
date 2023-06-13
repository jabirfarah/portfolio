import React from 'react'
import Title from './title';
function Contact() {
    return (
        
        <div className='flex flex-col mb-10 mx-auto'>
            
            <div className='flex justify-center items-center'>
                <form 
                action="https://getform.io/f/7de6a148-e7f9-4ad7-8b2f-b294e2bd7372"
                method='POST'
                className='flex flex-col w-full md:w-7/12'>
                    <Title>Contact</Title>
                    <input type="text"
                    name='name'
                    placeholder='Name'
                    className='p-2 bg-transparent rounded-md border-2 focus:outline-none' />
                    <input type="text" 
                    name='email'
                    placeholder='Email'
                    className='my-2 p-2 bg-transparent rounded-md border-2 focus:outline-none' />
                    <textarea
                    name='message'
                    placeholder='Message'
                    id='' 
                    rows='10'
                    className='p-2 mb-4 bg-transparent rounded-md border-2 focus:outline-none'
                    >
                    </textarea>
                    <button type='submit' className='inline-block text-center px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r bg-stone-900 dark:bg-white dark:text-stone-700 drop-shadow-md'>Work With Me</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;