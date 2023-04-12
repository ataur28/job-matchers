import React, { useState } from 'react';
import './JobDetailsAll.css'
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetailsAll = () => {
    const { jobId } = useParams();
    // const jobs = useLoaderData();
    // console.log(jobs)
    const [details, setDetails] = useState(useLoaderData());
    console.log(details);

    const job = details.find((job) => job.id == jobId)
    console.log(job)
    // setJobs(jobDetails);
    const { jobDescription, jobResponsibility, requirement, experiences, salary, title, phone, email, location } = job;

    console.log(jobId);
    return (
        <div>
            <div>
                <h1>Job Details</h1>
            </div>
            <div className='job-details-container'>
                <div className='job-details-dec'>
                    <p className='job-details-primary-text'><span className='text-bold'>Job Description:</span> {jobDescription}</p>
                    <p className='job-details-primary-text'><span className='text-bold'>Job Responsibility:</span>{jobResponsibility}</p>
                    <p className='job-details-primary-text'><span className='text-bold'>Educational Requirements:</span></p>
                    <p className='job-details-primary-text'>{requirement}</p>
                    <p className='job-details-primary-text'><span className='text-bold'>Experiences:</span></p>
                    <p className='job-details-primary-text'>{experiences}</p>

                </div>
                <div>
                    <div className='job-details-info'>
                        <h3 className='job-details-title-primary'>Job Details</h3>
                        <hr className='hr' />
                        <p className='job-details-primary-text'><span className='text-bold'>Salary : </span>{salary}</p>
                        <p className='job-details-primary-text'><span className='text-bold'>Job Title : </span>{title}</p>
                        <h3 className='job-details-title-primary'>Contact Information</h3>
                        <hr className='hr' />
                        <p className='job-details-primary-text'><span className='text-bold'>Phone : </span>{phone}</p>
                        <p className='job-details-primary-text'><span className='text-bold'>Email : </span>{email}</p>
                        <p className='job-details-primary-text'><span className='text-bold'>Address : </span>{location}</p>
                    </div>
                    <button className='apply-btn'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetailsAll;