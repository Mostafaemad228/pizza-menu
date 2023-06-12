/* eslint-disable jsx-a11y/img-redundant-alt */
import '../../index.css'
function Pizza() {
    return (

        <div className='pizza'>
            <div>
                <img src={require('../../pizzas/focaccia.jpg')} alt="pizza focaccia" />
            </div>
            <div>
                <h2>focaccia pizza</h2>
                <p>Bread with italian olive oil and rosemary</p>
                <span>20</span>
            </div>
        </div>
    );
}
export default Pizza