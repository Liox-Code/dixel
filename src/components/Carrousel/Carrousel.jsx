import React from 'react';

//components
import CarrouselItem from '../Carrousel/CarrouselItem';

//styles
import '../../assets/styles/components/Carrousel/Carrousel.css';
import '../../assets/styles/components/Buttons/Circular-Red-Button.css';
import '../../assets/styles/icons/Underline-Circuit.css';
import '../../assets/styles/icons/Arrow-Icon.css';

//icons
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Carrousel = () => {
    return(
        <React.Fragment>
            <div className="carrousel">
                <h2>DEMO DE REALIDAD AUMENTADA</h2>
                <svg className="underline underline-circuit" xmlns="http://www.w3.org/2000/svg" width="343" height="8" viewBox="0 0 343 8">
                    <circle className="underline-circle underline-circle-1" cx="339" cy="4" r="4"/>
                    <circle className="underline-circle underline-circle-2" cx="4" cy="4" r="4"/>
                    <line className="underline-line" x1="4" y1="4" x2="339" y2="4"/>
                </svg>

                <span className="left circula-red-button circula-red-button--left">
                    <RiArrowLeftSLine className="arrow-icon"/>
                </span>
                <div className="carrousel-item-container">
                    <CarrouselItem/>
                    <CarrouselItem/>
                    <CarrouselItem/>
                    <CarrouselItem/>
                    <CarrouselItem/>
                </div>
                <span className="right circula-red-button circula-red-button--right">
                    <RiArrowRightSLine className="arrow-icon"/>
                </span>
            </div>
        </React.Fragment>
    )
}

export default Carrousel;