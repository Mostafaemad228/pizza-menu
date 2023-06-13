import React , { Fragment } from 'react';
import Pizza from '../Pizza_part/Pizza';
function Menu({ Pizzadata }) {
    const PizzaNum = Pizzadata.length;
    return (
       <React.Fragment>
            {PizzaNum > 0 ? <ul className='pizzas'>
                <Pizza Pizzadata={Pizzadata}  />
            </ul> : <h1 className='close'> No Pizza avilable rightnow </h1>
            }
       </React.Fragment>
    )
}

export default Menu
