import React from 'react';
import './AppliedJobs.css'
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    console.log(jobs)
    return (
        <div>
            <h1>applied job: {jobs.length}</h1>
        </div>
    );
};

export default AppliedJobs;