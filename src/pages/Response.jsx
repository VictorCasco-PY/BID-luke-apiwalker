import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Error from '../components/Error';

const Response = (props) => {

    const { responseData, responseError } = props;

    return (
        <div>
            {responseError ?
                <>
                    <Error />
                </>
                :
                <ul>
                    {Object.entries(responseData).map(([key, value]) => (
                        <li key={key} className="list-unstyled mt-1">
                            <span><strong>{key.replace("_", " ").split(" ").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(" ")}:  </strong></span>
                            <span>{value}</span>
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
};

export default Response;