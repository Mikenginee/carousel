import React from "react";
import Carousel from "./components/Carousel";
import "./Styles.css";
import picture from './images/mountains.jpg'
import picture1 from './images/mountains1.jpg'
import picture2 from './images/mountains2.jpg'
import picture3 from './images/mountains3.jpg'

const App = () => {
    return (
        <Carousel infinite>
            <div src={picture} ></div>
            <div src={picture1} ></div>
            <div src={picture2} ></div>
            <div src={picture3} ></div>
            <div
                align="flex-start"
                padding="4px 10px"
                bgcolor="green"
            >
                <h1>Some content</h1>
            </div>
            <div
                bgcolor="red"
            ><iframe width="560" height="315" src="https://www.youtube.com/embed/o_Ay_iDRAbc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
        </Carousel>
    );
};

export default App;