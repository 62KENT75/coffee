import logo from "../../icons/logo/main_logo.png";

function Header() {
    return(
        <>
            <div className="head">
                <nav>
                    <ul className="head__list">
                        <li className="head__link">
                            <a href="#">
                                <img src={logo} alt="logo" className="head__link-logo"/>
                                <h2 className="head__link-text">Coffee house</h2>
                            </a>
                        </li>
                        <li className="head__link">
                            <a href="#">Our coffee</a>
                        </li>
                        <li className="head__link">
                            <a href="#">For your pleasure</a>
                        </li> 
                    </ul>
                </nav>

                <h1 className="head__title">Our Coffee</h1>
            </div>
        </>
    );
}

export default Header;