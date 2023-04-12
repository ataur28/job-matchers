import React from 'react';
import './AppliedJobs.css'
import { useLoaderData } from 'react-router-dom';
import ReviewJob from '../ReviewJob/ReviewJob';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    console.log(jobs)
    return (
        <div>
            <h1>applied job: {jobs.length}</h1>
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