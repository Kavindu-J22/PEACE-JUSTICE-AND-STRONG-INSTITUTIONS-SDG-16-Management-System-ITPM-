import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './register.css';
import swal from 'sweetalert';

function Register() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    gender: 'Male',
    dateOfBirth: '',
    email: '',
    contactNumber: '',
    country: 'sl',
    address: '',
    nicOrPassportNumber: '',
    password: '',
    role: '1',
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {

      await axios.post('/user/register', { ...user });

      localStorage.setItem('firstLogin', true);

      swal({
        title: 'Hii..! Wellcome to HARMONY HUB',
        text: 'Your Registration is Successful',
        icon: 'success',
        buttons: false,
        timer: 1200,
      }).then((value) => {
        window.location.href = '/';
      });
    } catch (err) {
      swal(err.response.data.msg);
    }
  };

  return (
    <div className="R-body">
      <section className="R-section">
        {/* currnt start */}
        <div className="R-login-page">
          <div className="R-login-page-content">
            <h2>USER REGISTRATION</h2>

            <form className="R-form" onSubmit={registerSubmit}>
              <div className="R-inputBx">
                <input
                  type="text"
                  name="firstName"
                  required
                  value={user.firstName}
                  onChange={onChangeInput}
                />
                <i>First Name</i>
              </div>

              <div className="R-inputBx">
                <input
                  type="text"
                  name="lastName"
                  required
                  value={user.lastName}
                  onChange={onChangeInput}
                />
                <i>Last Name</i>
              </div>

              <div className="R-inputBx">
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  id="gender"
                  value={user.gender}
                  onChange={onChangeInput}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="R-inputBx">
                <label htmlFor="dateOfBirth">Date Of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  required
                  value={user.dateOfBirth}
                  onChange={onChangeInput}
                />
              </div>

              <div className="R-inputBx">
                <input
                  type="email"
                  name="email"
                  required
                  value={user.email}
                  onChange={onChangeInput}
                />
                <i>Your Email</i>
              </div>

              <div className="R-inputBx">
                <input
                  type="number"
                  name="contactNumber"
                  required
                  value={user.contactNumber}
                  onChange={onChangeInput}
                />
                <i>Contact Number</i>
              </div>

              <div className="R-inputBx">
                <label htmlFor="country">Country</label>
                <select
                  name="country"
                  id="country"
                  value={user.country}
                  onChange={onChangeInput}
                  >
                  <option value="sl">Sri Lanka</option>
                  <option value="in">India</option>
                  <option value="En">America</option>
                  <option value="pa">Pakistan</option>
                  <option value="ba">Bangladesh</option>
                  <option value="cn">China</option>
                  </select>
                  </div>

                  <div className="R-inputBx">
            <input
              type="text"
              name="address"
              required
              value={user.address}
              onChange={onChangeInput}
            />
            <i>Address</i>
          </div>

          <div className="R-inputBx">
            <input
              type="text"
              name="nicOrPassportNumber"
              required
              value={user.nicOrPassportNumber}
              onChange={onChangeInput}
            />
            <i>NIC / Passport</i>
          </div>

          <div className="R-inputBx">
            <label htmlFor="userType">User Type</label>
            <select
              name="userType"
              id="userType"
              value={user.role}
              onChange={onChangeInput}
            >
              <option value="0">Client</option>
              <option value="1">Service Provider</option>
            </select>
          </div>

          <div className="R-inputBx">
            <input
              type="password"
              name="password"
              required
              autoComplete="on"
              value={user.password}
              onChange={onChangeInput}
            />
            <i>Set a Password</i>
          </div>

          <div className="R-inputBx">
            <input
              type="password"
              name="confirmPassword"
              required
              autoComplete="on"
              value={user.confirmPassword}
              onChange={onChangeInput}
            />
            <i>Confirm Password</i>
          </div>

          <div className="R-links">
            <h4>If you already have an Account</h4>
            <Link id="loglink" to="/login">
              Login here..!
            </Link>
          </div>

          <div className="R-inputBx">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
    {/* currnt End */}
  </section>
  <section className="company-logo">
    <h2 id="R-maxtitle">HARMONY HUB</h2>
    <p>"LET'S PROTECT OURSELVES"</p>
  </section>
</div>



    )
}

export default Register