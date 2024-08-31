import React from 'react';

const Filter = () => {
  return (
    <div className='container m-3'>
      <div className='row'>
        <div className='col-3 d-flex align-items-center'>
          <i className="bi bi-search search me-2"></i>
          <input type='text' placeholder='Search By Job Title, Role' className='filter-1 flex-grow-1 px-3' />
        </div>
        <div className='col-3 d-flex align-items-center position-relative'>
          <i className="bi bi-geo-alt search me-2"></i>
          <input type='text' placeholder='Preferred Location' className='filter-1 flex-grow-1 px-3' />
          <i className="bi bi-chevron-compact-down position-absolute end-0 pe-3"></i>
        </div>
        <div className='col-3 d-flex align-items-center font-color-filter'>
          <i className="bi bi-person search me-2"></i>
          <span className="me-auto">Job type</span>
          <select className="form-select w-auto border-0 ms-2">
            <option></option>
            <option value="onsite">On site</option>
            <option value="remote">Remote</option>
          </select>
        </div>
        <div className='col-3 d-flex-col align-items-center'>
            <label> Salary Per Month</label>
            <input type='range' className='range'></input>
        </div>
      </div>
    </div>
  );
}

export default Filter;
