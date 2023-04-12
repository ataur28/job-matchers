import React from 'react';
import './AppliedJobs.css'
import { useLoaderData } from 'react-router-dom';
import ReviewJob from '../ReviewJob/ReviewJob';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    console.log(jobs)
    return (
        <div>
            <div className='banner'>
                <h1 className='banner-title'>Applied Job</h1>
            </div>
            <div className='filter-btn'>
                <button className='primary-btn'>Full Time</button>
                <button className='primary-btn'>Part Time</button>
            </div>
            <div>
                {
                    jobs.map(job => <ReviewJob
                        key={job.id}
                        job={job}
                    ></ReviewJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;