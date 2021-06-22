import React from 'react';

//images
import portraitImg from '../../assets/static/portrait-image.svg';

//styles
import '../../assets/styles/components/Header/Portrait.css';

const Portrait = () => {
    return(
        <React.Fragment>
            <div className="portrait">
                <div className="portrait--background-Image">
                    <img
                        className="portrait--image"
                        src={portraitImg}
                        alt=""
                    />
                </div>
                <h1>VISUALIZA TUS PROYECTOS 3D CUANDO QUIERAS, DONDE QUIERAS</h1>
                <p>Tus proyectos en Realidad Aumentada desde cualquier dispositivo.</p>
                <a
                    href=""
                    className="portrait--button"
                >
                    ¡LO QUIERO!
                </a>
            </div>
        </React.Fragment>
    )
}

export default Portrait;