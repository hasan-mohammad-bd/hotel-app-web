import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Package.css'

const Package = ({singlePackage}) => {
    const navigate = useNavigate()
    const {name, description, img} = singlePackage;
    return (
        <div className='my-card'>
            <img className='img-fluid' src={img} alt="" />
            <h3 className='pt-2'>{name}</h3>
            <p>{description}</p>
            <button className='btn btn-primary' onClick={()=>navigate("/checkout")}>Book Now</button>
        </div>
    );
};

export default Package;