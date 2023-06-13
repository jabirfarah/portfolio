import React from 'react'

function Title({children, id}) {
    return (
        <h1
        id={id && id}
        className='text-2xl font-bold underline underling-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white mt-8'>
            {children}
        </h1>
    )
}

export default Title;