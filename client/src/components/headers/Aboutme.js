import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './aboutme.css';

function Aboutme() {
  const [formData, setFormData] = useState({
    jobRole: '',
    position: '',
    experience: '',
    aboutMe: '',
    serviceCharges: '',
    qualificationDetails: '',
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="aboutsection">
      <div className="leftbar">
        <div className="personcard"></div>
        <Link id="abtbtn" to="/Works">
          Your Works(Add)
        </Link>
      </div>

      <div className="aboutform">
        <h2>About Me</h2>
        <form>
          <div className="form-group">
            <label htmlFor="jobRole">Job Role</label>
            <input
              type="text"
              name="jobRole"
              value={formData.jobRole}
              onChange={onChangeInput}
            />
          </div>

          <div className="form-group">
            <label htmlFor="position">Position</label>
            <select
              name="position"
              id="position"
              value={formData.position}
              onChange={onChangeInput}
            >
              <option value="">Select position</option>
              <option value="senior">Senior</option>
              <option value="junior">Junior</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="experience">Experience (years)</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={onChangeInput}
            />
          </div>

          <div className="form-group">
            <label htmlFor="aboutMe">About Me (Description)</label>
            <textarea
              name="aboutMe"
              value={formData.aboutMe}
              onChange={onChangeInput}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="serviceCharges">Details of Service Charges (Description)</label>
            <textarea
              name="serviceCharges"
              value={formData.serviceCharges}
              onChange={onChangeInput}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="qualificationDetails">Details of Qualification (Description)</label>
            <textarea
              name="qualificationDetails"
              value={formData.qualificationDetails}
              onChange={onChangeInput}
            ></textarea>
          </div>

          <div className="form-group">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Aboutme;

