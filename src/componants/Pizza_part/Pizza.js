import React, { Fragment } from 'react';
import '../../index.css';

function Pizza({ Pizzadata }) {

    return (
        <React.Fragment>
        {Pizzadata.map((pizza) => (
            <li className={`pizza ${pizza.soldOut ? 'sold-out':'' }`} key={pizza.name}>
                    <div >
                        <img src={require(`../../${pizza.photoName}`)} alt={pizza.name} />
                    </div>
                    <div>
                        <h2>{pizza.name}</h2>
                        <p>{pizza.ingredients}</p>
                    <span >{pizza.soldOut ? "Sold Out" : pizza.price+`$`  } </span>
                    </div>
                </li>
            ))}
        </React.Fragment>
    );
}

export default Pizza;
