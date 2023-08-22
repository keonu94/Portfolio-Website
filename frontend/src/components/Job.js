import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { FaEdit } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';


function Job({ job, onEdit, onDelete, onAdd }) {
    return (
        <tr>
            <td>{job.company}</td>
            <td>{job.title}</td>
            <td>{job.years}</td>
            <td>{job.date.slice(0,10)}</td>
            <td><i><TiDelete onClick={() => onDelete(job._id)} /></i></td>
            <td><i><FaEdit onClick={() => onEdit(job)} /></i></td>
            <td></td>
        </tr>
    );
}

export default Job;