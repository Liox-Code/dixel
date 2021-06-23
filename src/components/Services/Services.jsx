import React from 'react';

//components
import Service from './Service';

//styles
import '../../assets/styles/components/Services/Services.css';
import '../../assets/styles/components/Services/Animation.css';

//images
import webApp from '../../assets/static/web-app.svg';
import ar from '../../assets/static/augmented-reality.svg';
import app from '../../assets/static/app.svg';

const Services = () => {
    const listServices  = [
        {
            "id": 1,
            "title": "Tu Aplicación Web Profesional",
            "description": "Muchas empresas han decidido instalarse en el entorno digital puesto que está comprobado que tener una web es parte muy importante de un negocio.",
            "image": ar 
        },
        {
            "id": 2,
            "title": "Realidad Aumentada en tu negocio",
            "description": `Con la realidad aumentada se puede experimentar la vida de una forma nunca antes vista.
                            Las empresas de todo tipo se pueden beneficiar de su capacidad para impactar en los clientes ofreciéndoles experiencias didácticas y útiles durante el proceso de compra.`,
            "image": ar         
        },
        {
            "id": 3,
            "title": "Tu propia Aplicación",
            "description": "Las PWA, son aplicaciones web que no dependen de una instalación o una tienda para su descarga. Únicamente se requiere acceso a Internet para encontrarlas y poder anclarlas al dispositivo en cuestión, aunque su funcionamiento posterior puede no depender de conexión a la red.",
            "image": ar 
        }
    ]
    
    return(
        <React.Fragment>
            <div className="services">
                <h2>¿QUÉ TE OFRECEMOS?</h2>
                <div className="list-services">
                    {listServices.map( service =>
                        <Service key={service.id} service={service}/>
                    )}
                </div>
                {/* <svg className="circuit-animation" xmlns="http://www.w3.org/2000/svg" width="298.01" height="870.89" viewBox="0 0 298.01 870.89">
                    <circle className="cls cls-1" cx="4" cy="4" r="4"/>
                    <circle className="cls cls-1" cx="294.01" cy="4" r="4"/>
                    <line className="cls cls-2" x1="4" y1="4" x2="147" y2="4"/>
                    <line className="cls cls-2" x1="294.01" y1="4" x2="147" y2="4"/>
                    <circle className="cls cls-1" cx="48.21" cy="174.99" r="5"/>
                    <circle className="cls cls-1" cx="48.21" cy="478.64" r="5"/>
                    <circle className="cls cls-1" cx="48.21" cy="865.89" r="5"/>
                    <polyline className="cls cls-3" points="149.71 4 149.71 24.48 4 24.48 4 865.89"/>
                    <line className="cls cls-4" x1="4" y1="174.99" x2="48.21" y2="174.99"/>
                    <line className="cls cls-5" x1="4" y1="478.64" x2="48.21" y2="478.64"/>
                    <line className="cls cls-6" x1="4" y1="865.89" x2="48.21" y2="865.89"/>
                </svg> */}
                <svg className="circuit-animation" xmlns="http://www.w3.org/2000/svg" width="298.01" height="870.89" viewBox="0 0 298.01 870.89">
                    <circle className="cls cls-1" cx="4" cy="4" r="4"/>
                    <circle className="cls cls-1" cx="294.01" cy="4" r="4"/>
                    <line className="cls cls-2" x1="4" y1="4" x2="147" y2="4"/>
                    <line className="cls cls-2" x1="294.01" y1="4" x2="147" y2="4"/>
                    <circle className="cls cls-1" cx="48.21" cy="174.99" r="5"/>
                    <circle className="cls cls-1" cx="48.21" cy="478.64" r="5"/>
                    <circle className="cls cls-1" cx="48.21" cy="850" r="5"/>
                    <polyline className="cls cls-3" points="149.71 4 149.71 24.48 4 24.48 4 850"/>
                    <line className="cls cls-4" x1="4" y1="174.99" x2="48.21" y2="174.99"/>
                    <line className="cls cls-5" x1="4" y1="478.64" x2="48.21" y2="478.64"/>
                    <line className="cls cls-6" x1="4" y1="850" x2="48.21" y2="850"/>
                </svg>
            </div>
        </React.Fragment>
    )
}

export default Services;