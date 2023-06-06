import React from 'react'

function Footer() {
    return (
        <div className='py-5 text-center '>
            <div className='text-sm mt-2 opacity-50'>
                &copy; {new Date().getFullYear()} Jabir Farah. All rights reserved.
            </div>
        </div>
    )
}

export default Footer;