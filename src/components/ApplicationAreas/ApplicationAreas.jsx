import React from 'react';

//components
import ApplicationArea from './ApplicationArea';

//styles
import '../../assets/styles/components/ApplicationAreas/ApplicationAreas.css';

const ApplicationAreas = () => {
    return(
        <React.Fragment>
            <div className="application-areas">
                <h2>ÁREAS DONDE SE PUEDE APLICAR REALIDAD AUMENTADA</h2>
                <svg className="underline underline-circuit" xmlns="http://www.w3.org/2000/svg" width="343" height="8" viewBox="0 0 343 8">
                    <circle className="underline-circle underline-circle-1" cx="339" cy="4" r="4"/>
                    <circle className="underline-circle underline-circle-2" cx="4" cy="4" r="4"/>
                    <line className="underline-line" x1="4" y1="4" x2="339" y2="4"/>
                </svg>
                <div className="application-areas--container">
                    <ApplicationArea/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ApplicationAreas;