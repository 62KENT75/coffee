function CardItemChoise({img, descr, country, price}) {
    return(
        <>
            <div className="choise__item">
                <img src={img} alt="card" className="choise__item-img"/>
                <p className="choise__item-descr">{descr}</p>
                <p className="choise__item-text">{country}</p>
                <h2 className="choise__item-price">{price}</h2>
            </div>
        </>
    );
}

export default CardItemChoise;