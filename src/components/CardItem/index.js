function CardItem({img, descr, price}) {
    return(
        <>
            <div className="recommended__item">
                <img src={img} alt="card" className="recommended__item-img"/>
                <p className="recommended__item-text">{descr}</p>
                <h2 className="recommended__item-descr">{price}</h2>
            </div>
        </>
    );
}

export default CardItem;