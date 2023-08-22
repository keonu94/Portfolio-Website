// Models for the Work History

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: 'Unable to establish server connection.' });
    } else  {
        console.log('Connection has been established with "Cluster0" on MongoDB Atlas Cluster using Mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const jobSchema = mongoose.Schema({
	company:  { type: String, required: true },
    title:    {type: String, required: true },
	years:   { type: Number, required: true },
	date:     { type: Date, required: true, min: '1920-01-01'}
});

// Compile the model from the schema 
// by defining the collection name "jobs".
const jobs = mongoose.model('Job', jobSchema);


// CREATE model *****************************************
const createJob = async (company, title, years, date) => {
    const job = new jobs({ 
        company: company,
        title: title, 
        years: years, 
        date: date 
    });
    return job.save();
}


// RETRIEVE model *****************************************
// Retrieve based on a filter and return a promise.
const retrieveJobs = async () => {
    const query = jobs.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveJobByID = async (_id) => {
    const query = jobs.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteJobById = async (_id) => {
    const result = await jobs.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateJob = async (_id, company, title, years, date) => {
    const result = await jobs.replaceOne({_id: _id }, {
        company: company,
        title: title,
        years: years,
        date: date
    });
    return { 
        _id: _id, 
        company: company,
        title: title,
        years: years,
        date: date 
    }
}

// EXPORT the variables for use in the controller file.
export { createJob, retrieveJobs, retrieveJobByID, updateJob, deleteJobById }