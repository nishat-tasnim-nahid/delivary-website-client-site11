import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items,setItems] = useState([])
    useEffect(()=>{
        fetch("https://infinite-spire-73417.herokuapp.com/items")
        .then(res=> res.json())
        .then(data=> setItems(data))
    },[])
    return (
        <div >
            <h2 className="title"><b>---ITEMS---</b></h2>
            <div className='items'>
                {
                    items.map(item => <Item
                    key = {item.key}
                    item={item}
                    ></Item>)
                }
            </div>

        </div>
    );
};

export default Items;