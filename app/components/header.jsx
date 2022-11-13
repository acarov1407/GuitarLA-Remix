import {Link} from '@remix-run/react';
import Nav from './nav';
import logo from '../../public/img/logo.svg';

function Header() {
    return (
        <header className="header" id="header">
            <div className="header__content container">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="logo Guitar LA" className="header__logoimg" />
                    </Link>
                </div>
                <Nav />
            </div>
        </header>
    )
}

export default Header