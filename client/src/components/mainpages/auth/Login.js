import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

function Login() {
    const [user, setUser] = useState({
        email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/login', {...user})

            localStorage.setItem('firstLogin', true)
            
            swal({
                title: "Wellcome back to HARMONY HUB",
                text: "Login Successfull",
                icon: "success",
                buttons: false,
                timer: 1000,
            })
            .then((value) => {
                window.location.href = "/Header/NewHeader";
            });

        } catch (err) {
            swal(err.response.data.msg)
        }
    }

    return (
        <div className='L-body'>
            <section className='L-section'>
                                {/* current start */}

                                <div className="login-page">
                                    <div className='login-page-content'>
                                        <h2 id='maxtitle'>HARMONY HUB</h2>
                                        <h2>USER LOGIN</h2>
                                        
                                            <form className='L-form' onSubmit={loginSubmit}>

                                                <div className='L-inputBx'>
                                                <input type="email" name="email" required 
                                                value={user.email} onChange={onChangeInput} />
                                                <i>Your Email</i>
                                                </div>

                                                <div className='L-inputBx'>
                                                <input type="password" name="password" required autoComplete="on"
                                                value={user.password} onChange={onChangeInput} />
                                                <i>Password</i>
                                                </div>

                                                <div className='L-links'>
                                                    <h4>If you don't have an Account</h4>
                                                    <Link id='reglink' to="/register">Register here..!</Link>
                                                </div>

                                                <div className="L-inputBx">
                                                    <input type="submit" value="Login" />
                                                </div>
                                            </form>
                                        
                                    </div>
                                </div>

                                {/* current end */}

            </section>
        </div>
    )
}

export default Login
