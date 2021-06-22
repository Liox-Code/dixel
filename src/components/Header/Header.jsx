import React from 'react';

//components
import Portrait from './Portrait';

//images
import logo from '../../assets/static/logo.svg';
import menu from '../../assets/static/menu.svg';

//styles
import '../../assets/styles/components/Header/Header.css';
import '../../assets/styles/icons/menuIcon.css';

const Header = () => {
    return(
        <React.Fragment>
            <div className="header">
                <img
                    className="logo-header"
                    src={logo}
                    alt=""
                />
                <img
                    className="menu-header"
                    src={menu}
                    alt=""
                />
            </div>
            <Portrait/>
        </React.Fragment>
    )
}

export default Header;