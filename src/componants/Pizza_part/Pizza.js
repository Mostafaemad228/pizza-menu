import React from 'react';
import '../../index.css';

function Pizza({ Pizzadata }) {
    console.log(Pizzadata);

    return (
        <div>
            {Pizzadata.map((pizza) => (
                <div className='pizza' key={pizza.name}>
                    <div>
                        <img src={require(`../../${pizza.photoName}`)} alt={pizza.name} />
                    </div>
                    <div>
                        <h2>{pizza.name}</h2>
                        <p>{pizza.ingredients}</p>
                        <span>{pizza.price}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Pizza;
