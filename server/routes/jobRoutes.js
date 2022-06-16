const express = require('express');// common js
const router = express.Router()
const {getJobs, postJob, editJob, deleteJob} =  require('../controllers/jobController')

const {protect} = require('../middleware/authMiddleware')

//router.route('/).get(getJobs).post(setJob)-------could use
//router.route('/:id).delete(getJobs).put(editJob)-----

router.get('/',protect, getJobs)
router.post('/', protect, postJob)
router.put('/:id', protect, editJob)
router.delete('/:id', protect, deleteJob)

module.exports = router