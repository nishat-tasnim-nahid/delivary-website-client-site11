import React from 'react';
import { useHistory } from 'react-router';
import './Item.css'

const Item = ({ item }) => {
    const {title, img, description } = item;
    const history = useHistory();
    const handleClick = ()=>{
        history.push('/details')
    }
    return (
        <div className="item">
            <img src={img} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={handleClick} className="px-3 py-1 mb-2 bg-warning bg-opacity-75 border border-info rounded">Book Now</button>
            
        </div>
    );
};

export default Item;