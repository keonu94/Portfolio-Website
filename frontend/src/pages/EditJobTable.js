import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import { AiOutlineFileDone } from "react-icons/ai"

export const EditJobTable = ({ jobToEdit }) => {
 
    const [company, setCompany] = useState(jobToEdit.company);
    const [title, setTitle]     = useState(jobToEdit.title);
    const [years, setYears]     = useState(jobToEdit.years);
    const [date, setDate]       = useState(jobToEdit.date);
    
    const redirect = useNavigate();

    const editJob = async () => {
        const response = await fetch(`/jobs/${jobToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                company: company,
                title: title, 
                years: years, 
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Job has been successfully edited!`);
        } else {
            const errMessage = await response.json();
            alert(`Job edit was unsuccessful. ${response.status}. ${errMessage.Error}`);
        }
        redirect("/jobs");
    }

    return (
        <>
        <article>
            <h2>Edit Resume</h2>
            <p>Please make necessary changes to the job below.</p>
            <table id="jobs">
                <caption>What kind of changes are you making?</caption>
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
                <td><label for="title">Job Title</label>
                        <input
                            type="text"
                            placeholder="Job title at company"
                            value={title}
                            onChange={e => setTitle(e.target.value)} 
                            id="title" />
                    </td>

                    <td><label for="years">Years</label>
                        <input
                            type="number"
                            value={years}
                            placeholder="Years employed at job"
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
                    <label for="submit">Save Changes</label>
                    <button
                            type="submit"
                            onClick={editJob}
                            id="submit"
                        ><i><AiOutlineFileDone></AiOutlineFileDone></i></button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditJobTable;