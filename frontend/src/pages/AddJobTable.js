import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { MdAssignmentAdd } from "react-icons/md";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddJobTable = () => {

    const [company, setCompany]  = useState('');
    const [title, setTitle]      = useState('');
    const [years, setYears]      = useState('');
    const [date, setDate]        = useState('');
    
    const redirect = useNavigate();

    const addJob = async () => {
        const newJob = { company, title, years, date };
        const response = await fetch('/jobs', {
            method: 'post',
            body: JSON.stringify(newJob),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`A new job has been added!`);
        } else {
            alert(`Unable to add job to resume. = ${response.status}`);
        }
        redirect("/jobs");
    };


    return (
        <>
        <article>
            <h2>Add New Job</h2>
            <p>Please add a new job to the resume.</p>
            
            <table id="jobs">
                <caption>Where have you worked before?</caption>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Title</th>
                        <th>Years</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="company">Company name</label>
                        <input
                            type="text"
                            placeholder="Name of the company"
                            value={company}
                            onChange={e => setCompany(e.target.value)} 
                            id="company" />
                    </td>

                    <td><label for="title">Title of job</label>
                        <input
                            type="text"
                            value={title}
                            placeholder="Title held at job"
                            onChange={e => setTitle(e.target.value)} 
                            id="title" />
                    </td>

                    <td><label for="years">Years</label>
                        <input
                            type="number"
                            placeholder="Years employed at job"
                            value={years}
                            onChange={e => setYears(e.target.value)} 
                            id="years" />
                    </td>
                    <td><label for="date">Date</label>
                        <input
                            type="date"
                            placeholder="Hire date"
                            value={date}
                            onChange={e => setDate(e.target.value)} 
                            id="date" />
                    </td>

                    <td>
                    <label for="submit">Add Job</label>
                    <button
                            type="submit"
                            onClick={addJob}
                            id="submit"
                        ><i><MdAssignmentAdd></MdAssignmentAdd></i></button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddJobTable;

