import React from 'react';
import './JobDetails.css'

const JobDetails = ({ job }) => {
    console.log(job);
    const { logo, title, name, jobTime, jobCategory, location, salary } = job;
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
                <button className='view-btn'>View Details</button>
            </div>

        </div>
    );
};

export default JobDetails;