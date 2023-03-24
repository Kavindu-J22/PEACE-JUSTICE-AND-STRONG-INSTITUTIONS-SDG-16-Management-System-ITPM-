import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'

function Aboutme() {
    

    return (
        <section>
            <div>
                About-Me Page
            </div>

            <div>
                <Link to="/Works">Your Works(Add)</Link>
            </div>
            
        </section>
    )
}

export default Aboutme
