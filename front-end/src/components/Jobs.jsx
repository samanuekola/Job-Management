import React from 'react';
import jobimage1 from '../images/image 77.png';

const Jobs = ({ jobs, setJobs }) => {
  return (
    <div className='container m-5'>
      <div className='row p-2 g-4'>
        {jobs.map((job, index) => (
          <div className='col-3 p-3' key={index}>
            <div className='p-3 rounded shadow-sm'> 
              <div className='d-flex justify-content-between'>
                <div>
                  <img src={jobimage1} className='job-img' alt="Job" />
                </div>
                <div>
                  <button className='time-job-btn btn btn-light'>{job.time}</button>
                </div>
              </div>
              <div className='my-3'>
                <h6>{job.jobtitle}</h6>
              </div>
              <div className='d-flex justify-content-between'>
                <div>
                  <i className="bi bi-person-plus search"></i>
                  <p className='d-inline search'>{job.exp}</p>
                </div>
                <div>
                  <i className="bi bi-buildings search"></i>
                  <p className='d-inline search'>{job.location}</p>
                </div>
                <div>
                  <i className="bi bi-layers search"></i>
                  <p className='d-inline search'>{job.package}</p>
                </div>
              </div>
              <div className='py-3'>
                <p className='p-points m-0'>{job.des.split('.')[0]}</p>
                <p className='p-points m-0'>{job.des.split('.')[1]}</p>
              </div>
              <div>
                <button className='btn-apply btn btn-primary w-100'>Apply Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
