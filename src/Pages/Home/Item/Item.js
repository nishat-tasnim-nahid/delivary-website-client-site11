import React from 'react';
import './Item.css'

const Item = ({ item }) => {
    const { title, img, description } = item;
    return (
        <div className="item">
            <img src={img} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
            <button className="px-3 py-1 mb-2 bg-warning bg-opacity-75 border border-info rounded">See More</button>
        </div>
    );
};

export default Item;