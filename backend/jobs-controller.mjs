// Controllers for Work History

import 'dotenv/config';
import express from 'express';
import * as jobs from './jobs-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/jobs', (req,res) => { 
    jobs.createJob(
        req.body.company,
        req.body.title, 
        req.body.years, 
        req.body.date
        )
        .then(job => {
            res.status(201).json(job);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Unable to add new job.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/jobs', (req, res) => {
    jobs.retrieveJobs()
        .then(job => { 
            if (job !== null) {
                res.json(job);
            } else {
                res.status(404).json({ Error: 'Jobs could not be found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Retrieval request has failed.' });
        });
});


// RETRIEVE by ID controller
app.get('/jobs/:_id', (req, res) => {
    jobs.retrieveJobByID(req.params._id)
    .then(job => { 
        if (job !== null) {
            res.json(job);
        } else {
            res.status(404).json({ Error: 'Job could not be found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Unable to retrieve job.' });
    });

});


// UPDATE controller ************************************
app.put('/jobs/:_id', (req, res) => {
    jobs.updateJob(
        req.params._id, 
        req.body.company,
        req.body.title, 
        req.body.years, 
        req.body.date
    )
    .then(job => {
        res.json(job);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Unable to update job.' });
    });
});


// DELETE Controller ******************************
app.delete('/jobs/:_id', (req, res) => {
    jobs.deleteJobById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(200).send({ Success: 'Job was successfully deleted.' });
            } else {
                res.status(404).json({ Error: 'Unable to locate job.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Job deletion request was unsuccessful.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});