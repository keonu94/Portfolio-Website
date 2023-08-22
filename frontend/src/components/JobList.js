import React from 'react';
import { Link } from 'react-router-dom';
import { RiFileAddFill } from "react-icons/ri";
import Job from './Job';


// Change the function names and parameters 
// to fit your portfolio topic and schema.

function JobList({ jobs, onDelete, onEdit }) {
    return (
        <table id="jobs">
            <caption>Add and Edit Jobs</caption>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Title</th>
                    <th>Years</th>
                    <th>Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th><Link to="/create"><i><RiFileAddFill></RiFileAddFill></i></Link></th>
                </tr>
            </thead>
            <tbody>
                {jobs.map((job, i) => 
                    <Job 
                        job={job} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)
                    }
            </tbody>
        </table>
    );
}

export default JobList;
