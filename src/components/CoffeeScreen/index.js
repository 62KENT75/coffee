import Header from "../Header";
import Footer from "../Footer";
import coffee from "../../img/photo/choiseCoffee.jpg"
import blackBeans from "../../icons/logo/beans_logo.svg";

function Coffee({selectedItem, onChangePage}) {
    return(
        <>
            <Header onChangePage={onChangePage}/>

            <div className="coffee">
                <img src={coffee} alt="coffee" className="coffee__img"/>
                <div className="coffee__text">
                    <h2 className="coffee__text_title">About it</h2>
                    <img src={blackBeans} alt="beans" className="coffee__text_logo"/>
                    <p className="coffee__text_country">
                        <span className="bold">Country:</span> {selectedItem?.country}
                    </p>
                    <p className="coffee__text_descr">
                    <span className="bold">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="coffee__text_price">
                        <span className="bold">Price:</span> <span className="bold__price">{selectedItem?.price}</span>
                    </p>
                </div>
            </div>

            <Footer onChangePage={onChangePage}/>
        </>
    );
}
export default Coffee;