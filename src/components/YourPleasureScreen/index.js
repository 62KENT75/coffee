import HeaderPleasure from '../HeaderPleasure';
import goods from "../../img/photo/goods.png"
import blackBeans from "../../icons/logo/beans_logo.svg";
import ChoiseItems from "../ChoiseItems";
import Footer from "../Footer";

function Pleasure({onChangePage, onSelectedItem}) {
    return(
        <>
        <HeaderPleasure onChangePage={onChangePage}/>

        <div className="information">
            <img src={goods} alt="goods" className="information__img"/>
            <div className="information__text">
                <h2 className="information__text_title">About our goods</h2>
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
        <ChoiseItems
        onSelectedItem={onSelectedItem}
        />
        <Footer onChangePage={onChangePage}/>
        </>
    );
}
export default Pleasure;