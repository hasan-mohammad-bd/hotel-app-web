import React from 'react';
import usePackages from '../../hook/usePackages';
import Package from '../Package/Package';
import './Packages.css'

const Packages = () => {
    const [packages, setPackages] = usePackages()

    return (
        <div className='pb-5'>
            <h2 className='text-center py-5'>Our Packages</h2>
            <div className='container grid-layout'>
            {
                packages.map(singlePackage => <Package singlePackage={singlePackage} key ={singlePackage.id}></Package> )
            }
            </div>
        </div>
    );
};

export default Packages;