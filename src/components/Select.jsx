import React from 'react'

const Select = (props) => {

    const { handleSearch } = props;



    return (
        <>
            <span className='input-group-text'>Select for</span>
            <select className='form-select' name="category" onChange={handleSearch} >
                <option >Select you category</option>
                <option value="people">People</option>
                <option value="films">Films</option>
                <option value="starships">Starships</option>
                <option value="vehicles">Vehicles</option>
                <option value="species">Species</option>
                <option value="planets">Planets</option>
            </select>
        </>
    )
}

export default Select