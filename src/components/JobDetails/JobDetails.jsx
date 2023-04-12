import React from 'react';
import './JobDetails.css'
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollar, faLocation } from '@fortawesome/free-solid-svg-icons'

const JobDetails = ({ job }) => {
    // console.log(job);
    const { id, logo, title, name, jobTime, jobCategory, location, salary } = job;

    // const handleAddToCart = (job) => {
    //     console.log(job)
    // }

    return (
        <div>
            <div className='job-feature-item'>
                <img className='job-feature-logo' src={logo} alt="" />
                <h1 className='job-feature-title'>{title}</h1>
                <p className='job-feature-name'>{name}</p>
                <div className='job-category-time'>
                    <button className='primary-btn'>{jobCategory}</button>
                    <button className='primary-btn'>{jobTime}</button>
                </div>
                <div className='job-location-salary'>
                    <p className='primary-text'><FontAwesomeIcon icon={faLocation} /> {location}</p>
                    <p className='primary-text'><FontAwesomeIcon icon={faDollar} /> Salary: {salary}</p>
                </div>
                <Link to={`/job/${id}`}><button className='view-btn'>View Details</button></Link>
            </div>

        </div>
    );
};

export default JobDetails;