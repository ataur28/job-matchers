import React from 'react';
import './JobDetails.css'
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const JobDetails = ({ job }) => {
    // console.log(job);
    const {id, logo, title, name, jobTime, jobCategory, location, salary } = job;
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
                    <p className='primary-text'>{location}</p>
                    <p className='primary-text'>Salary: {salary}</p>
                </div>
                {/* <p><a href={`/job/${id}`}>View Details</a></p>
                <p><ActiveLink to={`/job/${id}`}>View Details</ActiveLink></p> */}
                <Link to={`/job/${id}`}><button className='view-btn'>View Details</button></Link>
            </div>

        </div>
    );
};

export default JobDetails;