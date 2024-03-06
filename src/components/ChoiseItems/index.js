import CardItemChoise from "../CardItemChoise";
import { cardChoiseData } from "../../data/cardChoiseData";
import { useState } from "react";

function ChoiseItems() {
    const [data, setData] = useState(cardChoiseData);
    return(
        <>
            <div className="choise__items">
                {data.map((item, i) => (
                    <CardItemChoise
                    key={i}
                    img={item.img}
                    descr={item.descr}
                    country={item.country}
                    price={item.price}
                    />
                ))}
            </div>
        </>
    );
}
export default ChoiseItems;