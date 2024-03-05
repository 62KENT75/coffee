import blackBeans from "../../icons/logo/beans_logo.svg";
import girl from "../../img/photo/girl.png";
import Header from "../Header";
import CardItemChoise from "../CardItemChoise";
import { cardChoiseData } from "../../data/cardChoiseData";
import Footer from "../Footer";
function About() {
    return(
        <>
            <Header/>
            <div className="information">
                <img src={girl} alt="girl" className="information__img"/>
                <div className="information__text">
                    <h2 className="information__text_title">About our beans</h2>
                    <img src={blackBeans} alt="beans" className="information__text_logo"/>
                    <p className="information__text_descr">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    <br/>
                    <br/>
                    Afraid at highly months do things on at. Situation <br/>
                    recommend objection do intention <br/>
                    so questions. <br/>
                    As greatly removed calling pleased improve an. Last ask him cold feel <br/>
                    met spot shy want. Children me laughing we <br/>
                    prospect answered followed. At it went <br/>
                    is song that held help face.
                    </p>
                </div>
            </div>

            <div className="divider"></div>

            <div className="choise">
                <div className="choise__search">
                    <div className="choise__search_input">
                        <label htmlFor="myInput" className="choise__search_input-label">Lookiing for</label>
                        <input id = "myInput" type="text" placeholder="start typing here..." className="choise__search_input-text"/>
                    </div>
                    <div className="choise__tabs">
                        <label htmlFor="firstTab" className="choise__tab_first">Or filter</label>
                        <button id="firstTab" className="choise__tablink">Brazil</button>
                        <button className="choise__tablink">Kenya</button>
                        <button className="choise__tablink">Columbia</button>
                    </div>
                </div>
                
                
                <div className="choise__items">
                    {cardChoiseData.map((item) => (
                        <CardItemChoise
                        img={item.img}
                        descr={item.descr}
                        country={item.country}
                        price={item.price}
                        />
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default About;