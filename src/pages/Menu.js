import React from 'react';
import { Data } from '../data/Data.js';

function Menu() {
  return (
    <div className="menu">
        <div className="menuTitle">
            <div className="menuList">
                {Data.map((menuItem, key) => {
                    return <div>{menuItem.price}</div>;
                    })}
            </div>
        </div>
    </div>
  );
}

export default Menu;