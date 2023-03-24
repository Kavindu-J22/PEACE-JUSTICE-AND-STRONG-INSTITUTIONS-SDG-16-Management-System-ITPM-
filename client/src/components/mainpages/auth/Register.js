import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import "./register.css"
import swal from 'sweetalert'

function Register() {
    const [user, setUser] = useState({
        name:'', email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)

            swal({
                title: "Hii..! Wellcome to HARMONY HUB",
                text: "Your Registration is Successfull",
                icon: "success",
                buttons: false,
                timer: 1200,
            })
            .then((value) => {
                window.location.href = "/Header/NewHeader";
            });

        } catch (err) {
            swal(err.response.data.msg)
        }
    }

    return (

        <div className='R-body'>
            <section className='R-section'>

                                    {/* // currnt start */}
                                    <div className="R-login-page">
                                        <div className='R-login-page-content'>

                                                <h2>USER REGISTRATION</h2>

                                                <form className='R-form' onSubmit={registerSubmit}>

                                                    <div className='R-inputBx'>
                                                        <input type="text" name="name" required
                                                         value={user.name} onChange={onChangeInput} />
                                                        <i>Frist Name</i>
                                                    </div>

                                                    <div className='R-inputBx'>
                                                        <input type="text" name="name" required
                                                          />
                                                        <i>Last Name</i>
                                                    </div>

                                                    <div className='R-inputBx'>
                                                    <label for="cars">Gender</label>
                                                    <select name="cars" id="cars">
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                    </div>

                                                    <div className='R-inputBx'>
                                                    <label for="cars">Date Of Birth</label>
                                                        <input type="date" name="date" required
                                                         />
                                                    </div>

                                                    <div className='R-inputBx'>
                                                        <input type="email" name="email" required
                                                         value={user.email} onChange={onChangeInput} />
                                                        <i>Your Email</i>
                                                    </div>

                                                    <div className='R-inputBx'>
                                                        <input type="number" name="number" required
                                                          />
                                                        <i>Contact Number</i>
                                                    </div>

                                                    <div className='R-inputBx'>
                                                    <label for="cars">Country</label>
                                                    <select name="cars" id="cars">
                                                        <option value="sl">Sri Lanks</option>
                                                        <option value="in">India</option>
                                                        <option value="En">America</option>
                                                        <option value="pa">Pakisthan</option>
                                                        <option value="ba">Bangladesh</option>
                                                        <option value="ba">Chaina</option>
                                                    </select>
                                                    </div>

                                                    <div className='R-inputBx'>
                                                        <input type="text" name="addr" required
                                                          />
                                                        <i>Address</i>
                                                    </div>

                                                    <div className='R-inputBx'>
                                                        <input type="number" name="number" required
                                                          />
                                                        <i>NIC / Passport</i>
                                                    </div>

                                                    <div className='R-inputBx'>
                                                    <label for="cars">User Type</label>
                                                    <select name="cars" id="cars">
                                                        <option value="Cl">Client</option>
                                                        <option value="sp">Service Provider</option>
                                                    </select>
                                                    </div>

                                                    <div className='R-inputBx'>
                                                        <input type="password" name="password" required autoComplete="on"
                                                         value={user.password} onChange={onChangeInput} />
                                                        <i>Set a Password</i>
                                                    </div>

                                                    <div className='R-inputBx'>
                                                        <input type="password" name="password" required autoComplete="on"
                                                         value={user.password} onChange={onChangeInput} />
                                                        <i>Confirm Password</i>
                                                    </div>

                                                    <div className='R-links'>
                                                        <h4>If you allready have an Account</h4>
                                                        <Link id='loglink' to="/login">Login here..!</Link>
                                                    </div>

                                                    <div className="R-inputBx">
                                                        <input type="submit" value="Register" />
                                                    </div>

                                                </form>
                                        </div>
                                    </div>
                                    {/* // currnt End */}
             </section> 
             <section className='company-logo'>
             <h2 id='R-maxtitle'>HARMONEY HUB</h2>
             <p>" lET'S PROTECT OVERSELVS "</p>
             </section>
        </div>

    )
}

export default Register