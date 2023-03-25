import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import './aboutme.css'

function Aboutme() {
    

    return (
        <section className='aboutsection'>
            <div className='leftbar'>
                <div className='personcard'>
                    
                </div>
                <Link id='abtbtn' to="/Works">Your Works(Add)</Link>

            </div>

            <div className='aboutform'>
                About Form
            </div>

           
            
        </section>
    )
}

export default Aboutme
