import blackLogo from "../../icons/logo/black_logo.png";
import blackBeans from "../../icons/logo/beans_logo.svg";

function Footer(props) {
    return (
        <>
            <div className="footer">
                <nav>
                    <ul className="footer__list">
                        <li onClick={() => props.onChangePage('main')} className="footer__link">
                            <a href="#">
                                <img src={blackLogo} alt="logo" className="footer__link-logo"/>
                                <h2 className="footer__link-text">Coffee house</h2>
                            </a>
                        </li>
                        <li onClick={() => props.onChangePage('about')} className="footer__link">
                            <a href="#">Our coffee</a>
                        </li>
                        <li onClick={() => props.onChangePage('pleasure')} className="footer__link">
                            <a href="#">For your pleasure</a>
                        </li> 
                    </ul>
                </nav>
                <img src={blackBeans} alt="beans" className="footer__logo"/>
            </div>
        </>
    );
}

export default Footer;