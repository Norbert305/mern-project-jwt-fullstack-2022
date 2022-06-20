import axios from "axios";


const API_URL =  'http://localhost:5000/api/jobs/'

const createJob = async (jobData, token)=> {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.post(API_URL, jobData, config)

    return response.data
}

//Get user Jobs
const getJobs = async (token)=> {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

//Delete user job
const deleteJob = async (jobId, token)=> {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.delete(API_URL + jobId, config)

    return response.data
}

const jobService = {
    createJob,
    getJobs,
    deleteJob
}

export default jobService