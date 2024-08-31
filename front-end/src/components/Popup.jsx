import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Popup = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} className='model-width'>
            <Modal.Header className='align-items-center justify-content-center'>
                <Modal.Title>Create Job Opening</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='row my-3'>
                    <div className='col'>
                        <label>Job Title</label>
                        <input type='text' placeholder='Full Stack Developer' className='form-control border input-pop'></input>
                    </div>
                    <div className='col'>
                        <label>Company Name</label>
                        <input type='text' placeholder='Amazon, Microsoft, Swiggy' className='form-control border input-pop'></input>
                    </div>
                </div>
                <div className='row my-3'>
                    <div className='col'>
                        <label>Location</label>
                        <input type='text' placeholder='Choose Preferred Location' className='form-control border input-pop'></input>
                    </div>
                    <div className='col'>
                        <label>Job Type</label>
                        <select className="form-select border input-pop">
                            <option value="FullTime">FullTime</option>
                            <option value="PartTime">PartTime</option>
                            <option value="Contract">Contract</option>
                        </select>
                    </div>
                </div>
                <div className='row my-3'>
                    <div className='col'>
                        <label>Salary Range</label>
                        <div className='d-flex'>
                            <input type='text' placeholder='₹ 0' className='form-control me-2 input-pop'></input>
                            <input type='text' placeholder='₹ 12,00,000' className='form-control input-pop'></input>
                        </div>
                    </div>
                    <div className='col'>
                        <label>Application Deadline</label>
                        <input type='date' className='form-control input-pop'></input>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <label className='d-block'>Job Description</label>
                        <textarea className='form-control' rows="8" placeholder='Please share a description to let the candidate know more about the job role'></textarea>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className='justify-content-between'>
                <Button variant="secondary" onClick={handleClose} className='btn-draft'>
                    Save Draft
                </Button>
                <Button variant="primary" onClick={handleClose} className='btn-submit'>
                    Publish
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Popup;
