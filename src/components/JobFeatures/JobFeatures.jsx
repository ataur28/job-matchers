import React, { useEffect, useState } from 'react';
import './JobFeatures.css'
import JobDetails from '../JobDetails/JobDetails';
import JobDetailsAll from '../JobDetailsAll/JobDetailsAll';

const JobFeatures = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('/jobFeature.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);



    return (
        <div>
            <h1 className='feature-title'>Featured Jobs</h1>
            <p className='feature-description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='job-feature-items'>
                {
                    jobs.map(job => <JobDetails
                    key={job.id}
                    job={job}
                    ></JobDetails>)
                }
            </div>
            <button className='see-all-jobs-btn'>See All Jobs</button>
        </div>
    );
};

export default JobFeatures;