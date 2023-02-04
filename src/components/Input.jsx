import React from 'react'

const Input = (props) => {
    const { handleSearch } = props;
    return (
        <>
            <span className='input-group-text' id='basic-addon1'>ID</span>
            <input type="number" className='form-control' name="id" onChange={handleSearch} />
        </>
    )
}

export default Input