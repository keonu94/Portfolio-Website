import { React, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import JobList from '../components/JobList';

function JobsPage({ setJob }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [jobs, setJobs] = useState([]);

    // RETRIEVE the entire list of jobs
    const loadJobs = async () => {
        const response = await fetch('/jobs');
        const jobs = await response.json();
        setJobs(jobs);
    } 
    

    // UPDATE a single job
    const onEditJob = async job => {
        setJob(job);
        redirect("/update");
    }


    // DELETE a single job  
    const onDeleteJob = async _id => {
        const response = await fetch(`/jobs/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/jobs');
            const jobs = await getResponse.json();
            setJobs(jobs);
        } else {
            console.error(`helpful deletion message = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the jobs
    useEffect(() => {
        loadJobs();
    }, []);

    // DISPLAY the jobs
    return (
        <>
            <article>
                <h2>Resume</h2>
                <p>This is my resume, which showcases the many jobs I've had over the years. This resume includes the names of the companies
                    I've worked for, titles I've held, years I was employed, and my hire dates. Use the add, delete, or edit icons to update 
                    the resume.</p>
                    <JobList 
                        jobs={jobs} 
                        onEdit={onEditJob} 
                        onDelete={onDeleteJob} 
                        
                    />
                    
            </article>
            
        </>
    );
}

export default JobsPage;