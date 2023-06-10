import React from 'react'

import portfolio from '../data/Portfolio';
import PortfolioItem from './PortfolioItem';
function Portfolio() {
    return (
        //Make sure you add the images later
        <div className='flex flex-col md:flex-row items-center justify-center flex-grow-0 flex-1 '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full '>
                {portfolio.map(project => (
                    <PortfolioItem
                    imgUrl={project.imgUrl}
                    title={project.title}
                    stack={project.stack}
                    link={project.link}

                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;