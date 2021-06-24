import React from 'react';

//Components
import Header from '../components/Header/Header';
import Services from '../components/Services/Services';
import Carrousel from '../components/Carrousel/Carrousel';
import ApplicationAreas from '../components/ApplicationAreas/ApplicationAreas';

const Home = () => {
    return(
        <React.Fragment>
            <Header/>
            <Services/>
            <Carrousel/>
            <ApplicationAreas/>
        </React.Fragment>
    )
}

export default Home;