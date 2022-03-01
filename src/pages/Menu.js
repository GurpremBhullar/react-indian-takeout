import React from 'react';
import { Data } from '../data/Data.js';
import MenuItem from '../components/MenuItem.js';
import '../styles/Menu.css';

function Menu() {
    return (
        <div className="menu">
            <div className="menuTitle">
                <div className="menuList">
                    {Data.map((menuItem, key) => {
                        return (
                            <MenuItem
                                key={key}
                                image={menuItem.image}
                                name={menuItem.name}
                                price={menuItem.price}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Menu;