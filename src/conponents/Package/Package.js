import React from 'react';
import './Package.css'

const Package = ({singlePackage}) => {
    const {name, description, img} = singlePackage;
    return (
        <div className='my-card'>
            <img className='img-fluid' src={img} alt="" />
            <h3 className='pt-2'>{name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Package;