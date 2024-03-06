import logo from "../../icons/logo/main_logo.png";
import blackBeans from "../../icons/logo/beans_logo.svg";
import whiteBeans from "../../icons/logo/white_beans.svg";
import CardItem from "../CardItem";
import { cardData } from "../../data/cardData";
import Footer from '../Footer';

function Main(props) {
    return (
        <div>
            <div className="menu">
                <nav>
                    <ul className="menu__list">
                        <li onClick={() => props.onChangePage('main')} className="menu__link">
                            <a href="#">
                                <img src={logo} alt="logo" className="menu__link-logo"/>
                                <h2 className="menu__link-text">Coffee house</h2>
                            </a>
                        </li>
                        <li onClick={() => props.onChangePage('about')} className="menu__link">
                            <a href="#">
                                <h2 className="menu__link-text">Our coffee</h2>
                            </a>
                        </li>
                        <li onClick={() => props.onChangePage('pleasure')} className="menu__link">
                            <a href="#">
                                <h2 className="menu__link-text">For your pleasure</h2>
                            </a>
                        </li> 
                    </ul>
                </nav>

                <div className="description">
                    <h1 className="description__title">Everything You Love About Coffee</h1>
                    <img src={whiteBeans} alt="beans" className="description__logo"/>
                    <h2 className="description__descr">
                        We makes every day full of energy and taste
                        <br></br>
                        Want to try our beans?
                    </h2>
                    <button className="description__btn">More</button>
                </div>
            </div>

            <div className="about">
                <h2 className="about__title">About Us</h2>
                <img src={blackBeans} alt="beans" className="about__logo"/>
                <p className="about__descr">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                    <br></br>
                    <br></br>
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                </p>
            </div>

            <div className="recommended">
                <h2 className="recommended__title">Our best</h2>
                <div className="recommended__items">
                    {cardData.map((item, i) => (
                        <CardItem
                        key={i}
                        img={item.img}
                        descr={item.descr}
                        price={item.price}
                        />
                    ))}
                </div>
            </div>

            <Footer onChangePage={props.onChangePage}/>
        </div>
    );
}
    export default Main;