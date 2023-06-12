import Pizza from '../Pizza_part/Pizza';

function Menu({ Pizzadata }) {
    return (
        <div className='Pizzas'>
            <Pizza Pizzadata={Pizzadata} />
        </div>
    )
}

export default Menu
