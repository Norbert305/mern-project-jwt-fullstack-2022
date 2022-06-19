import React from 'react'

function JobItem({job}) {
  return (
    <div className='job'>
        <div>
            {new Date(job.createdAt).toLocaleString('en-US')}
        </div>
        <h2>{job.text}</h2>
    </div>
  )
}


export default JobItem
