import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item'

function Listing(props) {
    const {items} = props;

    let data = items.map(element =>
        element.url && <Item key={element.listing_id} item={element}/>
    )
    return (
        <div className="item-list">
            { data }
        </div>
    )
}

Listing.defaultProps = {
    props: []
}

Listing.propTypes = {
    props: PropTypes.arrayOf(Object)
}

export default Listing;
