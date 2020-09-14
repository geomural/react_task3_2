import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
    const {url, MainImage, title, currency_code, price, quantity} = props.item;

    let cost = "";
    if (currency_code === "USD") {
        cost = "$" + price;
    } else if (currency_code === "EUR") {
        cost = "€" + price;
    } else {
        cost = price + " " + currency_code;
    }

    let level = "item-quantity level-medium";
    if (quantity > 20) {
        level = "item-quantity level-high"
    } else if (quantity <= 10) {
        level = "item-quantity level-low"
    }

    return (
            <div className="item">
                <div className="item-image">
                <a href={url}>
                    <img src={MainImage && MainImage.url_570xN} alt=""/>
                </a>
                </div>
                <div className="item-details">
                <p className="item-title">{title && title.length > 50 ? title.slice(0, 50) + "..." : title}</p>
                <p className="item-price">{cost}</p>
                <p className={level}>{quantity} left</p>
                </div>
            </div>
    )
}

Item.propTypes = {
    url: PropTypes.string,
    MainImage: PropTypes.string,
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number
}

export default Item;
