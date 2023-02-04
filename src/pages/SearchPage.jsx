import React from 'react'
import { useState, useEffect } from 'react';
import Response from './Response';
import axios from 'axios';
import Select from '../components/Select';
import Input from '../components/Input';
import Button from '../components/Button';

const SearchPage = (props) => {

    const [responseData, setResponseData] = useState('');
    const [responseError, setResponseError] = useState(false);
    const [searchInfo, setSearchInfo] = useState({
        category: "",
        id: "",
    });

    const handleSearch = (e) => {
        setSearchInfo({
            ...searchInfo,
            [e.target.name]: e.target.value,
        });
    };

    const getData = (e) => {
        e.preventDefault();
        axios.get(`https://swapi.dev/api/${searchInfo.category}/${searchInfo.id}`)
            .then(response => {
                setResponseData(response.data);
                setResponseError(false);
            })
            .catch(error => {
                setResponseError(true);
            })
    };

    return (
        <form className='container mt-5' onSubmit={getData}>
            <div className="row align-items-end">
                <div className='col input-group'>
                    <Select handleSearch={handleSearch} />
                </div>
                <div className='col input-group'>
                    <Input handleSearch={handleSearch} />
                </div>
                <div className='col'>
                    <Button />
                </div>
                <div className='mt-5'>
                    <Response responseData={responseData} responseError={responseError} />
                </div>
            </div>
        </form >
    )
}

export default SearchPage;