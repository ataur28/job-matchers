import React, { useState } from 'react';
import './JobDetailsAll.css'
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetailsAll = () => {
    const {jobId} = useParams();
    // const jobs = useLoaderData();
    // console.log(jobs)
    const[details, setDetails] = useState(useLoaderData());
    console.log(details);

    const job = details.find((job) => job.id == jobId )
    console.log(job)
    // setJobs(jobDetails);
    const {jobDescription, jobResponsibility} = job;

    console.log(jobId);
    return (
        <div>
            <div>
                <p>Job Description: {jobDescription}</p>
            </div>
            <div></div>
        </div>
    );
};

export default JobDetailsAll;