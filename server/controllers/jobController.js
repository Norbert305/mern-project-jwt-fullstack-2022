
const asyncHandler = require('express-async-handler')

const Job = require('../models/jobSchema')
const User = require('../models/userSchema')
//get jobs
//route get /api/jobs
//@access private
const getJobs = asyncHandler (async(req,res) =>{
    const jobs = await Job.find({user: req.user.id})
    res.status(200).json(jobs)
})
//post jobs
//route post /api/jobs
//@access private
const postJob =  asyncHandler (async(req,res) =>{
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
const job = await Job.create({
    text: req.body.text,
    user: req.user.id
})

    res.status(200).json(job)
})
//put jobs
//route put /api/jobs/:id
//@access private
const editJob = asyncHandler (async (req,res) =>{

    const job = await Job.findById(req.params.id)

    if(!job) {
        res.status(400)
        throw new Error('Job not found')
    }

    const user = await User.findById(req.user.id)
        //Check for user
    if(!user) {
            res.status(401)
            throw new Error('User not found')
    }
    //Make sure login user matches the job user
    if(job.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedJob)
})
//delete jobs
//route delete /api/jobs/:id
//@access private
const deleteJob = asyncHandler (async(req,res) =>{

    const job = await Job.findById(req.params.id)

    if(!job) {
        res.status(400)
        throw new Error('Job not found')
    }

    const user = await User.findById(req.user.id)
    
    //Check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }
    //Make sure login user matches the job user
    if(job.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
    }

    await job.remove()

    res.status(200).json({id: req.params.id})
    })


module.exports = {
    getJobs,
    postJob,
    editJob,
    deleteJob
}