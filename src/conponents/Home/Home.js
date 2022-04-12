import React from 'react';
import Packages from '../Packages/Packages';
import Slider from '../Slider/Slider';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Packages></Packages>
        </div>
    );
};

export default Home;